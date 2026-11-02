import React, { useState } from 'react';
import { Sparkles, Send, BookOpen, Compass, UserCheck, HelpCircle } from 'lucide-react';
import { EducatorProfile, ExhibitionRoom, ArchiveItem, RoomId } from '../types/museum';

interface AiMuseumGuideProps {
  educators: EducatorProfile[];
  rooms: ExhibitionRoom[];
  archives: ArchiveItem[];
  onSelectEducator: (educator: EducatorProfile) => void;
  onVisitRoom360: (roomId: RoomId) => void;
}

interface ChatMessage {
  id: string;
  sender: 'guide' | 'visitor';
  text: string;
  relatedEducators?: EducatorProfile[];
  suggestedRoomId?: RoomId;
  citations?: string[];
}

export const AiMuseumGuide: React.FC<AiMuseumGuideProps> = ({
  educators,
  rooms,
  archives,
  onSelectEducator,
  onVisitRoom360
}) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'guide',
      text: 'Xin chào quý khách! Tôi là Thuyết minh viên AI của Bảo tàng Số 3D Nhà Giáo Việt Nam. Tôi được huấn luyện trên cơ sở sử liệu kiểm chứng từ Đại Việt sử ký toàn thư, văn bia Quốc Tử Giám, tư liệu Đông Kinh Nghĩa Thục, Bình dân học vụ đến giáo dục đương đại. Quý khách muốn tìm hiểu về danh sư, thời kỳ lịch sử hay triết lý sư phạm nào?',
      citations: ['Cơ sở dữ liệu Giám tuyển Bảo tàng Số Nhà Giáo Việt Nam']
    }
  ]);

  const samplePrompts = [
    'Vì sao Chu Văn An được tôn vinh là Vạn Thế Sư Biểu?',
    'So sánh cải cách giáo dục của Nguyễn Thiếp (1791) và Đông Kinh Nghĩa Thục (1907)',
    'Thầy giáo Nguyễn Tất Thành đã dạy học ở trường Dục Thanh năm 1910 như thế nào?',
    'Bộ trưởng Nguyễn Văn Huyên và Tạ Quang Bửu đã xây dựng giáo dục thời kháng chiến ra sao?',
    'Bài học nghị lực từ thầy Đồ Chiểu và thầy Nguyễn Ngọc Ký là gì?'
  ];

  const generateHistoricalAnswer = (query: string): ChatMessage => {
    const q = query.toLowerCase();

    // Check matching educators
    const matchedEducators = educators.filter(
      (e) =>
        q.includes(e.fullName.toLowerCase()) ||
        (e.alternateNames && e.alternateNames.some((alt) => q.includes(alt.toLowerCase()))) ||
        e.themes.some((t) => q.includes(t.toLowerCase()))
    );

    if (q.includes('chu văn an') || q.includes('vạn thế sư biểu') || q.includes('thất trảm sớ')) {
      const cva = educators.find((e) => e.id === 'chu-van-an')!;
      return {
        id: Date.now().toString(),
        sender: 'guide',
        text: `Danh sư Chu Văn An (1292–1370) được tôn vinh là "Vạn Thế Sư Biểu" (Người thầy của muôn đời) vì 3 giá trị lớn:\n\n1. Mở trường Huỳnh Cung bên sông Tô Lịch dạy học trò khắp nước không phân biệt giàu nghèo, đào tạo nhiều hiền tài như Phạm Sư Mạnh, Lê Quát.\n2. Làm Tư nghiệp Quốc Tử Giám dưới triều Trần Minh Tông và biên soạn bộ giáo trình "Tứ thư thuyết ước".\n3. Khí tiết chính trực: dâng "Thất trảm sớ" xin chém 7 gian thần, sau đó cáo quan về núi Phượng Hoàng (Chí Linh) dạy học đến cuối đời. Ông là người thầy Việt Nam đầu tiên được phối thờ tại Văn Miếu.`,
        relatedEducators: [cva],
        suggestedRoomId: 'room-1',
        citations: ['Đại Việt sử ký toàn thư (Kỷ nhà Trần)', 'Hồ sơ Danh nhân UNESCO Chu Văn An (2019)']
      };
    }

    if (q.includes('nguyễn thiếp') || q.includes('đông kinh nghĩa thục') || q.includes('lương văn can') || q.includes('so sánh')) {
      const nt = educators.find((e) => e.id === 'nguyen-thiep')!;
      const lvc = educators.find((e) => e.id === 'luong-van-can')!;
      return {
        id: Date.now().toString(),
        sender: 'guide',
        text: `Cuộc cải cách giáo dục của La Sơn Phu Tử Nguyễn Thiếp (1791) và Đông Kinh Nghĩa Thục của cụ Lương Văn Can (1907) cách nhau hơn một thế kỷ nhưng gặp nhau ở tinh thần TỰ CƯỜNG DÂN TỘC & THỰC HỌC:\n\n• Năm 1791 (Triều Tây Sơn): Nguyễn Thiếp dâng "Bàn về phép học" (Luận học pháp) lên vua Quang Trung, chủ trì Sùng Chính Thư Viện dịch kinh sách sang chữ Nôm và đề xuất "Học rộng rồi tóm lược cho gọn, theo điều học mà làm".\n• Năm 1907 (Đầu thế kỷ XX): Cụ Cử Lương Văn Can lập trường Đông Kinh Nghĩa Thục tại số 10 Hàng Đào, dạy miễn phí chữ Quốc ngữ, toán pháp, khoa học thường thức và biên soạn "Văn minh tân học sách" nhằm "Khai dân trí, chấn dân khí, hậu dân sinh".`,
        relatedEducators: [nt, lvc],
        suggestedRoomId: 'room-2',
        citations: ['Luận học pháp (1791)', 'Văn minh tân học sách (1907)']
      };
    }

    if (q.includes('dục thanh') || q.includes('nguyễn tất thành') || q.includes('hồ chí minh') || q.includes('bác hồ') || q.includes('bình dân học vụ')) {
      const hcm = educators.find((e) => e.id === 'nguyen-tat-thanh-duc-thanh')!;
      return {
        id: Date.now().toString(),
        sender: 'guide',
        text: `Từ tháng 9/1910 đến tháng 2/1911, thầy giáo trẻ Nguyễn Tất Thành (Chủ tịch Hồ Chí Minh) đã dạy học tại trường Dục Thanh (Phan Thiết, Bình Thuận). Người dạy chữ Quốc ngữ, chữ Hán, tiếng Pháp và đặc biệt trực tiếp hướng dẫn học sinh tập thể dục, dẫn học trò đi tham quan tìm hiểu lịch sử và truyền lòng yêu nước.\n\nSau ngày độc lập (9/1945), Người gửi Bức thư lịch sử cho học sinh nhân ngày khai trường đầu tiên và phát động chiến dịch "Bình dân học vụ" xóa mù chữ cho hàng triệu đồng bào với triết lý: "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người".`,
        relatedEducators: [hcm],
        suggestedRoomId: 'room-2',
        citations: ['Hồ Chí Minh Toàn tập — Tập 4', 'Khu di tích Trường Dục Thanh (Phan Thiết)']
      };
    }

    if (q.includes('nguyễn văn huyên') || q.includes('tạ quang bửu') || q.includes('hoàng tụy') || q.includes('kháng chiến')) {
      const nvh = educators.find((e) => e.id === 'nguyen-van-huyen')!;
      const tqb = educators.find((e) => e.id === 'ta-quang-buu')!;
      const ht = educators.find((e) => e.id === 'hoang-tuy')!;
      return {
        id: Date.now().toString(),
        sender: 'guide',
        text: `Trong giai đoạn Kháng chiến và Kiến quốc (1945–1975), nền giáo dục Việt Nam đã lập nên kỳ tích lịch sử dưới sự dẫn dắt của những trí thức lớn:\n\n• GS. Nguyễn Văn Huyên: Tiến sĩ Sorbonne đầu tiên của Việt Nam, giữ chức Bộ trưởng Bộ Giáo dục suốt 29 năm (1946–1975), chủ trì cải cách giáo dục 1950 và 1956, đưa tiếng Việt vào giảng dạy ở mọi bậc học.\n• GS. Tạ Quang Bửu: Hiệu trưởng ĐH Bách khoa Hà Nội, Bộ trưởng Bộ Đại học & THCN, người đặt nền móng cho giáo dục đại học và khoa học kỹ thuật hiện đại.\n• GS. Hoàng Tụy: Tấm gương tự học phi thường, khai sinh lý thuyết Tối ưu toàn cục ("Lát cắt Tụy", 1964) ngay trong hoàn cảnh đất nước có chiến tranh.`,
        relatedEducators: [nvh, tqb, ht],
        suggestedRoomId: 'room-3',
        citations: ['Nguyễn Văn Huyên Toàn tập', 'Kỷ yếu GS. Tạ Quang Bửu & Viện Toán học Việt Nam']
      };
    }

    if (q.includes('nguyễn ngọc ký') || q.includes('nguyễn đình chiểu') || q.includes('đồ chiểu') || q.includes('nghị lực') || q.includes('văn như cương')) {
      const ndc = educators.find((e) => e.id === 'nguyen-dinh-chieu')!;
      const nnk = educators.find((e) => e.id === 'nguyen-ngoc-ky')!;
      const vnc = educators.find((e) => e.id === 'van-nhu-cuong')!;
      return {
        id: Date.now().toString(),
        sender: 'guide',
        text: `Lịch sử giáo dục Việt Nam tỏa sáng những tấm gương nghị lực và nhân cách vượt lên nghịch cảnh:\n\n• Thầy Đồ Nguyễn Đình Chiểu (1822–1888): Dù bị mù cả hai mắt từ năm 27 tuổi, ông vẫn mở trường dạy học, bốc thuốc cứu dân và sáng tác "Lục Vân Tiên" giáo dục đạo nghĩa khắp Nam Bộ.\n• Nhà giáo Ưu tú Nguyễn Ngọc Ký (1947–2022): Bị liệt hai tay từ năm 4 tuổi, thầy đã luyện viết bằng đôi chân, tốt nghiệp Khoa Ngữ văn ĐH Tổng hợp Hà Nội và trở thành người thầy truyền lửa qua hồi ký "Tôi đi học".\n• PGS. Văn Như Cương (1937–2017): Người thầy của thông điệp nhân văn "Trước hết phải là một người tử tế".`,
        relatedEducators: [ndc, nnk, vnc],
        suggestedRoomId: 'room-4',
        citations: ['Hồ sơ UNESCO Nguyễn Đình Chiểu', 'Hồi ký "Tôi đi học" — Nguyễn Ngọc Ký']
      };
    }

    if (matchedEducators.length > 0) {
      const first = matchedEducators[0];
      return {
        id: Date.now().toString(),
        sender: 'guide',
        text: `${first.fullName} (${first.birthDeathYears}) — ${first.honorificTitle}.\n\n• Tóm tắt sự nghiệp: ${first.shortSummary}\n• Triết lý giáo dục: ${first.educationalPhilosophy}\n• Bài học cho hôm nay: ${first.lessonsForToday.join(' ')}`,
        relatedEducators: matchedEducators,
        suggestedRoomId: first.primaryRoomId,
        citations: first.references.map((r) => r.title)
      };
    }

    return {
      id: Date.now().toString(),
      sender: 'guide',
      text: `Cảm ơn câu hỏi rất sâu sắc của quý khách! Xuyên suốt lịch sử giáo dục Việt Nam qua 6 thời kỳ trưng bày tại Bảo tàng (từ Quốc Tử Giám thời Lý – Trần, Tân học đầu thế kỷ XX, Bình dân học vụ kháng chiến đến kỷ nguyên số hôm nay), sợi chỉ đỏ xuyên suốt luôn là đạo lý "Tôn sư trọng đạo", tinh thần "Thực học" và tấm lòng tận tụy vì học trò. Quý khách có thể nhấp vào các gợi ý bên dưới để khám phá từng danh sư hoặc bước vào phòng Panorama 360° tương ứng!`,
      relatedEducators: educators.slice(0, 3),
      suggestedRoomId: 'main-hall',
      citations: ['Tổng quan Giám tuyển Bảo tàng Số Nhà Giáo Việt Nam']
    };
  };

  const handleSend = (textToSend?: string) => {
    const query = (textToSend ?? input).trim();
    if (!query) return;

    const visitorMsg: ChatMessage = {
      id: `v-${Date.now()}`,
      sender: 'visitor',
      text: query
    };
    const guideReply = generateHistoricalAnswer(query);
    setMessages((prev) => [...prev, visitorMsg, guideReply]);
    if (!textToSend) setInput('');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Sidebar: Suggested Questions & Historical Context */}
      <div className="lg:col-span-4 space-y-4">
        <div className="p-5 rounded-2xl bg-navy-900 border border-bronze-500/50 shadow-xl space-y-3">
          <div className="flex items-center gap-2 text-bronze-300 font-serif font-bold text-lg">
            <Sparkles className="w-5 h-5" />
            <span>Trợ Lý Thuyết Minh Viên AI</span>
          </div>
          <p className="text-xs text-ivory-200/85 leading-relaxed">
            Tra cứu lịch sử sư phạm, đối sánh tư tưởng giáo dục qua các triều đại và tìm hiểu cuộc đời các bậc danh sư Việt Nam với trích dẫn sử liệu minh bạch.
          </p>

          <div className="pt-2 space-y-2">
            <p className="text-xs font-bold uppercase tracking-wider text-bronze-300 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Câu hỏi gợi ý chuyên sâu:</span>
            </p>
            {samplePrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="w-full text-left p-2.5 rounded-xl bg-navy-950/90 hover:bg-bronze-500/20 border border-bronze-500/30 text-xs text-ivory-100 transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-navy-900/80 border border-bronze-500/30 text-xs text-ivory-200/80 space-y-1.5">
          <p className="font-bold text-bronze-300 uppercase tracking-wider">Nguyên tắc học thuật</p>
          <p>
            Mọi câu trả lời đều bám sát hồ sơ sử liệu đã kiểm chứng trong Bảo tàng Số ({educators.length} hồ sơ danh sư, {archives.length} hiện vật & văn bia, {rooms.length} không gian trưng bày).
          </p>
        </div>
      </div>

      {/* Right Chat Area */}
      <div className="lg:col-span-8 flex flex-col h-[600px] rounded-2xl bg-navy-900 border border-bronze-500/50 shadow-xl overflow-hidden">
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'visitor' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-4 space-y-3 ${
                  msg.sender === 'visitor'
                    ? 'bg-bronze-500 text-navy-950 font-medium'
                    : 'bg-navy-950/95 border border-bronze-500/40 text-ivory-50'
                }`}
              >
                <p className="text-sm whitespace-pre-line leading-relaxed">{msg.text}</p>

                {msg.relatedEducators && msg.relatedEducators.length > 0 && (
                  <div className="pt-2 border-t border-bronze-500/30 flex flex-wrap gap-2">
                    {msg.relatedEducators.map((edu) => (
                      <button
                        key={edu.id}
                        onClick={() => onSelectEducator(edu)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-800 hover:bg-bronze-500 hover:text-navy-950 text-xs font-semibold text-bronze-300 border border-bronze-400/40 transition-colors"
                      >
                        <UserCheck className="w-3.5 h-3.5" />
                        <span>Hồ sơ: {edu.fullName}</span>
                      </button>
                    ))}
                    {msg.suggestedRoomId && (
                      <button
                        onClick={() => onVisitRoom360(msg.suggestedRoomId!)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-crimson-700 hover:bg-crimson-800 text-xs font-semibold text-ivory-50 transition-colors"
                      >
                        <Compass className="w-3.5 h-3.5" />
                        <span>Bước vào Phòng 360°</span>
                      </button>
                    )}
                  </div>
                )}

                {msg.citations && msg.citations.length > 0 && (
                  <div className="text-[11px] text-bronze-300/80 flex items-center gap-1.5 pt-1">
                    <BookOpen className="w-3.5 h-3.5 shrink-0" />
                    <span>Nguồn dẫn: {msg.citations.join(' • ')}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-4 bg-navy-950 border-t border-bronze-500/40 flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nhập câu hỏi về lịch sử giáo dục, danh sư hoặc triết lý sư phạm..."
            className="flex-1 bg-navy-900 border border-bronze-500/40 rounded-xl px-4 py-2.5 text-sm text-ivory-50 placeholder:text-ivory-200/40 focus:outline-none focus:border-bronze-400"
          />
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-bronze-500 hover:bg-bronze-400 text-navy-950 font-bold text-sm inline-flex items-center gap-1.5 transition-colors"
          >
            <Send className="w-4 h-4" />
            <span>Hỏi AI</span>
          </button>
        </form>
      </div>
    </div>
  );
};
