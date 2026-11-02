// File: data/teachersData.js
// Dữ liệu trưng bày Gian phòng Nhà giáo Việt Nam qua các thời kỳ (Chuẩn 26 Tranh Chân Dung)

// ============================================================================
// 1. DỮ LIỆU CÁC GIAI ĐOẠN LỊCH SỬ (3 Giai đoạn theo quy hoạch mới)
// ============================================================================
const themesData = {
  "phong_kien": {
    id: "stage_01",
    code: "phong_kien",
    title: "GIAI ĐOẠN I: THỜI KỲ PHONG KIẾN",
    subtitle: "Khuôn vàng thước ngọc – Tôn sư trọng đạo & Khởi dựng nền Quốc học Đại Việt (Thế kỷ XI – XIX)",
    wallColor: "#2c180e", // Tông nâu đất phong kiến ấm áp, cổ kính
    introContent: `Trải qua gần mười thế kỷ độc lập tự chủ dưới các triều đại phong kiến, bên cạnh hệ thống trường công lập của triều đình (Quốc Tử Giám, phủ học, huyện học), nền giáo dục nước nhà được nuôi dưỡng và lan tỏa mạnh mẽ chính nhờ mạng lưới trường tư, trường làng và công lao của các bậc danh sư trên khắp mọi miền đất nước.

Người thầy trong xã hội truyền thống giữ vị trí tôn nghiêm bậc nhất: 'Quân – Sư – Phụ', là biểu tượng của chuẩn mực đạo đức, khí tiết và tri thức. Dạy học thời kỳ này không đơn thuần là truyền thụ chữ nghĩa cử nghiệp để đi thi, mà trước hết là 'dạy đạo làm người', rèn giũa lòng trung quân ái quốc, tinh thần tự lập tự cường và tấm lòng vì dân vì nước.

Không gian trưng bày Giai đoạn I tôn vinh 07 bậc danh sư tiêu biểu: Từ bậc Vạn thế sư biểu Chu Văn An, Thái sư Lê Văn Thịnh, nhà biên niên sử học Lê Văn Hưu, Trạng Trình Nguyễn Bỉnh Khiêm, Hồng Hà nữ sĩ Đoàn Thị Điểm, nhà bác học Lê Quý Đôn, đến cụ Đồ Chiểu kiên trung mở cõi phương Nam.`
  },
  "yeu_nuoc_khang_chien": {
    id: "stage_02",
    code: "yeu_nuoc_khang_chien",
    title: "GIAI ĐOẠN II: YÊU NƯỚC & KHÁNG CHIẾN",
    subtitle: "Chuyển mình dân tộc – Khơi mở dân trí, đào tạo thế hệ phụng sự độc lập & kháng chiến kiến quốc (1907 – 1975)",
    wallColor: "#18281b", // Tông xanh rêu kháng chiến trang nghiêm, kiên cường
    introContent: `Bước sang thế kỷ XX, trước ách thống trị của thực dân Pháp, nền học Nho giáo khép lại nhường chỗ cho phong trào Duy Tân, Đông Kinh Nghĩa Thục với chủ trương 'Khai dân trí, chấn dân khí, hậu dân sinh'. Những người thầy không chỉ dạy chữ mà còn truyền bá tư tưởng yêu nước, cổ vũ thực học và thức tỉnh trách nhiệm công dân.

Sau Cách mạng Tháng Tám năm 1945, giáo dục bước vào kỷ nguyên mới với chiến dịch 'Diệt giặc dốt' và phong trào Bình dân học vụ kỳ vĩ. Xuyên suốt hai cuộc kháng chiến chống Pháp và chống Mỹ, hàng vạn nhà giáo đã bám trường, bám lớp, sơ tán lên chiến khu, vừa giảng dạy vừa cầm súng, đào tạo lớp lớp cán bộ, nhà khoa học và chiến sĩ bảo vệ Tổ quốc.

Không gian trưng bày Giai đoạn II tôn vinh 15 nhà giáo tiêu biểu: Lương Văn Can, Nguyễn Quyền, Trần Quý Cáp, Thầy giáo Nguyễn Tất Thành (Hồ Chí Minh), Trần Phú, Hà Huy Tập, Dương Quảng Hàm, Võ Nguyên Giáp, Nguyễn Lân, Hồ Đắc Di, Lê Văn Thiêm, Ngụy Như Kon Tum, Hoàng Tụy, Tôn Thất Tùng, Trần Văn Giàu.`
  },
  "doi_moi_hoi_nhap": {
    id: "stage_03",
    code: "doi_moi_hoi_nhap",
    title: "GIAI ĐOẠN III: ĐỔI MỚI & HỘI NHẬP",
    subtitle: "Quốc sách hàng đầu – Đổi mới căn bản, toàn diện & Phát huy năng lực tự học, sáng tạo (Từ năm 1975 đến nay)",
    wallColor: "#32070c", // Tông đỏ mận hoàng gia sang trọng
    introContent: `Sau ngày non sông thống nhất năm 1975 và đặc biệt từ công cuộc Đổi mới năm 1986, giáo dục Việt Nam bước vào giai đoạn phát triển toàn diện, hội nhập sâu rộng với thế giới. Khẳng định tư tưởng chiến lược của Đảng và Nhà nước: 'Giáo dục và đào tạo là quốc sách hàng đầu, là tương lai của dân tộc'.

Đội ngũ nhà giáo thời kỳ này không ngừng đổi mới phương pháp giảng dạy, ứng dụng khoa học công nghệ, phát huy tính tích cực, chủ động, sáng tạo của người học, đồng thời gìn giữ bản sắc văn hóa dân tộc và ngọn lửa yêu nghề, tận tụy vì học sinh thân yêu.

Không gian trưng bày Giai đoạn III tôn vinh 04 nhân vật kiệt xuất: Cố Thủ tướng Phạm Văn Đồng, GS. NGND Nguyễn Cảnh Toàn, GS. TSKH Hồ Ngọc Đại và NGƯT Nguyễn Ngọc Ký.`
  }
};

// ============================================================================
// 2. DANH SÁCH CHUẨN 26 TRANH CHÂN DUNG NHÀ GIÁO VIỆT NAM QUA CÁC THỜI KỲ
// ============================================================================
const teachersData = [
  // --------------------------------------------------------------------------
  // GIAI ĐOẠN 1: THỜI KỲ PHONG KIẾN (07 TRANH: TỪ 01 ĐẾN 07)
  // --------------------------------------------------------------------------
  {
    id: 1,
    name: "Chu Văn An",
    years: "1292 – 1370",
    period: "phong_kien",
    stageNum: 1,
    subTheme: "Giai đoạn I: Thời kỳ Phong kiến",
    title: "Vạn thế sư biểu – Người thầy chuẩn mực của muôn đời",
    img: "assets/teachers/pk_04_chu_van_an.jpg",
    career: "Chu Văn An (hiệu Tiều Ẩn, tên thụy Văn Trinh) quê tại thôn Văn, xã Thanh Liệt, huyện Thanh Trì, Hà Nội. Ông đỗ Thái học sinh nhưng không ra làm quan ngay mà mở trường dạy học ở làng Huỳnh Cung bên bờ sông Tô Lịch. Học trò từ khắp nơi đến theo học rất đông, nhiều người thành đạt làm đến hàng tể tướng, thượng thư như Phạm Sư Mạnh, Lê Quát. Dưới triều vua Trần Minh Tông, ông được mời ra giữ chức Tư nghiệp Quốc Tử Giám – tương đương hiệu trưởng trường đại học quốc gia đầu tiên của Đại Việt.",
    reforms: "• Mở trường Huỳnh Cung, thực hiện triết lý giáo dục bình đẳng, không phân biệt giàu nghèo, đào tạo hàng ngàn nhân tài phục vụ đất nước.\n• Giữ cương vị Tư nghiệp Quốc Tử Giám, trực tiếp dạy dỗ Thái tử và chăm lo quy chế đào tạo Nho học của vương triều Trần.\n• Soạn bộ 'Tứ thư thuyết ước' tóm lược tinh hoa kinh điển Nho giáo làm giáo trình chuẩn cho học trò Đại Việt.\n• Dâng 'Thất Trảm Sớ' chém 7 quyền thần gian nịnh dưới thời Trần Dụ Tông, nêu cao khí tiết kiên trung của kẻ sĩ không màng bổng lộc, sau đó lui về núi Phượng Hoàng (Chí Linh, Hải Dương) tiếp tục dạy học đến cuối đời.",
    legacy: "Khi qua đời, ông được triều đình ban tặng thụy Văn Trinh và cho tòng tự tại Văn Miếu – Quốc Tử Giám. Năm 2019, UNESCO đã ra Nghị quyết cùng kỷ niệm 650 năm ngày mất của Chu Văn An, vinh danh ông là Danh nhân văn hóa có tầm vóc nhân loại."
  },
  {
    id: 2,
    name: "Lê Văn Thịnh",
    years: "1050 – 1096",
    period: "phong_kien",
    stageNum: 1,
    subTheme: "Giai đoạn I: Thời kỳ Phong kiến",
    title: "Thủ khoa khoa thi Nho học đầu tiên (1075) – Bậc khai khoa Nho học",
    img: "assets/teachers/pk_03_le_van_thinh.jpg",
    career: "Lê Văn Thịnh quê tại làng Đông Cứu, huyện Gia Bình, tỉnh Bắc Ninh. Tháng 2 năm Ất Mão (1075), vua Lý Nhân Tông mở khoa thi đầu tiên trong lịch sử khoa bảng Việt Nam mang tên 'Minh kinh bác học' và thi Nho học tam trường, Lê Văn Thịnh đỗ đầu (Thủ khoa / Trạng nguyên khai khoa). Sau khi đỗ đạt, ông được triều đình bổ nhiệm vào cung dạy học cho ấu chúa Lý Nhân Tông, sau đó thăng dần đến chức Binh bộ Thị lang rồi Thái sư đầu triều – chức vụ đại thần cao nhất của vương triều Lý.",
    reforms: "• Người thầy trực tiếp giáo dưỡng vua Lý Nhân Tông từ thuở nhỏ, bồi đắp tư tưởng nhân chính và tri thức trị quốc an dân cho một trong những vị minh quân sáng bậc nhất lịch sử Đại Việt.\n• Tham mưu xây dựng Quốc Tử Giám (1076) làm nơi học tập của con em hoàng gia và tuyển chọn nhân tài khắp đất nước.\n• Nhà ngoại giao xuất sắc: Năm 1084, ông đại diện triều Lý sang biên giới đàm phán với nhà Tống, dùng lý lẽ đanh thép đòi lại thành công vùng đất biên giới Vật Dương, Vật Ác (Cao Bằng) mà không tốn một mũi tên hòn đạn.",
    legacy: "Ông được tôn vinh là bậc Khai khoa Nho học Việt Nam, tấm gương về trí tuệ uyên bác, tài năng sư phạm và bản lĩnh ngoại giao kiên cường bảo vệ chủ quyền biên cương Tổ quốc."
  },
  {
    id: 3,
    name: "Lê Văn Hưu",
    years: "1230 – 1322",
    period: "phong_kien",
    stageNum: 1,
    subTheme: "Giai đoạn I: Thời kỳ Phong kiến",
    title: "Bảng nhãn khoa Đinh Mùi (1247) – Người thầy đặt nền móng Quốc sử",
    img: "assets/teachers/pk_07_le_van_huu.jpg",
    career: "Lê Văn Hưu quê làng Phủ Lý, huyện Đông Sơn, tỉnh Thanh Hóa. Năm 17 tuổi, ông đỗ Bảng nhãn trong khoa thi Tam khôi đầu tiên của nhà Trần (khoa Đinh Mùi 1247). Ông từng giữ các chức vụ Hàn lâm viện Kiểm thảo, Binh bộ Thượng thư và Học sĩ kiêm Quốc sử viện giám tu. Bên cạnh việc biên soạn quốc sử, ông trực tiếp dạy học cho hoàng thân quốc thích và học trò kinh kỳ Thăng Long.",
    reforms: "• Người thầy đặt nền móng cho nền sử học nước nhà khi hoàn thành bộ 'Đại Việt sử ký' gồm 30 quyển (1272) – bộ quốc sử chính thống đầu tiên ghi chép từ thời Triệu Vũ Đế đến Lý Chiêu Hoàng.\n• Đưa phương pháp khảo cứu sử liệu chuẩn xác và những lời bình sử (Lê Văn Hưu viết...) giàu tinh thần tự chủ dân tộc vào giáo trình giảng dạy học thuật cung đình.\n• Đào tạo nhiều văn nhân, quan chức thời đầu nhà Trần thấm nhuần tinh thần độc lập quốc gia và ý thức tự tôn Đại Việt.",
    legacy: "Tác phẩm Đại Việt sử ký của ông là ngọn nguồn để các nhà sử học đời sau như Phan Phu Tiên, Ngô Sĩ Liên kế thừa biên soạn bộ 'Đại Việt sử ký toàn thư' bất hủ."
  },
  {
    id: 4,
    name: "Nguyễn Bỉnh Khiêm",
    years: "1491 – 1585",
    period: "phong_kien",
    stageNum: 1,
    subTheme: "Giai đoạn I: Thời kỳ Phong kiến",
    title: "Tuyết Giang phu tử – Bậc đại danh sư triết học & giáo dục Đại Việt",
    img: "assets/teachers/pk_09_nguyen_binh_khiem.jpg",
    career: "Nguyễn Bỉnh Khiêm (tự Hanh Phủ, hiệu Bạch Vân cư sĩ) quê làng Trung Am, huyện Vĩnh Lại (nay thuộc Vĩnh Bảo, Hải Phòng). Đỗ Trạng nguyên khoa Ất Mùi (1535) dưới triều Mạc Đăng Doanh, ông làm quan đến chức Lại bộ Thượng thư, tước Trình Tuyền Hầu. Thấy triều đình rối ren, ông dâng sớ xin chém 18 lộng thần không được chấp thuận liền cáo quan về quê mở trường dạy học tại am Bạch Vân bên dòng sông Tuyết Giang.",
    reforms: "• Sáng lập trường am Bạch Vân, trở thành trung tâm đào tạo nhân tài lớn nhất Đại Việt thế kỷ XVI, được môn sinh tôn xưng là 'Tuyết Giang phu tử'.\n• Đào tạo nên hàng loạt danh thần, học giả lừng danh cả hai triều Nam - Bắc: Phùng Khắc Khoan (Trạng Bùng), Nguyễn Dữ (tác giả Truyền kỳ mạn lục), Lương Hữu Khánh, Trương Thời Cử...\n• Đưa triết học Lý học và nhân sinh quan vị nhân sinh vào giáo dục: Dạy học trò giữ gìn đạo đức, thanh cao giữa thời biến loạn và luôn đặt lợi ích của nhân dân lên trên hết.\n• Nhà tiên tri đại tài với những lời sấm truyền định hướng lịch sử: 'Hoành Sơn nhất đái vạn đại dung thân' mở ra cơ nghiệp nhà Nguyễn ở phương Nam.",
    legacy: "Được nhân dân tôn xưng là bậc Thánh nhân Đại Việt, người thầy vĩ đại kết tinh trí tuệ triết học và khí phách thanh cao của đạo học dân tộc."
  },
  {
    id: 5,
    name: "Đoàn Thị Điểm",
    years: "1705 – 1748",
    period: "phong_kien",
    stageNum: 1,
    subTheme: "Giai đoạn I: Thời kỳ Phong kiến",
    title: "Hồng Hà nữ sĩ – Nữ danh sư tiêu biểu thời Lê Trung Hưng",
    img: "assets/teachers/pk_10_doan_thi_diem.jpg",
    career: "Đoàn Thị Điểm (hiệu Hồng Hà nữ sĩ) quê làng Giai Phạm, huyện Văn Giang (nay thuộc huyện Yên Mỹ, tỉnh Hưng Yên). Xuất thân trong gia đình Nho học danh giá, từ nhỏ bà đã nức tiếng thông minh, sắc sảo và uyên bác thơ văn. Sau khi cha và anh qua đời, bà tự gánh vác việc gia đình, về làng Chương Dương (nay thuộc Thường Tín, Hà Nội) mở trường dạy học và làm nghề bốc thuốc chữa bệnh giúp dân.",
    reforms: "• Nữ danh sư hiếm hoi trong lịch sử Nho học Việt Nam mở trường tư thục, trực tiếp giảng dạy kinh sách và rèn luyện đạo đức cho hàng trăm môn sinh.\n• Học trò theo học bà rất đông, có nhiều người đỗ đạt thành danh như Tiến sĩ Đào Duy Doãn.\n• Tác giả bản dịch diễn Nôm tác phẩm 'Chinh phụ ngâm khúc' (nguyên tác chữ Hán của Đặng Trần Côn) đạt đỉnh cao thi ca cổ điển, cùng tập truyện ký chữ Hán giàu giá trị nhân văn 'Truyền kỳ tân phả'.\n• Phá vỡ định kiến khắt khe 'trọng nam khinh nữ' thời phong kiến, chứng minh phụ nữ hoàn toàn có thể đạt tới đỉnh cao tri thức, đứng trên bục giảng dẫn dắt hiền tài.",
    legacy: "Bà là hình mẫu người phụ nữ và người thầy vĩ đại: tài sắc vẹn toàn, hiếu nghĩa trọn tình, góp phần bồi đắp nét đẹp nhân văn sâu sắc cho nền giáo dục dân tộc."
  },
  {
    id: 6,
    name: "Lê Quý Đôn",
    years: "1726 – 1784",
    period: "phong_kien",
    stageNum: 1,
    subTheme: "Giai đoạn I: Thời kỳ Phong kiến",
    title: "Bảng nhãn – Nhà bác học bách khoa toàn thư & đại thụ giáo dục thế kỷ XVIII",
    img: "assets/teachers/pk_13_le_quy_don.jpg",
    career: "Lê Quý Đôn (tên thuở nhỏ là Lê Danh Phương, tự Doãn Hậu, hiệu Quế Đường) quê làng Diên Hà, huyện Diên Hà (nay thuộc Hưng Hà, Thái Bình). Thuở nhỏ được xưng tụng là 'thần đồng', ông đỗ Giải nguyên khoa thi Hương năm 1743 và đỗ Bảng nhãn khoa thi Hội năm 1752 (khoa này không lấy đỗ Trạng nguyên). Ông giữ nhiều trọng trách quan trọng trong triều Lê - Trịnh: Hàn lâm viện Thị giảng, Bồi tụng, Tổng trấn Thuận Hóa, kiêm Đốc thị quân vụ.",
    reforms: "• Người thầy giáo dục bách khoa uyên bác bậc nhất: Soạn thảo khối lượng trước tác khổng lồ bao quát triết học, lịch sử, địa lý, ngôn ngữ, văn học, bách khoa như 'Vân đài loại ngữ', 'Đại Việt thông sử', 'Kiến văn tiểu lục', 'Phủ biên tạp lục'.\n• Đề cao tinh thần duy vật thực nghiệm trong giáo dục: Khuyên người học không được giáo điều kinh sách mà phải gắn liền việc học với khảo sát thực địa, ghi chép tường tận vạn vật.\n• Đào tạo và truyền cảm hứng học thuật nghiên cứu nghiêm cẩn cho đông đảo thế hệ học trò kinh kỳ và sĩ phu cả nước.",
    legacy: "Tên tuổi ông được khắc sâu trong lịch sử văn hóa như đỉnh cao của trí tuệ bác học Việt Nam thời trung đại, người thầy vĩ đại thắp sáng tinh thần tự học và khám phá tri thức."
  },
  {
    id: 7,
    name: "Nguyễn Đình Chiểu",
    years: "1822 – 1888",
    period: "phong_kien",
    stageNum: 1,
    subTheme: "Giai đoạn I: Thời kỳ Phong kiến",
    title: "Danh nhân văn hóa thế giới (UNESCO) – Tấm gương tiết tháo của nhà giáo Nam Bộ",
    img: "assets/teachers/pk_20_nguyen_dinh_chieu.jpg",
    career: "Nguyễn Đình Chiểu (tự Mạnh Trạch, hiệu Trọng Chiểu, Hối Trai; người đời kính trọng gọi là Cụ Đồ Chiểu) sinh tại làng Tân Thới, huyện Bình Dương, phủ Tân Bình, tỉnh Gia Định. Năm 1843 đỗ Tú tài tại Gia Định. Năm 1849, khi đang ở Huế chuẩn bị thi Hội thì nhận được tin mẹ mất, ông bỏ thi về quê chịu tang. Dọc đường vì khóc mẹ thương tiếc và vất vả nên ông bị mù cả hai mắt. Vượt lên số phận nghiệt ngã, ông về mở trường dạy học, bốc thuốc cứu người và sáng tác thơ văn yêu nước chống giặc Pháp xâm lược.",
    reforms: "• Người thầy mở trường dạy học tại Gia Định rồi Ba Tri (Bến Tre), đào tạo nhiều môn sinh thấm nhuần tinh thần nghĩa hiệp, lòng yêu nước nồng nàn và đạo làm người trung hiếu.\n• Dùng ngòi bút làm vũ khí chiến đấu sắc bén: 'Chở bao nhiêu đạo thuyền không khẳm / Đâm mấy thằng gian bút chẳng tà'. Tác giả truyện thơ 'Lục Vân Tiên' bất hủ cùng áng 'Văn tế nghĩa sĩ Cần Giuộc' rực lửa.\n• Tấm gương khí tiết sáng ngời: Từ chối mọi bổng lộc, đất đai dụ dỗ của giặc Pháp, giữ trọn nhân cách trong sạch của nhà giáo vì dân vì nước cho đến hơi thở cuối cùng.",
    legacy: "Năm 2021, Đại hội đồng UNESCO đã thông qua nghị quyết vinh danh Nguyễn Đình Chiểu là Danh nhân văn hóa thế giới, ghi nhận tấm gương sáng ngời về tinh thần vượt khó, đạo đức người thầy và lòng yêu chuộng hòa bình."
  },

  // --------------------------------------------------------------------------
  // GIAI ĐOẠN 2: THỜI KỲ YÊU NƯỚC & KHÁNG CHIẾN (15 TRANH: TỪ 08 ĐẾN 22)
  // --------------------------------------------------------------------------
  {
    id: 8,
    name: "Lương Văn Can",
    years: "1854 – 1927",
    period: "yeu_nuoc_khang_chien",
    stageNum: 2,
    subTheme: "Giai đoạn II: Thời kỳ Yêu nước & Kháng chiến",
    title: "Thục sư – Hiệu trưởng Trường Đông Kinh Nghĩa Thục (1907)",
    img: "assets/teachers/dt_23_luong_van_can.jpg",
    career: "Lương Văn Can (tự Ôn Như, hiệu Sơn Lão) quê làng Nhị Khê, huyện Thường Tín, Hà Nội. Đỗ Cử nhân khoa thi năm 1874, ông từ chối chốn quan trường để mở trường dạy học tại phố Hàng Đào, Hà Nội. Tháng 3 năm 1907, ông cùng các sĩ phu yêu nước thành lập Trường Đông Kinh Nghĩa Thục và được cử làm Hiệu trưởng (Thục sư). Sau khi trường bị thực dân Pháp đàn áp đóng cửa, ông bị lưu đày sang Nam Vang (Campuchia) nhưng vẫn kiên trì soạn thảo sách giáo khoa truyền bá chữ Quốc ngữ.",
    reforms: "• Lãnh đạo phong trào Đông Kinh Nghĩa Thục, mở ra cuộc cách mạng giáo dục hiện đại đầu tiên ở Việt Nam: Miễn học phí, dạy chữ Quốc ngữ, chữ Pháp, chữ Hán và các môn khoa học thường thức.\n• Biên soạn các bộ giáo trình cách tân như 'Kim cổ cách ngôn', 'Ấu học tùng tân' nhằm bài trừ hủ tục mê tín, cổ vũ tinh thần thực học và mở mang dân trí.\n• Đề cao đạo đức kinh doanh và khởi xướng phong trào duy tân công thương nghiệp: 'Thương trường như chiến trường', người buôn bán phải có tri thức và tinh thần tự hào dân tộc.",
    legacy: "Ông được tôn vinh là ngọn cờ đầu của phong trào Duy Tân giáo dục Việt Nam đầu thế kỷ XX, biểu tượng mẫu mực của nhà giáo dấn thân vì tương lai đất nước."
  },
  {
    id: 9,
    name: "Nguyễn Quyền",
    years: "1869 – 1941",
    period: "yeu_nuoc_khang_chien",
    stageNum: 2,
    subTheme: "Giai đoạn II: Thời kỳ Yêu nước & Kháng chiến",
    title: "Giám học Đông Kinh Nghĩa Thục – Nhà giáo yêu nước tiên phong duy tân",
    img: "assets/teachers/dt_24_nguyen_quyen.jpg",
    career: "Nguyễn Quyền (hiệu Đông Trì) quê làng Thượng Trì, phủ Thuận Thành, tỉnh Bắc Ninh. Thi đỗ Huấn đạo dưới triều Nguyễn, ông từng giữ chức Huấn đạo Lạng Sơn nên người đời kính trọng gọi là cụ Huấn Quyền. Yêu nước nồng nàn, ông từ quan về Hà Nội cùng Lương Văn Can sáng lập Trường Đông Kinh Nghĩa Thục, giữ cương vị Giám học (phụ trách điều hành toàn bộ chương trình và giảng dạy).",
    reforms: "• Trực tiếp thiết kế chương trình giảng dạy canh tân của Đông Kinh Nghĩa Thục, đưa chữ Quốc ngữ thành công cụ đắc lực giải phóng tư tưởng và nâng cao dân trí.\n• Tổ chức các buổi diễn thuyết công khai sôi nổi tại đình trường Hàng Đào, thức tỉnh tinh thần yêu nước và ý thức canh tân trong quần chúng nhân dân.\n• Bị thực dân Pháp bắt giam đày ra Côn Đảo rồi an trí tại Bến Tre, ông vẫn giữ trọn khí tiết nhà giáo yêu nước, tiếp tục bốc thuốc và ngâm thơ răn dạy hậu thế.",
    legacy: "Nhà giáo, nhà cách mạng tiền bối bất khuất, người có công lao to lớn đưa nền giáo dục quốc dân thoát khỏi lối mòn khoa cử cổ hủ để bước vào thời kỳ canh tân hiện đại."
  },
  {
    id: 10,
    name: "Trần Quý Cáp",
    years: "1870 – 1908",
    period: "yeu_nuoc_khang_chien",
    stageNum: 2,
    subTheme: "Giai đoạn II: Thời kỳ Yêu nước & Kháng chiến",
    title: "Tiến sĩ – Nhà giáo khởi xướng phong trào Duy Tân học hiệu Trung Kỳ",
    img: "assets/teachers/dt_25_tran_quy_cap.jpg",
    career: "Trần Quý Cáp (tự Dã Hàng, hiệu Thai Xuyên) quê làng Bất Nhị, huyện Điện Bàn, tỉnh Quảng Nam. Đỗ Tiến sĩ khoa Giáp Thìn (1904), ông cùng Phan Châu Trinh và Huỳnh Thúc Kháng kết thành bộ ba chí sĩ 'Quảng Nam tam kiệt' dẫn đầu phong trào Duy Tân sôi nổi khắp Trung Kỳ. Ông từng giữ chức Giáo thụ Thăng Bình, lấy trường học làm căn cứ tuyên truyền tư tưởng đổi mới.",
    reforms: "• Khởi xướng phong trào lập trường Duy Tân học hiệu khắp dải đất miền Trung, cổ vũ học chữ Quốc ngữ, cắt tóc ngắn, mặc âu phục và bài trừ mê tín dị đoan.\n• Tác giả bài phú 'Lương ngọc vị trác' và bài văn 'Chí thành thông thánh' nổi tiếng, biến kỳ thi trường quy thành diễn đàn công khai vạch trần thối nát của nền khoa cử thực dân phong kiến.\n• Năm 1908, phong trào kháng thuế Trung Kỳ bùng nổ, ông bị thực dân Pháp bắt giam và xử chém tại Khánh Hòa. Trước khi hy sinh, ông vẫn ung dung đĩnh đạc ngâm thơ, nêu cao khí phách bất khuất của người thầy vì nước vì dân.",
    legacy: "Tấm gương sáng ngời của người thầy dấn thân trọn đời cho sự nghiệp canh tân giáo dục và giải phóng dân tộc, lưu danh thiên cổ cùng non sông đất nước."
  },
  {
    id: 11,
    name: "Nguyễn Tất Thành – Hồ Chí Minh",
    years: "1890 – 1969",
    period: "yeu_nuoc_khang_chien",
    stageNum: 2,
    subTheme: "Giai đoạn II: Thời kỳ Yêu nước & Kháng chiến",
    title: "Thầy giáo trường Dục Thanh (1910) – Lãnh tụ vĩ đại & Người khai sinh nền GD cách mạng",
    img: "assets/teachers/dt_26_nguyen_tat_thanh.jpg",
    career: "Nguyễn Tất Thành (Chủ tịch Hồ Chí Minh) sinh tại làng Sen, xã Kim Liên, huyện Nam Đàn, Nghệ An. Tháng 9 năm 1910, trên bước đường bôn ba tìm đường cứu nước, người thanh niên yêu nước Nguyễn Tất Thành đã dừng chân tại thị xã Phan Thiết (Bình Thuận) và làm thầy giáo giảng dạy tại Trường Dục Thanh do các sĩ phu phong trào Duy Tân sáng lập.",
    reforms: "• Tại trường Dục Thanh, Thầy Thành dạy chữ Quốc ngữ, chữ Hán và tiếng Pháp cho học sinh lớp Nhì và lớp Ba; đưa phương pháp giáo dục trực quan, gắn bài học với tình yêu thiên nhiên, đất nước và rèn luyện thể chất cho học trò.\n• Người thầy vĩ đại khai sinh nền Giáo dục Cách mạng Việt Nam sau năm 1945: Ký sắc lệnh thành lập Nha Bình dân học vụ (8/9/1945), mở đầu chiến dịch diệt giặc dốt vĩ đại nhất lịch sử.\n• Đề ra triết lý giáo dục nhân văn sâu sắc: 'Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người' và 'Dù khó khăn đến đâu cũng phải tiếp tục thi đua dạy tốt và học tốt'.",
    legacy: "Anh hùng giải phóng dân tộc, Nhà văn hóa kiệt xuất, Người thầy giáo vĩ đại của muôn thế hệ cách mạng Việt Nam."
  },
  {
    id: 12,
    name: "Trần Phú",
    years: "1904 – 1931",
    period: "yeu_nuoc_khang_chien",
    stageNum: 2,
    subTheme: "Giai đoạn II: Thời kỳ Yêu nước & Kháng chiến",
    title: "Thầy giáo trường Tiểu học Cao Xuân Dục (Vinh) – Tổng Bí thư đầu tiên của Đảng",
    img: "assets/teachers/Trần Phú 3.png",
    career: "Trần Phú quê làng Tùng Ảnh, huyện Đức Thọ, tỉnh Hà Tĩnh; sinh tại huyện Tuy An, tỉnh Phú Yên. Năm 1922, ông thi đỗ đầu kỳ thi Thành chung tại Trường Quốc học Huế. Tốt nghiệp, ông được bổ nhiệm về làm giáo viên giảng dạy tại Trường Tiểu học Cao Xuân Dục tại thành phố Vinh (Nghệ An) từ năm 1922 đến năm 1925 trước khi sang Quảng Châu hoạt động cách mạng.",
    reforms: "• Người thầy giáo trẻ đầy nhiệt huyết, tận tụy truyền thụ tri thức và bồi dưỡng lý tưởng sống cao đẹp, khơi dậy tinh thần yêu nước trong tâm hồn học sinh trường Cao Xuân Dục.\n• Cùng các đồng nghiệp và sĩ phu yêu nước thành lập Hội Phục Việt (sau đổi thành Hội Hưng Nam, Tân Việt Cách mạng Đảng) tại thành Vinh.\n• Tác giả Luận cương Chính trị năm 1930 và được bầu làm Tổng Bí thư đầu tiên của Đảng Cộng sản Đông Dương khi mới 26 tuổi.\n• Lời dặn bất hủ trước lúc hy sinh: 'Hãy giữ vững chí khí chiến đấu!', mãi là tấm gương ngời sáng cho các thế hệ nhà giáo và thanh niên Việt Nam.",
    legacy: "Tấm gương sáng ngời của người thầy giáo cách mạng trọn đời cống hiến hy sinh vì độc lập tự do của Tổ quốc và hạnh phúc của nhân dân."
  },
  {
    id: 13,
    name: "Hà Huy Tập",
    years: "1906 – 1941",
    period: "yeu_nuoc_khang_chien",
    stageNum: 2,
    subTheme: "Giai đoạn II: Thời kỳ Yêu nước & Kháng chiến",
    title: "Người thầy giáo cách mạng – Tổng Bí thư BCH Trung ương Đảng Cộng sản",
    img: "assets/teachers/Hà Huy Tập1.jpe",
    career: "Hà Huy Tập sinh tại làng Kim Nặc, tổng Thổ Ngọa (nay thuộc xã Cẩm Hưng, huyện Cẩm Xuyên, tỉnh Hà Tĩnh). Sau khi tốt nghiệp Trường Quốc học Huế năm 1923, ông làm thầy giáo dạy học tại Trường Tiểu học Pháp - Việt thị trấn Nha Trang, sau đó vào Sài Gòn tiếp tục dạy học tại Trường Tiểu học tư thục An Nam.",
    reforms: "• Người thầy giáo truyền bá tri thức tiến bộ và tinh thần yêu nước cho học sinh các trường Nam Trung Bộ và Sài Gòn; tích cực vận động học sinh tham gia phong trào để tang cụ Phan Châu Trinh (1926).\n• Nhà lý luận mác-xít lỗi lạc của Đảng, từng giữ trọng trách Tổng Bí thư Ban Chấp hành Trung ương Đảng Cộng sản Đông Dương (1936–1938), trực tiếp chèo lái phong trào Mặt trận Dân chủ Đông Dương.\n• Tác giả của nhiều cuốn sách lý luận sắc bén và tài liệu giáo dục tư tưởng chính trị cách mạng mẫu mực.",
    legacy: "Người thầy giáo cách mạng kiên trung, bất khuất, nhà lãnh đạo xuất sắc đã hiến dâng trọn vẹn tuổi thanh xuân cho sự nghiệp giải phóng dân tộc."
  },
  {
    id: 14,
    name: "Dương Quảng Hàm",
    years: "1898 – 1946",
    period: "yeu_nuoc_khang_chien",
    stageNum: 2,
    subTheme: "Giai đoạn II: Thời kỳ Yêu nước & Kháng chiến",
    title: "Liệt sĩ, Nhà giáo – Hiệu trưởng Trường Bưởi (Chu Văn An), Tác giả Quốc văn trích diễm",
    img: "assets/teachers/dt_29_duong_quang_ham.jpg",
    career: "Dương Quảng Hàm (hiệu Hải Lượng) quê làng Mễ Sở, huyện Văn Giang, tỉnh Hưng Yên. Tốt nghiệp thủ khoa Trường Cao đẳng Sư phạm Đông Dương năm 1920, ông về giảng dạy môn Văn học và Lịch sử tại Trường Bưởi (Trường Bảo hộ, nay là Trường THPT Chu Văn An, Hà Nội) suốt hơn 25 năm. Sau Cách mạng Tháng Tám 1945, ông được Chính phủ cử giữ chức Tổng Thanh tra Trung học vụ và Hiệu trưởng Trường Chu Văn An.",
    reforms: "• Đặt nền móng cho môn Văn học sử Việt Nam trong nhà trường với những bộ sách giáo khoa kinh điển: 'Việt Nam văn học sử yếu' (1943) và 'Việt Nam thi văn hợp tuyển' (1942).\n• Đấu tranh không mệt mỏi đưa tiếng Việt và văn học dân tộc vào chương trình giảng dạy chính khóa thay thế vị thế độc tôn của tiếng Pháp.\n• Đào tạo nhiều thế hệ trí thức, nhà khoa học lớn của đất nước; anh dũng hy sinh tại Hà Nội trong những ngày đầu Toàn quốc kháng chiến tháng 12 năm 1946.",
    legacy: "Ông được Nhà nước truy tặng danh hiệu Liệt sĩ, tên ông được đặt cho nhiều trường học và đường phố tại Hà Nội, TP. Hồ Chí Minh và các tỉnh thành."
  },
  {
    id: 15,
    name: "Võ Nguyên Giáp",
    years: "1911 – 2013",
    period: "yeu_nuoc_khang_chien",
    stageNum: 2,
    subTheme: "Giai đoạn II: Thời kỳ Yêu nước & Kháng chiến",
    title: "Thầy giáo dạy Lịch sử Trường Thăng Long – Đại tướng Tổng Tư lệnh kiệt xuất",
    img: "assets/teachers/dt_31_vo_nguyen_giap.jpg",
    career: "Võ Nguyên Giáp sinh tại xã Lộc Thủy, huyện Lệ Thủy, tỉnh Quảng Bình. Tốt nghiệp Cử nhân Luật tại Đại học Đông Dương, từ năm 1936 đến năm 1939, ông là giáo sư (thầy giáo) dạy môn Lịch sử và Địa lý tại Trường Tư thục Thăng Long (Hà Nội).",
    reforms: "• Người thầy giáo dạy Lịch sử truyền cảm hứng đặc biệt: Dùng những bài học về lịch sử dựng nước và giữ nước oai hùng của dân tộc để thổi bùng ngọn lửa yêu nước và ý chí đấu tranh giải phóng dân tộc trong tâm hồn học sinh.\n• Cùng các trí thức yêu nước tại Trường Thăng Long (Đặng Thai Mai, Hoàng Minh Giám, Vũ Đình Hòe) biến ngôi trường thành chiếc nôi ươm mầm cán bộ cốt cán cho cách mạng.\n• Đại tướng Tổng Tư lệnh đầu tiên của Quân đội nhân dân Việt Nam, người anh cả của lực lượng vũ trang nhân dân, Tổng Tư lệnh chỉ huy thắng lợi Chiến dịch Điện Biên Phủ 'lừng lẫy năm châu, chấn động địa cầu'.\n• Trọn đời luôn dành sự quan tâm sâu sắc đến sự nghiệp giáo dục và thế hệ trẻ, từng giữ cương vị Phó Chủ tịch Hội đồng Bộ trưởng phụ trách Khoa học – Kỹ thuật và Giáo dục.",
    legacy: "Đại tướng huyền thoại của nhân loại, người thầy giáo kính yêu mẫu mực về đạo đức, tài năng quân sự và tấm lòng trọn vẹn vì nhân dân đất nước."
  },
  {
    id: 16,
    name: "Nguyễn Lân",
    years: "1906 – 2003",
    period: "yeu_nuoc_khang_chien",
    stageNum: 2,
    subTheme: "Giai đoạn II: Thời kỳ Yêu nước & Kháng chiến",
    title: "Nhà giáo Nhân dân – Cây đại thụ Tâm lý học & Giáo dục học sư phạm",
    img: "assets/teachers/kc_32_nguyen_lan.jpg",
    career: "Nguyễn Lân quê làng Phùng Chí Kiên, huyện Mỹ Hào, tỉnh Hưng Yên. Tốt nghiệp thủ khoa Trường Cao đẳng Sư phạm Đông Dương năm 1932, ông đi dạy học ở Huế, Hà Nội rồi tham gia kháng chiến. Sau Cách mạng Tháng Tám, ông làm Giám đốc Giáo dục Liên khu X, Hiệu trưởng Trường Dự bị Đại học và Sư phạm Trung cấp Trung ương tại chiến khu Việt Bắc, sau đó là Giáo sư Trường Đại học Sư phạm Hà Nội.",
    reforms: "• Tác giả của cuốn tiểu thuyết văn học giáo dục nổi tiếng 'Cậu bé nhà quê' (1925) cổ vũ trẻ em nghèo hiếu học vươn lên.\n• Đặt nền móng xây dựng bộ môn Tâm lý học và Giáo dục học sư phạm Việt Nam hiện đại, biên soạn bộ 'Từ điển Từ và Ngữ Việt Nam' đồ sộ.\n• Trực tiếp đào tạo hàng vạn thầy cô giáo cốt cán cho hệ thống trường sư phạm và phổ thông trên cả nước.\n• Người cha mẫu mực của một gia đình hiếu học tiêu biểu với tất cả các con đều là Giáo sư, Tiến sĩ đầu ngành cống hiến cho đất nước.",
    legacy: "Được Nhà nước phong tặng danh hiệu Nhà giáo Nhân dân đợt đầu tiên (1988) và trao tặng Giải thưởng Nhà nước về Khoa học và Công nghệ."
  },
  {
    id: 17,
    name: "Hồ Đắc Di",
    years: "1900 – 1984",
    period: "yeu_nuoc_khang_chien",
    stageNum: 2,
    subTheme: "Giai đoạn II: Thời kỳ Yêu nước & Kháng chiến",
    title: "GS. Bác sĩ – Hiệu trưởng đầu tiên Trường Đại học Y Hà Nội thời kháng chiến",
    img: "assets/teachers/kc_33_ho_dac_di.jpg",
    career: "Hồ Đắc Di quê làng An Truyền, xã Phú An, huyện Phú Vang, Thừa Thiên Huế. Bảo vệ xuất sắc luận án Tiến sĩ Y khoa tại Đại học Paris năm 1932, ông từ chối ở lại Pháp mà về nước làm việc. Sau Cách mạng Tháng Tám 1945, ông được Chủ tịch Hồ Chí Minh tin tưởng cử giữ chức Hiệu trưởng Trường Đại học Y Dược Hà Nội – trở thành người Việt Nam đầu tiên giữ chức vụ hiệu trưởng một trường đại học quốc gia.",
    reforms: "• Lãnh đạo cuộc sơ tán kỳ tích của Trường Đại học Y Hà Nội lên chiến khu Chiêm Hóa (Tuyên Quang), duy trì công tác đào tạo bác sĩ, y tá liên tục phục vụ cuộc kháng chiến chống Pháp.\n• Đặt nền móng cho nền y học cách mạng Việt Nam: Kết hợp chặt chẽ việc dạy học y khoa với thực hành cứu chữa thương bệnh binh tại mặt trận.\n• Giữ cương vị Hiệu trưởng Trường Đại học Y Hà Nội liên tục gần 30 năm (1945–1974), đào tạo nên đội ngũ giáo sư, bác sĩ rường cột của nền y tế Việt Nam.",
    legacy: "Được Nhà nước trao tặng Huân chương Độc lập hạng Nhất, Giải thưởng Hồ Chí Minh đợt 1 (1996), tên ông được đặt cho các trường học và bệnh viện trên cả nước."
  },
  {
    id: 18,
    name: "Lê Văn Thiêm",
    years: "1918 – 1991",
    period: "yeu_nuoc_khang_chien",
    stageNum: 2,
    subTheme: "Giai đoạn II: Thời kỳ Yêu nước & Kháng chiến",
    title: "GS. Tiến sĩ – Cha đẻ của nền Toán học hiện đại Việt Nam",
    img: "assets/teachers/kc_34_le_van_thiem.jpg",
    career: "Lê Văn Thiêm quê làng Trung Lễ, huyện Đức Thọ, tỉnh Hà Tĩnh. Ông là người Việt Nam đầu tiên bảo vệ thành công luận án Tiến sĩ Quốc gia về Toán học tại Đại học Sorbonne (Pháp) và Tiến sĩ Khoa học tại Đại học Gottingen (Đức). Đang giảng dạy tại Đại học Zurich (Thụy Sĩ), năm 1949 ông từ bỏ cuộc sống giàu sang ở châu Âu, theo lời kêu gọi của Bác Hồ bí mật trở về Tổ quốc tham gia kháng chiến.",
    reforms: "• Người thầy đặt nền móng xây dựng các trường đại học khoa học cơ bản đầu tiên: Hiệu trưởng Trường Khoa học Cơ bản và Đại học Sư phạm Khoa học tại chiến khu Việt Bắc.\n• Hiệu phó đầu tiên của Trường Đại học Tổng hợp Hà Nội (1956), Viện trưởng đầu tiên của Viện Toán học Việt Nam, Chủ tịch đầu tiên của Hội Toán học Việt Nam.\n• Trực tiếp giảng dạy và đào tạo hầu hết các thế hệ nhà toán học, nhà sư phạm toán học hàng đầu của Việt Nam thế kỷ XX.",
    legacy: "Được Nhà nước trao tặng Huân chương Độc lập hạng Nhất và Giải thưởng Hồ Chí Minh đợt 1 (1996). Tên ông được đặt cho Giải thưởng Lê Văn Thiêm danh giá của Hội Toán học Việt Nam."
  },
  {
    id: 19,
    name: "Ngụy Như Kon Tum",
    years: "1913 – 1999",
    period: "yeu_nuoc_khang_chien",
    stageNum: 2,
    subTheme: "Giai đoạn II: Thời kỳ Yêu nước & Kháng chiến",
    title: "GS. Vật lý – Hiệu trưởng đầu tiên Trường Đại học Tổng hợp Hà Nội (1956–1981)",
    img: "assets/teachers/kc_36_nguy_nhu_kon_tum.jpg",
    career: "Ngụy Như Kon Tum sinh tại thị xã Kon Tum, quê gốc tại làng Hương Cần, huyện Hương Trà, Thừa Thiên Huế. Tốt nghiệp Thạc sĩ Vật lý tại Đại học Paris (Sorbonne, Pháp), ông trở về nước dạy học tại Trường Bưởi. Sau Cách mạng Tháng Tám, ông tích cực tham gia kháng chiến chống Pháp, làm Giám đốc Khu học xá Trung ương tại Nam Ninh trước khi về làm Hiệu trưởng Trường Đại học Tổng hợp Hà Nội.",
    reforms: "• Hiệu trưởng Trường Đại học Tổng hợp Hà Nội suốt 25 năm liên tục (1956–1981), xây dựng trường trở thành cái nôi đào tạo khoa học cơ bản hàng đầu cả nước.\n• Đề xướng mô hình đại học đa ngành, kết hợp nghiên cứu khoa học cơ bản đỉnh cao với đào tạo nhân tài cho đất nước.\n• Người thầy đức độ, mẫu mực, chăm lo từng bữa ăn giấc ngủ cho cán bộ, sinh viên trong những năm tháng sơ tán chống chiến tranh phá hoại của giặc Mỹ.",
    legacy: "Được Nhà nước phong tặng danh hiệu Nhà giáo Nhân dân, Huân chương Độc lập hạng Nhất và Giải thưởng Nhà nước về Khoa học và Công nghệ."
  },
  {
    id: 20,
    name: "Hoàng Tụy",
    years: "1927 – 2019",
    period: "yeu_nuoc_khang_chien",
    stageNum: 2,
    subTheme: "Giai đoạn II: Thời kỳ Yêu nước & Kháng chiến",
    title: "GS. Toán học – Cha đẻ của Tối ưu toàn cục thế giới & Nhà cải cách giáo dục",
    img: "assets/teachers/kc_37_hoang_tuy.jpg",
    career: "Hoàng Tụy quê làng Xuân Đài, thị xã Điện Bàn, tỉnh Quảng Nam. Ông tự học toán học trong hoàn cảnh kháng chiến chống Pháp gian khổ, bảo vệ thành công luận án Tiến sĩ Toán học tại Đại học Tổng hợp Lomonosov (Liên Xô) năm 1959. Ông nguyên là Viện trưởng Viện Toán học Việt Nam, Giáo sư danh dự của nhiều trường đại học quốc tế.",
    reforms: "• Tác giả của phát minh toán học chấn động quốc tế mang tên 'Lát cắt Tuy' (Tuy's Cut, 1964), mở đầu cho một phân ngành toán học mới của thế giới: Tối ưu toàn cục (Global Optimization).\n• Người thầy đào tạo nhiều thế hệ tiến sĩ, nhà toán học ưu tú của Việt Nam vươn tầm đỉnh cao thế giới.\n• Nhà cải cách giáo dục kiên định và tâm huyết: Không ngừng cất lên tiếng nói thẳng thắn, tâm huyết vì một nền giáo dục thực học, liêm chính, giải phóng tư duy sáng tạo và hội nhập quốc tế.",
    legacy: "Được Nhà nước trao tặng Huân chương Độc lập hạng Nhất, Giải thưởng Hồ Chí Minh đợt 1 (1996) và Giải thưởng quốc tế danh giá Constantin Caratheodory Prize (2011)."
  },
  {
    id: 21,
    name: "Tôn Thất Tùng",
    years: "1912 – 1982",
    period: "yeu_nuoc_khang_chien",
    stageNum: 2,
    subTheme: "Giai đoạn II: Thời kỳ Yêu nước & Kháng chiến",
    title: "GS. Viện sĩ, Bác sĩ – Bậc thầy phẫu thuật gan thế giới & Người thầy ngành ngoại khoa",
    img: "assets/teachers/kc_38_ton_that_tung.jpg",
    career: "Tôn Thất Tùng quê làng An Cựu, TP. Huế; sinh tại Thanh Hóa. Tốt nghiệp Bác sĩ Y khoa tại Hà Nội năm 1939. Trong kháng chiến chống Pháp, ông giữ chức Thứ trưởng Bộ Y tế kiêm Cố vấn phẫu thuật của Bộ Tổng tư lệnh Quân đội nhân dân Việt Nam. Hòa bình lập lại, ông làm Giám đốc Bệnh viện Hữu nghị Việt Đức, Chủ nhiệm Bộ môn Ngoại Trường Đại học Y Hà Nội.",
    reforms: "• Tác giả của 'Phương pháp cắt gan Tôn Thất Tùng' (phương pháp cắt gan có kế hoạch, cắt gan khô) nổi tiếng khắp nền y học thế giới, giúp rút ngắn thời gian mổ gan từ hàng giờ xuống vài phút.\n• Người thầy nghiêm cẩn, tận tụy đào tạo nên hàng trăm bác sĩ phẫu thuật ngoại khoa xuất sắc cho đất nước.\n• Nhà khoa học tiên phong trên thế giới nghiên cứu và tố cáo tội ác hủy diệt môi trường của chất độc da cam/dioxin do quân đội Mỹ rải xuống Việt Nam.",
    legacy: "Viện sĩ Viện Hàn lâm Y học Pháp, Viện sĩ Viện Hàn lâm Phẫu thuật Paris, Giải thưởng Hồ Chí Minh đợt 1 (1996). Huân chương Lannelongue danh giá của Viện Hàn lâm Ngoại khoa Pháp."
  },
  {
    id: 22,
    name: "Trần Văn Giàu",
    years: "1911 – 2010",
    period: "yeu_nuoc_khang_chien",
    stageNum: 2,
    subTheme: "Giai đoạn II: Thời kỳ Yêu nước & Kháng chiến",
    title: "GS. NGND, Anh hùng Lao động – Cây đại thụ Triết học & Sử học cách mạng",
    img: "assets/teachers/kc_40_tran_van_giau.jpg",
    career: "Trần Văn Giàu (bí danh Sáu Giàu) quê xã An Lục Long, huyện Châu Thành, tỉnh Long An. Tốt nghiệp Đại học Toulouse (Pháp) và Trường Đại học Phương Đông (Liên Xô), ông từng là Bí thư Xứ ủy Nam Kỳ, Chủ tịch Ủy ban Kháng chiến Nam Bộ. Năm 1951, ông chuyển sang công tác giáo dục, tham gia sáng lập Trường Dự bị Đại học ở Thanh Hóa rồi làm Giáo sư Trường Đại học Tổng hợp Hà Nội và Đại học Sư phạm Hà Nội.",
    reforms: "• Người thầy đặt nền móng xây dựng khoa Lịch sử và bộ môn Triết học hiện đại tại các trường đại học sư phạm và tổng hợp Việt Nam.\n• Tác giả của hàng chục bộ công trình sử học, triết học đồ sộ như 'Sự phát triển của tư tưởng ở Việt Nam từ thế kỷ XIX đến Cách mạng Tháng Tám', 'Lịch sử giai cấp công nhân Việt Nam', 'Miền Nam giữ vững thành đồng'.\n• Tấm gương nhà giáo mẫu mực hiến trọn số tiền bán căn nhà của mình (gần 1.000 lượng vàng) để thành lập Quỹ Giải thưởng Trần Văn Giàu khuyến khích các công trình nghiên cứu lịch sử Nam Bộ.",
    legacy: "Được Nhà nước phong tặng danh hiệu Anh hùng Lao động thời kỳ đổi mới (2003), Nhà giáo Nhân dân đợt 1 (1988), Huân chương Hồ Chí Minh và Giải thưởng Hồ Chí Minh đợt 1 (1996)."
  },

  // --------------------------------------------------------------------------
  // GIAI ĐOẠN 3: THỜI KỲ ĐỔI MỚI & HỘI NHẬP (04 TRANH: TỪ 23 ĐẾN 26)
  // --------------------------------------------------------------------------
  {
    id: 23,
    name: "Cố Thủ tướng Phạm Văn Đồng",
    years: "1906 – 2000",
    period: "doi_moi_hoi_nhap",
    stageNum: 3,
    subTheme: "Giai đoạn III: Thời kỳ Đổi mới & Hội nhập",
    title: "Nhà lãnh đạo kiệt xuất – Người đề xướng tư tưởng 'Giáo dục là quốc sách hàng đầu'",
    img: "assets/teachers/Phạm Văn Đồng.jpe",
    career: "Phạm Văn Đồng (bí danh Anh Tô) quê xã Đức Tân, huyện Mộ Đức, tỉnh Quảng Ngãi. Ông là nhà hoạt động cách mạng tiền bối xuất sắc của Đảng và Nhà nước, học trò xuất sắc của Chủ tịch Hồ Chí Minh. Ông đảm nhiệm cương vị Thủ tướng Chính phủ Việt Nam suốt hơn ba thập kỷ (1955–1987). Trong suốt cuộc đời hoạt động cách mạng, ông luôn dành tình cảm đặc biệt và tâm huyết lớn lao cho sự nghiệp 'Trồng người'.",
    reforms: "• Người khởi xướng và kiên trì đưa tư tưởng chiến lược 'Giáo dục là quốc sách hàng đầu, tương lai của dân tộc' vào các nghị quyết của Đảng và chính sách của Nhà nước.\n• Đề ra phương châm giáo dục cốt lõi nổi tiếng: 'Thầy ra thầy, trò ra trò, trường ra trường, lớp ra lớp' – xây dựng trật tự, kỷ cương và chất lượng thực chất cho học đường.\n• Phát động và chỉ đạo phong trào giữ gìn sự trong sáng của tiếng Việt, coi tiếng mẹ đẻ là tài sản vô giá cần được bảo tồn và trau dồi qua từng trang sách giáo khoa.\n• Luôn dành tình thương yêu, sự trân trọng tuyệt đối với đội ngũ nhà giáo, khẳng định: Nghề thầy giáo là nghề cao quý nhất trong những nghề cao quý, nghề sáng tạo nhất trong những nghề sáng tạo.",
    legacy: "Tư tưởng giáo dục sâu sắc và nhân văn của Cố Thủ tướng Phạm Văn Đồng mãi là kim chỉ nam cho công cuộc đổi mới căn bản, toàn diện nền giáo dục và đào tạo nước nhà."
  },
  {
    id: 24,
    name: "GS. NGND Nguyễn Cảnh Toàn",
    years: "1926 – 2017",
    period: "doi_moi_hoi_nhap",
    stageNum: 3,
    subTheme: "Giai đoạn III: Thời kỳ Đổi mới & Hội nhập",
    title: "Nhà toán học – Người kiên trì khởi xướng triết lý tự học & đổi mới giáo dục",
    img: "assets/teachers/hd_41_nguyen_canh_toan.jpg",
    career: "Nguyễn Cảnh Toàn quê xã Đô Lương, huyện Đô Lương, tỉnh Nghệ An. Ông bảo vệ thành công luận án Phó tiến sĩ (1958) và Tiến sĩ Khoa học (1963) về Hình học tại Đại học Lomonosov (Liên Xô). Ông nguyên là Thứ trưởng Bộ Giáo dục, Hiệu trưởng Trường Đại học Sư phạm Hà Nội, Phó Chủ tịch Hội Toán học Việt Nam, Tổng biên tập Tạp chí Toán học và Tuổi trẻ.",
    reforms: "• Khởi xướng triết lý giáo dục hiện đại: 'Dạy học là dạy tự học' – chuyển từ truyền thụ kiến thức một chiều sang rèn luyện phương pháp tự học, tự nghiên cứu suốt đời cho người học.\n• Sáng lập và lãnh đạo phong trào Tạp chí 'Toán học và Tuổi trẻ' suốt hơn 40 năm, ươm mầm đam mê toán học cho hàng triệu thế hệ học sinh sinh viên Việt Nam.\n• Đề xuất cải cách giáo dục phổ thông theo hướng phát huy năng lực tư duy độc lập, sáng tạo, phê phán thói học vẹt, học tủ và bệnh thành tích trong thi cử.",
    legacy: "Được Nhà nước phong tặng danh hiệu Nhà giáo Nhân dân, Huân chương Độc lập hạng Nhất. Tấm gương kiên định của người thầy trọn đời cống hiến cho sự nghiệp đổi mới sư phạm."
  },
  {
    id: 25,
    name: "GS. TSKH Hồ Ngọc Đại",
    years: "Sinh năm 1936",
    period: "doi_moi_hoi_nhap",
    stageNum: 3,
    subTheme: "Giai đoạn III: Thời kỳ Đổi mới & Hội nhập",
    title: "Người khởi xướng Công nghệ giáo dục tại Việt Nam – Đề cao niềm hạnh phúc của trẻ thơ",
    img: "assets/teachers/hd_42_ho_ngoc_dai.jpg",
    career: "Hồ Ngọc Đại sinh tại xã An Khương, huyện Hải Lăng, tỉnh Quảng Trị. Ông bảo vệ luận án Tiến sĩ Khoa học Tâm lý học tại Viện Hàn lâm Khoa học Giáo dục Liên Xô dưới sự hướng dẫn của các nhà tâm lý học hàng đầu thế giới (Vygotsky, Davydov). Năm 1978, ông thành lập Trung tâm Thực nghiệm Giáo dục và Trường Thực nghiệm Giảng Võ (Hà Nội).",
    reforms: "• Khởi xướng mô hình 'Công nghệ Giáo dục' (CGD), biến quá trình giáo dục thành một quy trình khoa học chuẩn mực mà bất kỳ học sinh bình thường nào cũng có thể tiếp thu vững chắc.\n• Đưa triết lý giáo dục nhân văn đột phá: 'Mỗi ngày đến trường là một ngày vui', 'Đi học là hạnh phúc', tôn trọng sự phát triển tự nhiên của trẻ thơ.\n• Đổi mới phương pháp dạy tiếng Việt lớp 1 bằng cấu trúc ngữ âm học trực quan, giúp trẻ nắm chắc quy luật ngôn ngữ và không bao giờ tái mù chữ.\n• Đào tạo nhiều thế hệ học sinh có tư duy tự tin, độc lập, phản biện và năng lực tự học xuất sắc.",
    legacy: "Nhà khoa học giáo dục tiên phong mở đường cho những ý tưởng đổi mới căn bản phương pháp sư phạm tiểu học tại Việt Nam thời kỳ mở cửa."
  },
  {
    id: 26,
    name: "NGƯT Nguyễn Ngọc Ký",
    years: "1947 – 2022",
    period: "doi_moi_hoi_nhap",
    stageNum: 3,
    subTheme: "Giai đoạn III: Thời kỳ Đổi mới & Hội nhập",
    title: "Nhà giáo Ưu tú – Tấm gương nghị lực phi thường 'Bàn chân kỳ diệu'",
    img: "assets/teachers/hd_43_nguyen_ngoc_ky.jpg",
    career: "Nguyễn Ngọc Ký sinh tại xã Hải Thanh, huyện Hải Hậu, tỉnh Nam Định. Năm lên 4 tuổi, một cơn sốt bại liệt đã cướp đi vĩnh viễn đôi bàn tay của ông. Không chịu đầu hàng số phận nghiệt ngã, cậu bé Ký kiên trì dùng đôi chân kẹp viên gạch, mảnh phấn tập viết từng nét chữ trên nền đất. Ông đỗ vào khoa Ngữ văn Trường Đại học Tổng hợp Hà Nội và tốt nghiệp năm 1970, sau đó trở về quê hương đứng trên bục giảng dạy học suốt gần 40 năm.",
    reforms: "• Người thầy giáo huyền thoại dùng chân viết phấn trên bảng đen, truyền lửa ý chí, niềm tin và khát vọng sống cho hàng triệu học trò khắp cả nước.\n• Tác giả của nhiều tập tự truyện và truyện ngắn giáo dục giàu cảm xúc: 'Tôi đi học', 'Tôi học đại học', 'Tôi đi dạy học', 'Tâm huyết trao đời'.\n• Nhà diễn thuyết giáo dục truyền cảm hứng không biết mệt mỏi, đi giao lưu với hơn 1.500 trường học trên khắp mọi miền Tổ quốc, động viên thế hệ trẻ vượt khó vươn lên làm chủ tương lai.",
    legacy: "Được Bác Hồ hai lần tặng Huy hiệu của Người (1962, 1963), được Nhà nước phong tặng danh hiệu Nhà giáo Ưu tú (1992). Biểu tượng bất diệt về nghị lực phi thường của ngành Giáo dục Việt Nam."
  }
];

// Xuất ra môi trường trình duyệt và Node.js
if (typeof window !== 'undefined') {
  window.themesData = themesData;
  window.teachersData = teachersData;
}
if (typeof module !== 'undefined') {
  module.exports = { themesData, teachersData };
}
