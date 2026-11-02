import React, { useState, useEffect } from 'react';
import {
  X,
  Volume2,
  VolumeX,
  MapPin,
  Calendar,
  BookOpen,
  Quote,
  Award,
  CheckCircle2,
  Sparkles,
  FileText,
  Compass
} from 'lucide-react';
import { EducatorProfile, ArchiveItem, RoomId } from '../types/museum';
import { generateEducatorPortraitDataUri } from '../utils/portraitSvgGenerator';

interface EducatorDetailModalProps {
  educator: EducatorProfile | null;
  allArchives: ArchiveItem[];
  onClose: () => void;
  onSelectArchive: (archive: ArchiveItem) => void;
  onVisitRoom360: (roomId: RoomId) => void;
}

export const EducatorDetailModal: React.FC<EducatorDetailModalProps> = ({
  educator,
  allArchives,
  onClose,
  onSelectArchive,
  onVisitRoom360
}) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [educator]);

  if (!educator) return null;

  const relatedArchives = allArchives.filter((a) => educator.relatedArchiveIds.includes(a.id));

  const handleToggleSpeech = () => {
    if (!('speechSynthesis' in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    window.speechSynthesis.cancel();
    const text = `${educator.fullName}, danh hiệu ${educator.honorificTitle}, năm sinh năm mất ${educator.birthDeathYears}, quê quán tại ${educator.hometown}. ${educator.shortSummary}. Triết lý giáo dục: ${educator.educationalPhilosophy}`;
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'vi-VN';
    u.rate = 0.98;
    u.onend = () => setIsSpeaking(false);
    u.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(u);
  };

  return (
    <div className="fixed inset-0 z-50 bg-navy-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-2xl bg-navy-900 border-2 border-bronze-400/80 shadow-2xl text-ivory-50">
        {/* Top Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-navy-950/95 backdrop-blur-md border-b border-bronze-500/40">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="px-2.5 py-0.5 rounded bg-bronze-500 text-navy-950 text-xs font-bold uppercase tracking-wider">
              Hồ Sơ Danh Sư Việt Nam
            </span>
            <span className="text-xs text-bronze-300 font-medium">{educator.eraLabel}</span>
            <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Sử liệu đã kiểm chứng</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleToggleSpeech}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                isSpeaking
                  ? 'bg-crimson-700 text-ivory-50'
                  : 'bg-bronze-500/20 hover:bg-bronze-500/35 text-bronze-300 border border-bronze-400/50'
              }`}
            >
              {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span>{isSpeaking ? 'Dừng đọc' : 'Nghe thuyết minh'}</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onVisitRoom360(educator.primaryRoomId);
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-bronze-500 hover:bg-bronze-400 text-navy-950 transition-colors"
            >
              <Compass className="w-4 h-4" />
              <span>Đứng trước chân dung trong 360°</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-navy-800 hover:bg-navy-700 text-ivory-200 border border-bronze-500/30"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Hero Section: Portrait + Core Bio */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-4 flex flex-col items-center">
              <div className="w-full max-w-[280px] rounded-xl overflow-hidden portrait-frame bg-navy-950">
                <img
                  src={generateEducatorPortraitDataUri(educator)}
                  alt={educator.fullName}
                  className="w-full h-auto object-cover"
                />
              </div>
              {educator.alternateNames && educator.alternateNames.length > 0 && (
                <p className="text-xs text-ivory-200/75 mt-3 text-center">
                  <strong className="text-bronze-300">Tên hiệu / Tên gọi khác:</strong>{' '}
                  {educator.alternateNames.join(' • ')}
                </p>
              )}
            </div>

            <div className="md:col-span-8 space-y-4">
              <div>
                <p className="text-sm font-semibold text-bronze-300 uppercase tracking-wider">
                  {educator.honorificTitle}
                </p>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-ivory-50 mt-1">
                  {educator.fullName}
                </h2>
              </div>

              <div className="flex flex-wrap gap-3 text-xs text-ivory-200">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-navy-800 border border-bronze-500/30">
                  <Calendar className="w-3.5 h-3.5 text-bronze-300" />
                  <span>{educator.birthDeathYears}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-navy-800 border border-bronze-500/30">
                  <MapPin className="w-3.5 h-3.5 text-bronze-300" />
                  <span>{educator.hometown} ({educator.region})</span>
                </span>
              </div>

              <p className="text-sm sm:text-base text-ivory-100 leading-relaxed bg-navy-950/60 p-4 rounded-xl border border-bronze-500/30">
                {educator.shortSummary}
              </p>

              {/* Educational Philosophy Callout */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-crimson-800/40 via-navy-800 to-navy-800 border-l-4 border-bronze-400">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-bronze-300 mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span>Triết Lý Sư Phạm & Tư Tưởng Cốt Lõi</span>
                </div>
                <p className="text-sm sm:text-base font-serif italic text-ivory-50 leading-relaxed">
                  {educator.educationalPhilosophy}
                </p>
              </div>

              {/* Fields & Themes Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {educator.fields.map((f) => (
                  <span
                    key={f}
                    className="px-2.5 py-1 rounded-md bg-bronze-500/15 border border-bronze-400/40 text-xs text-bronze-300 font-medium"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Journey & Contributions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-navy-950/70 border border-bronze-500/30 space-y-3">
              <h3 className="text-lg font-serif font-bold text-bronze-300 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>Hành Trình Dạy Học & Cống Hiến Sư Phạm</span>
              </h3>
              <ul className="space-y-2.5 text-sm text-ivory-100/90">
                {educator.educationAndTeachingJourney.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-bronze-500/20 border border-bronze-400 text-bronze-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-navy-950/70 border border-bronze-500/30 space-y-3">
              <h3 className="text-lg font-serif font-bold text-bronze-300 flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>Di Sản & Đóng Góp Nổi Bật Cho Dân Tộc</span>
              </h3>
              <ul className="space-y-2.5 text-sm text-ivory-100/90">
                {educator.contributions.map((c, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-bronze-400 font-bold mt-0.5">◆</span>
                    <span className="leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Chronological Milestones */}
          <div className="p-5 rounded-xl bg-navy-950/70 border border-bronze-500/30">
            <h3 className="text-lg font-serif font-bold text-bronze-300 mb-4">
              Dấu Mốc Cuộc Đời & Sự Nghiệp Giáo Dục
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {educator.milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-navy-900 border border-bronze-500/30 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded bg-bronze-500/20 text-bronze-300 text-xs font-bold">
                      {m.year}
                    </span>
                    <h4 className="font-serif font-bold text-ivory-50 text-sm mt-2">{m.title}</h4>
                    <p className="text-xs text-ivory-200/80 mt-1 leading-relaxed">{m.description}</p>
                  </div>
                  {m.location && (
                    <p className="text-[11px] text-bronze-300/80 mt-2.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{m.location}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Documented Quotes & Lessons for Today */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-navy-950/70 border border-bronze-500/30 space-y-3">
              <h3 className="text-lg font-serif font-bold text-bronze-300 flex items-center gap-2">
                <Quote className="w-5 h-5" />
                <span>Lời Dạy & Trích Dẫn Lưu Danh</span>
              </h3>
              <div className="space-y-3">
                {educator.documentedQuotes.map((q, idx) => (
                  <blockquote
                    key={idx}
                    className="p-4 rounded-xl bg-navy-900 border-l-4 border-bronze-400 space-y-1.5"
                  >
                    <p className="text-sm font-serif italic text-ivory-50">“{q.quote}”</p>
                    <footer className="text-xs text-bronze-300">— {q.contextAndSource}</footer>
                  </blockquote>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl bg-navy-950/70 border border-bronze-500/30 space-y-3">
              <h3 className="text-lg font-serif font-bold text-bronze-300 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                <span>Bài Học Sư Phạm Cho Thế Hệ Hôm Nay</span>
              </h3>
              <ul className="space-y-2.5 text-sm text-ivory-100/90">
                {educator.lessonsForToday.map((lesson, idx) => (
                  <li
                    key={idx}
                    className="p-3 rounded-lg bg-navy-900/90 border border-bronze-500/20 leading-relaxed"
                  >
                    {lesson}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related Archives & Verified Sources */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {relatedArchives.length > 0 && (
              <div className="p-5 rounded-xl bg-navy-950/70 border border-bronze-500/30 space-y-3">
                <h3 className="text-base font-serif font-bold text-bronze-300 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>Hiện Vật & Tư Liệu Liên Quan Trong Bảo Tàng</span>
                </h3>
                <div className="space-y-2">
                  {relatedArchives.map((arc) => (
                    <button
                      key={arc.id}
                      onClick={() => {
                        onClose();
                        onSelectArchive(arc);
                      }}
                      className="w-full text-left p-3 rounded-lg bg-navy-900 hover:bg-navy-800 border border-bronze-500/30 transition-colors flex items-center justify-between gap-2"
                    >
                      <div>
                        <p className="text-xs font-serif font-bold text-ivory-50">{arc.title}</p>
                        <p className="text-[11px] text-bronze-300">{arc.yearOrPeriod}</p>
                      </div>
                      <span className="text-xs text-bronze-300 font-semibold shrink-0">Xem tư liệu →</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="p-5 rounded-xl bg-navy-950/70 border border-bronze-500/30 space-y-3">
              <h3 className="text-base font-serif font-bold text-bronze-300">
                Nguồn Sử Liệu & Tài Liệu Tham Khảo Kiểm Chứng
              </h3>
              <ul className="space-y-2 text-xs text-ivory-200/85">
                {educator.references.map((ref) => (
                  <li key={ref.id} className="p-2.5 rounded bg-navy-900 border border-bronze-500/20">
                    <p className="font-semibold text-ivory-50">{ref.title}</p>
                    <p className="text-bronze-300 mt-0.5">
                      {ref.authorOrOrg} {ref.year ? `(${ref.year})` : ''}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
