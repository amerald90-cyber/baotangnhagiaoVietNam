
// ==================== DỮ LIỆU CHUẨN 15 BỘ TRƯỞNG BỘ GIÁO DỤC ====================
const ministersData = [
  {
    "id": 1,
    "name": "GS. Vũ Đình Hòe",
    "years": "1912 – 2011",
    "term": "Bộ trưởng Bộ Quốc gia Giáo dục (8/1945 – 3/1946)",
    "img": "assets/ministers/GS. Vũ Đình Hòe.jpg",
    "career": "GS. Vũ Đình Hòe sinh ra trong một gia đình truyền thống Nho học tại Lương Ngọc, Bình Giang, Hải Dương. Ông tốt nghiệp Cử nhân Luật tại Đại học Đông Dương, là một trong những sáng lập viên của trường tư thục Thăng Long nổi tiếng và chủ nhiệm báo Thanh Nghị. Sau Cách mạng Tháng Tám 1945, ông được Chủ tịch Hồ Chí Minh mời giữ chức Bộ trưởng Quốc gia Giáo dục đầu tiên trong Chính phủ lâm thời. Sau đó, ông đảm nhiệm trọng trách Bộ trưởng Bộ Tư pháp trong suốt 15 năm (1946–1960).",
    "reforms": "• Trực tiếp tham mưu và ký các Sắc lệnh lịch sử lập Nha Bình dân học vụ (8/9/1945), mở màn chiến dịch 'diệt giặc dốt' đưa hàng triệu người dân thoát mù chữ.\n• Đề xướng và thực hiện quyết liệt chủ trương giảng dạy hoàn toàn bằng tiếng Việt ở tất cả các cấp học, kể cả bậc đại học.\n• Cùng các cộng sự xây dựng đề án cải cách giáo dục đầu tiên theo 3 nguyên tắc: Dân tộc, Khoa học và Đại chúng, thay thế hoàn toàn nền giáo dục thực dân cũ.",
    "legacy": "Huân chương Độc lập hạng Nhất (1996), Huân chương Kháng chiến hạng Nhất. Ông là tấm gương sáng về tinh thần đem toàn bộ kiến thức luật học và giáo dục phụng sự cách mạng và nhân dân.",
    "highlight": "Bộ trưởng đầu tiên của nước VNDCCH. Ký sắc lệnh thành lập Nha Bình dân học vụ, mở đầu chiến dịch diệt giặc dốt vĩ đại của đất nước."
  },
  {
    "id": 2,
    "name": "GS. Đặng Thai Mai",
    "years": "1902 – 1984",
    "term": "Bộ trưởng Bộ Quốc gia Giáo dục (3/1946 – 11/1946)",
    "img": "assets/ministers/Giáo sư Đặng Thai Mai.jpg",
    "career": "GS. Đặng Thai Mai quê Diễn Châu, Nghệ An, xuất thân trong gia đình Nho học danh giá. Tốt nghiệp Cao đẳng Sư phạm Đông Dương, ông từng tham gia phong trào Tân Việt, dạy học tại trường Thăng Long và là học giả văn hóa tiền bối. Sau khi rời vị trí Bộ trưởng Bộ Quốc gia Giáo dục (1946), ông làm Chủ tịch Ủy ban Kháng chiến Thanh Hóa, Hội trưởng Hội Văn hóa Việt Nam, Giám đốc Sở Giáo dục Liên khu IV và Viện trưởng Viện Văn học đầu tiên (1959–1976).",
    "reforms": "• Chỉ đạo tổ chức và chuyển hướng hệ thống trường lớp sang thời chiến, duy trì việc dạy và học liên tục trong hoàn cảnh kháng chiến ác liệt và tản cư.\n• Đặt nền móng cho việc xây dựng phân khoa Văn khoa thuộc Đại học Sư phạm và Đại học Tổng hợp Hà Nội.\n• Đào tạo trực tiếp nhiều thế hệ giáo viên cốt cán và các nhà nghiên cứu lý luận, phê bình văn học hiện đại đầu tiên của cách mạng.",
    "legacy": "Giải thưởng Hồ Chí Minh đợt 1 (1996), Huân chương Hồ Chí Minh. Các tác phẩm học thuật kinh điển: 'Văn học khái luận', 'Chủ nghĩa nhân văn thời Phục hưng', các công trình nghiên cứu dịch thuật Lỗ Tấn đồ sộ.",
    "highlight": "Nhà văn hóa, nhà giáo dục lỗi lạc. Ban hành chương trình giáo dục kháng chiến đầu tiên và thúc đẩy giảng dạy đại học bằng tiếng Việt."
  },
  {
    "id": 3,
    "name": "GS. Ca Văn Thỉnh",
    "years": "1902 – 1987",
    "term": "Quyền Bộ trưởng Bộ Giáo dục (1946) & Phụ trách GD Nam Bộ",
    "img": "assets/ministers/Giáo sư Ca Văn Thỉnh.jpg",
    "career": "GS. Ca Văn Thỉnh quê Mỏ Cày, Bến Tre. Tốt nghiệp Cao đẳng Sư phạm Đông Dương năm 1928, ông tích cực dạy học và truyền bá tinh thần ái quốc tại Nam Kỳ. Sau Cách mạng Tháng Tám, ông tham gia Ủy ban Kháng chiến tỉnh Bến Tre. Ngày 20/3/1946, ông ra Hà Nội báo cáo tình hình chiến sự miền Nam và được Chính phủ giao giữ chức Quyền Bộ trưởng Bộ Giáo dục, kiêm Vụ trưởng Vụ Sư phạm theo Sắc lệnh số 119/SL ngày 9/7/1946. Về sau, ông trở lại chỉ đạo phong trào giáo dục và văn hóa Nam Bộ.",
    "reforms": "• Điều hành bộ máy giáo dục non trẻ vượt qua tình thế hiểm nghèo trong những tháng trước ngày Toàn quốc kháng chiến bùng nổ.\n• Chú trọng phát triển khâu then chốt: Đào tạo đội ngũ giáo viên sư phạm để đáp ứng phong trào diệt dốt và mở rộng mạng lưới trường làng xã.\n• Xây dựng và duy trì hệ thống trường lớp vùng căn cứ kháng chiến Nam Bộ, kiên trì giữ vững mạch giáo dục dân tộc trước sự kìm kẹp của thực dân.",
    "legacy": "Huân chương Độc lập hạng Nhất. Nhà nghiên cứu uyên bác về văn hóa và địa chí Nam Bộ, nổi bật với các công trình nghiên cứu sâu sắc về Đồ Chiểu và phong trào yêu nước Lục tỉnh.",
    "highlight": "Nhà cách mạng, nhà nghiên cứu tiên phong xây dựng và duy trì hệ thống giáo dục kháng chiến vùng giải phóng Nam Bộ."
  },
  {
    "id": 4,
    "name": "GS. Nguyễn Văn Huyên",
    "years": "1905 – 1975",
    "term": "Bộ trưởng Bộ Giáo dục (11/1946 – 10/1975)",
    "img": "assets/ministers/Giáo sư Nguyễn Văn Huyên và phu nhân.jpg",
    "career": "GS. Nguyễn Văn Huyên quê Kim Chung, Hoài Đức, Hà Nội. Ông xuất sắc nhận bằng Cử nhân Văn khoa, Cử nhân Luật và bảo vệ thành công luận án Tiến sĩ Văn khoa tại Đại học Sorbonne danh giá ở Paris năm 1934. Ông là người giữ trọng trách Tư lệnh ngành Giáo dục lâu năm nhất trong lịch sử Việt Nam (29 năm liên tục), xuyên suốt từ kháng chiến chống Pháp đến đại thắng mùa xuân năm 1975.",
    "reforms": "• Chỉ đạo thắng lợi 2 cuộc Cải cách Giáo dục mang tính bước ngoặt: Cải cách 1950 (xây dựng hệ thống phổ thông 9 năm phục vụ kháng chiến) và Cải cách 1956 (chuyển đổi sang hệ thống phổ thông 10 năm xây dựng CNXH ở miền Bắc).\n• Xây dựng và phát triển phong trào thi đua 'Hai tốt' (Dạy tốt - Học tốt), biểu dương ngọn cờ đầu Trường Phổ thông cấp II Bắc Lý lan tỏa khắp toàn quốc.\n• Lãnh đạo cuộc sơ tán kỳ vĩ của hàng triệu học sinh, sinh viên và các trường đại học lên chiến khu, duy trì việc học không gián đoạn bất chấp bom đạn Mỹ.",
    "legacy": "Giải thưởng Hồ Chí Minh đợt 2 (2000), Huân chương Độc lập hạng Nhất. Di sản của ông là nền tảng trường tồn của hệ thống giáo dục quốc dân hiện đại hoàn toàn bằng tiếng mẹ đẻ.",
    "highlight": "Tư lệnh ngành giáo dục gần 30 năm qua hai cuộc kháng chiến. Chỉ đạo thành công 2 cuộc Cải cách giáo dục lớn (1950 hệ 9 năm và 1956 hệ 10 năm)."
  },
  {
    "id": 5,
    "name": "GS. Tạ Quang Bửu",
    "years": "1910 – 1986",
    "term": "Bộ trưởng Bộ Đại học & THCN (1965 – 1976)",
    "img": "assets/ministers/Giáo sư Tạ Quang Bửu.jpg",
    "career": "GS. Tạ Quang Bửu quê Nam Đàn, Nghệ An. Ông từng theo học toán học và vật lý lượng tử tại các trường đại học hàng đầu châu Âu (ĐH Paris, Bordeaux, Oxford). Ông là một trong những trí thức hàng đầu tham gia Chính phủ từ ngày đầu, từng giữ chức Bộ trưởng Quốc phòng (1947–1948) trước khi trở thành Bộ trưởng đầu tiên của Bộ Đại học và Trung học Chuyên nghiệp.",
    "reforms": "• Đề xướng triết lý giáo dục đại học kinh điển: 'Dạy và học những điều cơ bản nhất, hiện đại nhất và sát thực tiễn Việt Nam nhất'.\n• Trực tiếp đề xuất và thành lập khối lớp Chuyên Toán đặc biệt (tiền thân của hệ thống trường chuyên năng khiếu Việt Nam) từ năm 1965, phát hiện và bồi dưỡng nhiều nhân tài toán học thế giới cho đất nước.\n• Chuẩn hóa chương trình giáo trình đại học, thúc đẩy mạnh mẽ các lĩnh vực khoa học công nghệ mới như điều khiển học, máy tính điện tử, bán dẫn và năng lượng mới.",
    "legacy": "Giải thưởng Hồ Chí Minh đợt 1 (1996), Huân chương Độc lập hạng Nhất. Tên ông được đặt cho Giải thưởng Tạ Quang Bửu – giải thưởng thường niên danh giá bậc nhất dành cho các nhà khoa học Việt Nam.",
    "highlight": "Nhà khoa học tài ba, đặt nền móng hiện đại cho hệ thống đào tạo đại học, cao đẳng và khối trường chuyên toán khoa học cơ bản."
  },
  {
    "id": 6,
    "name": "Bà Nguyễn Thị Bình",
    "years": "Sinh năm 1927",
    "term": "Bộ trưởng Bộ Giáo dục (1976 – 1987)",
    "img": "assets/ministers/Bà Nguyễn Thị Bình..jpg",
    "career": "Bà Nguyễn Thị Bình (tên khai sinh Nguyễn Thị Châu Sa) quê Điện Bàn, Quảng Nam, là cháu ngoại danh sĩ Phan Châu Trinh. Bà là nhà ngoại giao kiệt xuất, Trưởng đoàn đàm phán Chính phủ CMLT Cộng hòa miền Nam Việt Nam tại Hội nghị Paris. Năm 1976, bà được bổ nhiệm làm Bộ trưởng Bộ Giáo dục và sau này đảm nhiệm chức vụ Phó Chủ tịch nước CHXHCN Việt Nam (1992–2002).",
    "reforms": "• Lãnh đạo thực hiện cuộc Cải cách Giáo dục toàn diện năm 1979, sáp nhập và thống nhất hệ thống giáo dục hai miền Nam - Bắc thành hệ thống giáo dục phổ thông 12 năm chuẩn quốc gia.\n• Huy động chiến dịch thần tốc xóa mù chữ cho hàng triệu người dân ở các tỉnh thành phía Nam ngay sau ngày giải phóng.\n• Đề xuất Hội đồng Bộ trưởng ban hành Quyết định chính thức lấy ngày 20/11 hàng năm là 'Ngày Nhà giáo Việt Nam' (bắt đầu từ năm 1982), tôn vinh vị thế thiêng liêng của nghề giáo.",
    "legacy": "Huân chương Hồ Chí Minh, Huân chương Độc lập hạng Nhất, danh hiệu Anh hùng Lao động (2025). Bà sáng lập Quỹ Hòa bình và Phát triển Việt Nam, Quỹ học bổng Vừ A Dính đồng hành cùng học sinh nghèo vượt khó.",
    "highlight": "Nữ Bộ trưởng đầu tiên, nguyên Phó Chủ tịch nước. Lãnh đạo cuộc Cải cách giáo dục toàn diện năm 1979 và thống nhất hệ thống giáo dục hai miền 12 năm."
  },
  {
    "id": 7,
    "name": "GS. Nguyễn Đình Tứ",
    "years": "1932 – 1996",
    "term": "Bộ trưởng Bộ Đại học & THCN (1976 – 1987)",
    "img": "assets/ministers/Giáo sư Nguyễn Đình Tứ.jpg",
    "career": "GS. Nguyễn Đình Tứ quê Can Lộc, Hà Tĩnh. Ông là nhà vật lý hạt nhân kiệt xuất của Việt Nam, từng công tác nghiên cứu tại Viện Liên hiệp Nghiên cứu Hạt nhân Dubna (Liên Xô). Ông giữ chức Bộ trưởng Bộ Đại học và THCN từ năm 1976 đến 1987, Viện trưởng Viện Năng lượng nguyên tử Quốc gia, Bí thư Trung ương Đảng.",
    "reforms": "• Khởi xướng và ban hành quy chế đào tạo sau đại học chính quy (đào tạo Phó tiến sĩ, Tiến sĩ) trong nước từ năm 1976, giảm dần sự phụ thuộc vào gửi đi nước ngoài.\n• Chỉ đạo tiếp quản, tổ chức lại mạng lưới hơn 18 viện và trường đại học ở miền Nam sau năm 1975, nhanh chóng đưa các trường vào guồng quay đào tạo nhân lực tái thiết đất nước.\n• Xây dựng mô hình gắn kết chặt chẽ giữa trường đại học và các cơ sở nghiên cứu khoa học, viện công nghiệp và phòng thí nghiệm trọng điểm.",
    "legacy": "Giải thưởng Hồ Chí Minh về Khoa học & Công nghệ (2000), Huân chương Hồ Chí Minh (2007). Ông là đồng tác giả phát hiện ra phản hạt hyperon sigma âm – một đóng góp lớn cho nền vật lý hạt cơ bản thế giới.",
    "highlight": "Nhà vật lý hạt nhân kiệt xuất, có công lớn mở rộng đào tạo sau đại học và hợp tác quốc tế nghiên cứu khoa học kỹ thuật."
  },
  {
    "id": 8,
    "name": "GS. TSKH. Phạm Minh Hạc",
    "years": "Sinh năm 1935",
    "term": "Bộ trưởng Bộ Giáo dục (1987 – 1990)",
    "img": "assets/ministers/Giáo sư Phạm Minh Hạc.jpg",
    "career": "GS. TSKH. Phạm Minh Hạc quê Đông Ngạc, Bắc Từ Liêm, Hà Nội. Ông tốt nghiệp xuất sắc và nhận bằng Tiến sĩ Khoa học Tâm lý học tại Đại học Tổng hợp Lomonosov (Liên Xô). Sau thời kỳ làm Viện trưởng Viện Khoa học Giáo dục, ông giữ chức Bộ trưởng Bộ Giáo dục trong những năm đầu đất nước tiến hành công cuộc Đổi mới.",
    "reforms": "• Đề ra phương châm hành động cứu nguy hệ thống giáo dục thời kỳ khủng hoảng kinh tế: 'Giữ vững để không tan vỡ, khôi phục những gì đã mất, củng cố những gì còn lại và từng bước phát triển'.\n• Chủ trì soạn thảo và bảo vệ thành công Luật Phổ cập Giáo dục Tiểu học (được Quốc hội thông qua năm 1991) – đạo luật mang tính nền tảng cho quyền học tập của trẻ em.\n• Khởi xướng chiến lược xã hội hóa giáo dục, chấp nhận và khuyến khích các mô hình trường bán công, dân lập để huy động nguồn lực xã hội chăm lo việc học.",
    "legacy": "Giải thưởng Nhà nước về Khoa học & Công nghệ (2010), Huân chương Độc lập hạng Nhất. Chuyên gia đầu ngành với hàng trăm công trình lý luận sâu sắc về tâm lý học hành vi và chiến lược con người Việt Nam.",
    "highlight": "Nhà tâm lý học hàng đầu, mở đường thực hiện chính sách Đổi mới giáo dục (1986), đẩy mạnh xã hội hóa và phổ cập tiểu học."
  },
  {
    "id": 9,
    "name": "GS. TS. Trần Hồng Quân",
    "years": "1937 – 2023",
    "term": "Bộ trưởng Bộ GD&ĐT (1990 – 1997)",
    "img": "assets/ministers/Giáo sư Trần Hồng Quân.jpg",
    "career": "GS. TS. Trần Hồng Quân quê Mỹ Tú, Sóc Trăng. Ông nhận bằng Tiến sĩ ngành Khí động học tại Hungary, nguyên là Hiệu trưởng Đại học Bách khoa TP.HCM. Ông giữ chức Bộ trưởng Bộ Đại học, THCN & Dạy nghề (1987–1990) và trở thành Bộ trưởng đầu tiên của Bộ Giáo dục và Đào tạo sau khi hợp nhất các cơ quan giáo dục (1990–1997).",
    "reforms": "• 'Kiến trúc sư' của mạng lưới giáo dục đại học thời kỳ Đổi mới: Trực tiếp chỉ đạo thành lập Đại học Quốc gia Hà Nội, Đại học Quốc gia TP.HCM và các Đại học Vùng (Huế, Đà Nẵng, Thái Nguyên).\n• Quyết liệt mở đường thành lập hệ thống trường đại học ngoài công lập (dân lập, tư thục), phá bỏ thế độc quyền bao cấp của giáo dục công lập.\n• Chuyển đổi phương thức đào tạo đại học theo học chế tín chỉ mềm dẻo và cải tiến quy trình tuyển sinh thi cử trên phạm vi cả nước.",
    "legacy": "Huân chương Độc lập hạng Nhất. Sau khi nghỉ hưu, ông giữ chức Chủ tịch Hiệp hội Các trường đại học, cao đẳng Việt Nam, tiếp tục cống hiến không mệt mỏi cho sự nghiệp tự chủ đại học.",
    "highlight": "Bộ trưởng đầu tiên khi sáp nhập thành Bộ Giáo dục và Đào tạo. Tiên phong xây dựng mô hình Đại học Quốc gia, đại học đa ngành và hệ thống ngoài công lập."
  },
  {
    "id": 10,
    "name": "GS. TS. Nguyễn Minh Hiển",
    "years": "Sinh năm 1948",
    "term": "Bộ trưởng Bộ GD&ĐT (1997 – 2006)",
    "img": "assets/ministers/Giáo sư Nguyễn Minh Hiển..jpg",
    "career": "GS. TS. Nguyễn Minh Hiển quê Tiền Hải, Thái Bình. Ông là cựu sinh viên, giảng viên và từng giữ cương vị Hiệu trưởng Trường Đại học Bách khoa Hà Nội trước khi được Quốc hội phê chuẩn giữ chức Bộ trưởng Bộ Giáo dục và Đào tạo liên tục trong gần một thập kỷ (1997–2006).",
    "reforms": "• Lãnh đạo thực hiện thắng lợi Mục tiêu Quốc gia: Hoàn thành phổ cập giáo dục trung học cơ sở trên phạm vi toàn quốc vào năm 2000.\n• Chỉ đạo soạn thảo và ban hành Luật Giáo dục năm 1998 (đạo luật giáo dục toàn diện đầu tiên) và Luật Giáo dục năm 2005.\n• Triển khai chương trình đổi mới chương trình và thay sách giáo khoa phổ thông đại trà từ lớp 1 đến lớp 12 trên toàn quốc giai đoạn 2000–2006; phát động chương trình kiên cố hóa trường lớp, xóa bỏ phòng học tranh tre nứa lá.",
    "legacy": "Huân chương Độc lập hạng Nhất. Đóng góp nổi bật trong việc mở rộng quy mô trường lớp, chuẩn hóa hệ thống quản lý ngành giáo dục đáp ứng yêu cầu công nghiệp hóa và chuẩn bị hội nhập quốc tế.",
    "highlight": "Chỉ đạo hoàn thành phổ cập giáo dục THCS toàn quốc và triển khai chương trình thay sách giáo khoa phổ thông giai đoạn 2000."
  },
  {
    "id": 11,
    "name": "GS. TS. Nguyễn Thiện Nhân",
    "years": "Sinh năm 1953",
    "term": "Bộ trưởng Bộ GD&ĐT (2006 – 2010)",
    "img": "assets/ministers/Giáo sư Nguyễn Thiện Nhân.jpg",
    "career": "GS. TS. Nguyễn Thiện Nhân quê Châu Thành, Trà Vinh. Ông tốt nghiệp Tiến sĩ Điều khiển học tại CHDC Đức và Thạc sĩ Quản trị công tại Đại học Oregon (Hoa Kỳ). Ông từng là Phó Hiệu trưởng ĐH Bách khoa TP.HCM, Phó Chủ tịch UBND TP.HCM, Bộ trưởng Bộ GD&ĐT kiêm Phó Thủ tướng Chính phủ, Ủy viên Bộ Chính trị, Bí thư Thành ủy TP.HCM.",
    "reforms": "• Khởi xướng và quyết liệt chỉ đạo Cuộc vận động 'Hai không' (Nói không với tiêu cực trong thi cử và bệnh thành tích trong giáo dục), tạo tiếng vang chấn động dư luận xã hội.\n• Đẩy mạnh phổ cập tin học và tiếng Anh: Phát động đưa phần mềm mã nguồn mở và kết nối internet băng thông rộng tới 100% trường học trên cả nước.\n• Khởi xướng Đề án xây dựng 4 trường đại học công lập đẳng cấp quốc tế (hợp tác với Đức, Pháp, Nhật Bản, Hoa Kỳ) và thúc đẩy mạnh mẽ quyền tự chủ đại học.",
    "legacy": "Huân chương Lao động hạng Nhất. Phong cách chỉ đạo thực tế, quyết liệt, đem tư duy quản trị khoa học hiện đại vào việc làm trong sạch kỷ cương học đường và thi cử.",
    "highlight": "Nguyên Phó Thủ tướng. Phát động cuộc vận động lịch sử 'Nói không với tiêu cực trong thi cử và bệnh thành tích trong giáo dục' (Hai Không)."
  },
  {
    "id": 12,
    "name": "GS. TS. Phạm Vũ Luận",
    "years": "Sinh năm 1955",
    "term": "Bộ trưởng Bộ GD&ĐT (2010 – 2016)",
    "img": "assets/ministers/Giáo sư Phạm Vũ Luận..jpg",
    "career": "GS. TS. Phạm Vũ Luận quê Thanh Oai, Hà Nội. Ông là chuyên gia kinh tế, từng có nhiều năm gắn bó và giữ cương vị Hiệu trưởng Trường Đại học Thương mại, Thứ trưởng Thường trực Bộ GD&ĐT trước khi giữ chức Bộ trưởng từ năm 2010 đến 2016.",
    "reforms": "• Chủ trì tham mưu Trung ương ban hành Nghị quyết số 29-NQ/TW (năm 2013) – Cương lĩnh chiến lược mang tính bước ngoặt về 'Đổi mới căn bản, toàn diện giáo dục và đào tạo'.\n• Thực hiện cải tiến đột phá trong thi cử: Gộp kỳ thi tốt nghiệp THPT và kỳ thi tuyển sinh đại học làm một thành 'Kỳ thi THPT Quốc gia' từ năm 2015, giảm áp lực tốn kém hàng trăm tỷ đồng cho xã hội.\n• Đổi mới phương thức đánh giá học sinh tiểu học (Thông tư 30), từng bước giảm áp lực điểm số và chuyển sang đánh giá vì sự tiến bộ của người học.",
    "legacy": "Huân chương Lao động hạng Nhất. Người kiên trì tháo gỡ các nút thắt cơ chế quản lý, định hình đường ray chính sách cho công cuộc đổi mới giáo dục thế kỷ XXI.",
    "highlight": "Chủ trì xây dựng và bắt đầu triển khai Nghị quyết 29-NQ/TW về Đổi mới căn bản, toàn diện giáo dục và đào tạo; gộp kỳ thi THPT Quốc gia."
  },
  {
    "id": 13,
    "name": "GS. TS. Phùng Xuân Nhạ",
    "years": "Sinh năm 1963",
    "term": "Bộ trưởng Bộ GD&ĐT (2016 – 2021)",
    "img": "assets/ministers/Giáo sư Phùng Xuân Nhạ..jpg",
    "career": "GS. TS. Phùng Xuân Nhạ quê Phù Cừ, Hưng Yên. Ông tốt nghiệp Tiến sĩ Kinh tế quốc tế, từng là học giả nghiên cứu tại Đại học Georgetown (Hoa Kỳ), Hiệu trưởng Trường ĐH Kinh tế và Giám đốc Đại học Quốc gia Hà Nội trước khi đảm nhiệm cương vị Bộ trưởng Bộ GD&ĐT.",
    "reforms": "• Trực tiếp chỉ đạo ban hành và bắt đầu đưa vào thực tế Chương trình Giáo dục Phổ thông mới 2018 – bước chuyển lịch sử từ truyền thụ kiến thức sang hình thành năng lực và phẩm chất.\n• Hiện thực hóa chủ trương 'Một chương trình, nhiều bộ sách giáo khoa', xã hội hóa hoàn toàn khâu biên soạn sách giáo khoa phổ thông.\n• Tham mưu Quốc hội ban hành Luật Giáo dục sửa đổi 2019 và Luật số 34 sửa đổi Luật Giáo dục đại học, tạo hành lang pháp lý mở rộng tối đa quyền tự chủ đại học.\n• Điều hành ngành giáo dục ứng phó linh hoạt trong giai đoạn bùng phát đại dịch COVID-19, chuyển trạng thái dạy học trực tuyến an toàn.",
    "legacy": "Huân chương Lao động hạng Nhì. Dấu ấn nổi bật trong việc chuẩn hóa các tiêu chuẩn giáo dục, đẩy mạnh công bố bài báo khoa học quốc tế (ISI/Scopus) và hội nhập xếp hạng đại học toàn cầu.",
    "highlight": "Chỉ đạo ban hành và triển khai Chương trình Giáo dục phổ thông mới 2018 (chuyển từ truyền thụ kiến thức sang phát triển phẩm chất, năng lực)."
  },
  {
    "id": 14,
    "name": "PGS. TS. Nguyễn Kim Sơn",
    "years": "Sinh năm 1966",
    "term": "Bộ trưởng Bộ GD&ĐT (2021 – 2026)",
    "img": "assets/ministers/w-nguyen-kim-son-215243-651.jpg",
    "career": "PGS. TS. Nguyễn Kim Sơn quê Thủy Nguyên, Hải Phòng. Ông là nhà nghiên cứu văn học và tư tưởng Nho giáo uy tín, từng là Viện trưởng Viện Trần Nhân Tông, Giám đốc Đại học Quốc gia Hà Nội. Ông được Quốc hội phê chuẩn giữ chức Bộ trưởng Bộ GD&ĐT từ tháng 4/2021 đến đầu năm 2026.",
    "reforms": "• Kiên cường dẫn dắt toàn ngành vượt qua đỉnh điểm đại dịch COVID-19 với phương châm nhân văn 'Tạm dừng đến trường, không dừng việc học'.\n• Quyết liệt triển khai sâu rộng Chương trình GDPT 2018 lên các khối lớp trung học; công bố phương án thi tốt nghiệp THPT mới từ năm 2025 tinh gọn, giảm tải.\n• Đặt trọng tâm bảo vệ và chăm lo đội ngũ giáo viên: Chủ trì soạn thảo và trình Quốc hội dự thảo Luật Nhà giáo mang tính lịch sử, bảo đảm chính sách đãi ngộ xứng đáng cho thầy cô giáo.\n• Đề cao giá trị trường học hạnh phúc, bảo tồn văn hóa học đường và chiều sâu nhân văn trong thời đại công nghệ số.",
    "legacy": "Người kiên định triết lý giáo dục vị nhân sinh, nỗ lực kiến tạo sự bình đẳng trong tiếp cận giáo dục và phục hồi chất lượng dạy học hậu đại dịch.",
    "highlight": "Lãnh đạo ngành vượt qua đại dịch COVID-19 với phương châm 'Tạm dừng đến trường, không dừng học'; đẩy mạnh chuyển đổi số và hoàn thiện luật nhà giáo."
  },
  {
    "id": 15,
    "name": "PGS. TS. Hoàng Minh Sơn",
    "years": "Sinh năm 1969",
    "term": "Bộ trưởng Bộ GD&ĐT (Nhiệm kỳ mới 2026 – 2031)",
    "img": "assets/ministers/botruonghoangminhson-1775702741130839399711.png",
    "career": "PGS. TS. Hoàng Minh Sơn sinh tại Mễ Sở, Hưng Yên. Ông bảo vệ Tiến sĩ Kỹ thuật Tự động hóa tại Đại học Kỹ thuật Dresden (CHLB Đức). Ông là Ủy viên Trung ương Đảng khóa XIV, Đại biểu Quốc hội khóa XVI, từng giữ chức Hiệu trưởng ĐH Bách khoa Hà Nội, Thứ trưởng Bộ GD&ĐT, Giám đốc ĐHQG Hà Nội trước khi được Quốc hội phê chuẩn giữ chức Bộ trưởng Bộ GD&ĐT ngày 8/4/2026.",
    "reforms": "• Kiến trúc sư trưởng của phong trào Chuyển đổi số toàn diện ngành Giáo dục: Xây dựng cơ sở dữ liệu quốc gia ngành giáo dục đồng bộ và thúc đẩy ứng dụng AI sâu rộng trong quản trị, dạy học.\n• Lãnh đạo thực hiện Chiến lược phát triển nguồn nhân lực công nghệ cao mũi nhọn, biến Việt Nam thành trung tâm đào tạo nhân tài công nghiệp vi mạch bán dẫn và trí tuệ nhân tạo của khu vực.\n• Đẩy mạnh tự chủ đại học thực chất gắn với trách nhiệm giải trình và chuẩn kiểm định chất lượng khu vực (AUN-QA, ABET).",
    "legacy": "Hình mẫu nhà lãnh đạo giáo dục thời kỳ kỷ nguyên số – kết hợp nhuần nhuyễn giữa tư duy khoa học kỹ thuật hiện đại, kinh nghiệm quản trị đại học tự chủ và tầm nhìn hội nhập quốc tế sâu rộng.",
    "highlight": "Bộ trưởng đương nhiệm. Nhà khoa học chuyên ngành Tự động hóa, nguyên Giám đốc ĐHQGHN, tiên phong thúc đẩy chuyển đổi số toàn diện và hiện đại hóa giáo dục đại học."
  }
];

if (typeof window !== 'undefined') {
  window.ministersData = ministersData;
}

// Cơ sở dữ liệu toàn diện Bảo tàng Nhà giáo Việt Nam
// Gồm: Đại Sảnh (Đài Biểu Tượng + Cây Tri Ân Xoay 3D), Phòng 1 (Lịch sử GD có ảnh tư liệu), Phòng 2 (15 Nhà giáo ưu tú có ảnh tư liệu), Phòng 3 (15 Bộ trưởng Bộ GD có ảnh tư liệu), Phòng 4 (Khu Bộ đồ dùng)

const MUSEUM_ZONES = [
  {
    id: 'grand-hall',
    name: 'Đại Sảnh & Cây Tri Ân 3D',
    subtitle: 'Đài Biểu Tượng Khuê Văn Các & Cây Xoay 3D Lời Chúc Học Sinh',
    description: 'Không gian khánh tiết trung tâm Bảo tàng với Cội Cây Tri Thức 3D lấp lánh 1.200 vì sao kim ngọc cùng Đài Biểu Tượng "Ngọn Đuốc Tri Thức & Khuê Văn Các" đặt trên mặt trống đồng Đông Sơn.',
    cameraPos: { x: 0, y: 3.1, z: 9.6 },
    lookAt: { x: 0, y: 2.3, z: 0 },
    center: { x: 0, z: 0 }
  },
  {
    id: 'room-history',
    name: 'Lịch Sử Phát Triển Giáo Dục',
    subtitle: 'Hành trình Giáo dục Việt Nam qua các Giai đoạn Lịch sử',
    description: 'Trưng bày hình ảnh tư liệu và hiện vật lịch sử giáo dục Việt Nam: Trước Cách mạng tháng Tám 1945, Giai đoạn 1945–1954, Giai đoạn 1954–1975, Giai đoạn 1975–1986 và Thời kỳ Đổi mới.',
    cameraPos: { x: -13.5, y: 3.0, z: 0 },
    lookAt: { x: -24.0, y: 2.3, z: 0 },
    center: { x: -22, z: 0 }
  },
  {
    id: 'room-educators',
    name: 'Nhà Giáo Việt Nam Qua Các Thời Kỳ',
    subtitle: 'Hành trình tôn vinh 46 bậc danh sư và nhà giáo tiêu biểu từ thế kỷ XI đến nay',
    description: 'Không gian mở vách cong uốn lượn (Curved Promenade) với 5 dải màu thời kỳ, giếng trời ánh sáng và bục hiện vật cổ vật tôn vinh 46 bậc danh sư và nhà giáo tiêu biểu từ thế kỷ XI đến nay.',
    cameraPos: { x: 0, y: 1.6, z: -14.5 },
    lookAt: { x: -4.5, y: 1.6, z: -18.5 },
    center: { x: 0, z: -24 }
  },
  {
    id: 'room-ministers',
    name: 'Phòng 15 Vị Bộ Trưởng',
    subtitle: 'Chân dung & Dấu ấn 15 Vị Bộ trưởng Bộ Giáo dục Việt Nam (1945 – Nay)',
    description: 'Gian phòng triển lãm chuyên đề độc lập với tông màu xanh Navy hoàng gia (#16243b), sàn đá cẩm thạch đen bóng và hệ đèn rọi spotlight 45 độ tôn vinh 15 vị Tư lệnh ngành Giáo dục.',
    cameraPos: { x: 13.8, y: 2.8, z: 0 },
    lookAt: { x: 23.5, y: 2.4, z: 0 },
    center: { x: 22.5, z: 0 }
  },
  {
    id: 'room-tools',
    name: 'Hành Lang Lời Bác Dạy & Bộ Đồ Dùng Dạy Học',
    subtitle: 'Lời Căn Dặn Của Bác Hồ & Kỷ Vật Giảng Dạy Các Thời Kỳ',
    description: 'Hành lang danh dự rộng dài trưng bày những lời căn dặn bất hủ của Chủ tịch Hồ Chí Minh, Bức thư lịch sử gửi ngành Giáo dục (15/10/1968) và các bộ đồ dùng dạy học truyền thống qua các thời kỳ.',
    cameraPos: { x: 0, y: 3.1, z: 33.0 },
    lookAt: { x: 0, y: 2.3, z: 0 },
    center: { x: 0, z: 25 }
  }
];

// Không gian Ngoại cảnh & Mặt Tiền Bề Thế
const EXTERIOR_ZONE = {
  id: 'exterior',
  name: 'Quảng Trường & Mặt Tiền',
  subtitle: 'Mặt Tiền Bề Thế, Bậc Tam Cấp & Biển Đồng Vàng',
  description: 'Không gian quảng trường tiền sảnh uy nghiêm, bậc tam cấp đá hoa cương, biển hiệu đồng vàng BẢO TÀNG NHÀ GIÁO VIỆT NAM và bộ cửa chính đại sảnh rộng mở đón ánh sáng từ bên trong.',
  cameraPos: { x: 0, y: 4.0, z: 58.0 },
  lookAt: { x: 0, y: 4.2, z: 39.5 },
  center: { x: 0, z: 54 }
};

// ==================== DANH SÁCH 15 BỘ TRƯỞNG BỘ GIÁO DỤC (PHÒNG 3) ====================
const FIFTEEN_MINISTERS = [
  {
    order: 1,
    id: 'min-01',
    name: 'GS. Vũ Đình Hòe',
    lifespan: '1912 – 2011',
    term: '8/1945 – 3/1946',
    roleTitle: 'Bộ trưởng Bộ Quốc gia Giáo dục đầu tiên',
    imageFile: 'GS. Vũ Đình Hòe.jpg',
    summary: 'Bộ trưởng Bộ Quốc gia Giáo dục đầu tiên trong Chính phủ lâm thời nước Việt Nam Dân chủ Cộng hòa, người đặt nền móng pháp lý cho nền giáo dục độc lập và chiến dịch Bình dân học vụ.',
    story: `Giáo sư, Luật sư Vũ Đình Hòe (1912–2011) quê tại Hải Dương (nay thuộc Hải Phòng). Ngay sau Cách mạng Tháng Tám năm 1945, ông được Chủ tịch Hồ Chí Minh tin tưởng giao trọng trách Bộ trưởng Bộ Quốc gia Giáo dục đầu tiên.

Chỉ trong 6 tháng giữ cương vị mở đường (8/1945 – 3/1946), ông đã trình Chủ tịch Hồ Chí Minh ký các sắc lệnh lịch sử: thành lập Nha Bình dân học vụ (8/9/1945) xóa mù chữ cho hàng triệu người dân, đưa tiếng Việt trở thành ngôn ngữ chính thức ở tất cả các bậc học từ tiểu học đến đại học, và khai giảng năm học đầu tiên của nước Việt Nam độc lập (15/11/1945).`,
    highlights: [
      'Trình ký Sắc lệnh số 17/SL thành lập Nha Bình dân học vụ ngày 8/9/1945.',
      'Đưa tiếng Việt vào giảng dạy ở bậc Đại học ngay từ mùa thu năm 1945.',
      'Xây dựng nguyên tắc nền giáo dục mới: Dân tộc – Khoa học – Đại chúng.'
    ]
  },
  {
    order: 2,
    id: 'min-02',
    name: 'GS. Đặng Thai Mai',
    lifespan: '1902 – 1984',
    term: '3/1946 – 11/1946',
    roleTitle: 'Bộ trưởng Bộ Quốc gia Giáo dục',
    imageFile: 'Giáo sư Đặng Thai Mai.jpg',
    summary: 'Học giả, nhà giáo, nhà văn hóa lớn của dân tộc; Bộ trưởng Bộ Quốc gia Giáo dục trong Chính phủ Liên hiệp Kháng chiến năm 1946.',
    story: `Giáo sư Đặng Thai Mai (1902–1984) quê tại làng Lương Điền, huyện Thanh Chương, tỉnh Nghệ An. Trước Cách mạng, ông là người thầy uyên bác tại Trường Tư thục Thăng Long (Hà Nội).

Tháng 3 năm 1946, trong Chính phủ Liên hiệp Kháng chiến, ông được cử giữ chức Bộ trưởng Bộ Quốc gia Giáo dục. Ông đã chỉ đạo chuẩn bị hệ thống giáo dục sẵn sàng bước vào cuộc kháng chiến trường kỳ, đồng thời đặt nền móng cho ngành nghiên cứu lý luận văn học và sư phạm ngữ văn hiện đại Việt Nam.`,
    highlights: [
      'Lãnh đạo ngành giáo dục trong giai đoạn chuẩn bị Toàn quốc kháng chiến năm 1946.',
      'Nguyên Viện trưởng Viện Văn học, Chủ tịch Hội Liên hiệp Văn học Nghệ thuật Việt Nam.',
      'Được trao tặng Giải thưởng Hồ Chí Minh đợt I (1996).'
    ]
  },
  {
    order: 3,
    id: 'min-03',
    name: 'GS. Ca Văn Thỉnh',
    lifespan: '1902 – 1987',
    term: '11/1946 (Quyền Bộ trưởng)',
    roleTitle: 'Quyền Bộ trưởng Bộ Quốc gia Giáo dục',
    imageFile: 'Giáo sư Ca Văn Thỉnh..jpg',
    summary: 'Nhà giáo, nhà nghiên cứu văn hóa Nam Bộ lỗi lạc (“Hào khí Đồng Nai”), đảm nhận trọng trách Quyền Bộ trưởng Bộ Quốc gia Giáo dục cuối năm 1946.',
    story: `Giáo sư Ca Văn Thỉnh (1902–1987) quê tại Bến Tre, là nhà giáo và trí thức yêu nước tiêu biểu của đất Nam Bộ. Sau Cách mạng Tháng Tám, ông ra Hà Nội tham gia Chính phủ và giữ chức Quyền Bộ trưởng Bộ Quốc gia Giáo dục trước khi bàn giao cho GS. Nguyễn Văn Huyên.

Cả cuộc đời ông gắn bó với sự nghiệp giáo dục kháng chiến ở Nam Bộ, công tác ngoại giao và nghiên cứu văn hóa, lịch sử phương Nam với tác phẩm nổi tiếng "Hào khí Đồng Nai".`,
    highlights: [
      'Đại diện tiêu biểu của giới trí thức, nhà giáo yêu nước Nam Bộ trong Chính phủ Trung ương.',
      'Đóng góp to lớn trong việc duy trì mạng lưới giáo dục kháng chiến Nam Bộ.',
      'Tác giả công trình nghiên cứu nổi tiếng "Hào khí Đồng Nai".'
    ]
  },
  {
    order: 4,
    id: 'min-04',
    name: 'GS. Nguyễn Văn Huyên',
    lifespan: '1905 – 1975',
    term: '11/1946 – 10/1975',
    roleTitle: 'Bộ trưởng Bộ Giáo dục (29 năm liên tục)',
    imageFile: 'Giáo sư Nguyễn Văn Huyên và phu nhân.jpg',
    summary: 'Tiến sĩ Văn khoa đầu tiên của Việt Nam tại Đại học Sorbonne (Pháp), vị Bộ trưởng giữ cương vị lâu nhất (29 năm), dẫn dắt nền giáo dục Việt Nam đi qua hai cuộc kháng chiến vĩ đại.',
    story: `Giáo sư, Tiến sĩ Nguyễn Văn Huyên (1905–1975) là nhà bác học về nhân học, dân tộc học và giáo dục học. Nhận lời mời của Chủ tịch Hồ Chí Minh tháng 11 năm 1946, ông đảm nhận chức vụ Bộ trưởng Bộ Quốc gia Giáo dục (sau là Bộ Giáo dục) suốt 29 năm cho đến ngày ông qua đời (10/1975).

Từ núi rừng Việt Bắc đến những năm tháng mưa bom bão đạn chống Mỹ, ông đã chủ trì hai cuộc Cải cách giáo dục lớn (1950 và 1956), xây dựng hệ thống giáo dục phổ thông 10 năm hoàn chỉnh bằng tiếng Việt và chi viện hàng ngàn giáo viên cho miền Nam ruột thịt.`,
    highlights: [
      'Giữ trọng trách Bộ trưởng Bộ Giáo dục suốt 29 năm (1946–1975).',
      'Chủ trì Cải cách giáo dục năm 1950 và năm 1956, xây dựng nền giáo dục quốc dân vững mạnh giữa thời chiến.',
      'Biểu tượng của trí thức lớn tận hiến trọn đời cho Tổ quốc và sự nghiệp trồng người.'
    ]
  },
  {
    order: 5,
    id: 'min-05',
    name: 'GS. Tạ Quang Bửu',
    lifespan: '1910 – 1986',
    term: '10/1965 – 7/1976',
    roleTitle: 'Bộ trưởng Bộ Đại học và Trung học chuyên nghiệp đầu tiên',
    imageFile: 'Giáo sư Tạ Quang Bửu.jpg',
    summary: 'Nhà bác học uyên bác, Bộ trưởng đầu tiên của Bộ Đại học và Trung học chuyên nghiệp (1965–1976), người đặt nền móng cho giáo dục đại học và khoa học kỹ thuật hiện đại Việt Nam.',
    story: `Giáo sư Tạ Quang Bửu (1910–1986) quê tại Nam Đàn, Nghệ An. Năm 1956, ông là Hiệu trưởng Trường Đại học Bách khoa Hà Nội. Khi Bộ Đại học và Trung học chuyên nghiệp được thành lập tháng 10/1965, ông được cử làm Bộ trưởng đầu tiên.

Ngay trong khói lửa chiến tranh, ông đã định hướng chiến lược đào tạo đội ngũ trí thức khoa học cơ bản, công nghệ mũi nhọn (toán học, vật lý, điều khiển học, tin học), cử hàng vạn lưu học sinh giỏi đi đào tạo ở nước ngoài để chuẩn bị nhân lực kiến thiết đất nước.`,
    highlights: [
      'Kiến trúc sư trưởng của nền Giáo dục Đại học và Nghiên cứu Khoa học Việt Nam hiện đại.',
      'Đề xuất cải tiến tuyển sinh đại học và mở rộng hợp tác đào tạo quốc tế ngay trong thời chiến.',
      'Được trao tặng Giải thưởng Hồ Chí Minh đợt I (1996).'
    ]
  },
  {
    order: 6,
    id: 'min-06',
    name: 'Bà Nguyễn Thị Bình',
    lifespan: 'Sinh năm 1927',
    term: '7/1976 – 2/1987',
    roleTitle: 'Bộ trưởng Bộ Giáo dục',
    imageFile: 'Bà Nguyễn Thị Bình..jpg',
    summary: 'Nữ Bộ trưởng Bộ Giáo dục đầu tiên và duy nhất tính đến nay, người chèo lái việc thống nhất hệ thống giáo dục hai miền Nam – Bắc sau năm 1975 và triển khai Cải cách giáo dục lần thứ ba.',
    story: `Bà Nguyễn Thị Bình (tên thật là Nguyễn Thị Châu Sa, cháu ngoại chí sĩ Phan Châu Trinh) từng là người thầy giáo trước khi trở thành nhà ngoại giao huyền thoại tại Hội nghị Paris. Từ tháng 7/1976 đến tháng 2/1987, bà giữ trọng trách Bộ trưởng Bộ Giáo dục.

Trong hơn 10 năm đứng đầu ngành Giáo dục, bà đã chỉ đạo thống nhất chương trình, sách giáo khoa trên phạm vi cả nước, đẩy mạnh xóa mù chữ ở các tỉnh phía Nam, phát triển hệ thống trường sư phạm và chăm lo đời sống đội ngũ giáo viên.`,
    highlights: [
      'Chỉ đạo thống nhất hệ thống giáo dục phổ thông Bắc – Nam sau ngày thống nhất đất nước 1975.',
      'Triển khai cuộc Cải cách giáo dục năm 1979 theo Nghị quyết 14 của Bộ Chính trị.',
      'Dành trọn tâm huyết nâng cao vị thế người thầy và phổ cập giáo dục toàn dân.'
    ]
  },
  {
    order: 7,
    id: 'min-07',
    name: 'GS.TS Nguyễn Đình Tứ',
    lifespan: '1932 – 1996',
    term: '7/1976 – 2/1987',
    roleTitle: 'Bộ trưởng Bộ Đại học và Trung học chuyên nghiệp',
    imageFile: 'Giáo sư Nguyễn Đình Tứ.jpg',
    summary: 'Nhà vật lý hạt nhân lỗi lạc từng làm việc tại Viện Dubna (Liên Xô), Bộ trưởng Bộ Đại học và Trung học chuyên nghiệp suốt hơn một thập kỷ sau ngày thống nhất đất nước.',
    story: `Giáo sư, Tiến sĩ, Viện sĩ Nguyễn Đình Tứ (1932–1996) quê ở Thanh Chương, Nghệ An. Ông là nhà khoa học vật lý hạt nhân có uy tín quốc tế, đồng tác giả phát hiện hạt phản Sigma âm siêu nặng tại Viện Dubna.

Trên cương vị Bộ trưởng Bộ Đại học và Trung học chuyên nghiệp (1976–1987), ông đã quy hoạch lại mạng lưới các trường đại học, cao đẳng trên toàn quốc từ Bắc vào Nam, xây dựng quy chế đào tạo sau đại học ngay trong nước.`,
    highlights: [
      'Quy hoạch và thống nhất mạng lưới giáo dục Đại học toàn quốc giai đoạn 1976–1987.',
      'Đặt nền tảng cho hệ thống đào tạo Sau đại học tại Việt Nam.',
      'Nguyên Bí thư Trung ương Đảng, Trưởng ban Khoa giáo Trung ương, Ủy viên Bộ Chính trị (khóa VIII).'
    ]
  },
  {
    order: 8,
    id: 'min-08',
    name: 'GS.TSKH Phạm Minh Hạc',
    lifespan: 'Sinh năm 1935',
    term: '2/1987 – 3/1990',
    roleTitle: 'Bộ trưởng Bộ Giáo dục',
    imageFile: 'Giáo sư Phạm Minh Hạc.jpg',
    summary: 'Nhà tâm lý học và giáo dục học hàng đầu Việt Nam, Bộ trưởng Bộ Giáo dục giai đoạn khởi đầu công cuộc Đổi mới (1987–1990).',
    story: `Giáo sư, Tiến sĩ Khoa học, Viện sĩ Phạm Minh Hạc (sinh năm 1935) là chuyên gia đầu ngành về Tâm lý học và Khoa học Giáo dục. Ông giữ chức Bộ trưởng Bộ Giáo dục từ tháng 2/1987 đến tháng 3/1990.

Ông đã đóng góp quan trọng vào việc đổi mới tư duy giáo dục thời kỳ đầu Đổi mới: chuyển từ nền giáo dục bao cấp khép kín sang đa dạng hóa các loại hình trường lớp, hoàn thiện hệ thống phổ thông 12 năm và thúc đẩy Luật Phổ cập Giáo dục Tiểu học (1991).`,
    highlights: [
      'Đưa khoa học tâm lý học – giáo dục học hiện đại vào cải cách chương trình phổ thông.',
      'Chuẩn bị cơ sở cho Luật Phổ cập Giáo dục Tiểu học năm 1991.',
      'Tác giả của hàng chục công trình nghiên cứu nền tảng về Con người và Giáo dục Việt Nam.'
    ]
  },
  {
    order: 9,
    id: 'min-09',
    name: 'GS.TS Trần Hồng Quân',
    lifespan: '1937 – 2023',
    term: '2/1987 – 9/1997',
    roleTitle: 'Bộ trưởng Bộ Giáo dục và Đào tạo đầu tiên sau hợp nhất',
    imageFile: 'Giáo sư Trần Hồng Quân.jpg',
    summary: 'Bộ trưởng Bộ ĐH, THCN & DN (1987–1990) và là Bộ trưởng đầu tiên của Bộ Giáo dục và Đào tạo (1990–1997), người tiên phong đổi mới giáo dục đại học Việt Nam.',
    story: `Giáo sư, Tiến sĩ Trần Hồng Quân (1937–2023) quê tại Sóc Trăng. Tháng 3/1990, khi hợp nhất thành Bộ Giáo dục và Đào tạo, ông trở thành vị Bộ trưởng đầu tiên của Bộ mới cho đến tháng 9/1997.

Ông được mệnh danh là "kiến trúc sư" của đổi mới giáo dục đại học thời kỳ mở cửa: chuyển mô hình đại học đơn ngành sang đại học đa ngành (thành lập Đại học Quốc gia Hà Nội, Đại học Quốc gia TP.HCM và các Đại học Vùng), mở rộng hệ thống đại học ngoài công lập và áp dụng học chế tín chỉ.`,
    highlights: [
      'Bộ trưởng đầu tiên của Bộ Giáo dục và Đào tạo hợp nhất (1990–1997).',
      'Đặt nền móng hình thành 2 Đại học Quốc gia và các Đại học vùng đa ngành.',
      'Mở đường cho xã hội hóa giáo dục và hội nhập giáo dục đại học quốc tế.'
    ]
  },
  {
    order: 10,
    id: 'min-10',
    name: 'GS.TS Nguyễn Minh Hiển',
    lifespan: 'Sinh năm 1948',
    term: '9/1997 – 6/2006',
    roleTitle: 'Bộ trưởng Bộ Giáo dục và Đào tạo',
    imageFile: 'Giáo sư Nguyễn Minh Hiển..jpg',
    summary: 'Nguyên Hiệu trưởng Trường Đại học Bách khoa Hà Nội, Bộ trưởng Bộ Giáo dục và Đào tạo suốt gần 2 nhiệm kỳ (1997–2006).',
    story: `Giáo sư, Tiến sĩ Nguyễn Minh Hiển (sinh năm 1948, quê tại Thái Bình) từng là Hiệu trưởng Trường Đại học Bách khoa Hà Nội trước khi giữ cương vị Bộ trưởng Bộ Giáo dục và Đào tạo từ tháng 9/1997 đến tháng 6/2006.

Trong gần 9 năm lãnh đạo ngành, ông đã chủ trì soạn thảo Luật Giáo dục năm 1998 và Luật Giáo dục sửa đổi năm 2005, triển khai đổi mới chương trình – sách giáo khoa phổ thông năm 2000 và đẩy mạnh phổ cập Trung học cơ sở trên phạm vi cả nước.`,
    highlights: [
      'Xây dựng Luật Giáo dục 1998 và Luật Giáo dục 2005 tạo hành lang pháp lý đồng bộ.',
      'Triển khai chương trình đổi mới sách giáo khoa phổ thông giai đoạn 2002–2006.',
      'Mở rộng quy mô đào tạo đại học, cao đẳng và phát triển mạng lưới trường chuẩn quốc gia.'
    ]
  },
  {
    order: 11,
    id: 'min-11',
    name: 'GS.TS Nguyễn Thiện Nhân',
    lifespan: 'Sinh năm 1953',
    term: '6/2006 – 6/2010',
    roleTitle: 'Phó Thủ tướng kiêm Bộ trưởng Bộ Giáo dục và Đào tạo',
    imageFile: 'Giáo sư Nguyễn Thiện Nhân.jpg',
    summary: 'Nhà khoa học, nhà quản lý quyết liệt với cuộc vận động “Hai không” chấn chỉnh kỷ cương thi cử và phong trào “Trường học thân thiện, học sinh tích cực”.',
    story: `Giáo sư, Tiến sĩ Nguyễn Thiện Nhân (sinh năm 1953, quê tại Trà Vinh) giữ chức Bộ trưởng Bộ Giáo dục và Đào tạo từ tháng 6/2006 đến tháng 6/2010 (kiêm Phó Thủ tướng Chính phủ từ tháng 8/2007).

Ông đã phát động cuộc vận động "Nói không với tiêu cực trong thi cử và bệnh thành tích trong giáo dục" (Cuộc vận động Hai không), lập lại kỷ cương nghiêm túc trong các kỳ thi tốt nghiệp, đồng thời thúc đẩy đào tạo theo nhu cầu xã hội.`,
    highlights: [
      'Phát động cuộc vận động "Hai không" tạo bước ngoặt chống tiêu cực thi cử và bệnh thành tích.',
      'Triển khai phong trào "Xây dựng trường học thân thiện, học sinh tích cực".',
      'Thúc đẩy công khai chất lượng giáo dục ("Ba công khai") tại các cơ sở đào tạo.'
    ]
  },
  {
    order: 12,
    id: 'min-12',
    name: 'GS.TS Phạm Vũ Luận',
    lifespan: 'Sinh năm 1955',
    term: '6/2010 – 4/2016',
    roleTitle: 'Bộ trưởng Bộ Giáo dục và Đào tạo',
    imageFile: 'Giáo sư Phạm Vũ Luận..jpg',
    summary: 'Bộ trưởng Bộ GD&ĐT chủ trì tham mưu Nghị quyết 29-NQ/TW về Đổi mới căn bản, toàn diện giáo dục và đào tạo.',
    story: `Giáo sư, Tiến sĩ Phạm Vũ Luận (sinh năm 1955) giữ cương vị Bộ trưởng Bộ Giáo dục và Đào tạo từ tháng 6/2010 đến tháng 4/2016.

Dấu ấn lớn nhất trong nhiệm kỳ của ông là tham mưu xây dựng Nghị quyết số 29-NQ/TW (năm 2013) về "Đổi mới căn bản, toàn diện giáo dục và đào tạo", trình Quốc hội thông qua Luật Giáo dục Đại học (2012) mở đường cho tự chủ đại học, và tổ chức Kỳ thi THPT Quốc gia "2 trong 1" năm 2015.`,
    highlights: [
      'Tham mưu ban hành Nghị quyết 29-NQ/TW (2013) về Đổi mới căn bản, toàn diện giáo dục.',
      'Trình Quốc hội thông qua Luật Giáo dục Đại học năm 2012 thúc đẩy tự chủ đại học.',
      'Đổi mới thi cử với Kỳ thi THPT Quốc gia chung từ năm 2015.'
    ]
  },
  {
    order: 13,
    id: 'min-13',
    name: 'GS.TS Phùng Xuân Nhạ',
    lifespan: 'Sinh năm 1963',
    term: '4/2016 – 4/2021',
    roleTitle: 'Bộ trưởng Bộ Giáo dục và Đào tạo',
    imageFile: 'Giáo sư Phùng Xuân Nhạ..jpg',
    summary: 'Nguyên Giám đốc Đại học Quốc gia Hà Nội, Bộ trưởng Bộ GD&ĐT giai đoạn ban hành Chương trình Giáo dục phổ thông mới 2018 và Luật Giáo dục 2019.',
    story: `Giáo sư, Tiến sĩ Phùng Xuân Nhạ (sinh năm 1963 tại Hưng Yên) giữ chức Bộ trưởng Bộ Giáo dục và Đào tạo từ tháng 4/2016 đến tháng 4/2021.

Trong nhiệm kỳ này, Bộ Giáo dục và Đào tạo đã ban hành Chương trình Giáo dục Phổ thông 2018 chuyển từ truyền thụ kiến thức sang phát triển phẩm chất, năng lực học sinh; trình Quốc hội thông qua Luật sửa đổi, bổ sung một số điều của Luật Giáo dục Đại học (2018) và Luật Giáo dục (2019).`,
    highlights: [
      'Ban hành Chương trình Giáo dục Phổ thông tổng thể 2018 theo định hướng phát triển năng lực.',
      'Hoàn thiện Luật Giáo dục Đại học sửa đổi (2018) và Luật Giáo dục (2019).',
      'Thúc đẩy xếp hạng quốc tế các trường đại học Việt Nam và chuyển đổi số bước đầu trong dạy học.'
    ]
  },
  {
    order: 14,
    id: 'min-14',
    name: 'PGS.TS Nguyễn Kim Sơn',
    lifespan: 'Sinh năm 1966',
    term: '4/2021 – 2026',
    roleTitle: 'Bộ trưởng Bộ Giáo dục và Đào tạo',
    imageFile: 'w-nguyen-kim-son-215243-651.jpg',
    summary: 'Nguyên Giám đốc Đại học Quốc gia Hà Nội, Bộ trưởng Bộ GD&ĐT chỉ đạo triển khai đồng bộ Chương trình Giáo dục Phổ thông 2018 ở tất cả các khối lớp và xây dựng Luật Nhà giáo.',
    story: `Phó Giáo sư, Tiến sĩ Nguyễn Kim Sơn (sinh năm 1966 tại Hải Phòng) là nhà nghiên cứu Hán Nôm, triết học phương Đông uyên bác, nguyên Giám đốc Đại học Quốc gia Hà Nội trước khi làm Bộ trưởng Bộ Giáo dục và Đào tạo từ tháng 4/2021.

Ông đã lãnh đạo toàn ngành hoàn thành lộ trình triển khai Chương trình Giáo dục Phổ thông 2018 từ lớp 1 đến lớp 12, tổ chức thành công Kỳ thi tốt nghiệp THPT theo chương trình mới năm 2025, đồng thời chủ trì xây dựng Luật Nhà giáo.`,
    highlights: [
      'Hoàn thành trọn vẹn chu kỳ triển khai Chương trình Giáo dục Phổ thông 2018 từ lớp 1 đến lớp 12.',
      'Chủ trì xây dựng Dự án Luật Nhà giáo – đạo luật riêng đầu tiên dành cho đội ngũ nhà giáo Việt Nam.',
      'Tham mưu Kết luận 91-KL/TW của Bộ Chính trị về tiếp tục đổi mới giáo dục.'
    ]
  },
  {
    order: 15,
    id: 'min-15',
    name: 'PGS.TS Hoàng Minh Sơn',
    lifespan: 'Sinh năm 1969',
    term: 'Bộ trưởng Bộ Giáo dục và Đào tạo',
    roleTitle: 'Bộ trưởng Bộ Giáo dục và Đào tạo',
    imageFile: 'botruonghoangminhson-1775702741130839399711.png',
    summary: 'Tiến sĩ Kỹ thuật Điều khiển – Tự động hóa tại ĐH Tổng hợp Kỹ thuật Dresden (Đức), nguyên Chủ tịch Hội đồng trường ĐH Bách khoa Hà Nội, Giám đốc ĐHQG Hà Nội, Bộ trưởng Bộ GD&ĐT.',
    story: `Phó Giáo sư, Tiến sĩ Hoàng Minh Sơn (sinh năm 1969 tại Hưng Yên) nhận bằng Tiến sĩ chuyên ngành Điều khiển – Tự động hóa tại Đại học Tổng hợp Kỹ thuật Dresden (CHLB Đức). Ông từng giữ chức Hiệu trưởng và Chủ tịch Hội đồng trường Trường Đại học Bách khoa Hà Nội, Thứ trưởng Bộ Giáo dục và Đào tạo, Giám đốc Đại học Quốc gia Hà Nội trước khi đảm nhiệm cương vị Bộ trưởng Bộ Giáo dục và Đào tạo.

Ông là gương mặt tiêu biểu dẫn dắt chiến lược chuyển đổi số giáo dục, tự chủ đại học và phát triển nguồn nhân lực chất lượng cao trong các lĩnh vực công nghệ lõi (Bán dẫn, Trí tuệ nhân tạo AI, STEM).`,
    highlights: [
      'Chuyên gia uy tín hàng đầu về Tự chủ Đại học, Quản trị Đại học hiện đại và Chuyển đổi số trong giáo dục.',
      'Chỉ đạo xây dựng quy hoạch mạng lưới cơ sở giáo dục đại học và đào tạo nhân lực công nghệ cao (Vi mạch bán dẫn, AI).',
      'Đổi mới hệ thống tuyển sinh đại học minh bạch, hiện đại hóa trên nền tảng số quốc gia.'
    ]
  }
];

// ==================== DANH SÁCH 15 NHÀ GIÁO NỔI TIẾNG & ƯU TÚ NHẤT LỊCH SỬ VIỆT NAM (PHÒNG 2 - CÓ ẢNH GỐC) ====================
const FIFTEEN_EDUCATORS = [
  {
    order: 1,
    id: 'edu-01',
    name: 'Chu Văn An',
    lifespan: '1292 – 1370',
    era: 'Triều đại nhà Trần (Thế kỷ XIV)',
    imageFile: 'Chu Văn An.jpg',
    honorTitle: 'Vạn Thế Sư Biểu – Người thầy chuẩn mực của muôn đời',
    quote: '“Ta chưa từng nghe nói nước nào coi nhẹ sự học mà có thể hưng thịnh được.”',
    summary: 'Tư nghiệp Quốc Tử Giám, người thầy mở trường Huỳnh Cung đào tạo hàng ngàn hiền tài, tác giả “Tứ thư thuyết ước” và “Thất Trảm Sớ” lừng danh lịch sử.',
    story: `Chu Văn An (1292–1370) quê ở Thanh Liệt, Thanh Trì, Hà Nội. Đỗ Thái học sinh nhưng không màng danh lợi, ông mở trường dạy học ở làng Huỳnh Cung bên sông Tô Lịch, học trò theo học đông tới hàng ngàn người, nhiều người trở thành trụ cột triều Trần như Phạm Sư Mạnh, Lê Quát.

Khi giữ chức Tư nghiệp Quốc Tử Giám, ông biên soạn bộ "Tứ thư thuyết ước". Đời Trần Dụ Tông, ông dâng "Thất Trảm Sớ" xin chém 7 gian thần rồi treo ấn từ quan về núi Phượng Hoàng (Chí Linh) tiếp tục dạy học. Ông là người thầy duy nhất của Việt Nam được thờ tại Văn Miếu cùng các bậc thánh hiền.`
  },
  {
    order: 2,
    id: 'edu-02',
    name: 'Nguyễn Bỉnh Khiêm',
    lifespan: '1491 – 1585',
    era: 'Thế kỷ XVI',
    imageFile: 'Nguyễn Bỉnh Khiêm.jpe',
    honorTitle: 'Trạng Trình – Tuyết Giang Phu Tử',
    quote: '“Một mai, một cuốc, một cần câu / Thơ thẩn dầu ai vui thú nào.”',
    summary: 'Trạng nguyên khoa Ất Mùi (1535), bậc đại sư lập quán Trung Tân và trường Bạch Vân Am bên sông Tuyết, đào tạo những nhân tài kiệt xuất cho cả một thời đại.',
    story: `Trạng Trình Nguyễn Bỉnh Khiêm (1491–1585) quê ở làng Trung Am, Vĩnh Bảo, Hải Phòng. Sau khi dâng sớ vạch tội 18 lộng thần không thành, ông cáo quan về quê mở trường dạy học bên dòng Tuyết Giang, lấy hiệu là Bạch Vân Cư Sĩ.

Những học trò xuất sắc nhất thế kỷ XVI như Phùng Khắc Khoan (Trạng Bùng), Lương Hữu Khánh, Nguyễn Dữ, Trương Thời Cử đều trưởng thành từ mái trường của Tuyết Giang Phu Tử.`
  },
  {
    order: 3,
    id: 'edu-03',
    name: 'Lê Quý Đôn',
    lifespan: '1726 – 1784',
    era: 'Thế kỷ XVIII (Thời Lê – Trịnh)',
    imageFile: 'Lê Quý Đôn.jpe',
    honorTitle: 'Bậc Đại Bác Học & Tư Nghiệp Quốc Tử Giám',
    quote: '“Phi nông bất ổn, phi công bất phú, phi thương bất hoạt, phi trí bất hưng.”',
    summary: 'Tam nguyên Bảng nhãn, nhà bác học lớn nhất thời phong kiến Việt Nam, người đứng đầu Quốc Tử Giám và biên soạn hàng chục bộ bách khoa thư đồ sộ.',
    story: `Lê Quý Đôn (1726–1784) quê tại Hưng Hà, Thái Bình, nổi tiếng thần đồng từ nhỏ và đỗ đầu cả ba kỳ thi Hương, thi Hội, thi Đình (Tam nguyên Bảng nhãn).

Trên cương vị Tư nghiệp Quốc Tử Giám, ông trực tiếp giảng dạy, chấm thi và cải cách lối học thực tiễn. Kho tàng trước tác của ông như "Vân đài loại ngữ", "Đại Việt thông sử", "Kiến văn tiểu lục" là đỉnh cao tri thức giáo dục Đại Việt thế kỷ XVIII.`
  },
  {
    order: 4,
    id: 'edu-04',
    name: 'Nguyễn Thiếp',
    lifespan: '1723 – 1804',
    era: 'Thế kỷ XVIII (Triều Tây Sơn)',
    imageFile: 'Nguyễn Thiếp.jpe',
    honorTitle: 'La Sơn Phu Tử – Viện trưởng Viện Sùng Chính',
    quote: '“Ngọc bất trác bất thành khí / Nhân bất học bất tri lý.”',
    summary: 'Bậc hiền triết ẩn cư trên núi Thiên Nhẫn được Hoàng đế Quang Trung ba lần viết thư mời ra làm Viện trưởng Viện Sùng Chính để cải cách giáo dục và chấn hưng chữ Nôm.',
    story: `Nguyễn Thiếp (1723–1804) quê ở huyện La Sơn (Đức Thọ, Hà Tĩnh), người đương thời kính trọng gọi là La Sơn Phu Tử. Cảm phục tài đức của ông, vua Quang Trung Nguyễn Huệ đã ba lần gửi thư mời ông xuống núi giúp nước.

Đứng đầu Viện Sùng Chính, thầy Nguyễn Thiếp đã thực hiện cuộc cải cách giáo dục mang tầm vóc lịch sử: tổ chức dịch Tứ thư, Ngũ kinh và các sách học từ chữ Hán sang chữ Nôm để người Việt học bằng chính tiếng nói dân tộc mình.`
  },
  {
    order: 5,
    id: 'edu-05',
    name: 'Cao Bá Quát',
    lifespan: '1809 – 1855',
    era: 'Nửa đầu thế kỷ XIX',
    imageFile: 'Cao Bá Quát.jpe',
    honorTitle: 'Thánh Quát – Danh sư & Thi hào tài hoa khí phách',
    quote: '“Nhất sinh đê thủ bái mai hoa — Cả đời chỉ cúi đầu lạy hoa mai.”',
    summary: 'Danh nhân văn hóa, người thầy giáo tài hoa kiệt xuất được người đương thời tôn xưng là “Thánh Quát”, Giáo thụ phủ Quốc Oai truyền dạy khí tiết thanh cao và tinh thần thương dân.',
    story: `Cao Bá Quát (1809–1855), tự Chu Thần, hiệu Cúc Đường, quê ở làng Phú Thị, huyện Gia Lâm (Hà Nội). Ông nổi tiếng khắp Bắc Hà về tài văn chương và thư pháp tuyệt mỹ ("Văn như Siêu, Quát vô tiền Hán").

Khi làm Giáo thụ phủ Quốc Oai (Sơn Tây), thầy giáo Cao Bá Quát hết lòng truyền dạy học trò lối học thực chất, trọng khí tiết, ghét thói luồn cúi cường quyền, luôn đứng về phía nhân dân nghèo khổ.`
  },
  {
    order: 6,
    id: 'edu-06',
    name: 'Nguyễn Đình Chiểu',
    lifespan: '1822 – 1888',
    era: 'Thế kỷ XIX',
    imageFile: 'Nguyễn Đình Chiểu.jpe',
    honorTitle: 'Cụ Đồ Chiểu – Danh nhân Văn hóa Thế giới UNESCO',
    quote: '“Chở bao nhiêu đạo thuyền không khẳm / Đâm mấy thằng gian bút chẳng tà.”',
    summary: 'Người thầy mù đất Ba Tri (Bến Tre) vượt lên nghịch cảnh mất ánh sáng đôi mắt để mở trường dạy học, bốc thuốc cứu người và sáng tác văn thơ yêu nước bất hủ.',
    story: `Nguyễn Đình Chiểu (1822–1888) sinh tại Gia Định. Năm 1849, trên đường về chịu tang mẹ, ông bị bệnh nặng dẫn đến mù cả hai mắt. Không đầu hàng số phận, ông mở trường dạy học và làm thuốc chữa bệnh cho dân nghèo tại Gia Định, Cần Giuộc rồi Ba Tri (Bến Tre).

Nhân dân miền Nam gọi ông bằng cái tên kính trọng: "Cụ Đồ Chiểu". Học trò theo học ông không chỉ học chữ mà còn học lòng yêu nước, nghĩa khí anh hùng. Năm 2021, UNESCO đã vinh danh ông là Danh nhân Văn hóa Thế giới.`
  },
  {
    order: 7,
    id: 'edu-07',
    name: 'Phan Bội Châu',
    lifespan: '1867 – 1940',
    era: 'Đầu thế kỷ XX',
    imageFile: 'Phan Bội Châu.jpe',
    honorTitle: 'Bậc Đại Chí Sĩ & Người Thầy Khai Tâm Phong Trào Đông Du',
    quote: '“Ví phỏng đường đời bằng phẳng cả / Anh hùng hào kiệt có hơn ai.”',
    summary: 'Giải nguyên trường Nghệ, người thầy mở trường dạy học truyền lửa yêu nước và khởi xướng phong trào Đông Du đưa thanh niên Việt Nam đi học tập khoa học hiện đại.',
    story: `Phan Bội Châu (1867–1940) quê tại Nam Đàn, Nghệ An. Trước khi bôn ba khắp năm châu tìm đường cứu nước, ông là một người thầy giáo nổi tiếng uyên bác tại quê nhà Nghệ An, nơi từng bài giảng kinh sử của ông đều thắp lên ngọn lửa yêu nước nồng nàn trong lòng học trò.

Ông đã khởi xướng phong trào Đông Du (1905–1908), đưa hàng trăm thanh niên ưu tú Việt Nam ra nước ngoài học tập tri thức tân học với khát vọng chấn hưng dân khí, tự cường dân tộc.`
  },
  {
    order: 8,
    id: 'edu-08',
    name: 'Thầy giáo Nguyễn Tất Thành (Chủ tịch Hồ Chí Minh)',
    lifespan: '1890 – 1969',
    era: 'Năm 1910 (Trường Dục Thanh) & Khai sáng Giáo dục Việt Nam Mới',
    imageFile: 'Nguyễn Tất Thành.jpe',
    honorTitle: 'Người Thầy Giáo Trường Dục Thanh & Người Cha Già Dân Tộc',
    quote: '“Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người.”',
    summary: 'Tháng 9/1910, trên hành trình vào Nam trước khi ra đi tìm đường cứu nước, chàng thanh niên Nguyễn Tất Thành đã dừng chân dạy học tại Trường Dục Thanh (Phan Thiết).',
    story: `Mùa thu năm 1910, người thanh niên yêu nước Nguyễn Tất Thành (sau này là Chủ tịch Hồ Chí Minh) đã làm thầy giáo tại Trường Dục Thanh (Phan Thiết, Bình Thuận) – ngôi trường tư thục tiến bộ do các sĩ phu hưởng ứng phong trào Duy Tân sáng lập.

Thầy giáo Nguyễn Tất Thành dạy chữ Quốc ngữ, chữ Hán, tiếng Pháp và phụ trách môn Thể dục, luôn gần gũi chăm sóc học sinh và truyền cho các em tình yêu quê hương đất nước.`
  },
  {
    order: 9,
    id: 'edu-09',
    name: 'Lê Thước',
    lifespan: '1891 – 1975',
    era: 'Thế kỷ XX',
    imageFile: 'Lê Thước.jpg',
    honorTitle: 'Giáo sư, Nhà giáo & Học giả Hán Nôm lỗi lạc',
    quote: '“Giữ gìn di sản văn chương của tiền nhân chính là giữ hồn cốt cho giáo dục mai sau.”',
    summary: 'Giải nguyên khoa thi Hán học cuối cùng tại trường Nghệ (1918), người thầy mẫu mực của Trường Bưởi (Chu Văn An) và Đại học Đông Dương, thành viên Ban Thanh tra Học chính đầu tiên năm 1945.',
    story: `Giáo sư Lê Thước (1891–1975) quê ở Lạc Thiện, Đức Thọ, Hà Tĩnh. Ông đỗ Giải nguyên kỳ thi Hương cuối cùng năm 1918 rồi tiếp tục tốt nghiệp Cao đẳng Sư phạm Đông Dương (1921), trở thành bậc thầy thông thạo cả Hán học cổ truyền lẫn Tây học hiện đại.

Ông đã giảng dạy tại Trường Quốc học Vinh, Trường Bưởi (Hà Nội) và ngay sau Cách mạng Tháng Tám 1945 đã tham gia xây dựng nền giáo dục mới, để lại nhiều công trình nghiên cứu vô giá về Nguyễn Du, Nguyễn Thượng Hiền, Chu Văn An.`
  },
  {
    order: 10,
    id: 'edu-10',
    name: 'Đặng Thai Mai',
    lifespan: '1902 – 1984',
    era: 'Thế kỷ XX',
    imageFile: 'Đặng Thai Mai.jpe',
    honorTitle: 'Bậc Đại Sư Ngữ Văn & Văn Hóa Học Việt Nam',
    quote: '“Văn học và giáo dục phải gắn liền với vận mệnh của dân tộc.”',
    summary: 'Người thầy mẫu mực của Trường Tư thục Thăng Long, Hiệu trưởng Trường Đại học Sư phạm Văn khoa, người đào tạo nhiều thế hệ nhà văn, nhà nghiên cứu và giáo viên ngữ văn.',
    story: `Giáo sư Đặng Thai Mai (1902–1984) không chỉ từng giữ cương vị Bộ trưởng Bộ Quốc gia Giáo dục năm 1946 mà suốt đời là một người thầy lớn trên bục giảng. Từ Trường Quốc học Huế, Trường Tư thục Thăng Long đến Trường Đại học Sư phạm ở chiến khu Việt Bắc và Thanh Hóa, những bài giảng của ông đã truyền ngọn lửa nhân văn sâu sắc cho bao thế hệ trí thức Việt Nam.`
  },
  {
    order: 11,
    id: 'edu-11',
    name: 'Hoàng Xuân Hãn',
    lifespan: '1908 – 1996',
    era: 'Thế kỷ XX',
    imageFile: 'Hoàng Xuân Hãn.jpe',
    honorTitle: 'Tác giả Chương trình Trung học Tiếng Việt đầu tiên (1945)',
    quote: '“Tiếng Việt hoàn toàn đủ khả năng diễn đạt mọi khái niệm khoa học cao siêu nhất.”',
    summary: 'Giáo sư Toán học, ngôn ngữ học và sử học uyên bác; người biên soạn bộ “Danh từ Khoa học” (1942) và Chương trình Trung học bằng tiếng Việt đầu tiên năm 1945.',
    story: `Giáo sư Hoàng Xuân Hãn (1908–1996) quê ở Đức Thọ, Hà Tĩnh, đỗ Thạc sĩ Toán học tại Đại học Sorbonne. Trở về nước dạy học tại Trường Bưởi (Chu Văn An), ông đã dày công biên soạn cuốn "Danh từ Khoa học" đặt tên tiếng Việt chuẩn xác cho hàng ngàn thuật ngữ Toán, Lý, Hóa.

Mùa xuân năm 1945, ông soạn thảo và ban hành "Chương trình Trung học Hoàng Xuân Hãn", lần đầu tiên thay thế hoàn toàn tiếng Pháp bằng tiếng Việt ở bậc trung học.`
  },
  {
    order: 12,
    id: 'edu-12',
    name: 'Đào Văn Tiến',
    lifespan: '1920 – 1995',
    era: 'Thế kỷ XX',
    imageFile: 'Đào Văn Tiến.jpe',
    honorTitle: 'Nhà giáo Nhân dân – Cây đại thụ ngành Sinh học Việt Nam',
    quote: '“Muốn dạy tốt khoa học tự nhiên, người thầy phải dẫn học trò đi vào thiên nhiên thực địa.”',
    summary: 'Giáo sư, Nhà giáo Nhân dân, Chủ nhiệm Khoa Sinh học Trường Đại học Tổng hợp Hà Nội, người biên soạn những bộ giáo trình Động vật học bằng tiếng Việt đầu tiên.',
    story: `Giáo sư, Nhà giáo Nhân dân Đào Văn Tiến (1920–1995) quê tại Nam Định. Ngay từ những năm kháng chiến chống Pháp tại chiến khu Việt Bắc và Khu 4, ông đã giảng dạy tại Trường Dự bị Đại học và Đại học Sư phạm.

Ông là người đặt nền móng cho ngành Động vật học và Sinh thái học hiện đại tại Trường Đại học Tổng hợp Hà Nội, đào tạo hàng ngàn nhà khoa học, giáo viên sinh học và được trao tặng Giải thưởng Hồ Chí Minh về Khoa học và Công nghệ đợt I (1996).`
  },
  {
    order: 13,
    id: 'edu-13',
    name: 'Lê Văn Thiêm',
    lifespan: '1918 – 1991',
    era: 'Thế kỷ XX',
    imageFile: 'Lê Văn Thiêm.jpe',
    honorTitle: 'Cha đẻ Nền Toán học Hiện đại Việt Nam',
    quote: '“Khoa học cơ bản là gốc rễ của mọi sự phát triển bền vững.”',
    summary: 'Tiến sĩ Toán học đầu tiên của Việt Nam, Hiệu trưởng Trường Khoa học Cơ bản và Trường Đại học Sư phạm Khoa học tại chiến khu Việt Bắc.',
    story: `Giáo sư, Tiến sĩ Khoa học Lê Văn Thiêm (1918–1991) quê tại Đức Thọ, Hà Tĩnh. Đang là Giáo sư tại Đại học Zurich (Thụy Sĩ), năm 1949 ông trở về Tổ quốc theo lời kêu gọi của Bác Hồ, đi bộ vượt rừng từ Nam Bộ ra Việt Bắc để xây dựng Trường Khoa học Cơ bản và Trường Đại học Sư phạm.

Ông là Chủ tịch đầu tiên của Hội Toán học Việt Nam, Viện trưởng đầu tiên của Viện Toán học, người thầy của hầu hết các thế hệ nhà toán học Việt Nam hiện đại.`
  },
  {
    order: 14,
    id: 'edu-14',
    name: 'Văn Như Cương',
    lifespan: '1937 – 2017',
    era: 'Nửa sau thế kỷ XX – đầu thế kỷ XXI',
    imageFile: 'Văn Như Cương.jpe',
    honorTitle: 'Người Thầy Hiệu Trưởng Đáng Kính & Nhà Biên Soạn Sách Hình Học',
    quote: '“Ai cũng vào đại học thì ai sẽ làm thợ? Nhưng trước hết, các em hãy học để trở thành một con người tử tế!”',
    summary: 'Phó Giáo sư Toán học, tác giả của những bộ sách giáo khoa Hình học phổ thông kinh điển và là người sáng lập Trường THPT Lương Thế Vinh – trường tư thục đầu tiên của Việt Nam thời kỳ Đổi mới (1989).',
    story: `Phó Giáo sư Văn Như Cương (1937–2017) quê tại Quỳnh Đôi, Quỳnh Lưu, Nghệ An. Ông là giảng viên Toán học lỗi lạc của Trường Đại học Sư phạm Hà Nội và là chủ biên bộ sách giáo khoa Hình học gắn liền với hàng triệu học sinh Việt Nam.

Năm 1989, ông tiên phong thành lập Trường THPT Dân lập Lương Thế Vinh (Hà Nội) – ngôi trường tư thục đầu tiên của cả nước sau Đổi mới. Với chòm râu bạc như ông tiên và những lời căn dặn mộc mạc mà sâu sắc mỗi mùa khai giảng ("Trước hết hãy là người tử tế"), thầy Văn Như Cương mãi là hình tượng người thầy gần gũi, nhân hậu trong trái tim bao thế hệ học trò.`
  },
  {
    order: 15,
    id: 'edu-15',
    name: 'Nguyễn Ngọc Ký',
    lifespan: '1947 – 2022',
    era: 'Nửa sau thế kỷ XX – đầu thế kỷ XXI',
    imageFile: 'Nguyễn Ngọc Ký.jpg',
    honorTitle: 'Nhà giáo Ưu tú – Huyền thoại “Bàn chân kỳ diệu”',
    quote: '“Hãy đừng để cho một phút nào của tuổi trẻ trôi đi hoài phí.”',
    summary: 'Người thầy giáo bị liệt cả hai tay từ năm lên 4 tuổi nhưng đã kiên cường tập viết chữ bằng chân, tốt nghiệp Đại học Tổng hợp Hà Nội và đứng trên bục giảng suốt gần 40 năm.',
    story: `Nhà giáo Ưu tú Nguyễn Ngọc Ký (1947–2022) quê tại Hải Hậu, Nam Định. Bị cơn sốt bại liệt cướp đi đôi bàn tay từ năm 4 tuổi, cậu bé Ký đã vượt qua đau đớn thể xác để dùng đôi bàn chân kẹp viên gạch, mẩu phấn tập viết từng nét chữ, cắt thủ công và giải toán.

Tốt nghiệp khoa Ngữ văn Trường Đại học Tổng hợp Hà Nội năm 1970, theo lời khuyên của cố Thủ tướng Phạm Văn Đồng, ông trở về quê hương làm thầy giáo dạy Văn. Hình ảnh người thầy dùng chân kẹp phấn viết những dòng chữ tuyệt đẹp trên bảng đen đã trở thành biểu tượng truyền cảm hứng bất tận cho hàng triệu học sinh Việt Nam.`
  }
];

// ==================== DANH SÁCH HIỆN VẬT 3D TRONG TOÀN BẢO TÀNG ====================
const ARTIFACTS = [
  // --- ĐẠI SẢNH TRUNG TÂM ---
  {
    id: 'art-wishing-tree',
    code: 'ĐS-01',
    title: 'Cội Cây Tri Thức & Lời Chúc Học Sinh 3D',
    subtitle: 'Cội Cây Xoay 360° lấp lánh 1.200 vì sao, 32 thẻ lụa vàng & 48 tinh cầu pha lê',
    zoneId: 'grand-hall',
    zoneName: 'Đại Sảnh & Cây Tri Ân 3D',
    era: 'Không gian tương tác thiêng liêng của các thế hệ học trò Việt Nam',
    material: 'Thân đồng mạ vàng xoay 360°, 1.200 vì sao kim ngọc, 32 thẻ lụa vàng & 48 tinh cầu pha lê, Bàn giấy bút ở gốc cây',
    dimensions: 'Cao 4,2m × Tán rộng 3,8m (Xoay liên tục 360°)',
    position: { x: 0, y: 0, z: 0 },
    viewOffset: { x: 0, y: 2.75, z: 6.2 },
    lookAtOffset: { x: 0, y: 2.3, z: 0 },
    isWishingTree: true,
    summary: 'Cội Cây Tri Thức 3D tọa lạc giữa Đại sảnh trung tâm dưới vòm giếng trời Khuê Văn. Tán cây được bao phủ bởi 1.200 vì sao vàng kim – lam ngọc kết hợp dải ngân hà 450 hạt sáng xoắn ốc bay lượn quanh gốc cây. Bấm vào bất kỳ thẻ lụa vàng, lá bồ đề hoặc tinh cầu pha lê nào trên cây để đọc lời chúc của học sinh; bấm vào Bàn Giấy Bút ở gốc cây để viết thông điệp mới.',
    story: `Tọa lạc tại tâm điểm khánh tiết của Đại sảnh dưới vòm giếng trời Khuê Văn, "Cội Cây Tri Thức 3D" tỏa sáng rực rỡ như một kỳ quan vũ trụ tri thức.
    
Tán cây được bao phủ bởi 1.200 vì sao vàng kim – lam ngọc lung linh, kết hợp dải ngân hà 450 hạt sáng xoắn ốc huyền ảo bay lượn quanh gốc cây vươn lên bầu trời.

Khi hàng trăm hay hàng nghìn thông điệp gửi về, cây hiển thị 32 thẻ lụa vàng tiêu biểu đung đưa theo làn gió cùng 48 tinh cầu pha lê phát sáng đại diện cho hàng ngàn lời tri ân thiêng liêng của học trò khắp mọi miền đất nước mà vẫn giữ trọn tốc độ mượt mà.

Ngay dưới gốc cây là Bàn Giấy Bút & Nghiên Mực Vàng — nơi bạn có thể click trực tiếp để viết lời tri ân gửi lên cây hoặc tra cứu thông điệp qua Menu & Sơ Đồ.`,
    quote: '“Mỗi lời chúc của học trò là một vì sao thắp sáng cội cây tri thức vĩnh cửu.”',
    highlights: [
      'Tán cây lấp lánh 1.200 vì sao vàng kim – lam ngọc cùng dải ngân hà 450 hạt sáng xoắn ốc bay lượn.',
      'Hiển thị 32 thẻ lụa vàng đung đưa và 48 tinh cầu pha lê phát sáng đại diện cho hàng ngàn thông điệp tri ân.',
      'Click trực tiếp vào bất kỳ thẻ lụa vàng hoặc tinh cầu pha lê nào trên cây để mở đọc thông điệp.',
      'Bàn Giấy Bút & Nghiên Mực 3D ở gốc cây để khách tham quan viết thông điệp gửi lên cây.'
    ],
    videoData: {
      title: 'Phim ngắn: Ngàn lời tri ân gửi người gieo hạt',
      duration: '01:30',
      scenes: [
        { time: '00:00 - 00:30', heading: 'Cội nguồn từ lòng biết ơn', caption: 'Tôn sư trọng đạo là mạch nguồn nuôi dưỡng tâm hồn Việt Nam.', visualType: 'tree' },
        { time: '00:30 - 01:00', heading: 'Những cánh thiệp trên cành cây tri thức', caption: 'Hàng ngàn thế hệ học sinh gửi gắm yêu thương tới thầy cô.', visualType: 'letter' },
        { time: '01:00 - 01:30', heading: 'Ánh sáng lan tỏa muôn phương', caption: 'Mỗi lời chúc hóa thành một mầm sáng bất diệt.', visualType: 'torch' }
      ]
    },
    gallery: [
      { title: 'Cội Cây Tri Thức Xoay 3D', caption: 'Chế tác từ đồng mạ vàng 24K với 1.200 vì sao kim ngọc.', artType: 'tree-3d' },
      { title: 'Lá Vàng & Thiệp Lụa Tri Ân', caption: 'Khắc ghi thông điệp tôn sư trọng đạo của các thế hệ học trò.', artType: 'tribute-card' }
    ]
  },

  {
    id: 'art-monument',
    code: 'ĐS-02',
    title: 'Đài Biểu Tượng "Ngọn Đuốc Tri Thức & Khuê Văn Các"',
    subtitle: 'Tác phẩm điêu khắc cửa ngõ Đại sảnh Bảo tàng',
    zoneId: 'grand-hall',
    zoneName: 'Đại Sảnh & Cây Tri Ân 3D',
    era: 'Biểu tượng xuyên suốt lịch sử giáo dục Việt Nam',
    material: 'Đồng đỏ đúc thủ công, mạ vàng 24K, pha lê quang học & đá Cẩm thạch trắng',
    dimensions: 'Cao 4,8m × Đường kính bệ 3,6m',
    position: { x: 0, y: 0, z: -5.8 },
    viewOffset: { x: 0, y: 2.75, z: -1.6 },
    lookAtOffset: { x: 0, y: 2.3, z: -5.8 },
    summary: 'Tác phẩm điêu khắc kết hợp hình tượng Khuê Văn Các – biểu tượng của bầu trời văn chương – cùng ngọn lửa tri thức vươn cao từ những trang sách mở.',
    story: `Đặt tại vị trí trang trọng hướng về cửa ngõ các gian phòng lịch sử, tác phẩm "Ngọn Đuốc Tri Thức & Khuê Văn Các" cùng Cội Cây Tri Thức tạo nên quần thể biểu tượng uy nghiêm của Đại sảnh Bảo tàng Nhà giáo Việt Nam.

Phần đế tượng được chế tác từ đá trắng ngà nguyên khối, khắc nổi họa tiết trống đồng Đông Sơn và sóng nước Lạc Hồng. Vươn lên từ tâm điểm là kết cấu Khuê Văn Các cách điệu bằng đồng nguyên chất nâng đỡ những cánh sen vàng và ngọn lửa tri thức bất diệt.`,
    quote: '“Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người.” — Chủ tịch Hồ Chí Minh',
    highlights: [
      'Tầng đế khắc 8 chữ vàng: "Tôn Sư Trọng Đạo – Truyền Lửa Ngàn Đời".',
      'Vòng tròn Khuê Văn kết nối Thiên – Địa – Nhân trong triết lý giáo dục phương Đông.',
      'Quần thể trang trọng cùng Cội Cây Tri Thức giữa Đại sảnh Trung tâm.'
    ],
    videoData: {
      title: 'Phim tư liệu: Ngọn lửa đạo học Việt Nam qua ngàn năm lịch sử',
      duration: '01:45',
      scenes: [
        { time: '00:00 - 00:35', heading: 'Khởi nguồn từ Văn Miếu – Quốc Tử Giám (1070)', caption: 'Trường đại học đầu tiên của Việt Nam mở đầu dòng chảy giáo dục chính quy.', visualType: 'khue-van' },
        { time: '00:35 - 01:10', heading: 'Người thầy trong tâm thức dân tộc', caption: '"Muốn sang thì bắc cầu kiều / Muốn con hay chữ thì yêu lấy thầy."', visualType: 'calligraphy' },
        { time: '01:10 - 01:45', heading: 'Hành trình tiếp nối tới kỷ nguyên mới', caption: 'Ngọn lửa của người gieo hạt luôn ấm áp và vẹn nguyên giá trị.', visualType: 'torch' }
      ]
    },
    gallery: [
      { title: 'Bản vẽ kiến trúc Đài Biểu Tượng', caption: 'Tỷ lệ vàng kết hợp hình khối Khuê Văn Các và đóa sen đồng.', artType: 'monument-blueprint' },
      { title: 'Chi tiết hoa văn trống đồng & chữ triện', caption: 'Chạm khắc thủ công tinh xảo.', artType: 'bronze-detail' }
    ]
  },

  // --- PHÒNG 1: LỊCH SỬ PHÁT TRIỂN GIÁO DỤC VIỆT NAM QUA CÁC GIAI ĐOẠN ---
  {
    id: 'hist-overview',
    code: 'LS-00',
    title: 'Lịch Sử Phát Triển Giáo Dục Việt Nam — Trụ Cột Văn Hiến Dân Tộc',
    subtitle: 'Từ thời tiền sử, Bắc thuộc, độc lập trung đại – cận đại đến kỷ nguyên độc lập hiện đại',
    zoneId: 'room-history',
    zoneName: 'Lịch Sử Phát Triển Giáo Dục',
    era: 'Xuyên suốt chiều dài lịch sử dựng nước và giữ nước',
    imageFile: 'Giai đoạn trước Cách mạng tháng Tám 1945.jpg',
    material: 'Bia đá xanh khắc chữ vàng & Tư liệu tổng quan lịch sử giáo dục Việt Nam',
    dimensions: 'Bệ trưng bày & Bảng tư liệu lịch sử 3D',
    position: { x: -16.2, y: 0, z: -6.4 },
    viewOffset: { x: -14.5, y: 2.3, z: -3.2 },
    lookAtOffset: { x: -16.2, y: 2.0, z: -6.4 },
    summary: 'Trong suốt chiều dài lịch sử dựng nước và giữ nước của dân tộc Việt Nam, giáo dục luôn đóng vai trò quan trọng như một trụ cột cơ bản của việc xây dựng và vun đắp cho nền văn hiến lâu đời của đất nước.',
    story: `Trong suốt chiều dài lịch sử dựng nước và giữ nước của dân tộc Việt Nam, giáo dục đã tồn tại, phát triển cùng với sự tồn tại và phát triển của dân tộc và luôn đóng vai trò quan trọng như một trụ cột cơ bản của việc xây dựng và vun đắp cho nền văn hiến lâu đời của đất nước.

Trải qua các thời kỳ: thời tiền sử, thời trước Bắc thuộc, thời Bắc thuộc, thời độc lập trung đại và cận đại, thời thuộc Pháp và thời độc lập hiện đại, nền giáo dục đã từng phải đương đầu với âm mưu xâm lược và đồng hóa của các thế lực phong kiến, thực dân, song vẫn giữ được những truyền thống dân tộc tốt đẹp, tiếp thu có chọn lọc những gì tinh túy nhất của các trào lưu văn minh nhân loại để hình thành một nền giáo dục đào tạo nguồn nhân lực bảo vệ và xây dựng đất nước, vừa có khả năng hội nhập vừa bảo toàn bản sắc dân tộc của riêng mình.`,
    quote: '“Giáo dục luôn đóng vai trò quan trọng như một trụ cột cơ bản của việc xây dựng và vun đắp cho nền văn hiến lâu đời của đất nước.”',
    highlights: [
      'Trải qua các thời kỳ: Tiền sử, Trước Bắc thuộc, Bắc thuộc, Độc lập trung đại & cận đại, Thuộc Pháp và Độc lập hiện đại.',
      'Kiên cường vượt qua âm mưu đồng hóa của các thế lực phong kiến, thực dân xâm lược.',
      'Giữ gìn truyền thống dân tộc tốt đẹp, tiếp thu tinh hoa văn minh nhân loại để vừa hội nhập vừa bảo toàn bản sắc Việt Nam.'
    ],
    gallery: [
      { title: 'Lịch sử phát triển Giáo dục Việt Nam', caption: 'Trụ cột cơ bản vun đắp nền văn hiến lâu đời của dân tộc.', imageFile: 'Giai đoạn trước Cách mạng tháng Tám 1945.jpg' }
    ]
  },

  {
    id: 'hist-stage-1',
    code: 'LS-01',
    title: 'Giai Đoạn Trước Cách Mạng Tháng Tám 1945',
    subtitle: 'Giáo dục Nho học Phong kiến (Lý, Trần, Hồ, Hậu Lê, Tây Sơn, Nguyễn) & Trào lưu Duy Tân thực học',
    zoneId: 'room-history',
    zoneName: 'Lịch Sử Phát Triển Giáo Dục',
    era: 'Từ Thế kỷ XI đến trước Tháng 8/1945',
    imageFile: 'Giai đoạn trước Cách mạng tháng Tám 1945.jpg',
    material: 'Ảnh tư liệu lịch sử gốc, Bia Tiến sĩ & Mộc bản Quốc Tử Giám',
    dimensions: 'Bệ trưng bày & Khung ảnh tư liệu 3D',
    position: { x: -21.6, y: 0, z: -6.6 },
    viewOffset: { x: -18.2, y: 2.3, z: -3.5 },
    lookAtOffset: { x: -21.6, y: 2.0, z: -6.6 },
    summary: 'Nền giáo dục Nho học của nhà nước phong kiến Việt Nam từ thế kỷ XI qua các triều đại Lý, Trần, Hồ, Hậu Lê, Tây Sơn, Nguyễn; sự phổ biến chữ Quốc ngữ từ sau năm 1919 và trào lưu giáo dục Duy Tân yêu nước.',
    story: `Nền giáo dục Nho học của nhà nước phong kiến Việt Nam từ thế kỷ XI trải qua các thời Lý, Trần, Hồ, Hậu Lê, Tây Sơn, Nguyễn. Sự ra đời và sử dụng rộng rãi chữ quốc ngữ theo bảng chữ La tinh trong nhà trường từ cuối năm 1919 đã báo hiệu sự chấm dứt nền cựu học truyền thống Nho giáo để thay thế bằng hệ thống tân học của chủ nghĩa thực dân Pháp.

Cũng trong thời kỳ cuối thế kỷ XIX đầu thế kỷ XX, trào lưu giáo dục Duy Tân yêu nước của Phan Bội Châu và Lương Văn Can, Nguyễn Quyền đã khởi xướng cho khuynh hướng thực học, sử dụng chữ quốc ngữ trong dạy và học, tiếp cận với các khoa học tự nhiên và kỹ nghệ, từ bỏ lối học từ chương khoa cử.`,
    quote: '“Khởi xướng khuynh hướng thực học, sử dụng chữ Quốc ngữ trong dạy và học, tiếp cận với các khoa học tự nhiên và kỹ nghệ, từ bỏ lối học từ chương khoa cử.”',
    highlights: [
      'Thế kỷ XI – 1919: Nền giáo dục Nho học của nhà nước phong kiến trải qua các triều đại Lý, Trần, Hồ, Hậu Lê, Tây Sơn, Nguyễn.',
      'Cuối năm 1919: Chấm dứt nền cựu học truyền thống Nho giáo, sử dụng rộng rãi chữ Quốc ngữ theo bảng chữ La-tinh.',
      'Cuối thế kỷ XIX – đầu thế kỷ XX: Trào lưu giáo dục Duy Tân yêu nước của Phan Bội Châu, Lương Văn Can, Nguyễn Quyền (Đông Kinh Nghĩa Thục) đề cao thực học.'
    ],
    gallery: [
      { title: 'Giai đoạn trước Cách mạng tháng Tám 1945', caption: 'Hình ảnh tư liệu lịch sử trưng bày tại Phòng 1.', imageFile: 'Giai đoạn trước Cách mạng tháng Tám 1945.jpg' }
    ]
  },

  {
    id: 'hist-stage-2',
    code: 'LS-02',
    title: 'Giai Đoạn 1945 – 1954: Khai Sinh Bộ Quốc Gia Giáo Dục & Cải Cách Giáo Dục 1950',
    subtitle: 'Bình dân học vụ chống nạn mù chữ, Kháng chiến toàn quốc & Nền giáo dục Dân tộc – Khoa học – Đại chúng',
    zoneId: 'room-history',
    zoneName: 'Lịch Sử Phát Triển Giáo Dục',
    era: 'Giai đoạn 1945 – 1954',
    imageFile: 'Giai đoạn 1945-1954.jpg',
    material: 'Ảnh tư liệu lịch sử gốc, Đèn dầu Bình dân học vụ & Bảng đen kháng chiến',
    dimensions: 'Bệ trưng bày & Khung ảnh tư liệu 3D',
    position: { x: -25.4, y: 0, z: -2.8 },
    viewOffset: { x: -20.5, y: 2.3, z: -1.8 },
    lookAtOffset: { x: -25.4, y: 2.0, z: -2.8 },
    summary: 'Thành lập Bộ Quốc gia Giáo dục và Nha Bình dân học vụ (1945), di chuyển cơ quan Bộ lên An toàn khu trong kháng chiến, tiến hành Cải cách giáo dục năm 1950 và thành lập Công đoàn Giáo dục Việt Nam (7/1951).',
    story: `Cách mạng tháng Tám thành công, Nhà nước Việt Nam Dân chủ Cộng hòa được thành lập, lịch sử giáo dục nước nhà sang một trang mới. Bộ Quốc gia giáo dục là một trong những Bộ - thành viên Chính phủ - được thành lập ngay từ những ngày đầu. Bộ trưởng đầu tiên là ông Vũ Đình Hòe. Ngày 02/3/1946 trong kỳ họp thứ nhất, Quốc hội khóa I, ông Đặng Thai Mai được cử làm Bộ trưởng Bộ Quốc gia giáo dục (thay ông Vũ Đình Hòe sang làm Bộ trưởng Bộ Tư pháp).

Chính phủ đã ký sắc lệnh quan trọng thành lập Nha bình dân học vụ, chống nạn mù chữ. Cùng với việc chống nạn mù chữ, Chính phủ Việt Nam Dân chủ Cộng hòa đã có những chủ trương cải tổ và xây dựng bước đầu đối với toàn bộ hệ thống giáo dục quốc gia.

Tháng 11/1946, trong kỳ họp thứ 2, Quốc hội khóa I, ông Nguyễn Văn Huyên được cử làm Bộ trưởng Bộ Quốc gia giáo dục. Bộ Quốc gia giáo dục gồm Văn phòng Bộ và các nha: Đại học vụ, Trung học vụ, Tiểu học vụ và Nha Bình dân học vụ.

Trong kháng chiến toàn quốc, Bộ đã sơ tán và di chuyển cơ quan từ Thủ đô về nông thôn, từ Hà Đông, Phú Thọ đến Tuyên Quang và An toàn khu.

Năm 1950, Trung ương Đảng và Chính phủ đã quyết định tiến hành cuộc cải cách giáo dục. Cuộc cải cách này quyết định thực hiện hệ thống trường phổ thông 9 năm và chương trình giảng dạy mới. Giai đoạn này cũng đánh dấu việc thành lập Công đoàn Giáo dục Việt Nam (tháng 7/1951).

Trong chín năm kháng chiến chống thực dân Pháp, sự nghiệp giáo dục từ phổ thông đến đại học không những được duy trì và không ngừng phát triển mà còn có sự biến đổi về chất. Các trường từ giáo dục phổ thông đến đại học đều giảng dạy bằng tiếng Việt. Cuộc cải cách giáo dục năm 1950 đến 1954 dù có mặt còn hạn chế, nhưng đã thay đổi cơ bản nền giáo dục thực dân cũ, xây dựng nền tảng cho một nền giáo dục mới: dân tộc, khoa học, đại chúng.`,
    quote: '“Xây dựng nền tảng cho một nền giáo dục mới: dân tộc, khoa học, đại chúng; tất cả các trường từ phổ thông đến đại học đều giảng dạy bằng tiếng Việt.”',
    highlights: [
      'Năm 1945–1946: Thành lập Bộ Quốc gia Giáo dục (các Bộ trưởng Vũ Đình Hòe, Đặng Thai Mai, Nguyễn Văn Huyên) và Nha Bình dân học vụ chống nạn mù chữ.',
      'Năm 1950: Tiến hành Cải cách giáo dục lần thứ nhất, thực hiện hệ thống trường phổ thông 9 năm và giảng dạy hoàn toàn bằng tiếng Việt.',
      'Tháng 7/1951: Thành lập Công đoàn Giáo dục Việt Nam tại An toàn khu kháng chiến.'
    ],
    gallery: [
      { title: 'Giai đoạn 1945 – 1954', caption: 'Hình ảnh lịch sử giai đoạn Bình Dân Học Vụ và Kháng chiến chống Pháp.', imageFile: 'Giai đoạn 1945-1954.jpg' }
    ]
  },

  {
    id: 'hist-stage-3',
    code: 'LS-03',
    title: 'Giai Đoạn 1954 – 1975: Cải Cách Giáo Dục 1956, Phong Trào “Hai Tốt” & Chi Viện Miền Nam',
    subtitle: 'Hệ thống phổ thông 10 năm, thành lập Bộ ĐH & THCN (1965) và 3.000 cán bộ chi viện miền Nam',
    zoneId: 'room-history',
    zoneName: 'Lịch Sử Phát Triển Giáo Dục',
    era: 'Giai đoạn 1954 – 1975',
    imageFile: 'Giai đoạn 1954-1975.jpe',
    material: 'Ảnh tư liệu lịch sử gốc, Mũ rơm học trò, Kẻng vỏ bom & Cặp da vượt Trường Sơn',
    dimensions: 'Bệ trưng bày & Khung ảnh tư liệu 3D',
    position: { x: -25.4, y: 0, z: 2.8 },
    viewOffset: { x: -20.5, y: 2.3, z: 1.8 },
    lookAtOffset: { x: -25.4, y: 2.0, z: 2.8 },
    summary: 'Mở trường học sinh miền Nam trên đất Bắc, tiến hành Cải cách giáo dục 1956 (hệ phổ thông 10 năm), thành lập Bộ Đại học và Trung học chuyên nghiệp (10/1965), phát triển phong trào “Hai tốt” và chi viện 3.000 cán bộ giáo dục cho miền Nam.',
    story: `Giữa năm 1954, cơ quan Bộ Giáo dục chuyển từ xã Yên Nguyên, huyện Chiêm Hóa, tỉnh Tuyên Quang về huyện Đại Từ, Thái Nguyên để chuẩn bị về Hà Nội. Bộ đã chỉ đạo các trường trực thuộc và các địa phương có vùng mới giải phóng chuẩn bị các điều kiện cần thiết ban đầu để nhanh chóng phục hồi trường lớp.

Nhiều công việc đã được Bộ chú trọng triển khai thực hiện trong giai đoạn này: Mở các trường học sinh miền Nam trên đất Bắc để đón nhận các em học sinh miền Nam ra Bắc học tập; tiến hành cải cách giáo dục năm 1956 đã đặt cơ sở cho việc hình thành Hệ thống giáo dục phổ thông 10 năm gồm 3 cấp học.

Tháng 10/1965, Ủy ban Thường vụ Quốc hội quyết định phê chuẩn việc thành lập Bộ Đại học và Trung học chuyên nghiệp, tách khỏi Bộ Giáo dục và bổ nhiệm đồng chí Tạ Quang Bửu làm Bộ trưởng.

Sau những năm phát triển giáo dục trong điều kiện hòa bình, lúc này trên toàn miền Bắc nạn mù chữ đã được thanh toán. Cũng trong giai đoạn này, phong trào thi đua “Hai tốt” phát triển rộng rãi với mô hình tiêu biểu là trường Phổ thông cấp II Bắc Lý (Hà Nam), trường Tiểu học Cẩm Bình (Hà Tĩnh), phong trào giáo dục xã Ngổ Luống (Hà Đông, Hà Nội). Hệ thống trường bổ túc công nông, trường phổ thông lao động được phát triển mạnh. Ở miền Bắc, mỗi ngày hàng triệu học sinh, sinh viên, các thầy cô giáo vẫn đội mũ rơm, khắc phục muôn vàn khó khăn đến trường học tập, giảng dạy. Hàng loạt trường trung học chuyên nghiệp mới được mở ra ở cả trung ương và địa phương. Mạng lưới các trường đại học và quy mô đào tạo không ngừng được mở rộng.

Tháng 10/1962, Tiểu ban Giáo dục thuộc Trung ương cục miền Nam được thành lập. Miền Bắc đã chi viện 3.000 cán bộ cùng rất nhiều tài liệu sách giáo khoa, tạo điều kiện để phong trào giáo dục miền Nam lúc này có nhiều bước chuyển biến mới.

Hàng vạn thanh niên tiêu biểu của cả nước thời kỳ này đã được cử ra nước ngoài học tập trở thành những trí thức, nhà khoa học là nguồn lực to lớn, góp phần phụng sự kháng chiến thắng lợi, xây dựng Tổ quốc.`,
    quote: '“Ở miền Bắc, mỗi ngày hàng triệu học sinh, sinh viên, các thầy cô giáo vẫn đội mũ rơm, khắc phục muôn vàn khó khăn đến trường học tập, giảng dạy.”',
    highlights: [
      'Năm 1954–1956: Mở các trường học sinh miền Nam trên đất Bắc; tiến hành Cải cách giáo dục năm 1956 hình thành hệ phổ thông 10 năm gồm 3 cấp học.',
      'Tháng 10/1965: Thành lập Bộ Đại học và Trung học chuyên nghiệp do GS. Tạ Quang Bửu làm Bộ trưởng; lan tỏa phong trào “Hai tốt” (Bắc Lý, Cẩm Bình, Ngổ Luống).',
      'Tháng 10/1962 – 1975: Thành lập Tiểu ban Giáo dục Trung ương Cục miền Nam; chi viện 3.000 cán bộ giáo dục cùng sách giáo khoa vào chiến trường miền Nam.'
    ],
    gallery: [
      { title: 'Giai đoạn 1954 – 1975', caption: 'Hình ảnh lịch sử giáo dục thời kỳ xây dựng CNXH ở miền Bắc và đấu tranh thống nhất đất nước.', imageFile: 'Giai đoạn 1954-1975.jpe' }
    ]
  },

  {
    id: 'hist-stage-4',
    code: 'LS-04',
    title: 'Giai Đoạn 1975 – 1986: Thống Nhất Giáo Dục Cả Nước & Cải Cách Giáo Dục 1979',
    subtitle: 'Hoàn thành thống nhất giáo dục hai miền Nam – Bắc, Nghị quyết Cải cách giáo dục 1/1979 & Hợp tác quốc tế',
    zoneId: 'room-history',
    zoneName: 'Lịch Sử Phát Triển Giáo Dục',
    era: 'Giai đoạn 1975 – 1986',
    imageFile: 'Giai đoạn 1975-1986.jpg',
    material: 'Ảnh tư liệu lịch sử gốc, Sách giáo khoa Cải cách 1979 & Kỷ niệm chương Giáo dục',
    dimensions: 'Bệ trưng bày & Khung ảnh tư liệu 3D',
    position: { x: -21.6, y: 0, z: 6.6 },
    viewOffset: { x: -18.2, y: 2.3, z: 3.5 },
    lookAtOffset: { x: -21.6, y: 2.0, z: 6.6 },
    summary: 'Thống nhất quản lý giáo dục sau năm 1975 dưới sự lãnh đạo của Bộ trưởng Nguyễn Thị Bình (Bộ Giáo dục) và Bộ trưởng Nguyễn Đình Tứ (Bộ ĐH & THCN), ban hành Nghị quyết Cải cách giáo dục tháng 1/1979 và mở rộng hợp tác quốc tế.',
    story: `Sau khi Bộ trưởng Nguyễn Văn Huyên qua đời (10/1975), Thứ trưởng Hồ Trúc kiêm Bí thư Đảng đoàn phụ trách công việc chung của Bộ.

Tháng 7/1976, bà Nguyễn Thị Bình, nguyên Bộ trưởng Bộ Ngoại giao trong Chính phủ Cộng hòa miền Nam Việt Nam được cử làm Bộ trưởng Bộ Giáo dục.

Năm 1976, GS.TS Nguyễn Đình Tứ, Thứ trưởng, Ủy viên dự khuyết TW Đảng khóa IV được cử làm Bộ trưởng Bộ Đại học và Trung học chuyên nghiệp thay Bộ trưởng Tạ Quang Bửu nghỉ hưu.

Tháng 1/1979, Bộ Chính trị Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam đã ban hành Nghị quyết về cải cách giáo dục. Việc cải cách bắt đầu từ giáo dục phổ thông, song song với việc tiến hành bồi dưỡng giáo viên, theo hướng cải cách giáo dục, từng bước cải cách sư phạm.

Trong thời kỳ này cũng đánh dấu việc thực hiện nhiệm vụ quốc tế với hai nước bạn Lào, Campuchia; mở rộng quan hệ hợp tác, đối ngoại đa dạng với Liên Xô, các nước XHCN ở Đông Âu…`,
    quote: '“Tháng 1/1979, Bộ Chính trị ban hành Nghị quyết về cải cách giáo dục, bắt đầu từ giáo dục phổ thông song song với bồi dưỡng giáo viên và cải cách sư phạm.”',
    highlights: [
      'Năm 1976: Bà Nguyễn Thị Bình giữ chức Bộ trưởng Bộ Giáo dục; GS.TS Nguyễn Đình Tứ giữ chức Bộ trưởng Bộ Đại học và Trung học chuyên nghiệp.',
      'Tháng 1/1979: Bộ Chính trị ban hành Nghị quyết về Cải cách giáo dục trên phạm vi cả nước.',
      'Thực hiện nhiệm vụ quốc tế vẻ vang với Lào, Campuchia và mở rộng hợp tác giáo dục với Liên Xô cùng các nước XHCN Đông Âu.'
    ],
    gallery: [
      { title: 'Giai đoạn 1975 – 1986', caption: 'Hình ảnh lịch sử thời kỳ thống nhất giáo dục hai miền và thực hiện Cải cách giáo dục 1979.', imageFile: 'Giai đoạn 1975-1986.jpg' }
    ]
  },

  {
    id: 'hist-stage-5',
    code: 'LS-05',
    title: 'Giáo Dục Việt Nam Thời Kỳ Đổi Mới Đến Nay (1986 – 1995 & 1996 – Nay)',
    subtitle: 'Thành lập Bộ Giáo dục và Đào tạo (1990), Nghị quyết 29-NQ/TW & Hội nhập quốc tế sâu rộng',
    zoneId: 'room-history',
    zoneName: 'Lịch Sử Phát Triển Giáo Dục',
    era: 'Từ năm 1986 đến nay',
    imageFile: 'Giai đoạn 1975-1986.jpg',
    material: 'Tư liệu lịch sử thời kỳ Đổi mới, Huân chương & Thiết bị giáo dục hiện đại',
    dimensions: 'Bệ trưng bày & Bảng tư liệu lịch sử 3D',
    position: { x: -16.2, y: 0, z: 6.4 },
    viewOffset: { x: -14.5, y: 2.3, z: 3.2 },
    lookAtOffset: { x: -16.2, y: 2.0, z: 6.4 },
    summary: 'Bao gồm Giai đoạn 1986–1995 (hợp nhất bậc học Mầm non năm 1987, thành lập Bộ Giáo dục và Đào tạo năm 1990) và Giai đoạn 1996 đến nay (triển khai Nghị quyết 29-NQ/TW về đổi mới căn bản, toàn diện giáo dục và đào tạo, nâng cao dân trí, đào tạo nhân lực, bồi dưỡng nhân tài).',
    story: `GIAI ĐOẠN 1986 – 1995:

Đại hội VI của Đảng Cộng sản Việt Nam tháng 12/1986 đã mở đầu cho công cuộc đổi mới toàn diện ở Việt Nam. Chủ trương của ngành trong thời kỳ này là đa dạng hóa các loại hình trường, lớp, các hình thức đào tạo, quy chế các trường, lớp dân lập, tư thục đã được ban hành.

Năm 1987, theo quyết định của Nhà nước, Ủy ban Bảo vệ và Chăm sóc trẻ em Trung ương được sáp nhập vào Bộ Giáo dục; nhà trẻ, mẫu giáo hợp nhất lại thành ngành học Mầm non, nay còn gọi là bậc học Mầm non. Bộ trưởng Bộ Giáo dục thời kỳ này là GS, Viện sĩ Phạm Minh Hạc.

Năm 1988: Sáp nhập Tổng cục Dạy nghề vào Bộ Đại học và Trung học chuyên nghiệp thành Bộ Đại học, Trung học chuyên nghiệp và Dạy nghề.

Năm 1990: Chính phủ quyết định thành lập Bộ Giáo dục và Đào tạo trên cơ sở sáp nhập Bộ Giáo dục, Bộ Đại học và Trung học chuyên nghiệp và Dạy nghề. Bộ Giáo dục và Đào tạo quản lý thống nhất hệ thống giáo dục quốc dân từ mầm non đến giáo dục đại học và sau đại học. GS.TS Trần Hồng Quân, Ủy viên Ban Chấp hành Trung ương Đảng khóa VII được bầu giữ chức Bộ trưởng Bộ Giáo dục và Đào tạo.

GIAI ĐOẠN 1996 ĐẾN NAY:

Từ năm 1997 đến nay, Bộ Giáo dục và Đào tạo lần lượt qua các thời kỳ lãnh đạo của các Bộ trưởng: Bộ trưởng Nguyễn Minh Hiển, Bộ trưởng Nguyễn Thiện Nhân, Bộ trưởng Phạm Vũ Luận, Bộ trưởng Phùng Xuân Nhạ, từ 4/2021 là Bộ trưởng Nguyễn Kim Sơn (và từ 2/2026 là Quyền Bộ trưởng Hoàng Minh Sơn).

Giáo dục trong giai đoạn này đã đáp ứng được cơ bản nhu cầu học tập ngày càng tăng của nhân dân. Thực hiện được các mục tiêu lớn trong Chiến lược phát triển giáo dục: nâng cao dân trí, đào tạo nhân lực, bồi dưỡng nhân tài phục vụ cho sự nghiệp phát triển đất nước và hội nhập quốc tế thành công.

Trong giai đoạn đổi mới, đặc biệt sau khi triển khai thực hiện Nghị quyết Đại hội Đảng lần thứ XI và Nghị quyết số 29-NQ/TW về đổi mới căn bản, toàn diện giáo dục và đào tạo, giáo dục đã đạt được những thành tựu to lớn, góp phần quan trọng vào sự nghiệp công nghiệp hóa, hiện đại hóa và hội nhập quốc tế của đất nước.

Hệ thống trường lớp và quy mô giáo dục phát triển nhanh, thực hiện nền giáo dục toàn dân, đáp ứng nhu cầu học tập ngày càng tăng của nhân dân và nâng cao trình độ đào tạo, trình độ và kỹ năng nghề nghiệp cho người lao động. Công bằng xã hội trong tiếp cận giáo dục có nhiều tiến bộ, nhất là đối với người dân tộc thiểu số, lao động nông thôn, các đối tượng chính sách và người có hoàn cảnh khó khăn, bình đẳng giới được bảo đảm. Chất lượng giáo dục và đào tạo được nâng lên, góp phần đáp ứng yêu cầu nhân lực phục vụ cho phát triển kinh tế - xã hội, xây dựng và bảo vệ Tổ quốc. Công tác phát triển đội ngũ được đặc biệt chú trọng để củng cố và đổi mới. Cơ sở vật chất kỹ thuật của hệ thống giáo dục và đào tạo được tăng thêm và từng bước hiện đại hóa. Xã hội hóa giáo dục và hợp tác quốc tế được đẩy mạnh, đạt nhiều kết quả quan trọng.`,
    quote: '“Thực hiện các mục tiêu lớn trong Chiến lược phát triển giáo dục: nâng cao dân trí, đào tạo nhân lực, bồi dưỡng nhân tài phục vụ sự nghiệp phát triển đất nước và hội nhập quốc tế.”',
    highlights: [
      'Năm 1987–1990: Hình thành bậc học Mầm non (1987); hợp nhất thành Bộ Giáo dục và Đào tạo quản lý thống nhất từ mầm non đến sau đại học (1990).',
      'Giai đoạn 1996 đến nay: Thực hiện Nghị quyết số 29-NQ/TW về đổi mới căn bản, toàn diện giáo dục và đào tạo.',
      'Đảm bảo công bằng xã hội trong tiếp cận giáo dục, hiện đại hóa cơ sở vật chất, đẩy mạnh xã hội hóa và hội nhập quốc tế.'
    ],
    gallery: [
      { title: 'Giáo dục Việt Nam thời kỳ Đổi mới', caption: 'Đổi mới căn bản, toàn diện và hội nhập quốc tế.', imageFile: 'Giai đoạn 1975-1986.jpg' }
    ]
  },

  // --- PHÒNG 2: GIAN TRƯNG BÀY NHÀ GIÁO VIỆT NAM QUA CÁC THỜI KỲ ---
  {
    id: 'exhibit-15-educators',
    code: 'NG-46',
    title: 'Gian Trưng Bày: Nhà Giáo Việt Nam Qua Các Thời Kỳ',
    subtitle: 'Hành trình tôn vinh 46 bậc danh sư và nhà giáo tiêu biểu từ thế kỷ XI đến nay',
    zoneId: 'room-educators',
    zoneName: 'Nhà Giáo Việt Nam Qua Các Thời Kỳ',
    era: 'Thế kỷ XI – Thế kỷ XXI',
    material: 'Vách cong uốn lượn nghệ thuật 5 thời kỳ & Khung nổi viền kim loại vàng thanh mảnh',
    dimensions: 'Gian trưng bày vách cong uốn lượn 5 chuyên đề lịch sử',
    position: { x: 0, y: 0, z: -22.5 },
    viewOffset: { x: 0, y: 1.6, z: -15.5 },
    lookAtOffset: { x: 0, y: 1.6, z: -22.5 },
    isEducatorsGallery: true,
    summary: 'Dạo bước qua 5 dải màu thời kỳ lịch sử, chiêm ngưỡng 5 Pano dẫn nhập mạ vàng lớn cùng 46 bậc danh sư, nhà giáo tiêu biểu của dân tộc.',
    story: `Gian phòng trưng bày được thiết kế theo phong cách không gian mở vách cong uốn lượn (Curved Promenade) của triển lãm Cục Văn thư và Lưu trữ Quốc gia:
- Chuyên đề I (Vàng hoàng gia #c89d3f): Khơi nguồn đạo học (Thế kỷ XI – XV)
- Chuyên đề II (Nâu trầm #8b4513): Các nhà giáo thời kỳ Phong kiến (Thế kỷ XI – XIX)
- Chuyên đề III (Xanh trầm #52796f): Các nhà giáo từ đầu TK XX đến 1945
- Chuyên đề IV (Xanh ô-liu #6b705c): Các nhà giáo giai đoạn 1945–1975
- Chuyên đề V (Xanh lam #376b8c): Các nhà giáo từ sau 1975 đến nay`,
    quote: '“Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người.”',
    highlights: [
      '5 Pano dẫn nhập lớn in chữ mạ vàng và 5 mốc son lịch sử',
      '46 bức chân dung nổi viền kim loại thanh mảnh (Slim Float Frame)',
      'Điểm nhấn kiến trúc 2 cột gỗ lim và mái ngói vảy cá truyền thống tại khu vực Thầy Chu Văn An',
      'Hệ thống 5 điểm bước chân Floor Waypoints đưa người xem dạo bước mượt mà'
    ],
    videoData: {
      title: 'Phim chuyên đề: 15 Người Thầy Kiệt Xuất Trong Lịch Sử Dân Tộc',
      duration: '02:10',
      scenes: [
        { time: '00:00 - 00:45', heading: 'Các bậc Đại Nho thời Phong kiến', caption: 'Chu Văn An, Nguyễn Bỉnh Khiêm, Lê Quý Đôn, Nguyễn Thiếp, Cao Bá Quát, Nguyễn Đình Chiểu.', visualType: 'scholar' },
        { time: '00:45 - 01:30', heading: 'Những người thầy khai sáng thế kỷ XX', caption: 'Phan Bội Châu, Thầy giáo Nguyễn Tất Thành, Lê Thước, Đặng Thai Mai, Hoàng Xuân Hãn.', visualType: 'calligraphy' },
        { time: '01:30 - 02:10', heading: 'Trí tuệ khoa học và Nghị lực phi thường', caption: 'Đào Văn Tiến, Lê Văn Thiêm, Văn Như Cương và Nhà giáo Ưu tú Nguyễn Ngọc Ký.', visualType: 'torch' }
      ]
    },
    gallery: [
      { title: 'Chân dung Vạn Thế Sư Biểu Chu Văn An', caption: 'Biểu tượng muôn đời của đạo học Việt Nam.', imageFile: 'Chu Văn An.jpg' }
    ]
  },

  // --- PHÒNG 3: 15 BỘ TRƯỞNG BỘ GIÁO DỤC VIỆT NAM QUA CÁC THỜI KỲ ---
  {
    id: 'exhibit-15-ministers',
    code: 'BT-15',
    title: 'Không Gian Trưng Bày Chân Dung 15 Bộ Trưởng Bộ Giáo Dục Việt Nam (1945 – Nay)',
    subtitle: 'Trưng bày hình ảnh tư liệu gốc và dấu ấn lịch sử của 15 vị Bộ trưởng',
    zoneId: 'room-ministers',
    zoneName: '15 Bộ Trưởng Bộ Giáo Dục',
    era: 'Từ tháng 8/1945 đến nay',
    material: 'Ảnh chân dung tư liệu gốc đóng khung gỗ tự nhiên viền đồng mạ vàng',
    dimensions: 'Hệ thống 15 khung chân dung 3D chiếu sáng chuẩn bảo tàng quốc gia',
    position: { x: 22.5, y: 0, z: 0 },
    viewOffset: { x: 15.5, y: 2.8, z: 0 },
    lookAtOffset: { x: 22.5, y: 2.3, z: 0 },
    isMinistersGallery: true,
    summary: 'Gian phòng trưng bày đầy đủ 15 bức ảnh chân dung thực tế cùng tiểu sử, nhiệm kỳ và dấu ấn quyết sách của 15 vị Bộ trưởng Bộ Giáo dục từ năm 1945 đến nay.',
    story: `Phòng trưng bày số 3 giới thiệu trọn vẹn chân dung và biên niên sử của 15 vị Bộ trưởng đã đứng đầu ngành Giáo dục Việt Nam kể từ ngày thành lập nước Việt Nam Dân chủ Cộng hòa (1945) đến nay. Hãy click vào từng bức ảnh trên tường 3D để xem chi tiết.`,
    quote: '“Mỗi nhiệm kỳ Bộ trưởng là một chặng đường lịch sử gắn liền với vận mệnh và sự trưởng thành của nền giáo dục quốc dân.”',
    highlights: [
      'Hiển thị trực tiếp 15 bức ảnh chân dung thật của 15 Bộ trưởng trên các khung tranh 3D trong phòng.',
      'Click trực tiếp vào từng bức ảnh Bộ trưởng trên tường 3D để xem ảnh lớn, nhiệm kỳ và đóng góp lịch sử.',
      'Có bảng tra cứu nhanh toàn bộ 15 Bộ trưởng kèm ảnh gốc.'
    ],
    videoData: {
      title: 'Phim tư liệu: Chân dung 15 Bộ trưởng Bộ Giáo dục Việt Nam (1945 – Nay)',
      duration: '02:15',
      scenes: [
        { time: '00:00 - 00:45', heading: 'Những vị Bộ trưởng thời kỳ Kháng chiến & Kiến quốc', caption: 'Vũ Đình Hòe, Đặng Thai Mai, Ca Văn Thỉnh, Nguyễn Văn Huyên, Tạ Quang Bửu.', visualType: 'lamp' },
        { time: '00:45 - 01:30', heading: 'Thời kỳ Thống nhất đất nước và Khởi đầu Đổi mới', caption: 'Nguyễn Thị Bình, Nguyễn Đình Tứ, Phạm Minh Hạc, Trần Hồng Quân, Nguyễn Minh Hiển.', visualType: 'blackboard' },
        { time: '01:30 - 02:15', heading: 'Đổi mới căn bản, toàn diện & Hội nhập số', caption: 'Nguyễn Thiện Nhân, Phạm Vũ Luận, Phùng Xuân Nhạ, Nguyễn Kim Sơn, Hoàng Minh Sơn.', visualType: 'digital' }
      ]
    },
    gallery: [
      { title: 'Bộ trưởng đầu tiên GS. Vũ Đình Hòe', caption: 'Nhiệm kỳ 8/1945 – 3/1946', imageFile: 'GS. Vũ Đình Hòe.jpg' }
    ]
  },

  // --- PHÒNG 4: KHU BỘ ĐỒ DÙNG & HIỆN VẬT DẠY HỌC (5 BỘ ĐỒ DÙNG TIÊU BIỂU) ---
  {
    id: 'tool-scholar-set',
    code: 'ĐD-01',
    title: 'Bộ Văn Phòng Tứ Bảo, Nghiên Mực Đá & Mộc Bản Sách Giáo Khoa Chữ Nôm',
    subtitle: 'Bộ đồ dùng dạy học truyền thống của thầy đồ Việt Nam xưa',
    zoneId: 'room-tools',
    zoneName: 'Hành Lang Lời Bác Dạy & Bộ Đồ Dùng Dạy Học',
    era: 'Thế kỷ XVI – XIX',
    material: 'Đá Đoan Khê, gỗ Thị khắc mộc bản, bút lông trúc & giấy dó',
    dimensions: 'Tủ kính 1,55m × 0,95m × 1,5m',
    position: { x: -6.5, y: 0, z: 17.5 },
    viewOffset: { x: -4.2, y: 2.3, z: 14.5 },
    lookAtOffset: { x: -6.5, y: 1.5, z: 17.5 },
    summary: 'Gồm chiếc nghiên mực đá chạm lá sen có vết lõm sâu do hàng chục năm mài mực của thầy đồ, bộ bút lông, mộc bản khắc sách “Ấu Học Ngũ Ngôn Thi” và tráp đựng sách.',
    story: `Trong các lớp học truyền thống xưa, "Văn phòng tứ bảo" (Bút, Nghiên, Giấy, Mực) là những vật dụng thiêng liêng nhất trên bàn thầy. Chiếc nghiên mực đá trưng bày tại đây có vết lõm sâu ở giữa lòng nghiên – dấu tích của hàng vạn giờ người thầy cặm cụi mài mực chấm bài và viết chữ mẫu cho học trò.

Đi kèm là tấm mộc bản bằng gỗ thị khắc ngược chữ Hán và chữ Nôm để in sách vỡ lòng như "Tam Tự Kinh", "Sơ Học Vấn Tân", cùng chiếc ống quyển bằng tre sơn son của học trò đi thi.`,
    quote: '“Mỗi nét chữ trên giấy dó là kết tinh của đạo lý và nhân cách người thầy.”',
    highlights: [
      'Nghiên mực đá Đoan Khê chạm hoa sen truyền thống.',
      'Giá treo bút lông bằng gỗ trắc và thỏi mực tàu nguyên bản.',
      'Mộc bản khắc chữ Nôm dùng để in sách giáo khoa khai tâm.'
    ],
    videoData: {
      title: 'Phim chuyên đề: Văn phòng tứ bảo & Nghệ thuật khắc mộc bản',
      duration: '01:40',
      scenes: [
        { time: '00:00 - 00:35', heading: 'Nghiên mực và Bút lông của thầy đồ', caption: 'Vật bất ly thân trên án thư của người thầy xưa.', visualType: 'inkstone' },
        { time: '00:35 - 01:10', heading: 'Mộc bản in sách giấy dó', caption: 'Lưu truyền tri thức qua từng bản khắc gỗ tinh xảo.', visualType: 'woodblock' },
        { time: '01:10 - 01:40', heading: 'Chữ Nhân trong nét bút', caption: 'Rèn nét chữ là rèn nết người.', visualType: 'calligraphy' }
      ]
    },
    gallery: [
      { title: 'Nghiên mực đá & Bộ bút lông cổ', caption: 'Hiện vật gốc của gia đình nhà nho 3 đời dạy học.', artType: 'inkstone-art' },
      { title: 'Mộc bản sách giáo khoa xưa', caption: 'Khắc ngược thủ công trên gỗ thị.', artType: 'woodblock-art' }
    ]
  },

  {
    id: 'tool-oil-lamp',
    code: 'ĐD-02',
    title: 'Bộ Đồ Dùng Lớp Học Bình Dân Học Vụ: Đèn Dầu, Bảng Đen & Thước Tre (1945)',
    subtitle: 'Dụng cụ giảng dạy xóa mù chữ những năm đầu độc lập',
    zoneId: 'room-tools',
    zoneName: 'Hành Lang Lời Bác Dạy & Bộ Đồ Dùng Dạy Học',
    era: 'Giai đoạn 1945 – 1954',
    material: 'Đồng thau, thủy tinh, bảng gỗ sơn đen, phấn vôi & tre vót',
    dimensions: 'Tủ kính 1,55m × 0,95m × 1,5m',
    position: { x: 6.5, y: 0, z: 17.5 },
    viewOffset: { x: 4.2, y: 2.3, z: 14.5 },
    lookAtOffset: { x: 6.5, y: 1.6, z: 17.5 },
    summary: 'Tập hợp chiếc đèn dầu đồng thắp sáng lớp học đêm, tấm bảng đen làm từ cánh cửa gỗ viết chữ “I – TỜ”, thước chỉ bảng bằng tre và cuốn sách “Vần Quốc Ngữ”.',
    story: `Khi chiến dịch Bình Dân Học Vụ bùng nổ mùa thu năm 1945, trong điều kiện thiếu thốn mọi bề, nhân dân và các thầy cô giáo đã sáng tạo ra những bộ đồ dùng dạy học bình dị mà hiệu quả lạ thường.

Chiếc đèn dầu đồng đặt trên bục cao vừa đủ soi sáng tấm bảng gỗ sơn bằng nhọ nồi trộn nhựa cây; phấn viết được nặn từ đất sét trắng và vôi cục phơi khô; còn chiếc loa sắt tây dùng để gọi bà con đến lớp học mỗi tối sau giờ đồng áng.`,
    quote: '“I, Tờ hai móc cả hai / I ngắn có chấm, Tờ dài có ngang...” — Câu vè Bình Dân Học Vụ (1945)',
    highlights: [
      'Đèn dầu đồng cổ thắp sáng các lớp học đêm tại chiến khu.',
      'Bảng gỗ nguyên bản ghi bài học vần "I – Tờ" bằng phấn vôi.',
      'Cuốn sách "Vần Quốc Ngữ" in trên giấy bản thô năm 1946.'
    ],
    videoData: {
      title: 'Phim tư liệu: Bộ đồ dùng dạy học Bình Dân Học Vụ',
      duration: '01:45',
      scenes: [
        { time: '00:00 - 00:35', heading: 'Ngọn đèn dầu diệt giặc dốt', caption: 'Soi sáng từng con chữ cho hàng triệu nông dân Việt Nam.', visualType: 'lamp' },
        { time: '00:35 - 01:10', heading: 'Bảng gỗ và phấn vôi tự chế', caption: 'Vật liệu giản đơn nhưng mang sức mạnh khai dân trí vĩ đại.', visualType: 'blackboard' },
        { time: '01:10 - 01:45', heading: 'Âm vang lớp học đêm', caption: 'Ký ức không quên của một thời kỳ lịch sử hào hùng.', visualType: 'torch' }
      ]
    },
    gallery: [
      { title: 'Đèn dầu & Sách Vần Quốc Ngữ', caption: 'Hiện vật lớp học Bình Dân Học Vụ năm 1946.', artType: 'oillamp-art' }
    ]
  },

  // --- HIỆN VẬT DANH DỰ TRUNG TÂM HÀNH LANG: BỨC THƯ BÁC HỒ GỬI CÁC EM HỌC SINH (THÁNG 9/1945) ---
  {
    id: 'art-uncle-ho-letter',
    code: 'BH-01',
    title: 'Thư Bác Hồ gửi các em học sinh nhân ngày khai trường đầu tiên của nước Việt Nam Dân chủ Cộng hòa (Tháng 9/1945)',
    subtitle: 'Lời căn dặn thiêng liêng: "Non sông Việt Nam có trở nên tươi đẹp hay không... chính là nhờ một phần lớn ở công học tập của các em"',
    zoneId: 'room-tools',
    zoneName: 'Hành Lang Lời Bác Dạy & Bộ Đồ Dùng Dạy Học',
    era: 'Tháng 9 năm 1945',
    imageFile: 'assets/documents/thu_bac_ho_khai_truong_1945.jpg',
    material: 'Bản chụp bút tích nguyên bản, tủ kính pha lê quang học, bệ đá hoa cương và đồng đúc mạ vàng',
    dimensions: 'Bệ trưng bày danh dự 1,8m × 1,2m × 1,65m',
    position: { x: 0, y: 0, z: 25.0 },
    viewOffset: { x: 0, y: 2.3, z: 29.0 },
    lookAtOffset: { x: 0, y: 1.6, z: 25.0 },
    summary: 'Bức thư lịch sử thiêng liêng của Chủ tịch Hồ Chí Minh gửi các em học sinh nhân ngày khai trường đầu tiên của nước Việt Nam Dân chủ Cộng hòa (Tháng 9/1945), mở ra kỷ nguyên độc lập và khẳng định sứ mệnh rạng danh non sông của thế hệ trẻ.',
    story: `Các em học sinh,

Ngày hôm nay là ngày khai trường đầu tiên ở Nước Việt Nam Dân chủ Cộng hòa. Tôi đã tưởng tượng thấy trước mắt cái cảnh nhộn nhịp tưng bừng của ngày tựu trường ở khắp các nơi.

Các em hết thảy đều vui vẻ vì sau mấy tháng giời nghỉ học, sau bao nhiêu cuộc chuyển biến khác thường, các em lại được gặp thầy gặp bạn.

Nhưng sung sướng hơn nữa, từ giờ phút này giở đi các em bắt đầu được nhận một nền giáo dục hoàn toàn Việt Nam.

Trước đây cha anh các em, và mới năm ngoái cả các em nữa, đã phải chịu nhận một nền học vấn nô lệ, nghĩa là nó chỉ đào tạo nên những kẻ làm tay sai, làm tôi tớ cho một bọn thực dân người Pháp.

Ngày nay các em được cái may mắn hơn cha anh là được hấp thụ một nền giáo dục của một nước độc lập, một nền giáo dục nó sẽ đào tạo các em nên những người công dân hữu ích cho nước Việt Nam, một nền giáo dục làm phát triển hoàn toàn những năng lực sẵn có của các em.

Các em được hưởng sự may mắn đó là nhờ sự hy sinh của biết bao nhiêu đồng bào các em. Vậy các em nghĩ sao? Các em phải làm thế nào để đền bù lại công lao của người khác đã không tiếc thân và tiếc của để chiếm lại nền độc lập cho nước nhà.

Các em hãy nghe lời tôi, lời của một người anh lớn lúc nào cũng ân cần mong mỏi cho các em được giỏi giang.

Trong năm học tới đây, các em hãy cố gắng, siêng năng học tập, ngoan ngoãn, nghe thầy, yêu bạn.

Sau 80 năm giời nô lệ làm cho nước nhà bị yếu hèn, ngày nay chúng ta cần phải xây dựng lại cơ đồ mà tổ tiên đã để lại cho chúng ta, làm sao cho chúng ta theo kịp các nước khác trên hoàn cầu.

Trong công cuộc kiến thiết đó, nước nhà trông mong chờ đợi ở các em rất nhiều.

Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em.

Ðối riêng với các em lớn, tôi khuyên thêm một điều này: chúng ta đã đánh đuổi bọn thực dân, chúng ta đã giành được độc lập. Nhưng giặc Pháp còn lăm le quay lại. Chúng ỷ vào kẻ khác mạnh hơn mà gây sự với ta.

Tất nhiên chúng sẽ bị bại, vì tất cả quốc dân ta đoàn kết chặt chẽ và một lòng chiến đấu cho giang sơn Tổ quốc. Phải sẵn sàng mà chống quân giặc cướp nước, đấy là bổn phận của mỗi công dân.

Các em lớn chưa hẳn đến tuổi phải gánh công việc nặng nhọc ấy, nhưng các em cũng nên, ngoài giờ học ở trường, tham gia vào các Hội cứu quốc để tập luyện thêm cho quen với đời sống chiến sĩ và để giúp đỡ một vài việc nhẹ nhàng trong cuộc phòng thủ đất nước.

Tôi đã thành thực khuyên nhủ các em. Mong rằng những lời của tôi được các em luôn luôn ghi nhớ.

Ngày hôm nay, nhân buổi tựu trường của các em, tôi chỉ biết chúc các em một năm đầy vui vẻ và đầy kết quả tốt đẹp.

Chào các em thân yêu!
HỒ CHÍ MINH`,
    quote: '“Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em.”',
    highlights: [
      'Bức thư lịch sử Bác Hồ gửi ngày khai trường đầu tiên của nước Việt Nam Dân chủ Cộng hòa (Tháng 9/1945).',
      'Lời căn dặn bất hủ: "Non sông Việt Nam có trở nên tươi đẹp hay không... chính là nhờ một phần lớn ở công học tập của các em".',
      'Định hình nền giáo dục mới hoàn toàn Việt Nam – giáo dục của một nước độc lập, tự do.',
      'Khơi dậy tinh thần tự hào, ý thức trách nhiệm và khát vọng kiến thiết non sông sánh vai các cường quốc năm châu.'
    ],
    videoData: {
      title: 'Phim tư liệu: Bác Hồ với sự nghiệp Trồng người',
      duration: '02:15',
      scenes: [
        { time: '00:00 - 00:45', heading: 'Thư gửi ngày khai trường đầu tiên (1945)', caption: 'Khát vọng sánh vai các cường quốc năm châu của dân tộc.', visualType: 'letter' },
        { time: '00:45 - 01:30', heading: 'Vì lợi ích trăm năm trồng người (1958)', caption: 'Triết lý giáo dục nền tảng cho sự phát triển quốc gia.', visualType: 'mural' },
        { time: '01:30 - 02:15', heading: 'Bức thư cuối cùng 15/10/1968', caption: 'Phong trào thi đua Dạy tốt - Học tốt trong mưa bom bão đạn.', visualType: 'document' }
      ]
    },
    gallery: [
      { title: 'Bản chụp bút tích bức thư 15/10/1968', caption: 'Bút tích và chữ ký thiêng liêng của Chủ tịch Hồ Chí Minh.', artType: 'uncle-ho-letter' },
      { title: 'Bác Hồ với các cháu học sinh', caption: 'Tình yêu thương bao la của Bác dành cho thế hệ tương lai.', artType: 'uncle-ho-students' }
    ]
  },

  {
    id: 'tool-wartime-set',
    code: 'ĐD-03',
    title: 'Bộ Hiện Vật Trường Học Thời Chiến: Kẻng Vỏ Bom, Mũ Rơm, Cặp Da & Giáo Án Trường Sơn',
    subtitle: 'Dụng cụ trường lớp dưới hầm chữ A và trên đường Trường Sơn (1965 – 1975)',
    zoneId: 'room-tools',
    zoneName: 'Hành Lang Lời Bác Dạy & Bộ Đồ Dùng Dạy Học',
    era: 'Giai đoạn 1965 – 1975',
    material: 'Thép vỏ bom tháo ngòi, rơm lúa nếp bện tay, da thuộc & giấy pơ-luya',
    dimensions: 'Bệ trưng bày 1,75m × 1,2m × 1,85m',
    position: { x: -6.5, y: 0, z: 32.5 },
    viewOffset: { x: -4.0, y: 2.3, z: 28.5 },
    lookAtOffset: { x: -6.5, y: 1.7, z: 32.5 },
    summary: 'Gồm chiếc kẻng báo giờ học chế từ vỏ bom Mỹ, chiếc mũ rơm học trò chống mảnh đạn, chiếc cặp da, mũ cối và tập giáo án viết tay bọc nilon vượt Trường Sơn.',
    story: `Tổ hợp hiện vật tái hiện sinh động hành trang của thầy và trò Việt Nam trong những năm tháng chống Mỹ cứu nước. Chiếc kẻng trường làm từ vỏ bom treo trên giá gỗ vừa báo giờ lên lớp, vừa báo động phòng không tại tuyến lửa Vĩnh Linh.

Bên cạnh là chiếc mũ rơm dày dặn do chính tay cha mẹ và thầy cô bện cho học sinh đội đến trường, cùng chiếc cặp da, mũ cối và cây bút máy chế từ vỏ đạn đồng của các nhà giáo vượt Trường Sơn đi mở trường vùng giải phóng.`,
    quote: '“Tiếng kẻng vỏ bom ngân lên giữa hầm chữ A là âm thanh bất khuất của tri thức Việt Nam.”',
    highlights: [
      'Kẻng trường làm từ vỏ bom tháo ngòi nổ treo trên khung gỗ Lim.',
      'Mũ rơm học trò kèm túi bông băng chữ thập đỏ.',
      'Cặp da, mũ cối và tập giáo án chép tay trên giấy pơ-luya.'
    ],
    videoData: {
      title: 'Phim tư liệu: Kỷ vật trường học thời lửa đạn',
      duration: '01:50',
      scenes: [
        { time: '00:00 - 00:38', heading: 'Tiếng kẻng từ vỏ bom', caption: 'Biến sắt thép chiến tranh thành tiếng chuông gọi học trò vào lớp.', visualType: 'bombbell' },
        { time: '00:38 - 01:15', heading: 'Chiếc mũ rơm huyền thoại', caption: 'Che chở tuổi thơ Việt Nam trên đường tới trường.', visualType: 'strawhat' },
        { time: '01:15 - 01:50', heading: 'Giáo án vượt Trường Sơn', caption: 'Hành trang thiêng liêng của những người thầy chiến sĩ.', visualType: 'satchel' }
      ]
    },
    gallery: [
      { title: 'Kẻng vỏ bom & Mũ rơm học trò', caption: 'Hiện vật gốc tại các trường học tuyến lửa Khu 4.', artType: 'bombdrum-art' },
      { title: 'Cặp da & Giáo án vượt Trường Sơn', caption: 'Kỷ vật của các nhà giáo chi viện miền Nam.', artType: 'satchel-art' }
    ]
  },

  {
    id: 'tool-teaching-instruments',
    code: 'ĐD-04',
    title: 'Bộ Giáo Cụ Tự Làm: Thước Ê-ke, Compa Gỗ, Bàn Tính Gảy & Bút Mực Tím Cửu Long',
    subtitle: 'Bộ đồ dùng dạy học kinh điển trên bục giảng Việt Nam (1975 – 2000)',
    zoneId: 'room-tools',
    zoneName: 'Hành Lang Lời Bác Dạy & Bộ Đồ Dùng Dạy Học',
    era: 'Thập niên 1975 – 2000',
    material: 'Gỗ thông, đồng, thủy tinh, mực tím Cửu Long & phấn trắng',
    dimensions: 'Tủ kính 1,6m × 0,95m × 1,55m',
    position: { x: -6.5, y: 0, z: 25.0 },
    viewOffset: { x: -4.0, y: 2.3, z: 21.0 },
    lookAtOffset: { x: -6.5, y: 1.6, z: 25.0 },
    summary: 'Trưng bày bộ thước thẳng 1m, thước ê-ke gỗ, compa gỗ kẹp phấn trắng, bàn tính gảy 13 cột bằng gỗ, hộp phấn trắng, bút máy Trường Sơn và lọ mực tím Cửu Long.',
    story: `Bất kỳ ai từng đi qua tuổi học trò Việt Nam những thập niên 1970–2000 đều bồi hồi xúc động khi nhìn thấy bộ đồ dùng dạy học thân thuộc này: chiếc thước kẻ gỗ dài 1 mét, chiếc ê-ke tam giác và chiếc compa gỗ có khớp đồng kẹp viên phấn trắng để thầy vẽ những đường tròn hoàn hảo trên bảng đen.

Cùng với đó là chiếc bàn tính gỗ 13 cột lách cách trên tay cô giáo dạy Toán, cây bút máy Trường Sơn, bút Kim Tinh và lọ mực tím Cửu Long đã in đậm vào ký ức bao thế hệ học trò.`,
    quote: '“Khi thầy viết bảng, bụi phấn rơi rơi / Có hạt bụi nào rơi trên bục giảng, có hạt bụi nào vương trên tóc thầy...”',
    highlights: [
      'Bộ thước gỗ, ê-ke và compa bảng đen do giáo viên tự đóng thủ công.',
      'Bàn tính gảy 13 cột bằng gỗ nhẵn bóng theo thời gian.',
      'Lọ mực tím Cửu Long, bút máy Trường Sơn, hộp phấn trắng và sổ lưu bút ép hoa phượng.'
    ],
    videoData: {
      title: 'Phim chuyên đề: Bộ đồ dùng dạy học và Ký ức Phấn trắng – Mực tím',
      duration: '01:45',
      scenes: [
        { time: '00:00 - 00:35', heading: 'Thước gỗ, Ê-ke và Compa bảng đen', caption: 'Những đường kẻ thẳng tắp và vòng tròn chuẩn xác từ đôi tay thầy.', visualType: 'compass' },
        { time: '00:35 - 01:10', heading: 'Bút máy Trường Sơn & Mực tím Cửu Long', caption: 'Nét chữ nắn nót đầu đời của bao thế hệ học sinh.', visualType: 'inkbottle' },
        { time: '01:10 - 01:45', heading: 'Lưu bút cánh phượng hồng', caption: 'Kỷ vật còn mãi với thời gian.', visualType: 'phoenix' }
      ]
    },
    gallery: [
      { title: 'Bộ thước ê-ke, compa gỗ & Bàn tính gảy', caption: 'Đồ dùng dạy học tiêu biểu thời bao cấp và đổi mới.', artType: 'tools-art' },
      { title: 'Bút máy Trường Sơn & Lọ mực tím Cửu Long', caption: 'Huyền thoại học đường Việt Nam.', artType: 'ink-pen-art' }
    ]
  },

  {
    id: 'tool-highland-bike',
    code: 'ĐD-05',
    title: 'Chiếc Xe Đạp Phượng Hoàng, Đèn Bão & Cặp Lồng Cơm Cô Giáo Vùng Cao',
    subtitle: 'Hành trang "Cõng chữ lên non" nơi biên cương, hải đảo',
    zoneId: 'room-tools',
    zoneName: 'Hành Lang Lời Bác Dạy & Bộ Đồ Dùng Dạy Học',
    era: 'Giai đoạn 1976 – 2010',
    material: 'Khung thép sơn xanh, da thuộc, nhôm gò & đèn bão thủy tinh',
    dimensions: 'Dài 1,85m × Cao 1,35m',
    position: { x: 6.5, y: 0, z: 25.0 },
    viewOffset: { x: 4.0, y: 2.3, z: 21.0 },
    lookAtOffset: { x: 6.5, y: 1.5, z: 25.0 },
    summary: 'Chiếc xe đạp Phượng Hoàng chở chồng sách giáo khoa, chiếc đèn bão đi rừng và cặp lồng cơm của cô giáo cắm bản vùng cao suốt hơn hai thập kỷ.',
    story: `Trong khu trưng bày Bộ đồ dùng và Kỷ vật nhà giáo, chiếc xe đạp Phượng Hoàng cũ kỹ cùng chiếc đèn bão và cặp lồng nhôm hai ngăn là minh chứng sống động cho sự hy sinh thầm lặng của hàng vạn giáo viên cắm bản vùng cao, biên giới và hải đảo.

Trên gác-ba-ga xe luôn buộc chặt chồng sách giáo khoa, hộp phấn và túi gạo ngô để chia sẻ bữa cơm trưa cùng các em học sinh nghèo nơi điểm trường xa xôi.`,
    quote: '“Đường lên bản xa mấy dốc đèo / Vì đàn em nhỏ, bước chân thầy chẳng ngại sương gieo.”',
    highlights: [
      'Xe đạp Phượng Hoàng nguyên bản gắn bó với cô giáo vùng cao Hà Giang.',
      'Chồng sách giáo khoa bọc nilon và cặp lồng nhôm hai ngăn.',
      'Chiếc đèn bão thắp dầu hỏa dùng để soạn giáo án đêm nơi điểm trường chưa có điện.'
    ],
    videoData: {
      title: 'Phim tài liệu: Hành trang người thầy nơi đỉnh núi mù sương',
      duration: '01:50',
      scenes: [
        { time: '00:00 - 00:38', heading: 'Chiếc xe đạp trên dốc đá vùng cao', caption: 'Vượt qua bao con suối, đèo cao mang con chữ tới bản làng.', visualType: 'bicycle' },
        { time: '00:38 - 01:15', heading: 'Ánh đèn bão soạn bài trong đêm lạnh', caption: 'Sự tận tụy thầm lặng nơi biên cương Tổ quốc.', visualType: 'lamp' },
        { time: '01:15 - 01:50', heading: 'Trái ngọt nơi rẻo cao', caption: 'Chắp cánh ước mơ cho trẻ em các dân tộc thiểu số.', visualType: 'mountain' }
      ]
    },
    gallery: [
      { title: 'Xe đạp Phượng Hoàng & Cặp lồng nhôm', caption: 'Kỷ vật của giáo viên cắm bản vùng cao.', artType: 'bicycle-art' }
    ]
  }
];

const INITIAL_TRIBUTES = [
  {
    sender: 'Nguyễn Minh Quân',
    senderName: 'Nguyễn Minh Quân',
    className: '12A1',
    school: 'THPT Chu Văn An',
    province: 'Hà Nội',
    teacher: 'Thầy Nguyễn Văn Hòa – Giáo Viên Toán',
    message: 'Cảm ơn thầy đã kiên nhẫn giảng lại cho chúng em từng bài toán khó và dạy chúng em bài học về lòng trung thực.',
    timestamp: '20/11/2025'
  },
  {
    sender: 'Lò Thị Mai',
    senderName: 'Lò Thị Mai',
    className: 'Y4B',
    school: 'Đại Học Y Hà Nội',
    province: 'Yên Bái',
    teacher: 'Cô Trần Thu Hà – Giáo Viên Điểm Trường Dế Xu Phình',
    message: 'Nếu ngày ấy cô không vượt mưa rừng đến nhà vận động bố mẹ cho em đi học tiếp, em đã không có ngày hôm nay. Em kính chúc cô luôn mạnh khỏe!',
    timestamp: '20/11/2025'
  },
  {
    sender: 'Phạm Hoàng Nam',
    senderName: 'Phạm Hoàng Nam',
    className: '11 Lý 1',
    school: 'THPT Chuyên Lê Hồng Phong',
    province: 'TP. Hồ Chí Minh',
    teacher: 'Thầy Lê Đình Tùng – Giáo Viên Vật Lý',
    message: 'Những thí nghiệm tự chế của thầy đã thắp lên trong em niềm đam mê khoa học. Chúng em mãi tự hào là học trò của thầy!',
    timestamp: '20/11/2025'
  },
  {
    sender: 'Trần Thanh Thảo',
    senderName: 'Trần Thanh Thảo',
    className: '12D2',
    school: 'THPT Nguyễn Thượng Hiền',
    province: 'TP. Hồ Chí Minh',
    teacher: 'Cô Nguyễn Thị Bích Liên – Giáo Viên Ngữ Văn',
    message: 'Mỗi lần nhìn cánh hoa phượng nở, em lại nhớ giọng đọc ấm áp của cô trên bục giảng năm nào.',
    timestamp: '20/11/2025'
  },
  {
    sender: 'Lê Gia Bảo',
    senderName: 'Lê Gia Bảo',
    className: '9A2',
    school: 'THCS Trưng Vương',
    province: 'Đà Nẵng',
    teacher: 'Các Thầy Cô Giáo Trường THCS Trưng Vương',
    message: 'Chúc các thầy cô luôn giữ mãi ngọn lửa nhiệt huyết trên hành trình gieo hạt tri thức!',
    timestamp: '20/11/2025'
  },
  {
    sender: 'Hoàng Ngọc Ánh',
    senderName: 'Hoàng Ngọc Ánh',
    className: 'K71A',
    school: 'ĐH Sư Phạm Hà Nội',
    province: 'Nghệ An',
    teacher: 'Thầy Cô Khoa Ngữ Văn',
    message: 'Em sẽ tiếp nối bước chân của thầy cô, mang con chữ và tình yêu thương đến với các em nhỏ vùng cao.',
    timestamp: '20/11/2025'
  },
  {
    sender: 'Đỗ Văn Thành',
    senderName: 'Đỗ Văn Thành',
    className: 'Cựu học sinh khóa 2012',
    school: 'THPT Chuyên Quốc Học Huế',
    province: 'Thừa Thiên Huế',
    teacher: 'Thầy Thân Trọng Khôi – Giáo Viên Lịch Sử',
    message: 'Từng trang sử hào hùng của dân tộc qua lời thầy giảng luôn là điểm tựa tinh thần vững vàng cho chúng em hôm nay.',
    timestamp: '20/11/2025'
  },
  {
    sender: 'Ngô Hải Yến',
    senderName: 'Ngô Hải Yến',
    className: 'Lớp 5A1',
    school: 'Tiểu Học Kim Đồng',
    province: 'Cần Thơ',
    teacher: 'Cô Nguyễn Mai Hương – Giáo Viên Chủ Nhiệm',
    message: 'Con chúc cô luôn vui tươi và hạnh phúc! Cảm ơn cô đã dạy con nắn nót từng nét chữ đầu đời.',
    timestamp: '20/11/2025'
  }
];

window.MUSEUM_ZONES = MUSEUM_ZONES;
window.EXTERIOR_ZONE = EXTERIOR_ZONE;
window.FIFTEEN_MINISTERS = FIFTEEN_MINISTERS;
window.FIFTEEN_EDUCATORS = FIFTEEN_EDUCATORS;
window.ARTIFACTS = ARTIFACTS;
window.INITIAL_TRIBUTES = INITIAL_TRIBUTES;
window.INITIAL_HEART_STORIES = [];

// Tự động gán alias chuẩn hóa tên file để không bao giờ bị lỗi 404 cho Bộ trưởng số 3 và các vị khác
if (typeof window !== 'undefined' && window.MINISTER_IMAGES) {
  if (window.MINISTER_IMAGES['Giáo sư Ca Văn Thỉnh..jpg']) {
    window.MINISTER_IMAGES['Giáo sư Ca Văn Thỉnh.jpg'] = window.MINISTER_IMAGES['Giáo sư Ca Văn Thỉnh..jpg'];
    window.MINISTER_IMAGES['assets/ministers/Giáo sư Ca Văn Thỉnh.jpg'] = window.MINISTER_IMAGES['Giáo sư Ca Văn Thỉnh..jpg'];
    window.MINISTER_IMAGES['GS. Ca Văn Thỉnh'] = window.MINISTER_IMAGES['Giáo sư Ca Văn Thỉnh..jpg'];
  }
}
