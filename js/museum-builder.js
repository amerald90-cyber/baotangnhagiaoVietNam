// Xây dựng không gian kiến trúc 3D Bảo tàng Nhà giáo Việt Nam
// Gồm: Đại Sảnh (Đài Biểu Tượng + Cây Tri Ân Xoay 3D gắn thẻ lời chúc), Phòng 1 (Lịch sử 5 giai đoạn), Phòng 2 (15 Nhà giáo ưu tú), Phòng 3 (15 Bộ trưởng Bộ GD), Phòng 4 (Khu Bộ đồ dùng)

class MuseumBuilder {
  constructor(scene) {
    this.scene = scene;
    this.interactables = [];
    this.artifactGroups = new Map();
    this.animatedObjects = [];
    this.spotlights = [];
    this.textureLoader = new THREE.TextureLoader();
    this.materials = this.createMaterials();
    this.wishingTreeCanopy = null;
    this.wishCardCount = 0;
    this.heartRoomAnimEntry = null;
    this.rotatingHeartsCarousel = null;
    this.heartSparkleSprites = [];
    this.heartSpiralGeometry = null;
    this.heartSpiralParticleData = null;
    this.banyanParticleData = [];
    this.banyanSpiralPoints = null;
    this.banyanStarPoints = null;
    this.banyanStarMaterial = null;
    this.banyanSpiralGeometry = null;
    this.memoryWallGroup = null;
    this.memoryWallPage = 0;
    this.memoryWallAutoRotateTimer = 0;
    this.memoryFrames = [];
  }

  // ==================== VẬT LIỆU PBR CHÂN THỰC ====================
  createMaterials() {
    // 1. Đá Cẩm thạch Trắng ngà (Sàn bảo tàng)
    const stoneCanvas = document.createElement('canvas');
    stoneCanvas.width = 512;
    stoneCanvas.height = 512;
    const sCtx = stoneCanvas.getContext('2d');
    sCtx.fillStyle = '#f2ece1';
    sCtx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 45; i++) {
      sCtx.strokeStyle = i % 2 === 0 ? 'rgba(210, 198, 178, 0.32)' : 'rgba(255, 252, 245, 0.45)';
      sCtx.lineWidth = 1 + Math.random() * 3;
      sCtx.beginPath();
      let y = Math.random() * 512;
      sCtx.moveTo(0, y);
      for (let x = 0; x <= 512; x += 64) {
        y += (Math.random() - 0.5) * 18;
        sCtx.lineTo(x, y);
      }
      sCtx.stroke();
    }
    sCtx.strokeStyle = 'rgba(180, 168, 148, 0.45)';
    sCtx.lineWidth = 2;
    sCtx.strokeRect(1, 1, 254, 254);
    sCtx.strokeRect(257, 1, 254, 254);
    sCtx.strokeRect(1, 257, 254, 254);
    sCtx.strokeRect(257, 257, 254, 254);

    const stoneTex = new THREE.CanvasTexture(stoneCanvas);
    stoneTex.wrapS = THREE.RepeatWrapping;
    stoneTex.wrapT = THREE.RepeatWrapping;
    stoneTex.repeat.set(18, 18);

    // 2. Vân Gỗ Óc Chó Sẫm Tự Nhiên (Dark Walnut - Đẳng Cấp & Trang Nghiêm)
    const woodCanvas = document.createElement('canvas');
    woodCanvas.width = 512;
    woodCanvas.height = 512;
    const wCtx = woodCanvas.getContext('2d');
    const wGrad = wCtx.createLinearGradient(0, 0, 512, 0);
    wGrad.addColorStop(0, '#24140a');
    wGrad.addColorStop(0.35, '#351e11');
    wGrad.addColorStop(0.7, '#1d0f07');
    wGrad.addColorStop(1, '#2c190e');
    wCtx.fillStyle = wGrad;
    wCtx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 160; i++) {
      wCtx.fillStyle = i % 2 === 0 ? 'rgba(12, 6, 2, 0.32)' : 'rgba(68, 40, 22, 0.22)';
      wCtx.fillRect(0, Math.random() * 512, 512, 1 + Math.random() * 4);
    }
    const woodTex = new THREE.CanvasTexture(woodCanvas);
    woodTex.wrapS = THREE.RepeatWrapping;
    woodTex.wrapT = THREE.RepeatWrapping;

    // 3. Đá Xanh Thanh Hóa
    const darkStoneCanvas = document.createElement('canvas');
    darkStoneCanvas.width = 256;
    darkStoneCanvas.height = 256;
    const dsCtx = darkStoneCanvas.getContext('2d');
    dsCtx.fillStyle = '#4a525a';
    dsCtx.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 600; i++) {
      dsCtx.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.08)';
      dsCtx.fillRect(Math.random() * 256, Math.random() * 256, 3, 3);
    }
    const darkStoneTex = new THREE.CanvasTexture(darkStoneCanvas);

    
    // Đá cẩm thạch xám/đen bóng (Roughness 0.25) cho Gian Phòng Triển Lãm 15 Bộ Trưởng
    const darkMarbleCanvas = document.createElement('canvas');
    darkMarbleCanvas.width = 512;
    darkMarbleCanvas.height = 512;
    const dmCtx = darkMarbleCanvas.getContext('2d');
    dmCtx.fillStyle = '#121722';
    dmCtx.fillRect(0, 0, 512, 512);
    // Vân đá cẩm thạch trắng & vàng kim tinh tế
    for (let i = 0; i < 48; i++) {
      dmCtx.strokeStyle = i % 3 === 0 ? 'rgba(212, 175, 55, 0.22)' : 'rgba(210, 225, 245, 0.16)';
      dmCtx.lineWidth = 1 + Math.random() * 2.5;
      dmCtx.beginPath();
      let x = Math.random() * 512;
      dmCtx.moveTo(x, 0);
      for (let y = 0; y <= 512; y += 48) {
        x += (Math.random() - 0.5) * 28;
        dmCtx.lineTo(x, y);
      }
      dmCtx.stroke();
    }
    // Chỉ kẻ ron gạch khổ lớn viền vàng
    dmCtx.strokeStyle = 'rgba(212, 175, 55, 0.35)';
    dmCtx.lineWidth = 2;
    dmCtx.strokeRect(2, 2, 508, 508);
    const darkMarbleTex = new THREE.CanvasTexture(darkMarbleCanvas);
    darkMarbleTex.wrapS = THREE.RepeatWrapping;
    darkMarbleTex.wrapT = THREE.RepeatWrapping;
    darkMarbleTex.repeat.set(8, 6);

    return {
      ceilingMat: new THREE.MeshStandardMaterial({ color: 0xf5efe6, roughness: 0.72, metalness: 0.04 }),
      navyRoyalWall: new THREE.MeshStandardMaterial({ color: 0x16243b, roughness: 0.58, metalness: 0.12 }),
      glossyDarkMarble: new THREE.MeshStandardMaterial({ map: darkMarbleTex, roughness: 0.25, metalness: 0.32 }),
      ivoryWall: new THREE.MeshStandardMaterial({ color: 0xf5f0e6, roughness: 0.78, metalness: 0.04 }),
      floorStone: new THREE.MeshStandardMaterial({ map: stoneTex, roughness: 0.32, metalness: 0.08 }),
      navyPanel: new THREE.MeshStandardMaterial({ color: 0x12243b, roughness: 0.55, metalness: 0.15 }),
      navyDeep: new THREE.MeshStandardMaterial({ color: 0x0b1727, roughness: 0.45, metalness: 0.2 }),
      naturalWood: new THREE.MeshStandardMaterial({ color: 0x321a0d, map: woodTex, roughness: 0.40, metalness: 0.08 }),
      lightWood: new THREE.MeshStandardMaterial({ color: 0x3d2212, map: woodTex, roughness: 0.40, metalness: 0.08 }),
      bronzeGold: new THREE.MeshStandardMaterial({ color: 0xc99e52, roughness: 0.26, metalness: 0.86 }),
      agedBronze: new THREE.MeshStandardMaterial({ color: 0x6f5333, roughness: 0.36, metalness: 0.78 }),
      brightGold: new THREE.MeshStandardMaterial({
        color: 0xe6be6a,
        roughness: 0.2,
        metalness: 0.9,
        emissive: 0x3a2808,
        emissiveIntensity: 0.28
      }),
      redSilk: new THREE.MeshStandardMaterial({ color: 0x9b1d20, roughness: 0.6, metalness: 0.1 }),
      blueStone: new THREE.MeshStandardMaterial({ map: darkStoneTex, roughness: 0.65, metalness: 0.1 }),
      plinthStone: new THREE.MeshStandardMaterial({ color: 0xefe9dd, roughness: 0.38, metalness: 0.06 }),
      glassVitrine: new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.22,
        roughness: 0.08,
        metalness: 0.1,
        reflectivity: 0.9,
        side: THREE.DoubleSide,
        depthWrite: false
      }),
      glowCrystal: new THREE.MeshStandardMaterial({
        color: 0xffdf9e,
        emissive: 0xffaa33,
        emissiveIntensity: 0.9,
        roughness: 0.15,
        metalness: 0.1
      })
    };
  }

  drawFittedText(ctx, text, x, y, maxWidth, startSize, arg7, arg8, arg9) {
    const str = String(text || '').trim();
    if (!str) return;

    let minSize = 9;
    let fontWeight = 'bold';
    let fontFamily = '"Cormorant Garamond", "Times New Roman", serif';

    if (typeof arg7 === 'number') {
      // Gọi dạng: (ctx, text, x, y, maxWidth, startSize, minSize, fontWeight, fontFamily)
      minSize = arg7;
      if (typeof arg8 === 'string') fontWeight = arg8;
      if (typeof arg9 === 'string') fontFamily = arg9;
    } else if (typeof arg7 === 'string') {
      // Gọi dạng: (ctx, text, x, y, maxWidth, startSize, fontFamily, fontWeight)
      fontFamily = arg7;
      if (typeof arg8 === 'string') fontWeight = arg8;
      if (typeof arg8 === 'number') minSize = arg8;
    }

    let size = startSize;
    ctx.textAlign = 'center';
    while (size > minSize) {
      ctx.font = `${fontWeight} ${size}px ${fontFamily}`;
      if (ctx.measureText(str).width <= maxWidth) {
        break;
      }
      size -= 1;
    }
    ctx.font = `${fontWeight} ${size}px ${fontFamily}`;
    // Sử dụng tham số maxWidth của fillText để tuyệt đối không bao giờ bị tràn lề hay cắt chữ
    ctx.fillText(str, x, y, maxWidth);
  }

  createGrandWelcomeSignTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Nền Navy hoàng gia chuyển sắc sâu thẳm
    const grad = ctx.createLinearGradient(0, 0, 2048, 512);
    grad.addColorStop(0, '#0a1a2f');
    grad.addColorStop(0.5, '#122644');
    grad.addColorStop(1, '#081527');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 2048, 512);

    // Khung viền kép dập nổi thếp Vàng Kim 24K
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 14;
    ctx.strokeRect(24, 24, 2000, 464);

    ctx.strokeStyle = '#dfa528';
    ctx.lineWidth = 4;
    ctx.strokeRect(48, 48, 1952, 416);

    // 4 góc hoa văn thếp vàng kim cổ truyền
    const cornerSize = 42;
    ctx.fillStyle = '#ffd700';
    [[48, 48], [2000 - cornerSize, 48], [48, 464 - cornerSize], [2000 - cornerSize, 464 - cornerSize]].forEach(([cx, cy]) => {
      ctx.fillRect(cx, cy, cornerSize, cornerSize);
    });

    // Biểu tượng Hoa Sen / Quốc hoa & Ngôi sao đỉnh biển
    ctx.fillStyle = '#ffd700';
    ctx.font = '28px serif';
    ctx.textAlign = 'center';
    ctx.fillText('✦   🏛️   ✦', 1024, 115);

    // TÊN BẢO TÀNG LỚN MẠ VÀNG 24K: BẢO TÀNG NHÀ GIÁO VIỆT NAM
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 84px "Cinzel", "Cormorant Garamond", serif';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.95)';
    ctx.shadowBlur = 18;
    ctx.fillText('BẢO TÀNG NHÀ GIÁO VIỆT NAM', 1024, 245);
    ctx.shadowBlur = 0;

    // Đường gạch chỉ vàng hoàng gia
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(340, 290);
    ctx.lineTo(1708, 290);
    ctx.stroke();

    // Dòng phụ đề trang trọng
    ctx.fillStyle = '#fce4a6';
    ctx.font = '600 34px "Be Vietnam Pro", sans-serif';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 8;
    ctx.fillText('KHÔNG GIAN TRƯNG BÀY & TÔN VINH SỰ NGHIỆP TRỒNG NGƯỜI', 1024, 355);
    ctx.shadowBlur = 0;

    // Dòng chào đón
    ctx.fillStyle = '#e6be6a';
    ctx.font = 'italic 26px "Cormorant Garamond", serif';
    ctx.fillText('CHÀO MỪNG QUÝ KHÁCH THAM QUAN', 1024, 420);

    const tex = new THREE.CanvasTexture(canvas);
    tex.anisotropy = 16;
    return tex;
  }

  createTextPlaqueTexture({ title, subtitle, quote, bg = '#102138', border = '#c89d54', width = 2048, height = 512 }) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, width, height);

    const padOuter = Math.round(height * 0.065);
    const padInner = Math.round(height * 0.105);

    ctx.strokeStyle = border;
    ctx.lineWidth = Math.max(4, Math.round(height * 0.018));
    ctx.strokeRect(padOuter, padOuter, width - padOuter * 2, height - padOuter * 2);
    ctx.lineWidth = 2;
    ctx.strokeRect(padInner, padInner, width - padInner * 2, height - padInner * 2);

    const cornerSize = Math.round(height * 0.075);
    [
      [padInner, padInner, 1, 1],
      [width - padInner, padInner, -1, 1],
      [padInner, height - padInner, 1, -1],
      [width - padInner, height - padInner, -1, -1]
    ].forEach(([cx, cy, dx, dy]) => {
      ctx.strokeStyle = border;
      ctx.lineWidth = 3;
      ctx.strokeRect(cx, cy, dx * cornerSize, dy * cornerSize);
    });

    const safeMaxWidth = width - padInner * 2 - cornerSize * 2 - 48;
    const hasQuote = Boolean(quote && quote.trim());

    ctx.fillStyle = '#f5d58e';
    const titleY = hasQuote ? Math.round(height * 0.32) : subtitle ? Math.round(height * 0.43) : Math.round(height * 0.54);
    
    const upperTitle = (title || '').toUpperCase();
    this.drawFittedText(
      ctx,
      upperTitle,
      width / 2,
      titleY,
      safeMaxWidth,
      Math.round(height * 0.13),
      12,
      'bold',
      '"Cormorant Garamond", "Times New Roman", serif'
    );

    if (subtitle || hasQuote) {
      const lineY = hasQuote ? Math.round(height * 0.41) : Math.round(height * 0.55);
      ctx.strokeStyle = border;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(width * 0.2, lineY);
      ctx.lineTo(width * 0.8, lineY);
      ctx.stroke();
    }

    if (subtitle) {
      ctx.fillStyle = '#f6f3ec';
      const subY = hasQuote ? Math.round(height * 0.54) : Math.round(height * 0.73);
      this.drawFittedText(
        ctx,
        subtitle,
        width / 2,
        subY,
        safeMaxWidth,
        Math.round(height * 0.082),
        11,
        '600',
        '"Be Vietnam Pro", sans-serif'
      );
    }

    if (hasQuote) {
      ctx.fillStyle = '#dfd6c3';
      ctx.font = `italic ${Math.round(height * 0.064)}px "Cormorant Garamond", Georgia, serif`;
      this.wrapText(ctx, quote, width / 2, Math.round(height * 0.7), safeMaxWidth, Math.round(height * 0.085));
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.anisotropy = 16;
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.needsUpdate = true;
    return tex;
  }

  // ==================== TẠO BIỂN GẮN HIỆN VẬT 3D CỰC KỲ RÕ NÉT & CHUẨN ĐỒ HỌA CAO CẤP ====================
  createCrispExhibitPlaqueTexture(art) {
    const width = 2048;
    const height = 960;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // 1. Nền hoàng gia xanh đen sâu thẳm với hiệu ứng chuyển sắc sang trọng
    const bgGrad = ctx.createRadialGradient(width / 2, height / 2, 80, width / 2, height / 2, width / 1.5);
    bgGrad.addColorStop(0, '#0f1f38');
    bgGrad.addColorStop(0.65, '#091426');
    bgGrad.addColorStop(1, '#050a14');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // 2. Khung viền thếp vàng hoàng gia đôi (Dual Imperial Gold Border)
    const pOut = 36;
    ctx.strokeStyle = '#d4a338';
    ctx.lineWidth = 14;
    ctx.strokeRect(pOut, pOut, width - pOut * 2, height - pOut * 2);

    const pIn = 64;
    ctx.strokeStyle = '#ffe27a';
    ctx.lineWidth = 4;
    ctx.strokeRect(pIn, pIn, width - pIn * 2, height - pIn * 2);

    // Họa tiết góc đồng cổ điển
    const cSize = 60;
    [
      [pIn, pIn, 1, 1],
      [width - pIn, pIn, -1, 1],
      [pIn, height - pIn, 1, -1],
      [width - pIn, height - pIn, -1, -1]
    ].forEach(([cx, cy, dx, dy]) => {
      ctx.strokeStyle = '#ffe27a';
      ctx.lineWidth = 5;
      ctx.strokeRect(cx, cy, dx * cSize, dy * cSize);
    });

    const maxTextW = width - 260;

    // 3. Dòng Header: Huy hiệu Quốc gia / Mã hiện vật
    const codeStr = art.code ? `✦ HIỆN VẬT BẢO TÀNG • MÃ SỐ: ${art.code} ✦` : '✦ TƯ LIỆU HIỆN VẬT BẢO TÀNG NHÀ GIÁO VIỆT NAM ✦';
    ctx.fillStyle = '#ffda73';
    ctx.font = 'bold 42px "Be Vietnam Pro", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.letterSpacing = '2px';
    ctx.fillText(codeStr, width / 2, 140);

    // 4. Tiêu đề hiện vật lớn, đậm, sắc nét tuyệt đối (Vàng kim hoàng gia)
    let displayTitle = art.title || 'HIỆN VẬT TRƯNG BÀY';
    let displaySub = art.subtitle || art.era || '';
    if (displayTitle.includes(':')) {
      const parts = displayTitle.split(':');
      displayTitle = parts[0].trim();
      displaySub = parts[1].trim() + (art.era ? ` • ${art.era}` : '');
    }

    ctx.fillStyle = '#fff6d6';
    ctx.shadowColor = 'rgba(255, 215, 0, 0.45)';
    ctx.shadowBlur = 12;
    this.drawFittedText(
      ctx,
      displayTitle.toUpperCase(),
      width / 2,
      270,
      maxTextW,
      92,
      36,
      'bold',
      '"Cormorant Garamond", "Times New Roman", serif'
    );
    ctx.shadowBlur = 0;

    // 5. Đường kẻ phân cách hoa văn hoàng kim
    ctx.strokeStyle = '#e6b800';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width * 0.18, 380);
    ctx.lineTo(width * 0.82, 380);
    ctx.stroke();

    // Biểu tượng kim cương ở tâm đường kẻ
    ctx.fillStyle = '#ffe27a';
    ctx.beginPath();
    ctx.moveTo(width / 2, 365);
    ctx.lineTo(width / 2 + 18, 380);
    ctx.lineTo(width / 2, 395);
    ctx.lineTo(width / 2 - 18, 380);
    ctx.closePath();
    ctx.fill();

    // 6. Mô tả hiện vật / Thời kỳ (Màu trắng sáng tương phản cực cao, dễ đọc)
    ctx.fillStyle = '#ffffff';
    this.drawFittedText(
      ctx,
      displaySub,
      width / 2,
      480,
      maxTextW,
      52,
      26,
      '600',
      '"Be Vietnam Pro", sans-serif'
    );

    // Nếu có thông tin bổ sung về chất liệu hoặc niên đại
    if (art.era && displaySub !== art.era) {
      ctx.fillStyle = '#cbd5e1';
      this.drawFittedText(
        ctx,
        `Niên đại / Xuất xứ: ${art.era}`,
        width / 2,
        570,
        maxTextW,
        42,
        22,
        '500',
        '"Be Vietnam Pro", sans-serif'
      );
    }

    // 7. Khung Nút Bấm Tương Tác Nổi Bật (Call to Action Button)
    const btnW = 920;
    const btnH = 110;
    const btnX = (width - btnW) / 2;
    const btnY = 740;

    ctx.fillStyle = '#8f5c14';
    ctx.beginPath();
    ctx.roundRect(btnX, btnY, btnW, btnH, 55);
    ctx.fill();

    ctx.strokeStyle = '#ffe599';
    ctx.lineWidth = 6;
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 46px "Be Vietnam Pro", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🖱️ CLICK VÀO ĐÂY ĐỂ XEM HỒ SƠ CHI TIẾT', width / 2, btnY + btnH / 2 + 2);

    const tex = new THREE.CanvasTexture(canvas);
    tex.anisotropy = 16;
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.needsUpdate = true;
    return tex;
  }

  wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = (text || '').split(' ');
    let line = '';
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && n > 0) {
        ctx.fillText(line.trim(), x, y);
        line = words[n] + ' ';
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line.trim(), x, y);
  }

  // ==================== DỰNG TOÀN BỘ BẢO TÀNG ====================
  // Xoay cây theo góc chỉ định (angleDelta tính bằng radian)
  rotateTreeCanopy(treeName, angleDelta) {
    let targetMesh = null;
    if (treeName === 'banyan') {
      targetMesh = this.banyanCanopyRotatingGroup;
    } else {
      targetMesh = this.wishingTreeRotatingGroup;
    }
    if (targetMesh) {
      targetMesh.rotation.y += angleDelta;
    }
  }

  buildMuseum(artifactsData) {
    this.buildArchitecture();
    this.buildGrandExteriorFacade();
    this.buildTouchscreenKiosk();
    this.buildLighting();
    this.buildWallMuralsAndSignage();
    this.buildUncleHoTeachingsMurals();

    // Dựng các hiện vật 3D chính
    artifactsData.forEach((art) => {
      this.buildArtifactExhibit(art);
    });

    // Dựng riêng Gian Phòng Mở Vách Cong: Nhà Giáo Việt Nam Qua Các Thời Kỳ (46 Danh Sư & Thầy Cô)
    this.buildTeachersGallery();

    // Dựng riêng Phòng 3: 15 Khung Ảnh Thật của 15 Bộ Trưởng Bộ Giáo Dục
    this.buildFifteenMinistersRoom();

    // Dựng Cuốn Sách Vàng Lấp Lánh 3D: Lịch sử Ngày Nhà giáo Việt Nam 20/11 ở giữa Phòng Lịch Sử Giáo Dục
    this.buildHistory2011GlowingBook3D();

    // Dựng các mũi tên vàng đồng chỉ hướng trên sàn nối giữa Đại Sảnh và 4 Phòng
    this.buildFloorNavigationArrows();
    this.buildDenseMiniStepArrows();
  }

  // ==================== HỆ THỐNG VẠCH DẪN ĐƯỜNG & BIỂN CHỈ DẪN RẼ HƯỚNG 3D ====================
  createDirectionalMarkerTexture({ icon, action, title, subtitle, bg = '#071324', accent = '#ffd700' }) {
    const width = 1024;
    const height = 1024;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // 1. Nền đĩa tròn xanh đen obsidian chuyển sắc sang trọng
    const grad = ctx.createRadialGradient(512, 512, 100, 512, 512, 500);
    grad.addColorStop(0, '#0e2240');
    grad.addColorStop(0.65, '#071324');
    grad.addColorStop(0.95, '#040b15');
    grad.addColorStop(1, 'rgba(4, 11, 21, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(512, 512, 500, 0, Math.PI * 2);
    ctx.fill();

    // 2. Vành đôi thếp vàng hoàng gia bo tròn
    ctx.strokeStyle = accent;
    ctx.lineWidth = 18;
    ctx.beginPath();
    ctx.arc(512, 512, 475, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(255, 235, 150, 0.6)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(512, 512, 445, 0, Math.PI * 2);
    ctx.stroke();

    // Vành chỉ tia sáng hướng tâm nhẹ
    ctx.strokeStyle = 'rgba(255, 215, 0, 0.2)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 24; i++) {
      const a = (i * Math.PI * 2) / 24;
      ctx.beginPath();
      ctx.moveTo(512 + Math.cos(a) * 445, 512 + Math.sin(a) * 445);
      ctx.lineTo(512 + Math.cos(a) * 475, 512 + Math.sin(a) * 475);
      ctx.stroke();
    }

    // 3. Biểu tượng mũi tên / hành động chỉ hướng lớn ở đỉnh
    ctx.fillStyle = '#ffe27a';
    ctx.shadowColor = 'rgba(255, 215, 0, 0.7)';
    ctx.shadowBlur = 18;
    ctx.font = 'bold 150px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(icon || '⬆', 512, 230);
    ctx.shadowBlur = 0;

    // 4. Nhãn hành động (RẼ TRÁI / RẼ PHẢI / TIẾN VÀO / QUAY LẠI...)
    if (action) {
      ctx.fillStyle = '#ffda73';
      ctx.font = 'bold 52px "Be Vietnam Pro", sans-serif';
      ctx.letterSpacing = '3px';
      ctx.fillText(action.toUpperCase(), 512, 365);
    }

    // 5. Đường kẻ phân cách vàng kim
    ctx.strokeStyle = 'rgba(255, 215, 0, 0.65)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(220, 420);
    ctx.lineTo(804, 420);
    ctx.stroke();

    // 6. Tên Điểm Đến / Gian Phòng (To, rõ ràng, tương phản sắc nét)
    ctx.fillStyle = '#ffffff';
    this.drawFittedText(
      ctx,
      (title || '').toUpperCase(),
      512,
      520,
      820,
      72,
      28,
      'bold',
      '"Cormorant Garamond", "Times New Roman", serif'
    );

    // 7. Ghi chú mô tả thêm
    if (subtitle) {
      ctx.fillStyle = '#cbd5e1';
      this.drawFittedText(
        ctx,
        subtitle,
        512,
        640,
        780,
        38,
        18,
        '500',
        '"Be Vietnam Pro", sans-serif'
      );
    }

    // 8. Huy hiệu bấm để dịch chuyển
    const pillW = 620;
    const pillH = 88;
    const pillX = (1024 - pillW) / 2;
    const pillY = 760;

    ctx.fillStyle = '#8a5c14';
    ctx.beginPath();
    ctx.roundRect(pillX, pillY, pillW, pillH, 44);
    ctx.fill();

    ctx.strokeStyle = '#ffe599';
    ctx.lineWidth = 5;
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 38px "Be Vietnam Pro", sans-serif';
    ctx.fillText('🖱️ BẤM ĐỂ DỊCH CHUYỂN', 512, pillY + pillH / 2 + 2);

    const tex = new THREE.CanvasTexture(canvas);
    tex.anisotropy = 16;
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.needsUpdate = true;
    return tex;
  }

  // ==================== CUỐN SÁCH VÀNG LẤP LÁNH 3D: LỊCH SỬ NGÀY NHÀ GIÁO VIỆT NAM 20/11 ====================
  // Đặt tại trung tâm Phòng Lịch Sử Phát Triển Giáo Dục Việt Nam (x = -19.5, z = 0)
  // Khi bấm vào sẽ mở Sách Lật Tương Tác 3D (Flipbook) Lịch sử ra đời Ngày Nhà giáo Việt Nam 20/11
  buildHistory2011GlowingBook3D() {
    const cx = -19.5;
    const cz = 0.0;
    const bookGroup = new THREE.Group();
    bookGroup.name = 'history-2011-glowing-book-group';
    bookGroup.position.set(cx, 0, cz);
    // Xoay hướng Đông (Math.PI / 2) để đón khách bước từ Đại Sảnh vào Phòng Lịch Sử
    bookGroup.rotation.y = Math.PI / 2;

    // 1. Thảm hào quang hoa sen vàng dưới sàn (Floor Lotus Aura)
    const auraCanvas = document.createElement('canvas');
    auraCanvas.width = 512;
    auraCanvas.height = 512;
    const aCtx = auraCanvas.getContext('2d');
    const rad = aCtx.createRadialGradient(256, 256, 20, 256, 256, 250);
    rad.addColorStop(0, 'rgba(255, 215, 0, 0.55)');
    rad.addColorStop(0.55, 'rgba(212, 165, 55, 0.25)');
    rad.addColorStop(0.85, 'rgba(14, 34, 64, 0.45)');
    rad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    aCtx.fillStyle = rad;
    aCtx.beginPath();
    aCtx.arc(256, 256, 248, 0, Math.PI * 2);
    aCtx.fill();

    aCtx.strokeStyle = '#ffd700';
    aCtx.lineWidth = 6;
    aCtx.beginPath();
    aCtx.arc(256, 256, 226, 0, Math.PI * 2);
    aCtx.stroke();

    aCtx.strokeStyle = 'rgba(255, 235, 160, 0.65)';
    aCtx.lineWidth = 2;
    aCtx.beginPath();
    aCtx.arc(256, 256, 204, 0, Math.PI * 2);
    aCtx.stroke();

    const auraTex = new THREE.CanvasTexture(auraCanvas);
    const auraDisc = new THREE.Mesh(
      new THREE.PlaneGeometry(3.1, 3.1),
      new THREE.MeshBasicMaterial({ map: auraTex, transparent: true, depthWrite: false })
    );
    auraDisc.rotation.x = -Math.PI / 2;
    auraDisc.position.y = 0.015;
    bookGroup.add(auraDisc);

    // 2. Bệ Đỡ Cẩm Thạch & Đồng Hoàng Gia Bát Giác (Octagonal Royal Pedestal)
    const step1 = new THREE.Mesh(
      new THREE.CylinderGeometry(1.18, 1.28, 0.14, 8),
      this.materials.ivoryWall
    );
    step1.position.y = 0.07;
    bookGroup.add(step1);

    const step1Gold = new THREE.Mesh(
      new THREE.CylinderGeometry(1.20, 1.22, 0.04, 8),
      this.materials.brightGold
    );
    step1Gold.position.y = 0.145;
    bookGroup.add(step1Gold);

    const step2 = new THREE.Mesh(
      new THREE.CylinderGeometry(0.92, 1.02, 0.16, 8),
      this.materials.navyPanel
    );
    step2.position.y = 0.22;
    bookGroup.add(step2);

    // Thân trụ đỡ chính khắc chỉ vàng
    const pillar = new THREE.Mesh(
      new THREE.CylinderGeometry(0.52, 0.66, 0.82, 8),
      this.materials.darkWood
    );
    pillar.position.y = 0.71;
    bookGroup.add(pillar);

    [0.36, 0.72, 1.08].forEach((ry) => {
      const ring = new THREE.Mesh(
        new THREE.CylinderGeometry(0.62, 0.62, 0.035, 8),
        this.materials.brightGold
      );
      ring.position.y = ry;
      bookGroup.add(ring);
    });

    // Mặt bàn đỡ sách mạ vàng hoàng gia
    const topCap = new THREE.Mesh(
      new THREE.CylinderGeometry(0.86, 0.68, 0.14, 8),
      this.materials.bronzeGold
    );
    topCap.position.y = 1.18;
    bookGroup.add(topCap);

    // Vòng hào quang phát sáng trên mặt bệ
    const topGlowRing = new THREE.Mesh(
      new THREE.RingGeometry(0.52, 0.72, 32),
      new THREE.MeshBasicMaterial({ color: 0xffea85, transparent: true, opacity: 0.75, side: THREE.DoubleSide })
    );
    topGlowRing.rotation.x = -Math.PI / 2;
    topGlowRing.position.y = 1.26;
    bookGroup.add(topGlowRing);

    // 3. Giá đỡ sách gỗ gụ cổ điển trên mặt bệ (Antique Wooden Lectern Cradle)
    const cradleBase = new THREE.Mesh(
      new THREE.BoxGeometry(0.96, 0.05, 0.68),
      this.materials.darkWood
    );
    cradleBase.position.set(0, 1.27, 0.02);
    cradleBase.rotation.x = 0.22;
    bookGroup.add(cradleBase);

    const cradleLip = new THREE.Mesh(
      new THREE.BoxGeometry(1.02, 0.045, 0.045),
      this.materials.bronzeGold
    );
    cradleLip.position.set(0, 1.23, 0.35);
    cradleLip.rotation.x = 0.22;
    bookGroup.add(cradleLip);

    // 4. Cuốn Cổ Thư Hoàng Gia Mở Rộng (Antique Leather & Brass Illuminated Tome)
    const floatingBook = new THREE.Group();
    floatingBook.position.set(0, 1.48, 0.04);
    // Nghiêng góc 25 độ về phía người xem trên giá đỡ cổ điển
    floatingBook.rotation.x = 0.44;

    // Vật liệu da thuộc nâu gụ cổ điển & đồng cổ mạ vàng
    const antiqueLeatherMat = new THREE.MeshStandardMaterial({
      color: 0x36170b,
      roughness: 0.52,
      metalness: 0.18,
      emissive: 0x160702,
      emissiveIntensity: 0.25
    });
    const antiqueBrassMat = new THREE.MeshStandardMaterial({
      color: 0xd4a338,
      roughness: 0.28,
      metalness: 0.85,
      emissive: 0x5c3e08,
      emissiveIntensity: 0.35
    });
    const gildedPageEdgeMat = new THREE.MeshStandardMaterial({
      color: 0xd8b467,
      roughness: 0.38,
      metalness: 0.55,
      emissive: 0x4a3508,
      emissiveIntensity: 0.22
    });
    const innerParchmentBlockMat = new THREE.MeshStandardMaterial({
      color: 0xead7b3,
      roughness: 0.65,
      metalness: 0.05,
      emissive: 0x3b2a10,
      emissiveIntensity: 0.18
    });

    // Gáy sách da cổ nằm phía dưới khe sách kèm 5 đai đồng cổ điển (Raised Spine Bands)
    const spineLeather = new THREE.Mesh(
      new THREE.CylinderGeometry(0.055, 0.055, 0.90, 16, 1, false, Math.PI * 0.5, Math.PI),
      antiqueLeatherMat
    );
    spineLeather.rotation.x = Math.PI / 2;
    spineLeather.position.set(0, -0.012, 0);
    floatingBook.add(spineLeather);

    [-0.34, -0.17, 0, 0.17, 0.34].forEach((sz) => {
      const band = new THREE.Mesh(
        new THREE.CylinderGeometry(0.062, 0.062, 0.026, 16),
        antiqueBrassMat
      );
      band.rotation.x = Math.PI / 2;
      band.position.set(0, -0.014, sz);
      floatingBook.add(band);
    });

    // Hai cánh sách mở chữ V tự nhiên
    const leftWing = new THREE.Group();
    leftWing.rotation.z = 0.11;
    const rightWing = new THREE.Group();
    rightWing.rotation.z = -0.11;

    const coverW = 0.66;
    const coverD = 0.88;

    const buildBookHalf = (wing, sideSign) => {
      const xCenter = sideSign * (coverW / 2 + 0.015);

      // Bìa da thuộc dày cổ điển
      const leatherBoard = new THREE.Mesh(
        new THREE.BoxGeometry(coverW, 0.030, coverD),
        antiqueLeatherMat
      );
      leatherBoard.position.set(xCenter, -0.018, 0);
      wing.add(leatherBoard);

      // Nẹp viền đồng cổ bao quanh bìa da
      const brassRim = new THREE.Mesh(
        new THREE.BoxGeometry(coverW + 0.016, 0.022, coverD + 0.016),
        antiqueBrassMat
      );
      brassRim.position.set(xCenter, -0.020, 0);
      wing.add(brassRim);

      // Bọc góc đồng chạm nổi ở 2 góc ngoài của bìa sách (Antique Corner Bosses)
      const outerX = sideSign * (coverW - 0.035);
      [-coverD / 2 + 0.045, coverD / 2 - 0.045].forEach((cz) => {
        const cornerBoss = new THREE.Mesh(
          new THREE.BoxGeometry(0.095, 0.036, 0.095),
          antiqueBrassMat
        );
        cornerBoss.position.set(outerX, -0.016, cz);
        wing.add(cornerBoss);

        const bossStud = new THREE.Mesh(
          new THREE.SphereGeometry(0.016, 12, 12),
          this.materials.brightGold
        );
        bossStud.position.set(outerX + sideSign * 0.015, 0.004, cz);
        wing.add(bossStud);
      });

      // 3 lớp khối trang giấy cổ dày xếp bậc thang (Stepped Gilded Page Blocks)
      [
        { w: coverW - 0.035, d: coverD - 0.045, h: 0.024, y: 0.008, mat: gildedPageEdgeMat },
        { w: coverW - 0.050, d: coverD - 0.060, h: 0.020, y: 0.026, mat: innerParchmentBlockMat },
        { w: coverW - 0.064, d: coverD - 0.072, h: 0.014, y: 0.038, mat: gildedPageEdgeMat }
      ].forEach((layer) => {
        const blk = new THREE.Mesh(
          new THREE.BoxGeometry(layer.w, layer.h, layer.d),
          layer.mat
        );
        blk.position.set(sideSign * (layer.w / 2 + 0.008), layer.y, 0);
        wing.add(blk);
      });
    };

    buildBookHalf(leftWing, -1);
    buildBookHalf(rightWing, 1);

    // Vẽ trang giấy da dê cổ (Aged Parchment & Classical Illuminated Calligraphy)
    const createBookPageTexture = (isLeft) => {
      const c = document.createElement('canvas');
      c.width = 768;
      c.height = 1024;
      const ctx = c.getContext('2d');

      // Nền giấy cổ ngả màu trầm ấm (Vintage Parchment)
      const g = ctx.createRadialGradient(384, 512, 60, 384, 512, 620);
      g.addColorStop(0, '#f7ebd2');
      g.addColorStop(0.65, '#ead4ac');
      g.addColorStop(1, '#cfb07c');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 768, 1024);

      // Vân giấy cổ nhẹ
      ctx.strokeStyle = 'rgba(120, 82, 32, 0.05)';
      ctx.lineWidth = 1;
      for (let py = 20; py < 1004; py += 14) {
        ctx.beginPath();
        ctx.moveTo(20, py);
        ctx.lineTo(748, py);
        ctx.stroke();
      }

      // Đổ bóng sâu ở khe gáy sách giữa 2 trang
      const spineGrad = isLeft
        ? ctx.createLinearGradient(640, 0, 768, 0)
        : ctx.createLinearGradient(0, 0, 128, 0);
      if (isLeft) {
        spineGrad.addColorStop(0, 'rgba(70, 42, 10, 0)');
        spineGrad.addColorStop(0.7, 'rgba(70, 42, 10, 0.22)');
        spineGrad.addColorStop(1, 'rgba(42, 22, 4, 0.52)');
        ctx.fillStyle = spineGrad;
        ctx.fillRect(640, 0, 128, 1024);
      } else {
        spineGrad.addColorStop(0, 'rgba(42, 22, 4, 0.52)');
        spineGrad.addColorStop(0.3, 'rgba(70, 42, 10, 0.22)');
        spineGrad.addColorStop(1, 'rgba(70, 42, 10, 0)');
        ctx.fillStyle = spineGrad;
        ctx.fillRect(0, 0, 128, 1024);
      }

      // Khung viền cổ điển kép + hoa văn góc (Classical Double Border & Corner Flourishes)
      ctx.strokeStyle = '#6e4715';
      ctx.lineWidth = 6;
      ctx.strokeRect(42, 42, 684, 940);

      ctx.strokeStyle = '#9c6b24';
      ctx.lineWidth = 2.5;
      ctx.strokeRect(56, 56, 656, 912);

      // Hoa văn góc cổ điển
      const cornerCoords = [
        [56, 56, 1, 1],
        [712, 56, -1, 1],
        [56, 968, 1, -1],
        [712, 968, -1, -1]
      ];
      ctx.strokeStyle = '#781d1d';
      ctx.lineWidth = 3;
      cornerCoords.forEach(([cx0, cy0, dx, dy]) => {
        ctx.beginPath();
        ctx.moveTo(cx0, cy0 + dy * 28);
        ctx.lineTo(cx0 + dx * 28, cy0 + dy * 28);
        ctx.lineTo(cx0 + dx * 28, cy0);
        ctx.stroke();
      });

      ctx.textAlign = 'center';
      if (isLeft) {
        ctx.fillStyle = '#781d1d';
        ctx.font = 'bold 24px "Cormorant Garamond", Georgia, serif';
        ctx.fillText('— TƯ LIỆU LỊCH SỬ GIÁO DỤC VIỆT NAM —', 384, 110);

        ctx.fillStyle = '#2b1704';
        ctx.font = 'bold 46px "Cormorant Garamond", Georgia, serif';
        ctx.fillText('LỊCH SỬ RA ĐỜI', 384, 178);
        ctx.fillText('NGÀY NHÀ GIÁO VIỆT NAM', 384, 232);

        ctx.fillStyle = '#7f1d1d';
        ctx.font = 'bold 84px "Cormorant Garamond", Georgia, serif';
        ctx.fillText('20 • 11', 384, 332);

        // Hoa văn ngăn cách cổ điển
        ctx.strokeStyle = '#6e4715';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(130, 368);
        ctx.lineTo(638, 368);
        ctx.stroke();
        ctx.fillStyle = '#781d1d';
        ctx.font = '26px serif';
        ctx.fillText('❖', 384, 377);

        ctx.textAlign = 'left';
        const leftMilestones = [
          ['• Tháng 7.1946 (Paris, Pháp):', 'Thành lập Liên hiệp quốc tế Các công đoàn giáo dục (FISE).'],
          ['• Năm 1949 (Warszawa, Ba Lan):', 'Xây dựng bản Hiến chương Các nhà giáo gồm 15 chương.'],
          ['• Tháng 7.1953:', 'Công đoàn Giáo dục Việt Nam gia nhập tổ chức quốc tế FISE.'],
          ['• Ngày 20.11.1958:', 'Ngày Quốc tế Hiến chương các nhà giáo (57 nước tham dự).']
        ];
        let y = 435;
        leftMilestones.forEach(([mTitle, mDesc]) => {
          ctx.fillStyle = '#6e1414';
          ctx.font = 'bold 25px "Cormorant Garamond", Georgia, serif';
          ctx.fillText(mTitle, 84, y);
          y += 32;
          ctx.fillStyle = '#2b1806';
          ctx.font = '600 21px "Be Vietnam Pro", sans-serif';
          ctx.fillText(mDesc.slice(0, 38), 84, y);
          if (mDesc.length > 38) {
            y += 28;
            ctx.fillText(mDesc.slice(38), 84, y);
          }
          y += 42;
        });

        ctx.textAlign = 'center';
        ctx.fillStyle = '#6e4715';
        ctx.font = 'italic 20px "Cormorant Garamond", Georgia, serif';
        ctx.fillText('— Trang I —', 384, 935);
      } else {
        ctx.fillStyle = '#781d1d';
        ctx.font = 'bold 24px "Cormorant Garamond", Georgia, serif';
        ctx.fillText('— QUYẾT ĐỊNH LỊCH SỬ SỐ 167-HĐBT —', 384, 110);

        ctx.fillStyle = '#2b1704';
        ctx.font = 'bold 42px "Cormorant Garamond", Georgia, serif';
        ctx.fillText('NGÀY 28 THÁNG 9 NĂM 1982', 384, 175);

        ctx.strokeStyle = '#6e4715';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(130, 208);
        ctx.lineTo(638, 208);
        ctx.stroke();

        const lines = [
          'Thay mặt Hội đồng Bộ trưởng,',
          'Phó Chủ tịch Võ Nguyên Giáp',
          'đã ký Quyết định số 167-HĐBT',
          'chính thức lấy ngày 20.11 hàng năm',
          'là NGÀY NHÀ GIÁO VIỆT NAM.',
          '',
          '“Tôn vinh những người thầy',
          'đã cống hiến cho sự nghiệp',
          'Trồng Người cao quý của dân tộc.”'
        ];
        let y = 268;
        lines.forEach((ln, idx) => {
          ctx.fillStyle = idx >= 6 ? '#6e1414' : '#2b1704';
          ctx.font = idx === 4
            ? 'bold 26px "Cormorant Garamond", Georgia, serif'
            : (idx >= 6 ? 'italic bold 26px "Cormorant Garamond", Georgia, serif' : '600 22px "Be Vietnam Pro", sans-serif');
          ctx.fillText(ln, 384, y);
          y += 39;
        });

        // Ấn triện đỏ cổ truyền (Traditional Vermilion Seal Stamp)
        ctx.save();
        ctx.translate(565, 765);
        ctx.rotate(-0.08);
        ctx.strokeStyle = 'rgba(168, 28, 28, 0.82)';
        ctx.lineWidth = 5;
        ctx.strokeRect(-64, -64, 128, 128);
        ctx.lineWidth = 2;
        ctx.strokeRect(-56, -56, 112, 112);
        ctx.fillStyle = 'rgba(168, 28, 28, 0.82)';
        ctx.font = 'bold 22px "Cormorant Garamond", serif';
        ctx.fillText('TÔN SƯ', 0, -14);
        ctx.fillText('TRỌNG ĐẠO', 0, 18);
        ctx.fillText('20 • 11', 0, 46);
        ctx.restore();

        // Dòng chữ mời lật sách thanh nhã kiểu cổ thư
        ctx.fillStyle = '#5c3409';
        ctx.font = 'italic bold 23px "Cormorant Garamond", Georgia, serif';
        ctx.fillText('✦ Chạm vào cổ thư để lật đọc từng trang ✦', 320, 868);

        ctx.fillStyle = '#6e4715';
        ctx.font = 'italic 20px "Cormorant Garamond", Georgia, serif';
        ctx.fillText('— Trang II —', 384, 935);
      }

      const tex = new THREE.CanvasTexture(c);
      tex.anisotropy = 8;
      return tex;
    };

    // Tạo mặt trang giấy uốn cong tự nhiên (Arched Page Geometry) như sách cổ thật
    const createArchedPageMesh = (isLeft) => {
      const pw = coverW - 0.068;
      const pd = coverD - 0.078;
      const geom = new THREE.PlaneGeometry(pw, pd, 20, 1);
      geom.rotateX(-Math.PI / 2);
      const pos = geom.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const lx = pos.getX(i); // từ -pw/2 đến +pw/2
        // Chuẩn hóa t = 0 tại gáy sách, t = 1 tại mép ngoài trang sách
        const t = isLeft ? (pw / 2 - lx) / pw : (lx + pw / 2) / pw;
        // Đường cong vòm trang sách cổ: nhô cao ở giữa trang và hạ nhẹ ở gáy & mép
        const archY = Math.sin(t * Math.PI) * 0.036 - Math.pow(1 - t, 3) * 0.012;
        pos.setY(i, archY);
      }
      geom.computeVertexNormals();
      const mesh = new THREE.Mesh(
        geom,
        new THREE.MeshBasicMaterial({ map: createBookPageTexture(isLeft) })
      );
      mesh.position.set(isLeft ? -(pw / 2 + 0.008) : (pw / 2 + 0.008), 0.048, 0);
      return mesh;
    };

    leftWing.add(createArchedPageMesh(true));
    rightWing.add(createArchedPageMesh(false));

    // Dải lụa đỏ đánh dấu sách cổ + tua rua vàng rủ qua mép trước
    const ribbon = new THREE.Mesh(
      new THREE.BoxGeometry(0.032, 0.006, 0.56),
      new THREE.MeshStandardMaterial({ color: 0x7f1d1d, roughness: 0.45, emissive: 0x2a0505 })
    );
    ribbon.position.set(0, 0.046, 0.24);
    floatingBook.add(ribbon);

    const tassel = new THREE.Mesh(
      new THREE.ConeGeometry(0.022, 0.07, 12),
      antiqueBrassMat
    );
    tassel.position.set(0, 0.01, 0.52);
    tassel.rotation.x = 0.35;
    floatingBook.add(tassel);

    floatingBook.add(leftWing);
    floatingBook.add(rightWing);
    bookGroup.add(floatingBook);

    // 5. Bảng đồng thuyết minh phía trước bệ sách (Front Lectern Plaque)
    const plaqueGroup = new THREE.Group();
    plaqueGroup.position.set(0, 0.88, 1.32);

    const plaqueStand = new THREE.Mesh(
      new THREE.CylinderGeometry(0.035, 0.045, 0.86, 12),
      this.materials.brightGold
    );
    plaqueStand.position.y = -0.42;
    plaqueGroup.add(plaqueStand);

    const plaqueBase = new THREE.Mesh(
      new THREE.CylinderGeometry(0.22, 0.26, 0.05, 16),
      this.materials.bronzeGold
    );
    plaqueBase.position.y = -0.84;
    plaqueGroup.add(plaqueBase);

    const pCanvas = document.createElement('canvas');
    pCanvas.width = 1024;
    pCanvas.height = 512;
    const pCtx = pCanvas.getContext('2d');
    pCtx.fillStyle = '#09192f';
    pCtx.fillRect(0, 0, 1024, 512);
    pCtx.strokeStyle = '#ffd700';
    pCtx.lineWidth = 14;
    pCtx.strokeRect(20, 20, 984, 472);
    pCtx.strokeStyle = 'rgba(255, 226, 122, 0.55)';
    pCtx.lineWidth = 4;
    pCtx.strokeRect(40, 40, 944, 432);

    pCtx.textAlign = 'center';
    pCtx.fillStyle = '#ffd700';
    pCtx.font = 'bold 30px "Be Vietnam Pro", sans-serif';
    pCtx.fillText('✦ ẤN PHẨM ĐẶC BIỆT • PHÒNG LỊCH SỬ GIÁO DỤC ✦', 512, 102);

    pCtx.fillStyle = '#ffffff';
    pCtx.font = 'bold 46px "Cormorant Garamond", Georgia, serif';
    pCtx.fillText('LỊCH SỬ NGÀY NHÀ GIÁO VIỆT NAM 20.11', 512, 178);

    pCtx.fillStyle = '#e2e8f0';
    pCtx.font = '500 22px "Be Vietnam Pro", sans-serif';
    pCtx.fillText('Từ Hiến chương Các nhà giáo (FISE 1946–1958) đến Quyết định 167-HĐBT (28/9/1982)', 512, 246);

    pCtx.fillStyle = '#8b1e24';
    pCtx.beginPath();
    pCtx.roundRect(152, 315, 720, 110, 55);
    pCtx.fill();
    pCtx.strokeStyle = '#ffd700';
    pCtx.lineWidth = 5;
    pCtx.stroke();

    pCtx.fillStyle = '#fff8dc';
    pCtx.font = 'bold 32px "Be Vietnam Pro", sans-serif';
    pCtx.fillText('📖 BẤM ĐỂ MỞ SÁCH LẬT TÌM HIỂU NGAY', 512, 380);

    const pTex = new THREE.CanvasTexture(pCanvas);
    const plaqueBoard = new THREE.Mesh(
      new THREE.BoxGeometry(1.06, 0.54, 0.04),
      this.materials.bronzeGold
    );
    plaqueBoard.rotation.x = -0.58;
    const plaqueFace = new THREE.Mesh(
      new THREE.PlaneGeometry(1.02, 0.50),
      new THREE.MeshBasicMaterial({ map: pTex })
    );
    plaqueFace.position.z = 0.022;
    plaqueBoard.add(plaqueFace);
    plaqueGroup.add(plaqueBoard);
    bookGroup.add(plaqueGroup);

    // 6. Ánh sáng vàng ấm & 180 Hạt Sao Pha Lê Lấp Lánh Bay Quanh Cuốn Sách (Sparkling Particles)
    const bookLight = new THREE.PointLight(0xffd700, 1.85, 9.5);
    bookLight.position.set(0, 2.15, 0.3);
    bookGroup.add(bookLight);

    const particleCount = 180;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const phases = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 0.45 + Math.random() * 1.35;
      const angle = Math.random() * Math.PI * 2;
      const height = 0.85 + Math.random() * 2.1;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = height;
      positions[i * 3 + 2] = Math.sin(angle) * radius;

      // Sắc vàng hoàng kim & trắng kim cương lấp lánh
      const isDiamond = i % 3 === 0;
      colors[i * 3] = 1.0;
      colors[i * 3 + 1] = isDiamond ? 0.98 : 0.84;
      colors[i * 3 + 2] = isDiamond ? 0.92 : 0.32;
      phases[i] = Math.random() * Math.PI * 2;
    }

    const sparkleGeom = new THREE.BufferGeometry();
    sparkleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    sparkleGeom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const spCanvas = document.createElement('canvas');
    spCanvas.width = 64;
    spCanvas.height = 64;
    const spCtx = spCanvas.getContext('2d');
    const spGrad = spCtx.createRadialGradient(32, 32, 2, 32, 32, 30);
    spGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    spGrad.addColorStop(0.35, 'rgba(255, 225, 110, 0.9)');
    spGrad.addColorStop(1, 'rgba(255, 190, 0, 0)');
    spCtx.fillStyle = spGrad;
    spCtx.beginPath();
    spCtx.arc(32, 32, 30, 0, Math.PI * 2);
    spCtx.fill();

    const sparkleMat = new THREE.PointsMaterial({
      size: 0.14,
      map: new THREE.CanvasTexture(spCanvas),
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const sparklePoints = new THREE.Points(sparkleGeom, sparkleMat);
    bookGroup.add(sparklePoints);

    // Hiệu ứng chuyển động lơ lửng nhẹ nhàng & hạt lấp lánh bay lên
    this.animatedObjects.push({
      mesh: floatingBook,
      customUpdate: (time) => {
        floatingBook.position.y = 1.48 + Math.sin(time * 2.0) * 0.035;
        floatingBook.rotation.y = Math.sin(time * 0.8) * 0.08;
        topGlowRing.scale.setScalar(1.0 + Math.sin(time * 3.0) * 0.06);

        const posAttr = sparkleGeom.getAttribute('position');
        for (let i = 0; i < particleCount; i++) {
          let py = posAttr.getY(i) + 0.0045;
          if (py > 3.0) py = 0.85;
          const px = posAttr.getX(i) + Math.sin(time * 1.8 + phases[i]) * 0.0015;
          const pz = posAttr.getZ(i) + Math.cos(time * 1.8 + phases[i]) * 0.0015;
          posAttr.setXYZ(i, px, py, pz);
        }
        posAttr.needsUpdate = true;
      }
    });

    // Gắn nhãn tương tác isBook2011 cho toàn bộ các phần của Cuốn Sách Vàng & Bệ Đỡ
    const bookMeta = {
      isBook2011: true,
      title: 'Sách Vàng Lịch Sử Ngày Nhà Giáo Việt Nam 20/11',
      subtitle: 'Bấm để mở Sách Lật tìm hiểu sự ra đời & ý nghĩa Ngày Nhà giáo Việt Nam 20/11'
    };
    bookGroup.userData = bookMeta;
    bookGroup.traverse((child) => {
      if (child.isMesh) {
        child.userData = { ...bookMeta };
        this.interactables.push(child);
      }
    });

    this.scene.add(bookGroup);
  }

  // ==================== HỆ THỐNG MŨI TÊN NHỎ GỌN PHÂN BIỆT "ĐI VÀO" & "ĐI RA" DƯỚI SÀN ====================
  // Thiết kế thanh mảnh, nhỏ gọn, phân biệt rõ:
  // - Mũi tên ĐI VÀO (dir: 'in'): Viền Vàng Ngọc Lục Bảo, nhãn "VÀO ❯❯" hướng tiến vào phòng
  // - Mũi tên ĐI RA (dir: 'out'): Viền Vàng Hổ Phách, nhãn "RA ❯❯" hướng quay ra Đại Sảnh
  // - Điểm ngắm sát tường (dir: 'view'): Nhỏ gọn "✦ XEM" hướng vào tranh/hiện vật
  buildDenseMiniStepArrows() {
    const miniArrowsGroup = new THREE.Group();
    miniArrowsGroup.name = 'dense-mini-step-arrows-group';

    const makeCompactArrowMat = (mode) => {
      const c = document.createElement('canvas');
      c.width = 512;
      c.height = 240;
      const ctx = c.getContext('2d');

      const isOut = mode === 'out';
      const isView = mode === 'view';

      // Nền viên nang thanh mảnh
      const grad = ctx.createLinearGradient(0, 0, 512, 0);
      if (isOut) {
        grad.addColorStop(0, 'rgba(56, 18, 24, 0.90)');
        grad.addColorStop(0.5, 'rgba(88, 28, 36, 0.94)');
        grad.addColorStop(1, 'rgba(56, 18, 24, 0.90)');
      } else if (isView) {
        grad.addColorStop(0, 'rgba(12, 28, 52, 0.86)');
        grad.addColorStop(0.5, 'rgba(20, 44, 78, 0.92)');
        grad.addColorStop(1, 'rgba(12, 28, 52, 0.86)');
      } else {
        grad.addColorStop(0, 'rgba(8, 38, 44, 0.90)');
        grad.addColorStop(0.5, 'rgba(14, 62, 68, 0.94)');
        grad.addColorStop(1, 'rgba(8, 38, 44, 0.90)');
      }

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.roundRect(16, 18, 480, 204, 102);
      ctx.fill();

      // Viền mảnh sang trọng
      ctx.strokeStyle = isOut ? '#fb923c' : (isView ? '#ffd700' : '#34d399');
      ctx.lineWidth = 7;
      ctx.stroke();

      ctx.strokeStyle = 'rgba(255, 235, 160, 0.55)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(28, 30, 456, 180, 90);
      ctx.stroke();

      // Nhãn phân biệt rõ ràng: VÀO / RA / XEM
      ctx.fillStyle = isOut ? '#fed7aa' : (isView ? '#fde68a' : '#a7f3d0');
      ctx.font = 'bold 54px "Be Vietnam Pro", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const labelText = isOut ? 'ĐI RA' : (isView ? '✦ XEM' : 'ĐI VÀO');
      ctx.fillText(labelText, 195, 122);

      // 2 Mũi tên Chevron sắc nét ở đầu phải (trỏ theo hướng tiến của mũi tên)
      ctx.fillStyle = isOut ? '#fb923c' : '#ffd700';
      const drawMiniChevron = (cx, cy, sz) => {
        ctx.beginPath();
        ctx.moveTo(cx - sz * 0.65, cy - sz * 0.85);
        ctx.lineTo(cx + sz * 0.45, cy);
        ctx.lineTo(cx - sz * 0.65, cy + sz * 0.85);
        ctx.lineTo(cx - sz * 0.18, cy);
        ctx.closePath();
        ctx.fill();
      };
      drawMiniChevron(355, 120, 40);
      drawMiniChevron(420, 120, 40);

      const tex = new THREE.CanvasTexture(c);
      tex.anisotropy = 8;
      return new THREE.MeshBasicMaterial({
        map: tex,
        transparent: true,
        opacity: 0.9,
        depthWrite: false
      });
    };

    const matIn = makeCompactArrowMat('in');
    const matOut = makeCompactArrowMat('out');
    const matView = makeCompactArrowMat('view');

    // Mạng lưới mũi tên ĐI VÀO (dir: 'in'), ĐI RA (dir: 'out') và NGẮM TRANH (dir: 'view')
    const waypoints = [
      // =====================================================================
      // 1. HÀNH LANG NAM (LỜI BÁC DẠY & BỘ ĐỒ DÙNG): Làn ĐI VÀO & Làn ĐI RA tách biệt rõ ràng
      // =====================================================================
      // Làn ĐI VÀO hành lang (bên phải theo chiều đi vào, x = -0.48)
      { x: -0.48, z: 12.5, rotY: 0, dir: 'in', lookAt: { x: 0, y: 1.6, z: 19.0 } },
      { x: -0.48, z: 16.5, rotY: 0, dir: 'in', lookAt: { x: 0, y: 1.6, z: 22.0 } },
      { x: -0.48, z: 30.5, rotY: 0, dir: 'in', lookAt: { x: 0, y: 1.6, z: 36.5 } },
      { x: -0.48, z: 34.0, rotY: 0, dir: 'in', lookAt: { x: 0, y: 1.6, z: 38.5 } },

      // Làn ĐI RA về Đại Sảnh (bên phải theo chiều đi ra, x = +0.48)
      { x: 0.48, z: 33.5, rotY: Math.PI, dir: 'out', lookAt: { x: 0, y: 1.6, z: 26.0 } },
      { x: 0.48, z: 29.8, rotY: Math.PI, dir: 'out', lookAt: { x: 0, y: 1.6, z: 22.0 } },
      { x: 0.48, z: 18.5, rotY: Math.PI, dir: 'out', lookAt: { x: 0, y: 1.6, z: 10.0 } },
      { x: 0.48, z: 13.5, rotY: Math.PI, dir: 'out', lookAt: { x: 0, y: 1.6, z: 0.0 } },

      // Nhánh vòng qua 2 bên Tủ kính Bức thư Bác Hồ (z = 20.5 -> 29.0) có cả chiều VÀO và RA
      { x: -2.9, z: 21.0, rotY: 0, dir: 'in', lookAt: { x: -2.9, y: 1.6, z: 27.5 } },
      { x: -3.2, z: 25.0, rotY: Math.PI / 2, dir: 'view', lookAt: { x: 0.0, y: 1.4, z: 25.0 } },
      { x: -2.9, z: 28.5, rotY: Math.PI, dir: 'out', lookAt: { x: -2.9, y: 1.6, z: 19.0 } },

      { x: 2.9, z: 21.0, rotY: 0, dir: 'in', lookAt: { x: 2.9, y: 1.6, z: 27.5 } },
      { x: 3.2, z: 25.0, rotY: -Math.PI / 2, dir: 'view', lookAt: { x: 0.0, y: 1.4, z: 25.0 } },
      { x: 2.9, z: 28.5, rotY: Math.PI, dir: 'out', lookAt: { x: 2.9, y: 1.6, z: 19.0 } },

      // Dải điểm XEM sát Tường Trái & Tường Phải hành lang
      { x: -6.8, z: 15.0, rotY: -Math.PI / 2, dir: 'view', lookAt: { x: -11.2, y: 2.4, z: 15.0 } },
      { x: -6.8, z: 21.0, rotY: -Math.PI / 2, dir: 'view', lookAt: { x: -11.2, y: 2.4, z: 21.0 } },
      { x: -6.8, z: 27.0, rotY: -Math.PI / 2, dir: 'view', lookAt: { x: -11.2, y: 2.4, z: 27.0 } },
      { x: -6.8, z: 33.0, rotY: -Math.PI / 2, dir: 'view', lookAt: { x: -11.2, y: 2.4, z: 33.0 } },

      { x: 6.8, z: 15.0, rotY: Math.PI / 2, dir: 'view', lookAt: { x: 11.2, y: 2.4, z: 15.0 } },
      { x: 6.8, z: 21.0, rotY: Math.PI / 2, dir: 'view', lookAt: { x: 11.2, y: 2.4, z: 21.0 } },
      { x: 6.8, z: 27.0, rotY: Math.PI / 2, dir: 'view', lookAt: { x: 11.2, y: 2.4, z: 27.0 } },
      { x: 6.8, z: 33.0, rotY: Math.PI / 2, dir: 'view', lookAt: { x: 11.2, y: 2.4, z: 33.0 } },

      // =====================================================================
      // 2. VÒNG QUANH CỘI CÂY TRI THỨC TẠI ĐẠI SẢNH (X = 0, Z = 0)
      // =====================================================================
      { x: -3.8, z: 4.8, rotY: Math.PI, dir: 'in', lookAt: { x: -4.8, y: 1.8, z: -2.0 } },
      { x: 3.8, z: 4.8, rotY: Math.PI, dir: 'in', lookAt: { x: 4.8, y: 1.8, z: -2.0 } },
      { x: -5.2, z: 1.5, rotY: Math.PI, dir: 'in', lookAt: { x: -5.2, y: 1.8, z: -5.5 } },
      { x: 5.2, z: 1.5, rotY: Math.PI, dir: 'in', lookAt: { x: 5.2, y: 1.8, z: -5.5 } },
      { x: -4.2, z: -5.8, rotY: Math.PI, dir: 'in', lookAt: { x: 0, y: 1.8, z: -14.0 } },
      { x: 4.2, z: -5.8, rotY: Math.PI, dir: 'in', lookAt: { x: 0, y: 1.8, z: -14.0 } },
      { x: -3.4, z: -5.8, rotY: 0, dir: 'out', lookAt: { x: 0, y: 2.0, z: 0.0 } },
      { x: 3.4, z: -5.8, rotY: 0, dir: 'out', lookAt: { x: 0, y: 2.0, z: 0.0 } },

      // =====================================================================
      // 3. GIAN PHÒNG "NHỮNG NGƯỜI THẦY TRONG SỬ VIỆT" (BẮC WING)
      // =====================================================================
      // Làn ĐI VÀO phòng Nhà giáo (x = -0.48)
      { x: -0.48, z: -8.8, rotY: Math.PI, dir: 'in', lookAt: { x: 0, y: 1.6, z: -16.0 } },
      { x: -0.48, z: -13.0, rotY: Math.PI, dir: 'in', lookAt: { x: 0, y: 1.6, z: -20.5 } },
      { x: -0.48, z: -17.5, rotY: Math.PI, dir: 'in', lookAt: { x: 0, y: 1.6, z: -24.3 } },

      // Làn ĐI RA về Đại Sảnh (x = +0.48)
      { x: 0.48, z: -18.0, rotY: 0, dir: 'out', lookAt: { x: 0, y: 1.6, z: -10.0 } },
      { x: 0.48, z: -13.0, rotY: 0, dir: 'out', lookAt: { x: 0, y: 1.6, z: -5.0 } },
      { x: 0.48, z: -8.8, rotY: 0, dir: 'out', lookAt: { x: 0, y: 1.8, z: 0.0 } },

      // Vòng quanh Cây Đa Tri Ân (0, -24.3)
      { x: -3.8, z: -20.8, rotY: -Math.PI * 0.75, dir: 'in', lookAt: { x: -9.5, y: 1.7, z: -20.8 } },
      { x: -4.8, z: -24.3, rotY: -Math.PI / 2, dir: 'view', lookAt: { x: -12.0, y: 1.7, z: -24.3 } },
      { x: -3.8, z: -27.8, rotY: -Math.PI * 0.25, dir: 'in', lookAt: { x: -9.5, y: 1.7, z: -31.5 } },
      { x: 0, z: -29.2, rotY: Math.PI, dir: 'in', lookAt: { x: 0, y: 1.7, z: -34.2 } },
      { x: 3.8, z: -27.8, rotY: Math.PI * 0.25, dir: 'in', lookAt: { x: 9.5, y: 1.7, z: -31.5 } },
      { x: 4.8, z: -24.3, rotY: Math.PI / 2, dir: 'view', lookAt: { x: 12.0, y: 1.7, z: -24.3 } },
      { x: 3.8, z: -20.8, rotY: 0, dir: 'out', lookAt: { x: 0, y: 1.6, z: -12.0 } },
      { x: 0, z: -31.8, rotY: 0, dir: 'out', lookAt: { x: 0, y: 1.8, z: -24.3 } },

      // =====================================================================
      // 4. PHÒNG BỘ TRƯỞNG BỘ GIÁO DỤC VIỆT NAM QUA CÁC THỜI KỲ (ĐÔNG WING)
      // =====================================================================
      // Làn ĐI VÀO (z = +0.46)
      { x: 6.5, z: 0.46, rotY: Math.PI / 2, dir: 'in', lookAt: { x: 14.0, y: 1.6, z: 0 } },
      { x: 11.2, z: 0.46, rotY: Math.PI / 2, dir: 'in', lookAt: { x: 18.5, y: 1.6, z: 0 } },
      { x: 15.8, z: 0.46, rotY: Math.PI / 2, dir: 'in', lookAt: { x: 22.5, y: 1.6, z: 0 } },
      { x: 26.8, z: 0.46, rotY: Math.PI / 2, dir: 'in', lookAt: { x: 33.8, y: 2.2, z: 0 } },
      { x: 30.5, z: 0.46, rotY: Math.PI / 2, dir: 'in', lookAt: { x: 34.0, y: 2.4, z: 0 } },

      // Làn ĐI RA về Đại Sảnh (z = -0.46)
      { x: 30.0, z: -0.46, rotY: -Math.PI / 2, dir: 'out', lookAt: { x: 22.5, y: 1.6, z: 0 } },
      { x: 26.2, z: -0.46, rotY: -Math.PI / 2, dir: 'out', lookAt: { x: 18.0, y: 1.6, z: 0 } },
      { x: 16.5, z: -0.46, rotY: -Math.PI / 2, dir: 'out', lookAt: { x: 9.0, y: 1.6, z: 0 } },
      { x: 11.2, z: -0.46, rotY: -Math.PI / 2, dir: 'out', lookAt: { x: 0.0, y: 1.6, z: 0 } },

      // Vòng qua 2 bên Bục Quả Cầu Vàng (22.5, 0)
      { x: 20.2, z: -3.5, rotY: Math.PI / 2, dir: 'in', lookAt: { x: 26.5, y: 1.6, z: -3.5 } },
      { x: 24.8, z: -3.5, rotY: -Math.PI / 2, dir: 'out', lookAt: { x: 16.0, y: 1.6, z: -3.5 } },
      { x: 20.2, z: 3.5, rotY: Math.PI / 2, dir: 'in', lookAt: { x: 26.5, y: 1.6, z: 3.5 } },
      { x: 24.8, z: 3.5, rotY: -Math.PI / 2, dir: 'out', lookAt: { x: 16.0, y: 1.6, z: 3.5 } },

      // Điểm XEM sát Tường Bắc & Tường Nam ngắm chân dung 15 Bộ trưởng
      { x: 14.8, z: -5.5, rotY: Math.PI, dir: 'view', lookAt: { x: 14.8, y: 2.4, z: -8.7 } },
      { x: 19.5, z: -5.5, rotY: Math.PI, dir: 'view', lookAt: { x: 19.5, y: 2.4, z: -8.7 } },
      { x: 24.4, z: -5.5, rotY: Math.PI, dir: 'view', lookAt: { x: 24.4, y: 2.4, z: -8.7 } },
      { x: 29.8, z: -5.5, rotY: Math.PI, dir: 'view', lookAt: { x: 29.8, y: 2.4, z: -8.7 } },

      { x: 15.5, z: 5.5, rotY: 0, dir: 'view', lookAt: { x: 15.5, y: 2.4, z: 8.7 } },
      { x: 20.5, z: 5.5, rotY: 0, dir: 'view', lookAt: { x: 20.5, y: 2.4, z: 8.7 } },
      { x: 25.5, z: 5.5, rotY: 0, dir: 'view', lookAt: { x: 25.5, y: 2.4, z: 8.7 } },
      { x: 30.5, z: 5.5, rotY: 0, dir: 'view', lookAt: { x: 30.5, y: 2.4, z: 8.7 } },

      // =====================================================================
      // 5. PHÒNG LỊCH SỬ GIÁO DỤC VIỆT NAM & CUỐN SÁCH VÀNG 20/11 (TÂY WING)
      // =====================================================================
      // Làn ĐI VÀO dẫn thẳng tới Cuốn Sách Vàng 20/11 (tại x = -19.5, z = 0)
      { x: -6.5, z: -0.46, rotY: -Math.PI / 2, dir: 'in', lookAt: { x: -14.0, y: 1.6, z: 0 } },
      { x: -11.5, z: -0.46, rotY: -Math.PI / 2, dir: 'in', lookAt: { x: -19.5, y: 1.6, z: 0 } },
      { x: -15.6, z: 0.0, rotY: -Math.PI / 2, dir: 'in', lookAt: { x: -19.5, y: 1.55, z: 0 } }, // Đứng ngay trước Sách Vàng 20/11

      // Vòng qua 2 bên Cuốn Sách Vàng 20/11 tiến sâu vào cuối phòng
      { x: -19.5, z: -2.8, rotY: 0, dir: 'view', lookAt: { x: -19.5, y: 1.55, z: 0 } },
      { x: -19.5, z: 2.8, rotY: Math.PI, dir: 'view', lookAt: { x: -19.5, y: 1.55, z: 0 } },
      { x: -22.8, z: -0.46, rotY: -Math.PI / 2, dir: 'in', lookAt: { x: -27.5, y: 2.0, z: 0 } },

      // Làn ĐI RA từ Phòng Lịch Sử về lại Đại Sảnh (z = +0.46)
      { x: -23.2, z: 0.46, rotY: Math.PI / 2, dir: 'out', lookAt: { x: -15.0, y: 1.6, z: 0 } },
      { x: -15.2, z: 0.46, rotY: Math.PI / 2, dir: 'out', lookAt: { x: -8.0, y: 1.6, z: 0 } },
      { x: -11.2, z: 0.46, rotY: Math.PI / 2, dir: 'out', lookAt: { x: 0.0, y: 1.6, z: 0 } },

      // Điểm XEM sát các bục giai đoạn lịch sử
      { x: -16.2, z: -4.2, rotY: Math.PI, dir: 'view', lookAt: { x: -16.2, y: 1.8, z: -6.8 } },
      { x: -21.6, z: -4.4, rotY: Math.PI, dir: 'view', lookAt: { x: -21.6, y: 1.8, z: -6.8 } },
      { x: -16.2, z: 4.2, rotY: 0, dir: 'view', lookAt: { x: -16.2, y: 1.8, z: 6.8 } },
      { x: -21.6, z: 4.4, rotY: 0, dir: 'view', lookAt: { x: -21.6, y: 1.8, z: 6.8 } }
    ];

    // Tự động sinh các điểm XEM nhỏ gọn bám dọc sát dải tường cong chữ S trong phòng Những Người Thầy Trong Sử Việt
    if (typeof this.teachersGetPointAtDist === 'function') {
      const totalLen = this.teachersTotalCurveLength || 78.5;
      for (let d = 4.0; d <= totalLen - 4.0; d += 5.2) {
        const pt = this.teachersGetPointAtDist(d);
        const standX = pt.wallX + pt.nx * 3.1;
        const standZ = pt.wallZ + pt.nz * 3.1;
        const lookWallAngle = Math.atan2(-pt.nx, -pt.nz);
        waypoints.push({
          x: standX,
          z: standZ,
          rotY: lookWallAngle,
          dir: 'view',
          lookAt: { x: pt.wallX, y: 1.75, z: pt.wallZ }
        });
      }
    }

    waypoints.forEach((wp) => {
      const g = new THREE.Group();
      g.position.set(wp.x, 0.023, wp.z);
      // Xoay mặt phẳng sao cho đầu bên phải của texture (nơi có mũi tên ❯❯) trỏ đúng hướng di chuyển
      g.rotation.y = wp.rotY - Math.PI / 2;

      const isView = wp.dir === 'view';
      const w = isView ? 0.30 : 0.38;
      const h = isView ? 0.14 : 0.18;
      const mat = wp.dir === 'out' ? matOut : (isView ? matView : matIn);

      const p = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
      p.rotation.x = -Math.PI / 2;
      g.add(p);

      const interactMeta = {
        isTourArrow: true,
        arrowDir: wp.dir || 'in',
        targetCamera: { x: wp.x, y: 1.6, z: wp.z },
        targetLookAt: wp.lookAt
      };
      g.userData = interactMeta;
      p.userData = interactMeta;

      this.interactables.push(p);
      miniArrowsGroup.add(g);
    });

    this.scene.add(miniArrowsGroup);
  }

  buildFloorNavigationArrows() {
    const wayfindingGroup = new THREE.Group();

    // =========================================================================
    // A. CÁC VẠCH KẺ DẪN ĐƯỜNG HOÀNG GIA (ROYAL WAYFINDING RUNNER STRIPS)
    // Dẫn từ trung tâm Đại Sảnh (Z = 0, X = 0) tỏa ra 4 hướng cửa 4 phòng
    // =========================================================================
    [
      { w: 3.2, h: 18.0, x: 0, z: -9.0 },  // Hướng Bắc: Vào Phòng Nhà Giáo
      { w: 3.2, h: 36.0, x: 0, z: 18.0 },  // Hướng Nam: Hành Lang Lời Bác Dạy & Bộ Đồ Dùng
      { w: 18.0, h: 3.2, x: -9.0, z: 0 },  // Hướng Tây: Vào Phòng Lịch Sử GD
      { w: 18.0, h: 3.2, x: 9.0, z: 0 }    // Hướng Đông: Vào Phòng Bộ Trưởng
    ].forEach((st) => {
      const border = new THREE.Mesh(
        new THREE.PlaneGeometry(st.w + 0.4, st.h + 0.4),
        this.materials.bronzeGold
      );
      border.rotation.x = -Math.PI / 2;
      border.position.set(st.x, 0.012, st.z);
      wayfindingGroup.add(border);

      const runner = new THREE.Mesh(
        new THREE.PlaneGeometry(st.w, st.h),
        this.materials.navyPanel
      );
      runner.rotation.x = -Math.PI / 2;
      runner.position.set(st.x, 0.018, st.z);
      wayfindingGroup.add(runner);
    });

    // =========================================================================
    // B. CÁC BIỂN CHỈ DẪN ĐI VÀO / ĐI RA TRÊN SÀN (NHỎ GỌN, PHÂN BIỆT RÕ VÀO / RA)
    // =========================================================================
    const markersConfig = [
      // 1. MŨI TÊN ĐI VÀO CÁC PHÒNG (Viền Vàng Ngọc Lục Bảo #34d399)
      {
        x: -9.5, z: -0.55,
        icon: '⬅', action: 'ĐI VÀO PHÒNG • HƯỚNG TÂY',
        title: 'LỊCH SỬ GIÁO DỤC & SÁCH VÀNG 20/11',
        subtitle: 'Các giai đoạn Giáo dục Việt Nam & Sách Lật Lịch sử Ngày 20/11',
        targetZoneId: 'room-history',
        accent: '#34d399'
      },
      {
        x: -0.55, z: -9.5,
        icon: '⬆', action: 'ĐI VÀO PHÒNG • HƯỚNG BẮC',
        title: 'NHỮNG NGƯỜI THẦY TRONG SỬ VIỆT',
        subtitle: 'Hành trình tôn vinh các bậc Danh sư trong lịch sử dân tộc',
        targetZoneId: 'room-educators',
        accent: '#34d399'
      },
      {
        x: 8.8, z: 0.55,
        icon: '➡', action: 'ĐI VÀO PHÒNG • HƯỚNG ĐÔNG',
        title: 'BỘ TRƯỞNG BỘ GIÁO DỤC QUA CÁC THỜI KỲ',
        subtitle: 'Chân dung & Dấu ấn 15 vị Bộ trưởng Bộ Giáo dục Việt Nam',
        targetZoneId: 'room-ministers',
        accent: '#34d399'
      },
      {
        x: -4.8, z: -3.8,
        icon: '↖', action: 'ĐI VÀO • LỐI HÔNG TRÁI',
        title: 'NHỮNG NGƯỜI THẦY TRONG SỬ VIỆT',
        subtitle: 'Bước vòng qua cây tiến thẳng vào trung tâm Gian Nhà Giáo',
        targetZoneId: 'room-educators',
        customPos: { x: 0, y: 1.8, z: -16.0 },
        customLookAt: { x: 0, y: 2.0, z: -24.3 },
        accent: '#34d399'
      },
      {
        x: 4.8, z: -3.8,
        icon: '↗', action: 'ĐI VÀO • LỐI HÔNG PHẢI',
        title: 'NHỮNG NGƯỜI THẦY TRONG SỬ VIỆT',
        subtitle: 'Bước vòng qua cây tiến thẳng vào trung tâm Gian Nhà Giáo',
        targetZoneId: 'room-educators',
        customPos: { x: 0, y: 1.8, z: -16.0 },
        customLookAt: { x: 0, y: 2.0, z: -24.3 },
        accent: '#34d399'
      },
      {
        x: -0.55, z: 9.5,
        icon: '⬇', action: 'ĐI VÀO • HÀNH LANG NAM',
        title: 'LỜI BÁC DẠY & BỘ ĐỒ DÙNG DẠY HỌC',
        subtitle: 'Thư Bác Hồ khai trường 9/1945, lời căn dặn & kỷ vật dạy học',
        targetZoneId: 'room-tools',
        accent: '#34d399'
      },

      // 2. MŨI TÊN ĐI RA ĐẠI SẢNH TRUNG TÂM (Viền Vàng Hổ Phách #fb923c)
      {
        x: -14.2, z: 0.55,
        icon: '➡', action: 'ĐI RA • VỀ ĐẠI SẢNH',
        title: 'QUAY LẠI ĐẠI SẢNH TRUNG TÂM',
        subtitle: 'Trở về Cội Cây Tri Thức và Không gian trung tâm',
        targetZoneId: 'grand-hall',
        accent: '#fb923c'
      },
      {
        x: 0.55, z: -15.8,
        icon: '⬇', action: 'ĐI RA • VỀ ĐẠI SẢNH',
        title: 'QUAY LẠI ĐẠI SẢNH TRUNG TÂM',
        subtitle: 'Trở về Cội Cây Tri Thức và Không gian trung tâm',
        targetZoneId: 'grand-hall',
        accent: '#fb923c'
      },
      {
        x: 13.2, z: -0.55,
        icon: '⬅', action: 'ĐI RA • VỀ ĐẠI SẢNH',
        title: 'QUAY LẠI ĐẠI SẢNH TRUNG TÂM',
        subtitle: 'Trở về Cội Cây Tri Thức và Không gian trung tâm',
        targetZoneId: 'grand-hall',
        accent: '#fb923c'
      },
      {
        x: 0.55, z: 15.8,
        icon: '⬆', action: 'ĐI RA • VỀ ĐẠI SẢNH',
        title: 'QUAY LẠI ĐẠI SẢNH TRUNG TÂM',
        subtitle: 'Trở về Cội Cây Tri Thức và Không gian trung tâm',
        targetZoneId: 'grand-hall',
        accent: '#fb923c'
      }
    ];

    markersConfig.forEach((mc) => {
      const markerGroup = new THREE.Group();
      markerGroup.position.set(mc.x, 0.025, mc.z);

      const markerTex = this.createDirectionalMarkerTexture(mc);

      // Thu gọn kích thước đĩa chỉ hướng từ 1.85m xuống 0.96m để thanh lịch, gọn gàng
      const diskGeom = new THREE.PlaneGeometry(0.96, 0.96);
      const diskMat = new THREE.MeshBasicMaterial({
        map: markerTex,
        transparent: true,
        depthWrite: false
      });
      const disk = new THREE.Mesh(diskGeom, diskMat);
      disk.rotation.x = -Math.PI / 2;
      disk.userData = {
        targetZoneId: mc.targetZoneId,
        zoneLabel: mc.title,
        customPos: mc.customPos,
        customLookAt: mc.customLookAt
      };
      markerGroup.add(disk);

      this.interactables.push(disk);
      wayfindingGroup.add(markerGroup);
    });

    this.scene.add(wayfindingGroup);
  }

  buildArchitecture() {
    const archGroup = new THREE.Group();

    // 1. Sàn đá Cẩm thạch Trắng Ngà rộng cho toàn bộ 5 gian
    const mainFloor = new THREE.Mesh(new THREE.PlaneGeometry(72, 72), this.materials.floorStone);
    mainFloor.rotation.x = -Math.PI / 2;
    mainFloor.receiveShadow = true;
    mainFloor.name = 'museum-floor';
    archGroup.add(mainFloor);

    // 2. Hoa văn Trống Đồng & Hoa Sen Vàng Đồng giữa Đại Sảnh
    const medallionCanvas = document.createElement('canvas');
    medallionCanvas.width = 1024;
    medallionCanvas.height = 1024;
    const mCtx = medallionCanvas.getContext('2d');
    const cx = 512, cy = 512;

    const bgGrad = mCtx.createRadialGradient(cx, cy, 50, cx, cy, 500);
    bgGrad.addColorStop(0, '#fefdf8');
    bgGrad.addColorStop(0.65, '#f4ece1');
    bgGrad.addColorStop(1, '#dfceb4');
    mCtx.fillStyle = bgGrad;
    mCtx.fillRect(0, 0, 1024, 1024);

    mCtx.save();
    mCtx.beginPath();
    mCtx.arc(cx, cy, 480, 0, Math.PI * 2);
    mCtx.strokeStyle = '#c89d54';
    mCtx.lineWidth = 14;
    mCtx.stroke();

    mCtx.beginPath();
    mCtx.arc(cx, cy, 460, 0, Math.PI * 2);
    mCtx.strokeStyle = '#996f2d';
    mCtx.lineWidth = 4;
    mCtx.stroke();

    for (let r = 120; r <= 420; r += 50) {
      mCtx.beginPath();
      mCtx.arc(cx, cy, r, 0, Math.PI * 2);
      mCtx.strokeStyle = 'rgba(200, 157, 84, 0.45)';
      mCtx.lineWidth = 3;
      mCtx.stroke();
    }

    const rays = 16;
    for (let i = 0; i < rays; i++) {
      const angle = (i * Math.PI * 2) / rays;
      mCtx.beginPath();
      mCtx.moveTo(cx, cy);
      mCtx.lineTo(cx + Math.cos(angle - 0.08) * 110, cy + Math.sin(angle - 0.08) * 110);
      mCtx.lineTo(cx + Math.cos(angle) * 230, cy + Math.sin(angle) * 230);
      mCtx.lineTo(cx + Math.cos(angle + 0.08) * 110, cy + Math.sin(angle + 0.08) * 110);
      mCtx.closePath();
      mCtx.fillStyle = 'rgba(212, 168, 83, 0.75)';
      mCtx.fill();
    }

    const petals = 12;
    for (let i = 0; i < petals; i++) {
      const angle = (i * Math.PI * 2) / petals;
      mCtx.save();
      mCtx.translate(cx, cy);
      mCtx.rotate(angle);
      mCtx.beginPath();
      mCtx.moveTo(0, -220);
      mCtx.bezierCurveTo(45, -280, 75, -340, 0, -410);
      mCtx.bezierCurveTo(-75, -340, -45, -280, 0, -220);
      mCtx.fillStyle = 'rgba(184, 134, 45, 0.45)';
      mCtx.fill();
      mCtx.strokeStyle = '#c89d54';
      mCtx.lineWidth = 3;
      mCtx.stroke();
      mCtx.restore();
    }

    for (let i = 0; i < 32; i++) {
      const angle = (i * Math.PI * 2) / 32;
      const x = cx + Math.cos(angle) * 440;
      const y = cy + Math.sin(angle) * 440;
      mCtx.beginPath();
      mCtx.arc(x, y, 6, 0, Math.PI * 2);
      mCtx.fillStyle = '#c89d54';
      mCtx.fill();
    }
    mCtx.restore();

    const medallionTex = new THREE.CanvasTexture(medallionCanvas);
    const medallionMesh = new THREE.Mesh(
      new THREE.CircleGeometry(11.2, 64),
      new THREE.MeshStandardMaterial({
        map: medallionTex,
        roughness: 0.35,
        metalness: 0.25
      })
    );
    medallionMesh.rotation.x = -Math.PI / 2;
    medallionMesh.position.y = 0.015;
    archGroup.add(medallionMesh);

    // 3. Hệ thống Cột Tròn Gỗ Lim nâng đỡ Đại Sảnh (Bỏ cột giữa để mở toang tầm nhìn vào Cội Cây Tri Thức)
    const pillarRadius = 12.5;
    for (let i = 0; i < 12; i++) {
      const angle = (i * Math.PI * 2) / 12;
      const px = Math.cos(angle) * pillarRadius;
      const pz = Math.sin(angle) * pillarRadius;
      // BỎ CỘT TRỰC DIỆN TRỤC GIỮA (px = 0) để từ hành lang nhìn thẳng thông suốt vào Cội Cây Tri Thức!
      if (Math.abs(px) < 1.0) continue;
      // BỎ CỘT TRỰC DIỆN PHÍA ĐÔNG (px > 8.0, pz = 0) để mở toang tầm nhìn vào Cổng vòm 15 Bộ Trưởng!
      if (Math.abs(pz) < 1.0 && px > 8.0) continue;
      // BỎ CỘT TRỰC DIỆN PHÍA TÂY (px < -8.0, pz = 0) để mở toang tầm nhìn vào Cổng phòng Lịch Sử Giáo Dục!
      if (Math.abs(pz) < 2.5 && px < -8.0) continue;
      this.createMuseumPillar(archGroup, px, pz, 7.8);
    }
    // Bố trí cặp cột cổng vòm trang trọng ở lối vào phía Nam (x = -4.5 và x = +4.5 tại z = 12.5)
    // Cổng Bắc (z = -12.5) dẫn vào Gian Nhà Giáo được mở toang thông thoáng, XÓA BỎ HOÀN TOÀN CỘT GỖ CHẮN LỐI ĐI
    [-4.5, 4.5].forEach((gx) => {
      this.createMuseumPillar(archGroup, gx, 12.5, 7.8);
    });

    // 4. Trần Nhà Giếng Trời Bát Giác & Lam Gỗ Đón Ánh Sáng Tự Nhiên
    const ceilingHeight = 7.8;
    const ceiling = new THREE.Mesh(
      new THREE.PlaneGeometry(72, 72),
      this.materials.ceilingMat
    );
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.y = ceilingHeight;
    archGroup.add(ceiling);

    const skylightRing = new THREE.Mesh(
      new THREE.RingGeometry(0, 5.8, 32),
      this.materials.bronzeGold
    );
    skylightRing.rotation.x = Math.PI / 2;
    skylightRing.position.y = ceilingHeight + 0.05;
    archGroup.add(skylightRing);

    const skylightGlass = new THREE.Mesh(
      new THREE.CircleGeometry(5.6, 32),
      new THREE.MeshBasicMaterial({ color: 0xfff5df })
    );
    skylightGlass.rotation.x = Math.PI / 2;
    skylightGlass.position.y = ceilingHeight + 1.25;
    archGroup.add(skylightGlass);

    for (let i = 0; i < 24; i++) {
      const angle = (i * Math.PI * 2) / 24;
      const louver = new THREE.Mesh(
        new THREE.BoxGeometry(0.14, 0.32, 18),
        this.materials.naturalWood
      );
      louver.position.set(Math.cos(angle) * 14, ceilingHeight - 0.16, Math.sin(angle) * 14);
      louver.rotation.y = -angle + Math.PI / 2;
      archGroup.add(louver);
    }

    [5.8, 10.2, 18.5].forEach((r) => {
      const torus = new THREE.Mesh(
        new THREE.TorusGeometry(r, 0.09, 12, 64),
        this.materials.bronzeGold
      );
      torus.rotation.x = Math.PI / 2;
      torus.position.y = ceilingHeight - 0.18;
      archGroup.add(torus);
    });

    // 5. Xây dựng 4 Gian Phòng Lớn Trung Tâm (Lịch Sử, 15 Nhà Giáo, 15 Bộ Trưởng, Đồ Dùng Dạy Học)
    const wallH = 7.8;

    // --- PHÒNG 1 (Phía Tây: Lịch sử Giáo dục Việt Nam các giai đoạn, X = -28, Z từ -11 đến +11) ---
    this.createWall(archGroup, -28, wallH / 2, 0, 0.5, wallH, 22.5, this.materials.ivoryWall);
    this.createFeatureWallPanel(archGroup, -27.65, 3.9, 0, 0.12, 5.8, 18.5);
    this.createWall(archGroup, -19.1, wallH / 2, -11, 18.2, wallH, 0.5, this.materials.ivoryWall);
    this.createWall(archGroup, -19.1, wallH / 2, 11, 18.2, wallH, 0.5, this.materials.ivoryWall);

    // --- GIAN PHÒNG MỞ VÁCH CONG UỐN LƯỢN: NHÀ GIÁO VIỆT NAM QUA CÁC THỜI KỲ (Z từ -11.0 đến -38.0) ---
    this.buildTeachersGalleryArchitecture(archGroup, wallH);

    // --- GIAN PHÒNG TRIỂN LÃM CHUYÊN ĐỀ ĐỘC LẬP: 15 BỘ TRƯỞNG BỘ GIÁO DỤC (X từ 11.2 đến 34.0) ---
    this.buildMinisterExhibitionArchitecture(archGroup, wallH);

    // --- BỨC TƯỜNG KÝ ỨC SỐ: SÁNG MÃI ƠN THẦY (Tại Sảnh Chính) ---
    this.buildDigitalMemoryWall(archGroup);

    // --- PHÒNG 4: HÀNH LANG LỜI BÁC DẠY & BỘ ĐỒ DÙNG DẠY HỌC (Nam: X từ -11.5 đến +11.5, Z từ 10 đến 39.5) ---
    // Sàn đá mở rộng cho hành lang dài trang trọng
    const corridorFloor = new THREE.Mesh(new THREE.PlaneGeometry(23.0, 16.0), this.materials.floorStone);
    corridorFloor.rotation.x = -Math.PI / 2;
    corridorFloor.position.set(0, 0.002, 32.0);
    corridorFloor.receiveShadow = true;
    corridorFloor.name = 'museum-floor';
    archGroup.add(corridorFloor);

    // Trần mở rộng hành lang
    const corridorCeiling = new THREE.Mesh(new THREE.PlaneGeometry(23.0, 16.0), this.materials.ceilingMat);
    corridorCeiling.rotation.x = Math.PI / 2;
    corridorCeiling.position.set(0, wallH, 32.0);
    archGroup.add(corridorCeiling);

    // Vách TÂY kéo dài suốt hành lang (X = -11.5, Z từ 10.0 đến 39.5, dài 29.5m)
    this.createWall(archGroup, -11.5, wallH / 2, 24.75, 0.5, wallH, 29.5, this.materials.ivoryWall);
    this.createFeatureWallPanel(archGroup, -11.15, 3.9, 24.75, 0.12, 5.8, 28.5);

    // Vách ĐÔNG kéo dài suốt hành lang (X = 11.5, Z từ 10.0 đến 39.5, dài 29.5m)
    this.createWall(archGroup, 11.5, wallH / 2, 24.75, 0.5, wallH, 29.5, this.materials.ivoryWall);
    this.createFeatureWallPanel(archGroup, 11.15, 3.9, 24.75, 0.12, 5.8, 28.5);

    // Tường Nam cuối hành lang (Z = 39.5, có cổng kính nhìn ra ngoài tạo cảm giác sâu rộng, thoáng đãng)
    this.createWall(archGroup, -8.0, wallH / 2, 39.5, 7.0, wallH, 0.5, this.materials.ivoryWall);
    this.createWall(archGroup, 8.0, wallH / 2, 39.5, 7.0, wallH, 0.5, this.materials.ivoryWall);
    this.createWall(archGroup, 0, 6.4, 39.5, 9.0, 2.8, 0.5, this.materials.ivoryWall);
    this.createMuseumPillar(archGroup, -4.5, 39.5, 7.8);
    this.createMuseumPillar(archGroup, 4.5, 39.5, 7.8);

    // Cửa chính mở toang đón ánh sáng rực rỡ và khách tham quan (được dựng chi tiết trong buildGrandExteriorFacade)

    // Vách lam gỗ truyền thống kết nối Đại Sảnh (Đã dỡ bỏ toàn bộ vách lam gỗ chắn lối vào phòng Lịch Sử)
    this.createWoodenScreen(archGroup, 8.2, 10.2, 4.2, 0);
    this.createWoodenScreen(archGroup, 10.2, 8.2, 4.2, Math.PI / 2);

    // Ghế gỗ nghỉ chân tại Đại Sảnh (Bố cục lại nép gọn bên cột song song mép thảm, giải phóng hoàn toàn lối đi thảm xanh)
    this.createMuseumBench(archGroup, -4.6, 7.2, 0);
    this.createMuseumBench(archGroup, 8.2, -2.6, Math.PI / 2);
    this.createMuseumBench(archGroup, -6.2, -6.2, Math.PI / 4);
    this.createMuseumBench(archGroup, 6.2, 6.2, Math.PI / 4);

    this.scene.add(archGroup);
  }

  createMuseumPillar(parent, x, z, height) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);

    const baseStone = new THREE.Mesh(new THREE.BoxGeometry(0.92, 0.45, 0.92), this.materials.plinthStone);
    baseStone.position.y = 0.225;
    g.add(baseStone);

    const baseBronze = new THREE.Mesh(new THREE.BoxGeometry(0.84, 0.08, 0.84), this.materials.bronzeGold);
    baseBronze.position.y = 0.48;
    g.add(baseBronze);

    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.35, height - 0.9, 16), this.materials.naturalWood);
    shaft.position.y = height / 2;
    shaft.castShadow = true;
    g.add(shaft);

    const topRing = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.34, 0.35, 16), this.materials.bronzeGold);
    topRing.position.y = height - 0.35;
    g.add(topRing);

    parent.add(g);
  }

  createWall(parent, x, y, z, w, h, d, mat) {
    const wall = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    wall.position.set(x, y, z);
    wall.receiveShadow = true;
    parent.add(wall);

    const baseboard = new THREE.Mesh(new THREE.BoxGeometry(w + 0.04, 0.28, d + 0.04), this.materials.naturalWood);
    baseboard.position.set(x, 0.14, z);
    parent.add(baseboard);
  }

  createFeatureWallPanel(parent, x, y, z, w, h, d) {
    const panel = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), this.materials.navyPanel);
    panel.position.set(x, y, z);
    parent.add(panel);

    const trim = new THREE.Mesh(new THREE.BoxGeometry(w + 0.1, h + 0.1, d - 0.02), this.materials.bronzeGold);
    trim.position.set(x, y, z);
    parent.add(trim);
  }

  createWoodenScreen(parent, x, z, width, rotY) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    group.rotation.y = rotY;

    const topBar = new THREE.Mesh(new THREE.BoxGeometry(width, 0.25, 0.22), this.materials.naturalWood);
    topBar.position.y = 6.2;
    group.add(topBar);

    const bottomWall = new THREE.Mesh(new THREE.BoxGeometry(width, 1.1, 0.28), this.materials.ivoryWall);
    bottomWall.position.y = 0.55;
    group.add(bottomWall);

    const midTrim = new THREE.Mesh(new THREE.BoxGeometry(width + 0.05, 0.08, 0.32), this.materials.bronzeGold);
    midTrim.position.y = 1.12;
    group.add(midTrim);

    const count = 9;
    for (let i = 0; i < count; i++) {
      const lx = -width / 2 + (i / (count - 1)) * width;
      const slat = new THREE.Mesh(new THREE.BoxGeometry(0.08, 5.0, 0.16), this.materials.naturalWood);
      slat.position.set(lx, 3.6, 0);
      group.add(slat);
    }

    parent.add(group);
  }

  createMuseumBench(parent, x, z, rotY) {
    const g = new THREE.Group();
    g.position.set(x, 0, z);
    g.rotation.y = rotY;

    const seat = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.12, 0.72), this.materials.naturalWood);
    seat.position.y = 0.52;
    g.add(seat);

    const trim = new THREE.Mesh(new THREE.BoxGeometry(2.44, 0.04, 0.76), this.materials.bronzeGold);
    trim.position.y = 0.45;
    g.add(trim);

    [-0.9, 0.9].forEach((lx) => {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.45, 0.62), this.materials.plinthStone);
      leg.position.set(lx, 0.225, 0);
      g.add(leg);
    });

    parent.add(g);
  }

  buildLighting() {
    const hemiLight = new THREE.HemisphereLight(0xfff4e0, 0x2c2219, 0.9);
    hemiLight.position.set(0, 16, 0);
    this.scene.add(hemiLight);

    const centerSpot = new THREE.SpotLight(0xffe4b5, 3.2, 28, Math.PI / 4, 0.55, 1.2);
    centerSpot.position.set(0, 12.0, 0);
    centerSpot.target.position.set(0, 0, 0);
    centerSpot.castShadow = true;
    this.scene.add(centerSpot);
    this.scene.add(centerSpot.target);

    const treeSpot = new THREE.SpotLight(0xffe8b8, 2.9, 26, Math.PI / 3.5, 0.52, 1.15);
    treeSpot.position.set(21.5, 11.2, -21.5);
    treeSpot.target.position.set(21.5, 1.6, -21.5);
    this.scene.add(treeSpot);
    this.scene.add(treeSpot.target);

    // Ánh sáng ấm áp tại 5 Gian phòng
    [
      { x: -20, z: 0, color: 0xffe2b0 },
      { x: 0, z: -20, color: 0xffdfb0 },
      { x: 20, z: 0, color: 0xffe6ba },
      { x: 0, z: 20, color: 0xffe8c2 },
      { x: 21.5, z: -21.5, color: 0xffdf9e }
    ].forEach((zl) => {
      const pl = new THREE.PointLight(zl.color, 1.55, 24, 1.3);
      pl.position.set(zl.x, 6.5, zl.z);
      this.scene.add(pl);
    });
  }

  buildWallMuralsAndSignage() {
    // Biển đại tự trên cao của các Không gian trưng bày
    const wallSigns = [
      {
        x: -27.5, z: 0, rotY: Math.PI / 2, w: 10.8, h: 2.05,
        title: 'LỊCH SỬ PHÁT TRIỂN GIÁO DỤC VIỆT NAM',
        subtitle: 'Từ Quốc Tử Giám (1076), Đông Kinh Nghĩa Thục, Bình Dân Học Vụ đến Kỷ nguyên Đổi mới'
      },
      // (Đã dỡ bỏ hoàn toàn biển cũ "15 Nhà giáo..." theo quy hoạch mới)
      // (Đã thay thế bằng Bảng vàng di huấn Bác Hồ tường Đông và Cổng vòm thông phòng mới)
      {
        x: 0, z: 27.5, rotY: Math.PI, w: 10.8, h: 2.05,
        title: 'KHÔNG GIAN BỘ ĐỒ DÙNG & HIỆN VẬT DẠY HỌC',
        subtitle: 'Từ Nghiên mực Mộc bản, Đèn dầu Bình Dân Học Vụ đến Phấn trắng Bảng đen'
      }
    ];

    wallSigns.forEach((ws) => {
      const tex = this.createTextPlaqueTexture({
        title: ws.title,
        subtitle: ws.subtitle,
        quote: '',
        width: 2048,
        height: 512
      });
      const sign = new THREE.Mesh(
        new THREE.PlaneGeometry(ws.w || 10.8, ws.h || 2.05),
        new THREE.MeshBasicMaterial({ map: tex })
      );
      sign.position.set(ws.x, 5.7, ws.z);
      sign.rotation.y = ws.rotY;
      this.scene.add(sign);
    });

    // Biển cổng vòm tại Đại Sảnh dẫn vào 4 phòng
    // Biển cổng vòm tại Đại Sảnh dẫn vào các phòng & Cổng sảnh đón khách
    const portals = [
      { x: -10.2, z: 0, rotY: Math.PI / 2, label: 'LỊCH SỬ PHÁT TRIỂN GIÁO DỤC VIỆT NAM' },
      { x: 0, z: -10.2, rotY: 0, label: 'NHỮNG NGƯỜI THẦY TRONG SỬ VIỆT' },
      // Biển cổng vòm chính đón khách từ đại sảnh (z = 10.2): mang tên BẢO TÀNG NHÀ GIÁO VIỆT NAM cả 2 mặt
      { x: 0, z: 10.2, rotY: Math.PI, label: 'BẢO TÀNG NHÀ GIÁO VIỆT NAM', isGrandWelcome: true }
    ];
    portals.forEach((p) => {
      let frontTex = null;
      let backTex = null;

      if (p.isGrandWelcome || p.z === 10.2) {
        // Biển đón khách cổng sảnh: mang tên BẢO TÀNG NHÀ GIÁO VIỆT NAM rực rỡ cả 2 mặt
        frontTex = this.createGrandWelcomeSignTexture();
        backTex = this.createGrandWelcomeSignTexture();
      } else {
        frontTex = this.createTextPlaqueTexture({
          title: p.label,
          subtitle: 'BẢO TÀNG NHÀ GIÁO VIỆT NAM',
          quote: '',
          width: 1536,
          height: 384
        });
        backTex = this.createTextPlaqueTexture({
          title: p.label,
          subtitle: 'BẢO TÀNG NHÀ GIÁO VIỆT NAM',
          quote: '',
          width: 1536,
          height: 384
        });
      }

      const board = new THREE.Mesh(new THREE.BoxGeometry(6.4, 1.15, 0.24), this.materials.navyPanel);
      board.position.set(p.x, 6.4, p.z);
      board.rotation.y = p.rotY;
      this.scene.add(board);

      // Viền kim loại đồng mạ vàng bọc quanh mép biển
      const boardFrame = new THREE.Mesh(
        new THREE.BoxGeometry(6.46, 1.21, 0.25),
        this.materials.bronzeGold
      );
      board.add(boardFrame);

      // Mặt trước (Facing local +Z)
      const faceFront = new THREE.Mesh(new THREE.PlaneGeometry(6.2, 1.02), new THREE.MeshBasicMaterial({ map: frontTex }));
      faceFront.position.set(0, 0, 0.132);
      board.add(faceFront);

      // Mặt sau (Facing local -Z) - Giúp bất kỳ ai nhìn từ hướng nào cũng thấy tên bảo tàng rực rỡ, không bao giờ bị trống
      const faceBack = new THREE.Mesh(new THREE.PlaneGeometry(6.2, 1.02), new THREE.MeshBasicMaterial({ map: backTex }));
      faceBack.position.set(0, 0, -0.132);
      faceBack.rotation.y = Math.PI;
      board.add(faceBack);
    });
  }

  // ==================== GIAN PHÒNG MỞ VÁCH CONG: NHÀ GIÁO VIỆT NAM QUA CÁC THỜI KỲ ====================
  // Kiến trúc vách cong uốn lượn (Curved Promenade) theo phong cách Cục Văn thư và Lưu trữ Quốc gia
  // Tôn vinh 46 bậc danh sư và nhà giáo tiêu biểu qua 5 thời kỳ lịch sử dân tộc

  buildTeachersGalleryArchitecture(parent, wallH) {
    const galleryArch = new THREE.Group();
    galleryArch.name = 'teachers-gallery-architecture';

    // ĐỘ CAO VÁCH TƯỜNG BAO CHU VI: Y = 5.2m (Đỉnh vòm cao tới 7.8m)
    const baseWallH = 5.2;
    const roomW = 33.0; // X từ -16.5 đến +16.5
    const roomD = 27.0; // Z từ -10.8 đến -37.8
    const centerZ = -24.3;

    // 1. CỔNG VÒM THÔNG PHÒNG SANG TRỌNG NỐI TỪ ĐẠI SẢNH (Z = -10.8, X = 0)
    const portalW = 6.2;
    const portalH = 3.8;

    // Vách ngăn hai bên cổng vòm nối từ sảnh chính
    this.createWall(galleryArch, -5.85, baseWallH / 2, -10.8, 5.5, baseWallH, 0.5, this.materials.ivoryWall);
    this.createWall(galleryArch, 5.85, baseWallH / 2, -10.8, 5.5, baseWallH, 0.5, this.materials.ivoryWall);
    // Vách trên đầu cổng vòm (kín khít lên vách bao)
    this.createWall(galleryArch, 0, portalH + (baseWallH - portalH) / 2, -10.8, portalW, baseWallH - portalH, 0.5, this.materials.ivoryWall);

    // Hệ 2 cột trụ gỗ Lim tròn ốp đầu đồng hai bên cổng vòm
    [-3.15, 3.15].forEach((px) => {
      const pBase = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.35, 0.85), this.materials.plinthStone);
      pBase.position.set(px, 0.175, -10.6);
      galleryArch.add(pBase);

      const pBronzeBase = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.08, 0.78), this.materials.bronzeGold);
      pBronzeBase.position.set(px, 0.39, -10.6);
      galleryArch.add(pBronzeBase);

      const pCol = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.34, portalH - 0.7, 16), this.materials.naturalWood);
      pCol.position.set(px, portalH / 2 + 0.1, -10.6);
      pCol.castShadow = true;
      galleryArch.add(pCol);

      const pCap = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.28, 0.8), this.materials.bronzeGold);
      pCap.position.set(px, portalH - 0.14, -10.6);
      galleryArch.add(pCap);
    });

    // Dầm vòm gỗ nối 2 trụ cột cổng
    const archLintel = new THREE.Mesh(
      new THREE.BoxGeometry(portalW + 0.8, 0.45, 0.65),
      this.materials.naturalWood
    );
    archLintel.position.set(0, portalH + 0.2, -10.6);
    galleryArch.add(archLintel);

    const archGoldTrim = new THREE.Mesh(
      new THREE.BoxGeometry(portalW + 0.84, 0.06, 0.68),
      this.materials.bronzeGold
    );
    archGoldTrim.position.set(0, portalH + 0.45, -10.6);
    galleryArch.add(archGoldTrim);

    // BIỂN CỔNG VÒM: Đã bỏ biển hiệu thấp gắn xà cửa gỗ để lối vào cao ráo, thông thoáng, chỉ giữ 1 biển treo phía trên cao
    // (Biển treo cao 6.4m: "GIAN TRƯNG BÀY: NHÀ GIÁO VIỆT NAM QUA CÁC THỜI KỲ" đồng bộ toàn sảnh)

    // 2. MẶT SÀN ĐÁ GRANITE CẨM THẠCH XÁM ĐẬM VỚI ĐỘ BÓNG MỜ MỀM MẠI (SOFT REFLECTION)
    const darkGraniteMat = this.createDarkGraniteFloorMaterial();
    const galleryFloor = new THREE.Mesh(
      new THREE.PlaneGeometry(roomW, roomD),
      darkGraniteMat
    );
    galleryFloor.rotation.x = -Math.PI / 2;
    galleryFloor.position.set(0, 0.002, centerZ);
    galleryFloor.receiveShadow = true;
    galleryFloor.name = 'museum-floor';
    galleryArch.add(galleryFloor);

    // 3. TƯỜNG BAO KÍN KHÍT CHU VI PHÒNG CAO 5.2m
    // Tường Tây (X = -16.5, Z từ -10.8 đến -37.8, dài 27.0m)
    this.createWall(galleryArch, -16.5, baseWallH / 2, centerZ, 0.5, baseWallH, roomD, this.materials.ivoryWall);
    // Tường Đông (X = +16.5, Z từ -10.8 đến -37.8, dài 27.0m)
    this.createWall(galleryArch, 16.5, baseWallH / 2, centerZ, 0.5, baseWallH, roomD, this.materials.ivoryWall);
    // Tường Bắc tận cùng (Z = -37.8, X từ -16.5 đến +16.5, rộng 33m)
    this.createWall(galleryArch, 0, baseWallH / 2, -37.8, roomW, baseWallH, 0.5, this.materials.ivoryWall);

    // 4. HỆ TRẦN MÁI VÒM CAO BỀ THẾ (GRAND VAULTED DOME CEILING) - ĐỈNH VÒM CAO 7.8m
    const vaultSegmentsX = 64;
    const vaultSegmentsZ = 48;
    const vaultGeo = new THREE.PlaneGeometry(roomW, roomD, vaultSegmentsX, vaultSegmentsZ);
    vaultGeo.rotateX(-Math.PI / 2); // Xoay phẳng sang mặt phẳng nằm ngang (X, Z) với normal hướng lên
    
    // Uốn cong hình học thành mái vòm Parabol thanh thoát: Y(x) = 7.8 - (x / 16.5)^2 * 2.6
    const vPos = vaultGeo.attributes.position;
    for (let i = 0; i < vPos.count; i++) {
      const vx = vPos.getX(i);
      const vy = 7.8 - Math.pow(vx / 16.5, 2) * 2.6;
      vPos.setY(i, vy);
    }
    vaultGeo.computeVertexNormals();

    const vaultMat = new THREE.MeshStandardMaterial({
      color: 0xf5efe6, // Màu thạch cao hoàng gia trắng kem sáng thanh thoát
      roughness: 0.65,
      metalness: 0.05,
      side: THREE.DoubleSide
    });
    const vaultMesh = new THREE.Mesh(vaultGeo, vaultMat);
    vaultMesh.position.set(0, 0, centerZ);
    vaultMesh.receiveShadow = true;
    galleryArch.add(vaultMesh);

    // 6 SƯỜN VÒM CONG KIẾN TRÚC (ARCHITECTURAL VAULT RIBS) BẰNG GỖ TẾCH NẸP CHỈ VÀNG KIM
    const ribZPositions = [-12.0, -17.0, -22.0, -27.0, -32.0, -37.0];
    const ribMat = new THREE.MeshStandardMaterial({
      color: 0xc5a059, // Chỉ vàng kim mờ hoàng cung
      roughness: 0.35,
      metalness: 0.85
    });

    ribZPositions.forEach((rz) => {
      const curvePoints = [];
      for (let s = -16.5; s <= 16.5; s += 0.5) {
        const sy = 7.78 - Math.pow(s / 16.5, 2) * 2.6;
        curvePoints.push(new THREE.Vector3(s, sy, rz));
      }
      const ribCurve = new THREE.CatmullRomCurve3(curvePoints);
      const ribGeo = new THREE.TubeGeometry(ribCurve, 64, 0.08, 8, false);
      const ribMesh = new THREE.Mesh(ribGeo, ribMat);
      galleryArch.add(ribMesh);
    });

    // CÁC ĐÈN DOWNLIGHT ÂM TRẦN VÒM DẠNG ĐĨA VÀNG ẤM PHÁT SÁNG TỎA ĐỀU
    const downlightMat = new THREE.MeshBasicMaterial({ color: 0xfff0c4 });
    const lightCoords = [
      [-10, -16], [-10, -22], [-10, -28], [-10, -34],
      [-5, -16], [-5, -22], [-5, -28], [-5, -34],
      [0, -14], [0, -19], [0, -24], [0, -29], [0, -34],
      [5, -16], [5, -22], [5, -28], [5, -34],
      [10, -16], [10, -22], [10, -28], [10, -34]
    ];
    lightCoords.forEach(([lx, lz]) => {
      const ly = 7.72 - Math.pow(lx / 16.5, 2) * 2.6;
      const lamp = new THREE.Mesh(new THREE.CircleGeometry(0.25, 16), downlightMat);
      lamp.rotation.x = Math.PI / 2;
      lamp.position.set(lx, ly - 0.02, lz);
      galleryArch.add(lamp);
    });

    // Ánh sáng tổng thể gian phòng Nhà giáo (ấm áp, trang nghiêm, tôn vinh mái vòm)
    const galleryAmbient = new THREE.AmbientLight(0xfff8ee, 0.75);
    galleryArch.add(galleryAmbient);

    // 5 Đèn PointLight tỏa đều khắp không gian
    [[-8, -18], [-8, -30], [8, -18], [8, -30], [0, -24]].forEach(([px, pz]) => {
      const pLight = new THREE.PointLight(0xffecd1, 0.75, 22, 1.4);
      pLight.position.set(px, 5.2, pz);
      galleryArch.add(pLight);
    });

    parent.add(galleryArch);
  }

  // ==================== TẠO VẬT LIỆU SÀN ĐÁ GRANITE ĐEN & TRẦN VÒM ẤM ÁP ====================
  createDarkGraniteFloorMaterial() {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // Nền đá granite xám đậm / đen (#1c1c1c)
    ctx.fillStyle = '#1c1c1c';
    ctx.fillRect(0, 0, 1024, 1024);

    // Hạt vân đá granite mịn
    for (let i = 0; i < 4000; i++) {
      const rx = Math.random() * 1024;
      const ry = Math.random() * 1024;
      ctx.fillStyle = Math.random() > 0.5 ? 'rgba(55, 55, 55, 0.45)' : 'rgba(35, 35, 35, 0.65)';
      ctx.fillRect(rx, ry, Math.random() * 3 + 1, Math.random() * 3 + 1);
    }

    // Lưới ron gạch cẩm thạch phân chia rõ ràng viền đồng
    ctx.strokeStyle = 'rgba(180, 140, 60, 0.35)';
    ctx.lineWidth = 3;
    const step = 256;
    for (let x = 0; x <= 1024; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 1024);
      ctx.stroke();
    }
    for (let y = 0; y <= 1024; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(1024, y);
      ctx.stroke();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(6, 5);

    // Độ bóng mờ mềm mại (Soft Satin Reflection) loại bỏ bóng chói gắt nhân tạo
    return new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.42,
      metalness: 0.08
    });
  }

  createCeilingWoodMaterial() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Tông gỗ trầm ấm áp (#251a13)
    ctx.fillStyle = '#251a13';
    ctx.fillRect(0, 0, 512, 512);

    ctx.strokeStyle = '#1b120c';
    ctx.lineWidth = 2;
    for (let y = 0; y <= 512; y += 32) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(512, y);
      ctx.stroke();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(8, 7);

    return new THREE.MeshStandardMaterial({
      map: tex,
      roughness: 0.55,
      metalness: 0.08
    });
  }

  createArchwaySignTextureTeachers() {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 2048, 512);
    grad.addColorStop(0, '#0a1626');
    grad.addColorStop(0.5, '#182f4e');
    grad.addColorStop(1, '#081220');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 2048, 512);

    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 10;
    ctx.strokeRect(18, 18, 2012, 476);
    ctx.strokeStyle = 'rgba(255, 235, 160, 0.5)';
    ctx.lineWidth = 3;
    ctx.strokeRect(32, 32, 1984, 448);

    ctx.fillStyle = '#e8c478';
    ctx.font = 'bold 30px "Be Vietnam Pro", sans-serif';
    ctx.textAlign = 'center';
    ctx.letterSpacing = '4px';
    ctx.fillText('✦  KHÔNG GIAN TRƯNG BÀY DI SẢN GIÁO DỤC DÂN TỘC  ✦', 1024, 95);

    ctx.shadowColor = 'rgba(255, 215, 0, 0.75)';
    ctx.shadowBlur = 20;
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 64px "Cinzel", "Cormorant Garamond", Georgia, serif';
    ctx.letterSpacing = '3px';
    ctx.fillText('NHỮNG NGƯỜI THẦY TRONG SỬ VIỆT', 1024, 230);
    ctx.shadowBlur = 0;

    ctx.fillStyle = '#f1f5f9';
    ctx.font = 'italic 34px "Be Vietnam Pro", serif';
    ctx.fillText('Hành trình tôn vinh 40 bậc danh sư và nhà giáo tiêu biểu trong lịch sử dân tộc', 1024, 345);

    ctx.fillStyle = '#cbd5e1';
    ctx.font = '24px "Be Vietnam Pro", sans-serif';
    ctx.fillText('Khơi nguồn đạo học  •  Phong kiến  •  Đầu TK XX – 1945  •  1945–1975  •  Sau 1975 đến nay', 1024, 435);

    return new THREE.CanvasTexture(canvas);
  }

  // ==================== GIAN TRƯNG BÀY 26 BẬC DANH SƯ & NHÀ GIÁO VIỆT NAM QUA CÁC THỜI KỲ ====================
  // DẢI TƯỜNG UỐN LƯỢN LIÊN TỤC DUY NHẤT (SINGLE CONTINUOUS S-CURVE WALL):
  // Nối liền mạch, uốn lượn hình chữ S tạo thành dòng chảy lịch sử liên tục từ đầu phòng đến cuối phòng.
  // Cao 3.8m, phào chỉ vàng kim mờ (#c5a059), chuyển màu qua 3 giai đoạn chuẩn mực:
  // Giai đoạn 1: Nâu Đất Phong Kiến (#2c180e) | Giai đoạn 2: Xanh Rêu Kháng Chiến (#18281b) | Giai đoạn 3: Đỏ Mận Hội Nhập (#32070c)
  buildTeachersGallery() {
    const themes = window.themesData || {};
    const rawTeachers = window.teachersData || [];

    const galleryGroup = new THREE.Group();
    galleryGroup.name = 'continuous-scurve-teachers-gallery';

    // 1. HỆ 23 ĐIỂM ĐIỀU KHIỂN ĐỊNH HÌNH DẢI TƯỜNG UỐN LƯỢN CHỮ S LIÊN TỤC (TÂY SANG ĐÔNG)
    const controlPoints = [
      // Đoạn 1: Bắt đầu từ mép Tây cổng vòm sảnh chính (-3.8, -11.8)
      { x: -3.8, z: -11.8 },
      { x: -6.5, z: -12.6 },
      { x: -9.8, z: -14.5 },
      { x: -12.6, z: -17.5 },
      { x: -14.2, z: -21.2 },
      // Đoạn 2: Uốn lượn dọc vách Tây và bo tròn góc Tây Bắc
      { x: -14.8, z: -25.5 },
      { x: -14.6, z: -29.8 },
      { x: -13.5, z: -33.6 },
      { x: -11.2, z: -36.2 },
      { x: -7.5, z: -37.0 },
      // Đoạn 2 tiếp tục: Uốn lượn chữ S mềm mại qua vách Bắc
      { x: -3.5, z: -35.8 },
      { x: 0.0, z: -34.2 },
      { x: 3.5, z: -35.8 },
      // Đoạn 3: Uốn lượn qua góc Đông Bắc và vách Đông
      { x: 7.5, z: -37.0 },
      { x: 11.2, z: -36.2 },
      { x: 13.5, z: -33.6 },
      { x: 14.6, z: -29.8 },
      // Đoạn 4: Uốn lượn dọc vách Đông chạy về phía Nam
      { x: 14.8, z: -25.5 },
      { x: 14.2, z: -21.2 },
      { x: 12.6, z: -17.5 },
      // Đoạn 5: Uốn lượn góc Đông Nam về lại mép Đông cổng vòm sảnh (3.8, -11.8)
      { x: 9.8, z: -14.5 },
      { x: 6.5, z: -12.6 },
      { x: 3.8, z: -11.8 }
    ];

    // Lấy mẫu spline Catmull-Rom mượt mà thành 300 điểm liên tục
    const densePoints = [];
    const numSamples = 300;
    for (let i = 0; i < numSamples; i++) {
      const progress = i / (numSamples - 1);
      const totalSegs = controlPoints.length - 1;
      const segIdx = Math.min(Math.floor(progress * totalSegs), totalSegs - 1);
      const t = (progress * totalSegs) - segIdx;
      
      const p0 = controlPoints[Math.max(0, segIdx - 1)];
      const p1 = controlPoints[segIdx];
      const p2 = controlPoints[Math.min(controlPoints.length - 1, segIdx + 1)];
      const p3 = controlPoints[Math.min(controlPoints.length - 1, segIdx + 2)];

      const t2 = t * t;
      const t3 = t2 * t;
      densePoints.push({
        x: 0.5 * ((2 * p1.x) + (-p0.x + p2.x) * t + (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 + (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3),
        z: 0.5 * ((2 * p1.z) + (-p0.z + p2.z) * t + (2 * p0.z - 5 * p1.z + 4 * p2.z - p3.z) * t2 + (-p0.z + 3 * p1.z - 3 * p2.z + p3.z) * t3)
      });
    }

    // Tính lũy kế độ dài cung của dải tường
    const arcLengths = [0];
    for (let i = 1; i < densePoints.length; i++) {
      const d = Math.hypot(densePoints[i].x - densePoints[i - 1].x, densePoints[i].z - densePoints[i - 1].z);
      arcLengths.push(arcLengths[i - 1] + d);
    }
    const totalCurveLength = arcLengths[arcLengths.length - 1];

    // ĐỒNG BỘ TOÀN BỘ DẢI TƯỜNG SANG TONE MÀU BE SÁNG / KEM ẤM TRANG NHÃ (GALLERY WARM OFF-WHITE)
    const galleryWallColor = '#f5f0e6';
    const sectionColors = [
      { maxDist: 999.0, color: galleryWallColor, name: 'Gallery Warm Off-White' }
    ];

    // DỰNG MỘT DẢI TƯỜNG DUY NHẤT CAO 3.8m LIÊN TỤC KHÔNG ĐỨT ĐOẠN
    this.createContinuousSCurveWall(galleryGroup, densePoints, arcLengths, sectionColors, 3.8, 0.32);

    // Hàm nội suy tọa độ, vector pháp tuyến và góc xoay tại khoảng cách d
    const getPointAtDist = (dist) => {
      const clamped = Math.max(0, Math.min(totalCurveLength, dist));
      let idx = 0;
      while (idx < arcLengths.length - 1 && arcLengths[idx + 1] < clamped) idx++;
      const l0 = arcLengths[idx];
      const l1 = arcLengths[idx + 1] || l0;
      const ratio = (l1 - l0) > 0 ? (clamped - l0) / (l1 - l0) : 0;
      const p0 = densePoints[idx];
      const p1 = densePoints[Math.min(densePoints.length - 1, idx + 1)];
      const x = p0.x + ratio * (p1.x - p0.x);
      const z = p0.z + ratio * (p1.z - p0.z);

      const nextIdx = Math.min(densePoints.length - 1, idx + 3);
      const prevIdx = Math.max(0, idx - 2);
      const dx = densePoints[nextIdx].x - densePoints[prevIdx].x;
      const dz = densePoints[nextIdx].z - densePoints[prevIdx].z;
      const len = Math.hypot(dx, dz) || 1;
      const tx = dx / len;
      const tz = dz / len;

      const n1x = -tz, n1z = tx;
      const vx = 0 - x;
      const vz = -24.3 - z;
      const dot = n1x * vx + n1z * vz;
      const nx = dot >= 0 ? n1x : -n1x;
      const nz = dot >= 0 ? n1z : -n1z;
      const rotY = Math.atan2(nx, nz);

      // Tọa độ áp sát mặt tường (Flush Mount)
      const surfX = x + nx * (0.32 / 2 + 0.035);
      const surfZ = z + nz * (0.32 / 2 + 0.035);

      return { x: surfX, z: surfZ, rotY, wallX: x, wallZ: z, nx, nz };
    };

    // Lưu thông tin hình học dải tường để hỗ trợ cập nhật linh hoạt từ Google Sheet
    this.teachersGetPointAtDist = getPointAtDist;
    this.teachersTotalCurveLength = totalCurveLength;
    this.teachersWallColor = galleryWallColor;
    this.teachersDynamicGroup = new THREE.Group();
    this.teachersDynamicGroup.name = 'teachers-dynamic-frames-group';
    galleryGroup.add(this.teachersDynamicGroup);

    // 2 & 3. BỐ TRÍ ĐỘNG TOÀN BỘ TRANH CHÂN DUNG THEO ĐÚNG THỨ TỰ DANH SÁCH / GOOGLE SHEET
    this.rebuildTeachersGalleryFrames(rawTeachers);

    // 4. HỆ THỐNG MŨI TÊN CHỈ HƯỚNG PHÁT SÁNG TRÊN SÀN (GIỮ NGUYÊN SÀN ĐÁ CẨM THẠCH NGUYÊN BẢN)

    // 5 Mũi tên phát sáng vàng dẫn lối trải đều theo 3 giai đoạn
    const tourArrows = [
      {
        x: -5.0, z: -14.0, rotY: 2.10,
        label: 'GIAI ĐOẠN I • THỜI KỲ PHONG KIẾN',
        sub: '07 Bậc Danh sư & Khuôn vàng thước ngọc Đại Việt',
        targetCamera: { x: -6.5, y: 1.6, z: -17.0 },
        targetLookAt: { x: -11.0, y: 1.7, z: -18.5 }
      },
      {
        x: -11.5, z: -25.0, rotY: 1.57,
        label: 'GIAI ĐOẠN II • YÊU NƯỚC & KHÁNG CHIẾN',
        sub: '15 Người thầy tiên phong khai dân trí & phục vụ cứu quốc',
        targetCamera: { x: -10.5, y: 1.6, z: -28.0 },
        targetLookAt: { x: -14.5, y: 1.8, z: -30.5 }
      },
      {
        x: 0.0, z: -30.0, rotY: 0.0,
        label: 'TIẾP TỤC GIAI ĐOẠN II • DANH NHÂN KHÁNG CHIẾN',
        sub: 'Các nhà khoa học, nhà giáo dục đầu ngành Việt Nam',
        targetCamera: { x: 0.0, y: 1.6, z: -31.0 },
        targetLookAt: { x: 0.0, y: 1.8, z: -35.5 }
      },
      {
        x: 8.5, z: -17.5, rotY: -2.35,
        label: 'GIAI ĐOẠN III • ĐỔI MỚI & HỘI NHẬP',
        sub: 'Cố TT. Phạm Văn Đồng & Những người thầy đổi mới giáo dục',
        targetCamera: { x: 6.5, y: 1.6, z: -17.5 },
        targetLookAt: { x: 11.5, y: 1.7, z: -17.5 }
      },
      {
        x: 0.0, z: -14.0, rotY: 3.14,
        label: 'KẾT THÚC HÀNH TRÌNH • VỀ ĐẠI SẢNH',
        sub: 'Trở về Điện Tri Ân & Cội Cây Tri Thức trung tâm',
        targetCamera: { x: 0.0, y: 2.2, z: -7.5 },
        targetLookAt: { x: 0.0, y: 2.2, z: 0.0 }
      }
    ];

    tourArrows.forEach((arr) => {
      this.createTourDirectionArrow(galleryGroup, arr);
    });

    // 5. BỔ SUNG "CÂY ĐA TRI ÂN" & GHẾ TRÒN NGHỈ CHÂN TẠI TRUNG TÂM PHÒNG (0, 0, -24.3)
    this.buildTeachersBanyanTree(galleryGroup, 0, -24.3);

    this.scene.add(galleryGroup);
  }

  // ==================== THANH NẸP CHỈ KIM LOẠI / CHỈ ĐỒNG VÀNG MỜ (BRASS TRIM) ====================
  // Làm ranh giới phân định 3 giai đoạn lịch sử nhẹ nhàng, tinh tế và thanh lịch
  // ==================== DỰNG & CẬP NHẬT ĐỘNG KHUNG TRANH NHÀ GIÁO TỪ GOOGLE SHEET ====================
  // Nhà giáo nào có STT nhỏ hơn / nằm ở dòng trên trong Google Sheet sẽ hiển thị trước (từ trái sang phải dọc tường chữ S)
  rebuildTeachersGalleryFrames(teachersList) {
    if (!this.teachersDynamicGroup || !this.teachersGetPointAtDist) return;
    const list = Array.isArray(teachersList) && teachersList.length > 0
      ? teachersList
      : (window.teachersData || []);
    if (!list.length) return;

    // Xóa các khung tranh cũ khỏi nhóm động và danh sách tương tác
    while (this.teachersDynamicGroup.children.length > 0) {
      this.teachersDynamicGroup.remove(this.teachersDynamicGroup.children[0]);
    }
    this.interactables = this.interactables.filter(obj => !(obj.userData && obj.userData.isTeacherFrame));

    const totalLen = this.teachersTotalCurveLength || 78.5;
    const startMargin = 2.35;
    const endMargin = 2.35;
    const usableLen = Math.max(20, totalLen - startMargin - endMargin);

    // Xác định các vị trí chuyển tiếp giai đoạn (nếu có) để đặt trụ đồng ngăn cách
    const transitionAfterIndices = [];
    for (let i = 0; i < list.length - 1; i++) {
      const curStage = list[i].stageNum || 1;
      const nextStage = list[i + 1].stageNum || curStage;
      if (nextStage !== curStage && transitionAfterIndices.length < 4) {
        transitionAfterIndices.push({
          afterIdx: i,
          nextStage: nextStage,
          title: nextStage === 2
            ? 'GIAI ĐOẠN II: YÊU NƯỚC & KHÁNG CHIẾN'
            : (nextStage === 3 ? 'GIAI ĐOẠN III: ĐỔI MỚI & HỘI NHẬP' : 'GIAI ĐOẠN I: THỜI KỲ PHONG KIẾN')
        });
      }
    }

    const extraGapPerTransition = list.length > 30 ? 0.68 : 1.1;
    const totalTransitionGaps = transitionAfterIndices.length * extraGapPerTransition;
    const step = list.length > 1
      ? (usableLen - totalTransitionGaps) / (list.length - 1)
      : 0;

    let currentDist = startMargin;
    list.forEach((teacher, idx) => {
      const frameTf = this.teachersGetPointAtDist(currentDist);
      this.createTeacherFloatFrame(this.teachersDynamicGroup, teacher, frameTf, this.teachersWallColor || '#f5f0e6');

      // Mái ngói vảy cá cổ truyền thống trên đầu vị Danh sư đầu tiên (STT 1 / đầu danh sách)
      if (idx === 0) {
        this.createAncientTileRoofModule(this.teachersDynamicGroup, frameTf.wallX, frameTf.wallZ, frameTf.rotY);
      }

      const trans = transitionAfterIndices.find(t => t.afterIdx === idx);
      if (trans) {
        const pilasterDist = currentDist + (step + extraGapPerTransition) * 0.5;
        const pTf = this.teachersGetPointAtDist(pilasterDist);
        this.createWallPilaster(this.teachersDynamicGroup, pTf.wallX, pTf.wallZ, pTf.rotY, trans.title);
        currentDist += step + extraGapPerTransition;
      } else {
        currentDist += step;
      }
    });
  }

  createWallPilaster(parent, x, z, rotY, stageTitle) {
    const pilasterG = new THREE.Group();
    pilasterG.position.set(x, 1.9, z);
    pilasterG.rotation.y = rotY;

    // 1. Thanh nẹp chỉ đồng kim loại mờ thanh mảnh (Rộng 0.12m, nhô ra 0.04m, cao suốt vách 3.8m)
    const brassTrim = new THREE.Mesh(
      new THREE.BoxGeometry(0.12, 3.8, 0.04),
      this.materials.bronzeGold
    );
    brassTrim.position.z = 0.02;
    pilasterG.add(brassTrim);

    // Điểm nhấn viền vàng mờ ở chân và đỉnh
    [-1.85, 1.85].forEach((py) => {
      const knob = new THREE.Mesh(
        new THREE.BoxGeometry(0.16, 0.08, 0.05),
        this.materials.brightGold
      );
      knob.position.set(0, py, 0.025);
      pilasterG.add(knob);
    });

    // 2. Biển đồng đứng thanh nhã khắc tên giai đoạn
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 1600;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, 256, 1600);

    ctx.strokeStyle = '#c5a059';
    ctx.lineWidth = 6;
    ctx.strokeRect(8, 8, 240, 1584);

    ctx.strokeStyle = 'rgba(255, 215, 0, 0.4)';
    ctx.lineWidth = 2;
    ctx.strokeRect(16, 16, 224, 1568);

    ctx.fillStyle = '#fceabb';
    ctx.font = 'bold 36px "Be Vietnam Pro", sans-serif';
    ctx.textAlign = 'center';

    const chars = stageTitle.split('');
    let cy = 120;
    const stepY = Math.min(52, (1500 - 120) / chars.length);
    chars.forEach((c) => {
      ctx.fillText(c, 128, cy);
      cy += stepY;
    });

    const plateTex = new THREE.CanvasTexture(canvas);
    const plate = new THREE.Mesh(
      new THREE.PlaneGeometry(0.16, 2.4),
      new THREE.MeshBasicMaterial({ map: plateTex })
    );
    plate.position.set(0, 0, 0.045);
    pilasterG.add(plate);

    parent.add(pilasterG);
  }

  // ==================== DỰNG DẢI TƯỜNG UỐN LƯỢN LIÊN TỤC DUY NHẤT ====================
  createContinuousSCurveWall(parent, densePoints, arcLengths, sectionColors, wallH = 3.8, thickness = 0.32) {
    const wallGroup = new THREE.Group();
    wallGroup.name = 'single-continuous-scurve-wall';

    // Vật liệu phào viền vàng kim mờ (#c5a059)
    const goldTrimMat = new THREE.MeshStandardMaterial({
      color: 0xc5a059,
      roughness: 0.35,
      metalness: 0.85
    });

    // Dải đèn Cove Lighting phát sáng vàng ấm
    const coveLightMat = new THREE.MeshBasicMaterial({ color: 0xffd166 });

    // Cache vật liệu sơn mài nhung lì mờ cho 5 phân khu
    const matCache = new Map();
    const getMat = (colorHex) => {
      if (!matCache.has(colorHex)) {
        matCache.set(
          colorHex,
          new THREE.MeshStandardMaterial({
            color: new THREE.Color(colorHex),
            roughness: 0.65,
            metalness: 0.12
          })
        );
      }
      return matCache.get(colorHex);
    };

    for (let i = 0; i < densePoints.length - 1; i++) {
      const p1 = densePoints[i];
      const p2 = densePoints[i + 1];

      const dx = p2.x - p1.x;
      const dz = p2.z - p1.z;
      const len = Math.hypot(dx, dz);
      if (len < 0.001) continue;

      const angle = Math.atan2(dx, dz);
      const mx = (p1.x + p2.x) / 2;
      const mz = (p1.z + p2.z) / 2;
      const dist = arcLengths[i];

      // Xác định màu sơn mài nhung theo phân khu hiện tại
      let currentColor = sectionColors[sectionColors.length - 1].color;
      for (let s = 0; s < sectionColors.length; s++) {
        if (dist <= sectionColors[s].maxDist) {
          currentColor = sectionColors[s].color;
          break;
        }
      }

      const slabG = new THREE.Group();
      slabG.position.set(mx, 0, mz);
      slabG.rotation.y = angle;

      // 1. Thân vách tường cao 3.8m
      const wallMesh = new THREE.Mesh(
        new THREE.BoxGeometry(thickness, wallH, len + 0.02),
        getMat(currentColor)
      );
      wallMesh.position.y = wallH / 2;
      wallMesh.castShadow = true;
      wallMesh.receiveShadow = true;
      slabG.add(wallMesh);

      // 2. Phào chân tường viền vàng kim mờ (#c5a059)
      const baseTrim = new THREE.Mesh(
        new THREE.BoxGeometry(thickness + 0.05, 0.12, len + 0.02),
        goldTrimMat
      );
      baseTrim.position.y = 0.06;
      slabG.add(baseTrim);

      // 3. Phào đỉnh tường viền vàng kim mờ (#c5a059)
      const topTrim = new THREE.Mesh(
        new THREE.BoxGeometry(thickness + 0.05, 0.12, len + 0.02),
        goldTrimMat
      );
      topTrim.position.y = wallH - 0.06;
      slabG.add(topTrim);

      // 4. Dải LED Cove Lighting âm đỉnh tường hắt ánh sáng vàng lên trần
      const coveStrip = new THREE.Mesh(
        new THREE.BoxGeometry(thickness + 0.02, 0.03, len + 0.02),
        coveLightMat
      );
      coveStrip.position.y = wallH + 0.015;
      slabG.add(coveStrip);

      wallGroup.add(slabG);
    }

    parent.add(wallGroup);
  }

  // ==================== VẠCH THẢM DẪN LỐI DƯỚI SÀN ====================
  createFloorCarpetRunner(parent, densePoints, arcLengths, totalLen) {
    const carpetGroup = new THREE.Group();
    carpetGroup.name = 'floor-carpet-runner';

    const carpetMat = new THREE.MeshStandardMaterial({
      color: 0x0f1c30, // Xanh Navy hoàng gia đậm
      roughness: 0.9,
      metalness: 0.05
    });

    const carpetGoldBorderMat = new THREE.MeshStandardMaterial({
      color: 0xc5a059,
      roughness: 0.4,
      metalness: 0.8
    });

    const runnerW = 1.35; // Chiều rộng dải thảm 1.35m
    const offset = 1.85; // Cách dải tường 1.85m

    for (let i = 0; i < densePoints.length - 2; i += 2) {
      const p1 = densePoints[i];
      const p2 = densePoints[i + 2];

      const dx = p2.x - p1.x;
      const dz = p2.z - p1.z;
      const len = Math.hypot(dx, dz);
      if (len < 0.01) continue;

      const tx = dx / len;
      const tz = dz / len;
      const n1x = -tz, n1z = tx;
      const mx = (p1.x + p2.x) / 2;
      const mz = (p1.z + p2.z) / 2;
      const dot = n1x * (0 - mx) + n1z * (-24 - mz);
      const nx = dot >= 0 ? n1x : -n1x;
      const nz = dot >= 0 ? n1z : -n1z;

      // Tâm dải thảm
      const cx = mx + nx * offset;
      const cz = mz + nz * offset;
      const angle = Math.atan2(dx, dz);

      const segmentG = new THREE.Group();
      segmentG.position.set(cx, 0.005, cz);
      segmentG.rotation.y = angle;

      // Thân thảm
      const carpetMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(runnerW, len + 0.02),
        carpetMat
      );
      carpetMesh.rotation.x = -Math.PI / 2;
      segmentG.add(carpetMesh);

      // 2 Dải chỉ vàng mép thảm
      [-runnerW / 2 + 0.02, runnerW / 2 - 0.02].forEach((bx) => {
        const borderMesh = new THREE.Mesh(
          new THREE.PlaneGeometry(0.04, len + 0.02),
          carpetGoldBorderMat
        );
        borderMesh.rotation.x = -Math.PI / 2;
        borderMesh.position.x = bx;
        borderMesh.position.z = 0.001;
        segmentG.add(borderMesh);
      });

      carpetGroup.add(segmentG);
    }

    parent.add(carpetGroup);
  }

  // ==================== TẠO MŨI TÊN CHỈ HƯỚNG PHÁT SÁNG DƯỚI SÀN ====================
  createTourDirectionArrow(parent, config) {
    const arrowG = new THREE.Group();
    arrowG.position.set(config.x, 0.024, config.z);
    arrowG.rotation.y = config.rotY;

    // Tấm phẳng mũi tên hiển thị đồ họa (thu gọn thanh mảnh 0.78m x 0.32m, bỏ vòng tròn thừa)
    const arrowTex = this.createDirectionArrowTexture(config);
    const arrowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(0.78, 0.32),
      new THREE.MeshBasicMaterial({
        map: arrowTex,
        transparent: true,
        opacity: 0.92,
        depthWrite: false
      })
    );
    arrowPlane.rotation.x = -Math.PI / 2;
    arrowG.add(arrowPlane);

    // Gán dữ liệu tương tác để click vào mũi tên thì camera lướt êm ái tới điểm chỉ định
    const interactData = {
      isTourArrow: true,
      tourArrowData: config,
      targetCamera: config.targetCamera,
      targetLookAt: config.targetLookAt
    };
    arrowG.userData = interactData;
    arrowPlane.userData = interactData;

    this.interactables.push(arrowPlane);
    parent.add(arrowG);
  }

  createDirectionArrowTexture(config) {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 416;
    const ctx = canvas.getContext('2d');

    // Nền viên nang (Capsule pill) màu xanh đen mạ vàng
    const grad = ctx.createLinearGradient(0, 0, 1024, 0);
    grad.addColorStop(0, 'rgba(10, 22, 40, 0.92)');
    grad.addColorStop(0.5, 'rgba(18, 38, 68, 0.95)');
    grad.addColorStop(1, 'rgba(10, 22, 40, 0.92)');

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.roundRect(16, 16, 992, 384, 192);
    ctx.fill();

    // Viền vàng kim phát sáng
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 8;
    ctx.stroke();

    ctx.strokeStyle = 'rgba(255, 235, 160, 0.45)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.roundRect(32, 32, 960, 352, 176);
    ctx.stroke();

    // Mũi tên chỉ hướng kép (Double Arrow Chevron)
    ctx.fillStyle = '#ffd700';
    const drawChevron = (cx, cy, size) => {
      ctx.beginPath();
      ctx.moveTo(cx - size, cy - size * 0.7);
      ctx.lineTo(cx + size * 0.3, cy);
      ctx.lineTo(cx - size, cy + size * 0.7);
      ctx.lineTo(cx - size * 0.3, cy);
      ctx.closePath();
      ctx.fill();
    };
    drawChevron(140, 208, 48);
    drawChevron(884, 208, 48);

    // Chữ tiêu đề phân khu
    ctx.fillStyle = '#fceabb';
    ctx.font = 'bold 44px "Cinzel", "Cormorant Garamond", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.fillText(config.label || 'LỐI THAM QUAN', 512, 170);

    // Phụ đề
    ctx.fillStyle = '#38bdf8';
    ctx.font = '600 28px "Be Vietnam Pro", sans-serif';
    ctx.fillText(config.sub || 'Nhấn để lướt camera tới khu vực', 512, 235);

    // Nhãn hướng dẫn
    ctx.fillStyle = '#ffd700';
    ctx.font = 'italic 22px "Be Vietnam Pro", sans-serif';
    ctx.fillText('✦ NHẤP CHUỘT ĐỂ DI CHUYỂN TỰ ĐỘNG ✦', 512, 310);

    const tex = new THREE.CanvasTexture(canvas);
    if (THREE.sRGBEncoding) tex.encoding = THREE.sRGBEncoding;
    if (THREE.SRGBColorSpace) tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  // ==================== PANO CHUYÊN ĐỀ DẪN NHẬP ====================
  createThemeIntroPano(parent, themeKey, theme, transform, wallColorHex) {
    const panoGroup = new THREE.Group();
    panoGroup.position.set(transform.x, 2.05, transform.z);
    panoGroup.rotation.y = transform.rotY;

    const panoW = 2.2;
    const panoH = 1.8;
    const panoDepth = 0.04;

    // Khung kim loại mạ vàng
    const frameMesh = new THREE.Mesh(
      new THREE.BoxGeometry(panoW + 0.08, panoH + 0.08, panoDepth),
      this.materials.bronzeGold
    );
    frameMesh.position.z = panoDepth / 2 + 0.005;
    panoGroup.add(frameMesh);

    // Tấm Pano đồ họa in tiêu đề và trích đoạn dẫn luận - DÙNG MeshBasicMaterial TỰ PHÁT SÁNG
    const panoTex = this.createThemePanoTexture(theme, wallColorHex);
    const faceMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(panoW, panoH),
      new THREE.MeshBasicMaterial({ map: panoTex })
    );
    faceMesh.position.z = panoDepth + 0.006;
    panoGroup.add(faceMesh);

    const interactData = {
      isThemePanel: true,
      themeKey: themeKey,
      theme: theme
    };
    panoGroup.userData = interactData;
    faceMesh.userData = interactData;
    frameMesh.userData = interactData;

    this.interactables.push(faceMesh);
    parent.add(panoGroup);
  }

  createThemePanoTexture(theme, wallColorHex) {
    const canvas = document.createElement('canvas');
    canvas.width = 1100;
    canvas.height = 900;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 1100, 900);
    grad.addColorStop(0, '#0a192f');
    grad.addColorStop(0.5, wallColorHex || '#1e3454');
    grad.addColorStop(1, '#050c18');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1100, 900);

    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 10;
    ctx.strokeRect(18, 18, 1064, 864);

    ctx.strokeStyle = 'rgba(255, 235, 160, 0.4)';
    ctx.lineWidth = 2;
    ctx.strokeRect(32, 32, 1036, 836);

    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 22px "Be Vietnam Pro", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('✦ CHUYÊN ĐỀ LỊCH SỬ GIÁO DỤC ✦', 550, 90);

    ctx.fillStyle = '#fceabb';
    ctx.font = 'bold 36px "Be Vietnam Pro", sans-serif';
    ctx.fillText((theme?.title || '').toUpperCase(), 550, 160);

    ctx.fillStyle = '#ffd700';
    ctx.font = 'italic 23px "Be Vietnam Pro", sans-serif';
    const sub = theme?.subtitle || '';
    if (sub.length > 55) {
      const parts = sub.split(' – ');
      ctx.fillText(parts[0], 550, 220);
      if (parts[1]) ctx.fillText('– ' + parts[1], 550, 255);
    } else {
      ctx.fillText(sub, 550, 230);
    }

    ctx.strokeStyle = 'rgba(212, 175, 55, 0.5)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(120, 290);
    ctx.lineTo(980, 290);
    ctx.stroke();

    ctx.fillStyle = '#e2e8f0';
    ctx.font = '22px/34px "Be Vietnam Pro", sans-serif';
    ctx.textAlign = 'left';

    const rawText = theme?.introContent || '';
    const cleanPara = rawText.split('\n')[0].replace(/\s+/g, ' ');

    const words = cleanPara.split(' ');
    let line = '';
    let y = 350;
    const maxLines = 8;
    let lineCount = 0;

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > 900 && n > 0) {
        ctx.fillText(line, 100, y);
        line = words[n] + ' ';
        y += 38;
        lineCount++;
        if (lineCount >= maxLines) {
          ctx.fillText(line + '...', 100, y);
          break;
        }
      } else {
        line = testLine;
      }
    }
    if (lineCount < maxLines && line) {
      ctx.fillText(line, 100, y);
    }

    ctx.fillStyle = '#0a192f';
    ctx.fillRect(200, 780, 700, 60);
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 2;
    ctx.strokeRect(200, 780, 700, 60);

    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 22px "Be Vietnam Pro", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('✦ NHẤP CHUỘT ĐỂ ĐỌC BÀI DẪN LUẬN & 5 MỐC SON LỊCH SỬ ✦', 550, 818);

    const tex = new THREE.CanvasTexture(canvas);
    if (THREE.sRGBEncoding) tex.encoding = THREE.sRGBEncoding;
    if (THREE.SRGBColorSpace) tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }

  // ==================== KHUNG TRANH CHÂN DUNG DANH NHÂN ====================
  createTeacherFloatFrame(parent, teacher, transform, wallColorHex) {
    const frameG = new THREE.Group();
    frameG.position.set(transform.x, 2.05, transform.z);
    frameG.rotation.y = transform.rotY;

    // KÍCH THƯỚC HÌNH HỌC CHUẨN XÁC: Rộng 1.08m x Cao 1.48m x Sâu 0.05m
    const frameW = 1.08;
    const frameH = 1.48;
    const frameDepth = 0.05;

    // 1. Tấm bóng đổ mềm áp sát tường (Soft ambient shadow)
    const shadowPlate = new THREE.Mesh(
      new THREE.PlaneGeometry(frameW + 0.08, frameH + 0.08),
      new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.38
      })
    );
    shadowPlate.position.z = 0.002;
    frameG.add(shadowPlate);

    // 2. Khung viền kim loại vàng champagne / đồng mạ nổi 3D (Outer bronze frame)
    const outerFrame = new THREE.Mesh(
      new THREE.BoxGeometry(frameW, frameH, 0.04),
      this.materials.bronzeGold
    );
    outerFrame.position.z = 0.02;
    frameG.add(outerFrame);

    // Khung nẹp gỗ óc chó tự nhiên bên trong (Inner wood trim)
    const innerWood = new THREE.Mesh(
      new THREE.BoxGeometry(frameW - 0.08, frameH - 0.08, 0.044),
      this.materials.naturalWood
    );
    innerWood.position.z = 0.022;
    frameG.add(innerWood);

    // 3. MẶT PHẲNG ẢNH: SỬ DỤNG CANVAS TEXTURE CHỐNG ĐEN TUYỆT ĐỐI (768 x 1024 px)
    const canvas = document.createElement('canvas');
    canvas.width = 768;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    const drawCard = (imgObj) => {
      // Nền Obsidian hoàng gia chuyển sắc sâu thẳm
      const bgGrad = ctx.createLinearGradient(0, 0, 768, 1024);
      bgGrad.addColorStop(0, '#0c192c');
      bgGrad.addColorStop(0.5, '#07101d');
      bgGrad.addColorStop(1, '#030811');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 768, 1024);

      // Khung viền chỉ vàng hoàng gia kép
      ctx.strokeStyle = '#c5a059';
      ctx.lineWidth = 8;
      ctx.strokeRect(16, 16, 736, 992);

      ctx.strokeStyle = 'rgba(255, 215, 0, 0.45)';
      ctx.lineWidth = 2;
      ctx.strokeRect(26, 26, 716, 972);

      // 4 Họa tiết góc mạ vàng hoàng cung
      const corners = [[32, 32], [736, 32], [32, 992], [736, 992]];
      ctx.fillStyle = '#ffd700';
      corners.forEach(([cx, cy]) => {
        ctx.beginPath();
        ctx.arc(cx, cy, 6, 0, Math.PI * 2);
        ctx.fill();
      });

      if (imgObj) {
        // Cắt và vẽ ảnh chân dung bao trọn khung tranh
        const pad = 24;
        const targetW = 768 - pad * 2;
        const targetH = 1024 - pad * 2;
        const targetX = pad;
        const targetY = pad;

        ctx.save();
        ctx.beginPath();
        ctx.rect(targetX, targetY, targetW, targetH);
        ctx.clip();

        const imgRatio = (imgObj.naturalWidth || imgObj.width) / (imgObj.naturalHeight || imgObj.height);
        const boxRatio = targetW / targetH;
        let drawW = targetW, drawH = targetH, drawX = targetX, drawY = targetY;
        if (imgRatio > boxRatio) {
          drawH = targetH;
          drawW = targetH * imgRatio;
          drawX = targetX - (drawW - targetW) / 2;
        } else {
          drawW = targetW;
          drawH = targetW / imgRatio;
          drawY = targetY - (drawH - targetH) * 0.12;
        }
        ctx.drawImage(imgObj, drawX, drawY, drawW, drawH);
        ctx.restore();

        // Viền chỉ vàng sang trọng bao quanh ảnh
        ctx.strokeStyle = '#c89d54';
        ctx.lineWidth = 4;
        ctx.strokeRect(targetX, targetY, targetW, targetH);
      } else {
        // Fallback tức thì: Biểu tượng Danh sư mạ vàng + Họ tên danh nhân
        const haloGrad = ctx.createRadialGradient(384, 340, 20, 384, 340, 180);
        haloGrad.addColorStop(0, 'rgba(255, 215, 0, 0.35)');
        haloGrad.addColorStop(0.7, 'rgba(197, 160, 89, 0.12)');
        haloGrad.addColorStop(1, 'rgba(12, 25, 44, 0)');
        ctx.fillStyle = haloGrad;
        ctx.beginPath();
        ctx.arc(384, 340, 180, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = 'rgba(212, 175, 55, 0.45)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(384, 340, 140, 0, Math.PI * 2);
        ctx.stroke();

        // Silhouette danh nhân
        const goldGrad = ctx.createLinearGradient(300, 200, 468, 480);
        goldGrad.addColorStop(0, '#fef08a');
        goldGrad.addColorStop(0.5, '#eab308');
        goldGrad.addColorStop(1, '#ca8a04');
        ctx.fillStyle = goldGrad;

        ctx.beginPath();
        ctx.arc(384, 290, 60, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(384, 370);
        ctx.bezierCurveTo(310, 375, 260, 420, 240, 500);
        ctx.lineTo(528, 500);
        ctx.bezierCurveTo(508, 420, 458, 375, 384, 370);
        ctx.fill();

        // Họ tên danh nhân
        ctx.fillStyle = '#ffd700';
        ctx.font = 'bold 46px "Be Vietnam Pro", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(teacher.name.toUpperCase(), 384, 620);

        // Năm sinh - mất
        ctx.fillStyle = '#fceabb';
        ctx.font = 'bold 32px "Be Vietnam Pro", sans-serif';
        ctx.fillText(teacher.years || '', 384, 690);

        // Danh hiệu / Thời kỳ
        ctx.fillStyle = '#cbd5e1';
        ctx.font = 'italic 26px "Be Vietnam Pro", sans-serif';
        ctx.fillText(teacher.subTheme || teacher.title || 'Nhà giáo tiêu biểu', 384, 760);
      }
    };

    // Vẽ thẻ ban đầu ngay lập tức
    drawCard(null);

    const portraitTex = new THREE.CanvasTexture(canvas);
    if (THREE.sRGBEncoding) portraitTex.encoding = THREE.sRGBEncoding;
    if (THREE.SRGBColorSpace) portraitTex.colorSpace = THREE.SRGBColorSpace;
    portraitTex.anisotropy = 16;

    // Nạp ảnh thật (ưu tiên tuyệt đối link ảnh mới trên Sheet, kết hợp kho Base64 chống lỗi CORS)
    const rawImg = String(teacher.img || '').trim();
    const normName = String(teacher.name || '').trim().toLowerCase();
    const imgFile = rawImg.split('/').pop();
    const isCustomWebUrl = Boolean(teacher.hasCustomImgUrl || rawImg.startsWith('http://') || rawImg.startsWith('https://') || rawImg.startsWith('data:image'));

    const fallbackByName = (window.TEACHER_IMAGES && (
      window.TEACHER_IMAGES[teacher.name] ||
      window.TEACHER_IMAGES[normName]
    )) || null;

    const exactCachedSrc = (window.TEACHER_IMAGES && (
      (rawImg && window.TEACHER_IMAGES[rawImg]) ||
      (teacher.driveFileId && window.TEACHER_IMAGES[teacher.driveFileId]) ||
      (!isCustomWebUrl && imgFile && window.TEACHER_IMAGES[imgFile]) ||
      (!isCustomWebUrl && imgFile && window.TEACHER_IMAGES[imgFile.toLowerCase()])
    )) || null;

    const candidates = [];
    if (exactCachedSrc) {
      candidates.push(exactCachedSrc);
    } else if (isCustomWebUrl && rawImg) {
      candidates.push(rawImg);
      if (teacher.driveFileId) {
        candidates.push(`https://drive.google.com/thumbnail?id=${teacher.driveFileId}&sz=w1000`);
      }
      candidates.push('https://wsrv.nl/?url=' + encodeURIComponent(rawImg) + '&output=jpg');
      if (fallbackByName) candidates.push(fallbackByName);
    } else if (fallbackByName) {
      candidates.push(fallbackByName);
    } else if (rawImg) {
      candidates.push(rawImg);
    }

    if (candidates.length > 0) {
      const imgObj = new Image();
      let candidateIdx = 0;
      const tryNextCandidate = () => {
        if (candidateIdx >= candidates.length) return;
        const nextSrc = String(candidates[candidateIdx++]);
        if (nextSrc.startsWith('http')) {
          imgObj.crossOrigin = 'anonymous';
        } else {
          imgObj.removeAttribute('crossorigin');
        }
        imgObj.src = nextSrc;
      };

      imgObj.onload = () => {
        drawCard(imgObj);
        portraitTex.needsUpdate = true;
      };
      imgObj.onerror = () => {
        tryNextCandidate();
      };
      tryNextCandidate();
      if (imgObj.complete && imgObj.naturalWidth > 0) {
        drawCard(imgObj);
        portraitTex.needsUpdate = true;
      }
    }

    const photoPlaneGeo = new THREE.PlaneGeometry(0.92, 1.30);
    const photoMesh = new THREE.Mesh(photoPlaneGeo, new THREE.MeshBasicMaterial({ map: portraitTex }));
    photoMesh.position.z = 0.052;
    frameG.add(photoMesh);

    // 4. THANH ĐÈN RỌI TRANH NGHỆ THUẬT (ART PICTURE LIGHT) GẮN TRÊN ĐỈNH KHUNG
    const lightBarG = new THREE.Group();
    lightBarG.position.set(0, frameH / 2 + 0.14, 0.08);

    // Tay đỡ đồng vươn ra khỏi tường
    const lightBracket = new THREE.Mesh(
      new THREE.BoxGeometry(0.04, 0.04, 0.22),
      this.materials.bronzeGold
    );
    lightBracket.position.set(0, 0, 0.11);
    lightBarG.add(lightBracket);

    // Thân đèn rọi ngang
    const lampBody = new THREE.Mesh(
      new THREE.CylinderGeometry(0.035, 0.035, 0.65, 16),
      this.materials.bronzeGold
    );
    lampBody.rotation.z = Math.PI / 2;
    lampBody.position.set(0, -0.01, 0.22);
    lightBarG.add(lampBody);

    // Dải phát sáng vàng ấm rọi xuống tranh
    const lampGlow = new THREE.Mesh(
      new THREE.BoxGeometry(0.58, 0.015, 0.04),
      new THREE.MeshBasicMaterial({ color: 0xfff0c4 })
    );
    lampGlow.position.set(0, -0.04, 0.22);
    lightBarG.add(lampGlow);

    frameG.add(lightBarG);

    // 5. BẢNG TÊN ĐỒNG MẠ VÀNG BÊN DƯỚI KHUNG TRANH
    const plateW = 0.88;
    const plateH = 0.26;
    const plateY = -frameH / 2 - 0.18;

    const nameplateTex = this.createTeacherNameplateTexture(teacher);
    const plateMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(plateW, plateH),
      new THREE.MeshBasicMaterial({ map: nameplateTex })
    );
    plateMesh.position.set(0, plateY, 0.028);
    frameG.add(plateMesh);

    const plateFrame = new THREE.Mesh(
      new THREE.BoxGeometry(plateW + 0.04, plateH + 0.04, 0.02),
      this.materials.bronzeGold
    );
    plateFrame.position.set(0, plateY, 0.015);
    frameG.add(plateFrame);

    // 6. GÁN DỮ LIỆU TƯƠNG TÁC (CLICK TO POPUP MODAL, CAMERA ĐỨNG YÊN)
    const interactData = {
      isTeacherFrame: true,
      teacherData: teacher,
      id: teacher.id
    };
    frameG.userData = interactData;
    photoMesh.userData = interactData;
    outerFrame.userData = interactData;
    plateMesh.userData = interactData;

    this.interactables.push(frameG);
    parent.add(frameG);
  }

  createTeacherNameplateTexture(teacher) {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 320;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 1024, 320);
    grad.addColorStop(0, '#091524');
    grad.addColorStop(0.5, '#12253d');
    grad.addColorStop(1, '#060f1b');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 320);

    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 8;
    ctx.strokeRect(10, 10, 1004, 300);
    ctx.strokeStyle = 'rgba(255, 235, 160, 0.5)';
    ctx.lineWidth = 2;
    ctx.strokeRect(22, 22, 980, 276);

    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 44px "Cinzel", "Cormorant Garamond", Georgia, serif';
    ctx.textAlign = 'center';
    ctx.fillText(teacher.name.toUpperCase(), 512, 110);

    ctx.fillStyle = '#fceabb';
    ctx.font = 'bold 30px "Be Vietnam Pro", sans-serif';
    ctx.fillText(teacher.years || '', 512, 180);

    ctx.fillStyle = '#e2e8f0';
    ctx.font = 'italic 25px "Be Vietnam Pro", sans-serif';
    const subDesc = teacher.subTheme || teacher.title || '';
    ctx.fillText(subDesc.length > 50 ? subDesc.slice(0, 48) + '...' : subDesc, 512, 250);

    return new THREE.CanvasTexture(canvas);
  }

  // ==================== ĐIỂM NHẤN KIẾN TRÚC MÁI NGÓI CỔ TRUYỀN THỐNG ====================
  // Thiết kế đua mái vươn ra từ đỉnh tường (Cantilevered Eaves - KHÔNG DÙNG CỘT CHẮN DƯỚI SÀN)
  createAncientTileRoofModule(parent, x, z, rotY = 0) {
    const roofG = new THREE.Group();
    roofG.position.set(x, 0, z);
    roofG.rotation.y = rotY;

    // Kèo xà gồ gỗ Lim vươn ra từ đỉnh tường (KHÔNG CÓ CỘT NÀO CHẠM SÀN)
    [-1.6, 1.6].forEach((colX) => {
      const bracket = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 0.45, 0.7),
        this.materials.naturalWood
      );
      bracket.position.set(colX, 3.4, 0.35);
      roofG.add(bracket);

      const bracketGold = new THREE.Mesh(
        new THREE.BoxGeometry(0.22, 0.08, 0.72),
        this.materials.bronzeGold
      );
      bracketGold.position.set(colX, 3.18, 0.35);
      roofG.add(bracketGold);
    });

    // Kèo dầm ngang gỗ Lim
    const beam = new THREE.Mesh(
      new THREE.BoxGeometry(3.8, 0.24, 0.65),
      this.materials.naturalWood
    );
    beam.position.set(0, 3.65, 0.35);
    roofG.add(beam);

    // Mái ngói vảy cá dốc cong truyền thống
    const roofMat = new THREE.MeshStandardMaterial({
      color: 0x8b3a1d, // Đỏ gạch nung cổ kính
      roughness: 0.65,
      metalness: 0.05
    });

    const roofMesh = new THREE.Mesh(
      new THREE.ConeGeometry(2.4, 0.85, 4),
      roofMat
    );
    roofMesh.rotation.y = Math.PI / 4;
    roofMesh.scale.set(1.4, 0.75, 0.9);
    roofMesh.position.set(0, 4.15, 0.45);
    roofMesh.castShadow = true;
    roofG.add(roofMesh);

    // Biển gỗ "VẠN THẾ SƯ BIỂU" sơn son thếp vàng
    const signBoard = new THREE.Mesh(
      new THREE.BoxGeometry(1.8, 0.45, 0.06),
      this.materials.navyDeep
    );
    signBoard.position.set(0, 3.45, 0.65);
    roofG.add(signBoard);

    const signBoardBorder = new THREE.Mesh(
      new THREE.BoxGeometry(1.86, 0.51, 0.04),
      this.materials.bronzeGold
    );
    signBoardBorder.position.set(0, 3.45, 0.64);
    roofG.add(signBoardBorder);

    // Chữ thếp vàng trên biển
    const signTex = this.createAncientSignTexture('VẠN THẾ SƯ BIỂU');
    const signPlate = new THREE.Mesh(
      new THREE.PlaneGeometry(1.7, 0.38),
      new THREE.MeshBasicMaterial({ map: signTex, transparent: true })
    );
    signPlate.position.set(0, 3.45, 0.685);
    roofG.add(signPlate);

    parent.add(roofG);
  }

  // ==================== CÂY ĐA TRI ÂN & GHẾ TRÒN NGHỈ CHÂN TẠI TÂM GIAN NHÀ GIÁO ====================
  // Tạo thiệp lụa tri ân tông Vàng Hổ Phách / Giấy Da Cổ Sẫm (Aged Parchment) với độ tương phản cực cao
  createWishCardTexture(tribute, explicitIndex = 0) {
    const canvas = document.createElement('canvas');
    canvas.width = 320;
    canvas.height = 440;
    const ctx = canvas.getContext('2d');

    // NỀN THIỆP ĐỎ SON KHÁNH TIẾT & HỔ PHÁCH SẪM HOÀNG GIA ĐẬM ĐÀ (RỰC RỠ, NỔI BẬT 100% GIỮA TÁN CÂY)
    const isRuby = explicitIndex % 2 === 0;
    const bgGrad = ctx.createLinearGradient(0, 0, 320, 440);
    if (isRuby) {
      bgGrad.addColorStop(0, '#8b141a');    // Đỏ son thắm khánh tiết
      bgGrad.addColorStop(0.35, '#6e0e13'); // Đỏ chu sa hoàng triều
      bgGrad.addColorStop(0.75, '#4f070b'); // Đỏ nhung sẫm
      bgGrad.addColorStop(1, '#320306');    // Đỏ son sẫm hoàng gia
    } else {
      bgGrad.addColorStop(0, '#874507');    // Hổ phách hoàng gia sẫm
      bgGrad.addColorStop(0.35, '#6b3304'); // Nâu hổ phách ánh kim
      bgGrad.addColorStop(0.75, '#4a2002'); // Nâu đồng trầm
      bgGrad.addColorStop(1, '#2d1301');    // Gỗ mun hổ phách sẫm
    }
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 320, 440);

    // Vân lụa dệt vàng cổ truyền tinh xảo
    for (let f = 0; f < 80; f++) {
      ctx.fillStyle = f % 2 === 0 ? 'rgba(255, 215, 0, 0.08)' : 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(0, Math.random() * 440, 320, 1 + Math.random() * 2.5);
    }

    // Khung viền kép dập nổi thếp vàng 24K hoàng gia
    ctx.strokeStyle = '#ffd700'; // Vàng kim 24K dập nổi
    ctx.lineWidth = 6;
    ctx.strokeRect(10, 10, 300, 420);

    ctx.strokeStyle = isRuby ? '#dfa528' : '#e6b800';
    ctx.lineWidth = 2.5;
    ctx.strokeRect(18, 18, 284, 404);

    // 4 Góc hoa văn thếp vàng kim
    const cornerSize = 18;
    ctx.fillStyle = '#ffd700';
    [[10, 10], [310 - cornerSize, 10], [10, 430 - cornerSize], [310 - cornerSize, 430 - cornerSize]].forEach(([cx, cy]) => {
      ctx.fillRect(cx, cy, cornerSize, cornerSize);
    });

    // 1. Tiêu đề lá thư tri ân - Chữ vàng kim 24K dập nổi tỏa sáng
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 15px "Be Vietnam Pro", sans-serif';
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 4;
    ctx.fillText('🍃 LÁ THƯ TRI ÂN THẦY CÔ', 160, 52);
    ctx.shadowBlur = 0;

    // Đường gạch chỉ vàng ngăn cách
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(48, 68);
    ctx.lineTo(272, 68);
    ctx.stroke();

    // 2. Kính gửi Thầy Cô (Chữ vàng kim hoàng gia sáng rực rỡ, bóng đổ sâu)
    ctx.fillStyle = '#fff3b8';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
    ctx.shadowBlur = 6;
    this.drawFittedText(
      ctx,
      tribute?.teacher || 'Thầy Cô Kính Mến',
      160,
      108,
      260,
      21,
      '"Cormorant Garamond", Georgia, serif',
      'bold'
    );
    ctx.shadowBlur = 0;

    // 3. Nội dung lời tri ân (Màu trắng ngà lụa sáng, tương phản cực nét trên nền đỏ son/hổ phách đậm)
    ctx.fillStyle = '#fff8eb';
    ctx.font = 'italic 16px "Cormorant Garamond", serif';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
    ctx.shadowBlur = 3;
    const rawMsg = (tribute?.message || 'Tri ân người gieo hạt tri thức cho bao thế hệ học trò Việt Nam.').trim();
    this.wrapText(ctx, `“${rawMsg.slice(0, 84)}${rawMsg.length > 84 ? '...' : ''}”`, 160, 155, 260, 22);
    ctx.shadowBlur = 0;

    // 4. Dải ruy băng ký tên người gửi ở đáy thiệp
    ctx.fillStyle = isRuby ? '#250204' : '#1f0d01';
    ctx.fillRect(26, 358, 268, 50);
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 2;
    ctx.strokeRect(26, 358, 268, 50);

    ctx.fillStyle = '#ffd700';
    this.drawFittedText(
      ctx,
      `— ${tribute?.senderName || tribute?.sender || 'Học sinh cả nước'}`,
      160,
      390,
      250,
      15,
      '"Be Vietnam Pro", sans-serif',
      'bold'
    );

    const tex = new THREE.CanvasTexture(canvas);
    tex.anisotropy = 8;
    return tex;
  }

  buildTeachersBanyanTree(parent, centerX = 0, centerZ = -24.3) {
    const treeGroup = new THREE.Group();
    treeGroup.position.set(centerX, 0, centerZ);
    treeGroup.name = 'teachers-banyan-tree-group';

    // 1. BẬC ĐẾ ĐÁ CẨM THẠCH XÁM & GHẾ TRÒN NGỒI NGHỈ (CIRCULAR MUSEUM BENCH)
    const baseStone = new THREE.Mesh(
      new THREE.CylinderGeometry(4.2, 4.4, 0.16, 48),
      this.materials.plinthStone
    );
    baseStone.position.y = 0.08;
    treeGroup.add(baseStone);

    const baseBrassTrim = new THREE.Mesh(
      new THREE.TorusGeometry(4.22, 0.04, 12, 64),
      this.materials.bronzeGold
    );
    baseBrassTrim.rotation.x = Math.PI / 2;
    baseBrassTrim.position.y = 0.16;
    treeGroup.add(baseBrassTrim);

    // Ghế tròn ngồi nghỉ bằng gỗ óc chó sẫm Dark Walnut (Bán kính ngoài 1.95m, bán kính trong 1.15m, cao 0.46m)
    const benchGroup = new THREE.Group();
    benchGroup.position.y = 0.16;

    const benchBody = new THREE.Mesh(
      new THREE.RingGeometry(1.15, 1.95, 48),
      this.materials.naturalWood
    );
    benchBody.rotation.x = -Math.PI / 2;
    benchBody.position.y = 0.45;
    benchGroup.add(benchBody);

    // Vành gỗ ngoài & trong của ghế
    const outerRing = new THREE.Mesh(
      new THREE.CylinderGeometry(1.95, 1.95, 0.45, 48, 1, true),
      this.materials.naturalWood
    );
    outerRing.position.y = 0.225;
    benchGroup.add(outerRing);

    const innerRing = new THREE.Mesh(
      new THREE.CylinderGeometry(1.15, 1.15, 0.45, 48, 1, true),
      this.materials.naturalWood
    );
    innerRing.position.y = 0.225;
    benchGroup.add(innerRing);

    // Đệm ngồi bọc nệm nhung xanh navy sang trọng có viền đồng
    const cushionMat = new THREE.MeshStandardMaterial({
      color: 0x14253d,
      roughness: 0.65,
      metalness: 0.12
    });
    const cushionRing = new THREE.Mesh(
      new THREE.RingGeometry(1.22, 1.88, 48),
      cushionMat
    );
    cushionRing.rotation.x = -Math.PI / 2;
    cushionRing.position.y = 0.465;
    benchGroup.add(cushionRing);

    // Viền đồng mạ vàng bo tròn mép ngoài ghế
    const benchGoldTrim = new THREE.Mesh(
      new THREE.TorusGeometry(1.95, 0.035, 12, 64),
      this.materials.bronzeGold
    );
    benchGoldTrim.rotation.x = Math.PI / 2;
    benchGoldTrim.position.y = 0.45;
    benchGroup.add(benchGoldTrim);

    treeGroup.add(benchGroup);

    // 2. THÂN CÂY ĐA CỔ THỤ NGHỆ THUẬT & HỆ RỄ PHỤ BUÔNG MỀM
    const trunkGroup = new THREE.Group();
    trunkGroup.position.y = 0.16;

    // Thân chính vững chãi bằng gỗ óc chó vươn cao
    const mainTrunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.72, 1.10, 3.6, 24),
      this.materials.naturalWood
    );
    mainTrunk.position.y = 1.8;
    trunkGroup.add(mainTrunk);

    // 8 Rễ phụ buông mềm (Aerial roots) quấn lượn quanh gốc đa
    for (let r = 0; r < 8; r++) {
      const angle = (r * Math.PI * 2) / 8;
      const rootCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(Math.cos(angle) * 0.72, 3.0, Math.sin(angle) * 0.72),
        new THREE.Vector3(Math.cos(angle + 0.2) * 0.95, 2.0, Math.sin(angle + 0.2) * 0.95),
        new THREE.Vector3(Math.cos(angle - 0.15) * 1.05, 1.0, Math.sin(angle - 0.15) * 1.05),
        new THREE.Vector3(Math.cos(angle) * 1.15, 0.2, Math.sin(angle) * 1.15)
      ]);
      const rootGeo = new THREE.TubeGeometry(rootCurve, 24, 0.065, 8, false);
      const rootMesh = new THREE.Mesh(rootGeo, this.materials.naturalWood);
      trunkGroup.add(rootMesh);
    }

    treeGroup.add(trunkGroup);

    // 3. TÁN CÂY ĐA TRI ÂN HOÀNG KIM (NÂNG CẤP ĐẸP RỰC RỠ, LỘNG LẪY NHƯ CỘI CÂY TRI THỨC NGOÀI SẢNH)
    // Giữ nguyên 100% thân gỗ xoắn uốn lượn; Tán trên kết hợp cành vàng kim 24K, mầm lá pha lê, tinh cầu lam ngọc & vì sao lấp lánh
    const rotatingCanopy = new THREE.Group();
    rotatingCanopy.position.y = 3.6; // Đặt chuẩn xác trên ngọn thân gỗ mun

    // Vành đai hoa văn đồng mạ vàng ở đỉnh cổ thân cây tiếp nối lên tán
    [0.08, 0.22].forEach((ringY) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.72 - ringY * 0.15, 0.035, 12, 48),
        this.materials.brightGold
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = ringY;
      rotatingCanopy.add(ring);
    });

    // Vật liệu pha lê phát sáng cho lá bồ đề & tinh cầu ngọc (chuẩn cây ngoài sảnh)
    const crystalLeafMat = new THREE.MeshStandardMaterial({
      color: 0xffea78,
      emissive: 0xd49000,
      emissiveIntensity: 0.85,
      roughness: 0.14,
      metalness: 0.88
    });

    const cyanOrbMat = new THREE.MeshStandardMaterial({
      color: 0x5eead4,
      emissive: 0x00a3cc,
      emissiveIntensity: 0.95,
      roughness: 0.10,
      metalness: 0.80
    });

    const goldMirrorOrbMat = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      emissive: 0x996b00,
      emissiveIntensity: 0.50,
      roughness: 0.06,
      metalness: 0.98
    });

    // ==================== A. HỆ CÀNH VÀNG KIM 24K & MẦM LÁ KIM CƯƠNG (32 CÀNH CHÍNH & 64 CÀNH PHỤ XÒE RỘNG) ====================
    // Cành mạ vàng sáng bóng vươn xòe bề thế hình cánh cung từ 1.8m đến 4.4m, bao trọn bệ đá tròn
    const branchCount = 32;
    for (let i = 0; i < branchCount; i++) {
      const angle = (i / branchCount) * Math.PI * 2;
      const tier = i % 4;
      const reach = 3.65 + tier * 0.25 + (i % 3) * 0.14; 
      const apexH = 1.45 + tier * 0.18; // Đỉnh vòm cong cánh cung
      const tipH = 0.92 + tier * 0.12;  // Đầu cành rủ nhẹ xuống

      const curvePoints = [
        new THREE.Vector3(Math.cos(angle) * 0.45, 0.12, Math.sin(angle) * 0.45),
        new THREE.Vector3(Math.cos(angle) * (reach * 0.38), apexH * 0.88, Math.sin(angle) * (reach * 0.38)),
        new THREE.Vector3(Math.cos(angle) * (reach * 0.75), apexH, Math.sin(angle) * (reach * 0.75)),
        new THREE.Vector3(Math.cos(angle) * reach, tipH, Math.sin(angle) * reach)
      ];

      const branchCurve = new THREE.CatmullRomCurve3(curvePoints);
      const branchGeo = new THREE.TubeGeometry(branchCurve, 24, 0.048, 8, false);
      const mainBranch = new THREE.Mesh(branchGeo, this.materials.bronzeGold);
      rotatingCanopy.add(mainBranch);

      // 2 Nhánh phụ mạ vàng kim sáng vươn chẽ 2 bên tạo độ dày dặn và sum sê lộng lẫy
      [-0.25, 0.25].forEach((subOffset, subIdx) => {
        const subAngle = angle + subOffset;
        const subReach = reach * 0.68;
        const subApexH = apexH * 0.82 + subIdx * 0.12;
        const subTipH = tipH + 0.20 + subIdx * 0.08;

        const subCurve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(Math.cos(angle) * (reach * 0.42), apexH * 0.78, Math.sin(angle) * (reach * 0.42)),
          new THREE.Vector3(Math.cos(subAngle) * (subReach * 0.78), subApexH, Math.sin(subAngle) * (subReach * 0.78)),
          new THREE.Vector3(Math.cos(subAngle) * subReach, subTipH, Math.sin(subAngle) * subReach)
        ]);
        const subGeo = new THREE.TubeGeometry(subCurve, 16, 0.026, 6, false);
        const subMesh = new THREE.Mesh(subGeo, this.materials.brightGold);
        rotatingCanopy.add(subMesh);

        // Mầm lá bồ đề pha lê hình khối kim cương phát sáng trên cành phụ
        const subLeaf = new THREE.Mesh(
          new THREE.OctahedronGeometry(0.12, 0),
          crystalLeafMat
        );
        subLeaf.scale.set(0.85, 1.45, 0.40);
        subLeaf.position.set(
          Math.cos(subAngle) * subReach,
          subTipH,
          Math.sin(subAngle) * subReach
        );
        rotatingCanopy.add(subLeaf);
      });

      // Mầm lá pha lê vàng kim phát sáng rực rỡ vươn trên đầu cành chính
      const mainLeaf = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.16, 0),
        crystalLeafMat
      );
      mainLeaf.scale.set(0.9, 1.6, 0.45);
      mainLeaf.position.set(
        Math.cos(angle) * reach,
        tipH,
        Math.sin(angle) * reach
      );
      rotatingCanopy.add(mainLeaf);
    }

    // Đỉnh ngọn cây: Đài Sen & Búp Ngọc Pha Lê phát sáng tại tâm đỉnh
    const crownBase = new THREE.Mesh(
      new THREE.CylinderGeometry(0.35, 0.22, 0.25, 12),
      this.materials.brightGold
    );
    crownBase.position.y = 1.95;
    rotatingCanopy.add(crownBase);

    const topCrown = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.42, 1),
      crystalLeafMat
    );
    topCrown.scale.set(0.85, 1.5, 0.85);
    topCrown.position.y = 2.25;
    rotatingCanopy.add(topCrown);

    // ==================== B. HỆ THỐNG THẺ ƯỚC CÓ DÂY TREO & TUA RUA RỦ XUỐNG TỪ CÀNH (28 THIỆP TRI ÂN) ====================
    const tributes = window.INITIAL_TRIBUTES || [];
    const cardCount = 28;
    for (let c = 0; c < cardCount; c++) {
      const tributeData = tributes[c % tributes.length] || {
        teacher: 'Thầy Cô Kính Mến',
        message: 'Tri ân người gieo hạt tri thức cho bao thế hệ học trò Việt Nam.',
        sender: 'Học sinh cả nước'
      };

      const cAngle = (c * Math.PI * 2) / cardCount + 0.12;
      const tier = c % 4;
      const cRad = 1.85 + tier * 0.45 + (c % 3) * 0.20;
      const cY = 1.15 + tier * 0.20 - (c % 2) * 0.10;

      const cardHolder = new THREE.Group();
      cardHolder.position.set(Math.cos(cAngle) * cRad, cY, Math.sin(cAngle) * cRad);
      cardHolder.rotation.y = -cAngle + Math.PI / 2;

      // Dây lụa đỏ treo thẻ lời chúc rủ xuống từ cành
      const cordH = 0.42 + (c % 3) * 0.12;
      const cord = new THREE.Mesh(
        new THREE.CylinderGeometry(0.007, 0.007, cordH, 8),
        this.materials.redSilk
      );
      cord.position.y = -cordH / 2;
      cardHolder.add(cord);

      // Nút thắt vàng kim phía trên thẻ
      const goldKnot = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.045, 0),
        this.materials.brightGold
      );
      goldKnot.position.y = -cordH;
      cardHolder.add(goldKnot);

      // Thiệp lụa vàng 3D sắc nét có ghi lời chúc của học sinh
      const cardTex = this.createWishCardTexture(tributeData, c);
      const cardMesh = new THREE.Mesh(
        new THREE.BoxGeometry(0.36, 0.50, 0.016),
        new THREE.MeshStandardMaterial({
          map: cardTex,
          transparent: true,
          roughness: 0.25,
          metalness: 0.35
        })
      );
      cardMesh.position.y = -cordH - 0.26;
      cardHolder.add(cardMesh);

      // Tua rua đỏ may mắn buông dưới đáy thẻ
      const tassel = new THREE.Mesh(
        new THREE.ConeGeometry(0.035, 0.16, 10),
        this.materials.redSilk
      );
      tassel.position.y = -cordH - 0.60;
      cardHolder.add(tassel);

      // Hitbox riêng cho từng tấm thiệp để click cực nhạy
      const cardHitbox = new THREE.Mesh(
        new THREE.BoxGeometry(0.52, 0.72, 0.18),
        new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.001, depthWrite: false })
      );
      cardHitbox.position.y = -cordH - 0.26;
      cardHolder.add(cardHitbox);

      const cardMeta = {
        isTributeCard: true,
        tributeData: tributeData,
        tributeIndex: c,
        artifactId: 'art-wishing-tree',
        isBanyanCard: true
      };
      cardHolder.userData = cardMeta;
      cardHolder.traverse((child) => {
        child.userData = cardMeta;
      });

      this.interactables.push(cardHolder);
      rotatingCanopy.add(cardHolder);
    }

    // ==================== C. QUẢ CẦU TRANG TRÍ: XEN KẼ LAM NGỌC (CYAN) & VÀNG GƯƠNG BÓNG BẨY (48 TINH CẦU) ====================
    const sphereCount = 48;
    for (let s = 0; s < sphereCount; s++) {
      const sAngle = (s * Math.PI * 2) / sphereCount + 0.45;
      const tier = s % 4;
      const sRad = 1.45 + tier * 0.50 + ((s * 3) % 5) * 0.16;
      const sBaseY = 1.30 + tier * 0.26 + Math.sin(s * 1.5) * 0.14;
      const isCyan = s % 2 === 0;

      const orbHolder = new THREE.Group();
      orbHolder.position.set(Math.cos(sAngle) * sRad, sBaseY, Math.sin(sAngle) * sRad);

      const threadH = 0.35 + (s % 3) * 0.14;
      const thread = new THREE.Mesh(
        new THREE.CylinderGeometry(0.004, 0.004, threadH, 6),
        new THREE.MeshBasicMaterial({ color: 0xffe89e, transparent: true, opacity: 0.85 })
      );
      thread.position.y = -threadH / 2;
      orbHolder.add(thread);

      // Tinh cầu Lam ngọc Cyan phát sáng huyền ảo xen kẽ Vàng gương bóng bẩy
      const orbMesh = isCyan
        ? new THREE.Mesh(new THREE.IcosahedronGeometry(0.095, 2), cyanOrbMat)
        : new THREE.Mesh(new THREE.SphereGeometry(0.095, 24, 24), goldMirrorOrbMat);
      orbMesh.position.y = -threadH;
      orbHolder.add(orbMesh);

      // Vòng hào quang nhẹ cho quả cầu
      const halo = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.13, 0),
        new THREE.MeshBasicMaterial({
          color: isCyan ? 0xa6f4ff : 0xfff0aa,
          transparent: true,
          opacity: 0.35,
          wireframe: true
        })
      );
      halo.position.y = -threadH;
      orbHolder.add(halo);

      // Hitbox
      const orbHitbox = new THREE.Mesh(
        new THREE.SphereGeometry(0.30, 8, 8),
        new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.001, depthWrite: false })
      );
      orbHitbox.position.y = -threadH;
      orbHolder.add(orbHitbox);

      const sTribute = tributes[(s + 7) % tributes.length] || tributes[0];
      const orbMeta = {
        isTributeCard: true,
        isCrystalOrb: true,
        tributeData: sTribute,
        tributeIndex: s,
        artifactId: 'art-wishing-tree',
        isBanyanCard: true
      };
      orbHolder.userData = orbMeta;
      orbHolder.traverse((child) => {
        child.userData = orbMeta;
      });

      this.interactables.push(orbHolder);
      rotatingCanopy.add(orbHolder);
    }

    // ==================== D. ĐỒNG BỘ 1.800 VÌ SAO ĐA SẮC KIM CƯƠNG & VÀNG KIM LẤP LÁNH ====================
    const starTex = this.createStarGlowTexture();
    const starCount = 1800;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    // Bảng màu sao lấp lánh đỉnh cao như cây ngoài sảnh: Trắng kim cương + Vàng hoàng kim lộng lẫy
    const starPalette = [
      new THREE.Color(0xffffff), // Trắng tinh khôi lấp lánh như kim cương
      new THREE.Color(0xfff8d0), // Trắng vàng ấm
      new THREE.Color(0xffe680), // Vàng ánh kim
      new THREE.Color(0xffd700), // Vàng hoàng gia
      new THREE.Color(0xffca28), // Vàng hổ phách
      new THREE.Color(0xa7f3d0)  // Chấm lam ngọc lấp lánh
    ];

    for (let i = 0; i < starCount; i++) {
      const u = Math.random();
      const theta = i * 2.39996 + Math.random() * 0.45;
      const phi = Math.acos(1 - 2 * u) * 0.82;
      const r = 0.75 + Math.pow(Math.random(), 0.65) * 3.65;

      const sx = r * Math.sin(phi) * Math.cos(theta);
      const sy = 0.85 + Math.cos(phi) * (r * 0.68) + (Math.random() - 0.5) * 0.40;
      const sz = r * Math.sin(phi) * Math.sin(theta);

      starPositions[i * 3] = sx;
      starPositions[i * 3 + 1] = Math.max(0.3, sy);
      starPositions[i * 3 + 2] = sz;

      const c = starPalette[i % starPalette.length];
      starColors[i * 3] = c.r;
      starColors[i * 3 + 1] = c.g;
      starColors[i * 3 + 2] = c.b;
    }

    const banyanStarGeo = new THREE.BufferGeometry();
    banyanStarGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    banyanStarGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    this.banyanStarMaterial = new THREE.PointsMaterial({
      size: 0.19,
      map: starTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.92,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    this.banyanStarPoints = new THREE.Points(banyanStarGeo, this.banyanStarMaterial);
    this.banyanStarPoints.raycast = () => {};
    rotatingCanopy.add(this.banyanStarPoints);

    // ==================== DẢI NGÂN HÀ 500 HẠT XOẮN ỐC BAY LƯỢN (VÀNG HOÀNG GIA & LAM NGỌC CYAN) ====================
    const spiralCount = 500;
    const spiralPositions = new Float32Array(spiralCount * 3);
    const spiralColors = new Float32Array(spiralCount * 3);
    this.banyanParticleData = [];

    const spiralGoldPalette = [
      new THREE.Color(0xffffff),
      new THREE.Color(0xfff4b8),
      new THREE.Color(0xffdf6d),
      new THREE.Color(0xffca28),
      new THREE.Color(0xffa000)
    ];

    const spiralCyanPalette = [
      new THREE.Color(0xa7f3d0),
      new THREE.Color(0x5eead4),
      new THREE.Color(0x2dd4bf),
      new THREE.Color(0x7dd3fc)
    ];

    for (let i = 0; i < spiralCount; i++) {
      const t = i / spiralCount;
      const arm = i % 4;
      const baseAngle = (arm * Math.PI * 2) / 4;
      const angle = baseAngle + t * Math.PI * 6;
      const baseRadius = 0.85 + t * 3.20;
      const rad = baseRadius + (Math.random() - 0.5) * 0.20;
      const py = 0.25 + t * 2.85 + (Math.random() - 0.5) * 0.15;

      spiralPositions[i * 3] = Math.cos(angle) * rad;
      spiralPositions[i * 3 + 1] = py;
      spiralPositions[i * 3 + 2] = Math.sin(angle) * rad;

      this.banyanParticleData.push({
        progress: t,
        arm: arm,
        baseAngle: baseAngle,
        baseRadius: baseRadius,
        baseY: 0.25,
        speed: 0.08 + Math.random() * 0.07,
        radialJitter: (Math.random() - 0.5) * 0.20
      });

      const isCyan = Math.random() < 0.35;
      const c = isCyan
        ? spiralCyanPalette[Math.floor(Math.random() * spiralCyanPalette.length)]
        : spiralGoldPalette[Math.floor(Math.random() * spiralGoldPalette.length)];

      spiralColors[i * 3] = c.r;
      spiralColors[i * 3 + 1] = c.g;
      spiralColors[i * 3 + 2] = c.b;
    }

    this.banyanSpiralGeometry = new THREE.BufferGeometry();
    this.banyanSpiralGeometry.setAttribute('position', new THREE.BufferAttribute(spiralPositions, 3));
    this.banyanSpiralGeometry.setAttribute('color', new THREE.BufferAttribute(spiralColors, 3));

    const banyanSpiralMat = new THREE.PointsMaterial({
      size: 0.18,
      map: starTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.90,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    this.banyanSpiralPoints = new THREE.Points(this.banyanSpiralGeometry, banyanSpiralMat);
    this.banyanSpiralPoints.raycast = () => {};
    rotatingCanopy.add(this.banyanSpiralPoints);

    // ==================== E. ÁNH SÁNG POINTLIGHT VÀNG KIM ẤM DỊU RỰC RỠ ====================
    const canopyInnerLight = new THREE.PointLight(0xffdf99, 3.2, 20, 1.3);
    canopyInnerLight.position.set(0, 1.2, 0); // Đặt ẩn giữa tán cây hắt ánh sáng lấp lánh xuống tranh và phòng
    rotatingCanopy.add(canopyInnerLight);

    this.banyanCanopyRotatingGroup = rotatingCanopy;
    treeGroup.add(rotatingCanopy);

    // 5. BỤC VIẾT LỜI TRI ÂN & SỔ VÀNG ĐẶT PHÍA TRƯỚC GỐC CÂY (HƯỚNG NAM, ĐÓN KHÁCH VÀO PHÒNG)
    const deskGroup = new THREE.Group();
    deskGroup.position.set(0, 0.16, 2.35); // Đặt ở mặt Nam của bục tròn ghế nghỉ

    // Bệ đá gỗ Dark Walnut
    const deskPillar = new THREE.Mesh(
      new THREE.BoxGeometry(0.85, 0.88, 0.52),
      this.materials.naturalWood
    );
    deskPillar.position.y = 0.44;
    deskGroup.add(deskPillar);

    const deskGoldBelt = new THREE.Mesh(
      new THREE.BoxGeometry(0.89, 0.05, 0.56),
      this.materials.bronzeGold
    );
    deskGoldBelt.position.y = 0.86;
    deskGroup.add(deskGoldBelt);

    // Mặt bàn nghiêng bọc nhung xanh navy
    const deskTop = new THREE.Group();
    deskTop.position.set(0, 0.94, 0);
    deskTop.rotation.x = 0.24;

    const deskBoard = new THREE.Mesh(
      new THREE.BoxGeometry(1.05, 0.06, 0.72),
      this.materials.bronzeGold
    );
    deskTop.add(deskBoard);

    const deskVelvet = new THREE.Mesh(
      new THREE.BoxGeometry(0.98, 0.025, 0.64),
      this.materials.navyPanel
    );
    deskVelvet.position.y = 0.025;
    deskTop.add(deskVelvet);

    // Cuộn Giấy Điệp Vàng / Sổ Vàng Tri Ân Cây Đa
    const paperCanvas = document.createElement('canvas');
    paperCanvas.width = 512;
    paperCanvas.height = 384;
    const pCtx = paperCanvas.getContext('2d');
    const pGrad = pCtx.createLinearGradient(0, 0, 512, 384);
    pGrad.addColorStop(0, '#fff9df');
    pGrad.addColorStop(0.5, '#f6e2ab');
    pGrad.addColorStop(1, '#e4c378');
    pCtx.fillStyle = pGrad;
    pCtx.fillRect(0, 0, 512, 384);

    pCtx.strokeStyle = '#8a1c21';
    pCtx.lineWidth = 8;
    pCtx.strokeRect(14, 14, 484, 356);

    pCtx.fillStyle = '#8a1c21';
    pCtx.font = 'bold 28px "Cormorant Garamond", serif';
    pCtx.textAlign = 'center';
    pCtx.fillText('🌳 CÂY ĐA TRI ÂN NHÀ GIÁO', 256, 72);

    pCtx.fillStyle = '#14263f';
    pCtx.font = 'bold 22px "Be Vietnam Pro", sans-serif';
    pCtx.fillText('BẤM VÀO ĐÂY ĐỂ GỬI LỜI TRI ÂN', 256, 120);

    pCtx.fillStyle = '#5a3811';
    pCtx.font = 'italic 19px "Cormorant Garamond", serif';
    pCtx.fillText('“Mỗi lời chúc là một đóa hoa thơm kính dâng Thầy Cô”', 256, 210);
    pCtx.fillText('Gắn thiệp phát sáng lên Cây Đa Tri Ân', 256, 330);

    const paperTex = new THREE.CanvasTexture(paperCanvas);
    const scrollPaper = new THREE.Mesh(
      new THREE.BoxGeometry(0.64, 0.018, 0.46),
      new THREE.MeshStandardMaterial({ map: paperTex, roughness: 0.4 })
    );
    scrollPaper.position.set(-0.12, 0.045, 0.02);
    deskTop.add(scrollPaper);

    // Bút lông vàng & nghiên mực
    const inkstone = new THREE.Mesh(
      new THREE.BoxGeometry(0.16, 0.035, 0.22),
      this.materials.blueStone
    );
    inkstone.position.set(0.32, 0.045, 0.06);
    deskTop.add(inkstone);

    const penRest = new THREE.Mesh(
      new THREE.BoxGeometry(0.12, 0.04, 0.03),
      this.materials.bronzeGold
    );
    penRest.position.set(0.32, 0.045, -0.12);
    deskTop.add(penRest);

    deskGroup.add(deskTop);

    // Biển đồng mặt trước bục: "🌳 BỤC GỬI LỜI TRI ÂN — CÂY ĐA NHÀ GIÁO"
    const frontSignTex = this.createTextPlaqueTexture({
      title: '🌳 BỤC GỬI LỜI TRI ÂN — CÂY ĐA NHÀ GIÁO',
      subtitle: 'Bấm vào bục này để gửi lời tri ân treo lên Cây Đa',
      quote: '',
      width: 1024,
      height: 280
    });
    const frontSign = new THREE.Mesh(
      new THREE.PlaneGeometry(0.82, 0.22),
      new THREE.MeshBasicMaterial({ map: frontSignTex })
    );
    frontSign.position.set(0, 0.52, 0.27);
    deskGroup.add(frontSign);

    // Hitbox rộng quanh bục để người xem click cực nhạy
    const deskHitbox = new THREE.Mesh(
      new THREE.BoxGeometry(1.30, 1.40, 1.05),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.001, depthWrite: false })
    );
    deskHitbox.position.y = 0.70;
    deskGroup.add(deskHitbox);

    const deskMeta = {
      isWriteTributeDesk: true,
      artifactId: 'art-wishing-tree',
      isBanyanDesk: true
    };
    deskGroup.userData = deskMeta;
    deskGroup.traverse((c) => {
      c.userData = deskMeta;
    });

    this.interactables.push(deskGroup);
    treeGroup.add(deskGroup);

    // 8. ĐÈN RỌI MỀM (SOFT SPOTLIGHT) TỪ ĐỈNH VÒM TRẦN CHIẾU XUỐNG TÂM CÂY ĐA
    const banyanSpot = new THREE.SpotLight(0xfff3df, 3.8, 16, 0.40, 0.85, 1.2);
    banyanSpot.position.set(centerX, 7.6, centerZ);
    banyanSpot.target.position.set(centerX, 1.6, centerZ);
    banyanSpot.castShadow = false;
    parent.add(banyanSpot);
    parent.add(banyanSpot.target);

    // Điểm sáng vàng ấm dịu bao trùm
    const treeLight = new THREE.PointLight(0xffecd1, 1.8, 14, 1.4);
    treeLight.position.set(0, 3.8, 0);
    treeGroup.add(treeLight);

    // Đăng ký hoạt ảnh xoay 360 độ cực êm cho tán cây
    this.animatedObjects.push({
      mesh: rotatingCanopy,
      rotateY: 0.10
    });

    
    // ==================== 4b. 2 CÂY BONSAI PHA LÊ LẤP LÁNH ĐỐI XỨNG 2 BÊN CÂY ĐA TRI ÂN ====================
    // Tạo điểm nhấn tiền cảnh lung linh, sang trọng bậc nhất hai bên vòm đại thụ
    const createMiniCrystalBonsai = (offsetX, offsetZ, treeRotY) => {
      const bonsaiG = new THREE.Group();
      bonsaiG.position.set(offsetX, 0.16, offsetZ);
      bonsaiG.rotation.y = treeRotY;

      // 1. Chậu đế cẩm thạch trắng viền đồng mạ vàng
      const potBase = new THREE.Mesh(
        new THREE.CylinderGeometry(0.52, 0.62, 0.18, 24),
        this.materials.plinthStone
      );
      potBase.position.y = 0.09;
      bonsaiG.add(potBase);

      const potTrim = new THREE.Mesh(
        new THREE.TorusGeometry(0.53, 0.025, 8, 32),
        this.materials.bronzeGold
      );
      potTrim.rotation.x = Math.PI / 2;
      potTrim.position.y = 0.18;
      bonsaiG.add(potTrim);

      // Thân bonsai bằng đồng mạ vàng uốn lượn nghệ thuật
      const trunkCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0.18, 0),
        new THREE.Vector3(0.08, 0.65, 0.05),
        new THREE.Vector3(-0.12, 1.15, -0.04),
        new THREE.Vector3(0.05, 1.55, 0.02)
      ]);
      const trunkGeo = new THREE.TubeGeometry(trunkCurve, 20, 0.042, 8, false);
      const trunkMesh = new THREE.Mesh(trunkGeo, this.materials.bronzeGold);
      bonsaiG.add(trunkMesh);

      // Tán bonsai xoay 360 độ êm ái
      const bonsaiCanopy = new THREE.Group();
      bonsaiCanopy.position.set(0.05, 1.55, 0.02);

      // 12 Cành nhánh vươn xòe mềm mại
      for (let b = 0; b < 12; b++) {
        const bAngle = (b / 12) * Math.PI * 2;
        const bReach = 0.65 + (b % 3) * 0.14;
        const bY = 0.08 + (b % 2) * 0.08;

        const bBranch = new THREE.Mesh(
          new THREE.CylinderGeometry(0.012, 0.024, bReach, 6),
          this.materials.brightGold
        );
        bBranch.position.set(Math.cos(bAngle) * (bReach / 2), bY + 0.12, Math.sin(bAngle) * (bReach / 2));
        bBranch.rotation.z = -Math.cos(bAngle) * 1.05;
        bBranch.rotation.x = Math.sin(bAngle) * 1.05;
        bonsaiCanopy.add(bBranch);

        // Lá pha lê kim cương phát sáng
        const crystalLeaf = new THREE.Mesh(
          new THREE.OctahedronGeometry(0.075, 0),
          crystalLeafMat
        );
        crystalLeaf.scale.set(0.85, 1.4, 0.4);
        crystalLeaf.position.set(Math.cos(bAngle) * bReach, bY + 0.22, Math.sin(bAngle) * bReach);
        bonsaiCanopy.add(crystalLeaf);

        // Tinh cầu mini buông nhẹ
        const isCyan = b % 2 === 0;
        const miniOrb = new THREE.Mesh(
          new THREE.SphereGeometry(0.045, 12, 12),
          isCyan ? cyanOrbMat : goldMirrorOrbMat
        );
        miniOrb.position.set(Math.cos(bAngle) * (bReach * 0.85), bY - 0.08, Math.sin(bAngle) * (bReach * 0.85));
        bonsaiCanopy.add(miniOrb);
      }

      // Đỉnh ngọn bonsai: Búp sen pha lê phát sáng
      const crown = new THREE.Mesh(new THREE.OctahedronGeometry(0.14, 0), crystalLeafMat);
      crown.scale.set(0.85, 1.45, 0.85);
      crown.position.y = 0.32;
      bonsaiCanopy.add(crown);

      // Đám mây 200 hạt sao lấp lánh mini
      const miniStarCount = 200;
      const miniStarPos = new Float32Array(miniStarCount * 3);
      const miniStarCol = new Float32Array(miniStarCount * 3);
      for (let s = 0; s < miniStarCount; s++) {
        const theta = s * 2.4;
        const r = 0.25 + Math.random() * 0.65;
        miniStarPos[s * 3] = r * Math.cos(theta);
        miniStarPos[s * 3 + 1] = 0.05 + Math.random() * 0.55;
        miniStarPos[s * 3 + 2] = r * Math.sin(theta);
        const col = starPalette[s % starPalette.length];
        miniStarCol[s * 3] = col.r;
        miniStarCol[s * 3 + 1] = col.g;
        miniStarCol[s * 3 + 2] = col.b;
      }
      const miniStarGeo = new THREE.BufferGeometry();
      miniStarGeo.setAttribute('position', new THREE.BufferAttribute(miniStarPos, 3));
      miniStarGeo.setAttribute('color', new THREE.BufferAttribute(miniStarCol, 3));
      const miniStarPoints = new THREE.Points(miniStarGeo, this.banyanStarMaterial);
      miniStarPoints.raycast = () => {};
      bonsaiCanopy.add(miniStarPoints);

      // Đèn PointLight vàng ấm dịu
      const miniLight = new THREE.PointLight(0xffdf99, 1.2, 8, 1.5);
      miniLight.position.set(0, 0.3, 0);
      bonsaiCanopy.add(miniLight);

      bonsaiG.add(bonsaiCanopy);

      this.animatedObjects.push({
        mesh: bonsaiCanopy,
        rotateY: 0.15
      });

      return bonsaiG;
    };

    // Đặt 2 cây Bonsai Pha Lê đối xứng 2 bên trái & phải của bục Cây Đa Tri Ân
    const leftBonsai = createMiniCrystalBonsai(-5.5, 0.8, 0.35);
    const rightBonsai = createMiniCrystalBonsai(5.5, 0.8, -0.35);
    treeGroup.add(leftBonsai);
    treeGroup.add(rightBonsai);

    parent.add(treeGroup);
  }



  // =========================================================================
  // BỨC TƯỜNG KÝ ỨC SỐ — SÁNG MÃI ƠN THẦY (DIGITAL TOUCH KIOSK / TOTEM)
  // Màn hình cảm ứng chân đứng thanh mảnh, sang trọng đặt nép sát cột gỗ sảnh chính
  // Giải phóng hoàn toàn lối đi vào phòng "Lịch sử phát triển giáo dục Việt Nam"
  // Hiển thị 6 ảnh chân dung thực tế tiêu biểu & Chạm vào bất kỳ điểm nào để mở Thư Viện Ký Ức
  // =========================================================================
  buildDigitalMemoryWall(parent) {
    const kioskGroup = new THREE.Group();
    // Bố cục lại nép gọn bên cột song song với mép thảm (X = -8.8, Y = 1.33, Z = 4.8, xoay song song mép lối đi PI/2)
    // Cách xa lối vào phòng Lịch Sử và hoàn toàn không đè lên điểm tương tác hotspot (X = -9.5, Z = 0)
    kioskGroup.position.set(-8.8, 1.33, 4.8);
    kioskGroup.rotation.y = Math.PI / 2;
    kioskGroup.name = 'digital-memory-totem-group';

    const totemW = 1.55;
    const totemH = 2.65;
    const totemD = 0.16;

    const totemMeta = {
      isMemoryTotem: true,
      isMemoryWall: true,
      isMemoryOpenLibraryBtn: true,
      title: 'Bức tường Ký ức — Sáng mãi ơn thầy'
    };

    // 1. Chân đế gỗ Dark Walnut viền đồng kim champagne
    const baseMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1.72, 0.14, 0.58),
      this.materials.naturalWood
    );
    baseMesh.position.y = -totemH / 2 + 0.07;
    baseMesh.userData = totemMeta;
    kioskGroup.add(baseMesh);
    this.interactables.push(baseMesh);

    const baseTrim = new THREE.Mesh(
      new THREE.BoxGeometry(1.76, 0.04, 0.62),
      this.materials.bronzeGold
    );
    baseTrim.position.y = -totemH / 2 + 0.02;
    baseTrim.userData = totemMeta;
    kioskGroup.add(baseTrim);
    this.interactables.push(baseTrim);

    // 2. Thân Totem Kiosk hợp kim titan viền phào chỉ vàng kim
    const casingMat = new THREE.MeshStandardMaterial({
      color: 0x0f1826,
      roughness: 0.35,
      metalness: 0.8
    });
    const bodyMesh = new THREE.Mesh(
      new THREE.BoxGeometry(totemW, totemH - 0.14, totemD),
      casingMat
    );
    bodyMesh.position.y = 0.07;
    bodyMesh.userData = totemMeta;
    kioskGroup.add(bodyMesh);
    this.interactables.push(bodyMesh);

    // Viền kim loại mạ vàng bao quanh màn hình
    const goldRim = new THREE.Mesh(
      new THREE.BoxGeometry(totemW + 0.06, totemH - 0.08, totemD - 0.02),
      this.materials.bronzeGold
    );
    goldRim.position.y = 0.07;
    goldRim.userData = totemMeta;
    kioskGroup.add(goldRim);
    this.interactables.push(goldRim);

    // 3. Màn hình cảm ứng lớn 4K dọc với 6 ảnh chân dung thực tế
    const screenW = 1.44;
    const screenH = 2.38;

    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 1440;
    screenCanvas.height = 2200;
    const screenTex = new THREE.CanvasTexture(screenCanvas);
    screenTex.anisotropy = 4;
    this.memoryKioskScreenTex = screenTex;

    const screenMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(screenW, screenH),
      new THREE.MeshBasicMaterial({ map: screenTex })
    );
    screenMesh.position.set(0, 0.07, totemD / 2 + 0.005);
    screenMesh.userData = totemMeta;
    kioskGroup.add(screenMesh);
    this.interactables.push(screenMesh);

    // 4. Hitbox vô hình bao phủ toàn diện mặt trước và các cạnh Kiosk để click trúng 100%
    const hitbox = new THREE.Mesh(
      new THREE.BoxGeometry(totemW + 0.25, totemH + 0.2, 0.45),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.001, depthWrite: false })
    );
    hitbox.position.set(0, 0.07, 0.12);
    hitbox.userData = totemMeta;
    kioskGroup.add(hitbox);
    this.interactables.push(hitbox);

    // 5. Đèn Spotlight dịu dàng từ trần rọi xuống Kiosk
    const spot = new THREE.SpotLight(0xfff2d4, 2.4, 8, Math.PI / 4, 0.6, 1.2);
    spot.position.set(0, totemH / 2 + 1.2, 1.4);
    spot.target.position.set(0, 0, 0);
    kioskGroup.add(spot);
    kioskGroup.add(spot.target);

    this.memoryWallGroup = kioskGroup;
    parent.add(kioskGroup);

    // 6. Vẽ toàn bộ nội dung đồ họa màn hình cảm ứng Kiosk với 6 ảnh chân dung thực tế
    this.renderMemoryTotemScreen(screenCanvas, screenTex);

    // 7. Điểm đứng tham quan trên sàn (Waypoint)
    const memWpTex = this.createDirectionalMarkerTexture({
      icon: '🖼️',
      action: 'CHẠM ĐỂ MỞ THƯ VIỆN',
      title: 'BỨC TƯỜNG KÝ ỨC — SÁNG MÃI ƠN THẦY',
      subtitle: 'Trạm cảm ứng tra cứu ảnh tư liệu phục dựng & Đóng góp tác phẩm',
      bg: '#142848',
      ringColor: '#ffd700'
    });
    const wpMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(2.2, 1.1),
      new THREE.MeshBasicMaterial({ map: memWpTex, transparent: true, opacity: 0.95 })
    );
    wpMesh.rotation.x = -Math.PI / 2;
    wpMesh.position.set(-8.0, 0.035, 4.2);
    const wpMeta = {
      isWaypoint: true,
      targetZoneId: 'rotunda',
      customPos: { x: -7.8, y: 1.8, z: 4.2 },
      customLookAt: { x: -9.2, y: 1.5, z: 4.2 }
    };
    wpMesh.userData = wpMeta;
    this.interactables.push(wpMesh);
    parent.add(wpMesh);
  }

  // Vẽ giao diện màn hình cảm ứng Kiosk Ký Ức với 6 ảnh chân dung thực tế
  renderMemoryTotemScreen(canvas, texture) {
    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;

    // 1. Nền chuyển sắc Deep Sapphire trang trọng
    const bgGrad = ctx.createLinearGradient(0, 0, W, H);
    bgGrad.addColorStop(0, '#060d18');
    bgGrad.addColorStop(0.3, '#10223d');
    bgGrad.addColorStop(0.7, '#0c1a2e');
    bgGrad.addColorStop(1, '#050a12');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // Viền khung đôi vàng kim 24K quanh màn hình
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 6;
    ctx.strokeRect(18, 18, W - 36, H - 36);

    ctx.strokeStyle = '#c5a059';
    ctx.lineWidth = 2;
    ctx.strokeRect(28, 28, W - 56, H - 56);

    // Góc hoa văn viền vàng
    const drawCorner = (cx, cy, dx, dy) => {
      ctx.strokeStyle = '#ffd700';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(cx, cy + dy * 40);
      ctx.lineTo(cx, cy);
      ctx.lineTo(cx + dx * 40, cy);
      ctx.stroke();
    };
    drawCorner(38, 38, 1, 1);
    drawCorner(W - 38, 38, -1, 1);
    drawCorner(38, H - 38, 1, -1);
    drawCorner(W - 38, H - 38, -1, -1);

    // 2. HEADER: TIÊU ĐỀ CHỮ VÀNG ĐỒNG
    // Huy hiệu nhỏ
    ctx.fillStyle = '#102a45';
    ctx.fillRect(W / 2 - 260, 52, 520, 36);
    ctx.strokeStyle = '#c5a059';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(W / 2 - 260, 52, 520, 36);
    ctx.fillStyle = '#cbd5e1';
    ctx.font = 'bold 15px "Be Vietnam Pro", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🏛️ BẢO TÀNG SỐ NHÀ GIÁO VIỆT NAM • KHÔNG GIAN TRI ÂN', W / 2, 76);

    // Tiêu đề chính
    const titleGrad = ctx.createLinearGradient(W / 2 - 400, 0, W / 2 + 400, 0);
    titleGrad.addColorStop(0, '#fef08a');
    titleGrad.addColorStop(0.5, '#ffd700');
    titleGrad.addColorStop(1, '#eab308');
    ctx.fillStyle = titleGrad;
    ctx.font = 'bold 50px "Cormorant Garamond", Georgia, serif';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    ctx.shadowBlur = 12;
    ctx.fillText('BỨC TƯỜNG KÝ ỨC — SÁNG MÃI ƠN THẦY', W / 2, 145);
    ctx.shadowBlur = 0;

    // Phụ đề
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '20px "Be Vietnam Pro", sans-serif';
    ctx.fillText('Không gian tôn vinh & đóng góp ảnh tư liệu Nhà giáo của học sinh cả nước', W / 2, 192);

    // Đường kẻ phân cách vàng kim
    ctx.strokeStyle = 'rgba(255, 215, 0, 0.5)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(W / 2 - 450, 222);
    ctx.lineTo(W / 2 + 450, 222);
    ctx.stroke();

    // 3. DANH SÁCH 6 KHUNG ẢNH CHÂN DUNG THỰC TẾ (2 CỘT x 3 HÀNG)
    const featuredTeachers = [
      {
        name: 'GS. ĐẶNG THAI MAI',
        sub: 'Viện trưởng Viện Văn học (1902–1984)',
        student: 'Nguyễn Hoàng Nam & Nhóm Ký Ức Số',
        school: 'THPT Chuyên Chu Văn An • Hà Nội',
        tag: 'Kháng chiến 1950',
        src: 'assets/ministers/Giáo sư Đặng Thai Mai.jpg'
      },
      {
        name: 'GS. TẠ QUANG BỬU',
        sub: 'Bộ trưởng Bộ ĐH & THCN (1910–1986)',
        student: 'Lê Bảo Châu (K65 Sư phạm Toán)',
        school: 'ĐH Sư Phạm Hà Nội',
        tag: 'Chiến khu 1968',
        src: 'assets/ministers/Giáo sư Tạ Quang Bửu.jpg'
      },
      {
        name: 'BÀ NGUYỄN THỊ BÌNH',
        sub: 'Bộ trưởng Bộ Giáo dục (1976–1987)',
        student: 'Trần Thị Thu Trang (11 Anh 1)',
        school: 'THPT Chuyên Lê Hồng Phong • TP.HCM',
        tag: 'Thống nhất 1976',
        src: 'assets/ministers/Bà Nguyễn Thị Bình.jpg'
      },
      {
        name: 'THẦY VÕ NGUYÊN GIÁP',
        sub: 'Thầy giáo dạy Sử trường Thăng Long',
        student: 'Chi đoàn 12 Sử • Chuyên Phan Bội Châu',
        school: 'THPT Chuyên Phan Bội Châu • Nghệ An',
        tag: 'Thăng Long 1936',
        src: 'assets/teacher/dt_31_vo_nguyen_giap.jpg'
      },
      {
        name: 'THẦY CHU VĂN AN',
        sub: 'Vạn thế sư biểu • Hiệu trưởng Quốc Tử Giám',
        student: 'CLB Hội Họa & Đồ Họa Cổ Trang',
        school: 'THPT Chu Văn An • Hà Nội',
        tag: 'Quốc Tử Giám',
        src: 'assets/teacher/dt_23_luong_van_can.jpg'
      },
      {
        name: 'THẦY NGUYỄN TẤT THÀNH',
        sub: 'Thầy giáo trường Dục Thanh (1910)',
        student: 'Lê Thanh Bình & Nhóm Sử Học Trẻ',
        school: 'THPT Chuyên Phan Thiết • Bình Thuận',
        tag: 'Dục Thanh 1910',
        src: 'assets/teacher/dt_26_nguyen_tat_thanh.jpg'
      }
    ];

    const cardW = 620;
    const cardH = 410;
    const startX = 75;
    const gapX = 50;
    const startY = 255;
    const gapY = 32;

    featuredTeachers.forEach((item, idx) => {
      const col = idx % 2;
      const row = Math.floor(idx / 2);
      const cx = startX + col * (cardW + gapX);
      const cy = startY + row * (cardH + gapY);

      // Nền card bo tròn
      const cardGrad = ctx.createLinearGradient(cx, cy, cx + cardW, cy + cardH);
      cardGrad.addColorStop(0, '#101d33');
      cardGrad.addColorStop(1, '#091220');
      ctx.fillStyle = cardGrad;
      this.drawRoundedRect(ctx, cx, cy, cardW, cardH, 12);
      ctx.fill();

      // Viền card vàng đồng mờ
      ctx.strokeStyle = 'rgba(255, 215, 0, 0.35)';
      ctx.lineWidth = 1.5;
      this.drawRoundedRect(ctx, cx, cy, cardW, cardH, 12);
      ctx.stroke();

      // Khung ảnh chân dung bên trái (230px x 360px)
      const photoX = cx + 22;
      const photoY = cy + 25;
      const photoW = 230;
      const photoH = 360;

      // Nền ảnh ban đầu với bóng chân dung cổ điển studio
      const pGrad = ctx.createLinearGradient(photoX, photoY, photoX, photoY + photoH);
      pGrad.addColorStop(0, '#1c2b42');
      pGrad.addColorStop(1, '#09121f');
      ctx.fillStyle = pGrad;
      ctx.fillRect(photoX, photoY, photoW, photoH);

      // Vẽ phác họa chân dung studio ấm áp tức thì
      ctx.fillStyle = 'rgba(255, 215, 0, 0.12)';
      ctx.beginPath();
      ctx.arc(photoX + photoW / 2, photoY + 120, 52, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(255, 215, 0, 0.15)';
      ctx.beginPath();
      ctx.moveTo(photoX + 25, photoY + photoH);
      ctx.quadraticCurveTo(photoX + photoW / 2, photoY + 175, photoX + photoW - 25, photoY + photoH);
      ctx.closePath();
      ctx.fill();

      // Ảnh chân dung thực tế
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        ctx.save();
        ctx.beginPath();
        ctx.rect(photoX, photoY, photoW, photoH);
        ctx.clip();
        const aspect = img.width / img.height;
        const targetAspect = photoW / photoH;
        let dw = photoW;
        let dh = photoH;
        let dx = photoX;
        let dy = photoY;
        if (aspect > targetAspect) {
          dw = photoH * aspect;
          dx = photoX - (dw - photoW) / 2;
        } else {
          dh = photoW / aspect;
          dy = photoY - (dh - photoH) / 2;
        }
        ctx.drawImage(img, dx, dy, dw, dh);
        ctx.restore();

        // Viền ảnh & tag
        ctx.strokeStyle = '#c5a059';
        ctx.lineWidth = 2.5;
        ctx.strokeRect(photoX, photoY, photoW, photoH);

        // Tag tư liệu ảnh
        ctx.fillStyle = 'rgba(10, 35, 60, 0.9)';
        ctx.fillRect(photoX + 6, photoY + 6, 160, 26);
        ctx.fillStyle = '#ffd700';
        ctx.font = 'bold 12px "Be Vietnam Pro", sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText('🏛️ ẢNH TƯ LIỆU NHÀ GIÁO', photoX + 12, photoY + 24);

        if (texture) texture.needsUpdate = true;
      };
      img.src = item.src;

      // Khung ảnh viền vàng
      ctx.strokeStyle = '#c5a059';
      ctx.lineWidth = 2.5;
      ctx.strokeRect(photoX, photoY, photoW, photoH);

      // Tag tư liệu ban đầu
      ctx.fillStyle = 'rgba(10, 35, 60, 0.9)';
      ctx.fillRect(photoX + 6, photoY + 6, 160, 26);
      ctx.fillStyle = '#ffd700';
      ctx.font = 'bold 12px "Be Vietnam Pro", sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('🏛️ ẢNH TƯ LIỆU NHÀ GIÁO', photoX + 12, photoY + 24);

      // Cột nội dung thông tin bên phải
      const textX = photoX + photoW + 22;
      const textMaxW = cardW - photoW - 55;

      // Tag thời kỳ nhỏ
      ctx.fillStyle = '#1e385c';
      ctx.fillRect(textX, cy + 30, 160, 24);
      ctx.strokeStyle = '#60a5fa';
      ctx.lineWidth = 1;
      ctx.strokeRect(textX, cy + 30, 160, 24);
      ctx.fillStyle = '#93c5fd';
      ctx.font = 'bold 12px "Be Vietnam Pro", sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(item.tag, textX + 10, cy + 46);

      // Tên Thầy Cô
      ctx.fillStyle = '#ffd700';
      ctx.font = 'bold 26px "Cormorant Garamond", Georgia, serif';
      this.drawFittedText(ctx, item.name, textX, cy + 90, textMaxW, 26, '"Cormorant Garamond", serif', 'bold');

      // Chức danh
      ctx.fillStyle = '#94a3b8';
      ctx.font = 'italic 15px "Be Vietnam Pro", sans-serif';
      this.drawFittedText(ctx, item.sub, textX, cy + 122, textMaxW, 15);

      // Đường kẻ chỉ mạ vàng
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.35)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(textX, cy + 145);
      ctx.lineTo(textX + textMaxW, cy + 145);
      ctx.stroke();

      // Thông tin học sinh phục dựng
      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 14px "Be Vietnam Pro", sans-serif';
      ctx.fillText('Người gửi đóng góp:', textX, cy + 175);

      ctx.fillStyle = '#38bdf8';
      this.drawFittedText(ctx, item.student, textX, cy + 204, textMaxW, 16, '"Be Vietnam Pro", sans-serif', 'bold');

      ctx.fillStyle = '#cbd5e1';
      ctx.font = '14px "Be Vietnam Pro", sans-serif';
      this.drawFittedText(ctx, item.school, textX, cy + 232, textMaxW, 14);

      // Nút xem chi tiết tượng trưng
      ctx.fillStyle = 'rgba(201, 158, 82, 0.2)';
      ctx.fillRect(textX, cy + 290, textMaxW, 46);
      ctx.strokeStyle = '#ffd700';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(textX, cy + 290, textMaxW, 46);

      ctx.fillStyle = '#ffd700';
      ctx.font = 'bold 15px "Be Vietnam Pro", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('🔍 Xem Chi Tiết & Tri Ân ➜', textX + textMaxW / 2, cy + 319);
    });

    // 4. FOOTER: DÒNG CHỮ PHÁT SÁNG MỜI GỌI
    const footY = H - 195;
    const footH = 125;

    // Nền nút bấm phát sáng lớn
    const footGrad = ctx.createLinearGradient(0, footY, 0, footY + footH);
    footGrad.addColorStop(0, '#c59a3f');
    footGrad.addColorStop(0.5, '#ffd700');
    footGrad.addColorStop(1, '#c59a3f');
    ctx.fillStyle = footGrad;
    this.drawRoundedRect(ctx, 45, footY, W - 90, footH, 16);
    ctx.fill();

    ctx.strokeStyle = '#fff5ba';
    ctx.lineWidth = 4;
    this.drawRoundedRect(ctx, 45, footY, W - 90, footH, 16);
    ctx.stroke();

    // Dòng chữ phát sáng mời gọi theo đúng yêu cầu người dùng
    ctx.fillStyle = '#0b1626';
    ctx.font = 'bold 36px "Be Vietnam Pro", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('[ 👆 CHẠM ĐỂ XEM TẤT CẢ & ĐÓNG GÓP ẢNH ]', W / 2, footY + 54);

    ctx.fillStyle = '#1e293b';
    ctx.font = 'bold 20px "Be Vietnam Pro", sans-serif';
    ctx.fillText('Kho tư liệu ảnh nhà giáo • Tôn vinh & Đóng góp ảnh Thầy Cô giáo cả nước', W / 2, footY + 95);

    if (texture) texture.needsUpdate = true;
  }

  // Helper vẽ hình chữ nhật bo góc
  drawRoundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  // Tạo biển hoành phi mạ vàng sơn son thếp vàng cho mái ngói cổ
  createAncientSignTexture(text = 'VẠN THẾ SƯ BIỂU') {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    // Nền sơn son thếp vàng đỏ thẫm quý phái (#4a0e12)
    const grad = ctx.createLinearGradient(0, 0, 1024, 0);
    grad.addColorStop(0, '#36090c');
    grad.addColorStop(0.5, '#5c1218');
    grad.addColorStop(1, '#36090c');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 256);

    // Viền chỉ vàng kép hoàng cung
    ctx.strokeStyle = '#e6c173';
    ctx.lineWidth = 10;
    ctx.strokeRect(16, 16, 992, 224);

    ctx.strokeStyle = '#9c7530';
    ctx.lineWidth = 4;
    ctx.strokeRect(32, 32, 960, 192);

    // Hoa văn 4 góc
    ctx.fillStyle = '#ffd700';
    [[45, 45], [979, 45], [45, 211], [979, 211]].forEach(([cx, cy]) => {
      ctx.beginPath();
      ctx.arc(cx, cy, 8, 0, Math.PI * 2);
      ctx.fill();
    });

    // Chữ thếp vàng lộng lẫy
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 84px "Playfair Display", "Times New Roman", serif';
    ctx.shadowColor = '#000000';
    ctx.shadowBlur = 12;
    ctx.fillStyle = '#ffecb3';
    ctx.fillText(text, 512, 128);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }


  // ==================== BỤC KÍNH HIỆN VẬT 3D (DISPLAY VITRINES) ====================
  createDisplayVitrine(parent, x, z, title, era, type) {
    const vG = new THREE.Group();
    vG.position.set(x, 0, z);

    // 1. Chân đế gỗ tự nhiên 0.65m x 0.65m cao 0.85m
    const baseMesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.72, 0.85, 0.72),
      this.materials.naturalWood
    );
    baseMesh.position.y = 0.425;
    baseMesh.castShadow = true;
    vG.add(baseMesh);

    const goldPlinthTrim = new THREE.Mesh(
      new THREE.BoxGeometry(0.74, 0.06, 0.74),
      this.materials.bronzeGold
    );
    goldPlinthTrim.position.y = 0.82;
    vG.add(goldPlinthTrim);

    const velvetPad = new THREE.Mesh(
      new THREE.BoxGeometry(0.64, 0.04, 0.64),
      this.materials.navyPanel
    );
    velvetPad.position.y = 0.87;
    vG.add(velvetPad);

    // 2. Chụp kính pha lê trong suốt cao 0.55m
    const glassHood = new THREE.Mesh(
      new THREE.BoxGeometry(0.66, 0.55, 0.66),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.05,
        metalness: 0.1,
        transparent: true,
        opacity: 0.28
      })
    );
    glassHood.position.y = 1.145;
    vG.add(glassHood);

    // 3. Mô hình cổ vật 3D tượng trưng bên trong
    const artifactSubGroup = new THREE.Group();
    artifactSubGroup.position.y = 0.92;

    if (type === 'bamboo-book') {
      for (let s = -0.15; s <= 0.15; s += 0.035) {
        const slat = new THREE.Mesh(
          new THREE.BoxGeometry(0.028, 0.008, 0.22),
          this.materials.naturalWood
        );
        slat.position.set(s, 0.006, 0);
        artifactSubGroup.add(slat);
      }
      const brush = new THREE.Mesh(
        new THREE.CylinderGeometry(0.008, 0.008, 0.24, 12),
        this.materials.naturalWood
      );
      brush.rotation.z = Math.PI / 4;
      brush.position.set(0.05, 0.04, 0.06);
      artifactSubGroup.add(brush);
    } else if (type === 'inkstone') {
      const inkStone = new THREE.Mesh(
        new THREE.CylinderGeometry(0.12, 0.13, 0.035, 24),
        this.materials.navyDeep
      );
      artifactSubGroup.add(inkStone);

      const inkStick = new THREE.Mesh(
        new THREE.BoxGeometry(0.035, 0.025, 0.14),
        new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.2 })
      );
      inkStick.rotation.y = 0.3;
      inkStick.position.set(0.04, 0.03, -0.02);
      artifactSubGroup.add(inkStick);
    } else if (type === 'seal-box') {
      const seal = new THREE.Mesh(
        new THREE.BoxGeometry(0.08, 0.12, 0.08),
        this.materials.bronzeGold
      );
      seal.position.set(0, 0.06, 0);
      artifactSubGroup.add(seal);
    } else {
      const lampBase = new THREE.Mesh(
        new THREE.CylinderGeometry(0.05, 0.065, 0.05, 16),
        this.materials.agedBronze
      );
      lampBase.position.y = 0.025;
      artifactSubGroup.add(lampBase);

      const lampGlass = new THREE.Mesh(
        new THREE.SphereGeometry(0.04, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0xfff0aa, transparent: true, opacity: 0.75, emissive: 0xffaa00, emissiveIntensity: 0.4 })
      );
      lampGlass.position.y = 0.085;
      artifactSubGroup.add(lampGlass);
    }
    vG.add(artifactSubGroup);

    // Bảng tên hiện vật gắn trước bục kính
    const tagMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(0.52, 0.14),
      new THREE.MeshBasicMaterial({ color: 0x081525 })
    );
    tagMesh.position.set(0, 0.65, 0.37);
    vG.add(tagMesh);

    parent.add(vG);
  }

  // ==================== ĐIỂM BƯỚC CHÂN TRÊN SÀN (FLOOR WAYPOINT) ====================
  createTeacherFloorWaypoint(parent, wp) {
    const wpG = new THREE.Group();
    wpG.position.set(wp.x, 0.015, wp.z);

    const discMesh = new THREE.Mesh(
      new THREE.RingGeometry(0.45, 0.75, 32),
      new THREE.MeshBasicMaterial({
        color: 0xffd700,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.85
      })
    );
    discMesh.rotation.x = -Math.PI / 2;
    wpG.add(discMesh);

    const centerDisc = new THREE.Mesh(
      new THREE.CircleGeometry(0.42, 32),
      new THREE.MeshBasicMaterial({
        color: 0x0e2038,
        side: THREE.DoubleSide
      })
    );
    centerDisc.rotation.x = -Math.PI / 2;
    wpG.add(centerDisc);

    const wpData = {
      isFloorStepWaypoint: true,
      waypointId: wp.id,
      targetPos: { x: wp.x, y: 1.6, z: wp.z },
      targetLookAt: { x: wp.lookX, y: 1.6, z: wp.lookZ },
      name: wp.name
    };
    wpG.userData = wpData;
    discMesh.userData = wpData;
    centerDisc.userData = wpData;

    this.interactables.push(wpG);
    parent.add(wpG);
  }
// ==================== PHÒNG 3: DỰNG 15 KHUNG ẢNH CHÂN DUNG THẬT CỦA 15 BỘ TRƯỞNG ====================
  
  // ==================== KIẾN TRÚC GIAN PHÒNG TRIỂN LÃM CHUYÊN ĐỀ ĐỘC LẬP: 15 BỘ TRƯỞNG ====================
  buildMinisterExhibitionArchitecture(parent, wallH) {
    const roomArch = new THREE.Group();
    roomArch.name = 'minister-exhibition-architecture';

    // 1. CỔNG VÒM THÔNG PHÒNG SANG TRỌNG (ARCHWAY PORTAL) TẠI X = 11.2, Z = 0
    // Cửa vòm rộng 5.8m (z từ -2.9 đến +2.9), cao 5.2m
    const portalW = 5.8;
    const portalH = 5.2;

    // Vách ngăn bên Bắc cổng (z từ -9.0 đến -2.9, dài 6.1m)
    this.createWall(roomArch, 11.2, wallH / 2, -5.95, 0.5, wallH, 6.1, this.materials.navyRoyalWall);
    // Vách ngăn bên Nam cổng (z từ +2.9 đến +9.0, dài 6.1m)
    this.createWall(roomArch, 11.2, wallH / 2, 5.95, 0.5, wallH, 6.1, this.materials.navyRoyalWall);
    // Vách trên đầu vòm cổng (từ y = 5.2 đến 7.8, cao 2.6m, rộng 5.8m)
    this.createWall(roomArch, 11.2, portalH + (wallH - portalH) / 2, 0, 0.5, wallH - portalH, portalW, this.materials.navyRoyalWall);

    // Hệ cột trụ gỗ & đồng viền ốp đồng bộ với Đại Sảnh hai bên cổng vòm
    [-2.95, 2.95].forEach((pz) => {
      // Đế đá
      const pBase = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.45, 0.85), this.materials.plinthStone);
      pBase.position.set(11.0, 0.225, pz);
      roomArch.add(pBase);

      const pBronzeBase = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.08, 0.78), this.materials.bronzeGold);
      pBronzeBase.position.set(11.0, 0.49, pz);
      roomArch.add(pBronzeBase);

      // Thân cột gỗ tròn chạm chỉ vàng
      const pCol = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.35, portalH - 0.9, 16), this.materials.naturalWood);
      pCol.position.set(11.0, portalH / 2 + 0.1, pz);
      pCol.castShadow = true;
      roomArch.add(pCol);

      // Đầu cột đồng chạm khắc hoàng gia
      const pCap = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.35, 0.82), this.materials.bronzeGold);
      pCap.position.set(11.0, portalH - 0.18, pz);
      roomArch.add(pCap);
    });

    // Dầm vòm gỗ bo cong nối 2 trụ cột cổng
    const archLintel = new THREE.Mesh(
      new THREE.BoxGeometry(0.75, 0.55, portalW + 0.7),
      this.materials.naturalWood
    );
    archLintel.position.set(11.0, portalH + 0.25, 0);
    roomArch.add(archLintel);

    const archGoldTrim = new THREE.Mesh(
      new THREE.BoxGeometry(0.78, 0.08, portalW + 0.74),
      this.materials.bronzeGold
    );
    archGoldTrim.position.set(11.0, portalH + 0.55, 0);
    roomArch.add(archGoldTrim);

    // BIỂN HIỆU CỔNG VÒM (HƯỚNG RA ĐẠI SẢNH - NHÌN TỪ TÂY SANG ĐÔNG)
    const archSignGroup = new THREE.Group();
    archSignGroup.position.set(10.92, 6.25, 0);
    archSignGroup.rotation.y = -Math.PI / 2;

    const signFrame = new THREE.Mesh(
      new THREE.BoxGeometry(5.4, 1.25, 0.12),
      this.materials.bronzeGold
    );
    archSignGroup.add(signFrame);

    const signBoardTex = this.createArchwaySignTexture();
    const signBoard = new THREE.Mesh(
      new THREE.PlaneGeometry(5.2, 1.08),
      new THREE.MeshBasicMaterial({ map: signBoardTex })
    );
    signBoard.position.z = 0.065;
    archSignGroup.add(signBoard);
    roomArch.add(archSignGroup);

    // 2. SÀN ĐÁ CẨM THẠCH XÁM/ĐEN BÓNG (ROUGHNESS 0.25)
    // Trải dài từ X = 11.2 đến X = 34.2 (dài 23.0m), Z từ -9.0 đến +9.0 (rộng 18.0m)
    const marbleFloor = new THREE.Mesh(
      new THREE.PlaneGeometry(23.2, 18.2),
      this.materials.glossyDarkMarble
    );
    marbleFloor.rotation.x = -Math.PI / 2;
    marbleFloor.position.set(22.7, 0.003, 0);
    marbleFloor.receiveShadow = true;
    marbleFloor.name = 'museum-floor';
    roomArch.add(marbleFloor);

    // Viền chỉ vàng thếp viền quanh sàn phòng triển lãm
    const floorBorderCanvas = document.createElement('canvas');
    floorBorderCanvas.width = 1024;
    floorBorderCanvas.height = 1024;
    const fbCtx = floorBorderCanvas.getContext('2d');
    fbCtx.clearRect(0, 0, 1024, 1024);
    fbCtx.strokeStyle = 'rgba(212, 175, 55, 0.65)';
    fbCtx.lineWidth = 14;
    fbCtx.strokeRect(40, 40, 944, 944);
    fbCtx.strokeStyle = 'rgba(255, 235, 160, 0.45)';
    fbCtx.lineWidth = 4;
    fbCtx.strokeRect(60, 60, 904, 904);
    const floorBorderTex = new THREE.CanvasTexture(floorBorderCanvas);
    const floorBorderMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(21.8, 16.8),
      new THREE.MeshBasicMaterial({ map: floorBorderTex, transparent: true })
    );
    floorBorderMesh.rotation.x = -Math.PI / 2;
    floorBorderMesh.position.set(22.7, 0.006, 0);
    roomArch.add(floorBorderMesh);

    // 3. HỆ TRẦN MÁI VÒM HOÀNG GIA SANG TRỌNG (GRAND VAULTED CEILING) - ĐỒNG BỘ KIẾN TRÚC BẢO TÀNG
    const minRoomLenX = 23.2; // X từ 11.1 đến 34.3 (tâm X = 22.7)
    const minRoomWidZ = 18.0; // Z từ -9.0 đến +9.0 (tâm Z = 0)
    const vaultSegsX = 48;
    const vaultSegsZ = 64;
    const minVaultGeo = new THREE.PlaneGeometry(minRoomLenX, minRoomWidZ, vaultSegsX, vaultSegsZ);
    minVaultGeo.rotateX(-Math.PI / 2);

    // Uốn cong hình học thành mái vòm Parabol dọc trục Đông - Tây: Y(z) = 7.72 - (z / 9.0)^2 * 2.22
    // Đỉnh vòm cao 7.72m (nằm gọn dưới trần tổng 7.80m nên tuyệt đối không bao giờ nhấp nháy Z-fighting)
    const mvPos = minVaultGeo.attributes.position;
    for (let i = 0; i < mvPos.count; i++) {
      const vz = mvPos.getZ(i);
      const vy = 7.72 - Math.pow(vz / 9.0, 2) * 2.22;
      mvPos.setY(i, vy);
    }
    minVaultGeo.computeVertexNormals();

    const minVaultMat = new THREE.MeshStandardMaterial({
      color: 0xf5efe6, // Màu thạch cao hoàng gia trắng kem ấm sang trọng, tôn nổi bật vách Navy & khung vàng
      roughness: 0.62,
      metalness: 0.06,
      side: THREE.DoubleSide
    });
    const minVaultMesh = new THREE.Mesh(minVaultGeo, minVaultMat);
    minVaultMesh.position.set(22.7, 0, 0);
    minVaultMesh.receiveShadow = true;
    roomArch.add(minVaultMesh);

    // 7 SƯỜN VÒM CONG KIẾN TRÚC (ARCHITECTURAL VAULT RIBS) MẠ VÀNG KIM CHẠY QUA VÒM TRẦN
    const minRibMat = new THREE.MeshStandardMaterial({
      color: 0xc5a059,
      roughness: 0.32,
      metalness: 0.86
    });
    const minRibXList = [12.0, 15.5, 19.1, 22.7, 26.3, 29.9, 33.5];
    minRibXList.forEach((rx) => {
      const pts = [];
      for (let sz = -9.0; sz <= 9.0; sz += 0.3) {
        const sy = 7.69 - Math.pow(sz / 9.0, 2) * 2.22;
        pts.push(new THREE.Vector3(rx, sy, sz));
      }
      const ribCurve = new THREE.CatmullRomCurve3(pts);
      const ribGeo = new THREE.TubeGeometry(ribCurve, 48, 0.075, 8, false);
      const ribMesh = new THREE.Mesh(ribGeo, minRibMat);
      roomArch.add(ribMesh);
    });

    // Thanh sống vòm trung tâm mạ vàng chạy dọc đỉnh vòm (Z = 0) và 2 đường phào chân vòm (Z = ±8.9)
    const crownBeam = new THREE.Mesh(
      new THREE.BoxGeometry(23.0, 0.10, 0.16),
      minRibMat
    );
    crownBeam.position.set(22.7, 7.69, 0);
    roomArch.add(crownBeam);

    const ceilingTrim = new THREE.Mesh(
      new THREE.BoxGeometry(23.0, 0.22, 0.22),
      this.materials.bronzeGold
    );
    ceilingTrim.position.set(22.7, 5.50, -8.9);
    roomArch.add(ceilingTrim);
    const ceilingTrimS = ceilingTrim.clone();
    ceilingTrimS.position.z = 8.9;
    roomArch.add(ceilingTrimS);

    // Hệ đèn Downlight âm trần vòm phát sáng vàng ấm tỏa đều khắp Phòng Bộ Trưởng
    const minDownlightMat = new THREE.MeshBasicMaterial({ color: 0xfff0c4 });
    const minLightX = [13.8, 17.3, 20.9, 24.5, 28.1, 31.7];
    const minLightZ = [-5.8, -2.2, 2.2, 5.8];
    minLightX.forEach((lx) => {
      minLightZ.forEach((lz) => {
        const ly = 7.66 - Math.pow(lz / 9.0, 2) * 2.22;
        const slopeAngle = Math.atan((2 * 2.22 * lz) / 81.0);
        const lamp = new THREE.Mesh(new THREE.CircleGeometry(0.22, 16), minDownlightMat);
        lamp.rotation.x = Math.PI / 2 + slopeAngle;
        lamp.position.set(lx, ly, lz);
        roomArch.add(lamp);
      });
    });

    // 4. VÁCH SƠN MÀU XANH NAVY ĐẬM (ROYAL BLUE #16243B) CÓ PHÀO CHỈ GỖ SANG TRỌNG
    // Tường Bắc (Z = -9.0, X: 11.2 -> 34.2)
    this.createWall(roomArch, 22.7, wallH / 2, -9.0, 23.0, wallH, 0.5, this.materials.navyRoyalWall);
    // Tường Nam (Z = +9.0, X: 11.2 -> 34.2)
    this.createWall(roomArch, 22.7, wallH / 2, 9.0, 23.0, wallH, 0.5, this.materials.navyRoyalWall);
    // Tường Đông cuối phòng (X = 34.2, Z: -9.0 -> +9.0)
    this.createWall(roomArch, 34.2, wallH / 2, 0, 0.5, wallH, 18.2, this.materials.navyRoyalWall);

    // Len chân tường gỗ gụ + viền vàng chạy suốt tường Bắc, Nam, Đông
    const baseboardN = new THREE.Mesh(new THREE.BoxGeometry(23.0, 0.55, 0.14), this.materials.naturalWood);
    baseboardN.position.set(22.7, 0.275, -8.85);
    roomArch.add(baseboardN);
    const baseboardGoldN = new THREE.Mesh(new THREE.BoxGeometry(23.0, 0.06, 0.16), this.materials.bronzeGold);
    baseboardGoldN.position.set(22.7, 0.56, -8.85);
    roomArch.add(baseboardGoldN);

    const baseboardS = baseboardN.clone();
    baseboardS.position.z = 8.85;
    roomArch.add(baseboardS);
    const baseboardGoldS = baseboardGoldN.clone();
    baseboardGoldS.position.z = 8.85;
    roomArch.add(baseboardGoldS);

    const baseboardE = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.55, 18.0), this.materials.naturalWood);
    baseboardE.position.set(34.05, 0.275, 0);
    roomArch.add(baseboardE);
    const baseboardGoldE = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.06, 18.0), this.materials.bronzeGold);
    baseboardGoldE.position.set(34.05, 0.56, 0);
    roomArch.add(baseboardGoldE);

    // BẢNG VĂN KHẮC VÀNG CHÍNH ĐÔNG: LỜI CĂN DẶN CỦA BÁC HỒ
    const quoteBoardGroup = new THREE.Group();
    quoteBoardGroup.position.set(33.95, 3.85, 0);
    quoteBoardGroup.rotation.y = -Math.PI / 2;

    const quoteFrame = new THREE.Mesh(
      new THREE.BoxGeometry(11.5, 4.2, 0.12),
      this.materials.bronzeGold
    );
    quoteBoardGroup.add(quoteFrame);

    const quoteWood = new THREE.Mesh(
      new THREE.BoxGeometry(11.2, 3.9, 0.14),
      this.materials.naturalWood
    );
    quoteBoardGroup.add(quoteWood);

    const quoteTex = this.createEndWallQuoteTexture();
    const quoteMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(10.9, 3.6),
      new THREE.MeshBasicMaterial({ map: quoteTex })
    );
    quoteMesh.position.z = 0.08;
    quoteBoardGroup.add(quoteMesh);
    roomArch.add(quoteBoardGroup);

    parent.add(roomArch);
  }

  // ==================== TEXTURE BIỂN HIỆU CỔNG VÒM ====================
  createArchwaySignTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Nền chuyển sắc xanh Navy đậm hoàng gia
    const grad = ctx.createLinearGradient(0, 0, 2048, 512);
    grad.addColorStop(0, '#0a1626');
    grad.addColorStop(0.5, '#122640');
    grad.addColorStop(1, '#07101c');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 2048, 512);

    // Khung viền chỉ vàng hoàng gia
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 14;
    ctx.strokeRect(18, 18, 2012, 476);
    ctx.strokeStyle = 'rgba(255, 235, 160, 0.6)';
    ctx.lineWidth = 4;
    ctx.strokeRect(36, 36, 1976, 440);

    // Họa tiết hoa sen & góc viền hoàng kim
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 36px "Be Vietnam Pro", sans-serif';
    ctx.textAlign = 'center';
    ctx.letterSpacing = '6px';
    ctx.fillText('✦  PHÒNG TRƯNG BÀY CHUYÊN ĐỀ ĐỘC LẬP  ✦', 1024, 115);

    // Tiêu đề chính to, sắc nét, viền vàng dập nổi
    ctx.shadowColor = 'rgba(255, 215, 0, 0.65)';
    ctx.shadowBlur = 24;
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 88px "Cinzel", "Cormorant Garamond", Georgia, serif';
    ctx.letterSpacing = '4px';
    ctx.fillText('BỘ TRƯỞNG BỘ GIÁO DỤC QUA CÁC THỜI KỲ', 1024, 255);
    ctx.shadowBlur = 0;

    // Đường kẻ phân cách
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.7)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(350, 315);
    ctx.lineTo(1698, 315);
    ctx.stroke();

    // Dòng phụ chú
    ctx.fillStyle = '#f0d999';
    ctx.font = 'italic 38px "Be Vietnam Pro", sans-serif';
    ctx.letterSpacing = '2px';
    ctx.fillText('Chân Dung & Dấu Ấn Lịch Sử Các Vị Tư Lệnh Ngành Giáo Dục Việt Nam (1945 – Nay)', 1024, 385);

    return new THREE.CanvasTexture(canvas);
  }

  // ==================== TEXTURE BẢNG VĂN KHẮC VÀNG TƯỜNG ĐÔNG ====================
  createEndWallQuoteTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 768;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 2048, 768);
    grad.addColorStop(0, '#0c1a2e');
    grad.addColorStop(0.5, '#162e4f');
    grad.addColorStop(1, '#081220');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 2048, 768);

    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 12;
    ctx.strokeRect(20, 20, 2008, 728);
    ctx.strokeStyle = 'rgba(255, 235, 160, 0.5)';
    ctx.lineWidth = 4;
    ctx.strokeRect(38, 38, 1972, 692);

    ctx.fillStyle = '#e8c478';
    ctx.font = 'bold 36px "Be Vietnam Pro", sans-serif';
    ctx.textAlign = 'center';
    ctx.letterSpacing = '5px';
    ctx.fillText('✦  DI HUẤN BẤT HỦ VỀ SỰ NGHIỆP TRỒNG NGƯỜI  ✦', 1024, 125);

    ctx.shadowColor = 'rgba(255, 215, 0, 0.75)';
    ctx.shadowBlur = 24;
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 62px "Cinzel", "Cormorant Garamond", Georgia, serif';
    ctx.letterSpacing = '3px';
    ctx.fillText('“VÌ LỢI ÍCH MƯỜI NĂM THÌ PHẢI TRỒNG CÂY,', 1024, 260);
    ctx.fillText('VÌ LỢI ÍCH TRĂM NĂM THÌ PHẢI TRỒNG NGƯỜI”', 1024, 355);
    ctx.shadowBlur = 0;

    ctx.strokeStyle = 'rgba(212, 175, 55, 0.65)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(420, 420);
    ctx.lineTo(1628, 420);
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'italic 40px "Be Vietnam Pro", serif';
    ctx.fillText('— CHỦ TỊCH HỒ CHÍ MINH —', 1024, 495);

    ctx.fillStyle = '#e2e8f0';
    ctx.font = '30px "Be Vietnam Pro", sans-serif';
    ctx.fillText('Phát biểu tại Lớp học chính trị của giáo viên cấp II, cấp III toàn miền Bắc (13-9-1958)', 1024, 575);

    ctx.fillStyle = '#cbd5e1';
    ctx.font = 'italic 26px "Be Vietnam Pro", sans-serif';
    ctx.fillText('(Sách Hồ Chí Minh - Toàn tập, Tập 11, Nxb CTQG, H.2011, tr.528)', 1024, 635);

    return new THREE.CanvasTexture(canvas);
  }

  buildFifteenMinistersRoom() {
    const ministers = window.ministersData || [];

    // 1. BỤC TRÒN TRƯNG BÀY HIỆN VẬT Ở GIỮA PHÒNG (GIỮ LẠI BỤC QUẢ CẦU VÀNG TRI THỨC) TẠI (22.5, 0, 0)
    const pedestalGroup = new THREE.Group();
    pedestalGroup.position.set(22.5, 0, 0);

    // Bậc 1: Đá cẩm thạch xám/đen viền vàng
    const step1 = new THREE.Mesh(
      new THREE.CylinderGeometry(3.6, 3.8, 0.24, 36),
      this.materials.glossyDarkMarble
    );
    step1.position.y = 0.12;
    pedestalGroup.add(step1);

    const step1Trim = new THREE.Mesh(
      new THREE.TorusGeometry(3.62, 0.06, 12, 48),
      this.materials.bronzeGold
    );
    step1Trim.rotation.x = Math.PI / 2;
    step1Trim.position.y = 0.24;
    pedestalGroup.add(step1Trim);

    // Bậc 2: Vành đồng mạ vàng hoàng gia
    const step2 = new THREE.Mesh(
      new THREE.CylinderGeometry(3.0, 3.2, 0.15, 36),
      this.materials.bronzeGold
    );
    step2.position.y = 0.315;
    pedestalGroup.add(step2);

    // Bục chính: Gỗ tự nhiên cao cấp
    const mainPedestal = new THREE.Mesh(
      new THREE.CylinderGeometry(2.4, 2.6, 0.75, 36),
      this.materials.naturalWood
    );
    mainPedestal.position.y = 0.765;
    pedestalGroup.add(mainPedestal);

    // Đĩa hoa văn trống đồng / hoa sen vàng trên mặt bục
    const discCanvas = document.createElement('canvas');
    discCanvas.width = 512;
    discCanvas.height = 512;
    const dCtx = discCanvas.getContext('2d');
    dCtx.fillStyle = '#10223b';
    dCtx.fillRect(0, 0, 512, 512);
    dCtx.strokeStyle = '#ffd700';
    dCtx.lineWidth = 8;
    dCtx.beginPath();
    dCtx.arc(256, 256, 240, 0, Math.PI * 2);
    dCtx.stroke();
    dCtx.lineWidth = 3;
    dCtx.beginPath();
    dCtx.arc(256, 256, 200, 0, Math.PI * 2);
    dCtx.stroke();
    dCtx.fillStyle = '#e8c478';
    dCtx.font = 'bold 36px "Cinzel", serif';
    dCtx.textAlign = 'center';
    dCtx.textBaseline = 'middle';
    dCtx.fillText('BẢO TÀNG NHÀ GIÁO', 256, 256);
    const discTex = new THREE.CanvasTexture(discCanvas);

    const discMesh = new THREE.Mesh(
      new THREE.CircleGeometry(2.25, 32),
      new THREE.MeshStandardMaterial({ map: discTex, roughness: 0.3, metalness: 0.4 })
    );
    discMesh.rotation.x = -Math.PI / 2;
    discMesh.position.y = 1.15;
    pedestalGroup.add(discMesh);

    // Quả cầu vàng tri thức tỏa sáng ở tâm bục (The Golden Orb of Knowledge)
    const orbGroup = new THREE.Group();
    orbGroup.position.y = 2.15;

    const goldenOrb = new THREE.Mesh(
      new THREE.SphereGeometry(0.68, 32, 32),
      new THREE.MeshStandardMaterial({
        color: 0xffd700,
        roughness: 0.12,
        metalness: 0.95,
        emissive: 0x553a00
      })
    );
    orbGroup.add(goldenOrb);

    // 2 vòng quỹ đạo ánh sáng vàng nghiêng xoay quanh quả cầu
    const orbitRing1 = new THREE.Mesh(
      new THREE.TorusGeometry(1.05, 0.025, 12, 64),
      this.materials.bronzeGold
    );
    orbitRing1.rotation.x = Math.PI / 3;
    orbitRing1.rotation.y = Math.PI / 6;
    orbGroup.add(orbitRing1);

    const orbitRing2 = new THREE.Mesh(
      new THREE.TorusGeometry(1.2, 0.02, 12, 64),
      this.materials.bronzeGold
    );
    orbitRing2.rotation.x = -Math.PI / 4;
    orbitRing2.rotation.z = Math.PI / 5;
    orbGroup.add(orbitRing2);

    // Ánh sáng vàng dịu phát ra từ quả cầu
    const orbLight = new THREE.PointLight(0xffd700, 1.8, 10);
    orbLight.position.set(0, 0, 0);
    orbGroup.add(orbLight);

    pedestalGroup.add(orbGroup);
    this.scene.add(pedestalGroup);

    // Đăng ký hoạt ảnh xoay nhẹ nhàng cho quả cầu vàng
    this.animatedObjects.push({
      update: (delta) => {
        orbGroup.rotation.y += delta * 0.4;
        orbitRing1.rotation.z += delta * 0.5;
        orbitRing2.rotation.x += delta * 0.3;
      }
    });

    // --- 1.5 HỆ THỐNG ĐIỂM BƯỚC CHÂN TRÊN SÀN (FLOOR WAYPOINTS) ĐỂ ĐI BỘ SÂU VÀO PHÒNG ---
    const stepPoints = [
      {
        id: 'step-1-start',
        name: 'ĐẦU PHÒNG',
        sub: 'Ngắm tranh đầu phòng (Tầm mắt 1.6m)',
        x: 14.8, z: 0,
        lookAtX: 22.5
      },
      {
        id: 'step-2-mid',
        name: 'GIỮA PHÒNG',
        sub: 'Ngang bục Quả Cầu Vàng (Tầm mắt 1.6m)',
        x: 21.0, z: 0,
        lookAtX: 29.5
      },
      {
        id: 'step-3-end',
        name: 'CUỐI PHÒNG',
        sub: 'Áp sát các tranh góc trong (Tầm mắt 1.6m)',
        x: 29.5, z: 0,
        lookAtX: 34.0
      }
    ];

    stepPoints.forEach((sp) => {
      const stepMeshGroup = new THREE.Group();
      stepMeshGroup.position.set(sp.x, 0.028, sp.z);

      const stepCanvas = document.createElement('canvas');
      stepCanvas.width = 512;
      stepCanvas.height = 512;
      const sCtx = stepCanvas.getContext('2d');

      // Vòng tròn tỏa sáng
      const radGrad = sCtx.createRadialGradient(256, 256, 40, 256, 256, 250);
      radGrad.addColorStop(0, 'rgba(212, 175, 55, 0.45)');
      radGrad.addColorStop(0.65, 'rgba(16, 36, 65, 0.85)');
      radGrad.addColorStop(0.9, 'rgba(8, 18, 35, 0.95)');
      radGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      sCtx.fillStyle = radGrad;
      sCtx.beginPath();
      sCtx.arc(256, 256, 245, 0, Math.PI * 2);
      sCtx.fill();

      // Viền vàng kép
      sCtx.strokeStyle = '#ffd700';
      sCtx.lineWidth = 10;
      sCtx.beginPath();
      sCtx.arc(256, 256, 230, 0, Math.PI * 2);
      sCtx.stroke();

      sCtx.strokeStyle = 'rgba(255, 235, 160, 0.6)';
      sCtx.lineWidth = 3;
      sCtx.beginPath();
      sCtx.arc(256, 256, 210, 0, Math.PI * 2);
      sCtx.stroke();

      // Icon bước chân
      sCtx.fillStyle = '#ffd700';
      sCtx.font = '80px sans-serif';
      sCtx.textAlign = 'center';
      sCtx.textBaseline = 'middle';
      sCtx.fillText('👣', 256, 150);

      // Tên điểm
      sCtx.fillStyle = '#ffffff';
      sCtx.font = 'bold 38px "Cinzel", "Be Vietnam Pro", sans-serif';
      sCtx.letterSpacing = '2px';
      sCtx.fillText(sp.name, 256, 260);

      // Phụ đề
      sCtx.fillStyle = '#f0db99';
      sCtx.font = '22px "Be Vietnam Pro", sans-serif';
      sCtx.fillText('BẤM ĐỂ BƯỚC TỚI', 256, 320);

      const stepTex = new THREE.CanvasTexture(stepCanvas);
      const stepDisc = new THREE.Mesh(
        new THREE.PlaneGeometry(0.72, 0.72),
        new THREE.MeshBasicMaterial({ map: stepTex, transparent: true, depthWrite: false })
      );
      stepDisc.rotation.x = -Math.PI / 2;
      stepMeshGroup.add(stepDisc);

      const wpData = {
        isFloorStepWaypoint: true,
        waypointId: sp.id,
        targetPos: { x: sp.x, y: 1.6, z: sp.z },
        targetLookAt: { x: sp.lookAtX, y: 1.6, z: sp.z }
      };

      stepMeshGroup.userData = wpData;
      stepDisc.userData = wpData;

      this.interactables.push(stepMeshGroup);
      this.scene.add(stepMeshGroup);
    });

    
    // 2. BỐ TRÍ 15 BỨC TRANH CHÂN DUNG & BẢNG ĐỒNG DỌC THEO 2 BÊN TƯỜNG (THEO ĐÚNG THỨ TỰ ID 1 ĐẾN 15)
    // - TƯỜNG BẮC (Z = -8.72): 8 bức tranh (ID 1 đến 8), nhìn về hướng Nam (rotY = 0)
    // - TƯỜNG NAM (Z = +8.72): 7 bức tranh (ID 9 đến 15), nhìn về hướng Bắc (rotY = Math.PI)
    const northX = [13.6, 16.3, 19.0, 21.7, 24.4, 27.1, 29.8, 32.5];
    const southX = [14.5, 17.5, 20.5, 23.5, 26.5, 29.5, 32.5];

    ministers.forEach((min, index) => {
      const isNorth = index < 8;
      const x = isNorth ? northX[index] : southX[index - 8];
      const z = isNorth ? -8.72 : 8.72;
      const rotY = isNorth ? 0 : Math.PI;
      const viewZ = isNorth ? -6.2 : 6.2;

      const frameGroup = new THREE.Group();
      frameGroup.position.set(x, 0, z);
      frameGroup.rotation.y = rotY;

      // KHUNG TRANH VÀNG ĐỒNG SANG TRỌNG (Cao 2.36m, Rộng 1.84m)
      const outerFrame = new THREE.Mesh(
        new THREE.BoxGeometry(1.84, 2.36, 0.09),
        this.materials.bronzeGold
      );
      outerFrame.position.set(0, 3.35, 0.045);
      frameGroup.add(outerFrame);

      const innerWood = new THREE.Mesh(
        new THREE.BoxGeometry(1.68, 2.20, 0.10),
        this.materials.naturalWood
      );
      innerWood.position.set(0, 3.35, 0.055);
      frameGroup.add(innerWood);

      // MẶT TRANH CHÂN DUNG CỦA BỘ TRƯỞNG
      const portraitTex = this.createMinisterCanvasTexture(min);
      const portraitMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(1.54, 2.06),
        new THREE.MeshBasicMaterial({ map: portraitTex })
      );
      portraitMesh.position.set(0, 3.35, 0.115);
      frameGroup.add(portraitMesh);

      // ĐÈN RỌI GẮN PHÍA TRÊN MỖI KHUNG TRANH
      const lightBar = new THREE.Mesh(
        new THREE.BoxGeometry(0.72, 0.06, 0.26),
        this.materials.bronzeGold
      );
      lightBar.position.set(0, 4.65, 0.2);
      frameGroup.add(lightBar);

      const lightGlow = new THREE.Mesh(
        new THREE.BoxGeometry(0.64, 0.02, 0.08),
        new THREE.MeshBasicMaterial({ color: 0xfff0c4 })
      );
      lightGlow.position.set(0, 4.62, 0.2);
      frameGroup.add(lightGlow);

      // BẢNG ĐỒNG (NAMEPLATE) KHẮC TÊN VÀ NHIỆM KỲ ĐẶT DƯỚI TRANH TẠI Y = 1.35M
      const nameplateGroup = new THREE.Group();
      nameplateGroup.position.set(0, 1.35, 0.08);

      const nameplateBase = new THREE.Mesh(
        new THREE.BoxGeometry(1.48, 0.44, 0.04),
        this.materials.bronzeGold
      );
      nameplateGroup.add(nameplateBase);

      const nameplateTex = this.createMinisterNameplateTexture(min);
      const nameplateFace = new THREE.Mesh(
        new THREE.PlaneGeometry(1.42, 0.38),
        new THREE.MeshStandardMaterial({
          map: nameplateTex,
          roughness: 0.35,
          metalness: 0.65
        })
      );
      nameplateFace.position.z = 0.025;
      nameplateGroup.add(nameplateFace);
      frameGroup.add(nameplateGroup);

      // 3. ĐÈN SPOTLIGHT ÂM TRẦN CHIẾU RỌI XIÊN GÓC 45 ĐỘ XUỐNG TỪNG VỊ TRÍ TRANH
      const spotZ = isNorth ? -5.2 : 5.2;
      const spotLight = new THREE.SpotLight(0xfff5e0, 2.2, 14, Math.PI / 5, 0.45, 1.2);
      spotLight.position.set(x, 7.55, spotZ);
      spotLight.target.position.set(x, 3.35, z);
      this.scene.add(spotLight.target);
      this.scene.add(spotLight);

      // Đui đèn âm trần mạ đồng
      const spotCanister = new THREE.Mesh(
        new THREE.CylinderGeometry(0.18, 0.18, 0.3, 16),
        this.materials.bronzeGold
      );
      spotCanister.position.set(x, 7.65, spotZ);
      this.scene.add(spotCanister);

      // Dữ liệu tương tác đầy đủ cho Bộ trưởng
      const minData = {
        ...min,
        order: min.id,
        isMinisterPortrait: true,
        title: min.name,
        subtitle: min.term,
        lifespan: min.years,
        code: `BỘ TRƯỞNG #${min.id < 10 ? '0' + min.id : min.id}`,
        zoneId: 'room-ministers',
        zoneName: 'Bộ trưởng Bộ Giáo dục Việt Nam qua các thời kỳ',
        era: min.term,
        material: 'Ảnh chân dung lịch sử & Dấu ấn ngành Giáo dục',
        dimensions: `Chân dung số ${min.id}/15 • Phòng Trưng Bày Chuyên Đề`,
        position: { x, y: 0, z },
        viewOffset: { x, y: 2.8, z: viewZ },
        lookAtOffset: { x, y: 3.35, z },
        quote: `“${min.highlight}”`,
        story: min.highlight,
        highlights: [min.highlight]
      };

      frameGroup.traverse((child) => {
        child.userData = {
          isMinisterPortrait: true,
          ministerId: min.id,
          ministerData: minData,
          artifactId: 'minister-' + min.id,
          outerFrame: outerFrame
        };
      });

      this.interactables.push(frameGroup);
      this.scene.add(frameGroup);
    });
  }

  // ==================== TEXTURE ẢNH CHÂN DUNG BỘ TRƯỞNG ====================
  createMinisterCanvasTexture(min) {
    const canvas = document.createElement('canvas');
    canvas.width = 768;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    const drawCard = (imgObj) => {
      // Nền xanh đen sâu thẳm sang trọng
      ctx.fillStyle = '#0d1d33';
      ctx.fillRect(0, 0, 768, 1024);

      if (imgObj) {
        const pad = 24;
        const targetW = 768 - pad * 2;
        const targetH = 1024 - pad * 2;
        const targetX = pad;
        const targetY = pad;

        ctx.save();
        ctx.beginPath();
        ctx.rect(targetX, targetY, targetW, targetH);
        ctx.clip();

        const imgRatio = imgObj.width / imgObj.height;
        const boxRatio = targetW / targetH;
        let drawW = targetW, drawH = targetH, drawX = targetX, drawY = targetY;
        if (imgRatio > boxRatio) {
          drawH = targetH;
          drawW = targetH * imgRatio;
          drawX = targetX - (drawW - targetW) / 2;
        } else {
          drawW = targetW;
          drawH = targetW / imgRatio;
          drawY = targetY - (drawH - targetH) * 0.15;
        }
        ctx.drawImage(imgObj, drawX, drawY, drawW, drawH);
        ctx.restore();

        // Viền chỉ vàng sang trọng bo quanh ảnh
        ctx.strokeStyle = '#c89d54';
        ctx.lineWidth = 4;
        ctx.strokeRect(targetX, targetY, targetW, targetH);
      } else {
        ctx.fillStyle = '#162844';
        ctx.fillRect(24, 24, 720, 976);
        ctx.fillStyle = '#ffd700';
        ctx.font = 'bold 44px "Cinzel", serif';
        ctx.textAlign = 'center';
        ctx.fillText(min.name, 384, 512);
      }

      // Khung viền thếp vàng ngoài cùng
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 10;
      ctx.strokeRect(12, 12, 744, 1000);
    };

    const texture = new THREE.CanvasTexture(canvas);

    // Nạp ảnh bằng Image bất đồng bộ có bọc encodeURI(min.img) theo đúng yêu cầu
    const img = new Image();
    img.crossOrigin = 'anonymous';

    const encodedPath = encodeURI(min.img);
    const fileNameOnly = min.img.replace('assets/ministers/', '');

    // Đa tầng dự phòng đặc biệt cho Bộ trưởng số 3 (GS. Ca Văn Thỉnh) và các vị khác
    const fallbackSrc = window.MINISTER_IMAGES && (
      window.MINISTER_IMAGES[min.name] ||
      window.MINISTER_IMAGES[fileNameOnly] ||
      window.MINISTER_IMAGES[fileNameOnly.replace('.jpg', '..jpg')] ||
      window.MINISTER_IMAGES['assets/ministers/' + fileNameOnly] ||
      window.MINISTER_IMAGES['ẢNH BỘ TRƯỞNG/' + fileNameOnly] ||
      window.MINISTER_IMAGES['ẢNH BỘ TRƯỞNG/' + fileNameOnly.replace('.jpg', '..jpg')]
    );

    img.onload = () => {
      drawCard(img);
      texture.needsUpdate = true;
    };

    img.onerror = () => {
      // Thử đường dẫn hai chấm
      const altPath = min.img.includes('..jpg') ? min.img.replace('..jpg', '.jpg') : min.img.replace('.jpg', '..jpg');
      const img2 = new Image();
      img2.crossOrigin = 'anonymous';
      img2.onload = () => {
        drawCard(img2);
        texture.needsUpdate = true;
      };
      img2.onerror = () => {
        if (fallbackSrc) {
          const img3 = new Image();
          img3.onload = () => {
            drawCard(img3);
            texture.needsUpdate = true;
          };
          img3.onerror = () => {
            drawCard(null);
            texture.needsUpdate = true;
          };
          img3.src = fallbackSrc;
        } else {
          drawCard(null);
          texture.needsUpdate = true;
        }
      };
      img2.src = encodeURI(altPath);
    };

    img.src = encodedPath;
    drawCard(null); // vẽ trước nền để không bị nhấp nháy trắng
    return texture;
  }
  
  // ==================== TEXTURE BẢNG ĐỒNG (NAMEPLATE) DƯỚI TRANH ====================
  createMinisterNameplateTexture(min) {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 280;
    const ctx = canvas.getContext('2d');

    // Nền kim loại đồng cổ sang trọng
    const grad = ctx.createLinearGradient(0, 0, 1024, 280);
    grad.addColorStop(0, '#1c150c');
    grad.addColorStop(0.5, '#2e2213');
    grad.addColorStop(1, '#18120a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 280);

    // Hiệu ứng phay xước kim loại nhẹ
    ctx.fillStyle = 'rgba(255, 235, 170, 0.03)';
    for (let i = 0; i < 60; i++) {
      ctx.fillRect(0, Math.random() * 280, 1024, 1 + Math.random() * 2);
    }

    // Khung viền chỉ vàng chạm khắc
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 8;
    ctx.strokeRect(10, 10, 1004, 260);
    ctx.strokeStyle = 'rgba(255, 235, 160, 0.5)';
    ctx.lineWidth = 2;
    ctx.strokeRect(18, 18, 988, 244);

    // 4 ốc vít đồng ở 4 góc
    const screws = [[32, 32], [992, 32], [32, 248], [992, 248]];
    screws.forEach(([sx, sy]) => {
      ctx.fillStyle = '#e6c875';
      ctx.beginPath();
      ctx.arc(sx, sy, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#99732b';
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    // Dòng 1: Thứ tự Bộ trưởng
    ctx.fillStyle = '#e8c478';
    ctx.font = 'bold 24px "Be Vietnam Pro", sans-serif';
    ctx.textAlign = 'center';
    ctx.letterSpacing = '3px';
    ctx.fillText(`BỘ TRƯỞNG BỘ GIÁO DỤC • VỊ THỨ ${min.id < 10 ? '0' + min.id : min.id}`, 512, 62);

    // Dòng 2: Họ và tên chữ vàng nổi bật
    ctx.shadowColor = 'rgba(255, 215, 0, 0.65)';
    ctx.shadowBlur = 14;
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 48px "Cinzel", "Cormorant Garamond", Georgia, serif';
    ctx.letterSpacing = '2px';
    ctx.fillText(min.name.toUpperCase(), 512, 138);
    ctx.shadowBlur = 0;

    // Đường kẻ phân cách vàng
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.6)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(180, 168);
    ctx.lineTo(844, 168);
    ctx.stroke();

    // Dòng 3: Nhiệm kỳ công tác
    ctx.fillStyle = '#f0db99';
    ctx.font = 'italic 28px "Be Vietnam Pro", sans-serif';
    ctx.letterSpacing = '1px';
    ctx.fillText(min.term, 512, 222);

    return new THREE.CanvasTexture(canvas);
  }

  // ==================== DỰNG HIỆN VẬT 3D CHÍNH ====================
  buildArtifactExhibit(art) {
    // Không dựng bục hay standee chắn trước mặt các đại tự gắn tường
    if (art.id === 'exhibit-15-educators' || art.id === 'mural-uncle-ho-final-letter') return;

    const group = new THREE.Group();
    group.position.set(art.position.x, art.position.y, art.position.z);
    group.userData = { artifactId: art.id, artifact: art };

    // Đèn Spotlight riêng trên trần
    const spot = new THREE.SpotLight(0xffe3b3, 2.5, 15, Math.PI / 6, 0.48, 1.2);
    spot.position.set(art.position.x, 7.3, art.position.z);
    spot.target.position.set(art.position.x, 1.2, art.position.z);
    this.scene.add(spot);
    this.scene.add(spot.target);

    // Quầng sáng dưới chân hiện vật
    const lightPool = new THREE.Mesh(
      new THREE.RingGeometry(1.15, 1.65, 48),
      new THREE.MeshBasicMaterial({ color: 0xd9ae62, transparent: true, opacity: 0.28, side: THREE.DoubleSide })
    );
    lightPool.rotation.x = -Math.PI / 2;
    lightPool.position.y = 0.018;
    group.add(lightPool);

    switch (art.id) {
      case 'art-monument':
        this.buildMonument3D(group);
        break;
      case 'art-wishing-tree':
        this.buildRotatingWishingTree3D(group);
        break;
      case 'hist-overview':
        this.buildStandardPedestal(group, false);
        this.buildMemoryBook3D(group);
        this.buildHistoricalPhotoStand(group, art);
        break;
      case 'hist-stage-1':
        this.buildStele3D(group);
        this.buildHistoricalPhotoStand(group, art);
        break;
      case 'hist-stage-2':
        this.buildStandardPedestal(group, false);
        this.buildOilLampExhibit3D(group);
        this.buildHistoricalPhotoStand(group, art);
        break;
      case 'hist-stage-3':
        this.buildStandardPedestal(group, false);
        this.buildTruongSonBag3D(group);
        this.buildHistoricalPhotoStand(group, art);
        break;
      case 'hist-stage-4':
        this.buildStandardPedestal(group, false);
        this.buildMemoryBook3D(group);
        this.buildHistoricalPhotoStand(group, art);
        break;
      case 'hist-stage-5':
        this.buildStandardPedestal(group, false);
        this.buildTeachingTools3D(group);
        this.buildHistoricalPhotoStand(group, art);
        break;
      case 'exhibit-15-educators':
        this.buildCenterpiecePodium(group, '15 NHÀ GIÁO ƯU TÚ NHẤT LỊCH SỬ');
        break;
      case 'exhibit-15-ministers':
        this.buildCenterpiecePodium(group, 'BỘ TRƯỞNG BỘ GIÁO DỤC QUA CÁC THỜI KỲ');
        break;
      case 'art-uncle-ho-letter':
        this.buildUncleHoLetterExhibit3D(group);
        break;
      case 'tool-scholar-set':
        this.buildStandardPedestal(group, true);
        this.buildScholarSet3D(group);
        break;
      case 'tool-oil-lamp':
        this.buildStandardPedestal(group, true);
        this.buildOilLampExhibit3D(group);
        break;
      case 'tool-wartime-set':
        this.buildBombDrum3D(group);
        break;
      case 'tool-teaching-instruments':
        this.buildStandardPedestal(group, true);
        this.buildTeachingTools3D(group);
        break;
      case 'tool-highland-bike':
        this.buildHighlandBike3D(group);
        break;
    }

    if (
      !art.id.startsWith('hist-') &&
      art.id !== 'art-wishing-tree'
    ) {
      this.buildExhibitPlaque(group, art);
    }

    if (art.id !== 'art-wishing-tree') {
      const hitbox = new THREE.Mesh(
        new THREE.CylinderGeometry(1.45, 1.45, 3.4, 16),
        new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.001, depthWrite: false })
      );
      hitbox.position.y = 1.7;
      group.add(hitbox);
    }

    group.traverse((child) => {
      if (child.isPoints) {
        child.raycast = () => {};
      }
      if (
        child.userData &&
        (child.userData.isTributeCard ||
          child.userData.isWriteTributeDesk)
      ) {
        return;
      }
      child.userData = { artifactId: art.id, artifact: art };
    });

    this.interactables.push(group);
    this.scene.add(group);
  }

  buildCenterpiecePodium(group, labelText) {
    const base = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.4, 0.35, 24), this.materials.navyPanel);
    base.position.y = 0.175;
    group.add(base);

    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.55, 0.85, 24), this.materials.naturalWood);
    pillar.position.y = 0.75;
    group.add(pillar);

    const star = new THREE.Mesh(new THREE.OctahedronGeometry(0.35, 1), this.materials.brightGold);
    star.position.y = 1.65;
    group.add(star);
    this.animatedObjects.push({ mesh: star, rotateY: 0.5, baseY: 1.65, speed: 2.0 });
  }

  buildHistoricalPhotoStand(group, art) {
    if (!art.imageFile) return;

    const dx = art.viewOffset.x - art.position.x;
    const dz = art.viewOffset.z - art.position.z;
    const angle = Math.atan2(dx, dz);

    const standGroup = new THREE.Group();
    // Đặt khung ảnh tư liệu lớn phía sau bệ hiện vật, nâng cao để không bao giờ bị bệ che khuất
    standGroup.position.set(-Math.sin(angle) * 0.95, 0, -Math.cos(angle) * 0.95);
    standGroup.rotation.y = angle;

    // 2 trụ đồng nâng bảng ảnh tư liệu
    [-1.08, 1.08].forEach((px) => {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.055, 3.85, 12), this.materials.bronzeGold);
      post.position.set(px, 1.925, 0);
      standGroup.add(post);
    });

    const outerFrame = new THREE.Mesh(new THREE.BoxGeometry(2.48, 1.92, 0.08), this.materials.bronzeGold);
    outerFrame.position.set(0, 2.96, 0.04);
    standGroup.add(outerFrame);

    const canvas = document.createElement('canvas');
    canvas.width = 768;
    canvas.height = 580;
    const ctx = canvas.getContext('2d');

    const drawStageCard = (imgObj) => {
      ctx.fillStyle = '#0e1d33';
      ctx.fillRect(0, 0, 768, 580);
      ctx.strokeStyle = '#d8ae5e';
      ctx.lineWidth = 6;
      ctx.strokeRect(10, 10, 748, 560);

      // Phần ảnh tư liệu phía trên (y=22..436), không có chữ đè lên ảnh
      const tx = 24, ty = 22, tw = 720, th = 414;
      if (imgObj) {
        ctx.save();
        ctx.beginPath();
        ctx.rect(tx, ty, tw, th);
        ctx.clip();
        const imgRatio = imgObj.width / imgObj.height;
        const boxRatio = tw / th;
        let dw = tw, dh = th, dx0 = tx, dy0 = ty;
        if (imgRatio > boxRatio) {
          dh = th;
          dw = th * imgRatio;
          dx0 = tx - (dw - tw) / 2;
        } else {
          dw = tw;
          dh = tw / imgRatio;
          dy0 = ty - (dh - th) * 0.2;
        }
        ctx.drawImage(imgObj, dx0, dy0, dw, dh);
        ctx.restore();
      } else {
        ctx.fillStyle = '#162944';
        ctx.fillRect(tx, ty, tw, th);
      }
      ctx.strokeStyle = '#c89d54';
      ctx.lineWidth = 3;
      ctx.strokeRect(tx, ty, tw, th);

      // Bảng tiêu đề tách riêng bên dưới ảnh (y=446..556)
      ctx.fillStyle = '#10223b';
      ctx.fillRect(24, 446, 720, 110);
      ctx.strokeStyle = '#c89d54';
      ctx.lineWidth = 2;
      ctx.strokeRect(24, 446, 720, 110);

      ctx.fillStyle = '#e8c478';
      ctx.textAlign = 'center';
      this.drawFittedText(
        ctx,
        (art.code + ' • ' + art.era).toUpperCase(),
        384,
        476,
        690,
        18,
        12,
        'bold',
        '"Be Vietnam Pro", sans-serif'
      );

      ctx.fillStyle = '#ffffff';
      this.drawFittedText(
        ctx,
        art.title,
        384,
        514,
        696,
        24,
        14,
        'bold',
        '"Cormorant Garamond", serif'
      );

      ctx.fillStyle = '#a9c0dd';
      ctx.font = 'italic 14px "Be Vietnam Pro", sans-serif';
      ctx.fillText('Click vào bảng hoặc hiện vật để xem toàn văn tư liệu', 384, 544);
    };

    drawStageCard(null);
    const tex = new THREE.CanvasTexture(canvas);
    const dataUri =
      (window.MINISTER_IMAGES && window.MINISTER_IMAGES[art.imageFile]) ||
      `./GIAI ĐOẠN GIÁO DỤC/${art.imageFile}`;
    const img = new Image();
    img.onload = () => {
      drawStageCard(img);
      tex.needsUpdate = true;
    };
    img.src = dataUri;

    const photoPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(2.34, 1.78),
      new THREE.MeshBasicMaterial({ map: tex })
    );
    photoPlane.position.set(0, 2.96, 0.09);
    standGroup.add(photoPlane);

    group.add(standGroup);
  }

  // ==================== CÂY TRI ÂN XOAY 3D "CỘI CÂY TRI THỨC NGÀN SAO" (ĐẠI SẢNH) ====================
  createStarGlowTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createRadialGradient(32, 32, 2, 32, 32, 30);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.25, 'rgba(255, 236, 168, 0.95)');
    grad.addColorStop(0.55, 'rgba(235, 182, 78, 0.45)');
    grad.addColorStop(1, 'rgba(235, 182, 78, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);

    // Tia sao 4 cánh lấp lánh ở tâm
    ctx.strokeStyle = 'rgba(255, 250, 220, 0.85)';
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(32, 6);
    ctx.lineTo(32, 58);
    ctx.moveTo(6, 32);
    ctx.lineTo(58, 32);
    ctx.stroke();

    return new THREE.CanvasTexture(canvas);
  }

  buildRotatingWishingTree3D(group) {
    // Bệ đá 8 cạnh sang trọng đặt tại Điện Tri Ân
    const base = new THREE.Mesh(new THREE.CylinderGeometry(1.75, 2.05, 0.44, 8), this.materials.navyPanel);
    base.position.y = 0.22;
    group.add(base);

    const goldRing = new THREE.Mesh(new THREE.CylinderGeometry(1.82, 1.82, 0.08, 8), this.materials.bronzeGold);
    goldRing.position.y = 0.45;
    group.add(goldRing);

    // Vòng hào quang vàng đồng dịu mắt dưới chân bệ cây
    const haloRing = new THREE.Mesh(
      new THREE.RingGeometry(1.88, 2.38, 64),
      new THREE.MeshBasicMaterial({ color: 0xe6be6a, transparent: true, opacity: 0.22, side: THREE.DoubleSide })
    );
    haloRing.rotation.x = -Math.PI / 2;
    haloRing.position.y = 0.03;
    group.add(haloRing);

    // Dựng Bàn Giấy Bút & Nghiên Mực Vàng 3D ngay dưới gốc cây để khách tham quan bấm vào viết thông điệp
    this.buildTreeWritingDesk3D(group);

    // Toàn bộ thân và tán cây + lá vàng + thẻ lời chúc nằm trong rotatingTreeGroup để xoay 360° liên tục
    const rotatingTreeGroup = new THREE.Group();
    rotatingTreeGroup.position.y = 0.45;

    // Thân cây chính bằng đồng mạ vàng hoàng gia đa giác 12 múi vươn cao vững chãi
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.46, 2.65, 12), this.materials.bronzeGold);
    trunk.position.y = 1.32;
    rotatingTreeGroup.add(trunk);

    // Vành đai hoa văn đồng mạ vàng ở các nấc thân cây
    [0.75, 1.45, 2.15].forEach((ringY) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.35 - ringY * 0.04, 0.022, 8, 32),
        this.materials.brightGold
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = ringY;
      rotatingTreeGroup.add(ring);
    });

    // ==================== TÁN CÂY DÀY DẶN: 32 CÀNH CHÍNH & 64 NHÁNH PHỤ VƯƠN CAO ====================
    for (let i = 0; i < 32; i++) {
      const angle = (i / 32) * Math.PI * 2;
      const tier = i % 5;
      const reach = 0.95 + tier * 0.35 + (i % 3) * 0.12;
      const branchY = 1.65 + tier * 0.34 + (i % 2) * 0.08;

      // Cành chính bằng đồng mạ vàng vươn vát hình khối điêu khắc sắc nét
      const branch = new THREE.Mesh(
        new THREE.CylinderGeometry(0.022, 0.046, reach, 8),
        this.materials.bronzeGold
      );
      branch.position.set(Math.cos(angle) * (reach / 2), branchY, Math.sin(angle) * (reach / 2));
      branch.rotation.z = -Math.cos(angle) * 1.05;
      branch.rotation.x = Math.sin(angle) * 1.05;
      rotatingTreeGroup.add(branch);

      // 2 Nhánh phụ vươn chẽ lên tạo độ dày dặn và bề thế cho tán cây
      [-0.26, 0.26].forEach((subOffset, subIdx) => {
        const subReach = reach * 0.48;
        const subBranch = new THREE.Mesh(
          new THREE.CylinderGeometry(0.014, 0.026, subReach, 6),
          this.materials.brightGold
        );
        const subAngle = angle + subOffset;
        const subBaseX = Math.cos(angle) * (reach * 0.65);
        const subBaseZ = Math.sin(angle) * (reach * 0.65);
        subBranch.position.set(
          subBaseX + Math.cos(subAngle) * (subReach / 2),
          branchY + 0.16 + subIdx * 0.08,
          subBaseZ + Math.sin(subAngle) * (subReach / 2)
        );
        subBranch.rotation.z = -Math.cos(subAngle) * 1.25;
        subBranch.rotation.x = Math.sin(subAngle) * 1.25;
        rotatingTreeGroup.add(subBranch);

        // Mầm lá bồ đề vàng trên nhánh phụ
        const subLeaf = new THREE.Mesh(
          new THREE.OctahedronGeometry(0.085, 0),
          this.materials.brightGold
        );
        subLeaf.scale.set(0.75, 1.35, 0.35);
        subLeaf.position.set(
          subBaseX + Math.cos(subAngle) * subReach,
          branchY + 0.24 + subIdx * 0.1,
          subBaseZ + Math.sin(subAngle) * subReach
        );
        rotatingTreeGroup.add(subLeaf);
      });

      // Mầm lá vàng bồ đề và nụ sen vươn cao trên đầu cành chính
      const crystalLeaf = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.12, 0),
        this.materials.brightGold
      );
      crystalLeaf.scale.set(0.85, 1.45, 0.38);
      crystalLeaf.position.set(Math.cos(angle) * reach, branchY + 0.18, Math.sin(angle) * reach);
      rotatingTreeGroup.add(crystalLeaf);
    }

    // Đỉnh ngọn cây: Đài Sen & Ngọn Đuốc Khuê Văn mạ vàng 24K tỏa sáng
    const crownBase = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.14, 0.18, 12), this.materials.brightGold);
    crownBase.position.y = 3.42;
    rotatingTreeGroup.add(crownBase);

    const topCrown = new THREE.Mesh(new THREE.OctahedronGeometry(0.32, 1), this.materials.brightGold);
    topCrown.scale.set(0.85, 1.45, 0.85);
    topCrown.position.y = 3.65;
    rotatingTreeGroup.add(topCrown);

    // ==================== TÁN CÂY BAO PHỦ BỞI 1.500 VÌ SAO VÀNG KIM LẤP LÁNH ====================
    const starTex = this.createStarGlowTexture();
    const starCount = 1500;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const goldShimmerPalette = [
      new THREE.Color(0xfff7c4),
      new THREE.Color(0xffe680),
      new THREE.Color(0xffd700),
      new THREE.Color(0xffca28),
      new THREE.Color(0xffffff)
    ];

    for (let i = 0; i < starCount; i++) {
      const u = Math.random();
      const theta = i * 2.39996 + Math.random() * 0.45;
      const phi = Math.acos(1 - 2 * u) * 0.78;
      const r = 0.55 + Math.pow(Math.random(), 0.62) * 2.55;

      const sx = r * Math.sin(phi) * Math.cos(theta);
      const sy = 2.15 + Math.cos(phi) * (r * 0.72) + (Math.random() - 0.5) * 0.4;
      const sz = r * Math.sin(phi) * Math.sin(theta);

      starPositions[i * 3] = sx;
      starPositions[i * 3 + 1] = Math.max(1.15, sy);
      starPositions[i * 3 + 2] = sz;

      const c = goldShimmerPalette[i % goldShimmerPalette.length];
      starColors[i * 3] = c.r;
      starColors[i * 3 + 1] = c.g;
      starColors[i * 3 + 2] = c.b;
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    this.starCanopyMaterial = new THREE.PointsMaterial({
      size: 0.17,
      map: starTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.88,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    this.starCanopyPoints = new THREE.Points(starGeo, this.starCanopyMaterial);
    // Vô hiệu hóa raycast trên hệ hạt sao để tia bấm không bao giờ bị hạt sao chặn mất lá vàng / thiệp
    this.starCanopyPoints.raycast = () => {};
    rotatingTreeGroup.add(this.starCanopyPoints);

    // ==================== DẢI NGÂN HÀ 450 HẠT SÁNG XOẮN ỐC BAY LƯỢN QUANH GỐC CÂY ====================
    const spiralCount = 450;
    const spiralPositions = new Float32Array(spiralCount * 3);
    const spiralColors = new Float32Array(spiralCount * 3);
    this.spiralParticleData = [];

    const goldPalette = [
      new THREE.Color(0xfff4b8),
      new THREE.Color(0xffdf6d),
      new THREE.Color(0xffca28),
      new THREE.Color(0xffa000),
      new THREE.Color(0xffffff)
    ];
    const turquoisePalette = [
      new THREE.Color(0xa7f3d0),
      new THREE.Color(0x5eead4),
      new THREE.Color(0x2dd4bf),
      new THREE.Color(0x38bdf8),
      new THREE.Color(0x7dd3fc)
    ];

    for (let i = 0; i < spiralCount; i++) {
      const t = i / spiralCount;
      const arm = i % 3;
      const baseAngle = (arm * Math.PI * 2) / 3;
      const angle = baseAngle + t * Math.PI * 8;
      const rad = 0.45 + t * 2.15 + (Math.random() - 0.5) * 0.18;
      const py = 0.45 + t * 3.35 + (Math.random() - 0.5) * 0.15;

      spiralPositions[i * 3] = Math.cos(angle) * rad;
      spiralPositions[i * 3 + 1] = py;
      spiralPositions[i * 3 + 2] = Math.sin(angle) * rad;

      this.spiralParticleData.push({
        progress: t,
        arm: arm,
        baseAngle: baseAngle,
        speed: 0.11 + Math.random() * 0.08,
        radialJitter: (Math.random() - 0.5) * 0.18
      });

      const isTurquoise = Math.random() < 0.45;
      const c = isTurquoise
        ? turquoisePalette[Math.floor(Math.random() * turquoisePalette.length)]
        : goldPalette[Math.floor(Math.random() * goldPalette.length)];

      spiralColors[i * 3] = c.r;
      spiralColors[i * 3 + 1] = c.g;
      spiralColors[i * 3 + 2] = c.b;
    }

    this.spiralGeometry = new THREE.BufferGeometry();
    this.spiralGeometry.setAttribute('position', new THREE.BufferAttribute(spiralPositions, 3));
    this.spiralGeometry.setAttribute('color', new THREE.BufferAttribute(spiralColors, 3));

    this.spiralMaterial = new THREE.PointsMaterial({
      size: 0.18,
      map: starTex,
      vertexColors: true,
      transparent: true,
      opacity: 0.88,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    this.spiralPoints = new THREE.Points(this.spiralGeometry, this.spiralMaterial);
    // Vô hiệu hóa raycast trên dải ngân hà xoắn ốc để người xem click vào lá vàng / thiệp cực kỳ nhạy
    this.spiralPoints.raycast = () => {};
    rotatingTreeGroup.add(this.spiralPoints);

    // Nhóm Tinh Cầu Pha Lê & Lá Vàng treo trên các cành cây
    this.starGemsContainer = new THREE.Group();
    rotatingTreeGroup.add(this.starGemsContainer);

    this.wishingTreeCanopy = rotatingTreeGroup;
    this.wishingTreeRotatingGroup = rotatingTreeGroup;
    this.wishCardsContainer = new THREE.Group();
    rotatingTreeGroup.add(this.wishCardsContainer);
    group.add(rotatingTreeGroup);

    this.starBurstBoost = 0;

    // Gắn sẵn 32 Thẻ Lụa Vàng + 48 Tinh Cầu Pha Lê lên cành cây
    const initialWishes = window.INITIAL_TRIBUTES || [];
    this.rebuildWishingTreeCards(initialWishes);

    // Cho toàn bộ Cây Tri Ân + Tinh Cầu + Thẻ lời chúc xoay 360° êm ái
    this.wishingTreeAnimEntry = { mesh: rotatingTreeGroup, rotateY: 0.18 };
    this.animatedObjects.push(this.wishingTreeAnimEntry);
  }

  // ==================== BÀN GIẤY BÚT & NGHIÊN MỰC VÀNG 3D ĐẶT NGAY DƯỚI GỐC CÂY ====================
  buildTreeWritingDesk3D(group) {
    const deskGroup = new THREE.Group();
    // Đặt ngay phía trước gốc cây hướng về phía khách tham quan nhìn từ sảnh chính
    deskGroup.position.set(0, 0, 1.92);
    deskGroup.rotation.y = 0;

    // 1. Bậc đá cẩm thạch & chân bàn gỗ tự nhiên viền đồng
    const baseStep = new THREE.Mesh(
      new THREE.BoxGeometry(1.18, 0.14, 0.82),
      this.materials.plinthStone
    );
    baseStep.position.y = 0.07;
    deskGroup.add(baseStep);

    const woodPillar = new THREE.Mesh(
      new THREE.BoxGeometry(0.88, 0.82, 0.56),
      this.materials.naturalWood
    );
    woodPillar.position.y = 0.55;
    deskGroup.add(woodPillar);

    const goldBelt = new THREE.Mesh(
      new THREE.BoxGeometry(0.92, 0.05, 0.6),
      this.materials.bronzeGold
    );
    goldBelt.position.y = 0.94;
    deskGroup.add(goldBelt);

    // 2. Mặt bàn nghiêng bọc nhung xanh lam & viền đồng hoàng gia
    const deskTopGroup = new THREE.Group();
    deskTopGroup.position.set(0, 1.04, 0);
    deskTopGroup.rotation.x = 0.24; // Nghiêng nhẹ về phía người đứng viết

    const topBoard = new THREE.Mesh(
      new THREE.BoxGeometry(1.12, 0.07, 0.76),
      this.materials.bronzeGold
    );
    deskTopGroup.add(topBoard);

    const velvetPad = new THREE.Mesh(
      new THREE.BoxGeometry(1.04, 0.03, 0.68),
      this.materials.navyPanel
    );
    velvetPad.position.y = 0.03;
    deskTopGroup.add(velvetPad);

    // 3. Cuộn Giấy Điệp Vàng (Sổ Vàng Tri Ân) trải mở trên mặt bàn
    const paperCanvas = document.createElement('canvas');
    paperCanvas.width = 512;
    paperCanvas.height = 384;
    const pCtx = paperCanvas.getContext('2d');

    const pGrad = pCtx.createLinearGradient(0, 0, 512, 384);
    pGrad.addColorStop(0, '#fff9df');
    pGrad.addColorStop(0.5, '#f6e2ab');
    pGrad.addColorStop(1, '#e4c378');
    pCtx.fillStyle = pGrad;
    pCtx.fillRect(0, 0, 512, 384);

    pCtx.strokeStyle = '#8a1c21';
    pCtx.lineWidth = 8;
    pCtx.strokeRect(14, 14, 484, 356);
    pCtx.strokeStyle = '#b6852d';
    pCtx.lineWidth = 2;
    pCtx.strokeRect(24, 24, 464, 336);

    pCtx.fillStyle = '#8a1c21';
    pCtx.font = 'bold 28px "Cormorant Garamond", serif';
    pCtx.textAlign = 'center';
    pCtx.fillText('✍️ SỔ VÀNG & GIẤY BÚT TRI ÂN', 256, 72);

    pCtx.fillStyle = '#14263f';
    pCtx.font = 'bold 20px "Be Vietnam Pro", sans-serif';
    pCtx.fillText('BẤM VÀO ĐÂY ĐỂ VIẾT LỜI CHÚC', 256, 118);

    pCtx.strokeStyle = 'rgba(138, 28, 33, 0.28)';
    pCtx.lineWidth = 1.5;
    [165, 205, 245, 285].forEach((ly) => {
      pCtx.beginPath();
      pCtx.moveTo(56, ly);
      pCtx.lineTo(456, ly);
      pCtx.stroke();
    });

    pCtx.fillStyle = '#5a3811';
    pCtx.font = 'italic 19px "Cormorant Garamond", serif';
    pCtx.fillText('“Kính gửi Thầy Cô muôn vàn lời tri ân...”', 256, 196);
    pCtx.fillText('Gắn chiếc lá vàng mới lên Cội Cây Tri Thức', 256, 334);

    const paperTex = new THREE.CanvasTexture(paperCanvas);
    const scrollPaper = new THREE.Mesh(
      new THREE.BoxGeometry(0.62, 0.018, 0.46),
      new THREE.MeshStandardMaterial({ map: paperTex, roughness: 0.4 })
    );
    scrollPaper.position.set(-0.14, 0.052, 0.02);
    deskTopGroup.add(scrollPaper);

    // Thanh trục đồng hai đầu cuộn giấy
    [-0.32, 0.04].forEach((rx, idx) => {
      const roller = new THREE.Mesh(
        new THREE.CylinderGeometry(0.016, 0.016, 0.52, 12),
        this.materials.brightGold
      );
      roller.rotation.x = Math.PI / 2;
      roller.position.set(idx === 0 ? -0.45 : 0.17, 0.058, 0.02);
      deskTopGroup.add(roller);
    });

    // 4. Nghiên Mực Đá Xanh & Bút Lông Vàng đặt bên phải tờ giấy
    const inkstone = new THREE.Mesh(
      new THREE.BoxGeometry(0.18, 0.035, 0.24),
      this.materials.blueStone
    );
    inkstone.position.set(0.34, 0.055, 0.06);
    deskTopGroup.add(inkstone);

    const brushRest = new THREE.Mesh(
      new THREE.BoxGeometry(0.14, 0.04, 0.035),
      this.materials.bronzeGold
    );
    brushRest.position.set(0.34, 0.055, -0.14);
    deskTopGroup.add(brushRest);

    // Cây Bút Lông Vàng (Cán gỗ son + đầu bút vàng)
    const penGroup = new THREE.Group();
    penGroup.position.set(0.32, 0.09, -0.02);
    penGroup.rotation.z = -0.35;
    penGroup.rotation.y = 0.28;

    const penShaft = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.015, 0.34, 12),
      this.materials.redSilk
    );
    penShaft.rotation.x = Math.PI / 2;
    penGroup.add(penShaft);

    const penFerrule = new THREE.Mesh(
      new THREE.CylinderGeometry(0.016, 0.016, 0.05, 12),
      this.materials.brightGold
    );
    penFerrule.rotation.x = Math.PI / 2;
    penFerrule.position.z = 0.16;
    penGroup.add(penFerrule);

    const penTip = new THREE.Mesh(
      new THREE.ConeGeometry(0.018, 0.075, 12),
      this.materials.glowCrystal
    );
    penTip.rotation.x = Math.PI / 2;
    penTip.position.z = 0.22;
    penGroup.add(penTip);

    deskTopGroup.add(penGroup);
    deskGroup.add(deskTopGroup);

    // 5. Bảng đồng mặt trước Bàn Giấy Bút: "✍️ BÀN GIẤY BÚT — VIẾT LỜI TRI ÂN"
    const frontSignTex = this.createTextPlaqueTexture({
      title: '✍️ BÀN GIẤY BÚT — VIẾT THÔNG ĐIỆP TRI ÂN',
      subtitle: 'Bấm vào bàn giấy bút này để viết lời chúc gắn lên Lá Vàng',
      quote: '',
      width: 1024,
      height: 280
    });
    const frontSign = new THREE.Mesh(
      new THREE.PlaneGeometry(0.84, 0.24),
      new THREE.MeshBasicMaterial({ map: frontSignTex })
    );
    frontSign.position.set(0, 0.62, 0.29);
    deskGroup.add(frontSign);

    // Hitbox rộng quanh Bàn Giấy Bút để người xem click cực nhạy
    const deskHitbox = new THREE.Mesh(
      new THREE.BoxGeometry(1.35, 1.45, 1.05),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.001, depthWrite: false })
    );
    deskHitbox.position.y = 0.72;
    deskGroup.add(deskHitbox);

    const deskMeta = {
      isWriteTributeDesk: true,
      artifactId: 'art-wishing-tree'
    };
    deskGroup.userData = deskMeta;
    deskGroup.traverse((c) => {
      c.userData = deskMeta;
    });

    group.add(deskGroup);
  }

  // Hiệu ứng bùng sáng nhẹ nhàng khi có lời chúc mới được gửi lên cây
  triggerWishStarBurst() {
    this.starBurstBoost = 0.65;
  }

  // Vẽ chiếc Lá Bồ Đề Vàng 3D khắc tên Thầy/Cô và Học sinh
  createGoldenLeafTexture(tribute, idx) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 340;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, 256, 340);

    // Cuống lá phía trên
    ctx.strokeStyle = '#9b1d20';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(128, 4);
    ctx.lineTo(128, 38);
    ctx.stroke();

    // Hình dáng Lá Bồ Đề Vàng (Heart-shaped Bodhi Leaf)
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(128, 34);
    ctx.bezierCurveTo(215, 28, 246, 118, 212, 198);
    ctx.bezierCurveTo(184, 258, 138, 292, 128, 332);
    ctx.bezierCurveTo(118, 292, 72, 258, 44, 198);
    ctx.bezierCurveTo(10, 118, 41, 28, 128, 34);
    ctx.closePath();

    const leafGrad = ctx.createLinearGradient(30, 30, 226, 320);
    leafGrad.addColorStop(0, '#fff7cb');
    leafGrad.addColorStop(0.35, '#f6d272');
    leafGrad.addColorStop(0.75, '#d99f36');
    leafGrad.addColorStop(1, '#9e6814');
    ctx.fillStyle = leafGrad;
    ctx.fill();

    ctx.lineWidth = 5;
    ctx.strokeStyle = '#7e1419';
    ctx.stroke();

    // Gân lá vàng tinh xảo
    ctx.strokeStyle = 'rgba(138, 28, 33, 0.22)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(128, 38);
    ctx.lineTo(128, 318);
    ctx.stroke();

    [85, 130, 175, 220].forEach((vy, i) => {
      const span = 68 - i * 11;
      ctx.beginPath();
      ctx.moveTo(128, vy);
      ctx.quadraticCurveTo(128 - span * 0.6, vy - 12, 128 - span, vy - 22);
      ctx.moveTo(128, vy);
      ctx.quadraticCurveTo(128 + span * 0.6, vy - 12, 128 + span, vy - 22);
      ctx.stroke();
    });

    // Nội dung khắc trên chiếc Lá Vàng
    ctx.fillStyle = '#7e1419';
    ctx.font = 'bold 15px "Be Vietnam Pro", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`🍃 LÁ VÀNG #${idx + 1}`, 128, 96);

    ctx.fillStyle = '#102138';
    this.drawFittedText(
      ctx,
      tribute?.teacher || 'Thầy Cô Kính Mến',
      128,
      132,
      158,
      17,
      '"Cormorant Garamond", serif',
      'bold'
    );

    ctx.fillStyle = '#241808';
    ctx.font = 'italic 13.5px "Cormorant Garamond", serif';
    this.wrapText(ctx, `“${(tribute?.message || '').slice(0, 48)}...”`, 128, 162, 152, 17);

    ctx.fillStyle = '#7e1419';
    this.drawFittedText(
      ctx,
      `— ${tribute?.senderName || tribute?.sender || 'Học sinh'}`,
      128,
      232,
      136,
      13,
      '"Be Vietnam Pro", sans-serif',
      'bold'
    );

    ctx.restore();
    return new THREE.CanvasTexture(canvas);
  }

  // Tạo một chiếc Lá Bồ Đề Vàng 3D đung đưa trên cành cây — Bấm vào lá mở ngay thông điệp!
  addGoldenLeafToRotatingTree(tribute, explicitIndex, slotIndex) {
    if (!this.starGemsContainer) return null;
    const leafTex = this.createGoldenLeafTexture(tribute, explicitIndex);

    const s = typeof slotIndex === 'number' ? slotIndex : explicitIndex;
    const angle = s * 2.39996 + 0.95;
    const tier = s % 4;
    const radius = 0.84 + tier * 0.36 + (s % 3) * 0.14;
    const posY = 1.98 + tier * 0.35 + Math.sin(s * 1.5) * 0.14;

    const leafGroup = new THREE.Group();
    leafGroup.position.set(Math.cos(angle) * radius, posY, Math.sin(angle) * radius);
    leafGroup.rotation.y = -angle + Math.PI / 2;

    const leafMat = new THREE.MeshStandardMaterial({
      map: leafTex,
      transparent: true,
      alphaTest: 0.08,
      side: THREE.DoubleSide,
      roughness: 0.24,
      metalness: 0.35
    });

    const leafPlane = new THREE.Mesh(new THREE.PlaneGeometry(0.34, 0.45), leafMat);
    leafGroup.add(leafPlane);

    // Hitbox rộng quanh chiếc lá vàng để bấm cực nhạy
    const leafHitbox = new THREE.Mesh(
      new THREE.BoxGeometry(0.44, 0.54, 0.16),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.001, depthWrite: false })
    );
    leafGroup.add(leafHitbox);

    const leafMeta = {
      isTributeCard: true,
      isGoldenLeaf: true,
      tributeData: tribute,
      tributeIndex: explicitIndex,
      artifactId: 'art-wishing-tree',
      phase: s * 0.55
    };
    leafGroup.userData = leafMeta;
    leafGroup.traverse((c) => {
      c.userData = leafMeta;
    });

    this.starGemsContainer.add(leafGroup);
    return leafGroup;
  }

  // Thêm Tinh Cầu Pha Lê Phát Sáng (Ngôi sao pha lê) đại diện cho hàng ngàn lời chúc
  addCrystalOrbToRotatingTree(tribute, explicitIndex, slotIndex) {
    if (!this.starGemsContainer) return null;

    const s = typeof slotIndex === 'number' ? slotIndex : explicitIndex;
    const angle = s * 2.39996 + 0.85;
    const tier = s % 4;
    const radius = 0.96 + tier * 0.35 + ((s * 5) % 7) * 0.14;
    const posY = 1.76 + tier * 0.38 + Math.sin(s * 1.6) * 0.16;

    const orbGroup = new THREE.Group();
    orbGroup.position.set(Math.cos(angle) * radius, posY, Math.sin(angle) * radius);

    // Dây cước vàng mạ phát sáng nhỏ
    const tinyCord = new THREE.Mesh(
      new THREE.CylinderGeometry(0.006, 0.006, 0.24, 6),
      new THREE.MeshBasicMaterial({ color: 0xffe89e, transparent: true, opacity: 0.65 })
    );
    tinyCord.position.y = 0.12;
    orbGroup.add(tinyCord);

    // Tinh cầu pha lê đa giác phát sáng (xen kẽ Vàng Kim và Lam Ngọc thiên hà)
    const isGold = s % 2 === 0;
    const crystalMat = new THREE.MeshStandardMaterial({
      color: isGold ? 0xffea78 : 0x74eeff,
      emissive: isGold ? 0xcc8400 : 0x0088b3,
      emissiveIntensity: 0.85,
      roughness: 0.12,
      metalness: 0.82
    });

    const crystalOrb = new THREE.Mesh(new THREE.IcosahedronGeometry(0.092, 1), crystalMat);
    orbGroup.add(crystalOrb);

    // Vòng hào quang sáng bao bọc tinh cầu
    const glowHalo = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.128, 0),
      new THREE.MeshBasicMaterial({
        color: isGold ? 0xfff0aa : 0xa6f4ff,
        transparent: true,
        opacity: 0.32,
        wireframe: true
      })
    );
    orbGroup.add(glowHalo);

    // Hitbox rộng bao trùm tinh cầu để người xem click cực kỳ dễ dàng
    const hitbox = new THREE.Mesh(
      new THREE.SphereGeometry(0.28, 8, 8),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.001, depthWrite: false })
    );
    orbGroup.add(hitbox);

    const orbMeta = {
      isTributeCard: true,
      isCrystalOrb: true,
      tributeData: tribute,
      tributeIndex: explicitIndex,
      artifactId: 'art-wishing-tree',
      phase: s * 0.42
    };
    orbGroup.userData = orbMeta;
    orbGroup.traverse((c) => {
      c.userData = orbMeta;
    });

    this.starGemsContainer.add(orbGroup);
    return orbGroup;
  }

  // Xóa và dựng lại 32 Thẻ Lụa Vàng + 48 Tinh Cầu Pha Lê Phát Sáng trên cây 3D
  rebuildWishingTreeCards(tributesList) {
    if (!this.wishCardsContainer) return;
    while (this.wishCardsContainer.children.length > 0) {
      this.wishCardsContainer.remove(this.wishCardsContainer.children[0]);
    }
    if (this.starGemsContainer) {
      while (this.starGemsContainer.children.length > 0) {
        this.starGemsContainer.remove(this.starGemsContainer.children[0]);
      }
    }

    const list = (tributesList && tributesList.length > 0) ? tributesList : (window.INITIAL_TRIBUTES || []);
    this.wishCardCount = 0;

    // 1. Treo đúng 32 Thẻ Lụa Vàng tiêu biểu đung đưa khắp các cành cây
    const maxVisibleCards = 32;
    for (let idx = 0; idx < maxVisibleCards; idx++) {
      const mappedTribute = list[idx % list.length];
      this.addWishCardToRotatingTree(mappedTribute, idx);
    }

    // 2. Treo đúng 48 Tinh Cầu Pha Lê Phát Sáng đại diện cho hàng ngàn lời chúc gửi về
    if (this.starGemsContainer) {
      const crystalCount = 48;
      for (let s = 0; s < crystalCount; s++) {
        const mappedIndex = s % list.length;
        this.addCrystalOrbToRotatingTree(list[mappedIndex], mappedIndex, s);
      }
    }
  }

  // Tạo một tấm thẻ vàng 3D có ghi lời chúc của học sinh treo lủng lẳng trên cành cây xoay
  // Khi học sinh bấm vào tấm thẻ này trên cây, sẽ mở Khung Thiệp Tri Ân tuyệt đẹp hiển thị lời nhắn của học sinh đó!
  addWishCardToRotatingTree(tribute, explicitIndex) {
    const container = this.wishCardsContainer || this.wishingTreeCanopy;
    if (!container) return null;
    const idx = typeof explicitIndex === 'number' ? explicitIndex : this.wishCardCount;
    this.wishCardCount = Math.max(this.wishCardCount, idx + 1);

    // Phân bố xoắn ốc vàng đều quanh các tầng cành cây cho 32 thẻ lụa vàng
    const goldenAngle = idx * 2.39996 + 0.3;
    const tier = idx % 4;
    const ringBoost = (idx % 3) * 0.16;
    const radius = 0.94 + tier * 0.36 + ringBoost;
    const attachY = 1.82 + tier * 0.36 + (idx % 2) * 0.12;

    const cardHolder = new THREE.Group();
    cardHolder.position.set(Math.cos(goldenAngle) * radius, attachY, Math.sin(goldenAngle) * radius);
    cardHolder.rotation.y = -goldenAngle + Math.PI / 2;
    cardHolder.userData = { phase: idx * 0.42 };

    // Dây lụa đỏ treo thẻ lời chúc
    const cord = new THREE.Mesh(
      new THREE.CylinderGeometry(0.01, 0.01, 0.28, 8),
      this.materials.redSilk
    );
    cord.position.y = -0.14;
    cardHolder.add(cord);

    // Nút thắt đồng phía trên thẻ
    const goldKnot = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.04, 0),
      this.materials.brightGold
    );
    goldKnot.position.y = -0.26;
    cardHolder.add(goldKnot);

    // Vẽ nội dung lời chúc của học sinh lên thẻ vàng 3D sắc nét
    const cardCanvas = document.createElement('canvas');
    cardCanvas.width = 320;
    cardCanvas.height = 460;
    const ctx = cardCanvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 320, 460);
    grad.addColorStop(0, '#fff2ba');
    grad.addColorStop(0.45, '#efd07b');
    grad.addColorStop(1, '#c89438');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 320, 460);

    // Viền son đỏ & chỉ vàng truyền thống
    ctx.strokeStyle = '#7e1419';
    ctx.lineWidth = 8;
    ctx.strokeRect(12, 12, 296, 436);

    ctx.strokeStyle = '#9e6d1a';
    ctx.lineWidth = 2;
    ctx.strokeRect(22, 22, 276, 416);

    // Tiêu đề thiệp
    ctx.fillStyle = '#7e1419';
    ctx.font = 'bold 21px "Cormorant Garamond", serif';
    ctx.textAlign = 'center';
    ctx.fillText('✦ THIỆP TRI ÂN ✦', 160, 56);

    // Tên Thầy/Cô nhận
    ctx.fillStyle = '#102138';
    ctx.font = 'bold 17px "Be Vietnam Pro", sans-serif';
    this.wrapText(ctx, (tribute?.teacher || 'Kính gửi Thầy Cô').slice(0, 42), 160, 96, 250, 22);

    // Đường kẻ hoa văn nhỏ
    ctx.strokeStyle = 'rgba(126, 20, 25, 0.35)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(60, 134);
    ctx.lineTo(260, 134);
    ctx.stroke();

    // Trích đoạn lời nhắn
    ctx.fillStyle = '#1a283d';
    ctx.font = 'italic 17px "Cormorant Garamond", serif';
    this.wrapText(ctx, `“${(tribute?.message || '').slice(0, 100)}”`, 160, 164, 250, 22);

    // Tên học sinh gửi & Lớp - Trường - Tỉnh
    ctx.fillStyle = '#7e1419';
    ctx.font = 'bold 15px "Be Vietnam Pro", sans-serif';
    this.drawFittedText(
      ctx,
      `— ${tribute?.sender || 'Học sinh'}`,
      160,
      368,
      260,
      15,
      11,
      'bold',
      '"Be Vietnam Pro", sans-serif'
    );

    const metaParts = [tribute?.className, tribute?.school, tribute?.province].filter(Boolean);
    if (metaParts.length > 0) {
      ctx.fillStyle = '#3b2406';
      ctx.font = '12px "Be Vietnam Pro", sans-serif';
      this.wrapText(ctx, metaParts.join(' • '), 160, 392, 256, 15);
    }

    ctx.fillStyle = '#472d08';
    ctx.font = 'italic 11px "Be Vietnam Pro", sans-serif';
    ctx.fillText('(Bấm vào thiệp để mở xem)', 160, 428);

    const cardTex = new THREE.CanvasTexture(cardCanvas);
    const cardMesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.34, 0.48, 0.018),
      new THREE.MeshStandardMaterial({
        map: cardTex,
        roughness: 0.22,
        metalness: 0.32
      })
    );
    cardMesh.position.y = -0.51;
    cardHolder.add(cardMesh);

    // Hitbox riêng cho từng tấm thiệp để người dùng click cực nhạy
    const cardHitbox = new THREE.Mesh(
      new THREE.BoxGeometry(0.46, 0.62, 0.14),
      new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.001, depthWrite: false })
    );
    cardHitbox.position.y = -0.51;
    cardHolder.add(cardHitbox);

    // Tua rua lụa đỏ dưới đáy thẻ
    const tassel = new THREE.Mesh(
      new THREE.ConeGeometry(0.03, 0.15, 10),
      this.materials.redSilk
    );
    tassel.position.y = -0.82;
    cardHolder.add(tassel);

    const tributeMeta = {
      isTributeCard: true,
      tributeData: tribute,
      tributeIndex: idx,
      artifactId: 'art-wishing-tree'
    };

    cardHolder.userData = tributeMeta;
    cardHolder.traverse((c) => {
      c.userData = tributeMeta;
    });

    container.add(cardHolder);
    return cardHolder;
  }

  // Giữ tương thích với hàm cũ
  addTributeLeafToTree(tribute) {
    this.addWishCardToRotatingTree(tribute);
  }

  buildStandardPedestal(group, withGlass = true) {
    const stoneBase = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.22, 1.15), this.materials.plinthStone);
    stoneBase.position.y = 0.11;
    group.add(stoneBase);

    const woodBody = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.82, 1.0), this.materials.naturalWood);
    woodBody.position.y = 0.63;
    group.add(woodBody);

    const bronzeBelt = new THREE.Mesh(new THREE.BoxGeometry(1.44, 0.06, 1.04), this.materials.bronzeGold);
    bronzeBelt.position.y = 1.05;
    group.add(bronzeBelt);

    const velvetTop = new THREE.Mesh(new THREE.BoxGeometry(1.34, 0.05, 0.94), this.materials.navyPanel);
    velvetTop.position.y = 1.1;
    group.add(velvetTop);

    if (withGlass) {
      const glassBox = new THREE.Mesh(new THREE.BoxGeometry(1.36, 1.05, 0.96), this.materials.glassVitrine);
      glassBox.position.y = 1.63;
      group.add(glassBox);

      const frameTop = new THREE.Mesh(new THREE.BoxGeometry(1.38, 0.03, 0.98), this.materials.bronzeGold);
      frameTop.position.y = 2.16;
      group.add(frameTop);
    }
  }

  buildExhibitPlaque(group, art) {
    const dx = art.viewOffset.x - art.position.x;
    const dz = art.viewOffset.z - art.position.z;
    const angle = Math.atan2(dx, dz);
    const dist = art.id === 'art-monument' ? 2.45 : art.id === 'art-wishing-tree' ? 2.1 : 1.15;

    const stand = new THREE.Group();
    stand.position.set(Math.sin(angle) * dist, 0, Math.cos(angle) * dist);
    stand.rotation.y = angle;

    // Trụ kim loại đồng đứng
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.045, 0.9, 12), this.materials.bronzeGold);
    pole.position.y = 0.45;
    stand.add(pole);

    // Đế chân đĩa đồng tròn trên sàn
    const footDisc = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, 0.04, 16), this.materials.bronzeGold);
    footDisc.position.y = 0.02;
    stand.add(footDisc);

    // Sử dụng bộ tạo Texture độ nét cao 2048x960 có anisotropy=16
    const plaqueTex = this.createCrispExhibitPlaqueTexture(art);

    // Bảng đồng đỡ biển lớn hơn (0.88m x 0.48m) giúp đọc từ xa cực kỳ rõ ràng
    const board = new THREE.Mesh(new THREE.BoxGeometry(0.88, 0.48, 0.035), this.materials.bronzeGold);
    board.position.set(0, 0.94, 0);
    board.rotation.x = -Math.PI / 5.2; // Độ nghiêng chuẩn 35° hướng lên tầm mắt người đứng
    stand.add(board);

    const face = new THREE.Mesh(new THREE.PlaneGeometry(0.84, 0.44), new THREE.MeshBasicMaterial({ map: plaqueTex }));
    face.position.z = 0.02;
    board.add(face);

    // Gắn tương tác: Click thẳng vào biển gắn này sẽ mở modal hồ sơ chi tiết ngay lập tức!
    face.userData = { artifact: art };
    board.userData = { artifact: art };
    this.interactables.push(face);
    this.interactables.push(board);

    group.add(stand);
  }

  // ==================== CÁC MÔ HÌNH 3D CHI TIẾT ====================
  buildMonument3D(group) {
    [
      { r: 2.1, h: 0.28, y: 0.14, mat: this.materials.plinthStone },
      { r: 1.65, h: 0.32, y: 0.44, mat: this.materials.navyPanel },
      { r: 1.25, h: 0.36, y: 0.78, mat: this.materials.bronzeGold }
    ].forEach((step) => {
      const m = new THREE.Mesh(new THREE.CylinderGeometry(step.r, step.r + 0.08, step.h, 48), step.mat);
      m.position.y = step.y;
      group.add(m);
    });

    [[-0.55, -0.55], [0.55, -0.55], [-0.55, 0.55], [0.55, 0.55]].forEach(([px, pz]) => {
      const col = new THREE.Mesh(new THREE.BoxGeometry(0.14, 1.35, 0.14), this.materials.naturalWood);
      col.position.set(px, 1.62, pz);
      group.add(col);
    });

    const roof1 = new THREE.Mesh(new THREE.ConeGeometry(1.25, 0.42, 4), this.materials.bronzeGold);
    roof1.rotation.y = Math.PI / 4;
    roof1.position.y = 2.42;
    group.add(roof1);

    const sunRing = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.05, 16, 32), this.materials.brightGold);
    sunRing.position.y = 1.65;
    group.add(sunRing);

    const lotusGroup = new THREE.Group();
    lotusGroup.position.y = 2.95;
    for (let i = 0; i < 8; i++) {
      const petal = new THREE.Mesh(new THREE.ConeGeometry(0.24, 0.85, 5), this.materials.brightGold);
      const a = (i * Math.PI * 2) / 8;
      petal.position.set(Math.cos(a) * 0.28, 0.2, Math.sin(a) * 0.28);
      petal.rotation.z = -Math.cos(a) * 0.38;
      petal.rotation.x = Math.sin(a) * 0.38;
      lotusGroup.add(petal);
    }

    const flame = new THREE.Mesh(new THREE.OctahedronGeometry(0.42, 2), this.materials.glowCrystal);
    flame.scale.set(0.75, 1.45, 0.75);
    flame.position.y = 0.65;
    lotusGroup.add(flame);

    group.add(lotusGroup);
    this.animatedObjects.push({ mesh: lotusGroup, rotateY: 0.35 });
  }

  buildChuVanAn3D(group) {
    const plinth = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.12, 0.42), this.materials.naturalWood);
    plinth.position.set(-0.22, 1.18, 0);
    group.add(plinth);

    const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.23, 0.42, 16), this.materials.agedBronze);
    torso.position.set(-0.22, 1.45, 0);
    group.add(torso);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.12, 20, 20), this.materials.agedBronze);
    head.position.set(-0.22, 1.75, 0);
    group.add(head);

    const hat = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.12, 0.14, 12), this.materials.bronzeGold);
    hat.position.set(-0.22, 1.88, 0);
    group.add(hat);

    const scrollPaper = new THREE.Mesh(
      new THREE.BoxGeometry(0.48, 0.02, 0.34),
      new THREE.MeshStandardMaterial({ color: 0xf3e5c8, roughness: 0.7 })
    );
    scrollPaper.position.set(0.24, 1.18, 0.04);
    scrollPaper.rotation.z = 0.12;
    group.add(scrollPaper);
  }

  buildStele3D(group) {
    const platform = new THREE.Mesh(new THREE.BoxGeometry(1.75, 0.26, 2.05), this.materials.plinthStone);
    platform.position.y = 0.13;
    group.add(platform);

    const shell = new THREE.Mesh(
      new THREE.SphereGeometry(0.62, 24, 16, 0, Math.PI * 2, 0, Math.PI / 2),
      this.materials.blueStone
    );
    shell.scale.set(0.95, 0.65, 1.25);
    shell.position.set(0, 0.26, 0);
    group.add(shell);

    const turtleHead = new THREE.Mesh(new THREE.SphereGeometry(0.19, 16, 16), this.materials.blueStone);
    turtleHead.scale.set(0.9, 0.85, 1.35);
    turtleHead.position.set(0.68, 0.45, 0);
    group.add(turtleHead);

    const steleBody = new THREE.Mesh(new THREE.BoxGeometry(0.22, 1.55, 0.96), this.materials.blueStone);
    steleBody.position.set(0, 1.32, 0);
    group.add(steleBody);

    const steleTop = new THREE.Mesh(
      new THREE.CylinderGeometry(0.48, 0.48, 0.22, 24, 1, false, 0, Math.PI),
      this.materials.blueStone
    );
    steleTop.rotation.z = Math.PI / 2;
    steleTop.rotation.y = Math.PI / 2;
    steleTop.position.set(0, 2.09, 0);
    group.add(steleTop);

    const steleTex = this.createTextPlaqueTexture({
      title: 'HIỀN TÀI LÀ NGUYÊN KHÍ QUỐC GIA',
      subtitle: 'Bia Tiến Sĩ Khoa Nhâm Tuất (1442) • Dựng năm 1484',
      quote: 'Thân Nhân Trung phụng soạn',
      bg: '#384148',
      border: '#c89d54',
      width: 512,
      height: 768
    });
    const inscription = new THREE.Mesh(new THREE.PlaneGeometry(0.84, 1.36), new THREE.MeshBasicMaterial({ map: steleTex }));
    inscription.rotation.y = Math.PI / 2;
    inscription.position.set(0.115, 1.32, 0);
    group.add(inscription);
  }

  buildScholarSet3D(group) {
    const inkstone = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.06, 0.26), this.materials.blueStone);
    inkstone.position.set(-0.28, 1.16, 0.06);
    group.add(inkstone);

    const inkPool = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.065, 20), this.materials.navyDeep);
    inkPool.position.set(-0.28, 1.165, 0.06);
    group.add(inkPool);

    const rack = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.36, 0.05), this.materials.naturalWood);
    rack.position.set(0.02, 1.31, -0.16);
    group.add(rack);

    [-0.08, 0, 0.08].forEach((bx) => {
      const brush = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.01, 0.26, 8), this.materials.lightWood);
      brush.position.set(0.02 + bx, 1.3, -0.12);
      group.add(brush);
    });

    const woodblock = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.05, 0.28), this.materials.naturalWood);
    woodblock.position.set(0.3, 1.22, 0.08);
    woodblock.rotation.x = 0.28;
    group.add(woodblock);
  }

  buildOilLampExhibit3D(group) {
    const boardCanvas = document.createElement('canvas');
    boardCanvas.width = 512;
    boardCanvas.height = 360;
    const ctx = boardCanvas.getContext('2d');
    ctx.fillStyle = '#1e2822';
    ctx.fillRect(0, 0, 512, 360);
    ctx.strokeStyle = '#8b5e3c';
    ctx.lineWidth = 18;
    ctx.strokeRect(0, 0, 512, 360);
    ctx.fillStyle = '#f5f2eb';
    ctx.font = 'bold 42px "Cormorant Garamond", serif';
    ctx.textAlign = 'center';
    ctx.fillText('BÌNH DÂN HỌC VỤ (1945)', 256, 85);
    ctx.font = 'italic 34px Georgia, serif';
    ctx.fillText('“I - TỜ • O tròn như quả trứng gà”', 256, 175);
    ctx.font = '28px sans-serif';
    ctx.fillText('Diệt Giặc Dốt – Học Để Giữ Nước', 256, 265);

    const boardTex = new THREE.CanvasTexture(boardCanvas);
    const blackboard = new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.48, 0.04), new THREE.MeshBasicMaterial({ map: boardTex }));
    blackboard.position.set(-0.18, 1.44, -0.1);
    blackboard.rotation.x = -0.15;
    group.add(blackboard);

    const lampBase = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.13, 0.14, 20), this.materials.bronzeGold);
    lampBase.position.set(0.32, 1.2, 0.12);
    group.add(lampBase);

    const flame = new THREE.Mesh(new THREE.SphereGeometry(0.045, 12, 12), this.materials.glowCrystal);
    flame.scale.set(0.7, 1.5, 0.7);
    flame.position.set(0.32, 1.35, 0.12);
    group.add(flame);

    const chimney = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.08, 0.24, 16), this.materials.glassVitrine);
    chimney.position.set(0.32, 1.38, 0.12);
    group.add(chimney);
  }

  buildBombDrum3D(group) {
    const base = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.28, 1.2), this.materials.plinthStone);
    base.position.y = 0.14;
    group.add(base);

    [-0.58, 0.58].forEach((px) => {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.65, 0.12), this.materials.naturalWood);
      post.position.set(px, 1.05, 0);
      group.add(post);
    });

    const crossBar = new THREE.Mesh(new THREE.BoxGeometry(1.45, 0.14, 0.14), this.materials.naturalWood);
    crossBar.position.set(0, 1.85, 0);
    group.add(crossBar);

    const bombShell = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.14, 0.92, 24), this.materials.blueStone);
    bombShell.position.set(-0.1, 1.18, 0);
    group.add(bombShell);

    const bombNose = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.24, 24), this.materials.bronzeGold);
    bombNose.rotation.x = Math.PI;
    bombNose.position.set(-0.1, 0.6, 0);
    group.add(bombNose);

    const strawMat = new THREE.MeshStandardMaterial({ color: 0xdab362, roughness: 0.85 });
    const hatDome = new THREE.Mesh(new THREE.SphereGeometry(0.2, 20, 14, 0, Math.PI * 2, 0, Math.PI / 2), strawMat);
    hatDome.position.set(0.38, 0.34, 0.18);
    group.add(hatDome);

    const hatBrim = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.04, 24), strawMat);
    hatBrim.position.set(0.38, 0.34, 0.18);
    group.add(hatBrim);
  }

  buildTruongSonBag3D(group) {
    const bag = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.34, 0.14), this.materials.naturalWood);
    bag.position.set(-0.24, 1.32, -0.06);
    bag.rotation.y = 0.25;
    group.add(bag);

    const helmetMat = new THREE.MeshStandardMaterial({ color: 0x4b6043, roughness: 0.7 });
    const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.18, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2), helmetMat);
    helmet.position.set(0.28, 1.18, -0.05);
    group.add(helmet);

    const brim = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.26, 0.03, 20), helmetMat);
    brim.position.set(0.28, 1.18, -0.05);
    group.add(brim);

    const notebook = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.03, 0.24), new THREE.MeshStandardMaterial({ color: 0xf4e8ce, roughness: 0.8 }));
    notebook.position.set(0.05, 1.16, 0.22);
    group.add(notebook);
  }

  buildHighlandBike3D(group) {
    const plinth = new THREE.Mesh(new THREE.BoxGeometry(2.05, 0.34, 0.95), this.materials.plinthStone);
    plinth.position.y = 0.17;
    group.add(plinth);

    const bikeGroup = new THREE.Group();
    bikeGroup.position.y = 0.34;
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x1d4d4f, roughness: 0.35, metalness: 0.6 });

    [-0.56, 0.56].forEach((wx) => {
      const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.028, 12, 32), this.materials.navyDeep);
      wheel.position.set(wx, 0.36, 0);
      bikeGroup.add(wheel);

      const rim = new THREE.Mesh(new THREE.TorusGeometry(0.31, 0.012, 8, 32), this.materials.bronzeGold);
      rim.position.set(wx, 0.36, 0);
      bikeGroup.add(rim);
    });

    const topTube = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.68, 10), frameMat);
    topTube.rotation.z = Math.PI / 2;
    topTube.position.set(0, 0.72, 0);
    bikeGroup.add(topTube);

    const seatPost = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.56, 10), frameMat);
    seatPost.position.set(-0.22, 0.58, 0);
    bikeGroup.add(seatPost);

    const headPost = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.68, 10), frameMat);
    headPost.rotation.z = 0.22;
    headPost.position.set(0.42, 0.64, 0);
    bikeGroup.add(headPost);

    const handlebar = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.48, 10), this.materials.bronzeGold);
    handlebar.rotation.x = Math.PI / 2;
    handlebar.position.set(0.36, 0.96, 0);
    bikeGroup.add(handlebar);

    const saddle = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.06, 0.16), this.materials.naturalWood);
    saddle.position.set(-0.24, 0.88, 0);
    bikeGroup.add(saddle);

    const books = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.22, 0.24), new THREE.MeshStandardMaterial({ color: 0xc89d54, roughness: 0.6 }));
    books.position.set(-0.56, 0.84, 0);
    bikeGroup.add(books);

    const lunchBox = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.22, 16), new THREE.MeshStandardMaterial({ color: 0xd8dce0, roughness: 0.25, metalness: 0.8 }));
    lunchBox.position.set(-0.56, 1.05, 0);
    bikeGroup.add(lunchBox);

    group.add(bikeGroup);
  }

  buildTeachingTools3D(group) {
    const eke1 = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.04, 0.06), this.materials.lightWood);
    eke1.position.set(-0.24, 1.18, -0.1);
    group.add(eke1);

    const eke2 = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.38, 0.04), this.materials.lightWood);
    eke2.position.set(-0.45, 1.35, -0.1);
    group.add(eke2);

    const abacus = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.24, 0.05), this.materials.naturalWood);
    abacus.position.set(0.22, 1.28, -0.12);
    abacus.rotation.x = -0.25;
    group.add(abacus);

    const inkBottle = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.12, 16), new THREE.MeshStandardMaterial({ color: 0x3b1e6d, roughness: 0.2, metalness: 0.3 }));
    inkBottle.position.set(0.05, 1.18, 0.18);
    group.add(inkBottle);

    const pen = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.012, 0.28, 12), this.materials.bronzeGold);
    pen.rotation.z = Math.PI / 2.2;
    pen.position.set(-0.18, 1.16, 0.2);
    group.add(pen);
  }

  buildMemoryBook3D(group) {
    const bookLeft = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.03, 0.36), new THREE.MeshStandardMaterial({ color: 0xf9f3e3, roughness: 0.75 }));
    bookLeft.position.set(-0.26, 1.17, 0);
    bookLeft.rotation.z = -0.08;
    group.add(bookLeft);

    const bookRight = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.03, 0.36), new THREE.MeshStandardMaterial({ color: 0xf9f3e3, roughness: 0.75 }));
    bookRight.position.set(0.0, 1.17, 0);
    bookRight.rotation.z = 0.08;
    group.add(bookRight);

    const flower = new THREE.Mesh(new THREE.OctahedronGeometry(0.05, 1), new THREE.MeshStandardMaterial({ color: 0xd63229, roughness: 0.5 }));
    flower.scale.set(1, 0.2, 1);
    flower.position.set(-0.24, 1.2, 0.02);
    group.add(flower);

    const medalBox = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.06, 0.32), new THREE.MeshStandardMaterial({ color: 0x7a161b, roughness: 0.6 }));
    medalBox.position.set(0.34, 1.17, 0.04);
    group.add(medalBox);

    const medalStar = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.02, 10), this.materials.brightGold);
    medalStar.position.set(0.34, 1.21, 0.06);
    group.add(medalStar);
  }


  // ==================== TẠO TEXTURE CÂU NÓI & LỜI CĂN DẶN CỦA BÁC HỒ ====================
  createUncleHoQuoteTexture({ title, quote, source, date }) {
    const width = 2048;
    const height = 1024;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // Nền sơn mài xanh sẫm hoàng gia trang trọng
    const grad = ctx.createLinearGradient(0, 0, 0, height);
    grad.addColorStop(0, '#0a1628');
    grad.addColorStop(0.5, '#122543');
    grad.addColorStop(1, '#091526');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Khung viền đôi mạ vàng đồng chạm hoa sen
    ctx.strokeStyle = '#c89d54';
    ctx.lineWidth = 14;
    ctx.strokeRect(32, 32, width - 64, height - 64);

    ctx.strokeStyle = '#f5d77f';
    ctx.lineWidth = 4;
    ctx.strokeRect(54, 54, width - 108, height - 108);

    // Huy hiệu Hoa sen vàng trên đỉnh
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 50px serif';
    ctx.textAlign = 'center';
    ctx.fillText('🪷 ✦ 🪷', width / 2, 115);

    // Tiêu đề bảng vàng - Tự động điều chỉnh kích thước để không tràn viền
    let titleFontSize = 40;
    ctx.font = `bold ${titleFontSize}px "Cinzel", "Times New Roman", serif`;
    while (ctx.measureText(title.toUpperCase()).width > width - 220 && titleFontSize > 22) {
      titleFontSize -= 2;
      ctx.font = `bold ${titleFontSize}px "Cinzel", "Times New Roman", serif`;
    }
    ctx.fillStyle = '#f5d77f';
    ctx.textAlign = 'center';
    ctx.fillText(title.toUpperCase(), width / 2, 185);

    // Đường gạch chỉ vàng cách điệu
    const lineGrad = ctx.createLinearGradient(width / 2 - 380, 0, width / 2 + 380, 0);
    lineGrad.addColorStop(0, 'rgba(212, 175, 55, 0)');
    lineGrad.addColorStop(0.5, 'rgba(255, 215, 0, 0.95)');
    lineGrad.addColorStop(1, 'rgba(212, 175, 55, 0)');
    ctx.strokeStyle = lineGrad;
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 380, 225);
    ctx.lineTo(width / 2 + 380, 225);
    ctx.stroke();

    // Lời dạy của Bác - chữ lớn trang nghiêm, nổi bật
    ctx.font = 'bold italic 54px "Merriweather", "Playfair Display", "Times New Roman", serif';
    ctx.textAlign = 'center';

    const words = quote.split(' ');
    let line = '';
    const lines = [];
    const maxW = width - 260;
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxW && n > 0) {
        lines.push(line.trim());
        line = words[n] + ' ';
      } else {
        line = testLine;
      }
    }
    lines.push(line.trim());

    // Vẽ từng dòng trích dẫn
    const totalLinesH = lines.length * 85;
    const startY = 320 + (460 - totalLinesH) / 2;
    lines.forEach((l, idx) => {
      // Bóng chữ nhẹ tạo chiều sâu nổi
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.fillText(l, width / 2 + 3, startY + idx * 85 + 3);

      ctx.fillStyle = '#fff6de';
      ctx.fillText(l, width / 2, startY + idx * 85);
    });

    // Trích nguồn / hoàn cảnh lịch sử
    ctx.fillStyle = '#d4af37';
    ctx.font = 'italic 36px "Times New Roman", serif';
    ctx.fillText('— ' + source, width / 2, height - 120);

    if (date) {
      

      ctx.fillStyle = '#a6b8cc';
      let dateFontSize = 26;
      ctx.font = `italic ${dateFontSize}px "Times New Roman", sans-serif`;
      while (ctx.measureText(date).width > width - 180 && dateFontSize > 18) {
        dateFontSize -= 2;
        ctx.font = `italic ${dateFontSize}px "Times New Roman", sans-serif`;
      }
      ctx.fillText(date, width / 2, height - 70);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.anisotropy = 16;
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.needsUpdate = true;
    return tex;
  }

  // ==================== DỰNG CÁC BẢNG ĐẠI TỰ LỜI BÁC DẠY DỌC 2 BÊN TƯỜNG HÀNH LANG ====================
  buildUncleHoTeachingsMurals() {
    const teachings = [
      // 1. Tường phía Tây (X = -11.5)
      {
        x: -10.92, y: 3.8, z: 18.0, rotY: Math.PI / 2,
        w: 7.6, h: 3.5,
        title: 'BỨC THƯ CUỐI CÙNG CỦA CHỦ TỊCH HỒ CHÍ MINH GỬI NGÀNH GIÁO DỤC (15/10/1968)',
        quote: '“Dù khó khăn đến đâu cũng phải tiếp tục thi đua dạy tốt và học tốt.”',
        source: 'Chủ tịch Hồ Chí Minh',
        date: '(Nguồn: Báo Nhân Dân, số 5299, ngày 16-10-1968; Hồ Chí Minh toàn tập, NXB Chính trị Quốc gia, tập 12, tr. 402-404)',
        artifactId: 'mural-uncle-ho-final-letter'
      },
      {
        x: -10.92, y: 3.8, z: 31.0, rotY: Math.PI / 2,
        w: 7.6, h: 3.5,
        title: 'THƯ GỬI CÁC EM HỌC SINH (1945)',
        quote: '“Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em.”',
        source: 'Chủ tịch Hồ Chí Minh',
        date: 'Thư gửi học sinh nhân ngày khai trường đầu tiên của nước VNDCCH (Tháng 9/1945)'
      },

      // 2. Tường phía Đông (X = 11.5)
      {
        x: 10.92, y: 3.8, z: 18.0, rotY: -Math.PI / 2,
        w: 7.6, h: 3.5,
        title: 'TÔN VINH VỊ THẾ VẺ VANG CỦA NGƯỜI THẦY (1964)',
        quote: '“Người thầy giáo tốt – thầy giáo xứng đáng là thầy giáo – là người vẻ vang nhất. Dù tên tuổi không đăng trên báo, không được thưởng huân chương, song những người thầy giáo tốt là những anh hùng vô danh.”',
        source: 'Chủ tịch Hồ Chí Minh',
        date: 'Nói chuyện tại Trường Đại học Sư phạm Hà Nội (21/10/1964)'
      },
      {
        x: 10.92, y: 3.8, z: 31.0, rotY: -Math.PI / 2,
        w: 7.6, h: 3.5,
        title: 'ĐẠO ĐỨC CÁCH MẠNG LÀ CÁI GỐC CỦA NGƯỜI THẦY (1955)',
        quote: '“Dạy cũng như học phải biết chú trọng cả tài lẫn đức. Đức là đạo đức cách mạng. Đó là cái gốc, rất là quan trọng. Nếu không có đạo đức cách mạng thì có tài cũng vô dụng.”',
        source: 'Chủ tịch Hồ Chí Minh',
        date: 'Thư gửi Hội nghị cán bộ phụ trách các trường học (1955)'
      }
    ];

    teachings.forEach((t) => {
      const g = new THREE.Group();
      g.position.set(t.x, t.y, t.z);
      g.rotation.y = t.rotY;

      // Khung gỗ gụ mạ vàng viền ngoài
      const frame = new THREE.Mesh(
        new THREE.BoxGeometry(t.w + 0.35, t.h + 0.35, 0.08),
        this.materials.bronzeGold
      );
      frame.position.z = 0.04;
      g.add(frame);

      const innerWood = new THREE.Mesh(
        new THREE.BoxGeometry(t.w + 0.12, t.h + 0.12, 0.08),
        this.materials.naturalWood
      );
      innerWood.position.z = 0.04;
      g.add(innerWood);

      const tex = this.createUncleHoQuoteTexture(t);
      const plaque = new THREE.Mesh(
        new THREE.PlaneGeometry(t.w, t.h),
        new THREE.MeshBasicMaterial({ map: tex })
      );
      plaque.position.z = 0.09;
      if (t.artifactId) {
        const artObj = (window.ARTIFACTS || []).find((a) => a.id === t.artifactId);
        if (artObj) {
          plaque.userData = { artifact: artObj, isUncleHoMural: true };
          this.interactables.push(plaque);
        }
      }
      g.add(plaque);

      // Đèn rọi spotlight riêng cho từng bức đại tự
      const spot = new THREE.SpotLight(0xfff3db, 2.2, 12, Math.PI / 5, 0.5, 1.2);
      spot.position.set(t.x > 0 ? t.x - 3.5 : t.x + 3.5, 6.8, t.z);
      spot.target.position.set(t.x, t.y, t.z);
      this.scene.add(spot);
      this.scene.add(spot.target);

      this.scene.add(g);
    });

    // Biển đại tự trên cao hai bên vách hành lang
    [
      { x: -10.92, z: 24.5, rotY: Math.PI / 2, label: 'CHỦ TỊCH HỒ CHÍ MINH VỚI SỰ NGHIỆP TRỒNG NGƯỜI' },
      { x: 10.92, z: 24.5, rotY: -Math.PI / 2, label: 'TÔN VINH VỊ THẾ & ĐẠO ĐỨC NGƯỜI THẦY VIỆT NAM' }
    ].forEach((b) => {
      const bannerTex = this.createTextPlaqueTexture({
        title: b.label,
        subtitle: 'BẢO TÀNG NHÀ GIÁO VIỆT NAM',
        quote: '',
        width: 1536,
        height: 384
      });
      const board = new THREE.Mesh(new THREE.BoxGeometry(7.2, 1.15, 0.20), this.materials.navyPanel);
      board.position.set(b.x, 6.4, b.z);
      board.rotation.y = b.rotY;
      this.scene.add(board);

      const face = new THREE.Mesh(new THREE.PlaneGeometry(7.0, 1.02), new THREE.MeshBasicMaterial({ map: bannerTex }));
      face.position.set(0, 0, 0.11);
      board.add(face);
    });
  }

  // ==================== TẠO TEXTURE BỨC THƯ BÁC HỒ (THÁNG 9/1945) ====================
  createUncleHoLetterTexture() {
    const width = 1024;
    const height = 1500;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // Nền giấy pơ-luya màu ngà cổ điển
    ctx.fillStyle = '#faf4e6';
    ctx.fillRect(0, 0, width, height);

    // Vân giấy cổ
    ctx.fillStyle = 'rgba(212, 185, 140, 0.18)';
    for (let i = 0; i < 45; i++) {
      ctx.fillRect(0, i * 35, width, 2);
    }

    // Viền tài liệu lịch sử
    ctx.strokeStyle = '#c89d54';
    ctx.lineWidth = 6;
    ctx.strokeRect(28, 28, width - 56, height - 56);

    ctx.strokeStyle = '#996f2d';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(38, 38, width - 76, height - 76);

    // Quốc hiệu
    ctx.fillStyle = '#8b0000';
    ctx.font = 'bold 28px "Times New Roman", serif';
    ctx.textAlign = 'center';
    ctx.fillText('VIỆT NAM DÂN CHỦ CỘNG HÒA', width / 2, 85);

    ctx.fillStyle = '#1a1a1a';
    ctx.font = 'italic bold 22px "Times New Roman", serif';
    ctx.fillText('Độc lập - Tự do - Hạnh phúc', width / 2, 120);

    ctx.strokeStyle = '#8b0000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 140, 134);
    ctx.lineTo(width / 2 + 140, 134);
    ctx.stroke();

    // Tiêu đề bức thư
    ctx.fillStyle = '#0a2342';
    ctx.font = 'bold 26px "Times New Roman", serif';
    ctx.fillText('THƯ CỦA CHỦ TỊCH HỒ CHÍ MINH', width / 2, 182);

    ctx.font = 'italic bold 18px "Times New Roman", serif';
    ctx.fillText('Gửi các em học sinh nhân ngày khai trường đầu tiên của nước Việt Nam Dân chủ Cộng hòa', width / 2, 214);

    ctx.strokeStyle = '#c89d54';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 260, 234);
    ctx.lineTo(width / 2 + 260, 234);
    ctx.stroke();

    // Nội dung nguyên văn bức thư Tháng 9/1945
    const paragraphs = [
      'Các em học sinh,',
      'Ngày hôm nay là ngày khai trường đầu tiên ở Nước Việt Nam Dân chủ Cộng hòa. Tôi đã tưởng tượng thấy trước mắt cái cảnh nhộn nhịp tưng bừng của ngày tựu trường ở khắp các nơi.',
      'Các em hết thảy đều vui vẻ vì sau mấy tháng giời nghỉ học, sau bao nhiêu cuộc chuyển biến khác thường, các em lại được gặp thầy gặp bạn.',
      'Nhưng sung sướng hơn nữa, từ giờ phút này giở đi các em bắt đầu được nhận một nền giáo dục hoàn toàn Việt Nam.',
      'Trước đây cha anh các em, và mới năm ngoái cả các em nữa, đã phải chịu nhận một nền học vấn nô lệ, nghĩa là nó chỉ đào tạo nên những kẻ làm tay sai, làm tôi tớ cho một bọn thực dân người Pháp.',
      'Ngày nay các em được cái may mắn hơn cha anh là được hấp thụ một nền giáo dục của một nước độc lập, một nền giáo dục nó sẽ đào tạo các em nên những người công dân hữu ích cho nước Việt Nam, một nền giáo dục làm phát triển hoàn toàn những năng lực sẵn có của các em.',
      'Các em được hưởng sự may mắn đó là nhờ sự hy sinh của biết bao nhiêu đồng bào các em. Vậy các em nghĩ sao? Các em phải làm thế nào để đền bù lại công lao của người khác đã không tiếc thân và tiếc của để chiếm lại nền độc lập cho nước nhà.',
      'Các em hãy nghe lời tôi, lời của một người anh lớn lúc nào cũng ân cần mong mỏi cho các em được giỏi giang.',
      'Trong năm học tới đây, các em hãy cố gắng, siêng năng học tập, ngoan ngoãn, nghe thầy, yêu bạn.',
      'Sau 80 năm giời nô lệ làm cho nước nhà bị yếu hèn, ngày nay chúng ta cần phải xây dựng lại cơ đồ mà tổ tiên đã để lại cho chúng ta, làm sao cho chúng ta theo kịp các nước khác trên hoàn cầu.',
      'Trong công cuộc kiến thiết đó, nước nhà trông mong chờ đợi ở các em rất nhiều.',
      'Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em.',
      'Ðối riêng với các em lớn, tôi khuyên thêm một điều này: chúng ta đã đánh đuổi bọn thực dân, chúng ta đã giành được độc lập. Nhưng giặc Pháp còn lăm le quay lại. Chúng ỷ vào kẻ khác mạnh hơn mà gây sự với ta.',
      'Tất nhiên chúng sẽ bị bại, vì tất cả quốc dân ta đoàn kết chặt chẽ và một lòng chiến đấu cho giang sơn Tổ quốc. Phải sẵn sàng mà chống quân giặc cướp nước, đấy là bổn phận của mỗi công dân.',
      'Các em lớn chưa hẳn đến tuổi phải gánh công việc nặng nhọc ấy, nhưng các em cũng nên, ngoài giờ học ở trường, tham gia vào các Hội cứu quốc để tập luyện thêm cho quen với đời sống chiến sĩ và để giúp đỡ một vài việc nhẹ nhàng trong cuộc phòng thủ đất nước.',
      'Tôi đã thành thực khuyên nhủ các em. Mong rằng những lời của tôi được các em luôn luôn ghi nhớ.',
      'Ngày hôm nay, nhân buổi tựu trường của các em, tôi chỉ biết chúc các em một năm đầy vui vẻ và đầy kết quả tốt đẹp.'
    ];

    let currentY = 265;
    const startX = 75;
    const maxTextW = width - 150;
    const lineHeight = 21;

    ctx.textAlign = 'left';

    paragraphs.forEach((pText) => {
      const isHighlight = pText.includes('Non sông Việt Nam có trở nên tươi đẹp');
      if (isHighlight) {
        ctx.fillStyle = '#8b0000';
        ctx.font = 'bold 16px "Times New Roman", serif';
      } else if (pText === 'Các em học sinh,') {
        ctx.fillStyle = '#0a2342';
        ctx.font = 'bold italic 18px "Times New Roman", serif';
      } else {
        ctx.fillStyle = '#222222';
        ctx.font = '15.5px "Times New Roman", serif';
      }

      const words = pText.split(' ');
      let line = '';
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxTextW && n > 0) {
          ctx.fillText(line, startX, currentY);
          line = words[n] + ' ';
          currentY += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, startX, currentY);
      currentY += lineHeight + 5;
    });

    // Chào các em thân yêu & Chữ ký son
    currentY += 8;
    ctx.textAlign = 'right';
    ctx.fillStyle = '#0a2342';
    ctx.font = 'bold italic 18px "Times New Roman", serif';
    ctx.fillText('Chào các em thân yêu!', width - 85, currentY);

    currentY += 38;
    ctx.fillStyle = '#8b0000';
    ctx.font = 'bold italic 34px "Brush Script MT", "Times New Roman", cursive';
    ctx.fillText('HỒ CHÍ MINH', width - 85, currentY);

    currentY += 26;
    ctx.fillStyle = '#555555';
    ctx.font = 'italic 16px "Times New Roman", serif';
    ctx.fillText('Hà Nội, Tháng 9 năm 1945', width - 85, currentY);

    const tex = new THREE.CanvasTexture(canvas);
    tex.anisotropy = 16;
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.needsUpdate = true;
    return tex;
  }

  // ==================== DỰNG HIỆN VẬT BỨC THƯ BÁC HỒ (THÁNG 9/1945) 3D ====================
  buildUncleHoLetterExhibit3D(group) {
    // 1. Bệ tam cấp danh dự bằng đá hoa cương đen & gỗ gụ viền vàng
    const baseStone = new THREE.Mesh(
      new THREE.BoxGeometry(2.4, 0.22, 1.7),
      this.materials.plinthStone
    );
    baseStone.position.y = 0.11;
    group.add(baseStone);

    const baseWood = new THREE.Mesh(
      new THREE.BoxGeometry(2.0, 0.65, 1.4),
      this.materials.naturalWood
    );
    baseWood.position.y = 0.545;
    group.add(baseWood);

    const bronzeTrim = new THREE.Mesh(
      new THREE.BoxGeometry(2.06, 0.08, 1.46),
      this.materials.bronzeGold
    );
    bronzeTrim.position.y = 0.88;
    group.add(bronzeTrim);

    // 2. Tủ kính pha lê 4 mặt chống lóa
    const glassCase = new THREE.Mesh(
      new THREE.BoxGeometry(1.8, 1.1, 1.25),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.25,
        roughness: 0.05,
        metalness: 0.1
      })
    );
    glassCase.position.y = 1.47;
    group.add(glassCase);

    // Khung kim loại viền nóc tủ kính
    const caseTopFrame = new THREE.Mesh(
      new THREE.BoxGeometry(1.84, 0.06, 1.29),
      this.materials.bronzeGold
    );
    caseTopFrame.position.y = 2.04;
    group.add(caseTopFrame);

    // 4 Trụ góc mạ vàng tủ kính
    [
      [-0.88, -0.6],
      [0.88, -0.6],
      [-0.88, 0.6],
      [0.88, 0.6]
    ].forEach(([cx, cz]) => {
      const corner = new THREE.Mesh(
        new THREE.CylinderGeometry(0.025, 0.025, 1.1, 12),
        this.materials.bronzeGold
      );
      corner.position.set(cx, 1.47, cz);
      group.add(corner);
    });

    // 3. Bên trong tủ kính: Giá đỡ nghiêng bằng gỗ mun sẫm màu & viền đồng kim loại (loại bỏ hoàn toàn viền hồng)
    const standMat = new THREE.MeshStandardMaterial({
      color: 0x1a1512, // Gỗ mun sẫm màu sang trọng
      roughness: 0.45,
      metalness: 0.15
    });
    const docW = 0.665;
    const docH = 0.94; // Tỷ lệ chuẩn xác 0.707 tương ứng tỷ lệ gốc 1445x2048 của bản chụp bức thư 1945
    const standW = docW + 0.04;
    const standH = docH + 0.04;

    const documentStand = new THREE.Mesh(
      new THREE.BoxGeometry(standW, standH, 0.035),
      standMat
    );
    documentStand.position.set(-0.35, 1.42, 0);
    documentStand.rotation.x = -0.42;
    group.add(documentStand);

    // Nẹp viền đồng mạ vàng tinh tế phía sau giá đỡ
    const standBronzeTrim = new THREE.Mesh(
      new THREE.BoxGeometry(standW + 0.015, standH + 0.015, 0.02),
      this.materials.bronzeGold
    );
    standBronzeTrim.position.set(-0.35, 1.42, -0.012);
    standBronzeTrim.rotation.x = -0.42;
    group.add(standBronzeTrim);

    // Bản chụp Bút tích Bức thư Bác Hồ gửi các em học sinh (Tháng 9/1945) từ tư liệu gốc
    const textureLoader = this.textureLoader || new THREE.TextureLoader();
    const realLetterTex = textureLoader.load(
      'assets/documents/thu_bac_ho_khai_truong_1945.jpg',
      (tex) => {
        if (THREE.SRGBColorSpace) tex.colorSpace = THREE.SRGBColorSpace;
        tex.anisotropy = 16;
        tex.needsUpdate = true;
      }
    );
    if (THREE.SRGBColorSpace) realLetterTex.colorSpace = THREE.SRGBColorSpace;
    realLetterTex.anisotropy = 16;

    const letterMat = new THREE.MeshStandardMaterial({
      map: realLetterTex,
      roughness: 0.85,
      metalness: 0.02,
      side: THREE.DoubleSide
    });
    const letterMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(docW, docH),
      letterMat
    );
    letterMesh.position.set(-0.35, 1.42, 0.022);
    letterMesh.rotation.x = -0.42;
    group.add(letterMesh);

    // Tượng bán thân Bác Hồ bằng đồng đỏ nguyên khối đặt bên cạnh
    const bustBase = new THREE.Mesh(
      new THREE.CylinderGeometry(0.22, 0.25, 0.25, 20),
      this.materials.naturalWood
    );
    bustBase.position.set(0.48, 1.05, 0);
    group.add(bustBase);

    const bustShoulders = new THREE.Mesh(
      new THREE.CylinderGeometry(0.24, 0.32, 0.42, 16),
      this.materials.brightGold
    );
    bustShoulders.position.set(0.48, 1.35, 0);
    group.add(bustShoulders);

    const bustHead = new THREE.Mesh(
      new THREE.SphereGeometry(0.18, 20, 20),
      this.materials.brightGold
    );
    bustHead.position.set(0.48, 1.68, 0);
    group.add(bustHead);

    // Bảng đồng khắc khẩu hiệu bất hủ: "NON SÔNG VIỆT NAM CÓ TRỞ NÊN TƯƠI ĐẸP HAY KHÔNG..."
    const sloganTex = this.createTextPlaqueTexture({
      title: '“NON SÔNG VIỆT NAM CÓ TRỞ NÊN TƯƠI ĐẸP HAY KHÔNG...”',
      subtitle: 'Thư Bác Hồ gửi các em học sinh nhân ngày khai trường đầu tiên (Tháng 9/1945)',
      quote: '',
      width: 1536,
      height: 384
    });
    const sloganBoard = new THREE.Mesh(
      new THREE.PlaneGeometry(1.65, 0.42),
      new THREE.MeshBasicMaterial({ map: sloganTex })
    );
    sloganBoard.position.set(0, 0.75, 0.71);
    group.add(sloganBoard);

    // Hoa sen đồng dâng hoa kính Bác
    const lotusDish = new THREE.Mesh(
      new THREE.CylinderGeometry(0.14, 0.1, 0.06, 16),
      this.materials.bronzeGold
    );
    lotusDish.position.set(0.48, 1.02, 0.35);
    group.add(lotusDish);

    const lotusBloom = new THREE.Mesh(
      new THREE.DodecahedronGeometry(0.09),
      new THREE.MeshStandardMaterial({ color: 0xffa0b5, roughness: 0.35 })
    );
    lotusBloom.position.set(0.48, 1.1, 0.35);
    group.add(lotusBloom);
  }


  // ==================== TẠO TEXTURE BIỂN HIỆU ĐỒNG VÀNG MẶT TIỀN BẢO TÀNG ====================
  createFacadeSignTexture() {
    const width = 2048;
    const height = 512;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // Nền sơn mài xanh sẫm hoàng gia chuyển sắc
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, '#061324');
    grad.addColorStop(0.3, '#0b1d36');
    grad.addColorStop(0.5, '#122b4e');
    grad.addColorStop(0.7, '#0b1d36');
    grad.addColorStop(1, '#051120');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Họa tiết ánh sao vàng lấp lánh li ti nền
    ctx.fillStyle = 'rgba(255, 235, 160, 0.15)';
    for (let i = 0; i < 180; i++) {
      const rx = (Math.sin(i * 12.3) * 0.5 + 0.5) * width;
      const ry = (Math.cos(i * 7.8) * 0.5 + 0.5) * height;
      ctx.fillRect(rx, ry, (i % 3) + 1, (i % 3) + 1);
    }

    // Khung viền đôi mạ vàng đồng chạm hoa văn
    ctx.strokeStyle = '#c89d54';
    ctx.lineWidth = 16;
    ctx.strokeRect(24, 24, width - 48, height - 48);

    ctx.strokeStyle = '#f5d77f';
    ctx.lineWidth = 4;
    ctx.strokeRect(46, 46, width - 92, height - 92);

    // Họa tiết góc hoa sen / Đông Sơn
    const corners = [
      [54, 54],
      [width - 54, 54],
      [54, height - 54],
      [width - 54, height - 54]
    ];
    ctx.fillStyle = '#ffd700';
    ctx.font = '28px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    corners.forEach(([cx, cy]) => {
      ctx.fillText('✦', cx, cy);
    });

    // Dòng tiêu đề phụ trên cùng
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 30px "Cinzel", "Times New Roman", serif';
    ctx.fillText('🪷   HÀNH TRÌNH SỐ VIỆT NAM MY LOVE   🪷', width / 2, 95);

    // Đường gạch chỉ vàng cách điệu
    const lineGrad = ctx.createLinearGradient(width / 2 - 500, 0, width / 2 + 500, 0);
    lineGrad.addColorStop(0, 'rgba(212, 175, 55, 0)');
    lineGrad.addColorStop(0.5, 'rgba(255, 215, 0, 0.95)');
    lineGrad.addColorStop(1, 'rgba(212, 175, 55, 0)');
    ctx.strokeStyle = lineGrad;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 500, 138);
    ctx.lineTo(width / 2 + 500, 138);
    ctx.stroke();

    // Tiêu đề chính lớn BẢO TÀNG NHÀ GIÁO VIỆT NAM (Chữ đồng vàng dập nổi metallic)
    const textGrad = ctx.createLinearGradient(0, 170, 0, 310);
    textGrad.addColorStop(0, '#ffffff');
    textGrad.addColorStop(0.18, '#ffe8a3');
    textGrad.addColorStop(0.55, '#d4af37');
    textGrad.addColorStop(0.85, '#f5d77f');
    textGrad.addColorStop(1, '#9e782f');

    ctx.font = '900 86px "Cinzel", "Times New Roman", "Playfair Display", serif';

    // Đổ bóng sâu tạo khối kim loại nổi
    ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
    ctx.fillText('BẢO TÀNG NHÀ GIÁO VIỆT NAM', width / 2 + 4, 252);
    ctx.fillText('BẢO TÀNG NHÀ GIÁO VIỆT NAM', width / 2 + 2, 250);

    // Chữ gradient vàng ánh kim
    ctx.fillStyle = textGrad;
    ctx.fillText('BẢO TÀNG NHÀ GIÁO VIỆT NAM', width / 2, 248);

    // Viền sáng vàng cho chữ
    ctx.strokeStyle = 'rgba(255, 235, 160, 0.6)';
    ctx.lineWidth = 2.5;
    ctx.strokeText('BẢO TÀNG NHÀ GIÁO VIỆT NAM', width / 2, 248);

    // Đường kẻ chỉ dưới
    ctx.strokeStyle = lineGrad;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 420, 310);
    ctx.lineTo(width / 2 + 420, 310);
    ctx.stroke();

    // Khẩu hiệu phụ đề
    ctx.fillStyle = '#fff4db';
    ctx.font = 'italic 40px "Playfair Display", "Times New Roman", serif';
    ctx.fillText('“Hành trình của những người gieo hạt tri thức”', width / 2, 385);

    // Ghi chú tôn vinh
    ctx.fillStyle = 'rgba(212, 175, 55, 0.85)';
    ctx.font = '24px sans-serif';
    ctx.fillText('DI SẢN TRI THỨC VĂN HÓA VÀ TRUYỀN THỐNG TÔN SƯ TRỌNG ĐẠO', width / 2, 442);

    const tex = new THREE.CanvasTexture(canvas);
    tex.anisotropy = 16;
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    tex.needsUpdate = true;
    return tex;
  }

  // ==================== TẠO TEXTURE MÀN HÌNH CẢM ỨNG KIOSK THÔNG TIN ====================
  createKioskTexture() {
    const width = 1024;
    const height = 680;
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // Nền gradient công nghệ bảo tàng hiện đại
    const grad = ctx.createLinearGradient(0, 0, 0, height);
    grad.addColorStop(0, '#0a1a30');
    grad.addColorStop(0.5, '#0e2343');
    grad.addColorStop(1, '#071324');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Khung viền công nghệ vàng đồng
    ctx.strokeStyle = '#c89d54';
    ctx.lineWidth = 8;
    ctx.strokeRect(16, 16, width - 32, height - 32);

    ctx.strokeStyle = 'rgba(0, 217, 255, 0.4)';
    ctx.lineWidth = 2;
    ctx.strokeRect(26, 26, width - 52, height - 52);

    // Thanh tiêu đề Kiosk
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 24px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('🏛️ TRẠM TRA CỨU THÔNG TIN & SƠ ĐỒ BẢO TÀNG', width / 2, 70);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 40px "Cinzel", "Times New Roman", serif';
    ctx.fillText('BẢO TÀNG NHÀ GIÁO VIỆT NAM', width / 2, 130);

    ctx.fillStyle = '#a8c7ea';
    ctx.font = 'italic 20px "Times New Roman", serif';
    ctx.fillText('“Hành trình của những người gieo hạt tri thức”', width / 2, 168);

    // Lưới 5 gian phòng trưng bày
    const rooms = [
      { num: '01', title: 'ĐẠI SẢNH & CỘI CÂY TRI THỨC 3D', sub: 'Khuê Văn Các & Cây Lời Chúc Ngàn Sao' },
      { num: '02', title: 'LỊCH SỬ PHÁT TRIỂN GIÁO DỤC', sub: 'Quốc Tử Giám (1076) đến Thời kỳ Đổi Mới' },
      { num: '03', title: 'NHỮNG NGƯỜI THẦY TRONG SỬ VIỆT', sub: 'Hành trình tôn vinh 40 bậc danh sư trong lịch sử dân tộc' },
      { num: '04', title: '15 BỘ TRƯỞNG BỘ GIÁO DỤC', sub: 'Hình ảnh thực tế & dấu ấn qua các nhiệm kỳ' },
      { num: '05', title: 'HÀNH LANG LỜI BÁC & HIỆN VẬT', sub: 'Thư Bác Hồ khai trường 1945 & Bộ đồ dùng dạy học' }
    ];

    rooms.forEach((r, idx) => {
      const ry = 210 + idx * 64;
      ctx.fillStyle = 'rgba(18, 42, 75, 0.7)';
      ctx.fillRect(48, ry, width - 96, 54);
      ctx.strokeStyle = 'rgba(200, 157, 84, 0.45)';
      ctx.strokeRect(48, ry, width - 96, 54);

      ctx.fillStyle = '#ffd700';
      ctx.font = 'bold 22px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(r.num, 66, ry + 34);

      ctx.fillStyle = '#fff6de';
      ctx.font = 'bold 19px "Cinzel", sans-serif';
      ctx.fillText(r.title, 120, ry + 25);

      ctx.fillStyle = '#9cb6d4';
      ctx.font = '14px sans-serif';
      ctx.fillText(r.sub, 120, ry + 46);

      ctx.fillStyle = '#ffd700';
      ctx.font = '18px sans-serif';
      ctx.textAlign = 'right';
      ctx.fillText('➔', width - 68, ry + 34);
    });

    // Nút chạm tương tác lớn ở dưới cùng
    const btnGrad = ctx.createLinearGradient(0, 545, 0, 625);
    btnGrad.addColorStop(0, '#e5be75');
    btnGrad.addColorStop(1, '#b38435');
    ctx.fillStyle = btnGrad;
    ctx.beginPath();
    ctx.roundRect(140, 550, width - 280, 72, [36]);
    ctx.fill();

    ctx.strokeStyle = '#fff2c8';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = '#091321';
    ctx.font = 'bold 24px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('👉 CHẠM VÀO ĐÂY ĐỂ MỞ SƠ ĐỒ & GIỚI THIỆU', width / 2, 595);

    const tex = new THREE.CanvasTexture(canvas);
    tex.anisotropy = 8;
    return tex;
  }

  // ==================== KHÔNG GIAN NGOẠI THẤT & MẶT TIỀN BẢO TÀNG HÙNG VĨ ====================
  buildGrandExteriorFacade() {
    const extGroup = new THREE.Group();
    extGroup.name = 'exterior-facade-group';

    // 1. SÂN QUẢNG TRƯỜNG NGOẠI THẤT (Z từ 50.8 đến 78.0, X từ -36 đến 36)
    const plazaGeo = new THREE.PlaneGeometry(74, 28);
    const plazaMesh = new THREE.Mesh(plazaGeo, this.materials.floorStone);
    plazaMesh.rotation.x = -Math.PI / 2;
    plazaMesh.position.set(0, 0.002, 64.5);
    plazaMesh.receiveShadow = true;
    plazaMesh.name = 'exterior-plaza-ground';
    extGroup.add(plazaMesh);

    // Họa tiết hoa văn Trống đồng / Vòng tròn đồng tâm tại tâm quảng trường (Z = 60)
    const plazaCircle = new THREE.Mesh(
      new THREE.RingGeometry(1.5, 5.2, 48),
      new THREE.MeshStandardMaterial({ color: 0xbaa16e, metalness: 0.6, roughness: 0.4, side: THREE.DoubleSide })
    );
    plazaCircle.rotation.x = -Math.PI / 2;
    plazaCircle.position.set(0, 0.005, 60.0);
    extGroup.add(plazaCircle);

    // 2. BẬC TAM CẤP DẪN LÊN (GRAND STONE STAIRCASE: Z từ 50.8 lùi về 43.6, chiều cao từ 0.002 đến 0.84m)
    const numSteps = 6;
    const stepDepth = 1.2;
    const stepWidth = 24.0;
    const totalRise = 0.84;
    const stepRise = totalRise / numSteps;

    for (let i = 0; i < numSteps; i++) {
      const stepH = (i + 1) * stepRise;
      const stepZ = 50.8 - i * stepDepth;

      // Khối bậc đá hoa cương xám sẫm
      const stepMesh = new THREE.Mesh(
        new THREE.BoxGeometry(stepWidth, stepH, stepDepth),
        this.materials.navyDeep
      );
      stepMesh.position.set(0, stepH / 2, stepZ - stepDepth / 2);
      stepMesh.receiveShadow = true;
      extGroup.add(stepMesh);

      // Nẹp viền mũi bậc bằng đồng vàng sáng bóng
      const nosing = new THREE.Mesh(
        new THREE.BoxGeometry(stepWidth + 0.05, 0.035, 0.06),
        this.materials.bronzeGold
      );
      nosing.position.set(0, stepH, stepZ);
      extGroup.add(nosing);
    }

    // Thềm sảnh đón trên cao (Portico Terrace, Z từ 39.5 đến 43.6, Y = 0.84)
    const terrace = new THREE.Mesh(
      new THREE.BoxGeometry(26.0, 0.84, 4.2),
      this.materials.floorStone
    );
    terrace.position.set(0, 0.42, 41.55);
    terrace.receiveShadow = true;
    extGroup.add(terrace);

    // Nẹp viền thềm bằng đồng
    const terraceRim = new THREE.Mesh(
      new THREE.BoxGeometry(26.2, 0.06, 0.1),
      this.materials.bronzeGold
    );
    terraceRim.position.set(0, 0.84, 43.65);
    extGroup.add(terraceRim);

    // 3. THẢM ĐỎ HOÀNG GIA CHẠY SUỐT TỪ QUẢNG TRƯỜNG LÊN SẢNH
    // Thảm quảng trường
    const redMat = new THREE.MeshStandardMaterial({ color: 0x9e1925, roughness: 0.65, metalness: 0.1 });
    const carpetPlaza = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 12.0), redMat);
    carpetPlaza.rotation.x = -Math.PI / 2;
    carpetPlaza.position.set(0, 0.008, 56.8);
    extGroup.add(carpetPlaza);

    // Viền vàng thảm quảng trường
    [-1.82, 1.82].forEach((x) => {
      const trim = new THREE.Mesh(new THREE.PlaneGeometry(0.08, 12.0), this.materials.brightGold);
      trim.rotation.x = -Math.PI / 2;
      trim.position.set(x, 0.01, 56.8);
      extGroup.add(trim);
    });

    // Thảm trải trên các bậc tam cấp
    for (let i = 0; i < numSteps; i++) {
      const stepH = (i + 1) * stepRise;
      const stepZ = 50.8 - i * stepDepth;

      // Mặt nằm của bậc
      const treadCarpet = new THREE.Mesh(new THREE.PlaneGeometry(3.6, stepDepth), redMat);
      treadCarpet.rotation.x = -Math.PI / 2;
      treadCarpet.position.set(0, stepH + 0.004, stepZ - stepDepth / 2);
      extGroup.add(treadCarpet);

      // Mặt đứng của bậc
      const riserCarpet = new THREE.Mesh(new THREE.PlaneGeometry(3.6, stepRise), redMat);
      riserCarpet.position.set(0, stepH - stepRise / 2, stepZ);
      extGroup.add(riserCarpet);
    }

    // Thảm trên thềm sảnh đón vào tới cửa chính
    const terraceCarpet = new THREE.Mesh(new THREE.PlaneGeometry(3.6, 4.3), redMat);
    terraceCarpet.rotation.x = -Math.PI / 2;
    terraceCarpet.position.set(0, 0.845, 41.6);
    extGroup.add(terraceCarpet);

    // 4. LAN CAN ĐÁ BẬC TAM CẤP (BALUSTRADES CÓ ĐÀI SEN VÀNG)
    [-12.2, 12.2].forEach((bx) => {
      // Bệ lan can chính
      const balustrade = new THREE.Mesh(
        new THREE.BoxGeometry(0.7, 1.1, 7.5),
        this.materials.ivoryWall
      );
      balustrade.position.set(bx, 0.9, 47.2);
      balustrade.rotation.x = -Math.atan2(0.84, 7.2);
      extGroup.add(balustrade);

      // Trụ đầu và cuối lan can với đài sen vàng
      [50.8, 43.6].forEach((pz, pIdx) => {
        const pillarH = pIdx === 0 ? 1.05 : 1.85;
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.85, pillarH, 0.85), this.materials.plinthStone);
        post.position.set(bx, pillarH / 2, pz);
        extGroup.add(post);

        const cap = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.08, 0.95), this.materials.bronzeGold);
        cap.position.set(bx, pillarH + 0.04, pz);
        extGroup.add(cap);

        const finial = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 16), this.materials.brightGold);
        finial.position.set(bx, pillarH + 0.28, pz);
        extGroup.add(finial);
      });
    });

    // 5. HỆ 6 ĐẠI CỘT MẶT TIỀN BẢO TÀNG (COLONNADE PORTICO)
    const pillarPositions = [-12.5, -7.5, -3.8, 3.8, 7.5, 12.5];
    pillarPositions.forEach((px) => {
      const colG = new THREE.Group();
      colG.position.set(px, 0.84, 43.4);

      // Chân tảng đá bát giác
      const baseStone = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.72, 0.45, 8), this.materials.plinthStone);
      baseStone.position.y = 0.225;
      colG.add(baseStone);

      const baseBronze = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.62, 0.1, 16), this.materials.bronzeGold);
      baseBronze.position.y = 0.5;
      colG.add(baseBronze);

      // Thân cột tròn sừng sững
      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.48, 7.2, 24), this.materials.ivoryWall);
      shaft.position.y = 4.15;
      shaft.castShadow = true;
      colG.add(shaft);

      // Đầu cột chạm hoa sen thếp vàng
      const capital = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.45, 0.55, 16), this.materials.bronzeGold);
      capital.position.y = 7.95;
      colG.add(capital);

      const topPlinth = new THREE.Mesh(new THREE.BoxGeometry(1.25, 0.2, 1.25), this.materials.plinthStone);
      topPlinth.position.y = 8.32;
      colG.add(topPlinth);

      extGroup.add(colG);
    });

    // 6. DẦM MÁI SẢNH & MÁI VÒM TAM GIÁC CỔ ĐIỂN (ENTABLATURE & PEDIMENT)
    // Dầm ngang chính (Architrave)
    const entablature = new THREE.Mesh(
      new THREE.BoxGeometry(29.5, 1.35, 2.2),
      this.materials.ivoryWall
    );
    entablature.position.set(0, 9.85, 43.4);
    extGroup.add(entablature);

    const entabTrim = new THREE.Mesh(
      new THREE.BoxGeometry(29.8, 0.14, 2.3),
      this.materials.bronzeGold
    );
    entabTrim.position.set(0, 10.55, 43.4);
    extGroup.add(entabTrim);

    // Mái sảnh vươn ra che chở cổng chính
    const porticoRoof = new THREE.Mesh(
      new THREE.BoxGeometry(29.2, 0.35, 4.8),
      this.materials.navyDeep
    );
    porticoRoof.position.set(0, 10.75, 41.5);
    extGroup.add(porticoRoof);

    // Phù điêu tam giác đỉnh cao (Pediment Triangle)
    const pedimentShape = new THREE.Shape();
    pedimentShape.moveTo(-14.8, 0);
    pedimentShape.lineTo(14.8, 0);
    pedimentShape.lineTo(0, 2.8);
    pedimentShape.closePath();

    const extrudeSettings = { depth: 0.6, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: 0.08, bevelThickness: 0.08 };
    const pedimentGeo = new THREE.ExtrudeGeometry(pedimentShape, extrudeSettings);
    const pedimentMesh = new THREE.Mesh(pedimentGeo, this.materials.ivoryWall);
    pedimentMesh.position.set(0, 10.6, 43.2);
    extGroup.add(pedimentMesh);

    // Biểu tượng Mặt Trời & Cuốn Sách Mở ở giữa phù điêu
    const emblemCenter = new THREE.Mesh(new THREE.CircleGeometry(0.75, 32), this.materials.brightGold);
    emblemCenter.position.set(0, 11.65, 43.85);
    extGroup.add(emblemCenter);

    const sunRay = new THREE.Mesh(new THREE.RingGeometry(0.85, 1.25, 32), this.materials.bronzeGold);
    sunRay.position.set(0, 11.65, 43.84);
    extGroup.add(sunRay);

    // 7. BIỂN HIỆU ĐỒNG VÀNG LỚN TRÊN MẶT TIỀN: 'BẢO TÀNG NHÀ GIÁO VIỆT NAM'
    const signTex = this.createFacadeSignTexture();
    const signW = 12.0;
    const signH = 2.15;
    const signD = 0.25;

    // Hộp biển nền gỗ gụ & viền mạ vàng
    const signBoard = new THREE.Mesh(
      new THREE.BoxGeometry(signW + 0.35, signH + 0.35, signD),
      this.materials.bronzeGold
    );
    signBoard.position.set(0, 7.6, 44.2);
    extGroup.add(signBoard);

    const signFace = new THREE.Mesh(
      new THREE.PlaneGeometry(signW, signH),
      new THREE.MeshBasicMaterial({ map: signTex })
    );
    signFace.position.set(0, 7.6, 44.34);
    extGroup.add(signFace);

    // 4 Đèn rọi spotlight riêng cho biển hiệu mặt tiền
    [-4.5, -1.5, 1.5, 4.5].forEach((lx) => {
      const spot = new THREE.SpotLight(0xfff5e0, 2.6, 12, Math.PI / 4, 0.4);
      spot.position.set(lx, 10.4, 46.2);
      spot.target.position.set(lx, 7.6, 44.2);
      extGroup.add(spot);
      extGroup.add(spot.target);
    });

    // 8. BỘ CỬA CHÍNH ĐẠI SẢNH MỞ RỘNG ĐÓN ÁNH SÁNG TỪ TRONG RA (Z = 39.5)
    // Cánh cửa Trái (quay mở góc ~75 độ vào phía trong)
    const doorW = 4.1;
    const doorH = 5.0;
    const leftDoorPivot = new THREE.Group();
    leftDoorPivot.position.set(-4.2, 0.84, 39.55);
    leftDoorPivot.rotation.y = -1.25; // Mở rộng

    const leftDoorMesh = new THREE.Mesh(new THREE.BoxGeometry(doorW, doorH, 0.14), this.materials.naturalWood);
    leftDoorMesh.position.set(doorW / 2, doorH / 2, 0);
    leftDoorPivot.add(leftDoorMesh);

    // Ô nẹp đồng nổi trên cửa
    const leftDoorTrim = new THREE.Mesh(new THREE.BoxGeometry(doorW - 0.2, doorH - 0.2, 0.16), this.materials.bronzeGold);
    leftDoorTrim.position.set(doorW / 2, doorH / 2, 0);
    leftDoorPivot.add(leftDoorTrim);
    extGroup.add(leftDoorPivot);

    // Cánh cửa Phải (quay mở góc ~75 độ vào phía trong)
    const rightDoorPivot = new THREE.Group();
    rightDoorPivot.position.set(4.2, 0.84, 39.55);
    rightDoorPivot.rotation.y = 1.25; // Mở rộng

    const rightDoorMesh = new THREE.Mesh(new THREE.BoxGeometry(doorW, doorH, 0.14), this.materials.naturalWood);
    rightDoorMesh.position.set(-doorW / 2, doorH / 2, 0);
    rightDoorPivot.add(rightDoorMesh);

    const rightDoorTrim = new THREE.Mesh(new THREE.BoxGeometry(doorW - 0.2, doorH - 0.2, 0.16), this.materials.bronzeGold);
    rightDoorTrim.position.set(-doorW / 2, doorH / 2, 0);
    rightDoorPivot.add(rightDoorTrim);
    extGroup.add(rightDoorPivot);

    // 9. ÁNH SÁNG ẤM ÁP TỪ TRONG ĐẠI SẢNH HẮT RA CỬA
    // Đèn chiếu rực rỡ từ cửa sảnh ra ngoài bậc tam cấp
    const warmPortalLight = new THREE.SpotLight(0xffe298, 4.5, 28, Math.PI / 2.6, 0.8);
    warmPortalLight.position.set(0, 4.2, 36.5);
    warmPortalLight.target.position.set(0, 0.8, 49.0);
    extGroup.add(warmPortalLight);
    extGroup.add(warmPortalLight.target);

    const portalPoint = new THREE.PointLight(0xffdf99, 3.2, 16);
    portalPoint.position.set(0, 3.2, 38.5);
    extGroup.add(portalPoint);

    // Quầng sáng vàng trên sàn trước cửa (Volumetric light floor spill)
    const spillCanvas = document.createElement('canvas');
    spillCanvas.width = 512;
    spillCanvas.height = 512;
    const spCtx = spillCanvas.getContext('2d');
    const spGrad = spCtx.createRadialGradient(256, 0, 20, 256, 320, 450);
    spGrad.addColorStop(0, 'rgba(255, 220, 140, 0.65)');
    spGrad.addColorStop(0.4, 'rgba(255, 195, 90, 0.35)');
    spGrad.addColorStop(0.8, 'rgba(255, 170, 50, 0.1)');
    spGrad.addColorStop(1, 'rgba(255, 150, 20, 0)');
    spCtx.fillStyle = spGrad;
    spCtx.fillRect(0, 0, 512, 512);

    const spillTex = new THREE.CanvasTexture(spillCanvas);
    const lightSpillMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(16.0, 13.0),
      new THREE.MeshBasicMaterial({
        map: spillTex,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
    );
    lightSpillMesh.rotation.x = -Math.PI / 2;
    lightSpillMesh.position.set(0, 0.846, 45.5);
    extGroup.add(lightSpillMesh);

    // 10. HỆ THỐNG 6 ĐÈN CỘT ĐỒNG CỔ ĐIỂN NGOẠI CẢNH (PLAZA LAMP POSTS)
    const lampPositions = [
      [-6.5, 53.0], [6.5, 53.0],
      [-6.5, 61.5], [6.5, 61.5],
      [-6.5, 70.0], [6.5, 70.0]
    ];

    lampPositions.forEach(([lx, lz]) => {
      const lampG = new THREE.Group();
      lampG.position.set(lx, 0.002, lz);

      const lampBase = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.45, 0.5, 8), this.materials.agedBronze);
      lampBase.position.y = 0.25;
      lampG.add(lampBase);

      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.13, 3.5, 16), this.materials.agedBronze);
      pole.position.y = 2.0;
      lampG.add(pole);

      const bracket = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.08, 0.08), this.materials.bronzeGold);
      bracket.position.y = 3.65;
      lampG.add(bracket);

      // 3 quả cầu phát sáng
      [-0.4, 0, 0.4].forEach((gx) => {
        const globe = new THREE.Mesh(
          new THREE.SphereGeometry(0.16, 16, 16),
          new THREE.MeshStandardMaterial({
            color: 0xfff6dd,
            emissive: 0xffe298,
            emissiveIntensity: 1.2
          })
        );
        globe.position.set(gx, gx === 0 ? 3.9 : 3.65, 0);
        lampG.add(globe);
      });

      const lampLight = new THREE.PointLight(0xffdfa0, 1.8, 11);
      lampLight.position.set(0, 3.8, 0);
      lampG.add(lampLight);

      extGroup.add(lampG);
    });

    // 11. CỘT CỜ TRANG NGHIÊM HAI BÊN QUẢNG TRƯỜNG
    [-11.5, 11.5].forEach((fx) => {
      const flagG = new THREE.Group();
      flagG.position.set(fx, 0.002, 54.0);

      const flagBase = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.85, 0.6, 8), this.materials.plinthStone);
      flagBase.position.y = 0.3;
      flagG.add(flagBase);

      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 10.5, 16), this.materials.bronzeGold);
      pole.position.y = 5.55;
      flagG.add(pole);

      const topBall = new THREE.Mesh(new THREE.SphereGeometry(0.22, 16, 16), this.materials.brightGold);
      topBall.position.y = 10.85;
      flagG.add(topBall);

      extGroup.add(flagG);
    });

    // 12. DẢI BỒN HOA & CÂY XANH ĐỐI XỨNG HAI BÊN QUẢNG TRƯỜNG
    [-24.0, 24.0].forEach((gx) => {
      // Bồn cây xanh
      const hedge = new THREE.Mesh(
        new THREE.BoxGeometry(16.0, 1.1, 24.0),
        new THREE.MeshStandardMaterial({ color: 0x1f4728, roughness: 0.85, metalness: 0.05 })
      );
      hedge.position.set(gx, 0.55, 62.5);
      extGroup.add(hedge);

      // Nẹp viền bồn cây bằng đá trắng
      const hedgeBorder = new THREE.Mesh(
        new THREE.BoxGeometry(16.5, 0.25, 24.5),
        this.materials.plinthStone
      );
      hedgeBorder.position.set(gx, 0.12, 62.5);
      extGroup.add(hedgeBorder);
    });

    // 13. BẦU TRỜI NGOẠI THẤT HOÀNG HÔN / ĐÊM HUYỀN DIỆU (ATMOSPHERIC SKY DOME)
    const skyGeo = new THREE.SphereGeometry(125, 32, 24);
    const skyMat = new THREE.MeshBasicMaterial({
      color: 0x051327,
      side: THREE.BackSide
    });
    const skyMesh = new THREE.Mesh(skyGeo, skyMat);
    skyMesh.position.set(0, 0, 30);
    extGroup.add(skyMesh);

    // Ánh sáng ngoại cảnh dịu mát tổng thể
    const extAmbient = new THREE.AmbientLight(0xbad2f0, 1.25);
    extGroup.add(extAmbient);

    const extDir = new THREE.DirectionalLight(0xd9e7ff, 1.1);
    extDir.position.set(0, 28, 70);
    extDir.target.position.set(0, 6, 40);
    extGroup.add(extDir);
    extGroup.add(extDir.target);

    this.scene.add(extGroup);
  }

  // ==================== TRẠM TRA CỨU THÔNG TIN & SƠ ĐỒ BẢO TÀNG 3D (KIOSK) ====================
  buildTouchscreenKiosk() {
    const kioskGroup = new THREE.Group();
    kioskGroup.position.set(4.8, 0, 36.2);
    kioskGroup.rotation.y = -Math.PI / 5; // Quay góc đón khách bước vào sảnh
    kioskGroup.name = 'infoboard-touchscreen-kiosk';

    // Bệ đá hoa cương
    const baseStone = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.16, 0.75), this.materials.plinthStone);
    baseStone.position.y = 0.08;
    kioskGroup.add(baseStone);

    const bronzeRim = new THREE.Mesh(new THREE.BoxGeometry(0.99, 0.04, 0.79), this.materials.bronzeGold);
    bronzeRim.position.y = 0.16;
    kioskGroup.add(bronzeRim);

    // Cột nghiêng hiện đại
    const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.95, 0.28), this.materials.navyDeep);
    pillar.position.set(0, 0.65, 0);
    pillar.rotation.x = -0.15;
    kioskGroup.add(pillar);

    // Màn hình 55-inch cảm ứng nghiêng 45 độ
    const screenFrame = new THREE.Mesh(new THREE.BoxGeometry(1.22, 0.82, 0.08), this.materials.bronzeGold);
    screenFrame.position.set(0, 1.25, 0.1);
    screenFrame.rotation.x = -Math.PI / 4;
    kioskGroup.add(screenFrame);

    const screenBack = new THREE.Mesh(new THREE.BoxGeometry(1.18, 0.78, 0.085), this.materials.navyPanel);
    screenBack.position.set(0, 1.25, 0.1);
    screenBack.rotation.x = -Math.PI / 4;
    kioskGroup.add(screenBack);

    const kioskTex = this.createKioskTexture();
    const screenDisplay = new THREE.Mesh(
      new THREE.PlaneGeometry(1.14, 0.74),
      new THREE.MeshBasicMaterial({ map: kioskTex })
    );
    screenDisplay.position.set(0, 1.25 + 0.04 * Math.sin(Math.PI / 4), 0.1 + 0.04 * Math.cos(Math.PI / 4));
    screenDisplay.rotation.x = -Math.PI / 4;
    kioskGroup.add(screenDisplay);

    // Đèn rọi spotlight riêng cho Kiosk
    const kioskSpot = new THREE.SpotLight(0xafe4ff, 1.8, 6, Math.PI / 6, 0.4);
    kioskSpot.position.set(4.8, 3.8, 36.2);
    kioskSpot.target = screenDisplay;
    this.scene.add(kioskSpot);

    // Đưa vào danh sách interactables để click mở Giới Thiệu & Sơ Đồ
    screenDisplay.userData = {
      isInteractable: true,
      data: {
        id: 'kiosk-infoboard',
        type: 'kiosk',
        title: 'Trạm Tra Cứu Thông Tin & Sơ Đồ Bảo Tàng',
        subtitle: 'Chạm để xem Giới thiệu chung và Sơ đồ tham quan',
        description: 'Bấm vào để mở bảng thông tin tổng quan về 5 Không gian trưng bày và hướng dẫn tham quan 3D.'
      }
    };
    this.interactables.push(screenDisplay);

    this.scene.add(kioskGroup);
  }

  update(elapsedTime, delta) {
    for (const item of this.animatedObjects) {
      if (item.rotateY) {
        item.mesh.rotation.y += item.rotateY * delta;
      }
      if (item.baseY !== undefined) {
        item.mesh.position.y = item.baseY + Math.sin(elapsedTime * (item.speed || 1.0)) * 0.08;
      }
    }

    // 1. Hiệu ứng nhấp nháy / đập nhẹ lung linh (Pulsing / Floating animation) cho tán cây trong phòng
    if (this.banyanStarMaterial) {
      this.banyanStarMaterial.size = 0.19 + Math.sin(elapsedTime * 2.4) * 0.025;
      this.banyanStarMaterial.opacity = 0.88 + Math.sin(elapsedTime * 1.8) * 0.08;
    }

    // 2. Dải hạt ngân hà xoắn ốc trôi bồng bềnh liên tục qua tán cây trong phòng
    if (this.banyanSpiralGeometry && this.banyanParticleData && this.banyanParticleData.length > 0) {
      const posAttr = this.banyanSpiralGeometry.getAttribute('position');
      if (posAttr) {
        const arr = posAttr.array;
        const count = this.banyanParticleData.length;
        for (let i = 0; i < count; i++) {
          const p = this.banyanParticleData[i];
          p.progress = (p.progress + p.speed * delta * 0.22) % 1.0;
          const angle = p.baseAngle + p.progress * Math.PI * 6 + elapsedTime * 0.15;
          const rad = p.baseRadius * (0.65 + p.progress * 0.75) + p.radialJitter;
          const py = p.baseY + p.progress * 3.2;
          arr[i * 3] = Math.cos(angle) * rad;
          arr[i * 3 + 1] = py;
          arr[i * 3 + 2] = Math.sin(angle) * rad;
        }
        posAttr.needsUpdate = true;
      }
    }

    // 3. Hoạt ảnh lấp lánh tương tự cho Cội Cây Tri Thức sảnh ngoài
    if (this.starCanopyMaterial) {
      this.starCanopyMaterial.size = 0.17 + Math.sin(elapsedTime * 2.0) * 0.02;
    }
    if (this.spiralGeometry && this.spiralParticleData && this.spiralParticleData.length > 0) {
      const posAttr = this.spiralGeometry.getAttribute('position');
      if (posAttr) {
        const arr = posAttr.array;
        const count = this.spiralParticleData.length;
        for (let i = 0; i < count; i++) {
          const p = this.spiralParticleData[i];
          p.progress = (p.progress + p.speed * delta * 0.22) % 1.0;
          const angle = p.baseAngle + p.progress * Math.PI * 8 + elapsedTime * 0.18;
          const rad = 0.45 + p.progress * 2.15 + p.radialJitter;
          const py = 0.45 + p.progress * 3.35;
          arr[i * 3] = Math.cos(angle) * rad;
          arr[i * 3 + 1] = py;
          arr[i * 3 + 2] = Math.sin(angle) * rad;
        }
        posAttr.needsUpdate = true;
      }
    }
  }
}

window.MuseumBuilder = MuseumBuilder;
