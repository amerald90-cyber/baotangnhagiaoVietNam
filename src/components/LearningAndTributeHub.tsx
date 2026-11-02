import React, { useState } from 'react';
import {
  Award,
  CheckCircle2,
  XCircle,
  Heart,
  Flame,
  HelpCircle,
  Sparkles,
  Send,
  BookOpen,
  UserCheck
} from 'lucide-react';
import {
  LearningQuestion,
  MysteryClueItem,
  TributeMessage,
  EducatorProfile
} from '../types/museum';

interface LearningAndTributeHubProps {
  questions: LearningQuestion[];
  mysteryClues: MysteryClueItem[];
  tributes: TributeMessage[];
  educators: EducatorProfile[];
  onAddTribute: (tribute: Omit<TributeMessage, 'id' | 'createdAt' | 'isApproved'>) => void;
  onSelectEducator: (educator: EducatorProfile) => void;
}

export const LearningAndTributeHub: React.FC<LearningAndTributeHubProps> = ({
  questions,
  mysteryClues,
  tributes,
  educators,
  onAddTribute,
  onSelectEducator
}) => {
  const [subTab, setSubTab] = useState<'quiz' | 'mystery' | 'tribute'>('quiz');
  const [ageFilter, setAgeFilter] = useState<'all' | 'tieu_hoc' | 'thcs_thpt' | 'dai_hoc_cong_chung'>('all');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [revealedCluesCount, setRevealedCluesCount] = useState<Record<string, number>>({});
  const [guessedEducatorMap, setGuessedEducatorMap] = useState<Record<string, string>>({});
  const [litCandles, setLitCandles] = useState<number>(1982);

  // Tribute form state
  const [senderName, setSenderName] = useState('');
  const [senderRole, setSenderRole] = useState('');
  const [teacherDedicatedTo, setTeacherDedicatedTo] = useState('');
  const [schoolOrLocality, setSchoolOrLocality] = useState('');
  const [message, setMessage] = useState('');
  const [submittedNotice, setSubmittedNotice] = useState(false);

  const filteredQuestions =
    ageFilter === 'all' ? questions : questions.filter((q) => q.ageGroup === ageFilter);

  const handleSubmitTribute = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !teacherDedicatedTo.trim() || !message.trim()) return;
    onAddTribute({
      senderName: senderName.trim(),
      senderRole: senderRole.trim() || 'Khách tham quan Bảo tàng',
      teacherDedicatedTo: teacherDedicatedTo.trim(),
      schoolOrLocality: schoolOrLocality.trim() || 'Việt Nam',
      message: message.trim()
    });
    setSenderName('');
    setSenderRole('');
    setTeacherDedicatedTo('');
    setSchoolOrLocality('');
    setMessage('');
    setLitCandles((c) => c + 1);
    setSubmittedNotice(true);
    setTimeout(() => setSubmittedNotice(false), 4000);
  };

  return (
    <div className="space-y-6">
      {/* Sub-navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-navy-900 p-4 rounded-2xl border border-bronze-500/40">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSubTab('quiz')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold inline-flex items-center gap-2 transition-all ${
              subTab === 'quiz'
                ? 'bg-bronze-500 text-navy-950 shadow-glow'
                : 'bg-navy-950 text-ivory-100 hover:bg-navy-800 border border-bronze-500/30'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>1. Trắc Nghiệm Sử Liệu & Sư Phạm</span>
          </button>
          <button
            onClick={() => setSubTab('mystery')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold inline-flex items-center gap-2 transition-all ${
              subTab === 'mystery'
                ? 'bg-bronze-500 text-navy-950 shadow-glow'
                : 'bg-navy-950 text-ivory-100 hover:bg-navy-800 border border-bronze-500/30'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>2. Giải Mật "Theo Dấu Danh Sư"</span>
          </button>
          <button
            onClick={() => setSubTab('tribute')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold inline-flex items-center gap-2 transition-all ${
              subTab === 'tribute'
                ? 'bg-bronze-500 text-navy-950 shadow-glow'
                : 'bg-navy-950 text-ivory-100 hover:bg-navy-800 border border-bronze-500/30'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>3. Sổ Vàng Tri Ân & Thắp Nến Tưởng Niệm</span>
          </button>
        </div>

        <button
          onClick={() => setLitCandles((c) => c + 1)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-crimson-700 to-amber-700 hover:from-crimson-800 hover:to-amber-600 text-ivory-50 text-xs font-bold shadow-lg transition-all"
        >
          <Flame className="w-4 h-4 text-amber-300 animate-pulse" />
          <span>Thắp nến tri ân ({litCandles.toLocaleString('vi-VN')} ngọn nến)</span>
        </button>
      </div>

      {/* TAB 1: QUIZ */}
      {subTab === 'quiz' && (
        <div className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="text-xl font-serif font-bold text-ivory-50">
                Khám Phá Tri Thức Lịch Sử Giáo Dục Việt Nam
              </h3>
              <p className="text-xs text-ivory-200/80">
                Mỗi câu hỏi đi kèm giải thích sử liệu gốc và gợi ý suy ngẫm nhân cách – đạo học.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'Tất cả cấp học' },
                { id: 'tieu_hoc', label: 'Tiểu học' },
                { id: 'thcs_thpt', label: 'THCS & THPT' },
                { id: 'dai_hoc_cong_chung', label: 'Đại học & Công chúng' }
              ].map(( lv) => (
                <button
                  key={lv.id}
                  onClick={() => setAgeFilter(lv.id as typeof ageFilter)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    ageFilter === lv.id
                      ? 'bg-bronze-500 text-navy-950'
                      : 'bg-navy-900 text-ivory-200 border border-bronze-500/30 hover:bg-navy-800'
                  }`}
                >
                  {lv.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredQuestions.map((q, index) => {
              const userChoice = selectedAnswers[q.id];
              const isAnswered = userChoice !== undefined;
              const isCorrect = userChoice === q.correctIndex;

              return (
                <div
                  key={q.id}
                  className="p-5 rounded-2xl bg-navy-900 border border-bronze-500/40 shadow-lg flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2.5 py-0.5 rounded bg-bronze-500/20 text-bronze-300 font-bold">
                        Câu hỏi #{index + 1}
                      </span>
                      <span className="text-ivory-200/70">{q.sourceReference}</span>
                    </div>
                    <h4 className="font-serif font-bold text-base text-ivory-50 leading-snug">
                      {q.question}
                    </h4>

                    <div className="space-y-2 pt-1">
                      {q.options.map((opt, optIdx) => {
                        let btnStyle =
                          'bg-navy-950/80 hover:bg-navy-800 border-bronze-500/30 text-ivory-100';
                        if (isAnswered) {
                          if (optIdx === q.correctIndex) {
                            btnStyle = 'bg-emerald-950/90 border-emerald-400 text-emerald-200 font-semibold';
                          } else if (optIdx === userChoice) {
                            btnStyle = 'bg-crimson-800/80 border-red-400 text-red-100';
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() =>
                              setSelectedAnswers((prev) => ({ ...prev, [q.id]: optIdx }))
                            }
                            className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between gap-2 ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {isAnswered && optIdx === q.correctIndex && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            )}
                            {isAnswered && optIdx === userChoice && optIdx !== q.correctIndex && (
                              <XCircle className="w-4 h-4 text-red-300 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {isAnswered && (
                    <div className="p-3.5 rounded-xl bg-navy-950 border border-bronze-500/40 text-xs space-y-1.5">
                      <p className={isCorrect ? 'text-emerald-300 font-bold' : 'text-bronze-300 font-bold'}>
                        {isCorrect ? '✓ Chính xác!' : '→ Giải thích sử liệu:'}
                      </p>
                      <p className="text-ivory-100 leading-relaxed">{q.explanation}</p>
                      <p className="text-bronze-300 italic pt-1">
                        💡 Suy ngẫm: {q.reflectionPrompt}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: MYSTERY CLUES */}
      {subTab === 'mystery' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {mysteryClues.map((mc, idx) => {
            const targetEdu = educators.find((e) => e.id === mc.targetEducatorId);
            const count = revealedCluesCount[mc.id] ?? 1;
            const userGuess = guessedEducatorMap[mc.id] || '';
            const isSolved = userGuess === mc.targetEducatorId;

            return (
              <div
                key={mc.id}
                className="p-5 rounded-2xl bg-navy-900 border border-bronze-500/50 shadow-xl flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded bg-crimson-700 text-ivory-50 text-xs font-bold">
                      Hồ sơ Bí ẩn #{idx + 1}
                    </span>
                    <span className="text-xs text-bronze-300 font-semibold">
                      Độ khó: {mc.difficulty}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {mc.clues.slice(0, count).map((clue, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-3 rounded-xl bg-navy-950/90 border border-bronze-500/30 text-xs text-ivory-100 leading-relaxed"
                      >
                        {clue}
                      </div>
                    ))}
                  </div>

                  {count < mc.clues.length && (
                    <button
                      onClick={() =>
                        setRevealedCluesCount((prev) => ({ ...prev, [mc.id]: count + 1 }))
                      }
                      className="text-xs text-bronze-300 hover:underline font-semibold inline-flex items-center gap-1"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Mở thêm gợi ý tiếp theo ({count}/{mc.clues.length})</span>
                    </button>
                  )}
                </div>

                <div className="space-y-2.5 pt-3 border-t border-bronze-500/30">
                  <label className="block text-xs font-semibold text-bronze-300">
                    Đoán xem đây là vị danh sư nào:
                  </label>
                  <select
                    value={userGuess}
                    onChange={(e) =>
                      setGuessedEducatorMap((prev) => ({ ...prev, [mc.id]: e.target.value }))
                    }
                    className="w-full rounded-xl bg-navy-950 border border-bronze-500/40 px-3 py-2 text-xs text-ivory-50"
                  >
                    <option value="">-- Chọn tên Danh sư --</option>
                    {educators.map((e) => (
                      <option key={e.id} value={e.id}>
                        {e.fullName} ({e.birthDeathYears})
                      </option>
                    ))}
                  </select>

                  {isSolved && targetEdu && (
                    <div className="p-3 rounded-xl bg-emerald-950/90 border border-emerald-500/50 text-xs space-y-2">
                      <p className="font-bold text-emerald-300">
                        🎉 Chính xác: {targetEdu.fullName}!
                      </p>
                      <p className="text-ivory-100">{mc.historicalLesson}</p>
                      <button
                        onClick={() => onSelectEducator(targetEdu)}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-bronze-500 text-navy-950 font-bold"
                      >
                        <UserCheck className="w-3.5 h-3.5" />
                        <span>Mở hồ sơ chi tiết</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* TAB 3: TRIBUTE WALL */}
      {subTab === 'tribute' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Form */}
          <form
            onSubmit={handleSubmitTribute}
            className="lg:col-span-5 p-6 rounded-2xl bg-navy-900 border border-bronze-500/50 shadow-xl space-y-4"
          >
            <div className="flex items-center gap-2 text-bronze-300 font-serif font-bold text-lg">
              <Heart className="w-5 h-5 text-crimson-700 fill-crimson-700" />
              <span>Viết Lưu Bút Tri Ân Người Thầy</span>
            </div>
            <p className="text-xs text-ivory-200/80">
              Gửi lời tri ân tới các bậc tiền hiền hoặc người thầy, người cô đã để lại dấu ấn sâu sắc trong cuộc đời bạn.
            </p>

            <div>
              <label className="block text-xs font-semibold text-ivory-200 mb-1">
                Họ tên của bạn *
              </label>
              <input
                type="text"
                required
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="VD: Nguyễn Thu Hà"
                className="w-full rounded-xl bg-navy-950 border border-bronze-500/40 px-3.5 py-2 text-sm text-ivory-50"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-ivory-200 mb-1">
                  Vai trò / Thế hệ
                </label>
                <input
                  type="text"
                  value={senderRole}
                  onChange={(e) => setSenderRole(e.target.value)}
                  placeholder="VD: Cựu học sinh niên khóa..."
                  className="w-full rounded-xl bg-navy-950 border border-bronze-500/40 px-3.5 py-2 text-sm text-ivory-50"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-ivory-200 mb-1">
                  Trường học / Địa phương
                </label>
                <input
                  type="text"
                  value={schoolOrLocality}
                  onChange={(e) => setSchoolOrLocality(e.target.value)}
                  placeholder="VD: Quốc Học Huế / Hà Nội"
                  className="w-full rounded-xl bg-navy-950 border border-bronze-500/40 px-3.5 py-2 text-sm text-ivory-50"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-ivory-200 mb-1">
                Kính gửi Thầy / Cô hoặc Danh sư *
              </label>
              <input
                type="text"
                required
                value={teacherDedicatedTo}
                onChange={(e) => setTeacherDedicatedTo(e.target.value)}
                placeholder="VD: Cô giáo chủ nhiệm lớp 12 / Thầy Chu Văn An"
                className="w-full rounded-xl bg-navy-950 border border-bronze-500/40 px-3.5 py-2 text-sm text-ivory-50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-ivory-200 mb-1">
                Lời tri ân & Kỷ niệm đáng nhớ *
              </label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Chia sẻ bài học làm người hoặc kỷ niệm sâu sắc nhất về người thầy..."
                className="w-full rounded-xl bg-navy-950 border border-bronze-500/40 px-3.5 py-2 text-sm text-ivory-50"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-bronze-500 hover:bg-bronze-400 text-navy-950 font-bold text-sm inline-flex items-center justify-center gap-2 shadow-glow transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Lưu vào Sổ Vàng Tri Ân Bảo Tàng</span>
            </button>

            {submittedNotice && (
              <p className="text-xs text-emerald-300 font-semibold text-center">
                ✓ Lời tri ân của bạn đã được thắp sáng trên Bức tường Tri ân!
              </p>
            )}
          </form>

          {/* Tribute Cards Wall */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-serif font-bold text-bronze-300 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                <span>Bức Tường Lưu Bút "Uống Nước Nhớ Nguồn" ({tributes.length})</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tributes.map((t) => (
                <div
                  key={t.id}
                  className="p-5 rounded-2xl bg-gradient-to-b from-navy-900 to-navy-950 border border-bronze-500/40 shadow-lg flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-bronze-300">
                      <span className="font-bold uppercase tracking-wider">{t.schoolOrLocality}</span>
                      <span>{t.createdAt}</span>
                    </div>
                    <p className="text-xs font-semibold text-ivory-200">
                      Kính gửi: <span className="text-bronze-300">{t.teacherDedicatedTo}</span>
                    </p>
                    <p className="text-sm font-serif italic text-ivory-50 leading-relaxed">
                      “{t.message}”
                    </p>
                  </div>
                  <div className="pt-2 border-t border-bronze-500/20 text-xs text-ivory-200/80">
                    <span className="font-bold text-ivory-50">{t.senderName}</span> • {t.senderRole}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
