// Ứng dụng chính 3D Bảo tàng Nhà giáo Việt Nam
// Chỉ hiện thông tin khi người dùng click vào hiện vật/khung tranh, không để chữ đè lên cây/hình 3D, có mũi tên di chuyển sang các phòng

class VietnamTeachersMuseumApp {
  constructor() {
    this.container = document.getElementById('canvas-container');
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0d1b2e);
    this.scene.fog = new THREE.FogExp2(0x101f33, 0.012);

    this.camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      140
    );

    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.12;
    this.container.appendChild(this.renderer.domElement);

    // Trạng thái ngoại cảnh (Landing Scene) & Di chuyển
    this.isExterior = true;
    this.isTransitioning = false;
    this.transitionStartTime = 0;
    this.transitionDuration = 4200;
    this.flyWaypoints = [];
    this.cameraPos = new THREE.Vector3(0, 4.0, 58.0);
    this.targetCameraPos = new THREE.Vector3(0, 4.0, 58.0);
    this.lookAtPoint = new THREE.Vector3(0, 4.2, 39.5);
    this.targetLookAt = new THREE.Vector3(0, 4.2, 39.5);

    this.yaw = 0;
    this.pitch = 0.01;
    this.isDragging = false;
    this.dragMoved = false;
    this.downMouse = { x: 0, y: 0 };
    this.prevMouse = { x: 0, y: 0 };
    this.keys = {
      KeyW: false,
      KeyA: false,
      KeyS: false,
      KeyD: false,
      ArrowUp: false,
      ArrowDown: false,
      ArrowLeft: false,
      ArrowRight: false
    };

    this.cameraMode = 'exterior';
    this.activeZoneId = 'exterior';
    this.orbitAngle = 0;
    this.orbitRadius = 3.6;
    this.orbitHeight = 2.4;

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.hoveredArtifact = null;
    this.selectedArtifact = null;
    this.activeZoneId = 'grand-hall';

    this.isTourActive = false;
    this.tourIndex = 0;
    this.tourTimer = null;

    // Cấu hình kết nối ngầm lưu trữ lời tri ân của học sinh (ẩn hoàn toàn khỏi giao diện công khai)
    this.googleSheetId = '1NTR--NxzjtvlzQVDhuVNYQ5q71tVJ8i-4DMnW3uMdSg';
    this.sheetWebAppUrl =
      'https://script.google.com/macros/s/AKfycbx6LKL6AeWpq0-16bUCnbzifahJus3LepSPmHMYirICKuEUXTxv99jZaJFbND2oPol4/exec';
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const customUrl = urlParams.get('scriptUrl') || localStorage.getItem('custom_sheet_webapp_url');
      if (customUrl) {
        this.sheetWebAppUrl = customUrl;
      }
    } catch (e) {}

    this.tributes = this.loadSavedTributes();
    this.memories = this.loadSavedMemories();
    this.activeTributeIndex = 0;
    this.tributeSearchQuery = '';



    this.audio = new window.MuseumAudioEngine();
    this.docPlayer = null;
    this.clock = new THREE.Clock();

    this.initMuseum();
    this.initFloorTargetMarker();
    this.initUI();
    this.bindEvents();
    this.loadTributesFromGoogleSheet();
    this.loadMemoriesFromGoogleSheet();
    this.animate();

    // Hỗ trợ liên kết trực tiếp & kiểm thử tiện lợi (ví dụ: ?zone=room-teacher-heart)
    try {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('enter') || urlParams.has('zone') || urlParams.has('action')) {
        document.getElementById('welcome-overlay')?.classList.add('hidden');
      }
      const targetZone = urlParams.get('zone');
      if (targetZone) {
        setTimeout(() => {
          this.navigateToZone(targetZone);
        }, 300);
      }

    } catch (e) {}
  }

  // ==================== BỘ CHUẨN HÓA VIẾT HOA & CHÍNH TẢ TIẾNG VIỆT TỰ ĐỘNG ====================
  formatVietnameseProperName(raw) {
    if (!raw) return '';
    const UPPER_TOKENS = new Set([
      'GS', 'PGS', 'TS', 'THS', 'BS', 'NGND', 'NGƯT', 'THPT', 'THCS', 'TH', 'ĐH', 'CĐ', 'GDĐT', 'GDTX', 'TP', 'TP.'
    ]);
    return String(raw)
      .trim()
      .replace(/\s+/g, ' ')
      .split(' ')
      .map((token) => {
        if (!token) return '';
        if (token === '-' || token === '–') return '–';
        const cleanUpper = token.toLocaleUpperCase('vi-VN');
        if (UPPER_TOKENS.has(cleanUpper.replace(/\./g, ''))) {
          return cleanUpper;
        }
        return token.charAt(0).toLocaleUpperCase('vi-VN') + token.slice(1).toLocaleLowerCase('vi-VN');
      })
      .join(' ');
  }

  formatClassCode(raw) {
    if (!raw) return '';
    return String(raw)
      .trim()
      .replace(/\s+/g, ' ')
      .split(' ')
      .map((token) => {
        if (!token) return '';
        // Nếu có chứa chữ số (VD: 12a1, k71a, 9a2) -> viết hoa toàn bộ mã lớp
        if (/\d/.test(token)) {
          return token.toLocaleUpperCase('vi-VN');
        }
        return token.charAt(0).toLocaleUpperCase('vi-VN') + token.slice(1).toLocaleLowerCase('vi-VN');
      })
      .join(' ');
  }

  formatVietnameseSchool(raw) {
    if (!raw) return '';
    const SCHOOL_ACRONYMS = new Set([
      'THPT', 'THCS', 'TH', 'MN', 'ĐH', 'CĐ', 'HV', 'GDĐT', 'GDTX', 'GDNN',
      'PTTH', 'PTCS', 'TW', 'QG', 'ĐHQG', 'Bách', 'I', 'II', 'III', 'IV', 'V', 'TP', 'TP.'
    ]);
    return String(raw)
      .trim()
      .replace(/\s+/g, ' ')
      .split(' ')
      .map((token) => {
        if (!token) return '';
        const up = token.toLocaleUpperCase('vi-VN');
        if (SCHOOL_ACRONYMS.has(up) || SCHOOL_ACRONYMS.has(up.replace(/\./g, ''))) {
          return up;
        }
        return token.charAt(0).toLocaleUpperCase('vi-VN') + token.slice(1).toLocaleLowerCase('vi-VN');
      })
      .join(' ');
  }

  formatVietnameseProvince(raw) {
    if (!raw) return '';
    const cleaned = String(raw).trim().replace(/\s+/g, ' ');
    const lower = cleaned.toLocaleLowerCase('vi-VN');
    if (
      lower === 'hcm' ||
      lower === 'tphcm' ||
      lower === 'tp hcm' ||
      lower === 'tp.hcm' ||
      lower === 'tp. hcm' ||
      lower === 'tp hồ chí minh' ||
      lower === 'hồ chí minh' ||
      lower === 'sài gòn'
    ) {
      return 'TP. Hồ Chí Minh';
    }
    if (lower === 'hn' || lower === 'ha noi' || lower === 'tp hà nội') {
      return 'Hà Nội';
    }
    if (lower === 'brvt' || lower.includes('bà rịa')) {
      return 'Bà Rịa – Vũng Tàu';
    }
    return this.formatVietnameseProperName(cleaned);
  }

  formatVietnameseSentence(raw) {
    if (!raw) return '';
    let s = String(raw).trim().replace(/\s+/g, ' ');
    if (!s) return '';
    // Viết hoa chữ cái đầu tiên của thông điệp và sau dấu chấm câu (. ! ?)
    s = s.charAt(0).toLocaleUpperCase('vi-VN') + s.slice(1);
    s = s.replace(/([.!?]\s+)([a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ])/g, (m, sep, ch) => {
      return sep + ch.toLocaleUpperCase('vi-VN');
    });
    return s;
  }

  loadSavedMemories() {
    try {
      const raw = localStorage.getItem('vn_museum_memories_v1');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const normalized = parsed.map((m) => ({
            ...m,
            photo: m.photo || m.photoAfter || m.photoBefore || '',
            photoAfter: m.photo || m.photoAfter || m.photoBefore || '',
            photoBefore: m.photo || m.photoAfter || m.photoBefore || '',
            workplace: m.workplace || [m.school, m.province].filter(Boolean).join(' • ') || m.teacherTitle || 'Ngành Giáo dục Việt Nam',
            teacherInfo: m.teacherInfo || m.story || m.teacherTitle || '',
            senderName: m.senderName || m.studentName || 'Học sinh'
          }));
          window.MEMORY_WALL_DATA = normalized;
          return normalized;
        }
      }
    } catch (e) {
      console.warn('Không đọc được localStorage memories:', e);
    }
    return window.MEMORY_WALL_DATA || [];
  }

  saveMemoriesToLocal() {
    try {
      localStorage.setItem('vn_museum_memories_v1', JSON.stringify(window.MEMORY_WALL_DATA || []));
    } catch (e) {
      console.warn('Không lưu được localStorage memories:', e);
    }
  }

  loadSavedTributes() {
    const initial = (window.INITIAL_TRIBUTES || []).map((t, idx) => ({
      id: `init-${idx + 1}`,
      sender: t.senderName || t.sender,
      senderName: t.senderName || t.sender,
      className: t.className || '',
      school: t.school || '',
      province: t.province || '',
      teacher: t.teacher,
      message: t.message,
      createdAt: t.timestamp || t.createdAt || 'Thiệp tri ân tiêu biểu'
    }));
    try {
      const raw = localStorage.getItem('vn_museum_tributes_v3');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (err) {
      console.warn('Không đọc được localStorage tributes:', err);
    }
    return initial;
  }

  saveTributesToLocal() {
    try {
      localStorage.setItem('vn_museum_tributes_v3', JSON.stringify(this.tributes));
    } catch (err) {
      console.warn('Không lưu được localStorage tributes:', err);
    }
  }

  // Đọc trực tiếp dữ liệu từ Google Sheet (hỗ trợ cả bảng 7 cột mới và bảng 4 cột cũ) bằng JSONP
  loadTributesFromGoogleSheet() {
    try {
      window.google = window.google || {};
      window.google.visualization = window.google.visualization || {};
      window.google.visualization.Query = {
        setResponse: (response) => {
          if (!response || response.status !== 'ok' || !response.table || !Array.isArray(response.table.rows)) {
            return;
          }
          const sheetItems = [];
          response.table.rows.forEach((r, idx) => {
            const cells = r.c || [];
            const c = (i) => (cells[i]?.v != null ? String(cells[i].v).trim() : '');
            const v0 = c(0), v1 = c(1), v2 = c(2), v3 = c(3), v4 = c(4), v5 = c(5), v6 = c(6);

            // Bỏ qua dòng tiêu đề nếu có
            if (
              v0.toLowerCase().includes('thời gian') ||
              v1.toLowerCase().includes('người gửi') ||
              v1.toLowerCase().includes('học sinh') ||
              v0.toLowerCase().includes('họ tên')
            ) {
              return;
            }

            // Cấu trúc 7 cột chuẩn: Thời gian | Người gửi | Lớp | Trường | Tỉnh/Thành phố | Kính gửi Thầy/Cô | Thông điệp
            if (v1 && (v5 || v6)) {
              const sName = this.formatVietnameseProperName(v1);
              const sClass = this.formatClassCode(v2);
              const sSchool = this.formatVietnameseSchool(v3);
              const sProv = this.formatVietnameseProvince(v4);
              const sTeacher = this.formatVietnameseProperName(v5);
              const sMsg = this.formatVietnameseSentence(v6);
              if (sName && sMsg) {
                sheetItems.push({
                  id: `sheet-${idx}`,
                  createdAt: v0 || 'Lưu trữ trên Google Sheet',
                  sender: sName,
                  senderName: sName,
                  className: sClass,
                  school: sSchool,
                  province: sProv,
                  teacher: sTeacher || 'Thầy Cô Kính Mến',
                  message: sMsg
                });
              }
            } else if (v1 && v2 && v3) {
              // Tương thích bảng 4 cột cũ
              const sName = this.formatVietnameseProperName(v1);
              sheetItems.push({
                id: `sheet-${idx}`,
                createdAt: v0 || 'Lưu trữ trên Google Sheet',
                sender: sName,
                senderName: sName,
                className: '',
                school: '',
                province: '',
                teacher: this.formatVietnameseProperName(v2),
                message: this.formatVietnameseSentence(v3)
              });
            }
          });

          if (sheetItems.length > 0) {
            const existingKeys = new Set(this.tributes.map((t) => `${t.senderName || t.sender}|${t.teacher}|${t.message}`));
            let added = 0;
            sheetItems.reverse().forEach((item) => {
              const key = `${item.senderName || item.sender}|${item.teacher}|${item.message}`;
              if (!existingKeys.has(key)) {
                this.tributes.unshift(item);
                existingKeys.add(key);
                added++;
              }
            });
            if (added > 0) {
              this.saveTributesToLocal();
              this.builder.rebuildWishingTreeCards(this.tributes);
              this.renderTributesList();
            }
          }
        }
      };

      const script = document.createElement('script');
      script.src = `https://docs.google.com/spreadsheets/d/${this.googleSheetId}/gviz/tq?tqx=out:json&_=${Date.now()}`;
      script.async = true;
      document.body.appendChild(script);
    } catch (e) {
      console.warn('Không thể tải JSONP từ Google Sheet:', e);
    }
  }

  // Đọc trực tiếp dữ liệu từ Google Sheet Tab "ảnh" (gid: 99743454) bằng GViz JSONP
  loadMemoriesFromGoogleSheet() {
    try {
      const cbName = 'handleGVizMemoriesTab2_' + Date.now();
      window[cbName] = (response) => {
        try {
          delete window[cbName];
          if (!response || response.status !== 'ok' || !response.table || !Array.isArray(response.table.rows)) {
            return;
          }
          const memoriesFromSheet = [];
          response.table.rows.forEach((r, idx) => {
            const cells = r.c || [];
            const c = (i) => (cells[i]?.f != null ? String(cells[i].f).trim() : (cells[i]?.v != null ? String(cells[i].v).trim() : ''));
            const vTime = c(0);
            const vSender = c(1);
            const vClass = c(2);
            const vSchool = c(3);
            const vCity = c(4);
            const vTeacher = c(5);
            const vBio = c(6);
            const vPhoto = c(7);

            // Bỏ qua dòng tiêu đề hoặc dữ liệu test rác nếu có
            if (
              !vTeacher ||
              vTime.toLowerCase().includes('thời gian') ||
              vSender.toLowerCase().includes('người gửi') ||
              vTeacher.toLowerCase().includes('nhà giáo') ||
              vTeacher.toLowerCase().includes('test') ||
              vPhoto.toLowerCase().includes('link ảnh')
            ) {
              return;
            }

            if (vTeacher && (vPhoto || vBio)) {
              const workplace = [vSchool, vClass, vCity].filter(Boolean).join(' • ') || 'Đóng góp tư liệu';
              let directPhoto = vPhoto;
              if (directPhoto.includes('drive.google.com/file/d/')) {
                const idMatch = directPhoto.match(/\/d\/([a-zA-Z0-9_-]+)/);
                if (idMatch) directPhoto = 'https://lh3.googleusercontent.com/d/' + idMatch[1];
              } else if (directPhoto.includes('id=')) {
                const idMatch = directPhoto.match(/id=([a-zA-Z0-9_-]+)/);
                if (idMatch) directPhoto = 'https://lh3.googleusercontent.com/d/' + idMatch[1];
              }

              // Fallback an toàn nếu link ảnh trống hoặc không hợp lệ
              if (!directPhoto || directPhoto.toLowerCase().includes('link') || (!directPhoto.startsWith('http') && !directPhoto.startsWith('data:image'))) {
                directPhoto = 'assets/teachers/dt_26_nguyen_tat_thanh.jpg';
              }

              memoriesFromSheet.push({
                id: `sheet-mem-${idx}`,
                teacherName: this.formatVietnameseProperName(vTeacher),
                workplace: workplace,
                school: vSchool,
                className: vClass,
                province: vCity,
                teacherInfo: this.formatVietnameseSentence(vBio),
                teacherTitle: workplace,
                senderName: this.formatVietnameseProperName(vSender) || 'Học sinh',
                studentName: this.formatVietnameseProperName(vSender) || 'Học sinh',
                photo: directPhoto,
                photoAfter: directPhoto,
                photoBefore: directPhoto,
                story: this.formatVietnameseSentence(vBio),
                category: 'modern',
                createdAt: vTime || 'Lưu trữ trên Bảo tàng'
              });
            }
          });

          if (memoriesFromSheet.length > 0) {
            window.MEMORY_WALL_DATA = window.MEMORY_WALL_DATA || [];
            const existingKeys = new Set(window.MEMORY_WALL_DATA.map((m) => `${m.teacherName}|${m.senderName}`));
            let addedCount = 0;
            memoriesFromSheet.reverse().forEach((m) => {
              const key = `${m.teacherName}|${m.senderName}`;
              if (!existingKeys.has(key)) {
                window.MEMORY_WALL_DATA.unshift(m);
                existingKeys.add(key);
                addedCount++;
              }
            });
            if (addedCount > 0) {
              this.saveMemoriesToLocal();
              this.renderMemoryLibraryCards('');
              if (this.builder && typeof this.builder.updateMemoryWallPage === 'function') {
                this.builder.updateMemoryWallPage(0);
              }
            }
          }
        } catch (err) {
          console.warn('Lỗi phân tích GViz tab ảnh:', err);
        }
      };

      const script = document.createElement('script');
      // Tab "ảnh" có gid=99743454 (đọc chính xác 100% không bị phụ thuộc tên tab)
      script.src = `https://docs.google.com/spreadsheets/d/${this.googleSheetId}/gviz/tq?gid=99743454&tqx=responseHandler:${cbName}&_=${Date.now()}`;
      script.async = true;
      document.body.appendChild(script);
    } catch (e) {
      console.warn('Không thể tải dữ liệu tab ảnh:', e);
    }
  }

  initMuseum() {
    this.builder = new window.MuseumBuilder(this.scene);
    this.builder.buildMuseum(window.ARTIFACTS);
    this.builder.rebuildWishingTreeCards(this.tributes);
    this.syncYawPitchFromLookAt();
  }

  initFloorTargetMarker() {
    const ringGeo = new THREE.RingGeometry(0.24, 0.38, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xe6c173,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0
    });
    this.walkMarker = new THREE.Mesh(ringGeo, ringMat);
    this.walkMarker.rotation.x = -Math.PI / 2;
    this.walkMarker.position.y = 0.03;
    this.scene.add(this.walkMarker);
    this.walkMarkerOpacity = 0;
  }

  syncYawPitchFromLookAt() {
    const dir = new THREE.Vector3().subVectors(this.targetLookAt, this.targetCameraPos).normalize();
    this.yaw = Math.atan2(dir.x, dir.z);
    const minPitch = Math.PI / 2 - 1.9;
    const maxPitch = Math.PI / 2 - 1.2;
    this.pitch = Math.asin(Math.max(minPitch, Math.min(maxPitch, dir.y)));
  }

  updateLookAtFromYawPitch() {
    const dist = 6.0;
    const dx = Math.sin(this.yaw) * Math.cos(this.pitch) * dist;
    const dy = Math.sin(this.pitch) * dist;
    const dz = Math.cos(this.yaw) * Math.cos(this.pitch) * dist;
    this.targetLookAt.set(
      this.targetCameraPos.x + dx,
      this.targetCameraPos.y + dy,
      this.targetCameraPos.z + dz
    );
  }

  // ==================== KHỞI TẠO GIAO DIỆN NGƯỜI DÙNG (UI) ====================
  initUI() {
    // 1. Thanh chọn 5 Không gian trưng bày phía dưới
    const zoneBar = document.getElementById('zone-nav-bar');
    if (zoneBar) {
      zoneBar.innerHTML = window.MUSEUM_ZONES.map(
        (z, idx) => `
        <button type="button" class="zone-btn ${z.id === this.activeZoneId ? 'active' : ''}" data-zone="${z.id}">
          <span class="zone-num">0${idx + 1}</span>
          <span class="zone-label">${z.name}</span>
        </button>
      `
      ).join('');

      zoneBar.querySelectorAll('.zone-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          this.audio.playClickChime();
          this.stopGuidedTour();
          this.navigateToZone(btn.dataset.zone);
        });
      });
    }

    // 1b. Danh sách 5 Không gian bên trong Menu Trung Tâm (#menu-zone-list)
    const menuZoneList = document.getElementById('menu-zone-list');
    if (menuZoneList) {
      menuZoneList.innerHTML = window.MUSEUM_ZONES.map(
        (z, idx) => `
        <button type="button" class="menu-zone-item ${z.id === this.activeZoneId ? 'active' : ''}" data-menu-zone="${z.id}">
          <span><span class="mz-num">0${idx + 1}</span>${z.name}</span>
          <span>➔</span>
        </button>
      `
      ).join('');

      menuZoneList.querySelectorAll('[data-menu-zone]').forEach((btn) => {
        btn.addEventListener('click', () => {
          this.audio.playClickChime();
          this.stopGuidedTour();
          this.closeMuseumMenu();
          this.navigateToZone(btn.dataset.menuZone);
        });
      });
    }

    // 2. Danh mục tra cứu nhanh trong ngăn kéo phải
    this.populateCatalogDrawer();

    // 3. Khởi tạo Trình phát Phim Tư Liệu
    const videoCanvas = document.getElementById('doc-video-canvas');
    if (videoCanvas) {
      this.docPlayer = new window.DocumentaryPlayer(videoCanvas, (state) => {
        const playBtn = document.getElementById('btn-doc-play');
        const progressFill = document.getElementById('doc-progress-fill');
        const sceneLabel = document.getElementById('doc-scene-indicator');
        if (playBtn) {
          playBtn.innerHTML = state.isPlaying ? '⏸ Tạm dừng' : '▶ Phát phim tư liệu';
        }
        if (progressFill) {
          progressFill.style.width = `${(state.progress * 100).toFixed(1)}%`;
        }
        if (sceneLabel && state.currentScene) {
          sceneLabel.textContent = `${state.currentScene.time} • ${state.currentScene.heading}`;
        }
      });
    }

    this.renderTributesList();
    this.updateZoneBanner(window.MUSEUM_ZONES[0]);
    this.updateRoomDirectionalArrows();
    this.updateQuickTurnHud();
  }

  toggleMuseumMenu() {
    const drawer = document.getElementById('museum-menu-drawer');
    if (!drawer) return;
    drawer.classList.toggle('hidden');
  }

  closeMuseumMenu() {
    document.getElementById('museum-menu-drawer')?.classList.add('hidden');
  }

  populateCatalogDrawer() {
    const catalogList = document.getElementById('catalog-list');
    if (!catalogList) return;

    const mainSection = window.ARTIFACTS.map(
      (art) => `
      <div class="catalog-card" data-art="${art.id}">
        <div class="catalog-code">${art.code} • ${art.zoneName}</div>
        <div class="catalog-title">${art.title}</div>
        <div class="catalog-era">${art.era}</div>
      </div>
    `
    ).join('');

    const ministersSection = (window.FIFTEEN_MINISTERS || [])
      .map(
        (m) => `
      <div class="catalog-card" data-minister="${m.order}">
        <div class="catalog-code">BỘ TRƯỞNG THỨ #${m.order < 10 ? '0' + m.order : m.order}</div>
        <div class="catalog-title">${m.name}</div>
        <div class="catalog-era">Nhiệm kỳ: ${m.term}</div>
      </div>
    `
      )
      .join('');

    const educatorsSection = (window.teachersData || window.FIFTEEN_EDUCATORS || [])
      .map(
        (t) => `
      <div class="catalog-card" data-teacher-id="${t.id}">
        <div class="catalog-code">NHÀ GIÁO #${t.id < 10 ? '0' + t.id : t.id} • ${t.years || ''}</div>
        <div class="catalog-title">${t.name}</div>
        <div class="catalog-era">${t.subTheme || t.title || t.honorTitle || ''}</div>
      </div>
    `
      )
      .join('');

    catalogList.innerHTML = `
      <div class="catalog-group-heading">✦ CÁC KHÔNG GIAN & HIỆN VẬT CHÍNH</div>
      ${mainSection}
      <div class="catalog-group-heading" style="margin-top:14px;">✦ NHÀ GIÁO VIỆT NAM QUA CÁC THỜI KỲ (46 DANH SƯ & THẦY CÔ)</div>
      ${educatorsSection}
      <div class="catalog-group-heading" style="margin-top:14px;">✦ 15 BỘ TRƯỞNG BỘ GIÁO DỤC VIỆT NAM</div>
      ${ministersSection}
    `;

    catalogList.querySelectorAll('[data-art]').forEach((card) => {
      card.addEventListener('click', () => {
        const art = window.ARTIFACTS.find((a) => a.id === card.dataset.art);
        if (art) {
          this.audio.playClickChime();
          this.stopGuidedTour();
          document.getElementById('catalog-drawer')?.classList.remove('open');
          this.focusOnArtifact(art, true);
        }
      });
    });

    catalogList.querySelectorAll('[data-teacher-id]').forEach((card) => {
      card.addEventListener('click', () => {
        const id = parseInt(card.dataset.teacherId, 10);
        const t = (window.teachersData || []).find(item => item.id === id);
        if (t) {
          this.audio.playClickChime();
          this.stopGuidedTour();
          document.getElementById('catalog-drawer')?.classList.remove('open');
          this.openTeacherModal(t);
        }
      });
    });

    catalogList.querySelectorAll('[data-minister]').forEach((card) => {
      card.addEventListener('click', () => {
        const order = parseInt(card.dataset.minister, 10);
        this.audio.playClickChime();
        this.stopGuidedTour();
        document.getElementById('catalog-drawer')?.classList.remove('open');
        this.focusOnMinisterByOrder(order);
      });
    });

    catalogList.querySelectorAll('[data-educator]').forEach((card) => {
      card.addEventListener('click', () => {
        const order = parseInt(card.dataset.educator, 10);
        this.audio.playClickChime();
        this.stopGuidedTour();
        document.getElementById('catalog-drawer')?.classList.remove('open');
        this.focusOnEducatorByOrder(order);
      });
    });
  }

  findInteractableArtifactById(targetId) {
    for (const grp of this.builder.interactables) {
      if (grp.userData && grp.userData.artifactId === targetId) {
        return grp.userData.artifact;
      }
    }
    return null;
  }

  focusOnMinisterByOrder(order) {
    const art = this.findInteractableArtifactById(`min-item-${order}`);
    if (art) {
      this.focusOnArtifact(art, true);
    }
  }

  focusOnEducatorByOrder(order) {
    const art = this.findInteractableArtifactById(`edu-item-${order}`);
    if (art) {
      this.focusOnArtifact(art, true);
    }
  }


  // ==================== CHUYỂN CẢNH MƯỢT MÀ BƯỚC VÀO BẢO TÀNG (CAMERA FLY-THROUGH) ====================
  flyIntoMuseum() {
    if (this.isTransitioning) return;
    this.isTransitioning = true;
    this.cameraMode = 'transition';
    this.transitionStartTime = performance.now();
    this.transitionDuration = 4200; // 4.2 giây chuyển động mượt mà điện ảnh

    // Ẩn nút CTA ngoại cảnh với hiệu ứng mượt
    const cta = document.getElementById('exterior-cta-bar');
    if (cta) cta.classList.add('fade-out');

    this.audio.playClickChime();

    // Các điểm mốc camera (waypoint curve)
    this.flyWaypoints = [
      { t: 0.0,  pos: new THREE.Vector3(0, 4.0, 58.0), look: new THREE.Vector3(0, 4.2, 39.5) }, // Ngoại cảnh quảng trường
      { t: 0.22, pos: new THREE.Vector3(0, 3.4, 46.8), look: new THREE.Vector3(0, 3.6, 30.0) }, // Lướt lên bậc tam cấp
      { t: 0.44, pos: new THREE.Vector3(0, 2.9, 38.2), look: new THREE.Vector3(0, 2.7, 16.0) }, // Xuyên qua cửa chính rực rỡ ánh sáng
      { t: 0.70, pos: new THREE.Vector3(0, 2.85, 23.5), look: new THREE.Vector3(0, 2.4, 4.0) }, // Bay dọc hành lang Lời Bác Dạy & qua Bức Thư
      { t: 0.88, pos: new THREE.Vector3(0, 2.95, 13.5), look: new THREE.Vector3(0, 2.3, 0.0) }, // Tiến vào ngưỡng sảnh Rotunda Hub
      { t: 1.0,  pos: new THREE.Vector3(0, 3.1, 10.6), look: new THREE.Vector3(0, 2.3, 0.0) }   // Dừng êm ái tại Đại Sảnh Cội Cây Tri Thức
    ];
  }

  goToExterior() {
    this.isExterior = true;
    this.isTransitioning = false;
    this.cameraMode = 'exterior';
    this.activeZoneId = 'exterior';
    this.targetCameraPos.set(0, 4.0, 58.0);
    this.targetLookAt.set(0, 4.2, 39.5);
    this.syncYawPitchFromLookAt();

    const cta = document.getElementById('exterior-cta-bar');
    if (cta) cta.classList.remove('hidden', 'fade-out');

    document.querySelectorAll('.zone-btn').forEach((b) => b.classList.remove('active'));
    document.querySelectorAll('[data-menu-zone]').forEach((b) => b.classList.remove('active'));
    this.updateZoneBanner({
      name: 'Quảng Trường & Mặt Tiền Bảo Tàng',
      subtitle: 'Mặt Tiền Bề Thế, Bậc Tam Cấp & Biển Đồng Vàng'
    });
  }

  // ==================== DI CHUYỂN GIỮA CÁC GIAN PHÒNG (KHÔNG TỰ BẬT MODAL TRƯỚC KHI CLICK) ====================
  navigateToZone(zoneId, customPos = null, customLookAt = null) {
    if (zoneId === 'exterior') {
      this.goToExterior();
      return;
    }
    const zone = window.MUSEUM_ZONES.find((z) => z.id === zoneId);
    if (!zone) return;

    this.activeZoneId = zoneId;
    this.cameraMode = 'free';
    this.isExterior = false;
    document.getElementById('exterior-cta-bar')?.classList.add('hidden');
    // Đóng bảng thông tin để không che khuất không gian 3D khi mới vào phòng
    this.closeMinisterModal();
        this.closeArtifactModal();

    if (customPos) {
      this.targetCameraPos.set(customPos.x, customPos.y, customPos.z);
    } else {
      this.targetCameraPos.set(zone.cameraPos.x, zone.cameraPos.y, zone.cameraPos.z);
    }

    if (customLookAt) {
      this.targetLookAt.set(customLookAt.x, customLookAt.y, customLookAt.z);
    } else {
      this.targetLookAt.set(zone.lookAt.x, zone.lookAt.y, zone.lookAt.z);
    }
    this.syncYawPitchFromLookAt();

    document.querySelectorAll('.zone-btn').forEach((b) => {
      b.classList.toggle('active', b.dataset.zone === zoneId);
    });
    document.querySelectorAll('[data-menu-zone]').forEach((b) => {
      b.classList.toggle('active', b.dataset.menuZone === zoneId);
    });

    this.updateZoneBanner(zone);
    this.updateRoomDirectionalArrows();
    this.updateTreeSanctuaryHud();
    this.updateQuickTurnHud();
  }

  // ==================== THANH RẼ HƯỚNG & LỐI ĐI NHANH TRÊN MÀN HÌNH ====================
  updateQuickTurnHud() {
    const container = document.getElementById('turn-hud-buttons');
    if (!container) return;

    const zId = this.activeZoneId || 'grand-hall';
    let buttons = [];

    switch (zId) {
      case 'grand-hall':
        buttons = [
          { icon: '🏛️', label: 'Quảng Trường & Mặt Tiền', zoneId: 'zone-exterior' },
          { icon: '⬅', label: 'Lịch Sử Giáo Dục (Tây)', zoneId: 'room-history' },
          { icon: '⬆', label: '15 Nhà Giáo & Hành Lang (Bắc)', zoneId: 'room-educators' },
          { icon: '➡', label: '15 Bộ Trưởng (Đông)', zoneId: 'room-ministers' },
          { icon: '⬇', label: 'Đồ Dùng Dạy Học (Nam)', zoneId: 'room-tools' }
        ];
        break;

      case 'room-educators':
        buttons = [
          { icon: '🪷', label: 'Quay Lại Đại Sảnh Cây Tri Ân', zoneId: 'grand-hall' },
          { icon: '🏛️', label: 'Tiến Vào Đại Hành Lang Ánh Sáng ➔', zoneId: 'corridor-rear' }
        ];
        break;

      case 'corridor-rear':
        buttons = [
          {
            icon: '⬅',
            label: 'Rẽ Trái: Cánh Tây (Đuốc, Sách Mở, Gian Cổ & 20/11)',
            zoneId: 'corridor-rear',
            pos: { x: -14.0, y: 3.0, z: -33.5 },
            lookAt: { x: -22.0, y: 2.2, z: -35.5 }
          },
          { icon: '⬇', label: 'Về Phòng 15 Nhà Giáo', zoneId: 'room-educators' },
          {
            icon: '➡',
            label: 'Rẽ Phải: Cánh Đông (Trái Tim, Bút Vàng, Nhà Giáo & STEM)',
            zoneId: 'corridor-rear',
            pos: { x: 14.0, y: 3.0, z: -33.5 },
            lookAt: { x: 22.0, y: 2.2, z: -35.5 }
          }
        ];
        break;

      case 'room-ancient-edu':
        buttons = [
          { icon: '🏛️', label: 'Ra Đại Hành Lang Ánh Sáng', zoneId: 'corridor-rear' },
          { icon: '➡', label: 'Sang Phòng Lịch Sử 20/11 ➔', zoneId: 'room-teacher-day' }
        ];
        break;

      case 'room-teacher-day':
        buttons = [
          { icon: '⬅', label: '⮘ Sang Phòng Lớp Học Cổ', zoneId: 'room-ancient-edu' },
          { icon: '🏛️', label: 'Ra Đại Hành Lang Ánh Sáng', zoneId: 'corridor-rear' },
          { icon: '➡', label: 'Sang Phòng Nhà Giáo Tiêu Biểu ➔', zoneId: 'room-distinguished-educators' }
        ];
        break;

      case 'room-distinguished-educators':
        buttons = [
          { icon: '⬅', label: '⮘ Sang Phòng Lịch Sử 20/11', zoneId: 'room-teacher-day' },
          { icon: '🏛️', label: 'Ra Đại Hành Lang Ánh Sáng', zoneId: 'corridor-rear' },
          { icon: '➡', label: 'Sang Phòng Đổi Mới Giáo Dục ➔', zoneId: 'room-future-edu' }
        ];
        break;

      case 'room-future-edu':
        buttons = [
          { icon: '⬅', label: '⮘ Sang Phòng Nhà Giáo Tiêu Biểu', zoneId: 'room-distinguished-educators' },
          { icon: '🏛️', label: 'Ra Đại Hành Lang Ánh Sáng', zoneId: 'corridor-rear' }
        ];
        break;

      case 'zone-exterior':
        buttons = [
          { icon: '🪷', label: 'Bước Vào Đại Sảnh & Cội Cây Tri Thức ➔', zoneId: 'grand-hall' }
        ];
        break;

      default:
        buttons = [
          { icon: '🪷', label: 'Về Đại Sảnh & Cội Cây Tri Thức', zoneId: 'grand-hall' }
        ];
        break;
    }

    container.innerHTML = buttons
      .map(
        (b) => `
      <button type="button" class="turn-hud-btn" data-turn-zone="${b.zoneId}" ${b.pos ? `data-turn-pos='${JSON.stringify(b.pos)}'` : ''} ${b.lookAt ? `data-turn-look='${JSON.stringify(b.lookAt)}'` : ''}>
        <span class="turn-icon">${b.icon}</span>
        <span class="turn-text">${b.label}</span>
      </button>
    `
      )
      .join('');

    container.querySelectorAll('[data-turn-zone]').forEach((btn) => {
      btn.addEventListener('click', () => {
        this.audio.playClickChime();
        this.stopGuidedTour();
        const zTarget = btn.dataset.turnZone;
        const pos = btn.dataset.turnPos ? JSON.parse(btn.dataset.turnPos) : null;
        const look = btn.dataset.turnLook ? JSON.parse(btn.dataset.turnLook) : null;
        this.navigateToZone(zTarget, pos, look);
      });
    });
  }

  updateTreeSanctuaryHud() {
    // HUD dưới đáy đã được ẩn để nhường trọn không gian 3D thoáng đãng
  }

  renderMenuTreeLiveSearch(query) {
    const resultsBox = document.getElementById('menu-tree-search-results');
    if (!resultsBox) return;
    const q = (query || '').trim().toLocaleLowerCase('vi-VN');
    if (!q) {
      resultsBox.classList.add('hidden');
      resultsBox.innerHTML = '';
      return;
    }

    const matches = (this.tributes || [])
      .map((t, idx) => ({ t, idx }))
      .filter(({ t }) => {
        const hay = [
          t.senderName || t.sender || '',
          t.className || '',
          t.school || '',
          t.province || '',
          t.teacher || '',
          t.message || ''
        ]
          .join(' ')
          .toLocaleLowerCase('vi-VN');
        return hay.includes(q);
      })
      .slice(0, 8);

    resultsBox.classList.remove('hidden');
    if (matches.length === 0) {
      resultsBox.innerHTML = `<div class="menu-search-item" style="color:#a8b8cc; text-align:center;">Không tìm thấy thông điệp khớp với "<em>${query}</em>"</div>`;
      return;
    }

    resultsBox.innerHTML = matches
      .map(
        ({ t, idx }) => `
      <div class="menu-search-item" data-index="${idx}">
        <div class="menu-search-item-teacher">Kính gửi: ${t.teacher || 'Thầy Cô kính mến'}</div>
        <div class="menu-search-item-sender">${t.senderName || t.sender || 'Học trò'} • ${[t.className, t.school, t.province].filter(Boolean).join(' • ')}</div>
        <div class="menu-search-item-msg">“${(t.message || '').slice(0, 65)}...”</div>
      </div>
    `
      )
      .join('');

    resultsBox.querySelectorAll('.menu-search-item').forEach((item) => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.getAttribute('data-index'), 10);
        resultsBox.classList.add('hidden');
        this.closeMuseumMenu();
        this.openTributeCardViewer(idx);
      });
    });
  }

  renderTreeHudLiveSearch(query) {
    const resultsBox = document.getElementById('tree-hud-search-results');
    if (!resultsBox) return;
    const q = (query || '').trim().toLocaleLowerCase('vi-VN');
    if (!q) {
      resultsBox.classList.add('hidden');
      resultsBox.innerHTML = '';
      return;
    }

    const matches = this.tributes
      .map((t, idx) => ({ t, idx }))
      .filter(({ t }) => {
        const hay = [
          t.senderName || t.sender || '',
          t.className || '',
          t.school || '',
          t.province || '',
          t.teacher || '',
          t.message || ''
        ]
          .join(' ')
          .toLocaleLowerCase('vi-VN');
        return hay.includes(q);
      })
      .slice(0, 8);

    resultsBox.classList.remove('hidden');
    if (matches.length === 0) {
      resultsBox.innerHTML = `
        <div style="grid-column: 1 / -1; text-align:center; padding: 10px; color: var(--ivory-soft); font-size: 12.5px;">
          Không tìm thấy Lá Vàng nào khớp với <strong>"${query}"</strong>.
        </div>
      `;
      return;
    }

    resultsBox.innerHTML = matches
      .map(({ t, idx }) => {
        const metaParts = [t.className ? `Lớp ${t.className}` : '', t.school || '', t.province || ''].filter(Boolean);
        const metaStr = metaParts.length > 0 ? ` • ${metaParts.join(' • ')}` : '';
        return `
          <div class="tribute-item" data-hud-tribute-idx="${idx}" title="Click để mở Lá Vàng Tri Ân">
            <div class="tribute-teacher">🍃 Lá Vàng #${idx + 1} • Kính gửi: ${t.teacher}</div>
            <p class="tribute-msg">“${t.message}”</p>
            <div class="tribute-sender">— <strong>${t.senderName || t.sender}</strong>${metaStr}</div>
          </div>
        `;
      })
      .join('');

    resultsBox.querySelectorAll('[data-hud-tribute-idx]').forEach((el) => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.dataset.hudTributeIdx, 10);
        this.audio.playClickChime();
        resultsBox.classList.add('hidden');
        this.openTributeCardViewer(idx);
      });
    });
  }

  // Cập nhật tên phòng trên 2 nút mũi tên Trái / Phải để người dùng chuyển phòng dễ dàng
  updateRoomDirectionalArrows() {
    const zones = window.MUSEUM_ZONES || [];
    const idx = zones.findIndex((z) => z.id === this.activeZoneId);
    const prevZone = zones[(idx - 1 + zones.length) % zones.length];
    const nextZone = zones[(idx + 1) % zones.length];

    const prevLabel = document.getElementById('arrow-prev-room-label');
    const nextLabel = document.getElementById('arrow-next-room-label');
    if (prevLabel && prevZone) prevLabel.textContent = prevZone.name;
    if (nextLabel && nextZone) nextLabel.textContent = nextZone.name;
  }

  stepRoom(dir) {
    const zones = window.MUSEUM_ZONES || [];
    const idx = zones.findIndex((z) => z.id === this.activeZoneId);
    const target = zones[(idx + dir + zones.length) % zones.length];
    if (target) {
      this.audio.playClickChime();
      this.stopGuidedTour();
      this.navigateToZone(target.id);
    }
  }

  updateZoneBanner(zone) {
    const titleEl = document.getElementById('current-zone-title');
    const subEl = document.getElementById('current-zone-subtitle');
    if (titleEl) titleEl.textContent = zone.name;
    if (subEl) subEl.textContent = zone.subtitle;
  }

  focusOnArtifact(art, openModal = true) {
    this.selectedArtifact = art;
    this.activeZoneId = art.zoneId;

    document.querySelectorAll('.zone-btn').forEach((b) => {
      b.classList.toggle('active', b.dataset.zone === art.zoneId);
    });
    document.querySelectorAll('[data-menu-zone]').forEach((b) => {
      b.classList.toggle('active', b.dataset.menuZone === art.zoneId);
    });
    const zoneObj = window.MUSEUM_ZONES.find((z) => z.id === art.zoneId);
    if (zoneObj) this.updateZoneBanner(zoneObj);
    this.updateRoomDirectionalArrows();
    this.updateTreeSanctuaryHud();

    this.cameraMode = 'inspect';
    this.targetCameraPos.set(art.viewOffset.x, art.viewOffset.y, art.viewOffset.z);
    this.targetLookAt.set(art.lookAtOffset.x, art.lookAtOffset.y, art.lookAtOffset.z);

    const dx = art.viewOffset.x - art.position.x;
    const dz = art.viewOffset.z - art.position.z;
    this.orbitRadius = Math.max(2.6, Math.hypot(dx, dz));
    this.orbitAngle = Math.atan2(dx, dz);
    this.orbitHeight = art.viewOffset.y;

    if (art.isWishingTree) {
      this.orbitRadius = 5.6;
      this.orbitHeight = 2.4;
    }

    if (openModal) {
      if (art.isWishingTree) {
        // Tuyệt đối KHÔNG mở modal viết khi bấm vào cây.
        // Chỉ kích hoạt chế độ xoay 360 độ ngắm trọn vẹn 4 hướng quanh cây!
        this.cameraMode = 'inspect';
      } else {
        this.openArtifactModal(art);
      }
    }
  }

  // ==================== HIỂN THỊ MODAL THÔNG TIN TƯ LIỆU (CHỈ HIỆN THÔNG TIN & HÌNH ẢNH, KHÔNG VIDEO/VIẾT THIỆP) ====================
  openArtifactModal(art) {
    this.closeWishingTreeModal();
    this.closeTributeCardViewer();

    const modal = document.getElementById('artifact-modal');
    if (!modal) return;

    document.getElementById('modal-code').textContent = `${art.code} • ${art.zoneName}`;
    document.getElementById('modal-title').textContent = art.title;
    document.getElementById('modal-subtitle').textContent = art.subtitle;
    document.getElementById('modal-era').textContent = art.era;
    document.getElementById('modal-material').textContent = art.material;
    document.getElementById('modal-dimensions').textContent = art.dimensions;
    document.getElementById('modal-quote').textContent = art.quote;

    const primaryImageBox = document.getElementById('modal-primary-image-box');
    const storyContainer = document.getElementById('modal-story');
    let extraPortraitHTML = '';

    // 1. Nếu là 1 Bộ trưởng cụ thể -> Hiển thị thẻ chân dung gốc
    if (art.ministerRecord) {
      if (primaryImageBox) primaryImageBox.style.display = 'none';
      const m = art.ministerRecord;
      const imgSrc = (window.MINISTER_IMAGES && window.MINISTER_IMAGES[m.imageFile]) || `./ẢNH BỘ TRƯỞNG/${m.imageFile}`;
      extraPortraitHTML = `
        <div class="minister-hero-card">
          <img src="${imgSrc}" alt="${m.name}" class="minister-hero-img" />
          <div class="minister-hero-info">
            <div class="minister-badge">Bộ trưởng thứ ${m.order}/15</div>
            <h3>${m.name}</h3>
            <p><strong>Năm sinh:</strong> ${m.lifespan}</p>
            <p><strong>Nhiệm kỳ:</strong> ${m.term}</p>
            <p><strong>Chức vụ:</strong> ${m.roleTitle}</p>
          </div>
        </div>
      `;
    }
    // 2. Nếu là 1 Nhà giáo cụ thể trong 15 Nhà giáo ưu tú -> Hiển thị thẻ chân dung gốc
    else if (art.personRecord) {
      if (primaryImageBox) primaryImageBox.style.display = 'none';
      const e = art.personRecord;
      const imgSrc =
        (window.MINISTER_IMAGES && window.MINISTER_IMAGES[e.imageFile]) ||
        `./nhà giáo nổi tiếng và ưu tú nhất lịch sử Việt Nam/${e.imageFile}`;
      extraPortraitHTML = `
        <div class="minister-hero-card">
          <img src="${imgSrc}" alt="${e.name}" class="minister-hero-img" />
          <div class="minister-hero-info">
            <div class="minister-badge">Danh sư Việt Nam #${e.order}/15</div>
            <h3>${e.name}</h3>
            <p><strong>Niên đại:</strong> ${e.lifespan} (${e.era})</p>
            <p><strong>Danh hiệu:</strong> ${e.honorTitle}</p>
          </div>
        </div>
      `;
    }
    // 3. Nếu là Giai đoạn lịch sử ở Phòng 1 có ảnh tư liệu gốc -> Hiển thị ảnh tư liệu ngay đầu hộp thông tin
    else if (art.imageFile && primaryImageBox) {
      const imgSrc =
        (window.MINISTER_IMAGES && window.MINISTER_IMAGES[art.imageFile]) ||
        `./GIAI ĐOẠN GIÁO DỤC/${art.imageFile}`;
      primaryImageBox.style.display = 'block';
      primaryImageBox.innerHTML = `
        <div class="primary-doc-photo-card">
          <img src="${imgSrc}" alt="${art.title}" />
          <div class="photo-caption">Hình ảnh tư liệu lịch sử: ${art.title} (${art.era})</div>
        </div>
      `;
    } else if (primaryImageBox) {
      primaryImageBox.style.display = 'none';
      primaryImageBox.innerHTML = '';
    }

    // Lưới chuyển nhanh giữa các Giai đoạn Lịch sử (Phòng 1), 15 Nhà giáo (Phòng 2) hoặc 15 Bộ trưởng (Phòng 3)
    let rosterGridHTML = '';
    if (art.zoneId === 'room-history') {
      const historyStages = (window.ARTIFACTS || []).filter((a) => a.zoneId === 'room-history');
      rosterGridHTML = `
        <div class="roster-section">
          <h4>✦ Các Giai Đoạn Lịch Sử Phát Triển Giáo Dục Việt Nam (Click để chuyển nhanh):</h4>
          <div class="educators-grid">
            ${historyStages
              .map(
                (hs) => `
              <div class="educator-grid-item ${hs.id === art.id ? 'active' : ''}" data-select-hist="${hs.id}">
                <div class="e-order">${hs.code} • ${hs.era}</div>
                <div class="e-name">${hs.title}</div>
              </div>
            `
              )
              .join('')}
          </div>
        </div>
      `;
    } else if (art.isMinistersGallery) {
      rosterGridHTML = `
        <div class="roster-section">
          <h4>✦ Danh sách 15 Bộ trưởng Bộ Giáo dục (Click vào ảnh để xem):</h4>
          <div class="ministers-grid">
            ${(window.FIFTEEN_MINISTERS || [])
              .map((m) => {
                const src = (window.MINISTER_IMAGES && window.MINISTER_IMAGES[m.imageFile]) || `./ẢNH BỘ TRƯỞNG/${m.imageFile}`;
                const isSelected = art.ministerRecord && art.ministerRecord.order === m.order;
                return `
                  <div class="minister-grid-item ${isSelected ? 'active' : ''}" data-select-minister="${m.order}">
                    <img src="${src}" alt="${m.name}" />
                    <div class="m-order">#${m.order} • ${m.term}</div>
                    <div class="m-name">${m.name}</div>
                  </div>
                `;
              })
              .join('')}
          </div>
        </div>
      `;
    } else if (art.isEducatorsGallery) {
      rosterGridHTML = `
        <div class="roster-section">
          <h4>✦ Danh sách 15 Nhà giáo Nổi tiếng & Ưu tú nhất Lịch sử (Click vào ảnh để xem):</h4>
          <div class="ministers-grid">
            ${(window.FIFTEEN_EDUCATORS || [])
              .map((e) => {
                const src =
                  (window.MINISTER_IMAGES && window.MINISTER_IMAGES[e.imageFile]) ||
                  `./nhà giáo nổi tiếng và ưu tú nhất lịch sử Việt Nam/${e.imageFile}`;
                const isSelected = art.personRecord && art.personRecord.order === e.order;
                return `
                  <div class="minister-grid-item ${isSelected ? 'active' : ''}" data-select-educator="${e.order}">
                    <img src="${src}" alt="${e.name}" />
                    <div class="m-order">#${e.order} • ${e.lifespan}</div>
                    <div class="m-name">${e.name}</div>
                  </div>
                `;
              })
              .join('')}
          </div>
        </div>
      `;
    }

    const paragraphsHTML = (art.story || '')
      .split('\n\n')
      .map((p) => `<p>${p.trim()}</p>`)
      .join('');

    storyContainer.innerHTML = extraPortraitHTML + paragraphsHTML + rosterGridHTML;

    storyContainer.querySelectorAll('[data-select-hist]').forEach((el) => {
      el.addEventListener('click', () => {
        const targetArt = window.ARTIFACTS.find((a) => a.id === el.dataset.selectHist);
        if (targetArt) {
          this.audio.playClickChime();
          this.focusOnArtifact(targetArt, true);
        }
      });
    });

    storyContainer.querySelectorAll('[data-select-minister]').forEach((el) => {
      el.addEventListener('click', () => {
        const order = parseInt(el.dataset.selectMinister, 10);
        this.audio.playClickChime();
        this.focusOnMinisterByOrder(order);
      });
    });

    storyContainer.querySelectorAll('[data-select-educator]').forEach((el) => {
      el.addEventListener('click', () => {
        const order = parseInt(el.dataset.selectEducator, 10);
        this.audio.playClickChime();
        this.focusOnEducatorByOrder(order);
      });
    });

    const highlightsEl = document.getElementById('modal-highlights');
    highlightsEl.innerHTML = (art.highlights || []).map((h) => `<li>${h}</li>`).join('');

    const galleryGrid = document.getElementById('modal-gallery-grid');
    if (galleryGrid) {
      galleryGrid.innerHTML = '';
    }

    modal.classList.add('open');
  }

  
  // ==================== QUẢN LÝ MODAL 2D 15 BỘ TRƯỞNG BỘ GIÁO DỤC (DEEP HISTORICAL DOSSIER) ====================
  openMinisterModal(min) {
    if (!min) return;
    this.currentMinisterId = min.id || 1;
    this.closeWishingTreeModal();
    this.closeTributeCardViewer();
    const artifactModal = document.getElementById('artifact-modal');
    if (artifactModal) artifactModal.style.display = 'none';

    const modal = document.getElementById('minister-detail-modal');
    if (!modal) return;

    // 1. Phóng to chính bức ảnh của vị Bộ trưởng vừa click (bọc encodeURI và đa tầng dự phòng)
    const imgEl = document.getElementById('minister-modal-img');
    if (imgEl) {
      const fileNameOnly = min.img.replace('assets/ministers/', '');
      const fallbackSrc = window.MINISTER_IMAGES && (
        window.MINISTER_IMAGES[min.name] ||
        window.MINISTER_IMAGES[fileNameOnly] ||
        window.MINISTER_IMAGES[fileNameOnly.replace('.jpg', '..jpg')] ||
        window.MINISTER_IMAGES['assets/ministers/' + fileNameOnly] ||
        window.MINISTER_IMAGES['ẢNH BỘ TRƯỞNG/' + fileNameOnly] ||
        window.MINISTER_IMAGES['ẢNH BỘ TRƯỞNG/' + fileNameOnly.replace('.jpg', '..jpg')]
      );

      imgEl.src = encodeURI(min.img);
      imgEl.onerror = () => {
        // Thử đường dẫn hai chấm hoặc một chấm
        const altPath = min.img.includes('..jpg') ? min.img.replace('..jpg', '.jpg') : min.img.replace('.jpg', '..jpg');
        imgEl.onerror = () => {
          if (fallbackSrc && imgEl.src !== fallbackSrc) {
            imgEl.src = fallbackSrc;
          }
        };
        imgEl.src = encodeURI(altPath);
      };
    }

    const orderTag = document.getElementById('minister-modal-order-tag');
    if (orderTag) {
      orderTag.textContent = `BỘ TRƯỞNG VỊ THỨ ${min.id < 10 ? '0' + min.id : min.id} / 15`;
    }

    // Nhãn năm sinh - năm mất và nhiệm kỳ ở cột trái
    const yearsLeftEl = document.getElementById('minister-modal-years-left');
    if (yearsLeftEl) yearsLeftEl.textContent = min.years || '';

    const termLeftEl = document.getElementById('minister-modal-term-left');
    if (termLeftEl) termLeftEl.textContent = min.term || '';

    // Dự phòng tương thích ngược nếu còn các thẻ cũ
    const yearsEl = document.getElementById('minister-modal-years');
    if (yearsEl) yearsEl.textContent = min.years || '';
    const termEl = document.getElementById('minister-modal-term');
    if (termEl) termEl.textContent = min.term || '';

    const nameEl = document.getElementById('minister-modal-name');
    if (nameEl) nameEl.textContent = min.name || '';

    // 📜 KHỐI 1: XUẤT THÂN & QUÁ TRÌNH CÔNG TÁC (career)
    const careerEl = document.getElementById('minister-modal-career');
    if (careerEl) {
      careerEl.textContent = min.career || min.biography || min.highlight || '';
    }
    const bioEl = document.getElementById('minister-modal-bio');
    if (bioEl) bioEl.textContent = min.career || min.biography || min.highlight || '';

    // 🏛️ KHỐI 2: DẤU ẤN CẢI CÁCH & QUYẾT SÁCH GIÁO DỤC (reforms)
    const reformsEl = document.getElementById('minister-modal-reforms');
    if (reformsEl) {
      const rawReforms = min.reforms || min.contributions || min.highlight || '';
      const lines = rawReforms.split('\n').map(l => l.trim()).filter(l => l.length > 0);
      if (lines.length > 0) {
        reformsEl.innerHTML = lines.map(line => {
          const cleanText = line.replace(/^[•\-\*]\s*/, '');
          return `<div class="reform-bullet-item"><span class="bullet-gold">✦</span><span>${cleanText}</span></div>`;
        }).join('');
      } else {
        reformsEl.innerHTML = `<div class="reform-bullet-item"><span class="bullet-gold">✦</span><span>${rawReforms}</span></div>`;
      }
    }
    const contribEl = document.getElementById('minister-modal-contrib');
    if (contribEl) contribEl.textContent = min.reforms || min.contributions || min.highlight || '';

    // 🏅 KHỐI 3: DANH HIỆU CAO QUÝ & DI SẢN LỊCH SỬ (legacy)
    const legacyEl = document.getElementById('minister-modal-legacy');
    if (legacyEl) {
      legacyEl.textContent = min.legacy || min.historicalSignificance || min.highlight || '';
    }

    const stepperEl = document.getElementById('minister-modal-stepper');
    if (stepperEl) stepperEl.textContent = `${min.id} / 15`;

    modal.style.display = 'flex';
  }

  closeMinisterModal() {
    const modal = document.getElementById('minister-detail-modal');
    if (modal) modal.style.display = 'none';
  }

  navigateMinister(delta) {
    const list = window.ministersData || [];
    if (!list.length) return;
    let nextId = (this.currentMinisterId || 1) + delta;
    if (nextId < 1) nextId = list.length;
    if (nextId > list.length) nextId = 1;
    const nextMin = list.find((m) => m.id === nextId) || list[nextId - 1];
    if (nextMin) {
      this.openMinisterModal(nextMin);
    }
  }

  // ==================== QUẢN LÝ MODAL 2D NHÀ GIÁO VIỆT NAM QUA CÁC THỜI KỲ ====================
  openTeacherModal(t) {
    if (!t) return;
    this.currentTeacherId = t.id || 1;
    this.closeWishingTreeModal();
    this.closeTributeCardViewer();
    this.closeMinisterModal();
    this.closeThemeModal();
    const artifactModal = document.getElementById('artifact-modal');
    if (artifactModal) artifactModal.style.display = 'none';

    const modal = document.getElementById('teacher-detail-modal');
    if (!modal) return;

    // 1. Phóng to ảnh chân dung nhà giáo
    const imgEl = document.getElementById('teacher-modal-img');
    if (imgEl && t.img) {
      const base64Src = (window.TEACHER_IMAGES && (window.TEACHER_IMAGES[t.id] || window.TEACHER_IMAGES[t.name])) || null;
      if (base64Src) {
        imgEl.src = base64Src;
      } else {
        const cleanImgPath = t.img.replace(/\\/g, '/');
        const filenameOnly = cleanImgPath.split('/').pop();
        const possiblePaths = [
          cleanImgPath,
          `assets/teachers/${filenameOnly}`,
          `assets/teacher/${filenameOnly}`,
          `data/${cleanImgPath}`,
          filenameOnly
        ];

        const tryLoad = (idx) => {
          if (idx >= possiblePaths.length) return;
          imgEl.onerror = () => tryLoad(idx + 1);
          imgEl.src = encodeURI(possiblePaths[idx]);
        };
        tryLoad(0);
      }
    }

    // Nhãn thời kỳ
    const periodTag = document.getElementById('teacher-modal-period-tag');
    if (periodTag) {
      let periodLabel = 'NHÀ GIÁO TIÊU BIỂU';
      if (t.period === 'phong_kien') periodLabel = 'GIAI ĐOẠN I • THỜI KỲ PHONG KIẾN';
      else if (t.period === 'yeu_nuoc_khang_chien' || t.period === 'dau_tk20_1945' || t.period === 'khang_chien_1945_1975') periodLabel = 'GIAI ĐOẠN II • YÊU NƯỚC & KHÁNG CHIẾN';
      else if (t.period === 'doi_moi_hoi_nhap' || t.period === 'hien_dai_1975_nay') periodLabel = 'GIAI ĐOẠN III • ĐỔI MỚI & HỘI NHẬP';
      periodTag.textContent = periodLabel;
    }

    const yearsLeftEl = document.getElementById('teacher-modal-years-left');
    if (yearsLeftEl) yearsLeftEl.textContent = t.years || '';

    const subthemeLeftEl = document.getElementById('teacher-modal-subtheme-left');
    if (subthemeLeftEl) subthemeLeftEl.textContent = t.subTheme || 'Danh sư Việt Nam';

    const honorTitleEl = document.getElementById('teacher-modal-honor-title');
    if (honorTitleEl) honorTitleEl.textContent = t.title || 'BẬC DANH SƯ TIÊU BIỂU VIỆT NAM';

    const nameEl = document.getElementById('teacher-modal-name');
    if (nameEl) nameEl.textContent = t.name || '';

    // 📜 Khối 1: Xuất thân & Quá trình công tác
    const careerEl = document.getElementById('teacher-modal-career');
    if (careerEl) careerEl.textContent = t.career || t.biography || t.summary || '';

    // 🏛️ Khối 2: Dấu ấn cải cách & Đóng góp giáo dục
    const reformsEl = document.getElementById('teacher-modal-reforms');
    if (reformsEl) {
      const rawReforms = t.reforms || t.contributions || '';
      const lines = rawReforms.split('\n').map(l => l.trim()).filter(l => l.length > 0);
      if (lines.length > 0) {
        reformsEl.innerHTML = lines.map(line => {
          const cleanText = line.replace(/^[•\-\*]\s*/, '');
          return `<div class="reform-bullet-item"><span class="bullet-gold">✦</span><span>${cleanText}</span></div>`;
        }).join('');
      } else {
        reformsEl.innerHTML = `<div class="reform-bullet-item"><span class="bullet-gold">✦</span><span>${rawReforms}</span></div>`;
      }
    }

    // 🏅 Khối 3: Danh hiệu & Di sản lịch sử
    const legacyEl = document.getElementById('teacher-modal-legacy');
    if (legacyEl) legacyEl.textContent = t.legacy || '';

    // Nguồn tư liệu
    const sourceEl = document.getElementById('teacher-modal-source');
    if (sourceEl) {
      sourceEl.textContent = t.source ? `📚 Nguồn tư liệu: ${t.source}` : '';
      sourceEl.style.display = t.source ? 'block' : 'none';
    }

    const teachersList = window.teachersData || [];
    const currentIdx = teachersList.findIndex(item => item.id === t.id);
    const stepperEl = document.getElementById('teacher-modal-stepper');
    if (stepperEl) {
      stepperEl.textContent = `${(currentIdx >= 0 ? currentIdx + 1 : t.id)} / ${teachersList.length}`;
    }

    modal.style.display = 'flex';
  }

  closeTeacherModal() {
    const modal = document.getElementById('teacher-detail-modal');
    if (modal) modal.style.display = 'none';
  }

  navigateTeacher(delta) {
    const list = window.teachersData || [];
    if (!list.length) return;
    let currentIdx = list.findIndex(item => item.id === this.currentTeacherId);
    if (currentIdx < 0) currentIdx = 0;
    let nextIdx = currentIdx + delta;
    if (nextIdx < 0) nextIdx = list.length - 1;
    if (nextIdx >= list.length) nextIdx = 0;
    const nextTeacher = list[nextIdx];
    if (nextTeacher) {
      this.openTeacherModal(nextTeacher);
    }
  }

  // ==================== QUẢN LÝ MODAL PANO CHUYÊN ĐỀ LỊCH SỬ GIÁO DỤC ====================
  openThemeModal(themeKey, theme) {
    if (!theme) {
      const themes = window.themesData || {};
      theme = themes[themeKey];
    }
    if (!theme) return;

    this.closeWishingTreeModal();
    this.closeTributeCardViewer();
    this.closeMinisterModal();
    this.closeTeacherModal();

    const modal = document.getElementById('theme-intro-modal');
    if (!modal) return;

    const badgeEl = document.getElementById('theme-modal-badge');
    if (badgeEl) badgeEl.textContent = theme.id ? `CHUYÊN ĐỀ ${theme.id.toUpperCase().replace('_', ' ')}` : 'CHUYÊN ĐỀ LỊCH SỬ';

    const titleEl = document.getElementById('theme-modal-title');
    if (titleEl) titleEl.textContent = theme.title || '';

    const subtitleEl = document.getElementById('theme-modal-subtitle');
    if (subtitleEl) subtitleEl.textContent = theme.subtitle || '';

    // Toàn văn dẫn luận
    const essayEl = document.getElementById('theme-modal-essay');
    if (essayEl) {
      const rawIntro = theme.introContent || '';
      const paragraphs = rawIntro.split('\n\n').filter(p => p.trim().length > 0);
      essayEl.innerHTML = paragraphs.map(p => `<p>${p.trim()}</p>`).join('');
    }

    // Các mốc son lịch sử
    const milestonesEl = document.getElementById('theme-modal-milestones');
    if (milestonesEl) {
      const milestones = theme.milestones || [];
      if (milestones.length > 0) {
        milestonesEl.innerHTML = milestones.map(m => `
          <div class="milestone-item">
            <span class="milestone-year">${m.year || m.period || 'Mốc son'}</span>
            <span class="milestone-event">${m.event || ''}</span>
          </div>
        `).join('');
      } else {
        milestonesEl.innerHTML = '<div class="milestone-item"><span class="milestone-event">Đang cập nhật tư liệu mốc son lịch sử.</span></div>';
      }
    }

    modal.style.display = 'flex';
  }

  closeThemeModal() {
    const modal = document.getElementById('theme-intro-modal');
    if (modal) modal.style.display = 'none';
  }

  closeArtifactModal() {
    const modal = document.getElementById('artifact-modal');
    if (modal) modal.classList.remove('open');
    if (this.cameraMode === 'inspect') {
      this.cameraMode = 'free';
      this.syncYawPitchFromLookAt();
    }
  }

  // ==================== KHUNG THIỆP TRI ÂN TUYỆT ĐẸP KHI CLICK VÀO THẺ TRÊN CÂY 3D ====================
  openTributeCardViewer(index = 0) {
    const list = (this.tributes && this.tributes.length > 0) ? this.tributes : (window.INITIAL_TRIBUTES || []);
    if (list.length === 0) return;

    this.closeArtifactModal();
    this.closeWishingTreeModal();
    this.closeMuseumMenu();

    const safeIdx = ((index % list.length) + list.length) % list.length;
    this.activeTributeIndex = safeIdx;
    const item = list[safeIdx];

    const badgeEl = document.getElementById('tribute-viewer-badge');
    const teacherEl = document.getElementById('tribute-viewer-teacher');
    const msgEl = document.getElementById('tribute-viewer-message');
    const senderEl = document.getElementById('tribute-viewer-sender');
    const metaEl = document.getElementById('tribute-viewer-meta');
    const timeEl = document.getElementById('tribute-viewer-time');

    const numStr = safeIdx + 1 < 10 ? `0${safeIdx + 1}` : `${safeIdx + 1}`;
    if (badgeEl) {
      badgeEl.textContent = `CÂY TRI ÂN 3D • LÁ VÀNG THÔNG ĐIỆP SỐ #${numStr} / ${list.length}`;
    }
    if (teacherEl) teacherEl.textContent = item.teacher || 'Thầy / Cô kính mến';
    if (msgEl) msgEl.textContent = `“${item.message || ''}”`;
    if (senderEl) senderEl.textContent = item.senderName || item.sender || 'Học sinh';
    if (metaEl) {
      const metaParts = [
        item.className ? `Lớp ${item.className.replace(/^lớp\s+/i, '')}` : '',
        item.school || '',
        item.province || ''
      ].filter(Boolean);
      metaEl.textContent = metaParts.join(' • ');
      metaEl.style.display = metaParts.length > 0 ? 'block' : 'none';
    }
    if (timeEl) timeEl.textContent = item.createdAt ? `🕒 ${item.createdAt}` : 'Đã gắn trên Cội Cây Tri Thức 3D';

    document.getElementById('tribute-card-viewer-modal')?.classList.remove('hidden');
  }

  closeTributeCardViewer() {
    document.getElementById('tribute-card-viewer-modal')?.classList.add('hidden');
  }

  stepTributeCard(dir) {
    if (!this.tributes || this.tributes.length === 0) return;
    this.audio.playClickChime();
    const nextIdx = (this.activeTributeIndex + dir + this.tributes.length) % this.tributes.length;
    this.openTributeCardViewer(nextIdx);
  }

  // ==================== MODAL CỘI CÂY TRI THỨC NGÀN SAO ====================
  openWishingTreeModal() {
    this.closeArtifactModal();
    this.closeTributeCardViewer();
    this.closeMuseumMenu();
    this.renderTributesList();
    document.getElementById('wishing-tree-modal')?.classList.remove('hidden');
  }

  // =========================================================================
  // GIAO DIỆN BỨC TƯỜNG KÝ ỨC (THƯ VIỆN ẢNH TƯ LIỆU, XEM 01 ẢNH CHI TIẾT, UPLOAD FORM)
  // =========================================================================
  openMemoryLibraryModal() {
    this.closeAllModals();
    const modal = document.getElementById('memory-wall-library-modal');
    if (modal) {
      modal.classList.remove('hidden');
      this.initMemoryLibraryEvents();
      this.renderMemoryLibraryCards('');
      this.loadMemoriesFromGoogleSheet();
    }
  }

  closeMemoryLibraryModal() {
    document.getElementById('memory-wall-library-modal')?.classList.add('hidden');
  }

  initMemoryLibraryEvents() {
    if (this._memoryEventsInitialized) return;
    this._memoryEventsInitialized = true;

    const searchInput = document.getElementById('memory-search-input');
    const filterBtns = document.querySelectorAll('.memory-filter-btn');

    let currentCat = 'all';

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        this.renderMemoryLibraryCards(searchInput.value || '', currentCat);
      });
    }

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        currentCat = btn.dataset.filter || 'all';
        const q = searchInput ? searchInput.value || '' : '';
        this.renderMemoryLibraryCards(q, currentCat);
      });
    });
  }

  renderMemoryLibraryCards(query = '', category = 'all') {
    const container = document.getElementById('memory-cards-container');
    if (!container) return;

    const list = window.MEMORY_WALL_DATA || [];
    const countAllEl = document.getElementById('memory-count-all');
    if (countAllEl) countAllEl.textContent = list.length;

    const q = (query || '').trim().toLowerCase();

    const filtered = list.filter((item) => {
      const matchCat = (category === 'all' || !category) ? true : item.category === category;
      if (!matchCat) return false;
      if (!q) return true;

      const haystack = [
        item.teacherName,
        item.workplace,
        item.teacherInfo,
        item.teacherTitle,
        item.senderName,
        item.studentName,
        item.school,
        item.province,
        item.story
      ].join(' ').toLowerCase();

      return haystack.includes(q);
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 16px; color: #94a3b8;">
          <div style="font-size: 38px; margin-bottom: 8px;">🔍</div>
          <div style="font-size: 16px; font-weight: 700; color: #ffd700;">Không tìm thấy ảnh tư liệu phù hợp</div>
          <p style="font-size: 13px; margin-top: 4px;">Hãy thử tìm từ khóa khác hoặc bấm nút "Đóng Góp Ảnh Nhà Giáo" để bổ sung ngay!</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map((item) => {
      const photoSrc = item.photo || item.photoAfter || item.photoBefore || '';
      const workplaceStr = item.workplace || [item.school, item.province].filter(Boolean).join(' • ') || item.teacherTitle || 'Ngành Giáo dục Việt Nam';
      const senderStr = item.senderName || item.studentName || 'Học sinh';

      return `
        <div class="memory-card-item" onclick="window.app && window.app.openMemoryDetailModalById('${item.id}')">
          <div class="memory-card-thumb-wrap">
            <img class="memory-card-thumb" src="${photoSrc}" alt="${item.teacherName}" onerror="this.src='assets/teachers/dt_26_nguyen_tat_thanh.jpg'" loading="lazy" />
            <span class="memory-card-badge">📸 ẢNH TƯ LIỆU</span>
            <div class="memory-card-hover-prompt">
              <span class="memory-card-hover-btn">🔍 Xem Chi Tiết & Tri Ân</span>
            </div>
          </div>
          <div class="memory-card-info">
            <h3 class="memory-card-teacher">${item.teacherName}</h3>
            <p class="memory-card-sub">🏫 ${workplaceStr}</p>
            <p class="memory-card-student">Người gửi: ${senderStr}</p>
            <p class="memory-card-meta">🕒 ${item.createdAt || 'Lưu trữ'}</p>
          </div>
        </div>
      `;
    }).join('');
  }

  openMemoryDetailModalById(id) {
    const list = window.MEMORY_WALL_DATA || [];
    const item = list.find((m) => m.id === id);
    if (item) {
      this.openMemoryDetailModal(item);
    }
  }

  // Popup xem chi tiết 01 ảnh duy nhất kèm thông tin Thầy Cô và lời tri ân
  openMemoryDetailModal(item) {
    this.closeAllModals();
    const modal = document.getElementById('memory-detail-modal');
    if (!modal) return;

    modal.classList.remove('hidden');

    const photoEl = document.getElementById('detail-memory-photo');
    const tName = document.getElementById('detail-teacher-name');
    const tWorkplace = document.getElementById('detail-workplace-text');
    const tInfo = document.getElementById('detail-teacher-info');
    const sName = document.getElementById('detail-sender-name');
    const captionEl = document.getElementById('detail-photo-caption');

    const photoSrc = item.photo || item.photoAfter || item.photoBefore || '';
    if (photoEl) {
      const fallbackPhoto = 'assets/teachers/dt_26_nguyen_tat_thanh.jpg';
      photoEl.onerror = () => {
        photoEl.src = fallbackPhoto;
      };
      if (photoSrc && (photoSrc.startsWith('http') || photoSrc.startsWith('data:image') || photoSrc.startsWith('assets/'))) {
        photoEl.src = photoSrc;
      } else {
        photoEl.src = fallbackPhoto;
      }
    }

    if (tName) tName.textContent = item.teacherName || 'Thầy Cô Kính Yêu';
    if (tWorkplace) {
      const wp = item.workplace || [item.school, item.province].filter(Boolean).join(' • ') || item.teacherTitle || 'Ngành Giáo dục Việt Nam';
      tWorkplace.textContent = wp;
    }
    if (tInfo) {
      tInfo.textContent = item.teacherInfo || item.story || item.teacherTitle || 'Tư liệu và thông tin ghi nhận sự cống hiến tận tụy của Thầy Cô cho sự nghiệp trồng người.';
    }
    if (sName) {
      sName.textContent = item.senderName || item.studentName || 'Học sinh cả nước trân trọng gửi tặng';
    }
    if (captionEl) {
      captionEl.innerHTML = `<span>🏛️ Bảo tàng số Nhà giáo Việt Nam • Mã tư liệu: <b>${item.id || 'MEM-VN'}</b> • ${item.createdAt || 'Lưu trữ'}</span>`;
    }
  }

  closeMemoryDetailModal() {
    document.getElementById('memory-detail-modal')?.classList.add('hidden');
  }

  openMemoryUploadModal() {
    this.closeAllModals();
    document.getElementById('memory-upload-modal')?.classList.remove('hidden');
  }

  closeMemoryUploadModal() {
    document.getElementById('memory-upload-modal')?.classList.add('hidden');
  }

  handlePreviewFile(event, previewId) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    this.selectedMemoryFile = file;

    const reader = new FileReader();
    reader.onload = (e) => {
      const originalDataUrl = e.target.result;
      const preview = document.getElementById(previewId);
      const labelPhoto = document.getElementById('label-photo');

      // Tự động tối ưu dung lượng ảnh qua Canvas (tối đa 1200px, JPEG 0.85) để tải siêu nhanh lên Drive
      const img = new Image();
      img.onload = () => {
        try {
          let width = img.width;
          let height = img.height;
          const maxDim = 1200;
          if (width > maxDim || height > maxDim) {
            if (width > height) {
              height = Math.round((height * maxDim) / width);
              width = maxDim;
            } else {
              width = Math.round((width * maxDim) / height);
              height = maxDim;
            }
          }
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.85);

          if (preview) {
            preview.src = compressedDataUrl;
            preview.style.display = 'block';
          }
        } catch (cErr) {
          if (preview) {
            preview.src = originalDataUrl;
            preview.style.display = 'block';
          }
        }
        if (labelPhoto) {
          labelPhoto.textContent = `✅ Đã chọn ảnh: ${file.name}`;
          labelPhoto.style.color = '#ffd700';
        }
      };
      img.onerror = () => {
        if (preview) {
          preview.src = originalDataUrl;
          preview.style.display = 'block';
        }
        if (labelPhoto) {
          labelPhoto.textContent = `✅ Đã chọn ảnh: ${file.name}`;
          labelPhoto.style.color = '#ffd700';
        }
      };
      img.src = originalDataUrl;
    };
    reader.readAsDataURL(file);
  }

  // Xử lý gửi Form Đóng Góp Ảnh Tư Liệu Nhà Giáo - Up xong hiện ngay lập tức (Live-Update)
  async handleMemoryUploadSubmit(e) {
    e.preventDefault();

    const teacherNameInput = document.getElementById('upload-teacher-name');
    const teacherBioInput = document.getElementById('upload-teacher-bio');
    const senderNameInput = document.getElementById('upload-sender-name');
    const senderSchoolInput = document.getElementById('upload-sender-school');
    const senderCityInput = document.getElementById('upload-sender-city');
    const previewImg = document.getElementById('preview-photo-img');

    const teacherName = this.formatVietnameseProperName(teacherNameInput?.value || '');
    const teacherBio = this.formatVietnameseSentence(teacherBioInput?.value || '');
    const senderName = this.formatVietnameseProperName(senderNameInput?.value || '');
    const senderSchool = this.formatVietnameseSchool(senderSchoolInput?.value || '');
    const senderCity = this.formatVietnameseProvince(senderCityInput?.value || '');
    const photoDataUrl = previewImg?.src || '';

    if (!photoDataUrl || !previewImg.style.display || previewImg.style.display === 'none') {
      alert('Vui lòng chọn 01 file ảnh chân dung/tư liệu của Thầy/Cô trước khi gửi!');
      return;
    }
    if (!teacherName) {
      alert('Vui lòng nhập Tên Thầy / Cô giáo!');
      return;
    }
    if (!teacherBio) {
      alert('Vui lòng nhập Thông tin & Tiểu sử nhà giáo (môn dạy, chức vụ, quá trình công tác, cống hiến...)!');
      return;
    }
    if (!senderName) {
      alert('Vui lòng nhập Họ và tên người gửi!');
      return;
    }

    const submitBtn = document.getElementById('btn-submit-upload-memory');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>⏳ ĐANG ĐĂNG TƯ LIỆU LÊN BẢO TÀNG...</span>';
    }

    // Tách chuỗi Base64 nguyên bản (bỏ tiền tố data:image/...;base64,)
    let base64Data = '';
    let mimeType = 'image/jpeg';
    let fileName = `anh_nha_giao_${Date.now()}.jpg`;

    if (this.selectedMemoryFile) {
      mimeType = this.selectedMemoryFile.type || 'image/jpeg';
      fileName = this.selectedMemoryFile.name || fileName;
    }

    if (photoDataUrl.includes(',')) {
      base64Data = photoDataUrl.split(',')[1];
    } else {
      base64Data = photoDataUrl;
    }

    // Tách Lớp và Trường nếu người dùng nhập chung vào ô Trường học & Lớp
    let finalSchool = senderSchool;
    let finalClass = '';
    if (finalSchool.includes('•')) {
      const parts = finalSchool.split('•');
      finalSchool = parts[0].trim();
      finalClass = parts[1].trim();
    } else if (finalSchool.includes('-')) {
      const parts = finalSchool.split('-');
      if (parts[1].toLowerCase().includes('lớp') || /^[0-9]/.test(parts[1].trim())) {
        finalSchool = parts[0].trim();
        finalClass = parts[1].trim();
      }
    } else if (finalSchool.toLowerCase().includes('lớp')) {
      const match = finalSchool.match(/(.*?)(?:,\s*|\s+)(lớp\s*[a-zA-Z0-9_\-]+.*)/i);
      if (match) {
        finalSchool = match[1].trim();
        finalClass = match[2].trim();
      }
    }

    const workplaceStr = [finalSchool, finalClass, senderCity].filter(Boolean).join(' • ') || 'Đóng góp tư liệu';

    const newMemoryItem = {
      id: 'mem-' + Date.now(),
      teacherName: teacherName,
      workplace: workplaceStr,
      school: finalSchool,
      className: finalClass,
      province: senderCity,
      teacherInfo: teacherBio,
      teacherTitle: workplaceStr,
      senderName: senderName,
      studentName: senderName,
      photo: photoDataUrl,
      photoAfter: photoDataUrl,
      photoBefore: photoDataUrl,
      story: teacherBio,
      category: 'modern',
      createdAt: new Date().toLocaleDateString('vi-VN')
    };

    // 1. CẬP NHẬT TỨC THÌ (LIVE-UPDATE): Đưa bài đăng mới lên ngay vị trí đầu tiên
    window.MEMORY_WALL_DATA = window.MEMORY_WALL_DATA || [];
    window.MEMORY_WALL_DATA.unshift(newMemoryItem);
    this.saveMemoriesToLocal();

    // 2. Re-render danh sách thẻ bài của Thư Viện ngay lập tức (không cần F5)
    this.renderMemoryLibraryCards('');

    // 3. Cập nhật Kiosk Totem 3D
    if (this.builder && typeof this.builder.updateMemoryWallPage === 'function') {
      this.builder.updateMemoryWallPage(0);
    }

    // 4. Phát âm thanh chuông chime hân hoan
    this.audio.playClickChime();

    // 5. Chuẩn bị payload chuẩn theo hướng dẫn của Google Apps Script
    const drivePayload = {
      action: 'addMemory',
      base64: base64Data,
      mimeType: mimeType,
      fileName: fileName,
      teacherName: teacherName,
      teacherBio: teacherBio,
      senderName: senderName,
      senderClass: finalClass,
      senderSchool: finalSchool,
      senderCity: senderCity
    };

    // Gửi ngầm tới Google Drive Folder và Tab "ảnh" (gid: 99743454)
    this.pushMemoryToGoogleSheet(drivePayload).finally(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>🚀 ĐĂNG ẢNH LÊN BỨC TƯỜNG KÝ ỨC NGAY</span>';
      }

      // Reset form sạch sẽ
      if (teacherNameInput) teacherNameInput.value = '';
      if (teacherBioInput) teacherBioInput.value = '';
      if (senderNameInput) senderNameInput.value = '';
      if (senderSchoolInput) senderSchoolInput.value = '';
      if (senderCityInput) senderCityInput.value = '';
      const fileInput = document.getElementById('file-photo-input');
      if (fileInput) fileInput.value = '';
      if (previewImg) {
        previewImg.src = '';
        previewImg.style.display = 'none';
      }
      this.selectedMemoryFile = null;
      const labelPhoto = document.getElementById('label-photo');
      if (labelPhoto) {
        labelPhoto.textContent = 'Bấm vào đây để chọn 01 file ảnh chân dung/tư liệu';
        labelPhoto.style.color = '#cbd5e1';
      }

      // Đóng form upload và lập tức mở Popup xem chi tiết bức ảnh vừa đăng
      this.closeMemoryUploadModal();
      this.openMemoryDetailModal(newMemoryItem);
    });
  }

  async pushMemoryToGoogleSheet(data) {
    if (!this.sheetWebAppUrl) return false;
    try {
      // Gửi POST JSON qua fetch mode: 'no-cors' (Content-Type: text/plain;charset=utf-8 để tránh CORS preflight và bảo đảm Apps Script đọc contents chuẩn xác)
      await fetch(this.sheetWebAppUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(data)
      });
      return true;
    } catch (err) {
      console.warn('Lưu ảnh Google Drive ngầm:', err);
      return false;
    }
  }

  closeAllModals() {
    this.closeWishingTreeModal();
    this.closeTributeCardViewer();
    this.closeTributeSearchModal();
    this.closeMinisterModal();
    this.closeTeacherModal();
    this.closeThemeModal();
    this.closeMemoryLibraryModal();
    this.closeMemoryDetailModal();
    this.closeMemoryUploadModal();
    document.getElementById('artifact-modal')?.classList.remove('active');
  }

  closeWishingTreeModal() {
    document.getElementById('wishing-tree-modal')?.classList.add('hidden');
  }

  // ==================== TOUR THAM QUAN TỰ ĐỘNG ====================
  toggleGuidedTour() {
    if (this.isTourActive) {
      this.stopGuidedTour();
    } else {
      this.startGuidedTour();
    }
  }

  startGuidedTour() {
    this.isTourActive = true;
    this.tourIndex = 0;
    const btn = document.getElementById('btn-guided-tour');
    if (btn) {
      btn.classList.add('active');
      const strong = btn.querySelector('strong');
      if (strong) strong.textContent = '⏹ Dừng Tour Tự Động';
      else btn.innerHTML = '⏹ Dừng Tour Tự Động';
    }
    this.runTourStep();
  }

  stopGuidedTour() {
    this.isTourActive = false;
    if (this.tourTimer) {
      clearTimeout(this.tourTimer);
      this.tourTimer = null;
    }
    const btn = document.getElementById('btn-guided-tour');
    if (btn) {
      btn.classList.remove('active');
      const strong = btn.querySelector('strong');
      if (strong) strong.textContent = 'Tour Tham Quan Tự Động';
      else btn.innerHTML = '🧭 Tour Tự Động';
    }
  }

  runTourStep() {
    if (!this.isTourActive) return;
    const art = window.ARTIFACTS[this.tourIndex];
    this.focusOnArtifact(art, true);

    this.tourTimer = setTimeout(() => {
      if (!this.isTourActive) return;
      this.tourIndex = (this.tourIndex + 1) % window.ARTIFACTS.length;
      this.runTourStep();
    }, 11000);
  }

  // ==================== CỘI CÂY TRI THỨC NGÀN SAO & TÌM KIẾM THÔNG ĐIỆP ====================
  openTributeSearchModal() {
    this.closeArtifactModal();
    this.closeTributeCardViewer();
    this.closeWishingTreeModal();
    this.closeMuseumMenu();
    document.getElementById('tribute-search-modal')?.classList.remove('hidden');
    const input = document.getElementById('modal-tribute-search-input');
    if (input) {
      input.value = '';
      setTimeout(() => input.focus(), 80);
    }
    this.renderTributeSearchModalResults('');
  }

  closeTributeSearchModal() {
    document.getElementById('tribute-search-modal')?.classList.add('hidden');
  }

  renderTributeSearchModalResults(query = '') {
    const container = document.getElementById('modal-tribute-search-results');
    const badge = document.getElementById('modal-search-count-badge');
    const clearBtn = document.getElementById('btn-clear-modal-search');
    if (!container) return;

    const list = (this.tributes && this.tributes.length > 0) ? this.tributes : (window.INITIAL_TRIBUTES || []);
    const q = (query || '').trim().toLocaleLowerCase('vi-VN');

    if (clearBtn) {
      clearBtn.classList.toggle('hidden', !q);
    }

    const matched = list
      .map((t, idx) => ({ t, idx }))
      .filter(({ t }) => {
        if (!q) return true;
        const haystack = [
          t.senderName || t.sender || '',
          t.className || '',
          t.school || '',
          t.province || '',
          t.teacher || '',
          t.message || ''
        ]
          .join(' ')
          .toLocaleLowerCase('vi-VN');
        return haystack.includes(q);
      });

    if (badge) {
      if (q) {
        badge.textContent = `Tìm thấy ${matched.length.toLocaleString('vi-VN')} thông điệp phù hợp với từ khóa "${query}" (trong tổng số ${list.length.toLocaleString('vi-VN')} lời chúc trên cây)`;
      } else {
        badge.textContent = `Hiển thị toàn bộ ${list.length.toLocaleString('vi-VN')} bức thông điệp tri ân đang tỏa sáng trên Cội Cây Tri Thức (Click vào bất kỳ thiệp nào để đọc)`;
      }
    }

    if (matched.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 36px 16px; color: #d0c8b6;">
          <div style="font-size: 32px; margin-bottom: 8px;">🍂</div>
          <div style="font-size: 15px; font-weight: 600; color: #ffd579; margin-bottom: 6px;">Không tìm thấy thông điệp nào khớp với "${query}"</div>
          <div style="font-size: 13px; color: #9bb0c9;">Bạn có thể thử tìm theo Họ tên không dấu/có dấu, Lớp, Trường hoặc Tên Thầy Cô.</div>
        </div>
      `;
      return;
    }

    container.innerHTML = matched
      .map(({ t, idx }) => {
        const num = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;
        const metaParts = [
          t.className ? `Lớp ${t.className.replace(/^lớp\s+/i, '')}` : '',
          t.school || '',
          t.province || ''
        ].filter(Boolean);
        const metaStr = metaParts.length > 0 ? metaParts.join(' • ') : '';

        return `
          <div class="modal-search-card" data-card-idx="${idx}" title="Bấm để mở đọc thông điệp này">
            <div class="modal-search-card-header">
              <span class="modal-search-card-num">🍃 THẺ TRI ÂN #${num}</span>
              <span class="modal-search-card-badge">Xem thiệp ➔</span>
            </div>
            <div class="modal-search-card-teacher">Kính gửi: ${t.teacher || 'Thầy Cô Kính Mến'}</div>
            <div class="modal-search-card-msg">“${t.message || ''}”</div>
            <div class="modal-search-card-footer">
              <span class="modal-search-card-sender">— ${t.senderName || t.sender || 'Học trò'}</span>
              <span class="modal-search-card-meta">${metaStr}</span>
            </div>
          </div>
        `;
      })
      .join('');

    container.querySelectorAll('[data-card-idx]').forEach((el) => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.dataset.cardIdx, 10);
        this.audio.playClickChime();
        this.closeTributeSearchModal();
        this.openTributeCardViewer(idx);
      });
    });
  }

  // ==================== CỘI CÂY TRI THỨC NGÀN SAO & ĐỒNG BỘ NGẦM LÊN SHEET ====================
  renderTributesList() {
    const container = document.getElementById('tribute-cards-list');
    const countBadge = document.getElementById('tribute-total-count-badge');
    if (countBadge) {
      countBadge.textContent = `Tổng số: ${this.tributes.length.toLocaleString('vi-VN')} vì sao & thiệp tri ân đang tỏa sáng`;
    }
    if (!container) return;

    const q = (this.tributeSearchQuery || '').trim().toLocaleLowerCase('vi-VN');
    const indexedItems = this.tributes
      .map((t, idx) => ({ t, idx }))
      .filter(({ t }) => {
        if (!q) return true;
        const haystack = [
          t.senderName || t.sender || '',
          t.className || '',
          t.school || '',
          t.province || '',
          t.teacher || '',
          t.message || ''
        ]
          .join(' ')
          .toLocaleLowerCase('vi-VN');
        return haystack.includes(q);
      });

    if (indexedItems.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align:center; padding: 18px; color: var(--ivory-soft); font-size: 13px;">
          Không tìm thấy ngôi sao tri ân nào khớp với từ khóa <strong>"${this.tributeSearchQuery}"</strong>.
        </div>
      `;
      return;
    }

    container.innerHTML = indexedItems
      .map(({ t, idx }) => {
        const metaParts = [
          t.className ? `Lớp ${t.className.replace(/^lớp\s+/i, '')}` : '',
          t.school || '',
          t.province || ''
        ].filter(Boolean);
        const metaStr = metaParts.length > 0 ? ` • ${metaParts.join(' • ')}` : '';
        return `
      <div class="tribute-item" data-tribute-idx="${idx}" title="Click để mở Khung Thiệp Tri Ân Hoàng Gia">
        <div class="tribute-teacher">✦ Ngôi sao #${idx + 1} • Kính gửi: ${t.teacher}</div>
        <p class="tribute-msg">“${t.message}”</p>
        <div class="tribute-sender">— <strong>${t.senderName || t.sender}</strong>${metaStr}</div>
      </div>
    `;
      })
      .join('');

    container.querySelectorAll('[data-tribute-idx]').forEach((el) => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.dataset.tributeIdx, 10);
        this.audio.playClickChime();
        this.openTributeCardViewer(idx);
      });
    });
  }

  async pushTributeToGoogleSheet(tributeItem) {
    if (!this.sheetWebAppUrl) return false;
    try {
      const params = new URLSearchParams({
        action: 'add',
        sheetId: this.googleSheetId,
        createdAt: tributeItem.createdAt || new Date().toLocaleString('vi-VN'),
        sender: tributeItem.senderName || tributeItem.sender || '',
        senderName: tributeItem.senderName || tributeItem.sender || '',
        className: tributeItem.className || '',
        school: tributeItem.school || '',
        province: tributeItem.province || '',
        teacher: tributeItem.teacher || '',
        message: tributeItem.message || ''
      });
      const sep = this.sheetWebAppUrl.includes('?') ? '&' : '?';
      const getUrl = `${this.sheetWebAppUrl}${sep}${params.toString()}`;

      await fetch(getUrl, {
        method: 'GET',
        mode: 'no-cors',
        cache: 'no-store'
      });
      return true;
    } catch (err) {
      console.warn('Đồng bộ ngầm:', err);
      return false;
    }
  }

  handleAddTribute(e) {
    e.preventDefault();
    const senderInput = document.getElementById('tribute-sender');
    const classInput = document.getElementById('tribute-class');
    const schoolInput = document.getElementById('tribute-school');
    const provinceInput = document.getElementById('tribute-province');
    const teacherInput = document.getElementById('tribute-teacher');
    const msgInput = document.getElementById('tribute-message');

    // Tự động chuẩn hóa viết hoa đúng chính tả Tiếng Việt cho toàn bộ các trường trước khi lưu
    const senderName = this.formatVietnameseProperName(senderInput?.value || '');
    const className = this.formatClassCode(classInput?.value || '');
    const school = this.formatVietnameseSchool(schoolInput?.value || '');
    const province = this.formatVietnameseProvince(provinceInput?.value || '');
    const teacher = this.formatVietnameseProperName(teacherInput?.value || '');
    const message = this.formatVietnameseSentence(msgInput?.value || '');

    if (senderInput) senderInput.value = senderName;
    if (classInput) classInput.value = className;
    if (schoolInput) schoolInput.value = school;
    if (provinceInput) provinceInput.value = province;
    if (teacherInput) teacherInput.value = teacher;
    if (msgInput) msgInput.value = message;

    if (!senderName || !teacher || !message) return;

    const nowStr = new Date().toLocaleString('vi-VN');
    const newTribute = {
      id: `wish-${Date.now()}`,
      sender: senderName,
      senderName,
      className,
      school,
      province,
      teacher,
      message,
      createdAt: nowStr
    };

    // Đưa thiệp mới lên vị trí số 1
    this.tributes.unshift(newTribute);
    this.saveTributesToLocal();
    this.renderTributesList();

    // Cập nhật lại các thẻ vàng 3D & kích hoạt hiệu ứng bùng nổ sao băng trên Cây Tri Ân 3D
    this.builder.rebuildWishingTreeCards(this.tributes);
    if (typeof this.builder.triggerWishStarBurst === 'function') {
      this.builder.triggerWishStarBurst();
    }
    this.audio.playClickChime();

    // Tự động ghi ngầm 7 cột đã chuẩn hóa sang Google Sheet của quản trị viên
    this.pushTributeToGoogleSheet(newTribute);

    // Đưa góc nhìn tới Cây Tri Ân 3D và mở ngay Khung Thiệp Tri Ân Hoàng Gia hiển thị lời nhắn vừa gửi!
    const treeArt = window.ARTIFACTS.find((a) => a.id === 'art-wishing-tree');
    if (treeArt) {
      this.focusOnArtifact(treeArt, false);
    }

    if (senderInput) senderInput.value = '';
    if (classInput) classInput.value = '';
    if (schoolInput) schoolInput.value = '';
    if (provinceInput) provinceInput.value = '';
    if (teacherInput) teacherInput.value = '';
    if (msgInput) msgInput.value = '';

    this.openTributeCardViewer(0);
  }

  // ==================== SỰ KIỆN CHUỘT, BÀN PHÍM & MŨI TÊN CHUYỂN PHÒNG ====================
  bindEvents() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    const dom = this.renderer.domElement;

    dom.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return;
      this.isDragging = true;
      this.dragMoved = false;
      this.downMouse.x = e.clientX;
      this.downMouse.y = e.clientY;
      this.prevMouse.x = e.clientX;
      this.prevMouse.y = e.clientY;
    });

    window.addEventListener('pointermove', (e) => {
      this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

      if (!this.isDragging) {
        this.checkHoverArtifact(e.clientX, e.clientY);
        return;
      }

      const totalDx = e.clientX - this.downMouse.x;
      const totalDy = e.clientY - this.downMouse.y;
      if (Math.hypot(totalDx, totalDy) > 8) {
        this.dragMoved = true;
      }

      const dx = e.clientX - this.prevMouse.x;
      const dy = e.clientY - this.prevMouse.y;
      this.prevMouse.x = e.clientX;
      this.prevMouse.y = e.clientY;

      if (this.cameraMode === 'inspect' && this.selectedArtifact) {
        this.orbitAngle -= dx * 0.0065;
        this.orbitHeight = Math.max(1.2, Math.min(4.8, this.orbitHeight + dy * 0.008));
        this.targetCameraPos.set(
          this.selectedArtifact.position.x + Math.sin(this.orbitAngle) * this.orbitRadius,
          this.orbitHeight,
          this.selectedArtifact.position.z + Math.cos(this.orbitAngle) * this.orbitRadius
        );
      } else {
        this.yaw += dx * 0.0042;
        const minPitch = Math.PI / 2 - 1.9; // ~ -0.329 rad
        const maxPitch = Math.PI / 2 - 1.2; // ~ +0.371 rad
        this.pitch = Math.max(minPitch, Math.min(maxPitch, this.pitch + dy * 0.0028));
        this.updateLookAtFromYawPitch();
      }
    });

    window.addEventListener('pointerup', (e) => {
      if (!this.isDragging) return;
      this.isDragging = false;
      if (!this.dragMoved) {
        this.handleCanvasClick(e);
      }
    });

    dom.addEventListener(
      'wheel',
      (e) => {
        e.preventDefault();
        const delta = Math.sign(e.deltaY);
        if (this.cameraMode === 'inspect' && this.selectedArtifact) {
          this.orbitRadius = Math.max(1.8, Math.min(7.5, this.orbitRadius + delta * 0.35));
          this.targetCameraPos.set(
            this.selectedArtifact.position.x + Math.sin(this.orbitAngle) * this.orbitRadius,
            this.orbitHeight,
            this.selectedArtifact.position.z + Math.cos(this.orbitAngle) * this.orbitRadius
          );
        } else {
          // Lăn chuột tiến lùi êm ái, biên độ vừa phải (0.55m) chống giật hoặc vọt ra ngoài phòng
          const forward = new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw));
          this.targetCameraPos.addScaledVector(forward, -delta * 0.55);
          this.clampPositionToMuseumBounds(this.targetCameraPos);
          this.updateLookAtFromYawPitch();
        }
      },
      { passive: false }
    );

    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.code in this.keys) {
        this.keys[e.code] = true;
        if (this.cameraMode === 'inspect') {
          this.cameraMode = 'free';
          this.syncYawPitchFromLookAt();
        }
      }
      if (e.code === 'Escape') {
        this.closeArtifactModal();
        this.closeTributeCardViewer();
        this.closeWishingTreeModal();
        this.closeTributeSearchModal();
        this.closeMuseumMenu();
        document.getElementById('catalog-drawer')?.classList.remove('open');
      }
    });

    window.addEventListener('keyup', (e) => {
      if (e.code in this.keys) {
        this.keys[e.code] = false;
      }
    });

    document.getElementById('btn-exterior-enter')?.addEventListener('click', () => {
      this.flyIntoMuseum();
    });

    document.getElementById('btn-quick-guide')?.addEventListener('click', () => {
      this.audio.playClickChime();
      this.closeMuseumMenu();
      document.getElementById('welcome-overlay')?.classList.remove('hidden');
    });

    document.getElementById('btn-menu-go-exterior')?.addEventListener('click', () => {
      this.audio.playClickChime();
      this.closeMuseumMenu();
      this.goToExterior();
    });

    document.getElementById('btn-close-welcome')?.addEventListener('click', () => {
      document.getElementById('welcome-overlay')?.classList.add('hidden');
    });

    // Tự động kích hoạt phát nhạc "Người Thầy Việt Nam" ngay khi có tương tác đầu tiên
    const ensureMusicPlays = () => {
      if (!this.audio.isAmbientPlaying) {
        this.audio.startAmbient();
        this.updateAudioButtonUI(true);
      }
      window.removeEventListener('pointerdown', ensureMusicPlays);
      window.removeEventListener('keydown', ensureMusicPlays);
    };
    window.addEventListener('pointerdown', ensureMusicPlays, { once: true });
    window.addEventListener('keydown', ensureMusicPlays, { once: true });

    // Sự kiện mở / đóng Menu Trung Tâm (#museum-menu-drawer)
    document.getElementById('btn-toggle-menu')?.addEventListener('click', () => {
      this.audio.playClickChime();
      this.toggleMuseumMenu();
    });

    document.getElementById('hud-zone-pill')?.addEventListener('click', () => {
      this.audio.playClickChime();
      this.toggleMuseumMenu();
    });

    document.getElementById('btn-close-menu')?.addEventListener('click', () => {
      this.closeMuseumMenu();
    });

    document.getElementById('btn-menu-wishing-tree')?.addEventListener('click', () => {
      this.audio.playClickChime();
      this.stopGuidedTour();
      this.closeMuseumMenu();
      this.navigateToZone('room-wishing-tree');
    });

    document.getElementById('btn-open-intro')?.addEventListener('click', () => {
      this.audio.playClickChime();
      this.closeMuseumMenu();
      document.getElementById('welcome-overlay')?.classList.remove('hidden');
    });

    // Sự kiện 2 nút Mũi tên chuyển phòng Trái / Phải trên màn hình
    document.getElementById('btn-arrow-prev-room')?.addEventListener('click', () => {
      this.stepRoom(-1);
    });

    document.getElementById('btn-arrow-next-room')?.addEventListener('click', () => {
      this.stepRoom(1);
    });

    document.getElementById('btn-wishing-tree-quick')?.addEventListener('click', () => {
      this.audio.playClickChime();
      this.stopGuidedTour();
      this.closeMuseumMenu();
      this.openWishingTreeModal();
    });

    document.getElementById('btn-memory-wall-quick')?.addEventListener('click', () => {
      this.audio.playClickChime();
      this.stopGuidedTour();
      this.closeMuseumMenu();
      this.openMemoryLibraryModal();
    });

    // Các tiện ích Cội Cây Tri Thức & Tra cứu thông điệp nằm gọn gàng trong Menu
    document.getElementById('btn-menu-write-tribute')?.addEventListener('click', () => {
      this.audio.playClickChime();
      this.closeMuseumMenu();
      this.openWishingTreeModal();
    });

    document.getElementById('btn-menu-random-leaf')?.addEventListener('click', () => {
      if (!this.tributes || this.tributes.length === 0) return;
      this.audio.playClickChime();
      this.closeMuseumMenu();
      const randIdx = Math.floor(Math.random() * this.tributes.length);
      this.openTributeCardViewer(randIdx);
    });

    const menuTreeSearch = document.getElementById('menu-tree-search-input');
    if (menuTreeSearch) {
      menuTreeSearch.addEventListener('input', () => {
        this.renderMenuTreeLiveSearch(menuTreeSearch.value || '');
      });
      menuTreeSearch.addEventListener('focus', () => {
        if (menuTreeSearch.value && menuTreeSearch.value.trim()) {
          this.renderMenuTreeLiveSearch(menuTreeSearch.value);
        }
      });
    }

    document.getElementById('btn-header-speaker')?.addEventListener('click', () => {
      const playing = this.audio.toggleAmbient();
      this.updateAudioButtonUI(playing);
    });

    document.getElementById('btn-toggle-audio')?.addEventListener('click', () => {
      const playing = this.audio.toggleAmbient();
      this.updateAudioButtonUI(playing);
    });

    document.getElementById('btn-toggle-catalog')?.addEventListener('click', () => {
      this.audio.playClickChime();
      this.closeMuseumMenu();
      document.getElementById('catalog-drawer')?.classList.toggle('open');
    });

    document.getElementById('btn-close-catalog')?.addEventListener('click', () => {
      document.getElementById('catalog-drawer')?.classList.remove('open');
    });

    document.getElementById('btn-guided-tour')?.addEventListener('click', () => {
      this.audio.playClickChime();
      this.closeMuseumMenu();
      this.toggleGuidedTour();
    });

    document.getElementById('btn-close-modal')?.addEventListener('click', () => {
      this.closeArtifactModal();
    });

    document.getElementById('btn-prev-artifact')?.addEventListener('click', () => {
      this.stepAdjacentItem(-1);
    });

    document.getElementById('btn-next-artifact')?.addEventListener('click', () => {
      this.stepAdjacentItem(1);
    });

    // Sự kiện Tra Cứu Thông Điệp Tri Ân Trên Cội Cây (#tribute-search-modal)
    document.getElementById('btn-header-search-tribute')?.addEventListener('click', () => {
      this.audio.playClickChime();
      this.stopGuidedTour();
      this.closeMuseumMenu();
      this.openTributeSearchModal();
    });

    document.getElementById('btn-viewer-open-search')?.addEventListener('click', () => {
      this.audio.playClickChime();
      this.openTributeSearchModal();
    });

    document.getElementById('btn-close-tribute-search')?.addEventListener('click', () => {
      this.closeTributeSearchModal();
    });

    const modalSearchInput = document.getElementById('modal-tribute-search-input');
    if (modalSearchInput) {
      modalSearchInput.addEventListener('input', () => {
        this.renderTributeSearchModalResults(modalSearchInput.value || '');
      });
    }

    document.getElementById('btn-clear-modal-search')?.addEventListener('click', () => {
      if (modalSearchInput) {
        modalSearchInput.value = '';
        modalSearchInput.focus();
        this.renderTributeSearchModalResults('');
      }
    });

    // Sự kiện Khung Thiệp Tri Ân của Học sinh (#tribute-card-viewer-modal)
    document.getElementById('btn-close-tribute-viewer')?.addEventListener('click', () => {
      this.closeTributeCardViewer();
    });

    document.getElementById('btn-prev-tribute-card')?.addEventListener('click', () => {
      this.stepTributeCard(-1);
    });

    document.getElementById('btn-next-tribute-card')?.addEventListener('click', () => {
      this.stepTributeCard(1);
    });

    document.getElementById('btn-open-write-tribute')?.addEventListener('click', () => {
      this.audio.playClickChime();
      this.openWishingTreeModal();
    });

    // Sự kiện Modal Cội Cây Tri Thức (#wishing-tree-modal)
    document.getElementById('btn-close-wishing-modal')?.addEventListener('click', () => {
      this.closeWishingTreeModal();
    });

    document.getElementById('btn-random-star-tribute')?.addEventListener('click', () => {
      if (!this.tributes || this.tributes.length === 0) return;
      this.audio.playClickChime();
      const randIdx = Math.floor(Math.random() * this.tributes.length);
      this.openTributeCardViewer(randIdx);
    });

    document.querySelectorAll('.wish-preset-chip').forEach((chip) => {
      chip.addEventListener('click', () => {
        const msgEl = document.getElementById('tribute-message');
        const presetText = chip.dataset.preset || chip.dataset.wishPreset;
        if (msgEl && presetText) {
          this.audio.playClickChime();
          msgEl.value = presetText;
          msgEl.focus();
        }
      });
    });

    const searchInput = document.getElementById('tribute-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        this.tributeSearchQuery = searchInput.value || '';
        this.renderTributesList();
      });
    }

    // Tự động viết hoa đúng chính tả Tiếng Việt ngay khi người dùng nhập xong từng ô (sự kiện blur / change)
    const bindAutoFormat = (id, formatter) => {
      const el = document.getElementById(id);
      if (!el) return;
      const runFormat = () => {
        if (el.value && el.value.trim()) {
          el.value = formatter.call(this, el.value);
        }
      };
      el.addEventListener('blur', runFormat);
      el.addEventListener('change', runFormat);
    };

    bindAutoFormat('tribute-sender', this.formatVietnameseProperName);
    bindAutoFormat('tribute-class', this.formatClassCode);
    bindAutoFormat('tribute-school', this.formatVietnameseSchool);
    bindAutoFormat('tribute-province', this.formatVietnameseProvince);
    bindAutoFormat('tribute-teacher', this.formatVietnameseProperName);
    bindAutoFormat('tribute-message', this.formatVietnameseSentence);

    // Tự động viết hoa chuẩn cho Form đóng góp tư liệu Nhà giáo
    bindAutoFormat('upload-teacher-name', this.formatVietnameseProperName);
    bindAutoFormat('upload-teacher-bio', this.formatVietnameseSentence);
    bindAutoFormat('upload-sender-name', this.formatVietnameseProperName);
    bindAutoFormat('upload-sender-school', this.formatVietnameseSchool);
    bindAutoFormat('upload-sender-city', this.formatVietnameseProvince);

    document.getElementById('tribute-form')?.addEventListener('submit', (e) => {
      this.handleAddTribute(e);
    });

    // ==================== SỰ KIỆN ĐẠI HÀNH LANG ÁNH SÁNG & TRÁI TIM NGƯỜI THẦY ====================
  }

  stepAdjacentItem(dir) {
    this.audio.playClickChime();
    if (this.selectedArtifact?.ministerRecord) {
      const cur = this.selectedArtifact.ministerRecord.order;
      const nextOrder = ((cur - 1 + dir + 15) % 15) + 1;
      this.focusOnMinisterByOrder(nextOrder);
      return;
    }
    if (this.selectedArtifact?.personRecord) {
      const cur = this.selectedArtifact.personRecord.order;
      const nextOrder = ((cur - 1 + dir + 15) % 15) + 1;
      this.focusOnEducatorByOrder(nextOrder);
      return;
    }
    const idx = window.ARTIFACTS.findIndex((a) => a.id === this.selectedArtifact?.id);
    const nextArt = window.ARTIFACTS[((idx >= 0 ? idx : 0) + dir + window.ARTIFACTS.length) % window.ARTIFACTS.length];
    this.focusOnArtifact(nextArt, true);
  }

  updateAudioButtonUI(playing) {
    const btn = document.getElementById('btn-toggle-audio');
    const label = document.getElementById('menu-audio-label');
    if (btn) {
      btn.classList.toggle('active', playing);
      if (label) {
        label.textContent = playing ? 'Nhạc: "Người Thầy Việt Nam" (Đang phát)' : 'Nhạc Nền: Đang Tắt';
      } else {
        btn.innerHTML = playing ? '♫ "Người Thầy VN": Bật' : '♪ Nhạc nền: Tắt';
      }
    }

    const speakerBtn = document.getElementById('btn-header-speaker');
    const speakerIcon = document.getElementById('header-speaker-icon');
    const speakerText = document.getElementById('header-speaker-text');
    if (speakerBtn) {
      speakerBtn.classList.toggle('muted', !playing);
      speakerBtn.classList.toggle('active', playing);
      speakerBtn.title = playing ? 'Âm thanh: Đang Bật (Bấm để Tắt)' : 'Âm thanh: Đang Tắt (Bấm để Bật)';
      if (speakerIcon) speakerIcon.textContent = playing ? '🔊' : '🔇';
      if (speakerText) speakerText.textContent = '';
    }
  }

  findHitData(hitObj) {
    let curr = hitObj;
    while (curr) {
      if (
        curr.userData &&
        (curr.userData.isWriteTributeDesk ||
          curr.userData.isTributeCard ||
          curr.userData.artifact ||
          curr.userData.targetZoneId)
      ) {
        return curr.userData;
      }
      curr = curr.parent;
    }
    return null;
  }

  // Tìm đối tượng tương tác tốt nhất từ danh sách va chạm raycast
  // Ưu tiên TUYỆT ĐỐI cho Lá Vàng, Thiệp Lụa, Trái Tim Pha Lê, Bàn Giấy Bút, Bàn Trái Tim và Bàn Vinh Danh
  findBestHit(hits) {
    if (!hits || hits.length === 0) return null;

    // 0a. Ưu tiên Bức Tường Ký Ức Số / Digital Totem Kiosk: Mở Thư viện Ký ức
    for (let i = 0; i < hits.length; i++) {
      if (hits[i].object && hits[i].object.isPoints) continue;
      const data = this.findHitData(hits[i].object);
      if (data && (data.isMemoryTotem || data.isMemoryWall || data.isMemoryFrame || data.isMemoryOpenLibraryBtn || data.isMemoryPrevBtn || data.isMemoryNextBtn)) {
        return { hit: hits[i], data };
      }
    }

    // 1. Ưu tiên cao nhất: Thẻ Lụa, Lá Vàng, Tinh Cầu Tri Ân (isTributeCard)
    for (let i = 0; i < hits.length; i++) {
      if (hits[i].object && hits[i].object.isPoints) continue;
      const data = this.findHitData(hits[i].object);
      if (data && data.isTributeCard) {
        return { hit: hits[i], data };
      }
    }

    // 1b. Ưu tiên Trái Tim Pha Lê Ký Ức (isHeartStory)
    for (let i = 0; i < hits.length; i++) {
      if (hits[i].object && hits[i].object.isPoints) continue;
      const data = this.findHitData(hits[i].object);
      if (data && data.isHeartStory) {
        return { hit: hits[i], data };
      }
    }

    // 2. Ưu tiên nhì: Bàn Giấy Bút & Nghiên Mực ở gốc cây (isWriteTributeDesk)
    for (let i = 0; i < hits.length; i++) {
      if (hits[i].object && hits[i].object.isPoints) continue;
      const data = this.findHitData(hits[i].object);
      if (data && data.isWriteTributeDesk) {
        return { hit: hits[i], data };
      }
    }

    // 2b. Bàn Trái Tim & Sổ Ký Ức Vàng 3D (isWriteHeartDesk)
    for (let i = 0; i < hits.length; i++) {
      if (hits[i].object && hits[i].object.isPoints) continue;
      const data = this.findHitData(hits[i].object);
      if (data && data.isWriteHeartDesk) {
        return { hit: hits[i], data };
      }
    }

    // 2c. Bàn Vinh Danh & Tiếp Nhận Nhà Giáo Tiêu Biểu 3D (isSubmitEducatorDesk)
    for (let i = 0; i < hits.length; i++) {
      if (hits[i].object && hits[i].object.isPoints) continue;
      const data = this.findHitData(hits[i].object);
      if (data && data.isSubmitEducatorDesk) {
        return { hit: hits[i], data };
      }
    }

    // 3. Ưu tiên ba: Mũi tên chuyển phòng trên sàn 3D
    for (let i = 0; i < hits.length; i++) {
      const data = this.findHitData(hits[i].object);
      if (data && data.targetZoneId) {
        return { hit: hits[i], data };
      }
    }

    // 4. Các hiện vật / khung ảnh / thân cây
    for (let i = 0; i < hits.length; i++) {
      if (hits[i].object && hits[i].object.isPoints) continue;
      const data = this.findHitData(hits[i].object);
      if (data && data.artifact) {
        return { hit: hits[i], data };
      }
    }

    return null;
  }

  checkHoverArtifact(clientX, clientY) {
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const hits = this.raycaster.intersectObjects(this.builder.interactables, true);
    const tooltip = document.getElementById('artifact-tooltip');
    if (tooltip) tooltip.style.display = 'none';

    // Mặc định cho Cây Tri Ân xoay êm ái
    if (this.builder.wishingTreeAnimEntry) {
      this.builder.wishingTreeAnimEntry.rotateY = 0.18;
    }

    const best = this.findBestHit(hits);
    if (best && best.data) {
      const data = best.data;

      // 0a. Nếu rê chuột vào Màn hình Kiosk / Bức Tường Ký Ức Số
      if (data.isMemoryTotem || data.isMemoryWall || data.isMemoryOpenLibraryBtn || data.isMemoryFrame) {
        this.renderer.domElement.style.cursor = 'pointer';
        if (tooltip) {
          tooltip.className = 'minister-hover-tooltip';
          tooltip.innerHTML = `
            <div class="tt-order">🏛️ BẢO TÀNG SỐ NHÀ GIÁO VIỆT NAM</div>
            <div class="tt-name" style="color:#ffd700; font-size:16px;">BỨC TƯỜNG KÝ ỨC — SÁNG MÃI ƠN THẦY</div>
            <div class="tt-term" style="color:#93c5fd; margin-top:4px;">👆 Chạm để mở Thư viện tư liệu & Đóng góp ảnh</div>
          `;
          tooltip.style.display = 'flex';
          tooltip.style.left = `${Math.min(window.innerWidth - 340, clientX + 16)}px`;
          tooltip.style.top = `${Math.min(window.innerHeight - 120, clientY + 16)}px`;
        }
        return;
      }

      // 0. Nếu rê chuột vào Bàn Giấy Bút
      if (data.isWriteTributeDesk) {
        this.renderer.domElement.style.cursor = 'pointer';
        return;
      }

      // 1. Nếu rê chuột vào 1 chiếc Lá Vàng Bồ Đề, Thiệp Lụa hoặc Tinh Cầu Pha Lê trên Cây 3D
      if (data.isTributeCard) {
        this.renderer.domElement.style.cursor = 'pointer';
        if (this.builder.wishingTreeAnimEntry) {
          this.builder.wishingTreeAnimEntry.rotateY = 0;
        }
        return;
      }

      // 1.5 Nếu rê chuột vào Tranh hoặc Bảng đồng 15 Bộ Trưởng Bộ Giáo Dục
      if (data.isMinisterPortrait && data.ministerData) {
        this.renderer.domElement.style.cursor = 'pointer';
        const m = data.ministerData;
        if (tooltip) {
          tooltip.className = 'minister-hover-tooltip';
          tooltip.innerHTML = `
            <div class="tt-order">BỘ TRƯỞNG VỊ THỨ ${m.id < 10 ? '0' + m.id : m.id}</div>
            <div class="tt-name">${m.name}</div>
            <div class="tt-term">${m.term}</div>
          `;
          tooltip.style.display = 'flex';
          tooltip.style.left = `${Math.min(window.innerWidth - 300, clientX + 16)}px`;
          tooltip.style.top = `${Math.min(window.innerHeight - 100, clientY + 16)}px`;
        }
        if (data.outerFrame && data.outerFrame.material) {
          if (this._lastHoveredFrame && this._lastHoveredFrame !== data.outerFrame) {
            this._lastHoveredFrame.material.emissive?.setHex(0x000000);
          }
          this._lastHoveredFrame = data.outerFrame;
          data.outerFrame.material.emissive?.setHex(0x332200);
        }
        return;
      }

      // 2. Nếu rê chuột vào Mũi tên chuyển phòng dưới sàn 3D
      if (data.targetZoneId) {
        this.renderer.domElement.style.cursor = 'pointer';
        return;
      }

      // 3. Nếu rê chuột vào Hiện vật / Khung ảnh / Thân Cây Tri Ân
      if (data.artifact) {
        const art = data.artifact;
        this.hoveredArtifact = art;
        this.renderer.domElement.style.cursor = 'pointer';
        return;
      }
    }

    if (this.builder?.wishingTreeAnimEntry && this.builder.wishingTreeAnimEntry.rotateY === 0) {
      this.builder.wishingTreeAnimEntry.rotateY = 0.18;
    }

    this.hoveredArtifact = null;
    this.renderer.domElement.style.cursor = this.isDragging ? 'grabbing' : 'grab';
  }

  handleCanvasClick(e) {
    this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    this.raycaster.setFromCamera(this.mouse, this.camera);

    const artHits = this.raycaster.intersectObjects(this.builder.interactables, true);

    // 1. BẮT CLICK VÀO BỨC TRANH 15 BỘ TRƯỞNG & 46 NHÀ GIÁO & PANO CHUYÊN ĐỀ
    // YÊU CẦU: CAMERA ĐỨNG YÊN TẠI CHỖ, BẬT NGAY MODAL ĐÚNG NGƯỜI
    for (let i = 0; i < artHits.length; i++) {
      let curr = artHits[i].object;
      let minData = null;
      let teacherData = null;
      let themeData = null;
      let themeKey = null;
      let tourArrowData = null;

      while (curr) {
        if (curr.userData) {
          // Bắt click vào Màn hình cảm ứng chân đứng (Digital Totem Kiosk) / Bức tường Ký ức
          if (curr.userData.isMemoryTotem || curr.userData.isMemoryWall || curr.userData.isMemoryOpenLibraryBtn || curr.userData.isMemoryFrame) {
            this.audio.playClickChime();
            this.stopGuidedTour();
            this.openMemoryLibraryModal();
            return;
          }
          if (curr.userData.isTeacherFrame && curr.userData.teacherData) {
            teacherData = curr.userData.teacherData;
            break;
          }
          if (curr.userData.isTourArrow) {
            tourArrowData = curr.userData;
            break;
          }
          if (curr.userData.isThemePanel && curr.userData.theme) {
            themeData = curr.userData.theme;
            themeKey = curr.userData.themeKey;
            break;
          }
          if (curr.userData.isMinisterPortrait || curr.userData.ministerId) {
            const mId = curr.userData.ministerId || (curr.userData.ministerData && curr.userData.ministerData.id);
            minData = (window.ministersData && window.ministersData.find(m => m.id === mId)) || curr.userData.ministerData;
            break;
          }
        }
        curr = curr.parent;
      }

      if (tourArrowData) {
        this.audio.playClickChime();
        this.stopGuidedTour();
        this.glideCameraTo(tourArrowData.targetCamera || tourArrowData.targetPos, tourArrowData.targetLookAt, 1200);
        return;
      }

      if (teacherData) {
        this.audio.playClickChime();
        this.stopGuidedTour();
        // CAMERA PHẢI ĐỨNG YÊN TẠI CHỖ, TUYỆT ĐỐI KHÔNG DI CHUYỂN
        this.openTeacherModal(teacherData);
        return;
      }

      if (themeData) {
        this.audio.playClickChime();
        this.stopGuidedTour();
        // CAMERA PHẢI ĐỨNG YÊN TẠI CHỖ, TUYỆT ĐỐI KHÔNG DI CHUYỂN
        this.openThemeModal(themeKey, themeData);
        return;
      }

      if (minData) {
        this.audio.playClickChime();
        this.stopGuidedTour();
        // CAMERA PHẢI ĐỨNG YÊN TẠI CHỖ, TUYỆT ĐỐI KHÔNG DI CHUYỂN
        this.openMinisterModal(minData);
        return; // Dừng ngay, không chạy tiếp bất kỳ logic di chuyển camera nào!
      }
    }
    const best = this.findBestHit(artHits);
    if (best && best.data) {
      const data = best.data;

      // -1. Nếu click vào Điểm bước chân trên sàn (Floor Step Waypoints) trong Phòng Bộ Trưởng
      if (data.isFloorStepWaypoint) {
        this.audio.playClickChime();
        this.stopGuidedTour();
        this.glideCameraTo(data.targetPos, data.targetLookAt, 1200);
        return;
      }

      // 0. Nếu click vào Trạm Tra Cứu Thông Tin & Sơ Đồ 3D (Kiosk)
      if (data.type === 'kiosk') {
        this.audio.playClickChime();
        this.stopGuidedTour();
        document.getElementById('welcome-overlay')?.classList.remove('hidden');
        return;
      }

      // 0a. Nếu click vào các thành phần trên BỨC TƯỜNG KÝ ỨC SỐ / DIGITAL TOTEM KIOSK
      if (data.isMemoryTotem || data.isMemoryWall || data.isMemoryOpenLibraryBtn || data.isMemoryFrame) {
        this.audio.playClickChime();
        this.stopGuidedTour();
        this.openMemoryLibraryModal();
        return;
      }

      if (data.isMemoryPrevBtn) {
        this.audio.playClickChime();
        this.stopGuidedTour();
        if (this.builder && typeof this.builder.changeMemoryWallPage === 'function') {
          this.builder.changeMemoryWallPage(-1);
        }
        return;
      }

      if (data.isMemoryNextBtn) {
        this.audio.playClickChime();
        this.stopGuidedTour();
        if (this.builder && typeof this.builder.changeMemoryWallPage === 'function') {
          this.builder.changeMemoryWallPage(1);
        }
        return;
      }

      if (data.isMemoryOpenLibraryBtn) {
        this.audio.playClickChime();
        this.stopGuidedTour();
        this.openMemoryLibraryModal();
        return;
      }

      // 0. Nếu click vào Bàn Giấy Bút 3D ở gốc cây -> Mở Hộp thoại Viết Thông Điệp Tri Ân
      if (data.isWriteTributeDesk) {
        this.audio.playClickChime();
        this.stopGuidedTour();
        this.openWishingTreeModal();
        return;
      }

      // 1. Nếu click vào Lá Vàng Bồ Đề hoặc Thiệp Lụa treo trên Cây 3D -> Mở Khung Thiệp Tri Ân DUY NHẤT của học sinh đó!
      if (data.isTributeCard) {
        this.audio.playClickChime();
        this.stopGuidedTour();
        this.openTributeCardViewer(data.tributeIndex || 0);
        return;
      }

      // 2. Nếu click vào Biển chỉ dẫn / Mũi tên chỉ hướng trên sàn 3D -> Chuyển sang phòng/vị trí đó ngay
      if (data.targetZoneId) {
        this.audio.playClickChime();
        this.stopGuidedTour();
        this.navigateToZone(data.targetZoneId, data.customPos, data.customLookAt);
        return;
      }

      // 3. Nếu click vào Thân cây / Tán Cây Tri Ân 3D -> Chỉ xoay 360 độ ngắm trọn 4 hướng quanh cây, TUYỆT ĐỐI KHÔNG mở modal viết!
      if (data.artifact && data.artifact.isWishingTree) {
        this.audio.playClickChime();
        this.stopGuidedTour();
        this.focusOnArtifact(data.artifact, false);
        return;
      }

      // 4. Nếu click vào Hiện vật / Khung ảnh / Biển gắn hiện vật -> Mở thông tin chi tiết
      if (data.artifact) {
        this.audio.playClickChime();
        this.stopGuidedTour();
        this.focusOnArtifact(data.artifact, true);
        return;
      }
    }

    // Nhấp chuột vào bất kỳ vị trí nào trên toàn bộ mặt sàn bảo tàng (Sảnh chính, Hành lang, Quảng trường, 4 Gian phòng) để bước tới
    const floorMeshes = [];
    this.scene.traverse((obj) => {
      if (obj.isMesh && obj.name === 'museum-floor') {
        floorMeshes.push(obj);
      }
    });

    if (floorMeshes.length > 0) {
      const floorHits = this.raycaster.intersectObjects(floorMeshes);
      if (floorHits.length > 0) {
        const pt = floorHits[0].point;
        this.cameraMode = 'free';
        this.targetCameraPos.set(pt.x, 3.0, pt.z);
        this.clampPositionToMuseumBounds(this.targetCameraPos);
        this.updateLookAtFromYawPitch();

        this.walkMarker.position.set(this.targetCameraPos.x, 0.03, this.targetCameraPos.z);
        this.walkMarkerOpacity = 0.95;
      }
    }
  }

  glideCameraTo(targetPos, targetLookAt, duration = 1200) {
    if (!targetPos) return;
    this.cameraMode = 'free';
    this.closeMinisterModal();
    this.closeArtifactModal();
    this.targetCameraPos.set(targetPos.x, targetPos.y !== undefined ? targetPos.y : 1.6, targetPos.z);
    if (targetLookAt) {
      this.targetLookAt.set(targetLookAt.x, targetLookAt.y !== undefined ? targetLookAt.y : 1.6, targetLookAt.z);
      this.syncYawPitchFromLookAt();
    }
    this.clampPositionToMuseumBounds(this.targetCameraPos);

    if (this.walkMarker) {
      this.walkMarker.position.set(this.targetCameraPos.x, 0.03, this.targetCameraPos.z);
      this.walkMarkerOpacity = 0.95;
    }
  }

  clampPositionToMuseumBounds(pos) {
    if (pos.z > 39.5) {
      // Ngoài quảng trường tiền sảnh
      pos.x = Math.max(-28.0, Math.min(28.0, pos.x));
      pos.z = Math.max(39.0, Math.min(68.0, pos.z));
      pos.y = Math.max(1.6, Math.min(6.5, pos.y));
    } else if (pos.z < -10.5) {
      // Bên trong Gian Phòng Dải Tường Cong: Nhà Giáo Việt Nam Qua Các Thời Kỳ (Phía Bắc)
      // Ưu tiên kiểm tra trước để khi người dùng lăn chuột hay đi lại ở X > 11.2 trong phòng này KHÔNG BAO GIỜ bị vọt ra sảnh!
      pos.x = Math.max(-15.8, Math.min(15.8, pos.x));
      pos.z = Math.max(-36.8, Math.min(-11.0, pos.z));
      pos.y = 1.6; // Khóa tầm mắt chuẩn 1.6m cho trải nghiệm đi dạo chân thực
    } else if (pos.x > 11.2) {
      // Bên trong Gian Phòng Triển Lãm 15 Vị Bộ Trưởng (East Wing)
      pos.x = Math.max(11.5, Math.min(32.8, pos.x));
      pos.z = Math.max(-7.8, Math.min(7.8, pos.z));
      pos.y = 1.6;
    } else {
      // Bên trong sảnh chính Rotunda Hub
      pos.x = Math.max(-27.0, Math.min(27.0, pos.x));
      pos.z = Math.max(-10.8, Math.min(39.5, pos.z));
      pos.y = Math.max(1.6, Math.min(5.5, pos.y));
    }
  }

  renderMinimap() {
    const canvas = document.getElementById('minimap-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    ctx.fillStyle = 'rgba(10, 20, 36, 0.95)';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = 'rgba(200, 157, 84, 0.65)';
    ctx.lineWidth = 1.2;

    const mapScale = 1.45;
    const cx = w / 2;
    const cy = h / 2;

    // Vẽ Vòng tròn Đại Sảnh Trung Tâm
    ctx.beginPath();
    ctx.arc(cx, cy, 14, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(24, 44, 70, 0.9)';
    ctx.fill();
    ctx.stroke();

    // Vẽ 4 Cánh phòng chính
    ctx.fillStyle = 'rgba(18, 36, 59, 0.7)';
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.45)';

    // Phòng 1 (Tây - Lịch Sử GD)
    ctx.strokeRect(cx - 40, cy - 14, 25, 28);
    // Phòng 3 (Đông - 15 Bộ Trưởng)
    ctx.strokeRect(cx + 15, cy - 14, 25, 28);
    // Phòng 2 (Bắc - 15 Nhà Giáo)
    ctx.strokeRect(cx - 14, cy - 40, 28, 25);
    // Phòng 4 (Nam - Hành Lang Lời Bác Dạy & Bộ Đồ Dùng Dài 36m)
    ctx.strokeRect(cx - 14, cy + 15, 28, 38);

    // Vẽ điểm các hiện vật
    (window.ARTIFACTS || []).forEach((art) => {
      const mx = cx + art.position.x * mapScale;
      const my = cy + art.position.z * mapScale;
      ctx.fillStyle = this.selectedArtifact?.id === art.id ? '#ffffff' : '#ffd700';
      ctx.beginPath();
      ctx.arc(mx, my, this.selectedArtifact?.id === art.id ? 3.5 : 2.0, 0, Math.PI * 2);
      ctx.fill();
    });

    // Vẽ vị trí người tham quan và hình nón góc nhìn
    const ux = cx + this.cameraPos.x * mapScale;
    const uy = cy + this.cameraPos.z * mapScale;

    const lookDir = new THREE.Vector3().subVectors(this.lookAtPoint, this.cameraPos).normalize();
    const angle = Math.atan2(lookDir.z, lookDir.x);

    ctx.fillStyle = 'rgba(255, 215, 0, 0.35)';
    ctx.beginPath();
    ctx.moveTo(ux, uy);
    ctx.arc(ux, uy, 15, angle - 0.45, angle + 0.45);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#00f5d4';
    ctx.beginPath();
    ctx.arc(ux, uy, 3.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.2;
    ctx.stroke();
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const delta = Math.min(this.clock.getDelta(), 0.1);
    const elapsed = this.clock.getElapsedTime();

    if (this.isTransitioning && this.flyWaypoints.length > 0) {
      const now = performance.now();
      const progress = Math.min(1.0, (now - this.transitionStartTime) / this.transitionDuration);

      // Smooth ease-in-out cubic
      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      const pts = this.flyWaypoints;
      let seg = 0;
      for (let i = 0; i < pts.length - 1; i++) {
        if (ease >= pts[i].t && ease <= pts[i + 1].t) {
          seg = i;
          break;
        }
      }
      const p0 = pts[seg];
      const p1 = pts[seg + 1];
      const segT = (ease - p0.t) / (p1.t - p0.t);

      this.cameraPos.lerpVectors(p0.pos, p1.pos, segT);
      this.lookAtPoint.lerpVectors(p0.look, p1.look, segT);
      this.targetCameraPos.copy(this.cameraPos);
      this.targetLookAt.copy(this.lookAtPoint);

      if (progress >= 1.0) {
        this.isTransitioning = false;
        this.isExterior = false;
        this.cameraMode = 'free';
        this.activeZoneId = 'grand-hall';
        this.targetCameraPos.set(0, 3.1, 10.6);
        this.targetLookAt.set(0, 2.3, 0);
        this.syncYawPitchFromLookAt();

        document.querySelectorAll('.zone-btn').forEach((b) => {
          b.classList.toggle('active', b.dataset.zone === 'grand-hall');
        });
        document.querySelectorAll('[data-menu-zone]').forEach((b) => {
          b.classList.toggle('active', b.dataset.menuZone === 'grand-hall');
        });
        const grandZone = window.MUSEUM_ZONES.find((z) => z.id === 'grand-hall');
        if (grandZone) this.updateZoneBanner(grandZone);

        const cta = document.getElementById('exterior-cta-bar');
        if (cta) cta.classList.add('hidden');
      }
    } else if (this.cameraMode === 'free' || this.cameraMode === 'exterior') {
      const moveSpeed = 8.0 * delta;
      const forward = new THREE.Vector3(Math.sin(this.yaw), 0, Math.cos(this.yaw));
      const right = new THREE.Vector3(-Math.cos(this.yaw), 0, Math.sin(this.yaw));

      let moved = false;
      if (this.keys.KeyW || this.keys.ArrowUp) {
        if (this.isExterior) {
          this.flyIntoMuseum();
        } else {
          this.targetCameraPos.addScaledVector(forward, moveSpeed);
          moved = true;
        }
      }
      if (this.keys.KeyS || this.keys.ArrowDown) {
        this.targetCameraPos.addScaledVector(forward, -moveSpeed);
        moved = true;
      }
      if (this.keys.KeyA || this.keys.ArrowLeft) {
        this.targetCameraPos.addScaledVector(right, -moveSpeed);
        moved = true;
      }
      if (this.keys.KeyD || this.keys.ArrowRight) {
        this.targetCameraPos.addScaledVector(right, moveSpeed);
        moved = true;
      }

      if (moved) {
        this.clampPositionToMuseumBounds(this.targetCameraPos);
        this.updateLookAtFromYawPitch();

        // Tự động chuyển trạng thái nếu người dùng đi dạo ra ngoài quảng trường hoặc vào trong sảnh
        if (this.targetCameraPos.z > 43.0 && !this.isExterior) {
          this.isExterior = true;
          document.getElementById('exterior-cta-bar')?.classList.remove('hidden', 'fade-out');
        } else if (this.targetCameraPos.z < 39.5 && this.isExterior) {
          this.isExterior = false;
          document.getElementById('exterior-cta-bar')?.classList.add('hidden');
        }
      }
    }

    this.cameraPos.lerp(this.targetCameraPos, Math.min(1, delta * 5.2));
    this.lookAtPoint.lerp(this.targetLookAt, Math.min(1, delta * 6.0));

    this.camera.position.copy(this.cameraPos);
    this.camera.up.set(0, 1, 0); // KHÓA TRỤC CÂN BẰNG THẲNG ĐỨNG
    this.camera.lookAt(this.lookAtPoint);

    if (this.walkMarkerOpacity > 0.01) {
      this.walkMarkerOpacity -= delta * 1.4;
      this.walkMarker.material.opacity = Math.max(0, this.walkMarkerOpacity);
    }

    this.builder.update(elapsed, delta);
    this.renderMinimap();

    this.renderer.render(this.scene, this.camera);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.museumApp = new VietnamTeachersMuseumApp();
  window.app = window.museumApp;
});
