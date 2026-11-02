import React, { useState, useMemo } from 'react';
import {
  Compass,
  Landmark,
  Users,
  BookOpen,
  Sparkles,
  Award,
  Search,
  MapPin,
  Calendar,
  Eye,
  Upload,
  RotateCcw,
  ChevronRight,
  CheckCircle2,
  Heart
} from 'lucide-react';
import {
  RoomId,
  NavigationTab,
  EducatorProfile,
  ArchiveItem,
  ExhibitionRoom,
  TributeMessage
} from './types/museum';
import { EDUCATORS_DATA } from './data/educatorsData';
import { EXHIBITION_ROOMS } from './data/roomsData';
import {
  ARCHIVES_DATA,
  LEARNING_QUESTIONS,
  MYSTERY_CLUES,
  INITIAL_TRIBUTES
} from './data/archivesData';
import {
  generateEducatorPortraitDataUri,
  generateArchiveVisualDataUri
} from './utils/portraitSvgGenerator';
import { Panorama360Viewer } from './components/Panorama360Viewer';
import { EducatorDetailModal } from './components/EducatorDetailModal';
import { ArchiveDetailModal } from './components/ArchiveDetailModal';
import { AiMuseumGuide } from './components/AiMuseumGuide';
import { LearningAndTributeHub } from './components/LearningAndTributeHub';

export function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('tour360');
  const [rooms, setRooms] = useState<ExhibitionRoom[]>(EXHIBITION_ROOMS);
  const [educators, setEducators] = useState<EducatorProfile[]>(EDUCATORS_DATA);
  const [archives] = useState<ArchiveItem[]>(ARCHIVES_DATA);
  const [tributes, setTributes] = useState<TributeMessage[]>(INITIAL_TRIBUTES);

  const [currentRoomId, setCurrentRoomId] = useState<RoomId>('main-hall');
  const [selectedEducator, setSelectedEducator] = useState<EducatorProfile | null>(null);
  const [selectedArchive, setSelectedArchive] = useState<ArchiveItem | null>(null);

  // Filters for Educators Directory
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRoomFilter, setSelectedRoomFilter] = useState<string>('all');
  const [selectedRegionFilter, setSelectedRegionFilter] = useState<string>('all');

  // Filter for Archives
  const [archiveRoomFilter, setArchiveRoomFilter] = useState<string>('all');

  const currentRoom = useMemo(
    () => rooms.find((r) => r.id === currentRoomId) || rooms[0],
    [rooms, currentRoomId]
  );

  const filteredEducators = useMemo(() => {
    return educators.filter((edu) => {
      const matchesSearch =
        edu.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        edu.honorificTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        edu.hometown.toLowerCase().includes(searchQuery.toLowerCase()) ||
        edu.shortSummary.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRoom =
        selectedRoomFilter === 'all' ||
        edu.primaryRoomId === selectedRoomFilter ||
        edu.secondaryRoomIds?.includes(selectedRoomFilter as RoomId);
      const matchesRegion =
        selectedRegionFilter === 'all' || edu.region === selectedRegionFilter;
      return matchesSearch && matchesRoom && matchesRegion;
    });
  }, [educators, searchQuery, selectedRoomFilter, selectedRegionFilter]);

  const filteredArchives = useMemo(() => {
    if (archiveRoomFilter === 'all') return archives;
    return archives.filter((a) => a.linkedRoomId === archiveRoomFilter);
  }, [archives, archiveRoomFilter]);

  const handleVisitRoom360 = (roomId: RoomId) => {
    setCurrentRoomId(roomId);
    setActiveTab('tour360');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Upload custom 360° equirectangular panorama image for current room
  const handleUploadCustomPanorama = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setRooms((prev) =>
        prev.map((r) => (r.id === currentRoomId ? { ...r, customPanoramaUrl: dataUrl } : r))
      );
    };
    reader.readAsDataURL(file);
  };

  const handleResetPanorama = () => {
    setRooms((prev) =>
      prev.map((r) => (r.id === currentRoomId ? { ...r, customPanoramaUrl: undefined } : r))
    );
  };

  // Upload custom portrait for an educator
  const handleUploadEducatorPortrait = (eduId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setEducators((prev) =>
        prev.map((edu) => (edu.id === eduId ? { ...edu, customPortraitUrl: dataUrl } : edu))
      );
    };
    reader.readAsDataURL(file);
  };

  const handleAddTribute = (
    newTribute: Omit<TributeMessage, 'id' | 'createdAt' | 'isApproved'>
  ) => {
    const item: TributeMessage = {
      ...newTribute,
      id: `trib-${Date.now()}`,
      createdAt: new Date().toLocaleDateString('vi-VN'),
      isApproved: true
    };
    setTributes((prev) => [item, ...prev]);
  };

  return (
    <div className="min-h-screen museum-gradient-dark text-ivory-50 flex flex-col">
      {/* TOP HERITAGE HEADER */}
      <header className="sticky top-0 z-40 bg-navy-950/92 backdrop-blur-md border-b border-bronze-500/40 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
          {/* Logo & Title */}
          <div
            onClick={() => setActiveTab('tour360')}
            className="flex items-center gap-3.5 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-bronze-300 via-bronze-500 to-bronze-700 p-0.5 shadow-glow shrink-0">
              <div className="w-full h-full rounded-[10px] bg-navy-950 flex items-center justify-center">
                <Landmark className="w-6 h-6 text-bronze-300 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-bronze-300 font-bold">
                  BẢO TÀNG SỐ DI SẢN GIÁO DỤC VIỆT NAM
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-crimson-700 text-[10px] font-bold text-ivory-50">
                  3D PANORAMA 360°
                </span>
              </div>
              <h1 className="text-lg sm:text-xl font-serif font-bold text-ivory-50 tracking-wide">
                Các Nhà Giáo Việt Nam Qua Các Thời Kỳ Lịch Sử
              </h1>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
            {[
              { id: 'tour360', label: 'Không Gian 3D 360°', icon: Compass },
              { id: 'eras', label: '6 Thời Kỳ Lịch Sử', icon: Landmark },
              { id: 'educators', label: `Danh Sư (${educators.length})`, icon: Users },
              { id: 'archives', label: `Hiện Vật Số (${archives.length})`, icon: BookOpen },
              { id: 'ai-guide', label: 'Thuyết Minh AI', icon: Sparkles },
              { id: 'learning', label: 'Học Tập & Tri Ân', icon: Award }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as NavigationTab)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-bronze-500 text-navy-950 shadow-glow font-bold'
                      : 'bg-navy-900/80 hover:bg-navy-800 text-ivory-100 border border-bronze-500/30'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* MAIN WORKSPACE CONTENT */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 space-y-8">
        {/* TAB 1: 3D PANORAMA 360° TOUR */}
        {activeTab === 'tour360' && (
          <div className="space-y-6">
            {/* Room Selector Ribbon */}
            <div className="bg-navy-900/90 border border-bronze-500/40 rounded-2xl p-3 sm:p-4 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-bronze-300" />
                  <span className="text-xs font-bold uppercase tracking-wider text-bronze-300">
                    Chọn Không Gian Trưng Bày 3D Panorama (7 Không gian):
                  </span>
                </div>

                {/* Custom Panorama Upload Control */}
                <div className="flex items-center gap-2">
                  <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-navy-800 hover:bg-navy-700 text-[11px] font-medium text-ivory-100 border border-bronze-500/40 transition-colors">
                    <Upload className="w-3.5 h-3.5 text-bronze-300" />
                    <span>Tải ảnh Panorama 360° riêng cho phòng này</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleUploadCustomPanorama}
                      className="hidden"
                    />
                  </label>
                  {currentRoom.customPanoramaUrl && (
                    <button
                      onClick={handleResetPanorama}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-crimson-700 hover:bg-crimson-800 text-[11px] text-ivory-50 font-medium"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Khôi phục kiến trúc 3D gốc</span>
                    </button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                {rooms.map((room) => {
                  const isSelected = room.id === currentRoomId;
                  return (
                    <button
                      key={room.id}
                      onClick={() => setCurrentRoomId(room.id)}
                      className={`p-2.5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'bg-gradient-to-br from-bronze-400 to-bronze-600 text-navy-950 border-ivory-100 shadow-glow font-bold'
                          : 'bg-navy-950/85 hover:bg-navy-800 text-ivory-100 border-bronze-500/30'
                      }`}
                    >
                      <span
                        className={`text-[10px] uppercase tracking-wider ${
                          isSelected ? 'text-navy-900 font-bold' : 'text-bronze-300'
                        }`}
                      >
                        {room.code}
                      </span>
                      <span className="text-xs font-serif font-bold line-clamp-1 mt-0.5">
                        {room.shortName}
                      </span>
                      <span
                        className={`text-[10px] mt-1 ${
                          isSelected ? 'text-navy-900/90' : 'text-ivory-200/60'
                        }`}
                      >
                        {room.periodRange}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3D Interactive Panorama Viewer */}
            <Panorama360Viewer
              rooms={rooms}
              currentRoom={currentRoom}
              educators={educators}
              archives={archives}
              onSelectRoom={(rId) => setCurrentRoomId(rId)}
              onSelectEducator={(edu) => setSelectedEducator(edu)}
              onSelectArchive={(arc) => setSelectedArchive(arc)}
            />

            {/* Educators & Artifacts in Current Room Quick Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 p-5 rounded-2xl bg-navy-900/90 border border-bronze-500/40 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-serif font-bold text-bronze-300">
                    Danh Sư Trưng Bày Tại {currentRoom.shortName}
                  </h3>
                  <button
                    onClick={() => setActiveTab('educators')}
                    className="text-xs text-bronze-300 hover:underline flex items-center gap-1"
                  >
                    <span>Xem toàn bộ danh bạ</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {educators
                    .filter(
                      (e) =>
                        currentRoom.id === 'main-hall' ||
                        e.primaryRoomId === currentRoom.id ||
                        e.secondaryRoomIds?.includes(currentRoom.id)
                    )
                    .slice(0, 4)
                    .map((edu) => (
                      <div
                        key={edu.id}
                        onClick={() => setSelectedEducator(edu)}
                        className="p-3 rounded-xl bg-navy-950/90 hover:bg-navy-800 border border-bronze-500/30 cursor-pointer transition-all flex items-center gap-3 group"
                      >
                        <img
                          src={generateEducatorPortraitDataUri(edu)}
                          alt={edu.fullName}
                          className="w-14 h-16 object-cover rounded-lg border border-bronze-400 shrink-0"
                        />
                        <div className="min-w-0">
                          <h4 className="font-serif font-bold text-sm text-ivory-50 group-hover:text-bronze-300 truncate">
                            {edu.fullName}
                          </h4>
                          <p className="text-[11px] text-bronze-300">{edu.birthDeathYears}</p>
                          <p className="text-[11px] text-ivory-200/75 line-clamp-1 mt-0.5">
                            {edu.honorificTitle}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="lg:col-span-5 p-5 rounded-2xl bg-navy-900/90 border border-bronze-500/40 space-y-3">
                <h3 className="text-lg font-serif font-bold text-bronze-300">
                  Điểm Nhấn Lịch Sử & Sư Phạm Của Phòng
                </h3>
                <p className="text-xs sm:text-sm text-ivory-100 leading-relaxed">
                  {currentRoom.curatorialStatement}
                </p>
                <div className="p-3.5 rounded-xl bg-navy-950 border-l-4 border-bronze-400 text-xs text-ivory-200/90 leading-relaxed">
                  <strong className="text-bronze-300">Dấu ấn thời đại:</strong>{' '}
                  {currentRoom.historicalNote}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 6 HISTORICAL ERAS & TIMELINE */}
        {activeTab === 'eras' && (
          <div className="space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="px-3 py-1 rounded-full bg-bronze-500/20 border border-bronze-400/50 text-xs font-bold uppercase tracking-wider text-bronze-300">
                Tiến Trình Lịch Sử Giáo Dục Dân Tộc
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-ivory-50">
                Ngàn Năm Đạo Học Việt Nam Qua 6 Không Gian Thời Kỳ
              </h2>
              <p className="text-sm text-ivory-200/80">
                Từ Quốc Tử Giám (1076) dưới triều Lý – Trần đến phong trào Đông Kinh Nghĩa Thục, chiến dịch Bình dân học vụ và kỷ nguyên chuyển đổi số.
              </p>
            </div>

            <div className="space-y-6">
              {rooms
                .filter((r) => r.id !== 'main-hall')
                .map((room, idx) => {
                  const roomEducators = educators.filter(
                    (e) => e.primaryRoomId === room.id || e.secondaryRoomIds?.includes(room.id)
                  );
                  const roomArchives = archives.filter((a) => a.linkedRoomId === room.id);

                  return (
                    <div
                      key={room.id}
                      className="p-6 rounded-2xl bg-navy-900 border border-bronze-500/50 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
                    >
                      <div className="lg:col-span-5 space-y-3">
                        <div className="flex items-center gap-2">
                          <span className="w-8 h-8 rounded-lg bg-bronze-500 text-navy-950 font-serif font-bold flex items-center justify-center">
                            0{idx + 1}
                          </span>
                          <span className="text-xs font-bold uppercase tracking-wider text-bronze-300">
                            {room.periodRange}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-ivory-50">
                          {room.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-ivory-100/90 leading-relaxed">
                          {room.curatorialStatement}
                        </p>
                        <p className="text-xs text-bronze-300/90 italic">{room.historicalNote}</p>

                        <div className="pt-2">
                          <button
                            onClick={() => handleVisitRoom360(room.id)}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-bronze-500 hover:bg-bronze-400 text-navy-950 font-bold text-xs shadow-glow transition-all"
                          >
                            <Compass className="w-4 h-4" />
                            <span>Bước vào Phòng 3D Panorama 360° này</span>
                          </button>
                        </div>
                      </div>

                      <div className="lg:col-span-7 space-y-4">
                        {roomEducators.length > 0 && (
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-bronze-300 mb-2.5">
                              Danh sư tiêu biểu trong thời kỳ ({roomEducators.length}):
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {roomEducators.map((edu) => (
                                <div
                                  key={edu.id}
                                  onClick={() => setSelectedEducator(edu)}
                                  className="p-3 rounded-xl bg-navy-950 hover:bg-navy-800 border border-bronze-500/30 cursor-pointer flex items-center gap-3 transition-colors"
                                >
                                  <img
                                    src={generateEducatorPortraitDataUri(edu)}
                                    alt={edu.fullName}
                                    className="w-12 h-14 object-cover rounded border border-bronze-400 shrink-0"
                                  />
                                  <div className="min-w-0">
                                    <p className="text-sm font-serif font-bold text-ivory-50 truncate">
                                      {edu.fullName}
                                    </p>
                                    <p className="text-[11px] text-bronze-300">
                                      {edu.birthDeathYears} • {edu.hometown}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {roomArchives.length > 0 && (
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-bronze-300 mb-2">
                              Hiện vật & Tư liệu lịch sử:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {roomArchives.map((arc) => (
                                <button
                                  key={arc.id}
                                  onClick={() => setSelectedArchive(arc)}
                                  className="px-3 py-1.5 rounded-lg bg-navy-950 hover:bg-bronze-500/20 border border-bronze-500/40 text-xs text-ivory-100 transition-colors"
                                >
                                  📜 {arc.title}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {/* TAB 3: EDUCATORS DIRECTORY */}
        {activeTab === 'educators' && (
          <div className="space-y-6">
            {/* Search & Filters */}
            <div className="p-5 rounded-2xl bg-navy-900 border border-bronze-500/40 shadow-xl space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-ivory-50">
                    Danh Bạ Các Bậc Danh Sư & Nhà Giáo Tiêu Biểu
                  </h2>
                  <p className="text-xs text-ivory-200/80">
                    Nhấp vào từng nhà giáo để xem tiểu sử, dấu mốc cuộc đời, câu nói lưu danh và nguồn sử liệu kiểm chứng.
                  </p>
                </div>

                <div className="relative w-full md:w-80">
                  <Search className="w-4 h-4 text-bronze-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm tên nhà giáo, quê quán, tác phẩm..."
                    className="w-full bg-navy-950 border border-bronze-500/40 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm text-ivory-50 placeholder:text-ivory-200/40 focus:outline-none focus:border-bronze-400"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-bronze-500/20">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs text-bronze-300 font-semibold mr-1">Thời kỳ:</span>
                  {[
                    { id: 'all', label: 'Tất cả thời kỳ' },
                    { id: 'room-1', label: 'Phong kiến (TK XI–XIX)' },
                    { id: 'room-2', label: 'Tân học (1900–1945)' },
                    { id: 'room-3', label: 'Kháng chiến (1945–1975)' },
                    { id: 'room-4', label: 'Đổi mới (1975–2010)' },
                    { id: 'room-5', label: 'Đương đại' }
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedRoomFilter(f.id)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                        selectedRoomFilter === f.id
                          ? 'bg-bronze-500 text-navy-950'
                          : 'bg-navy-950 text-ivory-200 hover:bg-navy-800 border border-bronze-500/30'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs text-bronze-300 font-semibold mr-1">Vùng miền:</span>
                  {['all', 'Bắc Bộ', 'Trung Bộ', 'Nam Bộ', 'Toàn quốc'].map((reg) => (
                    <button
                      key={reg}
                      onClick={() => setSelectedRegionFilter(reg)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                        selectedRegionFilter === reg
                          ? 'bg-crimson-700 text-ivory-50'
                          : 'bg-navy-950 text-ivory-200 hover:bg-navy-800 border border-bronze-500/30'
                      }`}
                    >
                      {reg === 'all' ? 'Tất cả' : reg}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEducators.map((edu) => (
                <div
                  key={edu.id}
                  className="rounded-2xl bg-navy-900 border border-bronze-500/40 overflow-hidden shadow-xl flex flex-col justify-between group hover:border-bronze-400 transition-all"
                >
                  <div>
                    <div className="relative h-64 bg-navy-950 overflow-hidden flex items-center justify-center p-3">
                      <img
                        src={generateEducatorPortraitDataUri(edu)}
                        alt={edu.fullName}
                        onClick={() => setSelectedEducator(edu)}
                        className="h-full w-auto object-contain rounded-lg portrait-frame cursor-pointer group-hover:scale-105 transition-transform duration-300"
                      />
                      <label
                        title="Thay ảnh chân dung tư liệu thật"
                        className="absolute top-3 right-3 p-2 rounded-lg bg-navy-950/85 hover:bg-bronze-500 hover:text-navy-950 text-bronze-300 border border-bronze-500/40 cursor-pointer text-xs"
                      >
                        <Upload className="w-3.5 h-3.5" />
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleUploadEducatorPortrait(edu.id, e)}
                          className="hidden"
                        />
                      </label>
                    </div>

                    <div className="p-5 space-y-2.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="px-2 py-0.5 rounded bg-bronze-500/20 text-bronze-300 font-semibold">
                          {edu.eraLabel}
                        </span>
                        <span className="inline-flex items-center gap-1 text-emerald-300">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Đã kiểm chứng</span>
                        </span>
                      </div>

                      <h3
                        onClick={() => setSelectedEducator(edu)}
                        className="text-xl font-serif font-bold text-ivory-50 group-hover:text-bronze-300 cursor-pointer"
                      >
                        {edu.fullName}
                      </h3>
                      <p className="text-xs text-bronze-300 font-medium line-clamp-1">
                        {edu.honorificTitle}
                      </p>

                      <div className="flex flex-wrap gap-2 text-xs text-ivory-200/75">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-bronze-300" />
                          {edu.birthDeathYears}
                        </span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-bronze-300" />
                          {edu.hometown}
                        </span>
                      </div>

                      <p className="text-xs text-ivory-100/85 line-clamp-3 leading-relaxed pt-1">
                        {edu.shortSummary}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedEducator(edu)}
                      className="flex-1 py-2 rounded-xl bg-bronze-500 hover:bg-bronze-400 text-navy-950 font-bold text-xs inline-flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Xem hồ sơ đầy đủ</span>
                    </button>
                    <button
                      onClick={() => handleVisitRoom360(edu.primaryRoomId)}
                      className="px-3 py-2 rounded-xl bg-navy-950 hover:bg-navy-800 text-bronze-300 border border-bronze-500/40 text-xs font-semibold inline-flex items-center gap-1"
                      title="Xem trong Phòng 360°"
                    >
                      <Compass className="w-3.5 h-3.5" />
                      <span>360°</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: DIGITAL ARCHIVES & ARTIFACTS */}
        {activeTab === 'archives' && (
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-navy-900 border border-bronze-500/40 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-serif font-bold text-ivory-50">
                  Kho Tư Liệu, Văn Bia & Hiện Vật Giáo Dục Số Hóa
                </h2>
                <p className="text-xs text-ivory-200/80">
                  Tập hợp văn bia Quốc Tử Giám, châu bản, sách giáo khoa cổ và hiện vật giáo dục qua các thời kỳ kèm bản phiên âm OCR.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {[
                  { id: 'all', label: 'Tất cả hiện vật' },
                  { id: 'main-hall', label: 'Đại sảnh' },
                  { id: 'room-1', label: 'Phong kiến' },
                  { id: 'room-2', label: 'Tân học' },
                  { id: 'room-3', label: 'Kháng chiến' },
                  { id: 'room-4', label: 'Đổi mới' },
                  { id: 'room-5', label: 'Đương đại' }
                ].map((rf) => (
                  <button
                    key={rf.id}
                    onClick={() => setArchiveRoomFilter(rf.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                      archiveRoomFilter === rf.id
                        ? 'bg-bronze-500 text-navy-950'
                        : 'bg-navy-950 text-ivory-200 border border-bronze-500/30 hover:bg-navy-800'
                    }`}
                  >
                    {rf.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArchives.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedArchive(item)}
                  className="rounded-2xl bg-navy-900 border border-bronze-500/40 overflow-hidden shadow-xl cursor-pointer group hover:border-bronze-400 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="overflow-hidden bg-navy-950 border-b border-bronze-500/30">
                      <img
                        src={generateArchiveVisualDataUri(item)}
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5 space-y-2">
                      <span className="text-[11px] font-bold text-bronze-300 uppercase tracking-wider">
                        {item.yearOrPeriod} • {item.origin}
                      </span>
                      <h3 className="text-lg font-serif font-bold text-ivory-50 group-hover:text-bronze-300 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-ivory-200/80 line-clamp-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="px-5 pb-4 pt-2 flex items-center justify-between text-xs text-bronze-300 font-semibold border-t border-bronze-500/20">
                    <span>Đọc bản phiên âm & thuyết minh</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: AI MUSEUM GUIDE */}
        {activeTab === 'ai-guide' && (
          <AiMuseumGuide
            educators={educators}
            rooms={rooms}
            archives={archives}
            onSelectEducator={(edu) => setSelectedEducator(edu)}
            onVisitRoom360={handleVisitRoom360}
          />
        )}

        {/* TAB 6: LEARNING, MYSTERY & TRIBUTE WALL */}
        {activeTab === 'learning' && (
          <LearningAndTributeHub
            questions={LEARNING_QUESTIONS}
            mysteryClues={MYSTERY_CLUES}
            tributes={tributes}
            educators={educators}
            onAddTribute={handleAddTribute}
            onSelectEducator={(edu) => setSelectedEducator(edu)}
          />
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-navy-950 border-t border-bronze-500/30 py-6 px-4 sm:px-6 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-200/70">
          <div className="flex items-center gap-2">
            <Landmark className="w-4 h-4 text-bronze-300" />
            <span>
              <strong className="text-ivory-50">Bảo Tàng Số 3D Panorama Nhà Giáo Việt Nam</strong> — Tôn vinh truyền thống "Tôn sư trọng đạo" & nguyên khí quốc gia
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab('learning')}
              className="text-bronze-300 hover:underline inline-flex items-center gap-1"
            >
              <Heart className="w-3.5 h-3.5 text-crimson-700 fill-crimson-700" />
              <span>Gửi lời tri ân 20/11</span>
            </button>
            <span>•</span>
            <span>Sử liệu kiểm chứng đa nguồn</span>
          </div>
        </div>
      </footer>

      {/* MODALS */}
      <EducatorDetailModal
        educator={selectedEducator}
        allArchives={archives}
        onClose={() => setSelectedEducator(null)}
        onSelectArchive={(arc) => setSelectedArchive(arc)}
        onVisitRoom360={handleVisitRoom360}
      />

      <ArchiveDetailModal
        archive={selectedArchive}
        educators={educators}
        onClose={() => setSelectedArchive(null)}
        onSelectEducator={(edu) => setSelectedEducator(edu)}
        onVisitRoom360={handleVisitRoom360}
      />
    </div>
  );
}

export default App;
