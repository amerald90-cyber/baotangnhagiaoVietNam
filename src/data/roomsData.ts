import { ExhibitionRoom } from '../types/museum';

export const EXHIBITION_ROOMS: ExhibitionRoom[] = [
  {
    id: 'main-hall',
    code: 'SẢNH TRUNG TÂM',
    name: 'Đại Sảnh Danh Sư — Ngọn Đuốc Tri Thức Ngàn Năm',
    shortName: 'Đại Sảnh Trung Tâm',
    periodRange: 'Xuyên suốt lịch sử dân tộc',
    subtitle: 'Không gian khởi đầu kết nối 6 thời kỳ lịch sử giáo dục Việt Nam từ Văn Miếu – Quốc Tử Giám đến Kỷ nguyên Số',
    curatorialStatement:
      'Đại sảnh được thiết kế theo cảm hứng Khuê Văn Các (Sao Khuê tỏa sáng văn hiến) kết hợp vòm tròn trống đồng Đông Sơn. Từ tâm điểm này, khách tham quan có thể xoay 360° để chiêm ngưỡng bức phù điêu "Tôn Sư Trọng Đạo", Bia Tiến sĩ Quốc Tử Giám và bước qua 6 cổng không gian dẫn vào từng thời kỳ lịch sử.',
    historicalNote:
      'Truyền thống hiếu học và tôn sư trọng đạo là mạch nguồn bền bỉ nhất tạo nên bản sắc văn hiến Việt Nam suốt hơn một thiên niên kỷ qua.',
    verificationStatus: 'verified',
    wallColorTop: '#0F1A2E',
    wallColorBottom: '#1C2E4A',
    floorColor: '#19130E',
    ceilingColor: '#070C17',
    accentColor: '#DFC17B',
    architecturalMotif: 'grand_rotunda',
    floorPlanPos: { x: 50, y: 52 },
    connectedRoomIds: ['room-1', 'room-2', 'room-3', 'room-4', 'room-5', 'room-6'],
    hotspots: [
      {
        id: 'hs-main-plaque',
        roomId: 'main-hall',
        type: 'plaque',
        title: 'Bia Chủ Đề: "Hiền Tài Là Nguyên Khí Của Quốc Gia"',
        subtitle: 'Lời văn bia Tiến sĩ khoa Nhâm Tuất (1442) do Thân Nhân Trung soạn năm 1484',
        yaw: 0,
        pitch: 6,
        linkedArchiveId: 'arc-van-mieu-stele',
        description:
          'Tuyên ngôn bất hủ khẳng định vị thế tối thượng của giáo dục và nhân tài đối với sự thịnh suy của đất nước.',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-main-portal-1',
        roomId: 'main-hall',
        type: 'portal',
        title: 'Phòng 1: Thời Kỳ Phong Kiến & Nho Học Khoa Bảng',
        subtitle: 'Thế kỷ XI – Cuối Thế kỷ XIX (Chu Văn An, Nguyễn Bỉnh Khiêm, Lê Quý Đôn...)',
        yaw: -115,
        pitch: -4,
        targetRoomId: 'room-1',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-main-portal-2',
        roomId: 'main-hall',
        type: 'portal',
        title: 'Phòng 2: Giao Thời, Tân Học & Khai Dân Trí',
        subtitle: '1900 – 1945 (Đông Kinh Nghĩa Thục, Trường Dục Thanh, Truyền bá Quốc ngữ)',
        yaw: -60,
        pitch: -4,
        targetRoomId: 'room-2',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-main-portal-3',
        roomId: 'main-hall',
        type: 'portal',
        title: 'Phòng 3: Giáo Dục Kháng Chiến & Kiến Quốc',
        subtitle: '1945 – 1975 (Bình dân học vụ, Nguyễn Văn Huyên, Tạ Quang Bửu, Hoàng Tụy)',
        yaw: 60,
        pitch: -4,
        targetRoomId: 'room-3',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-main-portal-4',
        roomId: 'main-hall',
        type: 'portal',
        title: 'Phòng 4: Thống Nhất, Đổi Mới & Hiện Đại Hóa',
        subtitle: '1975 – Đầu Thế kỷ XXI (Nguyễn Ngọc Ký, Văn Như Cương...)',
        yaw: 115,
        pitch: -4,
        targetRoomId: 'room-4',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-main-portal-5',
        roomId: 'main-hall',
        type: 'portal',
        title: 'Phòng 5: Thời Đại Số, Hội Nhập & Thầy Cô Cắm Bản',
        subtitle: 'Thế kỷ XXI — "Cõng chữ lên non" & Lớp học xuyên biên giới',
        yaw: 165,
        pitch: -4,
        targetRoomId: 'room-5',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-main-portal-6',
        roomId: 'main-hall',
        type: 'portal',
        title: 'Phòng 6: Không Gian Tưởng Niệm & Tri Ân',
        subtitle: 'Thắp sáng ngọn nến tri ân & Lưu bút gửi người thầy của bạn',
        yaw: -165,
        pitch: -4,
        targetRoomId: 'room-6',
        verificationStatus: 'verified'
      }
    ]
  },
  {
    id: 'room-1',
    code: 'PHÒNG TRƯNG BÀY 01',
    name: 'Nền Tảng Nho Học, Quốc Tử Giám & Bậc Danh Sư Khoa Bảng',
    shortName: 'I. Thời Phong Kiến (TK XI–XIX)',
    periodRange: '1070 – 1899',
    subtitle: 'Từ Quốc Tử Giám (1076) đến những ngôi trường làng nuôi dưỡng cốt cách kẻ sĩ Việt Nam',
    curatorialStatement:
      'Không gian tái hiện kiến trúc gỗ lim sơn son thếp vàng của Văn Miếu – Quốc Tử Giám và thư phòng truyền thống. Tại đây trưng bày chân dung và di cảo của 5 bậc đại sư tiêu biểu từ thời Trần, Lê – Mạc, Tây Sơn đến cuối thế kỷ XIX.',
    historicalNote:
      'Năm 1070 vua Lý Thánh Tông dựng Văn Miếu; năm 1076 vua Lý Nhân Tông lập Quốc Tử Giám — trường đại học quốc gia đầu tiên của Việt Nam. Bên cạnh trường công của triều đình, mạng lưới trường tư của các danh sư như Chu Văn An, Nguyễn Bỉnh Khiêm, Nguyễn Đình Chiểu đã đưa đạo học thấm sâu vào làng xã.',
    verificationStatus: 'verified',
    wallColorTop: '#24140E',
    wallColorBottom: '#3B2219',
    floorColor: '#1A0F0A',
    ceilingColor: '#120A07',
    accentColor: '#DFC17B',
    architecturalMotif: 'temple_pillars',
    floorPlanPos: { x: 20, y: 24 },
    connectedRoomIds: ['main-hall', 'room-2'],
    hotspots: [
      {
        id: 'hs-r1-cva',
        roomId: 'room-1',
        type: 'portrait',
        title: 'Vạn Thế Sư Biểu Chu Văn An (1292–1370)',
        subtitle: 'Tư nghiệp Quốc Tử Giám • Tác giả "Tứ thư thuyết ước"',
        yaw: -72,
        pitch: 5,
        linkedEducatorId: 'chu-van-an',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r1-nbk',
        roomId: 'room-1',
        type: 'portrait',
        title: 'Tuyết Giang Phu Tử Nguyễn Bỉnh Khiêm (1491–1585)',
        subtitle: 'Trạng Trình • Người thầy của những bậc hiền tài thế kỷ XVI',
        yaw: -34,
        pitch: 5,
        linkedEducatorId: 'nguyen-binh-khiem',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r1-lqd',
        roomId: 'room-1',
        type: 'portrait',
        title: 'Bác Học Danh Sư Lê Quý Đôn (1726–1784)',
        subtitle: 'Tam nguyên Bảng nhãn • Tư tưởng Thực học & Bách khoa thư',
        yaw: 0,
        pitch: 6,
        linkedEducatorId: 'le-quy-don',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r1-nt',
        roomId: 'room-1',
        type: 'portrait',
        title: 'La Sơn Phu Tử Nguyễn Thiếp (1723–1804)',
        subtitle: 'Viện trưởng Sùng Chính Thư Viện • Cải cách chữ Nôm thời Tây Sơn',
        yaw: 36,
        pitch: 5,
        linkedEducatorId: 'nguyen-thiep',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r1-ndc',
        roomId: 'room-1',
        type: 'portrait',
        title: 'Thầy Đồ Nguyễn Đình Chiểu (1822–1888)',
        subtitle: 'Danh nhân Văn hóa UNESCO • Ngọn đuốc đạo nghĩa đất Nam Bộ',
        yaw: 74,
        pitch: 5,
        linkedEducatorId: 'nguyen-dinh-chieu',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r1-arc-1',
        roomId: 'room-1',
        type: 'artifact',
        title: 'Hiện vật: Tấu "Bàn Về Phép Học" (Luận Học Pháp, 1791)',
        subtitle: 'Châu bản cải cách giáo dục của La Sơn Phu Tử Nguyễn Thiếp gửi vua Quang Trung',
        yaw: 118,
        pitch: -2,
        linkedArchiveId: 'arc-ban-ve-phep-hoc',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r1-arc-2',
        roomId: 'room-1',
        type: 'artifact',
        title: 'Hiện vật: Mộc Bản & Tư Liệu "Tứ Thư Thuyết Ước"',
        subtitle: 'Giáo trình Quốc Tử Giám do Tư nghiệp Chu Văn An biên soạn',
        yaw: -118,
        pitch: -2,
        linkedArchiveId: 'arc-tu-thu-thuyet-uoc',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r1-portal-next',
        roomId: 'room-1',
        type: 'portal',
        title: 'Sang Phòng 2: Thời Kỳ Tân Học & Khai Dân Trí (1900–1945)',
        subtitle: 'Bước tới kỷ nguyên chữ Quốc ngữ và Đông Kinh Nghĩa Thục',
        yaw: 155,
        pitch: -6,
        targetRoomId: 'room-2',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r1-portal-main',
        roomId: 'room-1',
        type: 'portal',
        title: 'Trở về Đại Sảnh Danh Sư',
        subtitle: 'Quay lại sảnh trung tâm Bảo tàng',
        yaw: -158,
        pitch: -6,
        targetRoomId: 'main-hall',
        verificationStatus: 'verified'
      }
    ]
  },
  {
    id: 'room-2',
    code: 'PHÒNG TRƯNG BÀY 02',
    name: 'Giao Thời, Tân Học & Khai Dân Trí Đầu Thế Kỷ XX',
    shortName: 'II. Tân Học & Khai Dân Trí (1900–1945)',
    periodRange: '1900 – 1945',
    subtitle: 'Đông Kinh Nghĩa Thục (1907), Trường Dục Thanh (1910), Trường Tư thục Thăng Long & Hội Truyền bá Quốc ngữ',
    curatorialStatement:
      'Không gian mang đường nét kiến trúc giao thoa Á – Âu đầu thế kỷ XX với mái ngói cổ truyền của Trường Dục Thanh (Phan Thiết) và cửa vòm phố Hàng Đào (Hà Nội). Đây là thời kỳ các nhà giáo yêu nước biến bục giảng thành nơi thức tỉnh hồn nước và phổ cập chữ Quốc ngữ.',
    historicalNote:
      'Sự chuyển dịch từ chữ Hán sang chữ Quốc ngữ cùng tinh thần "Khai dân trí, chấn dân khí" của Đông Kinh Nghĩa Thục (1907) và Hội Truyền bá Quốc ngữ (1938–1945) đã tạo tiền đề trí tuệ cho thắng lợi của Cách mạng Tháng Tám 1945.',
    verificationStatus: 'verified',
    wallColorTop: '#1A2430',
    wallColorBottom: '#2B3A4A',
    floorColor: '#1E1914',
    ceilingColor: '#0E141B',
    accentColor: '#CCA452',
    architecturalMotif: 'french_colonial_arch',
    floorPlanPos: { x: 50, y: 16 },
    connectedRoomIds: ['room-1', 'main-hall', 'room-3'],
    hotspots: [
      {
        id: 'hs-r2-lvc',
        roomId: 'room-2',
        type: 'portrait',
        title: 'Thục Trưởng Lương Văn Can (1854–1927)',
        subtitle: 'Người sáng lập Đông Kinh Nghĩa Thục (1907) tại số 10 Hàng Đào',
        yaw: -52,
        pitch: 5,
        linkedEducatorId: 'luong-van-can',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r2-ntt',
        roomId: 'room-2',
        type: 'portrait',
        title: 'Thầy Giáo Nguyễn Tất Thành — Chủ Tịch Hồ Chí Minh',
        subtitle: 'Trường Dục Thanh (Phan Thiết, 1910) & Người khai sáng nền giáo dục mới',
        yaw: 0,
        pitch: 7,
        linkedEducatorId: 'nguyen-tat-thanh-duc-thanh',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r2-dtm',
        roomId: 'room-2',
        type: 'portrait',
        title: 'Giáo Sư Đặng Thai Mai (1902–1984)',
        subtitle: 'Nhà giáo trường Quốc Học Huế, Tư thục Thăng Long & Hội Truyền bá Quốc ngữ',
        yaw: 52,
        pitch: 5,
        linkedEducatorId: 'dang-thai-mai',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r2-arc-dknt',
        roomId: 'room-2',
        type: 'artifact',
        title: 'Tư liệu: "Văn Minh Tân Học Sách" & Sách Giáo Khoa Đông Kinh Nghĩa Thục',
        subtitle: 'Cương lĩnh cải cách giáo dục theo hướng thực học, tân học năm 1907',
        yaw: -105,
        pitch: -2,
        linkedArchiveId: 'arc-dong-kinh-nghia-thuc',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r2-portal-prev',
        roomId: 'room-2',
        type: 'portal',
        title: 'Quay lại Phòng 1: Thời Kỳ Phong Kiến',
        subtitle: 'Trở về không gian Quốc Tử Giám & Khoa bảng',
        yaw: -155,
        pitch: -6,
        targetRoomId: 'room-1',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r2-portal-next',
        roomId: 'room-2',
        type: 'portal',
        title: 'Sang Phòng 3: Giáo Dục Kháng Chiến & Kiến Quốc (1945–1975)',
        subtitle: 'Bình dân học vụ & Xây dựng đại học Việt Nam giữa khói lửa chiến tranh',
        yaw: 150,
        pitch: -6,
        targetRoomId: 'room-3',
        verificationStatus: 'verified'
      }
    ]
  },
  {
    id: 'room-3',
    code: 'PHÒNG TRƯNG BÀY 03',
    name: 'Giáo Dục Kháng Chiến & Kiến Quốc (1945 – 1975)',
    shortName: 'III. Kháng Chiến & Kiến Quốc (1945–1975)',
    periodRange: '1945 – 1975',
    subtitle: 'Từ ánh đèn dầu "Bình dân học vụ" đến những giảng đường đại học dưới tán rừng Việt Bắc và mũ rơm đi học',
    curatorialStatement:
      'Không gian tái hiện hơi ấm của lớp học Bình dân học vụ ban đêm và giảng đường sơ tán bằng tre nứa tại chiến khu. Giữa hoàn cảnh chiến tranh khốc liệt nhất, Việt Nam đã làm nên kỳ tích xóa mù chữ cho hàng triệu người và xây dựng nền giáo dục đại học bằng tiếng mẹ đẻ.',
    historicalNote:
      'Chỉ 6 ngày sau Tuyên ngôn Độc lập (08/09/1945), Chính phủ ban hành Sắc lệnh thành lập Nha Bình dân học vụ. Trong suốt 30 năm kháng chiến (1945–1975), dưới sự chèo lái của Bộ trưởng Nguyễn Văn Huyên và Bộ trưởng Tạ Quang Bửu, hệ thống giáo dục phổ thông và đại học vẫn phát triển không ngừng.',
    verificationStatus: 'verified',
    wallColorTop: '#1B241E',
    wallColorBottom: '#2B382E',
    floorColor: '#191612',
    ceilingColor: '#0E1310',
    accentColor: '#DFC17B',
    architecturalMotif: 'resistance_bamboo',
    floorPlanPos: { x: 80, y: 24 },
    connectedRoomIds: ['room-2', 'main-hall', 'room-4'],
    hotspots: [
      {
        id: 'hs-r3-nvh',
        roomId: 'room-3',
        type: 'portrait',
        title: 'Bộ Trưởng Nguyễn Văn Huyên (1905–1975)',
        subtitle: '29 năm chèo lái Bộ Giáo dục đi qua hai cuộc kháng chiến vĩ đại',
        yaw: -55,
        pitch: 6,
        linkedEducatorId: 'nguyen-van-huyen',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r3-tqb',
        roomId: 'room-3',
        type: 'portrait',
        title: 'Giáo Sư Tạ Quang Bửu (1910–1986)',
        subtitle: 'Người đặt nền móng giáo dục Đại học và Khoa học Kỹ thuật hiện đại',
        yaw: 0,
        pitch: 6,
        linkedEducatorId: 'ta-quang-buu',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r3-ht',
        roomId: 'room-3',
        type: 'portrait',
        title: 'Giáo Sư Hoàng Tụy (1927–2019)',
        subtitle: 'Cha đẻ Lý thuyết Tối ưu toàn cục & Tấm gương tự học vượt khó',
        yaw: 55,
        pitch: 6,
        linkedEducatorId: 'hoang-tuy',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r3-arc-letter',
        roomId: 'room-3',
        type: 'artifact',
        title: 'Bức Thư Gửi Học Sinh Nhân Ngày Khai Trường Đầu Tiên (9/1945)',
        subtitle: 'Bút tích & Lời căn dặn lịch sử của Chủ tịch Hồ Chí Minh',
        yaw: -108,
        pitch: -1,
        linkedArchiveId: 'arc-thu-gui-hoc-sinh-1945',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r3-arc-bdhv',
        roomId: 'room-3',
        type: 'artifact',
        title: 'Hiện vật: Đèn Dầu, Bảng Gỗ & Sách "Bình Dân Học Vụ"',
        subtitle: 'Biểu tượng chiến dịch xóa mù chữ "Diệt giặc dốt" toàn dân',
        yaw: 108,
        pitch: -1,
        linkedArchiveId: 'arc-binh-dan-hoc-vu',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r3-portal-prev',
        roomId: 'room-3',
        type: 'portal',
        title: 'Quay lại Phòng 2: Thời Kỳ Tân Học (1900–1945)',
        subtitle: 'Trở về Đông Kinh Nghĩa Thục & Trường Dục Thanh',
        yaw: -156,
        pitch: -6,
        targetRoomId: 'room-2',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r3-portal-next',
        roomId: 'room-3',
        type: 'portal',
        title: 'Sang Phòng 4: Thống Nhất, Đổi Mới & Hiện Đại Hóa',
        subtitle: 'Hành trình giáo dục sau năm 1975 đến đầu thế kỷ XXI',
        yaw: 156,
        pitch: -6,
        targetRoomId: 'room-4',
        verificationStatus: 'verified'
      }
    ]
  },
  {
    id: 'room-4',
    code: 'PHÒNG TRƯNG BÀY 04',
    name: 'Thống Nhất, Đổi Mới & Những Tấm Gương Nghị Lực Sư Phạm',
    shortName: 'IV. Thống Nhất & Đổi Mới (1975–2010)',
    periodRange: '1975 – 2010',
    subtitle: 'Hàn gắn vết thương chiến tranh, thống nhất hệ thống giáo dục hai miền và khởi xướng công cuộc Đổi mới',
    curatorialStatement:
      'Không gian giảng đường sáng sủa thời kỳ xây dựng đất nước và Đổi mới (từ sau 1986). Tâm điểm của phòng trưng bày là những câu chuyện lay động lòng người về nghị lực phi thường của Nhà giáo Ưu tú Nguyễn Ngọc Ký và tư tưởng giáo dục "Trước hết phải là người tử tế" của PGS. Văn Như Cương.',
    historicalNote:
      'Ngày 20/11/1982, Hội đồng Bộ trưởng chính thức quyết định lấy ngày 20 tháng 11 hằng năm là Ngày Nhà giáo Việt Nam — khẳng định sự tôn vinh của toàn xã hội đối với những "kỹ sư tâm hồn".',
    verificationStatus: 'verified',
    wallColorTop: '#162234',
    wallColorBottom: '#233652',
    floorColor: '#161A22',
    ceilingColor: '#0B121C',
    accentColor: '#DFC17B',
    architecturalMotif: 'modern_hall',
    floorPlanPos: { x: 80, y: 78 },
    connectedRoomIds: ['room-3', 'main-hall', 'room-5'],
    hotspots: [
      {
        id: 'hs-r4-nnk',
        roomId: 'room-4',
        type: 'portrait',
        title: 'Nhà Giáo Ưu Tú Nguyễn Ngọc Ký (1947–2022)',
        subtitle: 'Huyền thoại viết chữ và soạn giáo án bằng đôi chân kỳ diệu',
        yaw: -38,
        pitch: 5,
        linkedEducatorId: 'nguyen-ngoc-ky',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r4-vnc',
        roomId: 'room-4',
        type: 'portrait',
        title: 'PGS. TS. Văn Như Cương (1937–2017)',
        subtitle: 'Tác giả SGK Hình học & Người sáng lập trường dân lập đầu tiên thời Đổi mới',
        yaw: 38,
        pitch: 5,
        linkedEducatorId: 'van-nhu-cuong',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r4-arc-nnk',
        roomId: 'room-4',
        type: 'artifact',
        title: 'Hiện vật: Trang Giáo Án Viết Bằng Chân & Hồi Ký "Tôi Đi Học"',
        subtitle: 'Di vật truyền cảm hứng vượt lên số phận của thầy Nguyễn Ngọc Ký',
        yaw: -98,
        pitch: -2,
        linkedArchiveId: 'arc-toi-di-hoc-nnk',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r4-arc-sgk',
        roomId: 'room-4',
        type: 'artifact',
        title: 'Hiện vật: Bộ Sách Giáo Khoa Hình Học & Compa Gỗ Bục Giảng',
        subtitle: 'Ký ức bao thế hệ học trò Việt Nam cuối thế kỷ XX',
        yaw: 98,
        pitch: -2,
        linkedArchiveId: 'arc-sgk-hinh-hoc',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r4-portal-prev',
        roomId: 'room-4',
        type: 'portal',
        title: 'Quay lại Phòng 3: Giáo Dục Kháng Chiến (1945–1975)',
        subtitle: 'Trở về không gian Bình dân học vụ & Kiến quốc',
        yaw: -155,
        pitch: -6,
        targetRoomId: 'room-3',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r4-portal-next',
        roomId: 'room-4',
        type: 'portal',
        title: 'Sang Phòng 5: Giáo Dục Thời Đại Số & Cắm Bản Vùng Cao',
        subtitle: 'Khám phá bức tranh giáo dục Việt Nam đương đại',
        yaw: 155,
        pitch: -6,
        targetRoomId: 'room-5',
        verificationStatus: 'verified'
      }
    ]
  },
  {
    id: 'room-5',
    code: 'PHÒNG TRƯNG BÀY 05',
    name: 'Giáo Dục Đương Đại: Cõng Chữ Lên Non & Hội Nhập Kỷ Nguyên Số',
    shortName: 'V. Đương Đại & Kỷ Nguyên Số',
    periodRange: 'Thế kỷ XXI — Nay',
    subtitle: 'Nơi những bước chân cắm bản biên cương hòa nhịp cùng những lớp học kết nối toàn cầu',
    curatorialStatement:
      'Phòng trưng bày kết hợp hai mảng đối lập mà thống nhất của giáo dục Việt Nam đương đại: một bên là hình ảnh xúc động của những thầy cô cắm bản vùng cao, hải đảo Trường Sa; một bên là không gian chuyển đổi số, STEM/AI và lớp học xuyên biên giới đưa học sinh Việt Nam hội nhập thế giới.',
    historicalNote:
      'Trong thế kỷ XXI, các nhà giáo Việt Nam không chỉ giữ vững sứ mệnh xóa khoảng cách giáo dục vùng miền mà còn khẳng định trí tuệ sư phạm Việt Nam trên các diễn đàn Giáo viên Toàn cầu (Global Teacher Prize).',
    verificationStatus: 'verified',
    wallColorTop: '#0D212C',
    wallColorBottom: '#16384A',
    floorColor: '#0A161E',
    ceilingColor: '#061017',
    accentColor: '#DFC17B',
    architecturalMotif: 'digital_futuristic',
    floorPlanPos: { x: 50, y: 86 },
    connectedRoomIds: ['room-4', 'main-hall', 'room-6'],
    hotspots: [
      {
        id: 'hs-r5-contemporary',
        roomId: 'room-5',
        type: 'portrait',
        title: 'Tượng Đài Những Người Thầy Cắm Bản & Tiên Phong Thời Đại Số',
        subtitle: 'Từ đỉnh núi sương mù Tây Bắc, đảo Trường Sa đến Lớp học Toàn cầu',
        yaw: 0,
        pitch: 6,
        linkedEducatorId: 'co-giao-vung-cao',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r5-arc-vungcao',
        roomId: 'room-5',
        type: 'artifact',
        title: 'Tư liệu: "Cõng Chữ Lên Non" & Lớp Học Nơi Đảo Xa Trường Sa',
        subtitle: 'Hành trình bám trường, bám bản của hàng vạn giáo viên miền núi và hải đảo',
        yaw: -68,
        pitch: 1,
        linkedArchiveId: 'arc-lop-hoc-vung-cao',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r5-plaque-ai',
        roomId: 'room-5',
        type: 'plaque',
        title: 'Bia Luận Đề: Người Thầy Trong Kỷ Nguyên Trí Tuệ Nhân Tạo (AI)',
        subtitle: 'Công nghệ là đôi cánh, nhưng trái tim người thầy mới là la bàn nhân cách',
        yaw: 68,
        pitch: 2,
        description:
          'Máy móc có thể cá nhân hóa bài tập và tra cứu tri thức tức thì, nhưng chỉ có người thầy mới có thể trao ánh mắt khích lệ, dạy lòng trắc ẩn và truyền ngọn lửa làm người.',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r5-portal-prev',
        roomId: 'room-5',
        type: 'portal',
        title: 'Quay lại Phòng 4: Thời Kỳ Thống Nhất & Đổi Mới',
        subtitle: 'Trở về không gian Nguyễn Ngọc Ký & Văn Như Cương',
        yaw: -152,
        pitch: -6,
        targetRoomId: 'room-4',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r5-portal-next',
        roomId: 'room-5',
        type: 'portal',
        title: 'Sang Phòng 6: Không Gian Tưởng Niệm & Tri Ân',
        subtitle: 'Gửi lời tri ân tới người thầy, người cô trong cuộc đời bạn',
        yaw: 152,
        pitch: -6,
        targetRoomId: 'room-6',
        verificationStatus: 'verified'
      }
    ]
  },
  {
    id: 'room-6',
    code: 'PHÒNG TRƯNG BÀY 06',
    name: 'Điện Tưởng Niệm & Không Gian Tri Ân "Uống Nước Nhớ Nguồn"',
    shortName: 'VI. Không Gian Tri Ân',
    periodRange: 'Muôn đời tri ân',
    subtitle: 'Tưởng niệm các Nhà giáo Liệt sĩ & Bức tường Lưu bút Tri ân gửi tới những người đưa đò thầm lặng',
    curatorialStatement:
      'Không gian trang nghiêm với ánh sáng vàng trầm ấm của hàng ngàn ngọn đăng tri ân. Đây là nơi tưởng niệm hơn 6.000 nhà giáo – liệt sĩ đã ngã xuống vì độc lập tự do của Tổ quốc, đồng thời là nơi mỗi khách tham quan có thể viết và lưu lại lời tri ân gửi đến thầy cô của chính mình.',
    historicalNote:
      '"Muốn sang thì bắc cầu kiều / Muốn con hay chữ thì yêu lấy thầy." Đạo lý ấy kết tinh thành sự gắn kết thiêng liêng giữa các thế hệ người Việt.',
    verificationStatus: 'verified',
    wallColorTop: '#1F1214',
    wallColorBottom: '#331A1D',
    floorColor: '#140B0C',
    ceilingColor: '#0D0708',
    accentColor: '#DFC17B',
    architecturalMotif: 'memorial_sanctuary',
    floorPlanPos: { x: 20, y: 78 },
    connectedRoomIds: ['room-5', 'main-hall', 'room-1'],
    hotspots: [
      {
        id: 'hs-r6-memorial',
        roomId: 'room-6',
        type: 'plaque',
        title: 'Đài Tưởng Niệm Các Nhà Giáo – Liệt Sĩ Việt Nam',
        subtitle: 'Xếp bút nghiên lên đường bảo vệ Tổ quốc và anh dũng hy sinh trên bục giảng thời chiến',
        yaw: 0,
        pitch: 7,
        description:
          'Tưởng nhớ hàng ngàn thầy giáo, cô giáo đã hy sinh trên khắp các chiến trường và ngay tại các lớp học vùng bom đạn để bảo vệ tính mạng học sinh.',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r6-tribute-wall',
        roomId: 'room-6',
        type: 'artifact',
        title: 'Sổ Vàng Tri Ân: "Người Thầy Trong Trái Tim Tôi"',
        subtitle: 'Nhấp để đọc và viết lời tri ân gửi tới thầy cô của bạn',
        yaw: -58,
        pitch: 2,
        linkedArchiveId: 'arc-mu-rom-di-hoc',
        description:
          'Mỗi dòng lưu bút là một đóa hoa tri ân góp vào vườn hoa Tôn sư trọng đạo của Bảo tàng Số.',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r6-portal-main',
        roomId: 'room-6',
        type: 'portal',
        title: 'Trở về Đại Sảnh Danh Sư',
        subtitle: 'Quay lại trung tâm Bảo tàng 360°',
        yaw: 145,
        pitch: -6,
        targetRoomId: 'main-hall',
        verificationStatus: 'verified'
      },
      {
        id: 'hs-r6-portal-r1',
        roomId: 'room-6',
        type: 'portal',
        title: 'Khép Vòng Lịch Sử — Sang Phòng 1 (Khởi nguồn Quốc Tử Giám)',
        subtitle: 'Trở lại cội nguồn văn hiến ngàn năm',
        yaw: -145,
        pitch: -6,
        targetRoomId: 'room-1',
        verificationStatus: 'verified'
      }
    ]
  }
];
