import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Compass,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Map,
  Sparkles,
  DoorOpen,
  UserCheck,
  FileText,
  Award,
  ChevronRight,
  ChevronLeft,
  Eye,
  Info
} from 'lucide-react';
import { ExhibitionRoom, Hotspot360, EducatorProfile, ArchiveItem, RoomId } from '../types/museum';
import { generateEducatorPortraitDataUri, generateArchiveVisualDataUri } from '../utils/portraitSvgGenerator';

interface Panorama360ViewerProps {
  rooms: ExhibitionRoom[];
  currentRoom: ExhibitionRoom;
  educators: EducatorProfile[];
  archives: ArchiveItem[];
  onSelectRoom: (roomId: RoomId) => void;
  onSelectEducator: (educator: EducatorProfile) => void;
  onSelectArchive: (archive: ArchiveItem) => void;
}

function normalizeAngle(angle: number): number {
  let a = ((angle + 180) % 360 + 360) % 360 - 180;
  return a;
}

function shortestAngleDiff(from: number, to: number): number {
  return normalizeAngle(to - from);
}

export const Panorama360Viewer: React.FC<Panorama360ViewerProps> = ({
  rooms,
  currentRoom,
  educators,
  archives,
  onSelectRoom,
  onSelectEducator,
  onSelectArchive
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Camera state: yaw (-180..180), pitch (-38..38), fov (45..95)
  const [yaw, setYaw] = useState<number>(0);
  const [pitch, setPitch] = useState<number>(2);
  const [fov, setFov] = useState<number>(75);
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(true);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [showMinimap, setShowMinimap] = useState<boolean>(true);
  const [showRoomInfo, setShowRoomInfo] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [activePlaque, setActivePlaque] = useState<Hotspot360 | null>(null);
  const [hoveredHotspotId, setHoveredHotspotId] = useState<string | null>(null);

  // Smooth target animation ref
  const targetCameraRef = useRef<{ yaw: number; pitch: number; active: boolean }>({
    yaw: 0,
    pitch: 2,
    active: false
  });
  const dragStartRef = useRef<{ x: number; y: number; startYaw: number; startPitch: number }>({
    x: 0,
    y: 0,
    startYaw: 0,
    startPitch: 2
  });
  const customImageRef = useRef<HTMLImageElement | null>(null);

  // Load custom panorama image if provided
  useEffect(() => {
    if (currentRoom.customPanoramaUrl) {
      const img = new Image();
      img.src = currentRoom.customPanoramaUrl;
      img.onload = () => {
        customImageRef.current = img;
      };
    } else {
      customImageRef.current = null;
    }
  }, [currentRoom.customPanoramaUrl]);

  // Reset camera gently on room change
  useEffect(() => {
    setActivePlaque(null);
    targetCameraRef.current = { yaw: 0, pitch: 3, active: true };
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [currentRoom.id]);

  // Smooth animation loop for auto-rotate and fly-to target
  useEffect(() => {
    let animId: number;
    const updateCamera = () => {
      if (targetCameraRef.current.active && !isDragging) {
        setYaw((prevYaw) => {
          const diff = shortestAngleDiff(prevYaw, targetCameraRef.current.yaw);
          if (Math.abs(diff) < 0.35) {
            targetCameraRef.current.active = false;
            return targetCameraRef.current.yaw;
          }
          return normalizeAngle(prevYaw + diff * 0.12);
        });
        setPitch((prevPitch) => {
          const diff = targetCameraRef.current.pitch - prevPitch;
          if (Math.abs(diff) < 0.25) return targetCameraRef.current.pitch;
          return prevPitch + diff * 0.12;
        });
      } else if (isAutoRotate && !isDragging) {
        setYaw((prev) => normalizeAngle(prev + 0.11));
      }
      animId = requestAnimationFrame(updateCamera);
    };
    animId = requestAnimationFrame(updateCamera);
    return () => cancelAnimationFrame(animId);
  }, [isAutoRotate, isDragging]);

  // Draw procedural 3D Museum Architecture Panorama on Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = (canvas.width = canvas.clientWidth * (window.devicePixelRatio || 1));
    const height = (canvas.height = canvas.clientHeight * (window.devicePixelRatio || 1));

    ctx.save();

    // Horizon line based on pitch
    const horizonY = height * 0.5 + (pitch / fov) * height * 0.95;
    const ceilingHeight = Math.max(0, horizonY - height * 0.36);
    const floorTop = Math.min(height, horizonY + height * 0.34);

    // If custom equirectangular panorama is loaded
    if (customImageRef.current) {
      const img = customImageRef.current;
      ctx.fillStyle = '#070C17';
      ctx.fillRect(0, 0, width, height);
      const normalizedYaw = (yaw + 180) / 360;
      const sliceWidth = (fov / 360) * img.width;
      const sx = normalizedYaw * img.width - sliceWidth / 2;
      ctx.drawImage(img, sx, 0, sliceWidth, img.height, 0, 0, width, height);
      ctx.restore();
      return;
    }

    // 1. CEILING GRADIENT
    const ceilGrad = ctx.createLinearGradient(0, 0, 0, Math.max(10, ceilingHeight));
    ceilGrad.addColorStop(0, currentRoom.ceilingColor);
    ceilGrad.addColorStop(1, currentRoom.wallColorTop);
    ctx.fillStyle = ceilGrad;
    ctx.fillRect(0, 0, width, Math.max(0, ceilingHeight));

    // 2. MUSEUM WALL GRADIENT
    const wallGrad = ctx.createLinearGradient(0, Math.max(0, ceilingHeight), 0, Math.min(height, floorTop));
    wallGrad.addColorStop(0, currentRoom.wallColorTop);
    wallGrad.addColorStop(0.5, currentRoom.wallColorBottom);
    wallGrad.addColorStop(1, currentRoom.wallColorTop);
    ctx.fillStyle = wallGrad;
    ctx.fillRect(0, Math.max(0, ceilingHeight), width, Math.max(10, floorTop - ceilingHeight));

    // 3. POLISHED MUSEUM FLOOR GRADIENT
    const floorGrad = ctx.createLinearGradient(0, Math.max(0, floorTop), 0, height);
    floorGrad.addColorStop(0, currentRoom.floorColor);
    floorGrad.addColorStop(0.35, '#120D0A');
    floorGrad.addColorStop(1, '#06080E');
    ctx.fillStyle = floorGrad;
    ctx.fillRect(0, Math.max(0, floorTop), width, Math.max(0, height - floorTop));

    // Helper: convert world yaw (-180..180) to screen X
    const yawToScreenX = (worldYaw: number) => {
      const diff = shortestAngleDiff(yaw, worldYaw);
      return width * 0.5 + (diff / fov) * width;
    };

    // 4. PERSPECTIVE FLOOR TILES & RADIAL RAYS
    ctx.strokeStyle = 'rgba(223, 193, 123, 0.14)';
    ctx.lineWidth = 1.2;
    for (let angle = -180; angle < 180; angle += 15) {
      const sx = yawToScreenX(angle);
      if (sx >= -width * 0.5 && sx <= width * 1.5) {
        ctx.beginPath();
        ctx.moveTo(sx, floorTop);
        const bottomX = width * 0.5 + (sx - width * 0.5) * 2.8;
        ctx.lineTo(bottomX, height);
        ctx.stroke();
      }
    }

    // Concentric floor rings (simulated horizontal perspective lines)
    for (let i = 1; i <= 6; i++) {
      const ratio = Math.pow(i / 6, 1.6);
      const y = floorTop + (height - floorTop) * ratio;
      ctx.strokeStyle = `rgba(223, 193, 123, ${0.06 + ratio * 0.12})`;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // 5. CEILING COFFERS & DONG SON DRUM / SKYLIGHT RAYS
    ctx.strokeStyle = 'rgba(223, 193, 123, 0.12)';
    for (let angle = -180; angle < 180; angle += 20) {
      const sx = yawToScreenX(angle);
      if (sx >= -width * 0.5 && sx <= width * 1.5) {
        ctx.beginPath();
        ctx.moveTo(sx, ceilingHeight);
        const topX = width * 0.5 + (sx - width * 0.5) * 2.4;
        ctx.lineTo(topX, 0);
        ctx.stroke();
      }
    }

    // Gold Cornice Moulding (Trần & Chân tường)
    ctx.strokeStyle = currentRoom.accentColor;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, ceilingHeight);
    ctx.lineTo(width, ceilingHeight);
    ctx.stroke();

    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(0, ceilingHeight + 10);
    ctx.lineTo(width, ceilingHeight + 10);
    ctx.stroke();

    // Baseboard moulding (Chân tường bảo tàng)
    ctx.fillStyle = '#140E0A';
    ctx.fillRect(0, floorTop - 16, width, 16);
    ctx.strokeStyle = currentRoom.accentColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, floorTop - 16);
    ctx.lineTo(width, floorTop - 16);
    ctx.stroke();

    //Dado rail (Đường phào ngang lưng tường)
    const dadoY = floorTop - (floorTop - ceilingHeight) * 0.24;
    ctx.strokeStyle = 'rgba(223, 193, 123, 0.22)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, dadoY);
    ctx.lineTo(width, dadoY);
    ctx.stroke();

    // 6. ARCHITECTURAL PILLARS EVERY 45 DEGREES AROUND 360 CYLINDER
    const pillarAngles = [-180, -135, -90, -45, 0, 45, 90, 135];
    pillarAngles.forEach((pAngle) => {
      // Avoid drawing a pillar directly on top of a hotspot if too close
      const isCloseToHotspot = currentRoom.hotspots.some(
        (h) => Math.abs(shortestAngleDiff(h.yaw, pAngle)) < 12
      );
      if (isCloseToHotspot) return;

      const sx = yawToScreenX(pAngle);
      if (sx < -120 || sx > width + 120) return;

      const pillarWidth = Math.max(22, width * 0.028);

      if (currentRoom.architecturalMotif === 'temple_pillars' || currentRoom.architecturalMotif === 'grand_rotunda') {
        // Cột gỗ sơn son thếp vàng phong cách Văn Miếu
        const pGrad = ctx.createLinearGradient(sx - pillarWidth / 2, 0, sx + pillarWidth / 2, 0);
        pGrad.addColorStop(0, '#3A0E11');
        pGrad.addColorStop(0.5, '#6E181E');
        pGrad.addColorStop(1, '#2B090C');
        ctx.fillStyle = pGrad;
        ctx.fillRect(sx - pillarWidth / 2, ceilingHeight, pillarWidth, floorTop - ceilingHeight);

        // Gold bands on pillar
        ctx.strokeStyle = '#DFC17B';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(sx - pillarWidth / 2, ceilingHeight, pillarWidth, floorTop - ceilingHeight);
        ctx.fillStyle = '#DFC17B';
        ctx.fillRect(sx - pillarWidth * 0.65, ceilingHeight, pillarWidth * 1.3, 10);
        ctx.fillRect(sx - pillarWidth * 0.65, floorTop - 12, pillarWidth * 1.3, 12);
      } else if (currentRoom.architecturalMotif === 'resistance_bamboo') {
        // Cột tre / gỗ mộc chiến khu Việt Bắc
        ctx.fillStyle = '#4A3B28';
        ctx.fillRect(sx - pillarWidth * 0.35, ceilingHeight, pillarWidth * 0.7, floorTop - ceilingHeight);
        ctx.strokeStyle = '#CCA452';
        ctx.lineWidth = 1;
        for (let y = ceilingHeight + 40; y < floorTop; y += 55) {
          ctx.beginPath();
          ctx.moveTo(sx - pillarWidth * 0.38, y);
          ctx.lineTo(sx + pillarWidth * 0.38, y);
          ctx.stroke();
        }
      } else if (currentRoom.architecturalMotif === 'digital_futuristic') {
        // Cột ánh sáng công nghệ số
        const glowGrad = ctx.createLinearGradient(sx - pillarWidth / 2, 0, sx + pillarWidth / 2, 0);
        glowGrad.addColorStop(0, 'rgba(56, 189, 248, 0.08)');
        glowGrad.addColorStop(0.5, 'rgba(223, 193, 123, 0.45)');
        glowGrad.addColorStop(1, 'rgba(56, 189, 248, 0.08)');
        ctx.fillStyle = glowGrad;
        ctx.fillRect(sx - pillarWidth * 0.3, ceilingHeight, pillarWidth * 0.6, floorTop - ceilingHeight);
      } else {
        // Cột đá cẩm thạch / kiến trúc cổ điển bảo tàng
        const colGrad = ctx.createLinearGradient(sx - pillarWidth / 2, 0, sx + pillarWidth / 2, 0);
        colGrad.addColorStop(0, '#162030');
        colGrad.addColorStop(0.5, '#2A3B54');
        colGrad.addColorStop(1, '#101824');
        ctx.fillStyle = colGrad;
        ctx.fillRect(sx - pillarWidth / 2, ceilingHeight, pillarWidth, floorTop - ceilingHeight);
        ctx.strokeStyle = 'rgba(223, 193, 123, 0.4)';
        ctx.strokeRect(sx - pillarWidth / 2, ceilingHeight, pillarWidth, floorTop - ceilingHeight);
      }
    });

    // 7. VOLUMETRIC MUSEUM SPOTLIGHTS OVER EACH HOTSPOT
    currentRoom.hotspots.forEach((hs) => {
      const sx = yawToScreenX(hs.yaw);
      if (sx < -300 || sx > width + 300) return;

      const coneGrad = ctx.createRadialGradient(
        sx,
        ceilingHeight + (floorTop - ceilingHeight) * 0.38,
        15,
        sx,
        ceilingHeight + (floorTop - ceilingHeight) * 0.45,
        width * 0.16
      );
      if (hs.type === 'portal') {
        coneGrad.addColorStop(0, 'rgba(223, 193, 123, 0.24)');
        coneGrad.addColorStop(1, 'rgba(223, 193, 123, 0)');
      } else {
        coneGrad.addColorStop(0, 'rgba(255, 228, 160, 0.22)');
        coneGrad.addColorStop(1, 'rgba(255, 228, 160, 0)');
      }
      ctx.fillStyle = coneGrad;
      ctx.beginPath();
      ctx.moveTo(sx - 20, ceilingHeight);
      ctx.lineTo(sx + 20, ceilingHeight);
      ctx.lineTo(sx + width * 0.14, floorTop + 35);
      ctx.lineTo(sx - width * 0.14, floorTop + 35);
      ctx.closePath();
      ctx.fill();

      // Ceiling spotlight fixture
      ctx.fillStyle = '#DFC17B';
      ctx.beginPath();
      ctx.arc(sx, ceilingHeight + 4, 5, 0, Math.PI * 2);
      ctx.fill();
    });

    // 8. MEMORIAL CANDLES IN ROOM 6
    if (currentRoom.id === 'room-6') {
      for (let a = -170; a <= 170; a += 12) {
        const sx = yawToScreenX(a);
        if (sx >= 0 && sx <= width) {
          const candleY = floorTop + 26 + ((a * 17) % 35);
          const rad = ctx.createRadialGradient(sx, candleY, 1, sx, candleY, 16);
          rad.addColorStop(0, 'rgba(255, 215, 110, 0.95)');
          rad.addColorStop(0.5, 'rgba(235, 130, 45, 0.45)');
          rad.addColorStop(1, 'rgba(235, 130, 45, 0)');
          ctx.fillStyle = rad;
          ctx.beginPath();
          ctx.arc(sx, candleY, 16, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    ctx.restore();
  }, [yaw, pitch, fov, currentRoom]);

  // Mouse & Touch Drag Handlers
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('[data-hotspot-interactive="true"]')) {
      return;
    }
    setIsDragging(true);
    setIsAutoRotate(false);
    targetCameraRef.current.active = false;
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      startYaw: yaw,
      startPitch: pitch
    };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    const sensitivity = fov / 420;
    setYaw(normalizeAngle(dragStartRef.current.startYaw - dx * sensitivity));
    setPitch(Math.max(-32, Math.min(32, dragStartRef.current.startPitch + dy * sensitivity)));
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    setFov((prev) => Math.max(45, Math.min(95, prev + (e.deltaY > 0 ? 4 : -4))));
  };

  // Fly camera to a specific hotspot
  const flyToHotspot = useCallback((hs: Hotspot360) => {
    setIsAutoRotate(false);
    targetCameraRef.current = {
      yaw: hs.yaw,
      pitch: hs.pitch,
      active: true
    };
  }, []);

  // Portal transition between rooms
  const handleEnterPortal = (targetRoomId: RoomId) => {
    setIsTransitioning(true);
    setFov(50);
    setTimeout(() => {
      onSelectRoom(targetRoomId);
      setFov(75);
      setIsTransitioning(false);
    }, 360);
  };

  // Handle clicking a hotspot in 3D space
  const handleHotspotClick = (hs: Hotspot360) => {
    flyToHotspot(hs);
    if (hs.type === 'portal' && hs.targetRoomId) {
      handleEnterPortal(hs.targetRoomId);
      return;
    }
    if (hs.type === 'portrait' && hs.linkedEducatorId) {
      const edu = educators.find((e) => e.id === hs.linkedEducatorId);
      if (edu) onSelectEducator(edu);
      return;
    }
    if (hs.type === 'artifact' && hs.linkedArchiveId) {
      const arc = archives.find((a) => a.id === hs.linkedArchiveId);
      if (arc) onSelectArchive(arc);
      return;
    }
    if (hs.type === 'plaque') {
      if (hs.linkedArchiveId) {
        const arc = archives.find((a) => a.id === hs.linkedArchiveId);
        if (arc) {
          onSelectArchive(arc);
          return;
        }
      }
      setActivePlaque(hs);
    }
  };

  // Audio Guide (Thuyết minh tự động tiếng Việt)
  const toggleAudioGuide = () => {
    if (!('speechSynthesis' in window)) {
      alert('Trình duyệt của bạn chưa hỗ trợ đọc thuyết minh tự động.');
      return;
    }
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    window.speechSynthesis.cancel();
    const text = `Chào mừng quý khách đang đứng tại ${currentRoom.name}, giai đoạn ${currentRoom.periodRange}. ${currentRoom.curatorialStatement} ${currentRoom.historicalNote}`;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'vi-VN';
    utterance.rate = 0.98;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Compass cardinal label
  const getCompassDirection = (angle: number) => {
    const a = ((angle % 360) + 360) % 360;
    if (a >= 337.5 || a < 22.5) return 'Bắc (Chính diện)';
    if (a >= 22.5 && a < 67.5) return 'Đông Bắc';
    if (a >= 67.5 && a < 112.5) return 'Đông (Phải)';
    if (a >= 112.5 && a < 157.5) return 'Đông Nam';
    if (a >= 157.5 && a < 202.5) return 'Nam (Phía sau)';
    if (a >= 202.5 && a < 247.5) return 'Tây Nam';
    if (a >= 247.5 && a < 292.5) return 'Tây (Trái)';
    return 'Tây Bắc';
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[640px] lg:h-[720px] rounded-2xl overflow-hidden border-2 border-bronze-500/60 shadow-museum bg-navy-950 select-none"
    >
      {/* 1. 360° PROCEDURAL / EQUIRECTANGULAR CANVAS */}
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onWheel={handleWheel}
        className={`relative w-full h-full ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} transition-transform duration-300 ${
          isTransitioning ? 'scale-110 opacity-40' : 'scale-100 opacity-100'
        }`}
      >
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* 2. 3D PROJECTED HOTSPOTS IN SPHERICAL COORDINATES */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {currentRoom.hotspots.map((hs) => {
            const angleDiff = shortestAngleDiff(yaw, hs.yaw);
            // Hide hotspots behind the viewer
            if (Math.abs(angleDiff) > fov * 0.78) return null;

            const leftPercent = 50 + (angleDiff / fov) * 100;
            const topPercent = 50 + ((pitch - hs.pitch) / fov) * 95;
            const distanceFromCenter = Math.abs(angleDiff) / (fov * 0.65);
            const depthScale = Math.max(0.68, 1 - distanceFromCenter * 0.24) * (75 / fov);
            const linkedEducator = hs.linkedEducatorId
              ? educators.find((e) => e.id === hs.linkedEducatorId)
              : undefined;
            const linkedArchive = hs.linkedArchiveId
              ? archives.find((a) => a.id === hs.linkedArchiveId)
              : undefined;

            const isHovered = hoveredHotspotId === hs.id;

            return (
              <div
                key={hs.id}
                data-hotspot-interactive="true"
                style={{
                  left: `${leftPercent}%`,
                  top: `${topPercent}%`,
                  transform: `translate(-50%, -50%) scale(${isHovered ? depthScale * 1.07 : depthScale})`,
                  zIndex: Math.round(100 - Math.abs(angleDiff))
                }}
                onMouseEnter={() => setHoveredHotspotId(hs.id)}
                onMouseLeave={() => setHoveredHotspotId(null)}
                onClick={(e) => {
                  e.stopPropagation();
                  handleHotspotClick(hs);
                }}
                className="absolute pointer-events-auto cursor-pointer transition-transform duration-150 group"
              >
                {/* PORTRAIT FRAME IN 3D SPACE */}
                {hs.type === 'portrait' && linkedEducator && (
                  <div className="flex flex-col items-center">
                    {/* Museum Gallery Lamp Above Frame */}
                    <div className="w-20 h-2 bg-gradient-to-r from-bronze-600 via-bronze-300 to-bronze-600 rounded-full mb-1.5 shadow-glow" />
                    <div className="relative w-36 sm:w-44 rounded-lg overflow-hidden portrait-frame bg-navy-900 transition-all group-hover:ring-2 group-hover:ring-bronze-300">
                      <img
                        src={generateEducatorPortraitDataUri(linkedEducator)}
                        alt={linkedEducator.fullName}
                        className="w-full h-44 sm:h-52 object-cover"
                        draggable={false}
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950 via-navy-950/90 to-transparent p-2.5 text-center">
                        <p className="text-xs font-serif font-bold text-ivory-50 truncate">
                          {linkedEducator.fullName}
                        </p>
                        <p className="text-[10px] text-bronze-300 truncate">{linkedEducator.birthDeathYears}</p>
                      </div>
                    </div>
                    <div className="mt-2 px-3 py-1 rounded-full bg-navy-950/90 border border-bronze-400/70 text-[11px] text-ivory-100 font-medium flex items-center gap-1.5 shadow-lg group-hover:bg-bronze-500 group-hover:text-navy-950 transition-colors">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Xem hồ sơ Danh sư</span>
                    </div>
                  </div>
                )}

                {/* ARTIFACT PEDESTAL IN 3D SPACE */}
                {hs.type === 'artifact' && (
                  <div className="flex flex-col items-center">
                    <div className="relative w-44 sm:w-52 rounded-xl overflow-hidden border-2 border-bronze-400/80 bg-navy-900/95 shadow-glow p-2 transition-all group-hover:border-ivory-100">
                      {linkedArchive ? (
                        <img
                          src={generateArchiveVisualDataUri(linkedArchive)}
                          alt={hs.title}
                          className="w-full h-28 object-cover rounded-lg mb-2"
                          draggable={false}
                        />
                      ) : (
                        <div className="w-full h-24 rounded-lg bg-navy-800 flex items-center justify-center mb-2 border border-bronze-500/30">
                          <FileText className="w-8 h-8 text-bronze-300" />
                        </div>
                      )}
                      <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-bronze-300 font-semibold">
                        <Award className="w-3 h-3" />
                        <span>Hiện vật & Tư liệu gốc</span>
                      </div>
                      <p className="text-xs font-serif font-bold text-ivory-50 line-clamp-2 mt-0.5">
                        {hs.title}
                      </p>
                    </div>
                    {/* Pedestal Pillar */}
                    <div className="w-24 h-8 bg-gradient-to-b from-wood-700 to-wood-900 border-x border-bronze-500/50" />
                    <div className="w-32 h-3 bg-bronze-600/80 rounded-full shadow-lg" />
                  </div>
                )}

                {/* CEREMONIAL PLAQUE / STELE */}
                {hs.type === 'plaque' && (
                  <div className="flex flex-col items-center">
                    <div className="w-56 sm:w-64 p-4 rounded-xl bg-gradient-to-b from-navy-900/95 to-navy-950/95 border-2 border-bronze-400 shadow-glow text-center">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-crimson-700 text-ivory-50 text-[10px] font-semibold uppercase tracking-wider mb-1.5">
                        Bia Chủ Đề Lịch Sử
                      </span>
                      <h4 className="font-serif font-bold text-sm text-bronze-300 leading-snug">
                        {hs.title}
                      </h4>
                      <p className="text-[11px] text-ivory-200/85 mt-1 line-clamp-2">{hs.subtitle}</p>
                      <div className="mt-2.5 inline-flex items-center gap-1 text-[11px] text-bronze-300 font-semibold group-hover:underline">
                        <Info className="w-3.5 h-3.5" />
                        <span>Nhấp để đọc văn bia chi tiết</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* PORTAL ARCHWAY TO ANOTHER ROOM */}
                {hs.type === 'portal' && (
                  <div className="flex flex-col items-center">
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-bronze-300 via-bronze-500 to-bronze-700 flex items-center justify-center text-navy-950 shadow-glow hotspot-pulse group-hover:scale-110 transition-transform">
                      <DoorOpen className="w-7 h-7" />
                    </div>
                    <div className="mt-2.5 max-w-[210px] px-3.5 py-2 rounded-xl bg-navy-950/92 border border-bronze-400/80 text-center shadow-xl">
                      <p className="text-[10px] uppercase tracking-wider text-bronze-300 font-bold">
                        Lối đi chuyển phòng 360°
                      </p>
                      <p className="text-xs font-serif font-bold text-ivory-50 leading-tight mt-0.5">
                        {hs.title}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. TOP-LEFT HUD: ROOM BANNER & AUDIO GUIDE */}
      <div className="absolute top-4 left-4 right-4 flex flex-wrap items-start justify-between gap-3 pointer-events-none z-30">
        <div className="pointer-events-auto max-w-xl bg-navy-950/88 backdrop-blur-md border border-bronze-500/50 rounded-xl p-3.5 shadow-xl">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-0.5 rounded bg-bronze-500 text-navy-950 text-[11px] font-bold tracking-wider uppercase">
              {currentRoom.code}
            </span>
            <span className="text-xs text-bronze-300 font-medium">{currentRoom.periodRange}</span>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-300">
              ✓ Đã kiểm chứng sử liệu
            </span>
          </div>
          <h2 className="text-lg sm:text-xl font-serif font-bold text-ivory-50 mt-1">
            {currentRoom.name}
          </h2>
          <p className="text-xs text-ivory-200/80 mt-0.5 line-clamp-2">{currentRoom.subtitle}</p>

          <div className="flex flex-wrap items-center gap-2 mt-2.5">
            <button
              onClick={toggleAudioGuide}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                isSpeaking
                  ? 'bg-crimson-700 text-ivory-50 ring-2 ring-bronze-300'
                  : 'bg-bronze-500/20 hover:bg-bronze-500/35 text-bronze-300 border border-bronze-400/50'
              }`}
            >
              {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span>{isSpeaking ? 'Dừng thuyết minh' : 'Nghe thuyết minh phòng'}</span>
            </button>

            <button
              onClick={() => setShowRoomInfo((v) => !v)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-navy-800/90 hover:bg-navy-700 text-ivory-100 border border-bronze-500/30 transition-colors"
            >
              <Info className="w-3.5 h-3.5 text-bronze-300" />
              <span>{showRoomInfo ? 'Ẩn lời tựa giám tuyển' : 'Lời tựa giám tuyển'}</span>
            </button>
          </div>

          {showRoomInfo && (
            <div className="mt-3 pt-3 border-t border-bronze-500/30 text-xs text-ivory-100/90 space-y-1.5">
              <p>
                <strong className="text-bronze-300">Ý tưởng trưng bày:</strong> {currentRoom.curatorialStatement}
              </p>
              <p>
                <strong className="text-bronze-300">Bối cảnh lịch sử:</strong> {currentRoom.historicalNote}
              </p>
            </div>
          )}
        </div>

        {/* TOP-RIGHT HUD: 3D COMPASS & FLOOR PLAN MINIMAP */}
        <div className="pointer-events-auto flex flex-col items-end gap-2">
          {/* 360° Compass Pill */}
          <div className="flex items-center gap-2.5 bg-navy-950/90 backdrop-blur-md border border-bronze-500/50 rounded-xl px-3.5 py-2 text-xs text-ivory-100 shadow-lg">
            <Compass
              className="w-4 h-4 text-bronze-300 transition-transform duration-150"
              style={{ transform: `rotate(${-yaw}deg)` }}
            />
            <div>
              <span className="font-semibold text-bronze-300">{getCompassDirection(yaw)}</span>
              <span className="ml-2 text-ivory-200/70">{Math.round(yaw)}°</span>
            </div>
            <button
              onClick={() => setShowMinimap((m) => !m)}
              className="ml-2 px-2 py-1 rounded bg-navy-800 hover:bg-navy-700 text-bronze-300 border border-bronze-500/30 flex items-center gap-1"
              title="Bật/tắt sơ đồ mặt bằng Bảo tàng"
            >
              <Map className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sơ đồ 3D</span>
            </button>
          </div>

          {/* Interactive Museum Floor Plan Minimap */}
          {showMinimap && (
            <div className="w-60 sm:w-64 bg-navy-950/92 backdrop-blur-md border border-bronze-500/60 rounded-xl p-3 shadow-2xl">
              <div className="flex items-center justify-between text-[11px] text-bronze-300 font-semibold mb-2">
                <span>SƠ ĐỒ MẶT BẰNG BẢO TÀNG (7 PHÒNG)</span>
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div className="relative w-full h-36 rounded-lg bg-navy-900 border border-bronze-500/30 overflow-hidden">
                {/* Connection lines to Main Hall */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {rooms
                    .filter((r) => r.id !== 'main-hall')
                    .map((r) => (
                      <line
                        key={r.id}
                        x1="50%"
                        y1="52%"
                        x2={`${r.floorPlanPos.x}%`}
                        y2={`${r.floorPlanPos.y}%`}
                        stroke="rgba(223, 193, 123, 0.3)"
                        strokeWidth="1.5"
                        strokeDasharray="3 2"
                      />
                    ))}
                </svg>

                {rooms.map((r) => {
                  const isCurrent = r.id === currentRoom.id;
                  return (
                    <button
                      key={r.id}
                      onClick={() => handleEnterPortal(r.id)}
                      style={{ left: `${r.floorPlanPos.x}%`, top: `${r.floorPlanPos.y}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded text-[9px] font-bold transition-all ${
                        isCurrent
                          ? 'bg-bronze-400 text-navy-950 ring-4 ring-bronze-300/40 scale-110 z-10'
                          : 'bg-navy-800 text-ivory-200 hover:bg-bronze-500 hover:text-navy-950 border border-bronze-400/50'
                      }`}
                      title={r.name}
                    >
                      {r.id === 'main-hall' ? 'SẢNH' : r.id.replace('room-', 'P.')}
                    </button>
                  );
                })}
              </div>
              <p className="text-[10px] text-ivory-200/70 mt-1.5 text-center">
                Nhấp vào phòng bất kỳ trên sơ đồ để dịch chuyển tức thì
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 4. PLAQUE MODAL OVERLAY IF SELECTED */}
      {activePlaque && (
        <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4 z-40">
          <div className="max-w-lg w-full bg-navy-900 border-2 border-bronze-400 rounded-2xl p-6 shadow-2xl text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-crimson-700 text-ivory-50 text-xs font-bold uppercase tracking-wider">
              Văn Bia & Luận Đề Trưng Bày
            </span>
            <h3 className="text-xl font-serif font-bold text-bronze-300 mt-3">{activePlaque.title}</h3>
            <p className="text-xs text-ivory-200/80 mt-1">{activePlaque.subtitle}</p>
            <div className="mt-4 p-4 rounded-xl bg-navy-950/90 border border-bronze-500/40 text-sm text-ivory-100 leading-relaxed">
              {activePlaque.description}
            </div>
            <button
              onClick={() => setActivePlaque(null)}
              className="mt-5 px-5 py-2 rounded-lg bg-bronze-500 hover:bg-bronze-400 text-navy-950 font-semibold text-xs transition-colors"
            >
              Đóng văn bia
            </button>
          </div>
        </div>
      )}

      {/* 5. BOTTOM HUD: QUICK HOTSPOT REEL & CAMERA CONTROLS */}
      <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-2 pointer-events-none z-30">
        {/* Quick Hotspot Selector Strip */}
        <div className="pointer-events-auto flex items-center gap-2 overflow-x-auto py-1.5 px-2.5 rounded-xl bg-navy-950/88 backdrop-blur-md border border-bronze-500/40">
          <span className="text-[11px] font-semibold text-bronze-300 whitespace-nowrap mr-1">
            Điểm nhấn trong phòng ({currentRoom.hotspots.length}):
          </span>
          {currentRoom.hotspots.map((hs) => (
            <button
              key={hs.id}
              onClick={() => flyToHotspot(hs)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-navy-800/90 hover:bg-bronze-500 hover:text-navy-950 text-ivory-100 text-xs whitespace-nowrap border border-bronze-500/30 transition-colors"
            >
              {hs.type === 'portrait' && <UserCheck className="w-3.5 h-3.5 text-bronze-300" />}
              {hs.type === 'artifact' && <Award className="w-3.5 h-3.5 text-bronze-300" />}
              {hs.type === 'plaque' && <FileText className="w-3.5 h-3.5 text-bronze-300" />}
              {hs.type === 'portal' && <DoorOpen className="w-3.5 h-3.5 text-bronze-300" />}
              <span className="truncate max-w-[180px]">{hs.title}</span>
            </button>
          ))}
        </div>

        {/* Camera Navigation Bar */}
        <div className="pointer-events-auto flex flex-wrap items-center justify-between gap-2 bg-navy-950/92 backdrop-blur-md border border-bronze-500/50 rounded-xl px-3.5 py-2">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => {
                setIsAutoRotate(false);
                setYaw((y) => normalizeAngle(y - 25));
              }}
              className="p-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-ivory-100 border border-bronze-500/30"
              title="Xoay trái"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setIsAutoRotate(false);
                setYaw((y) => normalizeAngle(y + 25));
              }}
              className="p-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-ivory-100 border border-bronze-500/30"
              title="Xoay phải"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsAutoRotate((r) => !r)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                isAutoRotate
                  ? 'bg-bronze-500 text-navy-950 border-bronze-300'
                  : 'bg-navy-800 text-ivory-100 border-bronze-500/30 hover:bg-navy-700'
              }`}
            >
              <RotateCw className={`w-3.5 h-3.5 ${isAutoRotate ? 'animate-spin' : ''}`} />
              <span>{isAutoRotate ? 'Đang tự xoay 360°' : 'Tự xoay 360°'}</span>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs text-ivory-200/80">
            <span>🖱️ Kéo chuột để nhìn 360°</span>
            <span>•</span>
            <span>🔍 Cuộn chuột để thu phóng</span>
            <span>•</span>
            <span>🖼️ Nhấp vào tranh/cổng để tương tác</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setFov((f) => Math.max(45, f - 8))}
              className="p-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-ivory-100 border border-bronze-500/30"
              title="Phóng to"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setFov((f) => Math.min(95, f + 8))}
              className="p-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-ivory-100 border border-bronze-500/30"
              title="Thu nhỏ"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={toggleFullscreen}
              className="p-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-ivory-100 border border-bronze-500/30"
              title="Toàn màn hình"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
