import React from 'react';
import { X, FileText, CheckCircle2, UserCheck, Compass, Quote } from 'lucide-react';
import { ArchiveItem, EducatorProfile, RoomId } from '../types/museum';
import { generateArchiveVisualDataUri } from '../utils/portraitSvgGenerator';

interface ArchiveDetailModalProps {
  archive: ArchiveItem | null;
  educators: EducatorProfile[];
  onClose: () => void;
  onSelectEducator: (educator: EducatorProfile) => void;
  onVisitRoom360: (roomId: RoomId) => void;
}

export const ArchiveDetailModal: React.FC<ArchiveDetailModalProps> = ({
  archive,
  educators,
  onClose,
  onSelectEducator,
  onVisitRoom360
}) => {
  if (!archive) return null;

  const linkedEducators = educators.filter((e) => archive.linkedEducatorIds.includes(e.id));

  return (
    <div className="fixed inset-0 z-50 bg-navy-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-navy-900 border-2 border-bronze-400/80 shadow-2xl text-ivory-50">
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-navy-950/95 border-b border-bronze-500/40">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-0.5 rounded bg-crimson-700 text-ivory-50 text-xs font-bold uppercase tracking-wider">
              Hiện Vật & Tư Liệu Lưu Trữ Số Hóa
            </span>
            <span className="text-xs text-bronze-300 font-medium">{archive.yearOrPeriod}</span>
            <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Đã kiểm chứng nguồn lưu trữ</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onVisitRoom360(archive.linkedRoomId);
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-bronze-500 hover:bg-bronze-400 text-navy-950 transition-colors"
            >
              <Compass className="w-4 h-4" />
              <span>Xem tại Phòng 360°</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-navy-800 hover:bg-navy-700 text-ivory-200 border border-bronze-500/30"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-5">
              <div className="rounded-xl overflow-hidden border-2 border-bronze-400/70 shadow-glow bg-navy-950">
                <img
                  src={generateArchiveVisualDataUri(archive)}
                  alt={archive.title}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="mt-3 p-3 rounded-lg bg-navy-950/80 border border-bronze-500/30 text-xs space-y-1 text-ivory-200/85">
                <p>
                  <strong className="text-bronze-300">Xuất xứ:</strong> {archive.origin}
                </p>
                <p>
                  <strong className="text-bronze-300">Đơn vị lưu trữ:</strong> {archive.authorOrRepository}
                </p>
                <p>
                  <strong className="text-bronze-300">Tình trạng bản quyền:</strong> {archive.usageRights}
                </p>
              </div>
            </div>

            <div className="md:col-span-7 space-y-4">
              <h2 className="text-2xl font-serif font-bold text-ivory-50 leading-snug">
                {archive.title}
              </h2>
              <p className="text-sm text-bronze-300 font-medium">{archive.description}</p>
              <div className="p-4 rounded-xl bg-navy-950/70 border border-bronze-500/30 text-sm text-ivory-100 leading-relaxed">
                <h4 className="text-xs font-bold uppercase tracking-wider text-bronze-300 mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-4 h-4" />
                  <span>Thuyết Minh Giá Trị Lịch Sử – Giáo Dục</span>
                </h4>
                <p>{archive.detailedContent}</p>
              </div>

              {archive.ocrTranscript && (
                <div className="p-4 rounded-xl bg-gradient-to-r from-wood-900/80 to-navy-950 border-l-4 border-bronze-400 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-bronze-300">
                    <Quote className="w-4 h-4" />
                    <span>Trích Văn Bản Phiên Âm / Dịch Nghĩa (OCR)</span>
                  </div>
                  <p className="text-sm font-serif italic text-ivory-50 leading-relaxed">
                    {archive.ocrTranscript}
                  </p>
                </div>
              )}

              {linkedEducators.length > 0 && (
                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-bronze-300 mb-2">
                    Nhà Giáo Gắn Liền Với Hiện Vật Này:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {linkedEducators.map((edu) => (
                      <button
                        key={edu.id}
                        onClick={() => {
                          onClose();
                          onSelectEducator(edu);
                        }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-800 hover:bg-bronze-500 hover:text-navy-950 text-xs font-semibold text-ivory-100 border border-bronze-400/50 transition-colors"
                      >
                        <UserCheck className="w-3.5 h-3.5" />
                        <span>{edu.fullName}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
