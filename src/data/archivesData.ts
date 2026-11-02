import { ArchiveItem, LearningQuestion, MysteryClueItem, TributeMessage } from '../types/museum';

export const ARCHIVES_DATA: ArchiveItem[] = [
  {
    id: 'arc-van-mieu-stele',
    title: 'Bia Tiến Sĩ Khoa Nhâm Tuất (1442) — "Hiền Tài Là Nguyên Khí Quốc Gia"',
    category: 'archive_doc',
    yearOrPeriod: '1484 (Triều Lê Thánh Tông)',
    authorOrRepository: 'Thân Nhân Trung soạn • Di sản Tư liệu Thế giới UNESCO tại Văn Miếu – Quốc Tử Giám',
    origin: 'Văn Miếu – Quốc Tử Giám, Hà Nội',
    usageRights: 'Tư liệu Di sản Văn hóa Quốc gia đặc biệt & Ký ức Thế giới UNESCO',
    verificationStatus: 'verified',
    description:
      'Tấm bia đá đầu tiên trong 82 bia Tiến sĩ tại Văn Miếu – Quốc Tử Giám, khắc lời khẳng định bất hủ về vai trò của người thầy, việc học và nhân tài đối với vận mệnh đất nước.',
    detailedContent:
      'Năm Hồng Đức thứ 15 (1484), vua Lê Thánh Tông giao cho Hàn lâm viện Thừa chỉ Đông các Đại học sĩ Thân Nhân Trung soạn bài ký đề tên các Tiến sĩ đỗ khoa Nhâm Tuất (1442). Mở đầu bài văn bia là mệnh đề nổi tiếng nhất trong lịch sử giáo dục Việt Nam, trở thành tư tưởng chỉ đạo xuyên suốt hàng trăm năm.',
    ocrTranscript:
      '"Hiền tài là nguyên khí của quốc gia, nguyên khí thịnh thì thế nước mạnh rồi lên cao, nguyên khí suy thì thế nước yếu rồi xuống thấp. Vì vậy các đấng thánh đế minh vương chẳng ai không lấy việc bồi dưỡng nhân tài, kén chọn kẻ sĩ, vun trồng nguyên khí làm việc đầu tiên..."',
    linkedEducatorIds: ['chu-van-an', 'nguyen-binh-khiem', 'le-quy-don'],
    linkedRoomId: 'main-hall',
    keywords: ['Bia Tiến sĩ', 'Văn Miếu', 'Hiền tài', 'Nguyên khí quốc gia', 'Thân Nhân Trung'],
    visualTheme: {
      bgColor: '#1E1A16',
      borderColor: '#DFC17B',
      iconType: 'stele',
      caption: 'Di sản Tư liệu Thế giới UNESCO — 82 Bia Tiến sĩ Văn Miếu'
    }
  },
  {
    id: 'arc-tu-thu-thuyet-uoc',
    title: 'Giáo Trình "Tứ Thư Thuyết Ước" & Thất Trảm Sớ Của Chu Văn An',
    category: 'book_text',
    yearOrPeriod: 'Thế kỷ XIV (Triều Trần)',
    authorOrRepository: 'Tư nghiệp Quốc Tử Giám Chu Văn An • Sử liệu Đại Việt sử ký toàn thư',
    origin: 'Quốc Tử Giám Thăng Long',
    usageRights: 'Tư liệu lịch sử giáo dục cổ đại Việt Nam',
    verificationStatus: 'verified',
    description:
      'Bộ giáo trình tóm lược tinh hoa Tứ thư do chính Tư nghiệp Chu Văn An biên soạn để giảng dạy tại Quốc Tử Giám và trường Huỳnh Cung.',
    detailedContent:
      'Dưới thời vua Trần Minh Tông, Chu Văn An được mời làm Tư nghiệp Quốc Tử Giám. Để giúp học trò nắm bắt cốt lõi đạo học mà không sa vào lối học tầm chương trích cú rườm rà, ông đã biên soạn bộ "Tứ thư thuyết ước" (gồm 10 quyển). Đây được xem là một trong những bộ sách giáo khoa đại học đầu tiên do người Việt biên soạn.',
    ocrTranscript:
      '"Học cốt ở hiểu rõ nghĩa lý để tu thân, tề gia và giúp đời; nếu chỉ học để cầu vinh hiển nơi cửa quyền thì chẳng phải đạo của bậc hiền nho."',
    linkedEducatorIds: ['chu-van-an'],
    linkedRoomId: 'room-1',
    keywords: ['Tứ thư thuyết ước', 'Chu Văn An', 'Quốc Tử Giám', 'Thất trảm sớ'],
    visualTheme: {
      bgColor: '#291B14',
      borderColor: '#CCA452',
      iconType: 'manuscript',
      caption: 'Giáo trình Quốc Tử Giám thời nhà Trần'
    }
  },
  {
    id: 'arc-van-dai-loai-ngu',
    title: 'Bộ Bách Khoa Thư "Vân Đài Loại Ngữ" (1773) — Lê Quý Đôn',
    category: 'book_text',
    yearOrPeriod: '1773 (Thế kỷ XVIII)',
    authorOrRepository: 'Bảng nhãn Lê Quý Đôn • Viện Nghiên cứu Hán Nôm lưu trữ',
    origin: 'Thăng Long, Đại Việt',
    usageRights: 'Di sản thư tịch Hán Nôm quốc gia',
    verificationStatus: 'verified',
    description:
      'Bộ bách khoa toàn thư đầu tiên và đồ sộ nhất của Việt Nam thời phong kiến, phân loại tri thức thành 9 mục từ Vũ trụ, Địa lý, Điển lệ, Văn nghệ đến Vật phẩm tự nhiên.',
    detailedContent:
      'Vân đài loại ngữ gồm 4 quyển (9 mục lớn) được Lê Quý Đôn biên soạn năm 1773. Tác phẩm thể hiện phương pháp làm việc khoa học vượt thời đại: trích dẫn hơn 500 bộ sách kết hợp với quan sát thực địa về thiên văn, thủy văn, nông nghiệp, khoáng sản và văn hóa Việt Nam.',
    ocrTranscript:
      '"Trong trời đất, muôn vật đều có lý của nó. Kẻ sĩ đọc sách không thể chỉ đóng cửa ngâm vịnh mà phải xét đến tận cùng công dụng của sự vật đối với đời sống dân sinh."',
    linkedEducatorIds: ['le-quy-don'],
    linkedRoomId: 'room-1',
    keywords: ['Vân đài loại ngữ', 'Lê Quý Đôn', 'Bách khoa thư', 'Thực học'],
    visualTheme: {
      bgColor: '#1E242B',
      borderColor: '#DFC17B',
      iconType: 'book',
      caption: 'Bách khoa toàn thư 9 chương mục của Bảng nhãn Lê Quý Đôn'
    }
  },
  {
    id: 'arc-ban-ve-phep-hoc',
    title: 'Tấu "Bàn Về Phép Học" (Luận Học Pháp, 1791) — Nguyễn Thiếp',
    category: 'archive_doc',
    yearOrPeriod: 'Tháng 8 năm 1791 (Triều Tây Sơn)',
    authorOrRepository: 'La Sơn Phu Tử Nguyễn Thiếp dâng Hoàng đế Quang Trung',
    origin: 'Phú Xuân – Nghệ An',
    usageRights: 'Tư liệu lịch sử giáo dục quốc gia',
    verificationStatus: 'verified',
    description:
      'Bản kiến nghị cải cách giáo dục lịch sử gồm 3 phần (Quân đức, Dân tâm, Học pháp), đề xuất dạy học tuần tự từ thấp đến cao, dịch sách ra chữ Nôm và kết hợp học với hành.',
    detailedContent:
      'Trong bản tấu gửi vua Quang Trung tháng 8 năm 1791, Nguyễn Thiếp thẳng thắn phê phán lối học chuộng hình thức hòng cầu danh lợi dẫn tới "chúa tầm thường, thần nịnh hót, nước mất nhà tan", đồng thời vạch ra chương trình cải cách giáo dục toàn diện từ trường phủ huyện đến trường tư.',
    ocrTranscript:
      '"Ngọc không mài không thành đồ vật; người không học không biết đạo. Đạo là lẽ đối xử hằng ngày giữa mọi người. Kẻ đi học là học điều ấy... Học rộng rồi tóm lược cho gọn, theo điều học mà làm."',
    linkedEducatorIds: ['nguyen-thiep'],
    linkedRoomId: 'room-1',
    keywords: ['Bàn về phép học', 'Nguyễn Thiếp', 'Quang Trung', 'Chữ Nôm', 'Sùng Chính Thư Viện'],
    visualTheme: {
      bgColor: '#1A2634',
      borderColor: '#DFC17B',
      iconType: 'manuscript',
      caption: 'Châu bản cải cách giáo dục thời Tây Sơn (1791)'
    }
  },
  {
    id: 'arc-luc-van-tien',
    title: 'Mộc Bản Truyện Thơ Nôm "Lục Vân Tiên" & "Ngư Tiều Y Thuật Vấn Đáp"',
    category: 'book_text',
    yearOrPeriod: 'Nửa sau Thế kỷ XIX',
    authorOrRepository: 'Thầy Đồ Nguyễn Đình Chiểu • Bảo tàng Bến Tre & Thư viện Quốc gia',
    origin: 'Gia Định – Ba Tri (Bến Tre)',
    usageRights: 'Di sản Danh nhân Văn hóa Thế giới UNESCO',
    verificationStatus: 'verified',
    description:
      'Tác phẩm thơ Nôm 2.082 câu lục bát của thầy Đồ Chiểu — cuốn sách giáo khoa đạo lý làm người được nhân dân Nam Bộ thuộc lòng và "nói thơ Vân Tiên" qua nhiều thế hệ.',
    detailedContent:
      'Khi đã mù cả hai mắt, thầy Nguyễn Đình Chiểu vừa dạy học vừa đọc cho học trò chép Lục Vân Tiên và Ngư Tiều y thuật vấn đáp (sách dạy nghề thuốc bằng thơ). Qua hình tượng Lục Vân Tiên, Kiều Nguyệt Nga, Hớn Minh, Tử Trực, người thầy mù đã truyền dạy bài học nhân nghĩa, thủy chung và bất khuất.',
    ocrTranscript:
      '"Hỡi trang dẹp loạn rày đâu / Sao không giúp sức đặngầu bình yên? / Kiến nghĩa bất vi vô dũng giả / Lâm nguy bất cứu mạc anh hùng."',
    linkedEducatorIds: ['nguyen-dinh-chieu'],
    linkedRoomId: 'room-1',
    keywords: ['Lục Vân Tiên', 'Nguyễn Đình Chiểu', 'Thơ Nôm', 'Giáo dục đạo lý'],
    visualTheme: {
      bgColor: '#2E1B12',
      borderColor: '#DFC17B',
      iconType: 'book',
      caption: 'Sách giáo khoa đạo đức bằng thơ Nôm của Thầy Đồ Chiểu'
    }
  },
  {
    id: 'arc-dong-kinh-nghia-thuc',
    title: '"Văn Minh Tân Học Sách" & Bộ Sách Giáo Khoa Đông Kinh Nghĩa Thục (1907)',
    category: 'book_text',
    yearOrPeriod: '1907',
    authorOrRepository: 'Lương Văn Can & Ban Tu thư Đông Kinh Nghĩa Thục • Bảo tàng Lịch sử Quốc gia',
    origin: 'Số 10 Hàng Đào, Hà Nội',
    usageRights: 'Tư liệu Bảo tàng Lịch sử Quốc gia Việt Nam',
    verificationStatus: 'verified',
    description:
      'Cương lĩnh cải cách văn hóa – giáo dục đầu thế kỷ XX với 6 con đường khai mở dân trí: dùng chữ Quốc ngữ, hiệu đính sách vở, sửa đổi phép thi, cổ vũ nhân tài, chấn hưng công nghệ và mở tòa báo.',
    detailedContent:
      'Trường Đông Kinh Nghĩa Thục do cụ Cử Lương Văn Can làm Thục trưởng hoạt động tuy chỉ gần 9 tháng (từ tháng 3 đến tháng 11/1907 trước khi bị thực dân Pháp đóng cửa) nhưng đã biên soạn hàng loạt sách giáo khoa tiến bộ như Quốc dân độc bản, Luân lý giáo khoa thư, phát miễn phí cho học viên và mở các buổi bình văn công khai thu hút hàng ngàn người dân.',
    ocrTranscript:
      '"Muốn mở mang dân trí thì trước hết phải dạy chữ Quốc ngữ cho mọi người từ trẻ nhỏ đến người lớn đều đọc thông viết thạo, tiếp thu khoa học kỹ thuật mới của hoàn cầu."',
    linkedEducatorIds: ['luong-van-can', 'dang-thai-mai'],
    linkedRoomId: 'room-2',
    keywords: ['Đông Kinh Nghĩa Thục', 'Lương Văn Can', 'Văn minh tân học sách', 'Chữ Quốc ngữ'],
    visualTheme: {
      bgColor: '#1E2733',
      borderColor: '#CCA452',
      iconType: 'book',
      caption: 'Cương lĩnh giáo dục Tân học tại số 10 Hàng Đào (1907)'
    }
  },
  {
    id: 'arc-thu-gui-hoc-sinh-1945',
    title: 'Thư Gửi Các Em Học Sinh Nhân Ngày Khai Trường Đầu Tiên (Tháng 9/1945)',
    category: 'archive_doc',
    yearOrPeriod: 'Tháng 9 năm 1945',
    authorOrRepository: 'Chủ tịch Hồ Chí Minh • Trung tâm Lưu trữ Quốc gia III',
    origin: 'Hà Nội',
    usageRights: 'Tài liệu Lưu trữ Quốc gia Việt Nam',
    verificationStatus: 'verified',
    description:
      'Bức thư lịch sử của Chủ tịch Hồ Chí Minh gửi học sinh cả nước nhân ngày khai trường đầu tiên của nước Việt Nam Dân chủ Cộng hòa sau hơn 80 năm nô lệ.',
    detailedContent:
      'Chỉ ít ngày sau khi đọc Tuyên ngôn Độc lập (2/9/1945), Chủ tịch Hồ Chí Minh đã viết bức thư tâm huyết gửi thế hệ học sinh Việt Nam. Người khẳng định nền giáo dục mới là một nền giáo dục hoàn toàn Việt Nam, đào tạo các em trở thành những công dân hữu ích và đặt niềm tin sắt đá vào tương lai dân tộc.',
    ocrTranscript:
      '"Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em."',
    linkedEducatorIds: ['nguyen-tat-thanh-duc-thanh', 'nguyen-van-huyen'],
    linkedRoomId: 'room-3',
    keywords: ['Thư gửi học sinh 1945', 'Hồ Chí Minh', 'Khai trường đầu tiên', 'Sánh vai cường quốc năm châu'],
    visualTheme: {
      bgColor: '#2B1B17',
      borderColor: '#DFC17B',
      iconType: 'letter',
      caption: 'Bức thư khai trường đầu tiên của nước Việt Nam độc lập (9/1945)'
    }
  },
  {
    id: 'arc-binh-dan-hoc-vu',
    title: 'Hiện Vật Chiến Dịch "Bình Dân Học Vụ" — Đèn Dầu, Bảng Gỗ & Sách Học Vần',
    category: 'classroom_photo',
    yearOrPeriod: '1945 – 1954',
    authorOrRepository: 'Nha Bình dân học vụ • Bảo tàng Lịch sử Quốc gia',
    origin: 'Toàn quốc (Bắc – Trung – Nam)',
    usageRights: 'Hiện vật Bảo tàng Lịch sử Quốc gia',
    verificationStatus: 'verified',
    description:
      'Tập hợp hiện vật lịch sử của phong trào xóa mù chữ vĩ đại: dùng nong phơi thóc, cánh cửa gỗ, lưng trâu làm bảng; lấy gạch non, đất sét trắng làm phấn; đốt đuốc và đèn dầu đi học ban đêm.',
    detailedContent:
      'Ngày 8/9/1945, Chính phủ ban hành Sắc lệnh số 17/SL thành lập Nha Bình dân học vụ. Hưởng ứng lời kêu gọi của Bác Hồ "Người biết chữ hãy dạy cho người chưa biết chữ", chỉ trong vòng một năm đầu tiên đã có gần 76.000 lớp học với gần 96.000 giáo viên tình nguyện giúp hơn 2,5 triệu người thoát nạn mù chữ.',
    ocrTranscript:
      '"I, Tờ hai chữ khác nhau / I ngắn có chấm, Tờ Tàu có ngang / O tròn như quả trứng gà / Ô thì đội mũ, Ơ là thêm râu..."',
    linkedEducatorIds: ['nguyen-tat-thanh-duc-thanh', 'nguyen-van-huyen'],
    linkedRoomId: 'room-3',
    keywords: ['Bình dân học vụ', 'Diệt giặc dốt', 'Xóa mù chữ', '1945'],
    visualTheme: {
      bgColor: '#1E2922',
      borderColor: '#DFC17B',
      iconType: 'chalkboard',
      caption: 'Lớp học Bình dân học vụ dưới ánh đèn dầu kháng chiến'
    }
  },
  {
    id: 'arc-mu-rom-di-hoc',
    title: 'Chiếc Mũ Rơm Đi Học & Túi Cứu Thương Học Trò Thời Chống Mỹ (1965–1972)',
    category: 'classroom_photo',
    yearOrPeriod: '1965 – 1972',
    authorOrRepository: 'Bộ Giáo dục & Bảo tàng Nguyễn Văn Huyên',
    origin: 'Miền Bắc Việt Nam',
    usageRights: 'Tư liệu Bảo tàng Giáo dục & Bảo tàng Nguyễn Văn Huyên',
    verificationStatus: 'verified',
    description:
      'Hình ảnh biểu tượng của giáo dục Việt Nam thời chiến: những chiếc mũ rơm bện dày chống mảnh đạn bom bi và lớp học nửa chìm dưới mặt đất có hào giao thông dẫn ra hầm trú ẩn.',
    detailedContent:
      'Trong những năm chiến tranh phá hoại ác liệt, hàng vạn trường học được sơ tán về nông thôn, chia thành từng nhóm nhỏ dưới lũy tre làng. Học sinh đi học đều đội mũ rơm, đeo vòng lá ngụy trang, nhưng tiếng giảng bài và tiếng đọc thơ vẫn vang lên đều đặn, tạo nên thế hệ trí thức xây dựng đất nước sau năm 1975.',
    ocrTranscript:
      '"Cháu đội mũ rơm đi học đường dài / Rơm vàng bọc thóc như tay mẹ hiền..."',
    linkedEducatorIds: ['nguyen-van-huyen', 'ta-quang-buu', 'hoang-tuy'],
    linkedRoomId: 'room-3',
    keywords: ['Mũ rơm đi học', 'Lớp học thời chiến', 'Nguyễn Văn Huyên', 'Giáo dục kháng chiến'],
    visualTheme: {
      bgColor: '#252B1E',
      borderColor: '#CCA452',
      iconType: 'photo',
      caption: 'Biểu tượng kiên cường của thầy và trò Việt Nam trong khói lửa chiến tranh'
    }
  },
  {
    id: 'arc-toi-di-hoc-nnk',
    title: 'Trang Giáo Án Viết Bằng Chân & Bản Thảo Hồi Ký "Tôi Đi Học" — Nguyễn Ngọc Ký',
    category: 'story',
    yearOrPeriod: '1970 – 2005',
    authorOrRepository: 'Nhà giáo Ưu tú Nguyễn Ngọc Ký • Bảo tàng Phụ nữ & Tư liệu Giáo dục',
    origin: 'Hải Hậu, Nam Định',
    usageRights: 'Tư liệu trưng bày giáo dục truyền cảm hứng',
    verificationStatus: 'verified',
    description:
      'Những trang giáo án Ngữ văn nét chữ đều tăm tắp, thanh đậm rõ ràng được thầy giáo Nguyễn Ngọc Ký viết hoàn toàn bằng đôi chân cùng bộ đồ dùng dạy học cắt dán thủ công.',
    detailedContent:
      'Suốt những năm tháng đứng trên bục giảng tại quê nhà Hải Hậu (Nam Định), thầy Nguyễn Ngọc Ký không chỉ viết bảng bằng chân mà còn tự thiết kế các mô hình giấy bìa có dây rút để minh họa bài giảng Ngữ văn, giúp học sinh hào hứng tiếp thu kiến thức.',
    ocrTranscript:
      '"Khi cánh cửa này khép lại, nếu ta có đủ nghị lực và niềm tin thì một cánh cửa khác tươi sáng hơn sẽ mở ra trên chính đôi chân của mình."',
    linkedEducatorIds: ['nguyen-ngoc-ky'],
    linkedRoomId: 'room-4',
    keywords: ['Nguyễn Ngọc Ký', 'Tôi đi học', 'Giáo án viết bằng chân', 'Nhà giáo Ưu tú'],
    visualTheme: {
      bgColor: '#241E2E',
      borderColor: '#DFC17B',
      iconType: 'manuscript',
      caption: 'Trang giáo án viết bằng đôi chân kỳ diệu của NGƯT Nguyễn Ngọc Ký'
    }
  },
  {
    id: 'arc-sgk-hinh-hoc',
    title: 'Bộ Sách Giáo Khoa Hình Học & Bức Tâm Thư Khai Giảng — PGS. Văn Như Cương',
    category: 'book_text',
    yearOrPeriod: '1989 – 2017',
    authorOrRepository: 'PGS. TS. Văn Như Cương • NXB Giáo dục Việt Nam',
    origin: 'Hà Nội',
    usageRights: 'Tư liệu lịch sử giáo dục thời kỳ Đổi mới',
    verificationStatus: 'verified',
    description:
      'Những cuốn sách giáo khoa Hình học gắn liền với bao thế hệ học sinh Việt Nam cùng những bức thư khai giảng ấm áp, sâu sắc của người thầy có mái râu bạc hiền từ.',
    detailedContent:
      'Không chỉ là một nhà toán học viết sách giáo khoa chuẩn mực, PGS. Văn Như Cương còn để lại dấu ấn sâu đậm với triết lý giáo dục con người tử tế, trung thực, biết yêu thương gia đình và có trách nhiệm với cộng đồng.',
    ocrTranscript:
      '"Các em có thể trở thành những người lao động chân chính, những nhà khoa học, những kỹ sư... nhưng trước hết phải là một người tử tế."',
    linkedEducatorIds: ['van-nhu-cuong'],
    linkedRoomId: 'room-4',
    keywords: ['Văn Như Cương', 'SGK Hình học', 'Trường Lương Thế Vinh', 'Người tử tế'],
    visualTheme: {
      bgColor: '#16292B',
      borderColor: '#DFC17B',
      iconType: 'book',
      caption: 'Ký ức Sách giáo khoa Hình học & Triết lý giáo dục thời Đổi mới'
    }
  },
  {
    id: 'arc-lop-hoc-vung-cao',
    title: 'Tư Liệu "Cõng Chữ Lên Non" & Lớp Học Kết Nối Toàn Cầu Thế Kỷ XXI',
    category: 'classroom_photo',
    yearOrPeriod: '2010 – Nay',
    authorOrRepository: 'Bộ Giáo dục và Đào tạo & Cộng đồng Nhà giáo Việt Nam',
    origin: 'Tây Bắc, Tây Nguyên, Trường Sa & Toàn quốc',
    usageRights: 'Tư liệu tôn vinh Nhà giáo Đương đại',
    verificationStatus: 'verified',
    description:
      'Bức tranh sống động về những người thầy vượt đèo cao, suối sâu mang ánh sáng tri thức tới các bản làng xa xôi và kết nối học sinh dân tộc thiểu số với bạn bè năm châu qua Internet.',
    detailedContent:
      'Từ những điểm trường cheo leo trên đỉnh núi đá tai mèo Hà Giang, những lớp học rộn tiếng đánh vần bên sóng biển Trường Sa, đến những tiết học kết nối trực tuyến với hơn 50 quốc gia của các cô giáo vùng trung du Phú Thọ, Yên Bái — tất cả đều tỏa sáng một tinh thần tận tụy vì học trò.',
    ocrTranscript:
      '"Nơi nào có học trò cần con chữ, nơi đó có bước chân người thầy Việt Nam."',
    linkedEducatorIds: ['co-giao-vung-cao'],
    linkedRoomId: 'room-5',
    keywords: ['Cõng chữ lên non', 'Giáo viên vùng cao', 'Trường Sa', 'Lớp học xuyên biên giới'],
    visualTheme: {
      bgColor: '#0F2537',
      borderColor: '#DFC17B',
      iconType: 'photo',
      caption: 'Hành trình gieo chữ nơi biên cương và hội nhập thế giới'
    }
  }
];

export const LEARNING_QUESTIONS: LearningQuestion[] = [
  {
    id: 'q-1',
    roomId: 'room-1',
    ageGroup: 'tieu_hoc',
    question: 'Danh sư nào thời nhà Trần được hậu thế tôn vinh là "Vạn Thế Sư Biểu" (Người thầy của muôn đời) và từng làm Tư nghiệp Quốc Tử Giám?',
    options: ['Thầy Chu Văn An', 'Thầy Lê Quý Đôn', 'Thầy Nguyễn Bỉnh Khiêm', 'Thầy Nguyễn Thiếp'],
    correctIndex: 0,
    explanation: 'Danh sư Chu Văn An (1292–1370) là Tư nghiệp Quốc Tử Giám thời Trần, nổi tiếng với trường Huỳnh Cung, bộ "Tứ thư thuyết ước" và "Thất trảm sớ". Ông được tôn vinh là Vạn Thế Sư Biểu của Việt Nam.',
    reflectionPrompt: 'Em học được điều gì từ câu chuyện các học trò dù đã làm quan lớn vẫn giữ lễ nghĩa kính cẩn khi về thăm thầy Chu Văn An?',
    sourceReference: 'Đại Việt sử ký toàn thư — Kỷ nhà Trần'
  },
  {
    id: 'q-2',
    roomId: 'room-1',
    ageGroup: 'thcs_thpt',
    question: 'Trong bản tấu "Bàn về phép học" (Luận học pháp, 1791) gửi vua Quang Trung, La Sơn Phu Tử Nguyễn Thiếp đã đề xuất phương châm học tập cốt lõi nào?',
    options: [
      'Học thuộc lòng kinh sử chữ Hán để thi đỗ làm quan',
      'Học rộng rồi tóm lược cho gọn, theo điều học mà làm (Học đi đôi với hành)',
      'Chỉ dạy cho con cháu quan lại ở kinh thành Phú Xuân',
      'Bãi bỏ hoàn toàn việc dạy đạo lý Tiểu học'
    ],
    correctIndex: 1,
    explanation: 'Nguyễn Thiếp đề xuất dạy tuần tự từ Tiểu học đến Tứ thư, Ngũ kinh, dịch sách ra chữ Nôm và nhấn mạnh: "Học rộng rồi tóm lược cho gọn, theo điều học mà làm".',
    reflectionPrompt: 'Vì sao tư tưởng "Học rộng rồi tóm lược cho gọn, theo điều học mà làm" từ năm 1791 vẫn rất hiện đại với học sinh thế kỷ XXI?',
    sourceReference: 'Bàn về phép học (1791) — Nguyễn Thiếp'
  },
  {
    id: 'q-3',
    roomId: 'room-2',
    ageGroup: 'thcs_thpt',
    question: 'Năm 1910, trước khi vào Sài Gòn ra đi tìm đường cứu nước, người thanh niên Nguyễn Tất Thành (Chủ tịch Hồ Chí Minh) đã dạy học tại ngôi trường nào?',
    options: [
      'Trường Đông Kinh Nghĩa Thục (Hà Nội)',
      'Trường Dục Thanh (Phan Thiết, Bình Thuận)',
      'Trường Quốc Học (Huế)',
      'Trường Bưởi (Hà Nội)'
    ],
    correctIndex: 1,
    explanation: 'Từ tháng 9/1910 đến tháng 2/1911, thầy giáo Nguyễn Tất Thành đã dạy chữ Quốc ngữ, chữ Hán, tiếng Pháp và thể dục tại Trường Dục Thanh (Phan Thiết) do các sĩ phu phong trào Duy Tân sáng lập.',
    reflectionPrompt: 'Hình ảnh người thầy giáo trẻ Nguyễn Tất Thành vừa dạy chữ vừa rèn luyện thể lực và lòng yêu nước cho học trò gợi cho bạn suy nghĩ gì?',
    sourceReference: 'Khu di tích Trường Dục Thanh & Bảo tàng Hồ Chí Minh'
  },
  {
    id: 'q-4',
    roomId: 'room-2',
    ageGroup: 'dai_hoc_cong_chung',
    question: 'Phong trào Đông Kinh Nghĩa Thục (1907) do cụ Cử Lương Văn Can làm Thục trưởng đã tạo ra bước ngoặt lịch sử nào cho giáo dục Việt Nam?',
    options: [
      'Khôi phục chế độ thi Hương, thi Hội bằng văn bát cổ',
      'Mở trường tư miễn phí ("Nghĩa thục") cổ vũ chữ Quốc ngữ, khoa học thực tiễn và tư tưởng tự cường dân tộc',
      'Chỉ dạy tiếng Pháp cho tầng lớp thượng lưu',
      'Đóng cửa tất cả các trường học ở nông thôn'
    ],
    correctIndex: 1,
    explanation: 'Đông Kinh Nghĩa Thục (số 10 Hàng Đào, Hà Nội) là cuộc vận động cải cách văn hóa – giáo dục sôi nổi đầu thế kỷ XX, truyền bá chữ Quốc ngữ, biên soạn Văn minh tân học sách và đề xướng thực học, thực nghiệp.',
    reflectionPrompt: 'Triết lý "Khai dân trí, chấn dân khí, hậu dân sinh" có mối quan hệ hữu cơ với nhau như thế nào?',
    sourceReference: 'Văn minh tân học sách (1907) — Đông Kinh Nghĩa Thục'
  },
  {
    id: 'q-5',
    roomId: 'room-3',
    ageGroup: 'dai_hoc_cong_chung',
    question: 'Vị Bộ trưởng Bộ Giáo dục nào là người Việt Nam đầu tiên đỗ Tiến sĩ Văn khoa tại Đại học Sorbonne (Pháp, 1934) và giữ trọng trách chèo lái ngành Giáo dục suốt 29 năm (1946–1975)?',
    options: [
      'GS. Tạ Quang Bửu',
      'GS. Đặng Thai Mai',
      'GS. Nguyễn Văn Huyên',
      'GS. Hoàng Tụy'
    ],
    correctIndex: 2,
    explanation: 'GS. TS. Nguyễn Văn Huyên (1905–1975) giữ chức Bộ trưởng Bộ Giáo dục từ tháng 11/1946 đến năm 1975 (29 năm), lãnh đạo ngành giáo dục vượt qua hai cuộc kháng chiến và xây dựng nền giáo dục bằng tiếng Việt.',
    reflectionPrompt: 'Điều gì đã giúp giáo dục Việt Nam không những không bị đứt gãy mà còn phát triển mạnh mẽ ngay trong hoàn cảnh bom đạn chiến tranh?',
    sourceReference: 'Nguyễn Văn Huyên Toàn tập & Bảo tàng Nguyễn Văn Huyên'
  },
  {
    id: 'q-6',
    roomId: 'room-4',
    ageGroup: 'tieu_hoc',
    question: 'Nhà giáo Ưu tú nào đã vượt qua nghịch cảnh liệt cả hai tay từ năm 4 tuổi để tập viết bằng chân, tốt nghiệp Đại học Tổng hợp và trở thành thầy giáo dạy Văn mẫu mực?',
    options: [
      'Thầy Nguyễn Ngọc Ký',
      'Thầy Văn Như Cương',
      'Thầy Hoàng Tụy',
      'Thầy Nguyễn Đình Chiểu'
    ],
    correctIndex: 0,
    explanation: 'Nhà giáo Ưu tú Nguyễn Ngọc Ký (1947–2022) là tấm gương nghị lực phi thường của giáo dục Việt Nam, tác giả hồi ký "Tôi đi học" và hai lần được Bác Hồ tặng Huy hiệu.',
    reflectionPrompt: 'Khi gặp một bài toán khó hay thử thách trong học tập, tấm gương thầy Nguyễn Ngọc Ký tiếp thêm cho em động lực gì?',
    sourceReference: 'Hồi ký "Tôi đi học" — Nguyễn Ngọc Ký'
  }
];

export const MYSTERY_CLUES: MysteryClueItem[] = [
  {
    id: 'clue-1',
    targetEducatorId: 'chu-van-an',
    difficulty: 'Dễ',
    clues: [
      'Gợi ý 1: Ông mở trường dạy học bên dòng sông Tô Lịch (trường Huỳnh Cung) trước khi được vua mời vào phụ trách Quốc Tử Giám.',
      'Gợi ý 2: Ông từng dâng sớ xin chém 7 nịnh thần ("Thất trảm sớ"), khi không được chấp thuận đã treo mũ từ quan về núi Phượng Hoàng (Chí Linh).',
      'Gợi ý 3: Ông là người thầy đầu tiên của Việt Nam được thờ tại Văn Miếu và được tôn vinh là "Vạn Thế Sư Biểu".'
    ],
    historicalLesson: 'Khí tiết thanh cao và tấm lòng thương yêu học trò của Chu Văn An đã đặt nền móng đạo đức cho nghề giáo Việt Nam suốt hơn 700 năm qua.'
  },
  {
    id: 'clue-2',
    targetEducatorId: 'nguyen-dinh-chieu',
    difficulty: 'Trung bình',
    clues: [
      'Gợi ý 1: Trên đường từ Huế trở về Gia Định chịu tang mẹ năm 1849, vì quá đau thương nên ông bị mù cả hai mắt.',
      'Gợi ý 2: Ông vừa mở trường dạy học, vừa bốc thuốc cứu người, vừa đọc cho học trò chép truyện thơ Nôm dài hơn 2.000 câu.',
      'Gợi ý 3: Hai câu thơ bất hủ của ông: "Chở bao nhiêu đạo thuyền không khẳm / Đâm mấy thằng gian bút chẳng tà".'
    ],
    historicalLesson: 'Dù đôi mắt không còn nhìn thấy ánh sáng, trái tim và trí tuệ của thầy Đồ Chiểu vẫn soi sáng đạo lý nhân nghĩa và lòng yêu nước cho cả vùng đất Nam Bộ.'
  },
  {
    id: 'clue-3',
    targetEducatorId: 'ta-quang-buu',
    difficulty: 'Nâng cao',
    clues: [
      'Gợi ý 1: Ông từng theo học tại Đại học Sorbonne (Pháp) và Oxford (Anh), thông thạo nhiều ngoại ngữ và am hiểu từ Toán học, Vật lý lượng tử đến Triết học.',
      'Gợi ý 2: Ông là Hiệu trưởng Trường Đại học Bách khoa Hà Nội và Bộ trưởng đầu tiên của Bộ Đại học và Trung học chuyên nghiệp (1965–1976).',
      'Gợi ý 3: Tên của ông hiện được đặt cho Giải thưởng danh giá nhất của Bộ Khoa học và Công nghệ dành cho các nhà khoa học nghiên cứu cơ bản.'
    ],
    historicalLesson: 'Tầm nhìn chiến lược của GS. Tạ Quang Bửu về tự học và tiếp cận thẳng đỉnh cao khoa học thế giới đã xây dựng nên đội ngũ trí thức khoa học kỹ thuật trụ cột cho đất nước.'
  }
];

export const INITIAL_TRIBUTES: TributeMessage[] = [
  {
    id: 'trib-1',
    senderName: 'Nguyễn Minh Quân',
    senderRole: 'Cựu học sinh THPT Chuyên Hà Nội – Amsterdam',
    teacherDedicatedTo: 'Các thầy cô giáo Tổ Toán – Tin và cố PGS. Văn Như Cương',
    schoolOrLocality: 'Hà Nội',
    message: 'Cảm ơn những bài giảng Hình học giản dị và lời dặn "Trước hết phải là một người tử tế" đã theo em suốt những năm tháng trưởng thành nơi giảng đường đại học.',
    createdAt: '20/11/2025',
    isApproved: true
  },
  {
    id: 'trib-2',
    senderName: 'Lò Thị Mai Hương',
    senderRole: 'Giáo viên Tiểu học vùng cao',
    teacherDedicatedTo: 'Cô giáo chủ nhiệm lớp 5 điểm trường Mèo Vạc',
    schoolOrLocality: 'Hà Giang',
    message: 'Nhờ đôi ủng và bàn tay ấm áp của cô dắt em qua con dốc sương mù năm ấy mà hôm nay em đã trở thành một cô giáo quay về bản làng dạy chữ cho các em nhỏ.',
    createdAt: '15/10/2026',
    isApproved: true
  },
  {
    id: 'trib-3',
    senderName: 'Trần Hoàng Nam',
    senderRole: 'Nghiên cứu sinh Khoa học Máy tính',
    teacherDedicatedTo: 'Tưởng nhớ NGƯT Nguyễn Ngọc Ký & GS. Hoàng Tụy',
    schoolOrLocality: 'Đà Nẵng – TP. Hồ Chí Minh',
    message: 'Mỗi khi gặp khó khăn trong nghiên cứu, em lại nhớ tới những trang giáo án viết bằng chân của thầy Nguyễn Ngọc Ký và con đường tự học bền bỉ của GS. Hoàng Tụy.',
    createdAt: '28/10/2026',
    isApproved: true
  }
];
