import { EducatorProfile } from '../types/museum';

export const EDUCATORS_DATA: EducatorProfile[] = [
  {
    id: 'chu-van-an',
    fullName: 'Chu Văn An',
    alternateNames: ['Chu An', 'Tiều Ẩn', 'Linh Triệt', 'Khang Tiết Tiên Sinh'],
    honorificTitle: 'Vạn Thế Sư Biểu — Người thầy của muôn đời',
    birthDeathYears: '1292 – 1370',
    hometown: 'Thanh Liệt, Thanh Trì, Hà Nội',
    region: 'Bắc Bộ',
    primaryRoomId: 'room-1',
    eraLabel: 'Thời kỳ Phong kiến (Triều Trần)',
    fields: ['Triết học Nho giáo', 'Quốc Tử Giám Tư nghiệp', 'Đạo đức sư phạm', 'Y học & Văn học'],
    themes: ['Tôn sư trọng đạo', 'Khí tiết kẻ sĩ', 'Học đi đôi với hành', 'Giáo dục bình đẳng'],
    verificationStatus: 'verified',
    shortSummary:
      'Danh sư kiệt xuất thời nhà Trần, Tư nghiệp Quốc Tử Giám, người mở trường dạy học tại làng Huỳnh Cung với hàng ngàn học trò thành danh, biểu tượng tối cao của đạo học và khí tiết người thầy Việt Nam.',
    educationAndTeachingJourney: [
      'Đỗ Thái học sinh nhưng không ra làm quan ngay mà trở về quê mở trường dạy học bên sông Tô Lịch (trường Huỳnh Cung), thu hút học trò khắp cả nước.',
      'Được vua Trần Minh Tông vời ra làm Tư nghiệp Quốc Tử Giám (Hiệu trưởng trường đại học đầu tiên của quốc gia), trực tiếp dạy thái tử và đào tạo hiền tài.',
      'Dâng "Thất trảm sớ" xin chém 7 gian thần dưới triều Trần Dụ Tông; khi không được chấp thuận, ông treo mũ từ quan về núi Phượng Hoàng (Chí Linh, Hải Dương) tiếp tục dạy học và viết sách.'
    ],
    milestones: [
      {
        year: '1292',
        title: 'Sinh tại làng Quang Liệt (Thanh Liệt)',
        description: 'Sinh ra trong gia đình có truyền thống hiếu học bên dòng sông Tô Lịch, Thăng Long.',
        location: 'Thanh Trì, Hà Nội'
      },
      {
        year: 'Khoảng 1315',
        title: 'Mở trường Huỳnh Cung',
        description: 'Mở trường tư thục lớn, dạy học không phân biệt giàu nghèo; đào tạo nhiều nhân tài như Phạm Sư Mạnh, Lê Quát.',
        location: 'Thanh Trì, Hà Nội'
      },
      {
        year: '1324 – 1357',
        title: 'Tư nghiệp Quốc Tử Giám & Soạn "Tứ thư thuyết ước"',
        description: 'Phụ trách Quốc Tử Giám, biên soạn giáo trình Tứ thư thuyết ước làm sách giáo khoa chuẩn mực cho Nho sinh.',
        location: 'Kinh thành Thăng Long'
      },
      {
        year: 'Khoảng 1358',
        title: 'Dâng Thất trảm sớ & Cáo quan về núi Phượng Hoàng',
        description: 'Thể hiện khí tiết chính trực của bậc đại sư trước triều chính suy đồi, lui về ở ẩn lấy hiệu Tiều Ẩn.',
        location: 'Chí Linh, Hải Dương'
      },
      {
        year: '1370',
        title: 'Viên tịch & Được thờ tại Văn Miếu',
        description: 'Vua Trần Nghệ Tông truy tặng tước Văn Trinh Công, cho phối thờ ở Văn Miếu – Quốc Tử Giám ngang hàng các bậc tiên hiền.',
        location: 'Văn Miếu – Quốc Tử Giám'
      }
    ],
    contributions: [
      'Biên soạn bộ "Tứ thư thuyết ước" — giáo trình cô đọng tinh hoa Nho học phục vụ giảng dạy tại Quốc Tử Giám.',
      'Biên soạn "Y học yếu giải tập chú chuẩn biên", đóng góp quan trọng cho nền y học cổ truyền dân tộc.',
      'Đặt nền móng cho chuẩn mực đạo đức nghề giáo Việt Nam: nghiêm nghị, thanh liêm, lấy nhân cách làm gương sáng cho học trò.'
    ],
    educationalPhilosophy:
      'Giáo dục trước hết là rèn luyện nhân cách và tiết tháo ("Tiên học lễ, hậu học văn"); người thầy phải là tấm gương sống về đạo lý, chính trực và thương yêu học trò không phân biệt xuất thân.',
    lessonsForToday: [
      'Người thầy truyền cảm hứng mạnh mẽ nhất không chỉ bằng tri thức mà bằng chính nhân cách và sự chính trực trong cuộc sống.',
      'Dân chủ và công bằng trong giáo dục: mở rộng cánh cửa tri thức cho mọi người học có chí hướng.',
      'Dù học trò làm đến bậc đại quan vẫn giữ trọn lễ nghĩa khi về thăm thầy — minh chứng sống động của truyền thống Tôn sư trọng đạo.'
    ],
    documentedQuotes: [
      {
        quote: 'Ta nghe nói kẻ sĩ phải lo trước nỗi lo của thiên hạ, vui sau niềm vui của thiên hạ; chưa từng nghe kẻ sĩ lại xu phụ quyền quý mà quên điều nghĩa.',
        contextAndSource: 'Tư tưởng hành đạo được ghi nhận trong Đại Việt sử ký toàn thư (Kỷ nhà Trần)'
      },
      {
        quote: 'Vạn thủy thiên sơn kiếm bội hoàn, Tiều phong thu lão cúc hoa hoàng (Muôn nước nghìn non gươm bội trả, Gió tiều thu muộn cúc vàng hoa).',
        contextAndSource: 'Trích "Tiều Ẩn thi tập" — Chu Văn An'
      }
    ],
    relatedArchiveIds: ['arc-tu-thu-thuyet-uoc', 'arc-van-mieu-stele'],
    relatedEducatorIds: ['nguyen-binh-khiem', 'le-quy-don'],
    references: [
      {
        id: 'ref-cva-1',
        title: 'Đại Việt sử ký toàn thư — Bản kỷ, Quyển VII',
        authorOrOrg: 'Ngô Sĩ Liên và các sử thần triều Lê',
        year: '1697',
        type: 'state_record',
        verified: true
      },
      {
        id: 'ref-cva-2',
        title: 'Hồ sơ Di sản Thế giới UNESCO kỷ niệm 650 năm ngày mất Danh nhân Chu Văn An',
        authorOrOrg: 'UNESCO & Trung tâm Hoạt động VHKH Văn Miếu - Quốc Tử Giám',
        year: '2019',
        type: 'museum_collection',
        verified: true
      }
    ],
    suggestedQuestions: [
      'Vì sao Chu Văn An được tôn vinh là "Vạn Thế Sư Biểu" của nền giáo dục Việt Nam?',
      'Trường Huỳnh Cung của thầy Chu Văn An có điểm gì đặc biệt so với giáo dục quan trường thời Trần?',
      'Câu chuyện học trò Phạm Sư Mạnh, Lê Quát về thăm thầy Chu Văn An dạy cho chúng ta bài học gì?'
    ],
    portraitStyle: {
      bgPrimary: '#1A120B',
      bgSecondary: '#3C2A21',
      accentColor: '#DFC17B',
      attireType: 'confucian_scholar',
      symbolIcon: 'scroll',
      inscription: 'VẠN THẾ'
    }
  },
  {
    id: 'nguyen-binh-khiem',
    fullName: 'Nguyễn Bỉnh Khiêm',
    alternateNames: ['Tuyết Giang Phu Tử', 'Bạch Vân Cư Sĩ', 'Trạng Trình'],
    honorificTitle: 'Tuyết Giang Phu Tử — Bậc Đại Sư Thời Phân Tranh',
    birthDeathYears: '1491 – 1585',
    hometown: 'Cổ Am, Vĩnh Bảo, Hải Phòng',
    region: 'Bắc Bộ',
    primaryRoomId: 'room-1',
    eraLabel: 'Thời kỳ Phong kiến (Thế kỷ XVI)',
    fields: ['Triết học Dịch lý', 'Giáo dục nhân văn', 'Thơ văn chữ Nôm & chữ Hán'],
    themes: ['Triết lý chữ Nhàn & Trung dung', 'Đào tạo hiền tài giữ nước', 'Yêu chuộng hòa bình'],
    verificationStatus: 'verified',
    shortSummary:
      'Trạng nguyên khoa Ất Mùi (1535), sau khi từ quan đã lập am Bạch Vân và quán Trung Tân bên sông Tuyết, đào tạo hàng loạt danh thần, học giả lớn như Phùng Khắc Khoan, Lương Hữu Khánh, Nguyễn Dữ.',
    educationAndTeachingJourney: [
      'Thọ giáo Bảng nhãn Lương Đắc Bằng, thấm nhuần kinh điển và Dịch học từ thuở thiếu thời.',
      'Đỗ Trạng nguyên năm 45 tuổi (1535), làm quan đến chức Hữu Thị lang bộ Hình kiêm Đông các Đại học sĩ, tước Trình Tuyền Hầu.',
      'Sau khi dâng sớ vạch tội 18 lộng thần không thành, ông cáo quan về quê năm 1542, dựng am Bạch Vân mở trường dạy học bên bến Tuyết Giang suốt hơn 40 năm.'
    ],
    milestones: [
      {
        year: '1491',
        title: 'Sinh tại làng Trung Am, Vĩnh Bảo',
        description: 'Con của處 sĩ Nguyễn Văn Định và bà Nhữ Thị Thục (con gái Thượng thư Nhữ Văn Lan).',
        location: 'Hải Phòng'
      },
      {
        year: '1535',
        title: 'Đỗ Trạng nguyên khoa Ất Mùi',
        description: 'Đỗ đầu cả 3 kỳ thi Hương, Hội, Đình dưới triều Mạc Đăng Doanh.',
        location: 'Thăng Long'
      },
      {
        year: '1542',
        title: 'Lập Am Bạch Vân & Quán Trung Tân',
        description: 'Mở trường Tuyết Giang, nơi hội tụ sĩ tử khắp đất nước; học trò tôn gọi là Tuyết Giang Phu Tử.',
        location: 'Vĩnh Bảo, Hải Phòng'
      },
      {
        year: '1585',
        title: 'Qua đời ở tuổi 95',
        description: 'Để lại di sản thơ văn đồ sộ (Bạch Vân am thi tập, Bạch Vân quốc ngữ thi tập) và thế hệ học trò xuất sắc.',
        location: 'Vĩnh Bảo, Hải Phòng'
      }
    ],
    contributions: [
      'Đào tạo lớp trí thức kiệt xuất thế kỷ XVI: Phùng Khắc Khoan (Trạng Bùng), Lương Hữu Khánh, Nguyễn Dữ (tác giả Truyền kỳ mạn lục), Trương Thời Cử.',
      'Đưa chữ Nôm vào thơ ca triết lý giáo dục đời sống, khuyên con người hướng thiện, giữ đạo nghĩa.',
      'Định hướng chiến lược yên dân, giữ bờ cõi và bảo tồn sinh mệnh trăm họ trong thời kỳ lịch sử đầy biến động.'
    ],
    educationalPhilosophy:
      'Giáo dục khai mở trí tuệ gắn liền với đạo "Trung tân" (giữ lòng ngay thẳng, nhân nghĩa giữa cuộc đời biến thiên), tùy theo năng lực mỗi học trò mà định hướng con đường lập thân giúp đời.',
    lessonsForToday: [
      'Cá thể hóa giáo dục: thấu hiểu sở trường và tính cách riêng của từng học trò để định hướng sự nghiệp phù hợp.',
      'Kết hợp giữa học thuật uyên bác với sự bình dị, gần gũi thiên nhiên và đời sống nhân dân.',
      'Giáo dục lòng yêu chuộng hòa bình và trách nhiệm với vận mệnh dân tộc.'
    ],
    documentedQuotes: [
      {
        quote: 'Một mai, một cuốc, một cần câu / Thơ thẩn dầu ai vui thú nào / Ta dại, ta tìm nơi vắng vẻ / Người khôn, người đến chốn lao xao.',
        contextAndSource: 'Bài thơ "Nhàn" — Bạch Vân quốc ngữ thi tập'
      }
    ],
    relatedArchiveIds: ['arc-van-mieu-stele'],
    relatedEducatorIds: ['chu-van-an', 'le-quy-don'],
    references: [
      {
        id: 'ref-nbk-1',
        title: 'Bạch Vân am thi tập & Bạch Vân quốc ngữ thi tập',
        authorOrOrg: 'Viện Nghiên cứu Hán Nôm',
        year: '1991',
        type: 'archive',
        verified: true
      }
    ],
    suggestedQuestions: [
      'Vì sao trường dạy học của Nguyễn Bỉnh Khiêm được gọi là cái nôi nhân tài thế kỷ XVI?',
      'Triết lý "Trung tân" của Tuyết Giang Phu Tử có ý nghĩa gì trong giáo dục đạo đức?'
    ],
    portraitStyle: {
      bgPrimary: '#16213E',
      bgSecondary: '#1F4068',
      accentColor: '#DFC17B',
      attireType: 'confucian_scholar',
      symbolIcon: 'lotus',
      inscription: 'TRẠNG TRÌNH'
    }
  },
  {
    id: 'le-quy-don',
    fullName: 'Lê Quý Đôn',
    alternateNames: ['Lê Danh Phương', 'Doãn Hậu', 'Quế Đường'],
    honorificTitle: 'Bác Học Danh Sư — Đỉnh cao Tri thức Bách khoa Thế kỷ XVIII',
    birthDeathYears: '1726 – 1784',
    hometown: 'Duyên Hà, Hưng Hà, Thái Bình',
    region: 'Bắc Bộ',
    primaryRoomId: 'room-1',
    eraLabel: 'Thời kỳ Phong kiến (Thế kỷ XVIII)',
    fields: ['Bách khoa toàn thư', 'Sử học & Địa chí', 'Giáo dục Quốc Tử Giám', 'Nông học & Triết học'],
    themes: ['Thực học', 'Phương pháp nghiên cứu khảo chứng', 'Không ngừng tự học'],
    verificationStatus: 'verified',
    shortSummary:
      'Tam nguyên Bảng nhãn, nhà bác học lớn nhất của Việt Nam thời phong kiến, từng giữ chức Tư nghiệp Quốc Tử Giám, người đề cao tinh thần "Thực học" và phương pháp ghi chép, phân tích khoa học.',
    educationAndTeachingJourney: [
      'Nổi tiếng thần đồng từ nhỏ, đỗ Giải nguyên (1743), Hội nguyên và Đình nguyên Bảng nhãn (1752).',
      'Giữ chức Tư nghiệp Quốc Tử Giám, chấn chỉnh học phong, khuyến khích học trò đọc rộng, khảo cứu thực tế thay vì chỉ học vẹt từ chương.',
      'Đi tới đâu cũng khảo sát địa lý, phong tục, kinh tế, văn hóa để biên soạn các bộ sách bách khoa truyền lại cho hậu thế.'
    ],
    milestones: [
      {
        year: '1726',
        title: 'Sinh tại làng Diên Hà, trấn Sơn Nam Hạ',
        description: 'Con trai Tiến sĩ Lê Phú Thứ, được rèn luyện nghiêm khắc từ nhỏ.',
        location: 'Hưng Hà, Thái Bình'
      },
      {
        year: '1752',
        title: 'Đỗ Tam nguyên Bảng nhãn',
        description: 'Đỗ đầu cả ba kỳ thi Hương, Hội, Đình (khoa Nhâm Thân không lấy Trạng nguyên).',
        location: 'Thăng Long'
      },
      {
        year: '1773 – 1777',
        title: 'Hoàn thành Vân đài loại ngữ & Phủ biên tạp lục',
        description: 'Biên soạn bộ bách khoa thư "Vân đài loại ngữ" và công trình khảo cứu Đàng Trong "Phủ biên tạp lục" (ghi chép rõ chủ quyền Hoàng Sa, Trường Sa).',
        location: 'Thuận Hóa – Thăng Long'
      }
    ],
    contributions: [
      'Để lại khoảng 40 bộ sách đồ sộ bao quát lịch sử, địa lý, triết học, văn học, nông học (Vân đài loại ngữ, Đại Việt thông sử, Kiến văn tiểu lục, Phủ biên tạp lục).',
      'Đổi mới phương pháp học tập và biên khảo: kết hợp đọc sách với khảo sát thực địa, đối chiếu tư liệu đa chiều.',
      'Cổ vũ tinh thần "Thực học" — học để hiểu quy luật vạn vật và ứng dụng vào trị quốc, kinh bang tế thế.'
    ],
    educationalPhilosophy:
      '"Phi nông bất ổn, phi công bất phú, phi thương bất hoạt, phi trí bất hưng" — Không có tri thức thì đất nước không thể hưng thịnh; việc học phải gắn liền với quan sát thực tiễn và tư duy hệ thống.',
    lessonsForToday: [
      'Phương pháp ghi chép khoa học, phân loại kiến thức theo chủ đề (như Vân đài loại ngữ) vẫn là chuẩn mực cho người nghiên cứu hôm nay.',
      'Chống lối học sáo rỗng, giáo điều; đề cao năng lực thực hành và tư duy phản biện.',
      'Tinh thần học tập suốt đời, đi đến đâu cũng học hỏi từ thực tiễn nhân dân.'
    ],
    documentedQuotes: [
      {
        quote: 'Ngẫu nhiên đọc sách có chỗ tâm đắc thì ghi ngay lại; việc đời mắt thấy tai nghe có điều đáng suy ngẫm cũng chép vào để khảo cứu.',
        contextAndSource: 'Tựa sách "Kiến văn tiểu lục" — Lê Quý Đôn (1777)'
      }
    ],
    relatedArchiveIds: ['arc-van-dai-loai-ngu', 'arc-van-mieu-stele'],
    relatedEducatorIds: ['chu-van-an', 'nguyen-thiep'],
    references: [
      {
        id: 'ref-lqd-1',
        title: 'Vân đài loại ngữ & Kiến văn tiểu lục',
        authorOrOrg: 'Viện Sử học Việt Nam dịch và xuất bản',
        year: '1962',
        type: 'book',
        verified: true
      }
    ],
    suggestedQuestions: [
      'Phương pháp đọc sách và ghi chép của Lê Quý Đôn có gì đặc biệt?',
      'Bộ bách khoa thư "Vân đài loại ngữ" phản ánh tầm nhìn giáo dục nào của Lê Quý Đôn?'
    ],
    portraitStyle: {
      bgPrimary: '#1E1B18',
      bgSecondary: '#3E3227',
      accentColor: '#CCA452',
      attireType: 'confucian_scholar',
      symbolIcon: 'book',
      inscription: 'BÁC HỌC'
    }
  },
  {
    id: 'nguyen-thiep',
    fullName: 'Nguyễn Thiếp',
    alternateNames: ['La Sơn Phu Tử', 'Lục Niên Tiên Sinh', 'Hạnh Am'],
    honorificTitle: 'La Sơn Phu Tử — Kiến trúc sư Cải cách Giáo dục Chữ Nôm thời Tây Sơn',
    birthDeathYears: '1723 – 1804',
    hometown: 'Kim Lộc, Can Lộc, Hà Tĩnh',
    region: 'Trung Bộ',
    primaryRoomId: 'room-1',
    eraLabel: 'Thời kỳ Phong kiến (Thế kỷ XVIII)',
    fields: ['Cải cách giáo dục', 'Dịch thuật kinh điển chữ Nôm', 'Triết học thực tiễn'],
    themes: ['Đề cao chữ Nôm dân tộc', 'Theo học phải từ Tiểu học đến Đại học', 'Học để làm người chân chính'],
    verificationStatus: 'verified',
    shortSummary:
      'Danh sĩ, nhà giáo lớn đất Hoan Châu, người được Hoàng đế Quang Trung ba lần viết thư mời hợp tác và giao trọng trách Viện trưởng Sùng Chính Thư Viện — thực hiện cuộc cải cách giáo dục đưa chữ Nôm thành văn tự chính thống.',
    educationAndTeachingJourney: [
      'Đỗ Hương giải (1743), từng làm Huấn đạo rồi Tri huyện nhưng sớm từ quan về núi Thiên Nhẫn (Hà Tĩnh) đọc sách và dạy học.',
      'Cảm kích trước tấm lòng cầu hiền chân thành của Bắc Bình Vương Nguyễn Huệ (Hoàng đế Quang Trung), ông nhận lời giúp triều Tây Sơn chấn hưng giáo dục.',
      'Đứng đầu Sùng Chính Thư Viện (1791), tổ chức dịch Tứ thư, Ngũ kinh và sách Tiểu học từ chữ Hán sang chữ Nôm để phổ cập việc học.'
    ],
    milestones: [
      {
        year: '1723',
        title: 'Sinh tại làng Mật Thôn, Can Lộc',
        description: 'Sinh trưởng trong dòng họ khoa bảng nổi tiếng vùng Hoan Châu.',
        location: 'Hà Tĩnh'
      },
      {
        year: '1788',
        title: 'Hội kiến Nguyễn Huệ trên núi Thiên Nhẫn',
        description: 'Bàn định kế sách bình Bắc và dựng nền giáo dục mới cho đất nước.',
        location: 'Nghệ An – Hà Tĩnh'
      },
      {
        year: '1791',
        title: 'Viện trưởng Sùng Chính Thư Viện',
        description: 'Dâng tấu bàn về ba điều cốt yếu (Quân đức, Dân tâm, Học pháp) và chủ trì dịch sách học ra chữ Nôm.',
        location: 'Nghệ An – Phú Xuân'
      }
    ],
    contributions: [
      'Đề xuất bản "Luận học pháp" (Bàn về phép học) nổi tiếng gửi vua Quang Trung năm 1791 — một tuyên ngôn cải cách sư phạm tiến bộ.',
      'Chủ trì Sùng Chính Thư Viện dịch kinh điển sang chữ Nôm, khẳng định ý thức tự cường văn hóa và ngôn ngữ dân tộc.',
      'Phê phán lối học chuộng hình thức, cầu danh lợi; đề xuất quy trình giáo dục tuần tự từ thấp đến cao, học đi đôi với hành.'
    ],
    educationalPhilosophy:
      '"Ngọc không mài không thành đồ vật, người không học không biết đạo... Học rộng rồi tóm lược cho gọn, theo điều học mà làm." (Trích Tấu bàn về phép học, 1791).',
    lessonsForToday: [
      'Tư tưởng "Học rộng rồi tóm lược cho gọn, theo điều học mà làm" vẫn là kim chỉ nam của chương trình giáo dục phát triển năng lực hiện đại.',
      'Trân trọng tiếng mẹ đẻ và văn hóa dân tộc trong giáo dục quốc gia.',
      'Giáo dục nền tảng đạo đức gia đình (Tiểu học) là gốc rễ trước khi tiến lên học thuật cao siêu.'
    ],
    documentedQuotes: [
      {
        quote: 'Cúi xin từ nay ban chiếu thư cho thầy trò trường học của phủ, huyện, các trường tư, con cháu các nhà văn võ... đều tùy đâu tiện đấy mà đi học. Phép dạy nhất định theo Chu Tử: lúc đầu học Tiểu học để bồi lấy gốc, tuần tự tiến lên học đến Tứ thư, Ngũ kinh, Chư sử. Học rộng rồi tóm lược cho gọn, theo điều học mà làm.',
        contextAndSource: 'Trích "Bàn về phép học" (Luận học pháp) dâng vua Quang Trung tháng 8 năm 1791'
      }
    ],
    relatedArchiveIds: ['arc-ban-ve-phep-hoc'],
    relatedEducatorIds: ['le-quy-don', 'nguyen-dinh-chieu'],
    references: [
      {
        id: 'ref-nt-1',
        title: 'La Sơn Phu Tử (Chuyên khảo lịch sử)',
        authorOrOrg: 'Hoàng Xuân Hãn',
        year: '1952',
        type: 'book',
        verified: true
      }
    ],
    suggestedQuestions: [
      'Bản tấu "Bàn về phép học" (1791) của Nguyễn Thiếp đã chỉ ra những căn bệnh nào của lối học hình thức?',
      'Vai trò của Sùng Chính Thư Viện trong việc đề cao chữ Nôm dưới triều Quang Trung là gì?'
    ],
    portraitStyle: {
      bgPrimary: '#1B262C',
      bgSecondary: '#0F4C75',
      accentColor: '#DFC17B',
      attireType: 'confucian_scholar',
      symbolIcon: 'brush',
      inscription: 'THỰC HỌC'
    }
  },
  {
    id: 'nguyen-dinh-chieu',
    fullName: 'Nguyễn Đình Chiểu',
    alternateNames: ['Mạch Trạch', 'Trọng Phủ', 'Hối Trai', 'Đồ Chiểu'],
    honorificTitle: 'Ngôi Sao Sáng Văn Nghệ & Sư Phạm Đất Nam Bộ',
    birthDeathYears: '1822 – 1888',
    hometown: 'Tân Thới, Gia Định (an táng tại Ba Tri, Bến Tre)',
    region: 'Nam Bộ',
    primaryRoomId: 'room-1',
    eraLabel: 'Cuối Thế kỷ XIX (Kháng Pháp)',
    fields: ['Giáo dục đạo lý dân gian', 'Y học cứu người', 'Thơ văn yêu nước'],
    themes: ['Nghị lực vượt lên nghịch cảnh', 'Đạo làm người trọng nghĩa khinh tài', 'Văn chương tải đạo'],
    verificationStatus: 'verified',
    shortSummary:
      'Người thầy mù giàu nghị lực phi thường của vùng đất Nam Bộ: vừa mở trường dạy học, vừa bốc thuốc cứu dân, vừa dùng ngòi bút làm vũ khí chiến đấu chống ngoại xâm và truyền dạy đạo nghĩa nhân sinh.',
    educationAndTeachingJourney: [
      'Đỗ Tú tài trường Gia Định năm 1843; trên đường ra Huế dự thi Hội năm 1849, nghe tin mẹ mất, ông khóc thương trên đường về đến mức mù cả hai mắt.',
      'Vượt qua nghịch cảnh mù lòa, ông mở trường dạy học và bốc thuốc tại Gia Định; học trò và nhân dân kính trọng gọi là "Thầy Đồ Chiểu".',
      'Khi thực dân Pháp chiếm Gia Định (1859), ông dời về Cần Giuộc rồi Ba Tri (Bến Tre), tiếp tục dạy học và sáng tác thơ văn khích lệ sĩ khí kháng chiến.'
    ],
    milestones: [
      {
        year: '1822',
        title: 'Sinh tại làng Tân Thới, Gia Định',
        description: 'Con của ông Nguyễn Đình Huy và bà Trương Thị Thiệt.',
        location: 'TP. Hồ Chí Minh ngày nay'
      },
      {
        year: '1849 – 1858',
        title: 'Vượt nghịch cảnh mù lòa, mở trường dạy học & sáng tác Lục Vân Tiên',
        description: 'Đọc cho học trò chép truyện thơ Nôm Lục Vân Tiên để giáo dục đạo hiếu nghĩa trong nhân dân.',
        location: 'Gia Định'
      },
      {
        year: '1862 – 1888',
        title: 'Dạy học tại Ba Tri & Giữ trọn khí tiết',
        description: 'Khước từ mọi bổng lộc, đất đai của thực dân Pháp ("Đất chung đã mất thì đất riêng còn có nghĩa gì"), tận tụy dạy học đến cuối đời.',
        location: 'Ba Tri, Bến Tre'
      }
    ],
    contributions: [
      'Kiệt tác "Lục Vân Tiên", "Ngư Tiều y thuật vấn đáp", "Văn tế nghĩa sĩ Cần Giuộc" trở thành sách giáo khoa đạo đức sống động truyền miệng khắp Nam Kỳ lục tỉnh.',
      'Đào tạo nhiều thế hệ học trò giàu lòng yêu nước và nhân nghĩa tại Gia Định, Cần Giuộc, Ba Tri.',
      'Được UNESCO vinh danh là Danh nhân Văn hóa Thế giới (kỷ niệm 200 năm ngày sinh, 2022).'
    ],
    educationalPhilosophy:
      'Học để làm người trọng nhân nghĩa, biết phân biệt chính – tà, dùng tài năng và tri thức phụng sự Tổ quốc và cứu giúp nhân dân ("Chở bao nhiêu đạo thuyền không khẳm / Đâm mấy thằng gian bút chẳng tà").',
    lessonsForToday: [
      'Nghị lực phi thường: đôi mắt mù lòa không thể dập tắt ánh sáng trí tuệ và tâm huyết của người thầy.',
      'Giáo dục gắn liền với văn hóa đại chúng, dễ nhớ, dễ thấm sâu vào đời sống nhân dân.',
      'Lòng tự tôn dân tộc và sự kiên trung trước mọi cám dỗ vật chất.'
    ],
    documentedQuotes: [
      {
        quote: 'Chở bao nhiêu đạo thuyền không khẳm / Đâm mấy thằng gian bút chẳng tà.',
        contextAndSource: 'Trích "Than đạo" — Nguyễn Đình Chiểu'
      },
      {
        quote: 'Trai thời trung hiếu làm đầu / Gái thời tiết hạnh là câu trau mình.',
        contextAndSource: 'Trích truyện thơ Nôm "Lục Vân Tiên" — Nguyễn Đình Chiểu'
      }
    ],
    relatedArchiveIds: ['arc-luc-van-tien'],
    relatedEducatorIds: ['nguyen-thiep', 'luong-van-can'],
    references: [
      {
        id: 'ref-ndc-1',
        title: 'Hồ sơ Danh nhân Văn hóa UNESCO Nguyễn Đình Chiểu (1822–1888)',
        authorOrOrg: 'UNESCO & UBND tỉnh Bến Tre',
        year: '2021',
        type: 'museum_collection',
        verified: true
      }
    ],
    suggestedQuestions: [
      'Thầy Đồ Chiểu đã vượt qua biến cố mù lòa để tiếp tục dạy học và sáng tác như thế nào?',
      'Vì sao tác phẩm Lục Vân Tiên lại có sức lan tỏa giáo dục đạo đức sâu rộng trong nhân dân Nam Bộ?'
    ],
    portraitStyle: {
      bgPrimary: '#24150E',
      bgSecondary: '#4A2C1D',
      accentColor: '#DFC17B',
      attireType: 'confucian_scholar',
      symbolIcon: 'brush',
      inscription: 'ĐẠO NGHĨA'
    }
  },
  {
    id: 'luong-van-can',
    fullName: 'Lương Văn Can',
    alternateNames: ['Ôn Như', 'Sơn Lão'],
    honorificTitle: 'Người Thầy Tiên Phong Phong Trào Đông Kinh Nghĩa Thục (1907)',
    birthDeathYears: '1854 – 1927',
    hometown: 'Nhị Khê, Thường Tín, Hà Nội',
    region: 'Bắc Bộ',
    primaryRoomId: 'room-2',
    eraLabel: 'Đầu Thế kỷ XX (Phong trào Tân học)',
    fields: ['Cải cách giáo dục Tân học', 'Phổ cập chữ Quốc ngữ', 'Đạo đức kinh doanh (Thương học)'],
    themes: ['Khai dân trí, chấn dân khí', 'Giáo dục miễn phí vì cộng đồng', 'Tự cường dân tộc'],
    verificationStatus: 'verified',
    shortSummary:
      'Cụ Cử Lương Văn Can — Thục trưởng trường Đông Kinh Nghĩa Thục (1907) tại số 10 Hàng Đào, Hà Nội; người khởi xướng cuộc cách mạng giáo dục Tân học, truyền bá chữ Quốc ngữ và tư tưởng tự cường dân tộc đầu thế kỷ XX.',
    educationAndTeachingJourney: [
      'Đỗ Cử nhân năm 1874 nhưng từ chối chức Giáo thụ phủ Hoài Đức, về số 4 Hàng Đào (Hà Nội) mở trường dạy học.',
      'Tháng 3/1907, cùng các chí sĩ Nguyễn Quyền, Lê Đại, Vũ Hoành sáng lập Đông Kinh Nghĩa Thục — trường học nghĩa thục miễn phí dạy chữ Quốc ngữ, khoa học thường thức, lịch sử, địa lý và cổ vũ thực nghiệp.',
      'Bị thực dân Pháp lưu đày sang Nam Vang (Campuchia) từ 1913–1921; khi trở về Hà Nội năm 1921, cụ tiếp tục mở lại trường Ôn Như và viết sách giáo dục đạo đức kinh doanh.'
    ],
    milestones: [
      {
        year: '1854',
        title: 'Sinh tại làng Nhị Khê, Thường Tín',
        description: 'Vùng đất khoa bảng quê hương Nguyễn Trãi.',
        location: 'Hà Nội'
      },
      {
        year: '1907',
        title: 'Sáng lập & làm Thục trưởng Đông Kinh Nghĩa Thục',
        description: 'Ngôi trường cách mạng giáo dục thu hút hơn 1.000 học viên miễn phí, phát sách giáo khoa miễn phí.',
        location: 'Số 10 Hàng Đào, Hà Nội'
      },
      {
        year: '1921 – 1927',
        title: 'Biên soạn "Kim cổ cách ngôn", "Thương học phương châm"',
        description: 'Đặt nền móng cho tư tưởng "Thực nghiệp" và đạo đức thương trường Việt Nam.',
        location: 'Hà Nội'
      }
    ],
    contributions: [
      'Chủ trì biên soạn bộ sách giáo khoa cải cách (Quốc dân độc bản, Luân lý giáo khoa thư, Văn minh tân học sách) của Đông Kinh Nghĩa Thục.',
      'Chuyển đổi nền giáo dục Việt Nam từ lối học khoa cử từ chương sang nền Tân học thực tiễn, dạy chữ Quốc ngữ, toán pháp, cách trí, lịch sử dân tộc.',
      'Đề xướng triết lý "Thương đức" (Đạo đức kinh doanh) để chấn hưng nội lực kinh tế nước nhà.'
    ],
    educationalPhilosophy:
      'Muốn cứu nước và tự cường dân tộc, trước hết phải "Khai dân trí, chấn dân khí, hậu dân sinh" thông qua một nền giáo dục mới gắn với chữ Quốc ngữ, khoa học thực tiễn và đạo đức công dân.',
    lessonsForToday: [
      'Tinh thần xã hội hóa giáo dục phi lợi nhuận ("Nghĩa thục") vì sự tiến bộ của toàn dân.',
      'Kết hợp giáo dục văn hóa - khoa học với giáo dục tài chính, khởi nghiệp và đạo đức nghề nghiệp.',
      'Đổi mới chương trình và phương pháp giảng dạy gắn liền với hơi thở thời đại.'
    ],
    documentedQuotes: [
      {
        quote: 'Buôn bán phải giữ chữ Tín làm đầu, lấy nghĩa mà sinh lợi thì lợi mới bền lâu và giúp ích cho quốc kế dân sinh.',
        contextAndSource: 'Trích tư tưởng trong "Thương học phương châm" — Lương Văn Can'
      }
    ],
    relatedArchiveIds: ['arc-dong-kinh-nghia-thuc'],
    relatedEducatorIds: ['nguyen-tat-thanh-duc-thanh', 'dang-thai-mai'],
    references: [
      {
        id: 'ref-lvc-1',
        title: 'Đông Kinh Nghĩa Thục và phong trào cải cách văn hóa đầu thế kỷ XX',
        authorOrOrg: 'Chương Thâu — NXB Hà Nội',
        year: '1982',
        type: 'book',
        verified: true
      }
    ],
    suggestedQuestions: [
      'Trường Đông Kinh Nghĩa Thục (1907) đã tạo ra bước ngoặt gì cho nền giáo dục hiện đại Việt Nam?',
      'Vì sao cụ Lương Văn Can đặc biệt coi trọng việc dạy chữ Quốc ngữ và thực nghiệp?'
    ],
    portraitStyle: {
      bgPrimary: '#1A1C20',
      bgSecondary: '#323643',
      accentColor: '#CCA452',
      attireType: 'confucian_scholar',
      symbolIcon: 'lantern',
      inscription: 'TÂN HỌC'
    }
  },
  {
    id: 'nguyen-tat-thanh-duc-thanh',
    fullName: 'Chủ tịch Hồ Chí Minh (Thầy giáo Nguyễn Tất Thành)',
    alternateNames: ['Nguyễn Sinh Cung', 'Nguyễn Tất Thành', 'Nguyễn Ái Quốc'],
    honorificTitle: 'Người Thầy Trường Dục Thanh & Người Khai Sáng Nền Giáo Dục Việt Nam Mới',
    birthDeathYears: '1890 – 1969',
    hometown: 'Kim Liên, Nam Đàn, Nghệ An',
    region: 'Toàn quốc',
    primaryRoomId: 'room-2',
    secondaryRoomIds: ['room-3'],
    eraLabel: '1910 (Trường Dục Thanh) & Sau 1945 (Kiến tạo Giáo dục mới)',
    fields: ['Giáo dục yêu nước (Trường Dục Thanh)', 'Chiến lược Bình dân học vụ', 'Triết lý giáo dục toàn diện'],
    themes: ['Một dân tộc dốt là một dân tộc yếu', 'Học tập suốt đời', 'Vì lợi ích mười năm trồng cây, vì lợi ích trăm năm trồng người'],
    verificationStatus: 'verified',
    shortSummary:
      'Trước khi ra đi tìm đường cứu nước (1911), chàng thanh niên Nguyễn Tất Thành đã dừng chân dạy học tại trường Dục Thanh (Phan Thiết, 1910). Sau Cách mạng Tháng Tám 1945, Người trực tiếp phát động phong trào "Bình dân học vụ" và đặt nền tảng tư tưởng cho nền giáo dục Việt Nam hiện đại.',
    educationAndTeachingJourney: [
      'Học chữ Hán từ thân phụ là cụ Phó bảng Nguyễn Sinh Sắc, sau đó theo học trường Pháp – Việt Đông Ba và trường Quốc Học Huế.',
      'Từ tháng 9/1910 đến tháng 2/1911: làm thầy giáo trẻ nhất tại trường Dục Thanh (Phan Thiết, Bình Thuận) — ngôi trường do các sĩ phu yêu nước phong trào Duy Tân sáng lập; trực tiếp dạy chữ Quốc ngữ, chữ Hán, chữ Pháp và thể dục, truyền ngọn lửa yêu nước cho học trò.',
      'Tháng 9/1945, ngay sau khi đọc Tuyên ngôn Độc lập, Người gửi thư cho học sinh nhân ngày khai trường đầu tiên của nước Việt Nam Dân chủ Cộng hòa và ký sắc lệnh thành lập Nha Bình dân học vụ xóa mù chữ cho hàng triệu đồng bào.'
    ],
    milestones: [
      {
        year: '09/1910 – 02/1911',
        title: 'Thầy giáo Nguyễn Tất Thành tại trường Dục Thanh (Phan Thiết)',
        description: 'Dạy lớp Nhì và lớp Ba, đưa hoạt động rèn luyện thể chất và những bài thơ yêu nước vào giờ giảng.',
        location: 'Phan Thiết, Bình Thuận'
      },
      {
        year: '08/09/1945',
        title: 'Phát động chiến dịch "Chống nạn thất học" (Bình dân học vụ)',
        description: 'Xác định diệt giặc dốt là một trong ba nhiệm vụ cấp bách hàng đầu cùng với diệt giặc đói và giặc ngoại xâm.',
        location: 'Hà Nội'
      },
      {
        year: '15/09/1945',
        title: 'Bức thư gửi các em học sinh nhân ngày khai trường đầu tiên',
        description: 'Khẳng định sứ mệnh của thế hệ trẻ đưa dân tộc Việt Nam bước tới đài vinh quang sánh vai với các cường quốc năm châu.',
        location: 'Hà Nội'
      }
    ],
    contributions: [
      'Truyền cảm hứng sư phạm đổi mới ngay từ những tháng ngày dạy học tại trường Dục Thanh (1910): gần gũi học trò, kết hợp dạy chữ với rèn đức và rèn thể lực.',
      'Khởi xướng phong trào Bình dân học vụ — một kỳ tích xóa mù chữ quy mô toàn dân trong hoàn cảnh đất nước vừa giành độc lập và kháng chiến.',
      'Đúc kết triết lý giáo dục nhân văn, toàn diện: kết hợp Đức – Trí – Thể – Mỹ, lý luận gắn liền với thực tiễn.'
    ],
    educationalPhilosophy:
      '"Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em." (Thư gửi học sinh, 9/1945).',
    lessonsForToday: [
      'Giáo dục là quốc sách hàng đầu ("Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người").',
      'Học đi đôi với hành, học ở trường, học trong sách vở, học lẫn nhau và học nhân dân.',
      'Tình thương yêu bao la của người thầy đối với học trò là động lực cảm hóa lớn nhất.'
    ],
    documentedQuotes: [
      {
        quote: 'Một dân tộc dốt là một dân tộc yếu. Vì vậy tôi đề nghị mở một chiến dịch để chống nạn mù chữ.',
        contextAndSource: 'Phiên họp đầu tiên của Hội đồng Chính phủ (03/09/1945)'
      },
      {
        quote: 'Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người.',
        contextAndSource: 'Bài nói tại Lớp học chính trị của giáo viên cấp II, cấp III toàn miền Bắc (13/09/1958)'
      }
    ],
    relatedArchiveIds: ['arc-thu-gui-hoc-sinh-1945', 'arc-binh-dan-hoc-vu'],
    relatedEducatorIds: ['luong-van-can', 'nguyen-van-huyen', 'ta-quang-buu'],
    references: [
      {
        id: 'ref-hcm-1',
        title: 'Hồ Chí Minh Toàn tập — Tập 4 (1945–1946) & Khu di tích Trường Dục Thanh',
        authorOrOrg: 'NXB Chính trị Quốc gia Sự thật & Bảo tàng Hồ Chí Minh',
        year: '2011',
        type: 'state_record',
        verified: true
      }
    ],
    suggestedQuestions: [
      'Thầy giáo Nguyễn Tất Thành đã dạy học tại trường Dục Thanh (1910) với phương pháp sư phạm gần gũi như thế nào?',
      'Bức thư gửi học sinh tháng 9/1945 của Chủ tịch Hồ Chí Minh đặt ra tầm nhìn gì cho giáo dục Việt Nam?'
    ],
    portraitStyle: {
      bgPrimary: '#231915',
      bgSecondary: '#4A3327',
      accentColor: '#DFC17B',
      attireType: 'resistance_educator',
      symbolIcon: 'lantern',
      inscription: 'TRỒNG NGƯỜI'
    }
  },
  {
    id: 'dang-thai-mai',
    fullName: 'Đặng Thai Mai',
    alternateNames: ['Thanh Tuyền', 'Đặng Thái Mai'],
    honorificTitle: 'Giáo Sư, Nhà Giáo Lớn Của Trí Thức Tân Học & Văn Học Cách Mạng',
    birthDeathYears: '1902 – 1984',
    hometown: 'Lương Điền, Thanh Chương, Nghệ An',
    region: 'Trung Bộ',
    primaryRoomId: 'room-2',
    secondaryRoomIds: ['room-3'],
    eraLabel: '1928 – 1984 (Tân học & Giáo dục Kháng chiến)',
    fields: ['Lý luận văn học', 'Sư phạm ngữ văn', 'Quản lý giáo dục & Nghiên cứu nhân văn'],
    themes: ['Văn học gắn với đời sống dân tộc', 'Đào tạo đội ngũ giáo viên ngữ văn', 'Trí thức dấn thân'],
    verificationStatus: 'verified',
    shortSummary:
      'Giáo sư, nhà giáo ưu tú từng giảng dạy tại trường Quốc Học Huế và trường Tư thục Thăng Long (Hà Nội), Bộ trưởng Bộ Giáo dục (1946), Hiệu trưởng đầu tiên của Trường Đại học Sư phạm Văn khoa và Viện trưởng Viện Văn học.',
    educationAndTeachingJourney: [
      'Tốt nghiệp Cao đẳng Sư phạm Đông Dương (1928), dạy học tại trường Quốc Học Huế rồi ra Hà Nội dạy tại trường Tư thục Thăng Long — cái nôi giác ngộ nhiều thanh niên trí thức yêu nước.',
      'Giai đoạn kháng chiến chống Pháp: giữ chức Bộ trưởng Bộ Giáo dục (1946), sau đó trực tiếp xây dựng ngành Sư phạm và Đại học Văn khoa tại chiến khu Thanh – Nghệ – Tĩnh và Việt Bắc.',
      'Đào tạo nhiều thế hệ nhà giáo, nhà phê bình văn học hàng đầu của Việt Nam thế kỷ XX.'
    ],
    milestones: [
      {
        year: '1928 – 1935',
        title: 'Giảng dạy tại Quốc Học Huế & Tư thục Thăng Long',
        description: 'Vừa dạy tiếng Pháp, văn học vừa truyền bá tư tưởng tiến bộ và tham gia Hội Truyền bá Quốc ngữ.',
        location: 'Huế – Hà Nội'
      },
      {
        year: '1946',
        title: 'Bộ trưởng Bộ Quốc gia Giáo dục',
        description: 'Tham gia Chính phủ Liên hiệp Kháng chiến, đặt nền móng cải cách giáo dục dân chủ mới.',
        location: 'Hà Nội'
      },
      {
        year: '1950 – 1976',
        title: 'Hiệu trưởng Đại học Sư phạm & Viện trưởng Viện Văn học',
        description: 'Xây dựng hệ thống lý luận văn học và đào tạo giáo viên văn khoa cho cả nước.',
        location: 'Việt Bắc – Hà Nội'
      }
    ],
    contributions: [
      'Tác phẩm "Văn học khái luận" (1944) đặt nền tảng lý luận văn học hiện đại bằng tiếng Việt.',
      'Góp phần quan trọng trong phong trào Truyền bá chữ Quốc ngữ (1938–1945) và xây dựng hệ thống trường Sư phạm Việt Nam.',
      'Giải thưởng Hồ Chí Minh đợt I (1996) về Văn học Nghệ thuật.'
    ],
    educationalPhilosophy:
      'Giáo dục văn học và nhân văn là đánh thức lòng tự hào dân tộc, khả năng cảm thụ cái đẹp và ý thức trách nhiệm của người trí thức trước vận mệnh đất nước.',
    lessonsForToday: [
      'Người thầy dạy Văn phải có phông văn hóa sâu rộng, kết nối tinh hoa văn hóa Đông – Tây với tâm hồn Việt.',
      'Sức mạnh cảm hóa của tập thể nhà giáo tâm huyết (như mô hình trường Tư thục Thăng Long).'
    ],
    documentedQuotes: [
      {
        quote: 'Nhà trường không chỉ là nơi truyền thụ chữ nghĩa mà là nơi hun đúc tâm hồn và bản lĩnh con người Việt Nam trước thời cuộc.',
        contextAndSource: 'Hồi ký Đặng Thai Mai'
      }
    ],
    relatedArchiveIds: ['arc-dong-kinh-nghia-thuc'],
    relatedEducatorIds: ['luong-van-can', 'nguyen-van-huyen'],
    references: [
      {
        id: 'ref-dtm-1',
        title: 'Đặng Thai Mai Toàn tập',
        authorOrOrg: 'NXB Văn học',
        year: '1998',
        type: 'book',
        verified: true
      }
    ],
    suggestedQuestions: [
      'Trường Tư thục Thăng Long nơi GS. Đặng Thai Mai và thầy Võ Nguyên Giáp từng giảng dạy có vai trò gì trong lịch sử?',
      'Đóng góp của GS. Đặng Thai Mai cho ngành Sư phạm và nghiên cứu Văn học Việt Nam là gì?'
    ],
    portraitStyle: {
      bgPrimary: '#161D29',
      bgSecondary: '#2B3A52',
      accentColor: '#DFC17B',
      attireType: 'academic_gown',
      symbolIcon: 'book',
      inscription: 'NHÂN VĂN'
    }
  },
  {
    id: 'nguyen-van-huyen',
    fullName: 'Nguyễn Văn Huyên',
    alternateNames: ['GS. TS. Nguyễn Văn Huyên'],
    honorificTitle: 'Vị Bộ Trưởng Giáo Dục 29 Năm — Kiến Trúc Sư Nền Giáo Dục Kháng Chiến & Kiến Quốc',
    birthDeathYears: '1905 – 1975',
    hometown: 'Kim Chung, Hoài Đức, Hà Nội',
    region: 'Toàn quốc',
    primaryRoomId: 'room-3',
    eraLabel: '1946 – 1975 (Kháng chiến & Kiến quốc)',
    fields: ['Quản lý giáo dục quốc gia', 'Sử học & Dân tộc học', 'Cải cách giáo dục phổ thông & đại học'],
    themes: ['Xây dựng nền giáo dục bằng tiếng Việt', 'Vững vàng phát triển giáo dục giữa bom đạn chiến tranh', 'Trí thức lớn tận hiến'],
    verificationStatus: 'verified',
    shortSummary:
      'Người Việt Nam đầu tiên bảo vệ xuất sắc luận án Tiến sĩ Văn khoa tại Đại học Sorbonne (Pháp, 1934), giữ trọng trách Bộ trưởng Bộ Giáo dục suốt 29 năm (1946–1975) — vị Bộ trưởng tại vị lâu nhất lịch sử, người lãnh đạo ngành giáo dục vượt qua hai cuộc kháng chiến vĩ đại.',
    educationAndTeachingJourney: [
      'Năm 1934, bảo vệ thành công 2 luận án Tiến sĩ tại Đại học Sorbonne (Paris) và trở thành giảng viên người Việt đầu tiên tại đây trước khi về nước năm 1935.',
      'Dạy học tại trường Bưởi (Chu Văn An), tham gia Ban Trị sự Hội Truyền bá Quốc ngữ và nghiên cứu văn minh Việt Nam tại Trường Viễn Đông Bác cổ.',
      'Từ tháng 11/1946 đến khi qua đời (10/1975): suốt 29 năm làm Bộ trưởng Bộ Giáo dục, chỉ đạo hai cuộc cải cách giáo dục lớn (1950 và 1956), đưa tiếng Việt vào giảng dạy ở mọi bậc học kể cả Đại học.'
    ],
    milestones: [
      {
        year: '1934',
        title: 'Tiến sĩ Văn khoa đầu tiên của Việt Nam tại Đại học Sorbonne (Pháp)',
        description: 'Bảo vệ xuất sắc luận án về Hát đối đáp nam nữ ở Việt Nam và Kiến trúc nhà sàn Đông Nam Á.',
        location: 'Paris, Pháp'
      },
      {
        year: '11/1946 – 1975',
        title: '29 năm giữ trọng trách Bộ trưởng Bộ Giáo dục',
        description: 'Chèo lái nền giáo dục quốc dân đi qua kháng chiến chống Pháp và chống Mỹ với kỳ tích trường lớp vẫn mở khắp hầm hào, chiến khu.',
        location: 'Việt Bắc – Hà Nội'
      },
      {
        year: '1950 & 1956',
        title: 'Chủ trì hai cuộc Cải cách Giáo dục lịch sử',
        description: 'Xây dựng hệ thống giáo dục phổ thông thống nhất 10 năm và phát triển mạng lưới trường Sư phạm trên toàn miền Bắc.',
        location: 'Toàn quốc'
      }
    ],
    contributions: [
      'Đặt nền tảng vững chắc cho nền giáo dục quốc dân hiện đại giảng dạy hoàn toàn bằng tiếng mẹ đẻ từ tiểu học đến đại học.',
      'Duy trì và phát triển kỳ diệu sự nghiệp giáo dục trong khói lửa chiến tranh: học sinh đội mũ rơm đi học, không một năm học nào bị gián đoạn.',
      'Tác giả công trình kinh điển "Văn minh Việt Nam" (La Civilisation Annamite) khẳng định bản sắc văn hóa dân tộc độc lập, tự cường.'
    ],
    educationalPhilosophy:
      'Một nền giáo dục chân chính phải cắm rễ sâu vào bản sắc văn hóa dân tộc, sử dụng tiếng mẹ đẻ làm công cụ tư duy khoa học và đặt sự phát triển toàn diện của thế hệ trẻ lên trên hết.',
    lessonsForToday: [
      'Tầm nhìn chiến lược dài hạn và sự kiên định trong quản trị giáo dục quốc gia.',
      'Sự tôn trọng tuyệt đối của người lãnh đạo giáo dục đối với đội ngũ nhà giáo và học giả.',
      'Kết hợp nhuần nhuyễn giữa chuẩn mực học thuật quốc tế (Sorbonne) với tinh thần phụng sự Tổ quốc.'
    ],
    documentedQuotes: [
      {
        quote: 'Dù trong hoàn cảnh chiến tranh ác liệt đến đâu, chúng ta cũng quyết không để một thế hệ trẻ nào bị thất học, bởi tương lai tái thiết đất nước nằm ngay trên những trang vở hôm nay.',
        contextAndSource: 'Tư tưởng chỉ đạo ngành Giáo dục thời kỳ kháng chiến — GS. Nguyễn Văn Huyên'
      }
    ],
    relatedArchiveIds: ['arc-mu-rom-di-hoc', 'arc-binh-dan-hoc-vu'],
    relatedEducatorIds: ['ta-quang-buu', 'nguyen-tat-thanh-duc-thanh'],
    references: [
      {
        id: 'ref-nvh-1',
        title: 'Nguyễn Văn Huyên Toàn tập (4 tập) & Bảo tàng Nguyễn Văn Huyên',
        authorOrOrg: 'NXB Giáo dục Việt Nam & Bảo tàng Nguyễn Văn Huyên (Lai Xá)',
        year: '2000',
        type: 'museum_collection',
        verified: true
      }
    ],
    suggestedQuestions: [
      'Làm thế nào Bộ trưởng Nguyễn Văn Huyên và ngành giáo dục có thể duy trì trường lớp phát triển mạnh mẽ ngay giữa hai cuộc chiến tranh?',
      'Công trình "Văn minh Việt Nam" của GS. Nguyễn Văn Huyên có giá trị như thế nào đối với nhận thức lịch sử – văn hóa dân tộc?'
    ],
    portraitStyle: {
      bgPrimary: '#132238',
      bgSecondary: '#1E3A5F',
      accentColor: '#DFC17B',
      attireType: 'academic_gown',
      symbolIcon: 'globe',
      inscription: 'KIẾN QUỐC'
    }
  },
  {
    id: 'ta-quang-buu',
    fullName: 'Tạ Quang Bửu',
    alternateNames: ['GS. Tạ Quang Bửu'],
    honorificTitle: 'Người Đặt Nền Móng Giáo Dục Đại Học & Khoa Học Kỹ Thuật Việt Nam Hiện Đại',
    birthDeathYears: '1910 – 1986',
    hometown: 'Nam Hoành (Khánh Sơn), Nam Đàn, Nghệ An',
    region: 'Toàn quốc',
    primaryRoomId: 'room-3',
    eraLabel: '1945 – 1986 (Xây dựng Đại học & Khoa học Kỹ thuật)',
    fields: ['Toán học & Vật lý', 'Giáo dục Đại học & Cao đẳng', 'Khoa học quân sự & Kỹ thuật'],
    themes: ['Tự học và đọc sách suốt đời', 'Tiếp cận thẳng đỉnh cao khoa học thế giới', 'Đào tạo tinh hoa khoa học kỹ thuật'],
    verificationStatus: 'verified',
    shortSummary:
      'Nhà bác học uyên bác từng du học tại Pháp (Sorbonne) và Anh (Oxford), Hiệu trưởng trường Đại học Bách khoa Hà Nội, Bộ trưởng đầu tiên của Bộ Đại học và Trung học chuyên nghiệp (1965–1976), người định hình nền giáo dục đại học và khoa học kỹ thuật Việt Nam.',
    educationAndTeachingJourney: [
      'Đỗ đầu kỳ thi Tú tài bản xứ và Tú tài Tây (1929), du học toán lý tại Đại học Sorbonne, Bordeaux (Pháp) và nghiên cứu vật lý lượng tử tại Oxford (Anh).',
      'Trở về nước dạy học tại Huế, truyền thụ kiến thức khoa học hiện đại và ngoại ngữ cho nhiều thanh niên trí thức.',
      'Từ năm 1956, trực tiếp xây dựng Trường Đại học Bách khoa Hà Nội và từ 1965 làm Bộ trưởng Bộ Đại học & Trung học chuyên nghiệp, tổ chức đào tạo hàng vạn kỹ sư, nhà khoa học trong nước và gửi lưu học sinh đi đào tạo ở nước ngoài để chuẩn bị tái thiết đất nước.'
    ],
    milestones: [
      {
        year: '1910',
        title: 'Sinh tại làng Hoành Sơn, Nam Đàn, Nghệ An',
        description: 'Thân phụ là nhà giáo Tạ Quang Diễm — một nhà Nho tân học mẫu mực.',
        location: 'Nghệ An'
      },
      {
        year: '1956 – 1961',
        title: 'Hiệu trưởng Trường Đại học Bách khoa Hà Nội',
        description: 'Xây dựng trường đại học kỹ thuật trọng điểm đầu tiên của Việt Nam.',
        location: 'Hà Nội'
      },
      {
        year: '1965 – 1976',
        title: 'Bộ trưởng Bộ Đại học và Trung học chuyên nghiệp',
        description: 'Hoạch định chiến lược phát triển các ngành khoa học mũi nhọn (Toán, Lý, Tin học, Điều khiển học) ngay trong những năm chiến tranh.',
        location: 'Hà Nội'
      }
    ],
    contributions: [
      'Xây dựng mạng lưới các trường đại học kỹ thuật, khoa học cơ bản của Việt Nam và khởi xướng đào tạo các ngành mũi nhọn như Toán ứng dụng, Tin học, Vật lý hạt nhân từ rất sớm.',
      'Tác giả cuốn sách triết lý khoa học nổi tiếng "Sống" (1936), kết nối vật lý lượng tử, sinh học với triết học phương Đông.',
      'Giải thưởng Tạ Quang Bửu ngày nay trở thành giải thưởng danh giá nhất của Bộ Khoa học và Công nghệ dành cho các nhà khoa học nghiên cứu cơ bản xuất sắc.'
    ],
    educationalPhilosophy:
      'Giáo dục đại học phải rèn luyện năng lực tự học, tự nghiên cứu độc lập và dám đi thẳng vào những vấn đề hiện đại nhất của khoa học thế giới.',
    lessonsForToday: [
      'Khả năng tự học ngoại ngữ và cập nhật tri thức liên ngành không ngừng nghỉ.',
      'Tầm nhìn đi trước thời đại: chuẩn bị nguồn nhân lực khoa học công nghệ chất lượng cao cho tương lai đất nước.',
      'Học thật, thi thật, nghiên cứu thật — nền tảng của tự chủ học thuật đại học.'
    ],
    documentedQuotes: [
      {
        quote: 'Cái quý nhất của giáo dục đại học không phải là nhồi nhét cho sinh viên thật nhiều kiến thức có sẵn, mà là dạy cho họ phương pháp tự học suốt đời và bản lĩnh giải quyết những bài toán mới.',
        contextAndSource: 'Tư tưởng giáo dục đại học — GS. Tạ Quang Bửu'
      }
    ],
    relatedArchiveIds: ['arc-mu-rom-di-hoc'],
    relatedEducatorIds: ['nguyen-van-huyen', 'hoang-tuy'],
    references: [
      {
        id: 'ref-tqb-1',
        title: 'Giáo sư Tạ Quang Bửu — Con người và Sự nghiệp',
        authorOrOrg: 'Đại học Bách khoa Hà Nội & NXB Khoa học Kỹ thuật',
        year: '2000',
        type: 'book',
        verified: true
      }
    ],
    suggestedQuestions: [
      'Vì sao GS. Tạ Quang Bửu được coi là kiến trúc sư của nền giáo dục đại học và khoa học kỹ thuật Việt Nam hiện đại?',
      'Quan điểm của GS. Tạ Quang Bửu về "tự học" ở bậc đại học có ý nghĩa gì với sinh viên ngày nay?'
    ],
    portraitStyle: {
      bgPrimary: '#0F1E2E',
      bgSecondary: '#1C3B57',
      accentColor: '#CCA452',
      attireType: 'academic_gown',
      symbolIcon: 'globe',
      inscription: 'KHOA HỌC'
    }
  },
  {
    id: 'hoang-tuy',
    fullName: 'Hoàng Tụy',
    alternateNames: ['GS. TS. Hoàng Tụy'],
    honorificTitle: 'Cha Đẻ Lý Thuyết Tối Ưu Toàn Cục & Nhà Giáo Đau Đáu Vì Cải Cách Giáo Dục',
    birthDeathYears: '1927 – 2019',
    hometown: 'Điện Quang, Điện Bàn, Quảng Nam',
    region: 'Trung Bộ',
    primaryRoomId: 'room-3',
    secondaryRoomIds: ['room-4'],
    eraLabel: 'Nửa sau Thế kỷ XX – Đầu Thế kỷ XXI',
    fields: ['Toán học ứng dụng (Tối ưu toàn cục)', 'Giáo dục đại học', 'Phản biện chính sách giáo dục'],
    themes: ['Tự học vượt khó', 'Trí thức trung thực và dấn thân', 'Toán học phục vụ đời sống thực tiễn'],
    verificationStatus: 'verified',
    shortSummary:
      'Nhà toán học lỗi lạc của thế giới, cha đẻ của chuyên ngành Tối ưu toàn cục (Global Optimization) với khái niệm "Lát cắt Tụy" (Tuy’s Cut, 1964); đồng thời là một nhà giáo mẫu mực, người dành trọn tâm huyết đóng góp cho công cuộc đổi mới giáo dục Việt Nam.',
    educationAndTeachingJourney: [
      'Do sức khỏe yếu và hoàn cảnh chiến tranh, ông tự học hoàn toàn chương trình trung học và đại học toán, đỗ đầu kỳ thi Tú tài toàn phần rồi dạy học tại Đà Nẵng và Liên khu V.',
      'Năm 1951, vượt đường rừng từ Liên khu V ra Việt Bắc dạy tại Khu học xá Trung ương, sau đó xây dựng Khoa Toán Trường Đại học Tổng hợp Hà Nội.',
      'Năm 1964, công bố bài báo lịch sử khai sinh lý thuyết Tối ưu toàn cục hiện đại; cùng GS. Lê Văn Thiêm và GS. Tạ Quang Bửu đặt nền móng cho nền Toán học Việt Nam vươn tầm quốc tế.'
    ],
    milestones: [
      {
        year: '1927',
        title: 'Sinh tại làng Xuân Đài, Điện Bàn, Quảng Nam',
        description: 'Chắt nội của danh thần Hoàng Diệu.',
        location: 'Quảng Nam'
      },
      {
        year: '1964',
        title: 'Công bố "Lát cắt Tụy" (Tuy’s Cut) khai sinh Tối ưu toàn cục',
        description: 'Công trình đăng trên tạp chí Viện Hàn lâm Khoa học Liên Xô, mở ra một hướng nghiên cứu mới của toán học thế giới.',
        location: 'Hà Nội – Moscow'
      },
      {
        year: '2011',
        title: 'Nhận Giải thưởng Constantin Carathéodory đầu tiên trên thế giới',
        description: 'Vinh danh đóng góp tiên phong của ông cho lĩnh vực Tối ưu toàn cục quốc tế.',
        location: 'Quốc tế'
      }
    ],
    contributions: [
      'Đặt nền móng cho ngành Toán ứng dụng và Vận trù học tại Việt Nam (áp dụng phương pháp toán học vào quy hoạch giao thông, sản xuất ngay trong thời chiến).',
      'Đào tạo nhiều thế hệ nhà toán học Việt Nam đạt trình độ quốc tế.',
      'Viết hàng trăm bài tiểu luận tâm huyết về cải cách giáo dục, tự chủ đại học và sự trung thực trong khoa học.'
    ],
    educationalPhilosophy:
      'Khoa học và giáo dục phải đặt nền tảng trên sự trung thực tuyệt đối, tư duy độc lập và khát vọng giải quyết những bài toán thực chất của con người.',
    lessonsForToday: [
      'Tấm gương tự học phi thường vượt qua bệnh tật và thiếu thốn sách vở.',
      'Trách nhiệm phản biện xây dựng của người trí thức – nhà giáo đối với nền giáo dục nước nhà.',
      'Nghiên cứu khoa học đỉnh cao hoàn toàn có thể bắt đầu từ những bài toán thực tiễn của đất nước.'
    ],
    documentedQuotes: [
      {
        quote: 'Giáo dục trước hết phải là một môi trường trung thực. Không có sự trung thực thì mọi bằng cấp hay thành tích đều chỉ là hư danh.',
        contextAndSource: 'Trích tuyển tập tiểu luận giáo dục "Xin được nói thẳng" — GS. Hoàng Tụy'
      }
    ],
    relatedArchiveIds: ['arc-mu-rom-di-hoc'],
    relatedEducatorIds: ['ta-quang-buu', 'van-nhu-cuong'],
    references: [
      {
        id: 'ref-ht-1',
        title: 'Hoàng Tụy — Nhà toán học tiên phong và người trí thức dấn thân',
        authorOrOrg: 'Viện Toán học Việt Nam & NXB Tri Thức',
        year: '2019',
        type: 'academic_paper',
        verified: true
      }
    ],
    suggestedQuestions: [
      'Khái niệm "Lát cắt Tụy" (Tuy’s Cut) đã đóng góp gì cho toán học thế giới?',
      'Con đường tự học thời trẻ của GS. Hoàng Tụy truyền cảm hứng gì cho người học hôm nay?'
    ],
    portraitStyle: {
      bgPrimary: '#141E28',
      bgSecondary: '#243B53',
      accentColor: '#DFC17B',
      attireType: 'academic_gown',
      symbolIcon: 'chalkboard',
      inscription: 'TRUNG THỰC'
    }
  },
  {
    id: 'nguyen-ngoc-ky',
    fullName: 'Nguyễn Ngọc Ký',
    alternateNames: ['Nhà giáo Ưu tú Nguyễn Ngọc Ký'],
    honorificTitle: 'Nhà Giáo Ưu Tú — Huyền Thoại "Bàn Chân Kỳ Diệu" Của Giáo Dục Việt Nam',
    birthDeathYears: '1947 – 2022',
    hometown: 'Hải Thanh, Hải Hậu, Nam Định',
    region: 'Bắc Bộ',
    primaryRoomId: 'room-4',
    eraLabel: '1970 – 2022 (Thống nhất & Đổi mới)',
    fields: ['Sư phạm Ngữ văn', 'Giáo dục truyền cảm hứng', 'Văn học thiếu nhi & Tự truyện'],
    themes: ['Vượt lên số phận', 'Không có gì là không thể', 'Tình yêu nghề giáo mãnh liệt'],
    verificationStatus: 'verified',
    shortSummary:
      'Bị liệt cả hai tay từ năm lên 4 tuổi do cơn sốt bại liệt, cậu bé Nguyễn Ngọc Ký đã kiên trì tập viết bằng đôi chân, hai lần được Chủ tịch Hồ Chí Minh tặng Huy hiệu, tốt nghiệp Khoa Ngữ văn Đại học Tổng hợp Hà Nội và trở thành Nhà giáo Ưu tú truyền cảm hứng cho hàng triệu học sinh Việt Nam.',
    educationAndTeachingJourney: [
      'Năm 1951 (4 tuổi), bị liệt cả hai tay nhưng quyết không đầu hàng số phận; kiên trì luyện kẹp viên gạch, chiếc que rồi cây bút vào ngón chân để tập viết đến bật máu.',
      'Đạt giải Năm kỳ thi Học sinh giỏi Toán toàn miền Bắc (1963), hai lần vinh dự nhận Huy hiệu của Bác Hồ (1962, 1963) và tốt nghiệp Khoa Ngữ văn Trường Đại học Tổng hợp Hà Nội (1970) ngay trong những năm sơ tán chống Mỹ.',
      'Nghe theo lời khuyên của cố Thủ tướng Phạm Văn Đồng, ông trở về quê hương Hải Hậu (Nam Định) làm thầy giáo dạy Văn, dùng chính đôi chân để kẹp phấn viết bảng, soạn giáo án và chấm bài suốt hàng chục năm.'
    ],
    milestones: [
      {
        year: '1954 – 1963',
        title: 'Hành trình tập viết bằng chân & Nhận 2 Huy hiệu Bác Hồ',
        description: 'Vượt qua những cơn đau rút cơ để viết chữ đẹp và đạt giải học sinh giỏi Toán toàn miền Bắc.',
        location: 'Hải Hậu, Nam Định'
      },
      {
        year: '1970',
        title: 'Tốt nghiệp Khoa Ngữ văn Đại học Tổng hợp Hà Nội & Bước lên bục giảng',
        description: 'Khởi đầu sự nghiệp trồng người tại quê hương Hải Hậu với những trang giáo án viết bằng chân.',
        location: 'Hà Nội – Nam Định'
      },
      {
        year: '1992',
        title: 'Được phong tặng danh hiệu Nhà giáo Ưu tú',
        description: 'Ghi nhận những đóng góp xuất sắc cho sự nghiệp sư phạm và truyền cảm hứng sống đẹp cho thế hệ trẻ.',
        location: 'Toàn quốc'
      }
    ],
    contributions: [
      'Hồi ký "Tôi đi học", "Tôi học đại học", "Tâm huyết trao đời" trở thành những cuốn sách gối đầu giường nuôi dưỡng ý chí vượt khó của nhiều thế hệ học trò Việt Nam.',
      'Sáng tạo phương pháp dạy học Văn sinh động bằng đồ dùng trực quan cắt dán bằng đôi chân.',
      'Thực hiện hơn 1.500 buổi giao lưu truyền lửa nghị lực tại các trường học trên khắp cả nước ngay cả khi phải chạy thận nhân tạo cuối đời.'
    ],
    educationalPhilosophy:
      '"Hãy đừng để một phút nào của tuổi trẻ trôi đi hoài phí" — Người thầy dạy học trò không chỉ bằng bài giảng trên bảng mà bằng chính nghị lực sống không bao giờ bỏ cuộc.',
    lessonsForToday: [
      'Ý chí con người có thể chiến thắng mọi nghịch cảnh thể chất.',
      'Tình yêu thương của thầy cô và bạn bè thuở thiếu thời có sức mạnh nâng đỡ cuộc đời một học sinh khuyết tật.',
      'Mỗi giờ lên lớp là một sự tận hiến trọn vẹn với nghề.'
    ],
    documentedQuotes: [
      {
        quote: 'Tôi đón nhận nghịch cảnh như một thử thách của số phận và dùng đôi chân của mình để viết nên ước mơ đứng trên bục giảng.',
        contextAndSource: 'Hồi ký "Tôi đi học" — Nhà giáo Ưu tú Nguyễn Ngọc Ký'
      }
    ],
    relatedArchiveIds: ['arc-toi-di-hoc-nnk'],
    relatedEducatorIds: ['van-nhu-cuong', 'co-giao-vung-cao'],
    references: [
      {
        id: 'ref-nnk-1',
        title: 'Hồi ký "Tôi đi học" & "Tôi học đại học"',
        authorOrOrg: 'Nguyễn Ngọc Ký — NXB Kim Đồng & NXB Trẻ',
        year: '1970',
        type: 'book',
        verified: true
      }
    ],
    suggestedQuestions: [
      'Hành trình tập viết bằng chân và bước lên bục giảng của thầy Nguyễn Ngọc Ký diễn ra như thế nào?',
      'Vì sao cuốn hồi ký "Tôi đi học" của thầy Nguyễn Ngọc Ký lại có sức sống bền bỉ qua nhiều thế hệ học sinh?'
    ],
    portraitStyle: {
      bgPrimary: '#1E1A17',
      bgSecondary: '#3D312A',
      accentColor: '#DFC17B',
      attireType: 'contemporary_teacher',
      symbolIcon: 'chalkboard',
      inscription: 'NGHỊ LỰC'
    }
  },
  {
    id: 'van-nhu-cuong',
    fullName: 'Văn Như Cương',
    alternateNames: ['PGS. TS. Văn Như Cương'],
    honorificTitle: 'Người Thầy Đổi Mới Sư Phạm & Khai Mở Mô Hình Trường Dân Lập Chất Lượng Cao',
    birthDeathYears: '1937 – 2017',
    hometown: 'Quỳnh Đôi, Quỳnh Lưu, Nghệ An',
    region: 'Bắc Bộ',
    primaryRoomId: 'room-4',
    eraLabel: '1960 – 2017 (Đổi mới Giáo dục)',
    fields: ['Hình học phổ thông & Đại học', 'Biên soạn sách giáo khoa', 'Quản trị trường học nhân văn'],
    themes: ['Trước hết phải là người tử tế', 'Tiên phong xã hội hóa giáo dục', 'Thầy giáo gần gũi, hóm hỉnh và bao dung'],
    verificationStatus: 'verified',
    shortSummary:
      'Phó Giáo sư, Tiến sĩ Toán học, tác giả bộ sách giáo khoa Hình học phổ thông quen thuộc với hàng triệu học sinh Việt Nam; người sáng lập trường THPT Dân lập Lương Thế Vinh (Hà Nội, 1989) — ngôi trường dân lập đầu tiên của cả nước thời kỳ Đổi mới.',
    educationAndTeachingJourney: [
      'Sinh ra tại làng khoa bảng Quỳnh Đôi (Nghệ An), tốt nghiệp Khoa Toán Đại học Sư phạm Hà Nội và bảo vệ luận án Phó Tiến sĩ Toán học tại Viện Toán học Steklov (Liên Xô, 1971).',
      'Giảng viên Đại học Sư phạm Hà Nội, chủ biên và tác giả nhiều bộ sách giáo khoa, sách bài tập Hình học phổ thông và đại học.',
      'Năm 1989, tiên phong thành lập Trường THPT Dân lập Lương Thế Vinh (Hà Nội) với phương châm "Dạy thật – Học thật – Thi thật" và giáo dục nhân cách học sinh bằng tình thương yêu kết hợp kỷ cương.'
    ],
    milestones: [
      {
        year: '1937',
        title: 'Sinh tại làng khoa bảng Quỳnh Đôi, Nghệ An',
        description: 'Lớn lên trong truyền thống hiếu học của vùng đất "ông Đồ Nghệ".',
        location: 'Nghệ An'
      },
      {
        year: '1989',
        title: 'Sáng lập Trường THPT Dân lập Lương Thế Vinh (Hà Nội)',
        description: 'Ngôi trường phổ thông dân lập đầu tiên của Việt Nam thời kỳ Đổi mới, mở đường cho chủ trương xã hội hóa giáo dục.',
        location: 'Hà Nội'
      },
      {
        year: '1990 – 2017',
        title: 'Chủ biên SGK Hình học & Truyền cảm hứng giáo dục nhân cách',
        description: 'Những lời dặn dò học sinh mỗi mùa khai giảng và chia tay tuổi học trò của thầy trở thành thông điệp giáo dục sâu sắc toàn xã hội.',
        location: 'Hà Nội'
      }
    ],
    contributions: [
      'Đóng góp lớn trong việc biên soạn chương trình và sách giáo khoa Hình học phổ thông Việt Nam qua nhiều thập kỷ.',
      'Tiên phong xây dựng mô hình trường phổ thông ngoài công lập chất lượng cao, kỷ cương và giàu tính nhân văn.',
      'Lan tỏa triết lý giáo dục gần gũi, thẳng thắn, đặt việc rèn luyện sự tử tế lên hàng đầu.'
    ],
    educationalPhilosophy:
      '"Các em có thể trở thành những người lao động chân chính, những nhà khoa học, những kỹ sư... nhưng trước hết phải là một người tử tế."',
    lessonsForToday: [
      'Mục tiêu cốt lõi của giáo dục phổ thông là đào tạo những công dân tử tế, trung thực và có trách nhiệm.',
      'Sự kết hợp hài hòa giữa kỷ luật nghiêm minh ("học thật, thi thật") với trái tim ấm áp, bao dung của người thầy.',
      'Dám đổi mới, dám tiên phong mở lối cho những mô hình giáo dục tiến bộ.'
    ],
    documentedQuotes: [
      {
        quote: 'Biển học mênh mông, sách vở tuy quan trọng nhưng cũng chỉ là những vùng biển gần bờ mà thôi. Các em phải học cách tự chèo lái con thuyền tri thức của mình.',
        contextAndSource: 'Thư gửi học sinh nhân lễ khai giảng — PGS. Văn Như Cương'
      },
      {
        quote: 'Ai cũng vào đại học thì ai sẽ làm thợ giỏi? Quan trọng nhất là dù làm nghề gì, các em trước hết phải là những người tử tế.',
        contextAndSource: 'Bài phát biểu tại Lễ khai giảng trường THPT Lương Thế Vinh'
      }
    ],
    relatedArchiveIds: ['arc-sgk-hinh-hoc'],
    relatedEducatorIds: ['hoang-tuy', 'nguyen-ngoc-ky'],
    references: [
      {
        id: 'ref-vnc-1',
        title: 'Tư liệu Giáo dục & Di sản PGS. TS. Văn Như Cương',
        authorOrOrg: 'NXB Giáo dục Việt Nam & Trường Lương Thế Vinh',
        year: '2017',
        type: 'archive',
        verified: true
      }
    ],
    suggestedQuestions: [
      'Thông điệp "Trước hết phải là người tử tế" của thầy Văn Như Cương có ý nghĩa gì trong bối cảnh giáo dục hiện đại?',
      'Sự ra đời của trường Dân lập Lương Thế Vinh năm 1989 đánh dấu bước chuyển mình nào của giáo dục Việt Nam thời kỳ Đổi mới?'
    ],
    portraitStyle: {
      bgPrimary: '#1A2421',
      bgSecondary: '#2C423B',
      accentColor: '#DFC17B',
      attireType: 'contemporary_teacher',
      symbolIcon: 'chalkboard',
      inscription: 'TỬ TẾ'
    }
  },
  {
    id: 'co-giao-vung-cao',
    fullName: 'Biểu Tượng Các Thầy Cô Cắm Bản & Tiên Phong Thời Đại Số',
    alternateNames: ['Những Người Thầy "Cõng Chữ Lên Non"', 'Nhà Giáo Kỷ Nguyên Số & Hội Nhập'],
    honorificTitle: 'Tôn Vinh Hàng Triệu Nhà Giáo Thầm Lặng Nơi Biên Cương, Hải Đảo & Đổi Mới Sáng Tạo',
    birthDeathYears: 'Thế kỷ XXI — Đương đại',
    hometown: 'Khắp mọi miền Tổ quốc (Từ đỉnh núi Tây Bắc, Tây Nguyên đến Trường Sa)',
    region: 'Toàn quốc',
    primaryRoomId: 'room-5',
    eraLabel: 'Thời kỳ Đương đại (Chuyển đổi số & Hội nhập Quốc tế)',
    fields: ['Giáo dục vùng cao & Hải đảo', 'Chuyển đổi số & Công nghệ giáo dục (EdTech)', 'Hội nhập giáo dục toàn cầu'],
    themes: ['Cõng chữ lên non', 'Lớp học không biên giới', 'Giữ lửa nghề giáo trong kỷ nguyên AI'],
    verificationStatus: 'verified',
    shortSummary:
      'Tượng đài tập thể tôn vinh những người thầy, người cô đang ngày đêm băng rừng lội suối mang con chữ đến các điểm trường vùng cao, biên giới, hải đảo (Trường Sa), cùng thế hệ nhà giáo Việt Nam năng động đưa lớp học vượt biên giới qua công nghệ số và hội nhập quốc tế.',
    educationAndTeachingJourney: [
      'Tại các điểm trường vùng cao Hà Giang, Điện Biên, Lai Châu, Kon Tum hay đảo Trường Sa: hàng vạn thầy cô giáo trẻ chấp nhận xa gia đình, vượt đường đèo sạt lở để vận động từng học sinh ra lớp, nấu từng bữa cơm bán trú giữ chân học trò.',
      'Tại các đô thị và vùng nông thôn đổi mới: các thầy cô tiên phong ứng dụng lớp học kết nối xuyên biên giới, phòng thí nghiệm STEM, trí tuệ nhân tạo (AI) để giúp học sinh Việt Nam giao lưu cùng học sinh toàn cầu (như các nhà giáo Việt Nam lọt Top 10, Top 50 Giáo viên Toàn cầu - Global Teacher Prize).',
      'Giữ trọn ngọn lửa "Tất cả vì học sinh thân yêu" — nối dài mạch nguồn truyền thống từ Quốc Tử Giám nghìn năm trước tới kỷ nguyên số hôm nay.'
    ],
    milestones: [
      {
        year: '20/11/1982',
        title: 'Chính thức lấy ngày 20/11 làm Ngày Nhà giáo Việt Nam',
        description: 'Hội đồng Bộ trưởng ban hành Quyết định số 167-HĐBT tôn vinh các thế hệ nhà giáo trên toàn quốc.',
        location: 'Toàn quốc'
      },
      {
        year: '2013 – Nay',
        title: 'Đổi mới căn bản, toàn diện Giáo dục & Chuyển đổi số quốc gia',
        description: 'Chuyển từ truyền thụ kiến thức một chiều sang phát triển phẩm chất và năng lực người học.',
        location: 'Toàn quốc'
      },
      {
        year: '2020 – Nay',
        title: 'Giáo viên Việt Nam tỏa sáng tại Giải thưởng Giáo viên Toàn cầu (Global Teacher Prize)',
        description: 'Mô hình "Lớp học xuyên biên giới" giúp học sinh vùng dân tộc thiểu số tự tin giao tiếp với thế giới.',
        location: 'Việt Nam & Quốc tế'
      }
    ],
    contributions: [
      'Xóa khoảng cách tiếp cận tri thức giữa miền xuôi và miền ngược, biên giới, hải đảo thông qua sự hy sinh thầm lặng của các thầy cô cắm bản.',
      'Đưa công nghệ số, học liệu mở và phương pháp sư phạm tích cực vào từng tiết học.',
      'Bảo tồn ngôn ngữ, văn hóa các dân tộc Việt Nam song hành với việc trang bị kỹ năng công dân toàn cầu.'
    ],
    educationalPhilosophy:
      'Dù công nghệ và trí tuệ nhân tạo phát triển đến đâu, trái tim yêu thương, sự thấu cảm và ngọn lửa truyền cảm hứng của người thầy vẫn là linh hồn không thể thay thế của giáo dục.',
    lessonsForToday: [
      'Tri ân những hy sinh thầm lặng của các thầy cô giáo nơi vùng sâu, vùng xa, biên giới và hải đảo.',
      'Làm chủ công nghệ số để thu hẹp khoảng cách giáo dục giữa các vùng miền.',
      'Giữ gìn đạo lý "Tôn sư trọng đạo" như sợi dây gắn kết cội nguồn dân tộc trong thời đại toàn cầu hóa.'
    ],
    documentedQuotes: [
      {
        quote: 'Dưới ánh mặt trời không có nghề nào cao quý hơn nghề dạy học — và nơi nào còn có bước chân người thầy, nơi đó có ánh sáng của hy vọng và tương lai.',
        contextAndSource: 'Lời tri ân tại Không gian Tôn vinh Nhà giáo Đương đại'
      }
    ],
    relatedArchiveIds: ['arc-lop-hoc-vung-cao'],
    relatedEducatorIds: ['nguyen-ngoc-ky', 'van-nhu-cuong'],
    references: [
      {
        id: 'ref-contemporary-1',
        title: 'Biên niên sử Giáo dục Việt Nam & Chương trình Thay lời tri ân',
        authorOrOrg: 'Bộ Giáo dục và Đào tạo Việt Nam',
        year: '2024',
        type: 'state_record',
        verified: true
      }
    ],
    suggestedQuestions: [
      'Những thầy cô giáo cắm bản vùng cao và hải đảo đã vượt qua những thử thách nào để "gieo chữ"?',
      'Trong thời đại Trí tuệ nhân tạo (AI), vai trò của người thầy thay đổi và giữ vững những giá trị cốt lõi nào?'
    ],
    portraitStyle: {
      bgPrimary: '#0F2027',
      bgSecondary: '#203A43',
      accentColor: '#DFC17B',
      attireType: 'contemporary_teacher',
      symbolIcon: 'globe',
      inscription: 'GIEO CHỮ'
    }
  }
];
