// Trình phát Phim Tư Liệu Kể Chuyện, Thuyết Minh Giọng Đọc & Âm Nhạc Bảo Tàng

class MuseumAudioEngine {
  constructor() {
    this.ctx = null;
    this.isAmbientPlaying = false;
    this.ambientGain = null;
    this.ambientTimers = [];

    // Nạp bài hát chính thức của Bảo tàng: "Người Thầy Việt Nam.mp3" do người dùng cung cấp
    this.songAudio = null;
    try {
      this.songAudio = new Audio(encodeURI('./Người Thầy Việt Nam.mp3'));
      this.songAudio.loop = true;
      this.songAudio.volume = 0.65;
      this.songAudio.preload = 'auto';
    } catch (err) {
      console.warn('Could not initialize songAudio:', err);
    }
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleAmbient() {
    this.init();
    if (this.isAmbientPlaying) {
      this.stopAmbient();
      return false;
    } else {
      this.startAmbient();
      return true;
    }
  }

  startAmbient() {
    this.init();
    this.isAmbientPlaying = true;

    // Ưu tiên phát trực tiếp bài hát "Người Thầy Việt Nam.mp3"
    if (this.songAudio) {
      this.songAudio.play().catch((err) => {
        console.warn('Autoplay prevented or waiting for interaction:', err);
        // Fallback sang tiếng chuông hòa tấu ngũ cung nếu trình duyệt chưa kích hoạt tương tác
        this.startSynthChime();
      });
    } else {
      this.startSynthChime();
    }
    return true;
  }

  startSynthChime() {
    if (!this.ctx) return;
    const masterGain = this.ctx.createGain();
    masterGain.gain.value = 0.08;
    masterGain.connect(this.ctx.destination);
    this.ambientGain = masterGain;

    const scaleFreqs = [146.83, 174.61, 196.0, 220.0, 261.63, 293.66, 349.23, 392.0];
    const playGentleChime = () => {
      if (!this.isAmbientPlaying || !this.ctx) return;
      const now = this.ctx.currentTime;
      const freq = scaleFreqs[Math.floor(Math.random() * scaleFreqs.length)];

      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      noteGain.gain.setValueAtTime(0.001, now);
      noteGain.gain.linearRampToValueAtTime(0.28, now + 0.8);
      noteGain.gain.exponentialRampToValueAtTime(0.0008, now + 5.5);

      osc.connect(noteGain);
      noteGain.connect(masterGain);

      osc.start(now);
      osc.stop(now + 5.6);

      const nextDelay = 3200 + Math.random() * 2600;
      const timer = setTimeout(playGentleChime, nextDelay);
      this.ambientTimers.push(timer);
    };

    playGentleChime();
  }

  stopAmbient() {
    this.isAmbientPlaying = false;
    if (this.songAudio) {
      try {
        this.songAudio.pause();
      } catch (e) {}
    }
    this.ambientTimers.forEach((t) => clearTimeout(t));
    this.ambientTimers = [];
    if (this.ambientGain && this.ctx) {
      try {
        this.ambientGain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 0.3);
      } catch (e) {}
    }
    return false;
  }

  playClickChime() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(528, now);
    osc.frequency.exponentialRampToValueAtTime(660, now + 0.18);

    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.36);
  }
}

// ==================== VẼ HÌNH ẢNH TƯ LIỆU ĐỘ PHÂN GIẢI CAO ====================
function renderArchivalCanvas(canvas, item, artifact) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;

  // Nền giấy mỹ thuật / bản vẽ bảo tàng
  const bgGrad = ctx.createLinearGradient(0, 0, w, h);
  bgGrad.addColorStop(0, '#13253e');
  bgGrad.addColorStop(1, '#0c1829');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, w, h);

  // Lưới tỷ lệ kiến trúc mờ
  ctx.strokeStyle = 'rgba(200, 157, 84, 0.1)';
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 36) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 0; y < h; y += 36) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  // Viền đồng trang nhã
  ctx.strokeStyle = '#c89d54';
  ctx.lineWidth = 3;
  ctx.strokeRect(14, 14, w - 28, h - 28);
  ctx.lineWidth = 1;
  ctx.strokeRect(22, 22, w - 44, h - 44);

  // Vẽ minh họa chuyên biệt theo loại tư liệu
  ctx.save();
  ctx.translate(w / 2, h / 2 - 14);
  drawArchivalMotif(ctx, item.artType);
  ctx.restore();

  // Nhãn hồ sơ lưu trữ góc trên
  ctx.fillStyle = 'rgba(200, 157, 84, 0.85)';
  ctx.font = '600 12px "Be Vietnam Pro", sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(`HỒ SƠ LƯU TRỮ: ${artifact.code} • BẢO TÀNG NHÀ GIÁO VIỆT NAM`, 34, 44);

  // Tiêu đề dưới đáy ảnh
  ctx.fillStyle = 'rgba(10, 20, 34, 0.86)';
  ctx.fillRect(23, h - 76, w - 46, 52);
  ctx.fillStyle = '#f5d78e';
  ctx.font = 'bold 16px "Cormorant Garamond", serif';
  ctx.fillText(item.title, 36, h - 52);
  ctx.fillStyle = '#dfd7c8';
  ctx.font = '12px "Be Vietnam Pro", sans-serif';
  ctx.fillText(item.caption, 36, h - 33);
}

function drawArchivalMotif(ctx, artType) {
  ctx.strokeStyle = '#e5c178';
  ctx.fillStyle = 'rgba(200, 157, 84, 0.2)';
  ctx.lineWidth = 2.2;

  switch (artType) {
    case 'monument-blueprint':
    case 'bronze-detail': {
      // Vẽ Khuê Văn Các & Hoa Sen
      ctx.beginPath();
      ctx.arc(0, 0, 82, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, 42, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      for (let i = 0; i < 8; i++) {
        const a = (i * Math.PI) / 4;
        ctx.beginPath();
        ctx.moveTo(Math.cos(a) * 42, Math.sin(a) * 42);
        ctx.lineTo(Math.cos(a) * 82, Math.sin(a) * 82);
        ctx.stroke();
      }
      ctx.strokeRect(-58, 52, 116, 18);
      break;
    }
    case 'chuvanan-portrait':
    case 'scroll-detail': {
      // Cuộn Thất Trảm Sớ mở rộng
      ctx.fillStyle = 'rgba(243, 229, 200, 0.16)';
      ctx.fillRect(-125, -62, 250, 124);
      ctx.strokeRect(-125, -62, 250, 124);
      ctx.fillStyle = '#c89d54';
      ctx.fillRect(-135, -70, 10, 140);
      ctx.fillRect(125, -70, 10, 140);
      ctx.fillStyle = '#f5d78e';
      ctx.font = 'bold 24px "Cormorant Garamond", serif';
      ctx.textAlign = 'center';
      ctx.fillText('VẠN THẾ SƯ BIỂU', 0, -18);
      ctx.font = 'italic 16px Georgia, serif';
      ctx.fillText('Thất Trảm Sớ • Tứ Thư Thuyết Ước', 0, 18);
      break;
    }
    case 'stele-rubbing':
    case 'turtle-carving': {
      // Hình Bia Tiến Sĩ trên lưng rùa
      ctx.beginPath();
      ctx.arc(0, -45, 48, Math.PI, 0);
      ctx.lineTo(48, 55);
      ctx.lineTo(-48, 55);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      // Rùa đá
      ctx.beginPath();
      ctx.ellipse(0, 68, 68, 18, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = '#f5d78e';
      ctx.font = 'bold 14px serif';
      ctx.textAlign = 'center';
      ctx.fillText('HIỀN TÀI LÀ', 0, -20);
      ctx.fillText('NGUYÊN KHÍ', 0, 2);
      ctx.fillText('QUỐC GIA', 0, 24);
      break;
    }
    case 'oillamp-art':
    case 'class-1945': {
      // Đèn dầu và bảng Bình Dân Học Vụ
      ctx.strokeRect(-130, -58, 150, 105);
      ctx.fillStyle = '#f5d78e';
      ctx.font = 'bold 18px serif';
      ctx.textAlign = 'center';
      ctx.fillText('I - TỜ (1945)', -55, -12);
      ctx.font = '14px sans-serif';
      ctx.fillText('Bình Dân Học Vụ', -55, 18);
      // Ngọn đèn dầu bên phải
      ctx.beginPath();
      ctx.arc(78, 35, 24, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(68, 12);
      ctx.quadraticCurveTo(78, -45, 88, 12);
      ctx.fillStyle = 'rgba(255, 195, 75, 0.75)';
      ctx.fill();
      ctx.stroke();
      break;
    }
    default: {
      // Biểu tượng trang sách mở & ngọn đuốc tri thức
      ctx.beginPath();
      ctx.moveTo(0, 45);
      ctx.quadraticCurveTo(-65, 30, -110, 45);
      ctx.lineTo(-110, -35);
      ctx.quadraticCurveTo(-65, -50, 0, -30);
      ctx.quadraticCurveTo(65, -50, 110, -35);
      ctx.lineTo(110, 45);
      ctx.quadraticCurveTo(65, 30, 0, 45);
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, -58, 18, 0, Math.PI * 2);
      ctx.stroke();
      break;
    }
  }
}

// ==================== TRÌNH PHÁT PHIM TƯ LIỆU KỂ CHUYỆN (DOCUMENTARY PLAYER) ====================
class DocumentaryPlayer {
  constructor(canvas, onUpdateUI) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.onUpdateUI = onUpdateUI;
    this.artifact = null;
    this.isPlaying = false;
    this.progress = 0; // 0 -> 1
    this.durationSec = 24; // Thời lượng trình chiếu cô đọng 24 giây
    this.lastTimestamp = 0;
    this.rafId = null;
    this.narrationEnabled = false;
  }

  loadArtifact(artifact) {
    this.stop();
    this.artifact = artifact;
    this.progress = 0;
    this.renderFrame();
    if (this.onUpdateUI) {
      this.onUpdateUI(this.getState());
    }
  }

  play() {
    if (!this.artifact) return;
    if (this.progress >= 0.99) {
      this.progress = 0;
    }
    this.isPlaying = true;
    this.lastTimestamp = performance.now();
    if (this.narrationEnabled) {
      this.speakCurrentArtifact();
    }
    this.loop(this.lastTimestamp);
    if (this.onUpdateUI) this.onUpdateUI(this.getState());
  }

  pause() {
    this.isPlaying = false;
    if (this.rafId) cancelAnimationFrame(this.rafId);
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (this.onUpdateUI) this.onUpdateUI(this.getState());
  }

  stop() {
    this.pause();
    this.progress = 0;
  }

  seek(normValue) {
    this.progress = Math.max(0, Math.min(1, normValue));
    this.renderFrame();
    if (this.onUpdateUI) this.onUpdateUI(this.getState());
  }

  toggleNarration() {
    this.narrationEnabled = !this.narrationEnabled;
    if (this.narrationEnabled && this.isPlaying) {
      this.speakCurrentArtifact();
    } else if (!this.narrationEnabled && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    return this.narrationEnabled;
  }

  speakCurrentArtifact() {
    if (!window.speechSynthesis || !this.artifact) return;
    window.speechSynthesis.cancel();
    const scenes = this.artifact.videoData?.scenes || [];
    const textToRead = `${this.artifact.title}. ${scenes.map((s) => s.caption).join(' ')}`;
    const utter = new SpeechSynthesisUtterance(textToRead);
    utter.lang = 'vi-VN';
    utter.rate = 0.98;
    window.speechSynthesis.speak(utter);
  }

  getState() {
    const scenes = this.artifact?.videoData?.scenes || [];
    const idx = Math.min(scenes.length - 1, Math.floor(this.progress * scenes.length));
    return {
      isPlaying: this.isPlaying,
      progress: this.progress,
      sceneIndex: Math.max(0, idx),
      currentScene: scenes[Math.max(0, idx)] || null,
      totalScenes: scenes.length
    };
  }

  loop(now) {
    if (!this.isPlaying) return;
    const dt = (now - this.lastTimestamp) / 1000;
    this.lastTimestamp = now;

    this.progress += dt / this.durationSec;
    if (this.progress >= 1) {
      this.progress = 1;
      this.isPlaying = false;
    }

    this.renderFrame();
    if (this.onUpdateUI) this.onUpdateUI(this.getState());

    if (this.isPlaying) {
      this.rafId = requestAnimationFrame((t) => this.loop(t));
    }
  }

  renderFrame() {
    if (!this.canvas || !this.artifact) return;
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    const state = this.getState();
    const scene = state.currentScene;

    // 1. Nền điện ảnh bảo tàng
    const grad = ctx.createRadialGradient(w / 2, h * 0.42, 30, w / 2, h / 2, w * 0.7);
    grad.addColorStop(0, '#1c3252');
    grad.addColorStop(0.65, '#0f1d31');
    grad.addColorStop(1, '#08101c');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // 2. Hiệu ứng hạt bụi vàng (bụi phấn / ánh sáng tri thức)
    const t = this.progress * 24;
    ctx.fillStyle = 'rgba(232, 194, 118, 0.35)';
    for (let i = 0; i < 28; i++) {
      const px = ((i * 97 + t * 18) % w);
      const py = ((i * 53 - t * 12 + h * 4) % (h - 110));
      const r = 1.2 + (i % 3) * 1.1;
      ctx.beginPath();
      ctx.arc(px, py, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // 3. Hình ảnh biểu trưng chuyển động ở trung tâm
    ctx.save();
    ctx.translate(w / 2, h * 0.39);
    const pulse = 1 + Math.sin(t * 2.2) * 0.04;
    ctx.scale(pulse, pulse);

    // Vòng hào quang đồng
    ctx.strokeStyle = 'rgba(200, 157, 84, 0.45)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, 74, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = '#e6c173';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(0, 0, 56, t * 0.4, t * 0.4 + Math.PI * 1.45);
    ctx.stroke();

    // Biểu tượng theo phân cảnh
    ctx.fillStyle = '#f5d78e';
    ctx.font = 'bold 20px "Cormorant Garamond", serif';
    ctx.textAlign = 'center';
    ctx.fillText(this.artifact.code, 0, -6);
    ctx.font = '13px "Be Vietnam Pro", sans-serif';
    ctx.fillStyle = '#dfd6c3';
    ctx.fillText(`Cảnh ${state.sceneIndex + 1} / ${state.totalScenes}`, 0, 18);
    ctx.restore();

    // 4. Tiêu đề phân cảnh & Phụ đề phim tư liệu
    if (scene) {
      // Nhãn thời gian góc trái trên
      ctx.fillStyle = 'rgba(12, 24, 41, 0.78)';
      ctx.fillRect(22, 18, 225, 32);
      ctx.strokeStyle = '#c89d54';
      ctx.lineWidth = 1;
      ctx.strokeRect(22, 18, 225, 32);

      ctx.fillStyle = '#f5d78e';
      ctx.font = '600 12px "Be Vietnam Pro", sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(`● TƯ LIỆU: ${scene.time}`, 34, 38);

      // Hộp phụ đề phía dưới
      ctx.fillStyle = 'rgba(9, 17, 30, 0.88)';
      ctx.fillRect(22, h - 122, w - 44, 98);
      ctx.strokeStyle = 'rgba(200, 157, 84, 0.65)';
      ctx.strokeRect(22, h - 122, w - 44, 98);

      ctx.fillStyle = '#f5d78e';
      ctx.font = 'bold 18px "Cormorant Garamond", serif';
      ctx.textAlign = 'center';
      ctx.fillText(scene.heading.toUpperCase(), w / 2, h - 94);

      ctx.fillStyle = '#f4EFE6';
      ctx.font = '14px "Be Vietnam Pro", sans-serif';
      this.wrapSubtitle(ctx, scene.caption, w / 2, h - 66, w - 96, 21);
    }
  }

  wrapSubtitle(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + ' ';
      if (ctx.measureText(testLine).width > maxWidth && i > 0) {
        ctx.fillText(line.trim(), x, y);
        line = words[i] + ' ';
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line.trim(), x, y);
  }
}

window.MuseumAudioEngine = MuseumAudioEngine;
window.renderArchivalCanvas = renderArchivalCanvas;
window.DocumentaryPlayer = DocumentaryPlayer;
