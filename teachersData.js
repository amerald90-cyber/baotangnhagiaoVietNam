// File: data/teachersData.js
// Dữ liệu trưng bày Gian phòng Nhà giáo Việt Nam qua các thời kỳ

// 1. BẢNG DẪN NHẬP CÁC CHUYÊN ĐỀ (Intro Wall Panels)
// ============================================================================
const themesData = {
  "khoi_nguon_dao_hoc": {
    id: "theme_01",
    code: "phong_kien",
    title: "KHƠI NGUỒN ĐẠO HỌC",
    subtitle: "Dấu ấn khởi dựng, phát triển giáo dục và khoa cử Nho học Đại Việt (Thế kỷ XI – XV)",
    wallColor: "#c89d3f", // Vàng hoàng gia / đồng cổ
    bannerImg: "assets/teachers/banner_khoi_nguon_dao_hoc.jpg", // (Ảnh phong cảnh Văn Miếu xưa hoặc mộc bản)
    introContent: `Trong quá trình xây dựng quốc gia độc lập, tự chủ, triều Lý từng bước quan tâm đến việc học, đào tạo và tuyển chọn người có tài phục vụ đất nước. Bên cạnh sự truyền dạy trong gia đình, nhà chùa và các lớp học tư, việc học dần được triều đình chăm lo thông qua những thiết chế và hoạt động cụ thể, gắn với yêu cầu xây dựng đất nước và tuyển lựa người có năng lực cho bộ máy nhà nước.

Dấu mốc nổi bật là năm 1070, vua Lý Thánh Tông cho dựng Văn Miếu tại kinh thành Thăng Long. Đây là nơi thờ Khổng Tử cùng các bậc tiêu biểu của Nho học, đồng thời là nơi Hoàng thái tử đến học. Việc khởi dựng Văn Miếu vừa mang ý nghĩa tôn vinh đạo học, vừa thể hiện sự quan tâm của triều đình đối với giáo dục người kế vị và chuẩn bị con người cho công cuộc trị nước.

Tiếp nối nền tảng ấy, dưới triều Lý Nhân Tông, khoa thi Nho học đầu tiên được tổ chức năm 1075 và Quốc Tử Giám được thành lập năm 1076. Qua thời Trần đến thời Lê sơ, hoạt động giáo dục, khoa cử tiếp tục phát triển. Việc mở rộng Quốc Tử Giám và khởi dựng bia Tiến sĩ dưới thời Lê Thánh Tông góp phần khuyến khích sự học, tôn vinh người tài và khẳng định vai trò của tri thức đối với sự hưng thịnh của quốc gia.

Gắn với tiến trình đó là cuộc đời, sự nghiệp và những đóng góp nổi bật của các vị vua, danh nhân có ảnh hưởng đến nền giáo dục nước nhà: vua Lý Thánh Tông, vua Lý Nhân Tông, vua Lê Thánh Tông, thầy giáo Chu Văn An cùng những nhân vật tiêu biểu như Nguyên phi Ỷ Lan, danh nhân khoa bảng Lê Văn Thịnh. Mỗi người mang một dấu ấn riêng, từ tổ chức, bảo trợ việc học đến trực tiếp giảng dạy, đào tạo nhân tài hoặc góp phần tạo nên môi trường chính trị, văn hóa của thời đại.

Qua những câu chuyện lịch sử ấy, “Khơi nguồn đạo học” làm nổi bật sự đóng góp của con người trong việc gây dựng nền học, vun đắp đạo nghĩa thầy trò và phát huy tinh thần trọng dụng hiền tài. Những giá trị được hình thành, tiếp nối qua nhiều thế hệ đã góp phần bồi đắp truyền thống hiếu học, tôn sư trọng đạo và khát vọng xây dựng đất nước bằng tri thức.`,
    milestones: [
      { year: "1070", event: "Vua Lý Thánh Tông khởi dựng Văn Miếu Thăng Long" },
      { year: "1075", event: "Vua Lý Nhân Tông mở khoa thi Nho học đầu tiên (Lê Văn Thịnh đỗ đầu)" },
      { year: "1076", event: "Thành lập Quốc Tử Giám – Trường đại học đầu tiên của Việt Nam" },
      { year: "1370", event: "Vạn thế sư biểu Chu Văn An qua đời, được vua ban thụy và cho tòng tự tại Văn Miếu" },
      { year: "1484", event: "Vua Lê Thánh Tông khởi dựng hệ thống Bia Tiến sĩ tại Văn Miếu Thăng Long" }
    ]
  },
  "cac_nha_giao_phong_kien": {
    id: "theme_02",
    code: "phong_kien",
    title: "CÁC NHÀ GIÁO THỜI KỲ PHONG KIẾN",
    subtitle: "Khuôn vàng thước ngọc – Tinh thần hiếu học và nhân cách nhà giáo Đại Việt (Thế kỷ XI – XIX)",
    wallColor: "#8b4513", // Tông nâu gỗ trầm / sepia cổ kính
    introContent: `Trải qua gần mười thế kỷ độc lập tự chủ dưới các triều đại phong kiến, bên cạnh hệ thống trường công lập của triều đình, nền giáo dục nước nhà được nuôi dưỡng và lan tỏa mạnh mẽ chính nhờ mạng lưới trường tư, trường làng và công lao của các bậc danh sư, thầy đồ trên khắp mọi miền đất nước.

Người thầy trong xã hội truyền thống giữ vị trí tôn nghiêm bậc nhất: 'Quân – Sư – Phụ', là biểu tượng của chuẩn mực đạo đức, khí tiết và tri thức. Dạy học thời kỳ này không đơn thuần là truyền thụ chữ nghĩa cử nghiệp để đi thi, mà trước hết là 'dạy đạo làm người', rèn giũa lòng trung quân ái quốc, tinh thần tự lập tự cường và tấm lòng vì dân vì nước.

Không gian trưng bày quy tụ 16 bậc danh sư tiêu biểu từ thế kỷ XI đến thế kỷ XIX: Từ bậc Quốc sư khai tâm vương triều như Thiền sư Vạn Hạnh; các nhà sử học, triết gia đại thụ như Lê Văn Hưu, Lương Đắc Bằng, Trạng Trình Nguyễn Bỉnh Khiêm; bậc nữ danh sư hiếm hoi như Hồng Hà nữ sĩ Đoàn Thị Điểm; nhà giáo dục bách khoa Lê Quý Đôn; đến những bậc thầy mở cõi phương Nam như Võ Trường Toản, Nguyễn Đình Chiểu và các danh sĩ Thăng Long, Nghệ An kiên trung cuối triều Nguyễn.

Mỗi nhà giáo là một tấm gương sáng ngời về đức độ, uyên bác và nhân cách thanh cao. Di sản của các thầy đã hun đúc nên truyền thống 'Tôn sư trọng đạo' – một đạo lý thiêng liêng, trường tồn cùng dòng chảy văn hóa dân tộc.`,
    milestones: [
      { period: "Thế kỷ XI – XIV", event: "Thiền sư Vạn Hạnh khai tâm vua Lý; Lê Văn Hưu đặt nền móng sử học Nho gia" },
      { period: "Thế kỷ XV – XVI", event: "Lương Đắc Bằng, Nguyễn Bỉnh Khiêm mở trường am Bạch Vân rèn đúc nhân tài" },
      { period: "Thế kỷ XVII – XVIII", event: "Đoàn Thị Điểm mở trường nữ học; Lê Quý Đôn, Lê Hữu Trác, Nguyễn Thiếp chấn hưng học thuật" },
      { period: "Thế kỷ XIX", event: "Võ Trường Toản, Nguyễn Đình Chiểu khai mở đất phương Nam; Nguyễn Văn Siêu, Cao Bá Quát, Nguyễn Khuyến giữ gìn khí tiết kẻ sĩ" }
    ]
  },
"cac_nha_giao_dau_the_ky_20_1945": {
  id: "theme_03",
  code: "dau_tk20_1945",
  title: "CÁC NHÀ GIÁO TỪ ĐẦU THẾ KỶ XX ĐẾN NĂM 1945",
  subtitle: "Chuyển mình giáo dục – Khơi mở dân trí, bồi đắp tinh thần yêu nước",
  wallColor: "#52796f", // Xanh trầm
  bannerImg: "assets/teachers/banner_dau_the_ky_20_1945.jpg",
  introContent: `Bước vào thế kỷ XX, giáo dục Việt Nam đứng trước những chuyển biến sâu sắc trong hoàn cảnh đất nước chịu sự thống trị của thực dân Pháp. Nền học và khoa cử Nho học từng bước khép lại, hệ thống trường học Pháp – Việt mở rộng, chữ Quốc ngữ ngày càng được sử dụng trong sách báo và hoạt động giáo dục. Giữa những biến động ấy, nhiều nhà giáo, trí thức đã tìm kiếm con đường nâng cao dân trí, đổi mới việc học và nuôi dưỡng ý thức dân tộc.

Từ những lớp học của các nhà nho yêu nước đến các trường học theo tinh thần duy tân, việc dạy học dần gắn với yêu cầu tiếp cận tri thức mới và giải quyết những vấn đề của xã hội. Đông Kinh Nghĩa Thục năm 1907 là một dấu ấn tiêu biểu: cổ vũ thực học, phổ biến chữ Quốc ngữ, tổ chức diễn thuyết và biên soạn tài liệu nhằm mở mang hiểu biết cho người dân. Người thầy không chỉ truyền dạy chữ nghĩa mà còn góp phần đánh thức trách nhiệm đối với cộng đồng và đất nước.

Cùng với sự chuyển đổi của nhà trường, hoạt động biên soạn sách giáo khoa, nghiên cứu văn học, lịch sử và xây dựng thuật ngữ khoa học bằng tiếng Việt có những đóng góp đáng chú ý. Phong trào truyền bá Quốc ngữ tiếp tục mở rộng cơ hội học chữ cho người dân, cho thấy giáo dục có thể vượt ra ngoài khuôn viên trường học để trở thành một hoạt động xã hội rộng lớn.

Không gian trưng bày giới thiệu những nhà giáo có hành trình và đóng góp khác nhau: Nguyễn Thức Tự, Lương Văn Can, Nguyễn Quyền, Trần Quý Cáp, Nguyễn Tất Thành – Hồ Chí Minh, Trần Trọng Kim, Nguyễn Văn Ngọc, Dương Quảng Hàm, Hoàng Xuân Hãn và Võ Nguyên Giáp. Từ lớp học truyền thống đến trường học mới, từ giảng dạy đến biên soạn và vận động xã hội, mỗi người góp một dấu ấn vào quá trình chuyển mình của giáo dục Việt Nam.

Những câu chuyện ấy làm nổi bật vai trò của người thầy trong việc gìn giữ bản sắc văn hóa, mở mang tri thức và bồi dưỡng tinh thần yêu nước. Đây cũng là chặng đường cho thấy sự tiếp nối giữa truyền thống hiếu học với những tìm tòi nhằm xây dựng một nền giáo dục phù hợp hơn với yêu cầu của thời đại.`,
  milestones: [
    {
      year: "1907",
      event: "Đông Kinh Nghĩa Thục hoạt động tại Hà Nội, cổ vũ thực học và phổ biến chữ Quốc ngữ"
    },
    {
      year: "1919",
      event: "Khoa thi Nho học cuối cùng dưới triều Nguyễn được tổ chức tại Huế"
    },
    {
      year: "1938",
      event: "Hội Truyền bá Quốc ngữ được thành lập tại Hà Nội, vận động mở rộng việc dạy và học chữ Quốc ngữ"
    },
    {
      year: "1945",
      event: "Cách mạng Tháng Tám mở ra chặng đường xây dựng nền giáo dục của nước Việt Nam độc lập"
    }
  ]
},

"cac_nha_giao_1945_1975": {
  id: "theme_04",
  code: "khang_chien_1945_1975",
  title: "CÁC NHÀ GIÁO GIAI ĐOẠN 1945–1975",
  subtitle: "Giữ vững mạch học trong chiến tranh – Đào tạo con người cho kháng chiến và kiến quốc",
  wallColor: "#6b705c", // Xanh ô liu trầm
  bannerImg: "assets/teachers/banner_khang_chien_1945_1975.jpg",
  introContent: `Cách mạng Tháng Tám năm 1945 mở ra một chặng đường mới của giáo dục Việt Nam. Trong hoàn cảnh chính quyền cách mạng vừa thành lập, đất nước phải đối mặt với nhiều khó khăn, chống nạn mù chữ được xác định là một nhiệm vụ cấp bách. Phong trào Bình dân học vụ lan rộng, đưa việc học chữ đến với đông đảo nhân dân và khơi dậy tinh thần cùng nhau xây dựng nền học của nước Việt Nam độc lập.

Trong kháng chiến chống thực dân Pháp, nhiều trường học chuyển về nông thôn, vùng tự do và căn cứ kháng chiến. Thầy trò vừa học tập vừa lao động, khắc phục thiếu thốn về sách vở, phòng học và trang thiết bị. Việc đào tạo giáo viên, cán bộ khoa học, y tế và các ngành chuyên môn được duy trì, từng bước tạo dựng lực lượng phục vụ kháng chiến và chuẩn bị cho công cuộc xây dựng đất nước.

Từ năm 1954 đến năm 1975, trong hoàn cảnh đất nước bị chia cắt, giáo dục phát triển trong những điều kiện khác nhau giữa các vùng, miền. Ở miền Bắc, mạng lưới trường phổ thông, đại học và cơ sở nghiên cứu được mở rộng; khi chiến tranh phá hoại diễn ra, nhiều trường phải sơ tán nhưng vẫn duy trì giảng dạy. Tại các vùng căn cứ và vùng giải phóng ở miền Nam, hoạt động giáo dục tiếp tục được tổ chức trong điều kiện chiến tranh, gắn với nhu cầu học tập và đào tạo cán bộ tại chỗ.

Các hồ sơ trong phần này giới thiệu những người thầy tiêu biểu ở nhiều lĩnh vực: Hồ Đắc Di, Ngụy Như Kon Tum, Lê Văn Thiêm, Nguyễn Thúc Hào, Tôn Thất Tùng, Nguyễn Lân, Trần Văn Giàu, Lê Hải Châu, Đặng Văn Ngữ và Hoàng Tụy. Đóng góp của họ được thể hiện qua tổ chức trường lớp, giảng dạy, nghiên cứu khoa học, biên soạn tài liệu và dìu dắt những thế hệ tiếp nối.

Qua những cuộc đời ấy, không gian trưng bày làm nổi bật tinh thần trách nhiệm, khả năng sáng tạo và sự tận tụy của nhà giáo trong hoàn cảnh đặc biệt. Những lớp học được giữ vững, những công trình được hoàn thành và những thế hệ được đào tạo đã góp phần tạo nên nền tảng nhân lực, tri thức cho đất nước sau chiến tranh.`,
  milestones: [
    {
      year: "1945",
      event: "Chính phủ ban hành các sắc lệnh về Bình dân học vụ, phát động công cuộc chống nạn mù chữ"
    },
    {
      year: "1950",
      event: "Tiến hành cuộc cải cách giáo dục đầu tiên của nước Việt Nam Dân chủ Cộng hòa, xây dựng hệ phổ thông 9 năm"
    },
    {
      year: "1956",
      event: "Cải cách giáo dục ở miền Bắc, hình thành hệ thống giáo dục phổ thông 10 năm"
    },
    {
      period: "1965–1975",
      event: "Nhiều trường học ở miền Bắc tổ chức sơ tán; thầy trò duy trì dạy học trong điều kiện chiến tranh"
    },
    {
      year: "1975",
      event: "Chiến tranh kết thúc, mở ra yêu cầu khôi phục trường lớp và từng bước thống nhất hệ thống giáo dục cả nước"
    }
  ]
},

"giai_doan_1975_nay": {
  id: "theme_05",
  code: "hien_dai_1975_nay",
  title: "CÁC NHÀ GIÁO TỪ SAU NĂM 1975 ĐẾN NAY",
  subtitle: "Tiếp nối truyền thống – Đổi mới việc dạy, phát huy năng lực tự học và sáng tạo",
  wallColor: "#376b8c", // Xanh lam
  bannerImg: "assets/teachers/banner_hien_dai_1975_nay.jpg",
  introContent: `Sau năm 1975, giáo dục Việt Nam bước vào chặng đường khắc phục hậu quả chiến tranh, ổn định trường lớp và từng bước thống nhất hệ thống giáo dục trên phạm vi cả nước. Trong điều kiện kinh tế còn nhiều khó khăn, đội ngũ nhà giáo tiếp tục đảm nhận nhiệm vụ mở rộng cơ hội học tập, đào tạo nhân lực và bồi dưỡng những thế hệ tham gia xây dựng đất nước.

Công cuộc Đổi mới từ năm 1986 cùng quá trình hội nhập quốc tế đặt ra những yêu cầu mới đối với nhà trường. Bên cạnh việc mở rộng quy mô, giáo dục ngày càng chú trọng chất lượng, khả năng vận dụng kiến thức và sự phát triển của từng người học. Người thầy tiếp tục truyền dạy tri thức, đồng thời hướng dẫn phương pháp học tập, khuyến khích tư duy độc lập và giúp học sinh hình thành năng lực tự học.

Trong tiến trình ấy, nhiều nhà giáo đã bền bỉ nghiên cứu, thử nghiệm phương pháp, biên soạn học liệu và tham gia xây dựng trường học. Nguyễn Cảnh Toàn đề cao năng lực tự học và hoạt động tìm tòi khoa học; Hồ Ngọc Đại theo đuổi nghiên cứu Công nghệ giáo dục, chú trọng hoạt động học tập của trẻ em; Nguyễn Ngọc Ký đem đến bài học về nghị lực vượt khó qua cuộc đời dạy học và viết sách. Lê Trí Viễn và Hoàng Như Mai tiếp tục góp sức cho đào tạo, nghiên cứu và truyền cảm hứng văn chương đến nhiều thế hệ.

Năm hồ sơ được lựa chọn phản ánh những phương diện khác nhau của nghề dạy học: nghiên cứu khoa học, tổ chức hoạt động học, xây dựng học liệu, bồi dưỡng tâm hồn và nâng đỡ người học vượt qua trở ngại. Dù con đường riêng khác nhau, các thầy đều cho thấy giá trị của lao động sư phạm kiên trì và trách nhiệm đối với sự trưởng thành của học trò.

Phần trưng bày khép lại bằng một câu chuyện vẫn đang tiếp diễn: truyền thống hiếu học, tôn sư trọng đạo được tiếp nối trong môi trường giáo dục không ngừng thay đổi. Trước yêu cầu phát triển khoa học, công nghệ và hội nhập, lòng tận tâm, năng lực chuyên môn cùng tinh thần học hỏi của người thầy vẫn là những giá trị cần được gìn giữ và phát huy.`,
  milestones: [
    {
      period: "Sau năm 1975",
      event: "Khôi phục, ổn định trường lớp và từng bước thống nhất hệ thống giáo dục trên phạm vi cả nước"
    },
    {
      year: "1979",
      event: "Ban hành Nghị quyết số 14-NQ/TW về cải cách giáo dục, định hướng xây dựng hệ thống phổ thông 12 năm thống nhất"
    },
    {
      year: "1986",
      event: "Công cuộc Đổi mới mở ra những yêu cầu mới về đào tạo nhân lực và phát triển giáo dục"
    },
    {
      year: "2013",
      event: "Ban hành Nghị quyết số 29-NQ/TW về đổi mới căn bản, toàn diện giáo dục và đào tạo"
    },
    {
      year: "2018",
      event: "Ban hành Chương trình giáo dục phổ thông mới, định hướng phát triển phẩm chất và năng lực người học"
    }
  ]
  }
};

// 2. DANH SÁCH 46 NHÀ GIÁO TIÊU BIỂU QUA CÁC THỜI KỲ
const teachersData = [
{
    id: 1,
    name: "Vua Lý Thánh Tông",
    years: "1023 – 1072",
    period: "phong_kien",
    subTheme: "Khơi nguồn đạo học",
    title: "Vị quân vương khai sáng quốc hiệu Đại Việt & Khởi dựng Văn Miếu (1070)",
    img: "assets/teachers/pk_01_ly_thanh_tong.jpg",
    career: "Vua Lý Thánh Tông (tên húy Lý Nhật Tôn) là con trưởng của vua Lý Thái Tông. Năm 1028, ông được phong làm Đông cung Thái tử. Khi vua cha băng hà, ông lên nối ngôi báu, ở ngôi 17 năm (1054 – 1072). Ông là bậc quân vương sáng suốt, có tinh thần độc lập tự cường sâu sắc; ngay khi lên ngôi đã đặt quốc hiệu Đại Việt với khát vọng xây dựng quốc gia hùng cường, thịnh trị. Sử sách ca ngợi ông là vị vua khéo kế thừa, thực lòng thương dân, quý trọng nghề nông, khoan dung với kẻ bị hình phạt, hậu lễ dưỡng liêm, tôn sùng đạo học; đối nội văn sự thi hành mau chóng, đối ngoại uy vũ hiển hách (phía Nam bình Chiêm, phía Bắc đánh Tống).",
    reforms: "• Khởi dựng Văn Miếu Thăng Long (Năm 1070): Nhận rõ vai trò nền tảng của Nho giáo đối với việc củng cố thể chế và xây dựng một quốc gia độc lập tự chủ, mùa thu tháng 8/1070, vua cho xây dựng Văn Miếu. Sử thần Ngô Sĩ Liên ghi rõ trong Đại Việt sử ký toàn thư: 'Mùa thu tháng 8 dựng Văn Miếu, đắp tượng Khổng Tử, Chu công và Tứ phối, vẽ tượng Thất thập nhị hiền, bốn mùa cúng tế. Hoàng thái tử đến học ở đây'.\n• Gắn tôn vinh đạo học với giáo dục hoàng triều: Việc đưa Hoàng thái tử Lý Càn Đức vào học tại Văn Miếu đã xác lập hình mẫu bậc đế vương phải lấy học vấn và lễ nghĩa làm đầu, mở ra truyền thống hiếu học cho muôn đời sau.\n• Hòa hợp tôn giáo & Đẩy mạnh văn hóa: Với học vấn uyên thâm và am tường âm luật, ông chủ trương cởi mở văn hóa, kết hợp nhuần nhuyễn tinh hoa Phật giáo và Nho giáo, đào tạo nên một tầng lớp trí thức Đại Việt giàu lòng bác ái và tinh thần dân tộc.",
    legacy: "• Bậc hiền quân trọn vẹn đức tài, đặt nền móng thể chế văn hiến đầu tiên cho nước nhà. Ông mất năm 1072, hưởng thọ 50 tuổi.\n• Năm 2003, Nhà nước cho đúc tượng đồng vua Lý Thánh Tông (cao 1,4m, nặng chừng 1 tấn do các nghệ nhân làng Ngũ Xã, Hà Nội đúc), được phụng thờ tôn nghiêm tại tầng trên nhà Hậu đường khu Thái Học của Di tích Quốc gia đặc biệt Văn Miếu – Quốc Tử Giám.",
    source: "Đại Việt sử ký toàn thư; Khâm định Việt sử thông giám cương mục; Tư liệu Trung tâm HĐVHKH Văn Miếu – Quốc Tử Giám."
  },
{
    id: 2,
    name: "Vua Lý Nhân Tông",
    years: "1066 – 1128",
    period: "phong_kien",
    subTheme: "Khơi nguồn đạo học",
    title: "Vị vua khai mở nền khoa cử Nho học & Sáng lập Quốc Tử Giám",
    img: "assets/teachers/pk_02_ly_nhan_tong.jpg",
    career: "Vua Lý Nhân Tông (tên húy Lý Càn Đức) là con trưởng của vua Lý Thánh Tông và Linh Nhân Hoàng thái hậu (tức Nguyên phi Ỷ Lan), ở ngôi 56 năm (1072 – 1128). Ông là vị hoàng đế sáng suốt, hiếu nhân, thông hiểu âm luật, tự chế ca nhạc, là bậc minh quân vĩ đại thời Lý. Bản thân ông mộ đạo Phật nhưng lại hết lòng chăm lo mở mang nền Nho học Việt Nam; và chính ông (khi còn là Hoàng thái tử) là người học trò đầu tiên vào học tập tại Văn Miếu ngay sau khi dựng năm 1070.",
    reforms: "• Khai mở nền khoa cử Nho học (Năm 1075): Sau khi lên ngôi được 3 năm, vua cho tổ chức khoa thi đầu tiên trong lịch sử khoa cử Việt Nam (khoa thi Minh kinh bác học và Nho học tam trường) để kén chọn nhân tài phụng sự xã tắc.\n• Sáng lập Quốc Tử Giám (Năm 1076): Cho xây dựng Quốc Tử Giám kề sau Văn Miếu với chiếu chỉ 'chọn quan viên văn chức, người nào biết chữ cho vào Quốc Tử Giám' – đặt mốc son khai sinh trường đại học đầu tiên của Việt Nam.\n• Đặt nền móng chế độ khoa cử: Hai sự kiện lịch sử 1075 và 1076 đã chính thức đặt cơ sở vững chắc cho sự ra đời và phát triển của chế độ giáo dục, khoa bảng Nho học suốt ngàn năm lịch sử.\n• Trị quốc an dân xuất chúng: Khiến các nước láng giềng (đặc biệt là nhà Tống) nể phục, nhân dân hết lòng yêu mến; đưa tinh thần đạo Phật nhập thế phục vụ đời sống xã hội; áp dụng nhiều biện pháp bảo vệ và phát triển nông nghiệp như đào kênh tưới tiêu, đắp đê chống lũ ở nhiều nơi.",
    legacy: "• Bậc hoàng đế trọn đức vẹn tài. Bác học Phan Huy Chú ca ngợi trong Lịch triều hiến chương loại chí: 'Bấy giờ nước lớn phải sợ, nước nhỏ kính mến, thần giúp người theo, dân thì đông giàu, mình thì thái bình, thực là một ông vua giỏi triều Lý'.\n• Năm 2003, Nhà nước cho đúc tượng đồng vua Lý Nhân Tông (cao 1,4m, nặng chừng 1 tấn do các nghệ nhân làng Ngũ Xã, Hà Nội đúc), được phụng thờ trang nghiêm tại tầng trên nhà Hậu đường khu Thái Học của Di tích Văn Miếu – Quốc Tử Giám.",
    source: "Đại Việt sử ký toàn thư; Phan Huy Chú, 'Lịch triều hiến chương loại chí'; Tư liệu Trung tâm HĐVHKH Văn Miếu – Quốc Tử Giám."
  },
{
    id: 3,
    name: "Thái sư Lê Văn Thịnh",
    years: "Khoảng 1050 – 1096",
    period: "phong_kien",
    subTheme: "Khơi nguồn đạo học",
    title: "Người đỗ đầu khoa thi năm 1075 & Thầy giáo dạy vua",
    img: "assets/teachers/pk_03_le_van_thinh.jpg",
    career: "Thái sư Lê Văn Thịnh quê tại làng Đông Cứu, huyện Gia Định (nay thuộc xã Đông Cứu, thị xã Thuận Thành/huyện Gia Bình, tỉnh Bắc Ninh). Ông nổi tiếng thông tuệ, học rộng tài cao, xuất thân trong giai đoạn Nho học bắt đầu bén rễ tại Đại Việt. Sau khi đỗ đầu khoa thi đầu tiên của triều Lý, ông được triều đình tuyển vào cung làm thị giảng cho vua Lý Nhân Tông, sau thăng dần lên Thị lang Bộ Binh, Binh bộ Thượng thư và giữ chức vị cao nhất triều đình: Thái sư đầu triều vào năm 1085.",
    reforms: "• Khai khoa bảng vàng nước nhà (Năm 1075): Đỗ đầu khoa thi Minh kinh bác học và Nho học tam trường – kỳ thi Nho học chính quy đầu tiên trong lịch sử dân tộc, mở đầu cho truyền thống hiếu học và khoa bảng vẻ vang của đất học Kinh Bắc nói riêng và Đại Việt nói chung.\n• Bậc thầy thị giảng của hoàng gia: Đảm nhiệm trọng trách trực tiếp dạy dỗ, giảng giải kinh điển, sử học và đạo lý trị quốc an dân cho vua trẻ Lý Nhân Tông, góp phần hun đúc nên một trong những vị vua anh minh nhất lịch sử.\n• Đỉnh cao tri thức phụng sự đất nước (Năm 1084): Bằng tài năng văn học và lý lẽ ngoại giao đanh thép tại trại Vĩnh Bình, ông đã buộc triều đình nhà Tống phải trả lại cho Đại Việt toàn bộ đất 6 huyện 3 động vùng biên giới (nay thuộc Cao Bằng).",
    legacy: "Biểu tượng mẫu mực cho sự gắn kết giữa 'Học tập - Tuyển chọn - Phụng sự giang sơn'. Ông là minh chứng sống động của thời kỳ đầu đạo học: Kẻ sĩ bước ra từ trường thi không chỉ là thầy giáo mà còn đem tri thức bảo vệ bờ cõi và phẩm giá quốc gia.",
    source: "Bảo tàng Lịch sử Quốc gia (baotanglichsu.vn); Bùi Minh Hiền, 'Lịch sử giáo dục Việt Nam', tr. 25; Đại Việt sử ký toàn thư."
  },
{
    id: 4,
    name: "Vạn thế sư biểu Chu Văn An",
    years: "1292 – 1370",
    period: "phong_kien",
    subTheme: "Khơi nguồn đạo học",
    title: "Vạn thế sư biểu – Nhà giáo dục tiêu biểu được UNESCO vinh danh",
    img: "assets/teachers/pk_04_chu_van_an.jpg",
    career: "Thầy Chu Văn An (tên tự Linh Triệt, hiệu Tiều Ẩn, tước Văn Trinh công, thụy Khang Tiết) sinh năm 1292 tại làng Quang Liệt, huyện Thanh Đàm (nay thuộc xã Thanh Liệt, huyện Thanh Trì, Hà Nội). Từ nhỏ ông đã nổi tiếng cương trực, học vấn tinh thông, sửa mình giữ tiết tháo, không màng danh lợi. Đỗ Thái học sinh nhưng không ra làm quan, ông mở trường Huỳnh Cung tại quê nhà để dạy học. Dưới thời vua Trần Minh Tông (1314–1329), mến mộ tài đức, triều đình mời ông ra kinh thành giữ chức Tư nghiệp Quốc Tử Giám, trông nom sĩ tử, coi việc tế tự Văn Miếu và trực tiếp dạy dỗ hai Thái tử Trần Vượng (vua Trần Hiến Tông) và Trần Hạo (vua Trần Dụ Tông).",
    reforms: "• Đạo làm thầy nghiêm cẩn mẫu mực: Trường Huỳnh Cung đào tạo nên nhiều rường cột triều đình làm đến chức Nhập nội Hành khiển như Phạm Sư Mạnh, Lê Quát. Học trò dù ở cương vị Tể tướng hay Thượng thư khi về thăm thầy vẫn giữ đúng lễ, quỳ dưới giường nghe thầy chỉ bảo; kẻ nào bất lương làm quan nhũng lạm đều bị ông nghiêm khắc quát mắng đuổi ra không tiếp.\n• Tác giả giáo trình kinh điển ('Tứ thư thuyết ước'): Trong thời gian làm Tư nghiệp Quốc Tử Giám, ông trực tiếp biên soạn bộ sách 'Tứ thư thuyết ước' tóm tắt cốt lõi kinh điển Nho gia để làm tài liệu chuẩn mực dạy học cho môn sinh.\n• Khí phách 'Thất trảm sớ': Thời Trần Dụ Tông triều chính rối ren, quyền thần lộng hành, ông khảng khái dâng 'Thất trảm sớ' xin chém đầu 7 tên gian thần lộng quyền được vua sủng ái. Sớ không được trả lời, ông lập tức treo mũ áo từ quan về ở ẩn tại núi Phượng Hoàng (Kiệt Đặc, Chí Linh, Hải Dương), tiếp tục dạy học, bốc thuốc cứu dân cho đến khi qua đời năm Canh Tuất (1370), thọ 79 tuổi.",
    legacy: "• Được vua Trần Nghệ Tông ban thụy Khang Tiết, truy tặng tước Văn Trinh công và cho tòng tự tại Văn Miếu. Sử thần Ngô Sĩ Liên ca ngợi: 'Tiết tháo cao thượng thì thiên tử cũng không thể bắt làm tôi được... Đạo làm thầy được nghiêm, giọng nói lẫm liệt bọn nịnh hót phải sợ... Ông thực đáng được coi là ông tổ của các nhà Nho nước Việt ta'.\n• Năm 2003, Nhà nước cho đúc tượng đồng Danh sư Chu Văn An nặng khoảng 3 tấn, thờ trang trọng tại tầng 1 nhà Hậu đường khu Thái Học (Văn Miếu – Quốc Tử Giám).\n• Năm 2019, Đại hội đồng UNESCO chính thức thông qua Nghị quyết cùng Việt Nam kỷ niệm 650 năm ngày mất của ông (1370–2020), vinh danh Chu Văn An là Nhà giáo dục tiêu biểu của Việt Nam mang tầm vóc nhân loại.",
    source: "Đại Việt sử ký toàn thư; Trung tâm HĐVHKH Văn Miếu – Quốc Tử Giám; Nghị quyết Đại hội đồng UNESCO khóa 40 (2019)."
  },
{
    id: 5,
    name: "Nguyên phi Ỷ Lan (Linh Nhân Hoàng thái hậu)",
    years: "1044 – 1117",
    period: "phong_kien",
    subTheme: "Khơi nguồn đạo học",
    title: "Mẫu nghi thiên hạ – Người mẹ nuôi dưỡng vị vua lập Quốc Tử Giám",
    img: "assets/teachers/pk_05_y_lan.jpg",
    career: "Nguyên phi Ỷ Lan (Linh Nhân Hoàng thái hậu, tên thật Lê Thị Yến) quê tại hương Thổ Lỗi, sau đổi là Siêu Loại (nay thuộc xã Dương Xá, huyện Gia Lâm, Hà Nội). Bà là người phụ nữ có tài kinh bang tế thế kiệt xuất bậc nhất lịch sử phong kiến Việt Nam. Hai lần bà giữ quyền 'buông rèm nhiếp chính': Năm 1069 khi vua Lý Thánh Tông thân chinh đánh phương Nam (dân chúng ca ngợi bà là 'Quan Âm Nữ') và từ năm 1072 khi vua con Lý Nhân Tông lên ngôi lúc mới 7 tuổi.",
    reforms: "• Người mẹ dưỡng dục bậc minh quân: Trực tiếp nuôi dưỡng, rèn cặp nhân cách và việc học kinh sử cho Hoàng thái tử Lý Càn Đức từ thuở nhỏ; đồng hành cùng vua cha cho thái tử học tập tại Văn Miếu (1070), hun đúc nên vị hoàng đế hiếu học, sáng lập Quốc Tử Giám sau này.\n• Tạo dựng nền tảng thái bình để phát triển giáo dục: Cùng Thái sư Lý Đạo Thành và Thái úy Lý Thường Kiệt chấn chỉnh kỷ cương triều chính, thi hành chính sách khoan thư sức dân, ban hành lệnh cấm giết mổ trâu bò để bảo vệ nông nghiệp, chuộc con gái nhà nghèo gả cho người góa bụa, tạo nên xã hội ổn định thịnh vượng – điều kiện tiên quyết để triều đình mở khoa thi năm 1075.\n• Gắn kết tư tưởng Phật - Nho trong đời sống cung đình: Là người am hiểu sâu sắc Phật giáo và Nho học, bà đề cao đạo đức nhân từ và sự học, tạo dựng môi trường văn hóa cung đình chuẩn mực nâng đỡ cho các hoạt động đạo học buổi đầu.",
    legacy: "Được nhân dân suy tôn là 'Bà Tấm xứ Bắc' và được đưa vào không gian trưng bày 'Khơi nguồn đạo học' tại Văn Miếu – Quốc Tử Giám. Sự hiện diện của bà là biểu tượng tôn vinh trí tuệ phụ nữ Đại Việt và thiên chức người mẹ trong việc gieo hạt tri thức cho bậc đế vương lập nên nền khoa bảng nước nhà.",
    source: "Bảo tàng Lịch sử Quốc gia (baotanglichsu.vn); Đại Việt sử ký toàn thư; Tư liệu trưng bày 'Khơi nguồn đạo học' – Văn Miếu Quốc Tử Giám."
  },
{
    id: 6,
    name: "Vua Lê Thánh Tông",
    years: "1442 – 1497",
    period: "phong_kien",
    subTheme: "Kỷ nguyên vàng khoa cử Đại Việt",
    title: "Bậc minh quân kiệt xuất – Người khởi lập Bia Tiến sĩ Văn Miếu (1484)",
    img: "assets/teachers/pk_06_le_thanh_tong.jpg",
    career: "Vua Lê Thánh Tông (tên húy Lê Tư Thành, tên khác là Hạo, hiệu Thiên Nam động chủ) lên ngôi năm 1460 khi mới 18 tuổi, ở ngôi 38 năm với hai niên hiệu Quang Thuận và Hồng Đức. Ông là vị hoàng đế anh minh quyết đoán, văn võ kiêm toàn, tài lược phi thường. Dưới triều đại của ông, quốc gia Đại Việt đạt đến sự phát triển hoàng kim rực rỡ nhất về kinh tế, quân sự, luật pháp và đặc biệt là văn hóa – giáo dục; để lại các di sản đồ sộ như Luật Hồng Đức, Hồng Đức bản đồ, Đại Việt sử ký toàn thư và hội xướng họa Tao Đàn nhị thập bát tú.",
    reforms: "• Định lệ khoa cử hoàng kim: Quy định chặt chẽ thể lệ thi cử 'tam niên nhất khoa' (3 năm mở một kỳ thi), tổ chức thành công 12 khoa thi Hội và tuyển chọn được 502 vị Tiến sĩ tài năng phụng sự đất nước.\n• Mở rộng Quốc Tử Giám & Khởi dựng Bia Tiến sĩ (Năm 1484): Cho trùng tu Văn Miếu, mở rộng quy mô Quốc Tử Giám năm 1483. Đặc biệt năm 1484, nhà vua quyết định cho dựng những tấm bia đá khắc tên Tiến sĩ đầu tiên tại Văn Miếu (từ khoa thi 1442) để biểu dương hiền tài, khuyên răn kẻ sĩ và khuyến khích muôn dân hiếu học.\n• Chế độ vinh danh kẻ sĩ mẫu mực: Đặt ra các điển lệ trang trọng bậc nhất để tôn vinh trí thức: Lễ xướng danh bảng vàng, ban mũ áo cân đai, đãi yến tiệc hoàng cung và cho ngựa quý đưa rước Tiến sĩ 'Vinh quy bái tổ' về làng.\n• Khí phách kiên trung giữ vững bờ cõi: Luôn gắn tri thức với lòng yêu nước sâu sắc, căn dặn triều thần: 'Một thước núi, một tấc sông của ta, lẽ nào lại đem vứt bỏ... nếu đem một thước núi, một tấc sông làm mồi cho giặc, thì tội phải tru di'.",
    legacy: "• Người kiến tạo nên kỷ nguyên thịnh đạt nhất của văn hiến Đại Việt; xác lập chân lý bất hủ 'Hiền tài là nguyên khí quốc gia'. Hệ thống bia đá Tiến sĩ do ông khởi lập đã được UNESCO vinh danh là Di sản tư liệu thế giới.\n• Năm 2003, Nhà nước cho đúc tượng đồng vua Lê Thánh Tông (cao 1,4m, nặng chừng 1 tấn do các nghệ nhân làng Ngũ Xã đúc), phụng thờ trang nghiêm cùng vua Lý Thánh Tông và Lý Nhân Tông tại tầng trên nhà Hậu đường khu Thái Học của Di tích Văn Miếu – Quốc Tử Giám.",
    source: "Đại Việt sử ký toàn thư; Khâm định Việt sử thông giám cương mục; Tư liệu Trung tâm HĐVHKH Văn Miếu – Quốc Tử Giám."
  },
{
    id: 7,
    name: "Bảng nhãn Lê Văn Hưu",
    years: "1230 – 1322",
    period: "phong_kien",
    subTheme: "Các nhà giáo thời phong kiến",
    title: "Nhà giáo tài đức – Thầy dạy Chiêu Minh Vương & Ông tổ ngành Sử học Việt Nam",
    img: "assets/teachers/pk_07_le_van_huu.jpg",
    career: "Bảng nhãn Lê Văn Hưu quê tại làng Thần Hậu, huyện Đông Sơn (nay thuộc làng Kẻ Rỵ, xã Thiệu Trung, huyện Thiệu Hóa, tỉnh Thanh Hóa). Từ thuở nhỏ ông đã nổi tiếng thần đồng với chí khí hiếu học 'viết lúi húi giành lấy khôi nguyên'. Năm Đinh Mùi (1247) dưới triều vua Trần Thái Tông, ông thi đỗ Bảng nhãn khi mới 17 tuổi trong khoa thi đầu tiên lịch sử đặt ra danh hiệu Tam khôi. Ông là bậc đại thần tài đức vẹn toàn, trải qua các chức vụ: Kiểm pháp quan, Binh bộ Thượng thư, Hàn lâm viện Học sĩ kiêm Quốc sử viện Giám tu, thọ 92 tuổi.",
    reforms: "• Bậc danh sư rèn đúc bậc tướng tài hoàng tộc: Sử gia Lê Tắc trong 'An Nam chí lược' ca tụng: 'Lê Văn Hưu vừa có tài, vừa có hạnh, làm thầy của Chiêu Minh Vương'. Ông trực tiếp dạy dỗ Thái sư Chiêu Minh Đại vương Trần Quang Khải – nhân vật rường cột lãnh đạo cuộc kháng chiến chống Mông - Nguyên thắng lợi và là nhà thơ lớn thời Trần.\n• Biên soạn bộ Quốc sử đầu tiên của dân tộc (Đại Việt sử ký 1272): Vâng mệnh vua Trần Thái Tông và Trần Thánh Tông, ông đã hoàn thành bộ 'Đại Việt sử ký' gồm 30 quyển, ghi lại gần 15 thế kỷ lịch sử từ Triệu Vũ Đế đến Lý Chiêu Hoàng. Đây là bộ quốc sử chính thức đầu tiên của nước nhà, đặt nền móng phương pháp luận khoa học và tinh thần dân tộc tự chủ cho nền sử học Việt Nam.\n• Tấm gương giáo dục bằng sử học: 29 lời bình sắc sảo của ông ('Lê Văn Hưu viết...') được Ngô Sĩ Liên trích dẫn trang trọng trong Đại Việt sử ký toàn thư, trở thành những bài học kinh điển dạy về đạo trị quốc, lòng yêu nước và rèn luyện đạo đức kẻ sĩ.",
    legacy: "Được hậu thế tôn vinh là Ông tổ của ngành Sử học Việt Nam. Quần thể lăng mộ và đền thờ của ông hiện tọa lạc tại xã Thiệu Trung, huyện Thiệu Hóa, tỉnh Thanh Hóa với tấm bia cổ thời Tự Đức (1867) ca ngợi trọn đời tài đức và công trạng vẻ vang với non sông.",
    source: "Đại Việt sử ký toàn thư; An Nam chí lược (Lê Tắc); Trần Trọng Kim, 'Việt Nam sử lược'; Tư liệu Di tích lịch sử Đền thờ Lê Văn Hưu (Thanh Hóa)."
  },
{
  id: 8,
  name: "Bảng nhãn Lương Đắc Bằng",
  years: "Thế kỷ XV – XVI",
  period: "phong_kien",
  subTheme: "Các nhà giáo thời phong kiến",
  title: "Người thầy mẫu mực của Nguyễn Bỉnh Khiêm – Tác giả Trị bình thập tứ sách",
  img: "assets/teachers/pk_08_luong_dac_bang.jpg",
  career: "Lương Đắc Bằng, tên ban đầu là Lương Ngạn Ích, tên chữ là Tử Lăng, quê làng Hội Triều, còn gọi là Hội Trào, thuộc vùng Hoằng Hóa, Thanh Hóa. Ông sinh trưởng trong gia đình có truyền thống học hành; thân phụ là Lương Hay, thân mẫu là Lê Thị Sử. Từ nhỏ, ông nổi tiếng thông minh, ham học và được gia đình chăm lo việc học tập. Năm Kỷ Mùi (1499), niên hiệu Cảnh Thống thứ 2, dưới triều vua Lê Hiến Tông, ông đỗ Bảng nhãn. Theo nghiên cứu trên Tạp chí Hán Nôm, sau khi đỗ đạt, ông được nhà vua khen ngợi văn tài và ban tên Lương Đắc Bằng. Ông từng giữ chức Thị độc, sau thăng Lại bộ Tả thị lang. Trong bối cảnh triều chính cuối thời Lê sơ nhiều biến động, ông được biết đến là vị quan thanh liêm, cương trực, dám lên tiếng trước những việc làm tổn hại đến đất nước và đời sống nhân dân. Năm 1509, ông tham gia ủng hộ Giản Tu công Lê Oanh chống Lê Uy Mục. Khi Lê Oanh lên ngôi, tức vua Lê Tương Dực, ông tiếp tục đề xuất việc chấn chỉnh triều chính. Về sau, ông lui về quê dạy học, dành tâm sức truyền dạy tri thức và đào tạo nhân tài.",
  reforms: "• Người thầy của Trạng Trình Nguyễn Bỉnh Khiêm: Sau khi lui về quê, Lương Đắc Bằng mở lớp dạy học, được nhiều người tìm đến xin thụ giáo. Học trò tiêu biểu của ông là Nguyễn Bỉnh Khiêm, người đỗ Trạng nguyên năm 1535, sau này trở thành nhà giáo, nhà thơ và danh nhân văn hóa nổi tiếng. Quan hệ thầy trò Lương Đắc Bằng – Nguyễn Bỉnh Khiêm là dấu ấn nổi bật trong sự nghiệp giáo dục của ông, thể hiện sự tiếp nối tri thức và đạo học giữa những người thầy lớn.\n• Truyền dạy tri thức gắn với bồi dưỡng đạo lý: Theo nghiên cứu của TS. Lê Văn Toan trên Tạp chí Hán Nôm, Lương Đắc Bằng coi trọng cả kiến thức và đạo lý làm người. Ông hướng học trò đến việc học vì đạo nghĩa, biết đem hiểu biết phục vụ đất nước và nhân dân. Nhân cách thanh liêm, thái độ cương trực và trách nhiệm trước thời cuộc của người thầy cũng trở thành bài học đối với môn sinh.\n• Khuyến khích học trò suy nghĩ và tự tìm hiểu: Bài nghiên cứu trên Tạp chí Hán Nôm mô tả cách dạy của ông chú trọng gợi mở, dẫn dắt, yêu cầu người học tự suy ngẫm, nghiên cứu và luận giải. Những tư liệu này cho thấy hình ảnh người thầy coi trọng sự hiểu biết thực chất, khuyến khích học trò chủ động tìm hiểu thay vì chỉ ghi nhớ lời sách. Khi giới thiệu đặc điểm giáo dục này, cần hiểu đây là nhận định của công trình nghiên cứu về ông.\n• Dâng 14 kế sách chấn chỉnh việc nước: Tháng 10 năm Canh Ngọ (1510), khi triều đình khôi phục chức Lại bộ Tả thị lang kiêm Đông các Học sĩ, Nhập thị kinh diên, ông từ chối và nhân đó dâng vua Lê Tương Dực 'Trị bình thập tứ sách'. Bản điều trần gồm 14 kế sách, đề cập đến trách nhiệm tu dưỡng của nhà vua, loại bỏ kẻ xu nịnh, thận trọng khi trao quan tước, tuyển bổ công bằng, tiết kiệm chi tiêu, biểu dương người tiết nghĩa, cấm hối lộ, củng cố võ bị, lựa chọn người dám can gián, giảm lao dịch, giữ chữ tín trong hiệu lệnh và thận trọng về luật pháp, chế độ.\n• Tấm gương về trách nhiệm của người trí thức: Những kiến nghị của Lương Đắc Bằng thể hiện sự quan tâm đến kỷ cương triều chính và đời sống nhân dân. Dù không đem lại sự chuyển biến như ông mong muốn, 'Trị bình thập tứ sách' vẫn cho thấy tinh thần thẳng thắn can gián, ý thức chống tham nhũng và mong muốn xây dựng một nền chính trị có trách nhiệm. Sự nghiệp của ông kết nối hai vai trò: tham gia việc nước và dạy học, đào tạo con người.",
  legacy: "Lương Đắc Bằng được hậu thế ghi nhận là danh nho, vị quan thanh liêm và người thầy mẫu mực thời Lê sơ. Di sản nổi bật của ông là 'Trị bình thập tứ sách' và công lao truyền dạy tri thức, đạo lý cho học trò, tiêu biểu là Nguyễn Bỉnh Khiêm. Theo tư liệu được lưu truyền, trước khi qua đời, ông gửi gắm việc học hành của người con trai Lương Hữu Khánh cho Nguyễn Bỉnh Khiêm; câu chuyện thể hiện sự tin cậy và tình nghĩa thầy trò qua các thế hệ. Khu lăng mộ và nhà thờ Lương Đắc Bằng tại làng Hội Triều, Thanh Hóa được công nhận là di tích lịch sử văn hóa cấp quốc gia năm 1994. Tên ông được đặt cho trường học, góp phần gìn giữ ký ức về một người thầy có đóng góp đối với truyền thống hiếu học của quê hương và đất nước.",
  source: "Phạm Hoàng Mạnh Hà, 'Bảng nhãn Lương Đắc Bằng và Trị bình thập tứ sách', Bảo tàng Lịch sử quốc gia, ngày 28/8/2018; Lê Văn Toan, 'Lương Đắc Bằng – Danh Nho đạo nghĩa thanh liêm', Tạp chí Hán Nôm, số 3 (106), năm 2011, tr. 24–28; Viện Nghiên cứu Hán Nôm, bảng tra các vị Tam khôi. Lưu ý: niên đại của ông chưa thống nhất giữa các tài liệu; có nguồn ghi 1472–1522, có nguồn ghi 1475–1526."
},
{
  id: 9,
  name: "Trạng Trình Nguyễn Bỉnh Khiêm",
  years: "1491 – 1585",
  period: "phong_kien",
  subTheme: "Các nhà giáo thời phong kiến",
  title: "Người thầy lớn thế kỷ XVI – Nhà thơ, nhà tư tưởng giàu lòng yêu nước, thương dân",
  img: "assets/teachers/pk_09_nguyen_binh_khiem.jpg",
  career: "Nguyễn Bỉnh Khiêm sinh năm 1491, mất năm 1585, quê làng Trung Am, huyện Vĩnh Lại, trấn Hải Dương xưa, thuộc địa bàn Hải Phòng ngày nay. Ông có tên ban đầu là Nguyễn Văn Đạt, tên tự Hanh Phủ, hiệu Bạch Vân cư sĩ. Sinh trưởng trong gia đình có truyền thống học hành, ông sớm được cha mẹ chăm lo giáo dục. Khi trưởng thành, ông theo học Bảng nhãn Lương Đắc Bằng tại Thanh Hóa. Trước những biến động cuối thời Lê sơ, ông chưa vội tham gia khoa cử. Năm 1534, ông thi Hương đỗ đầu; năm 1535, tiếp tục đỗ đầu thi Hội và thi Đình, giành học vị Trạng nguyên khoa Ất Mùi, niên hiệu Đại Chính thứ 6, đời vua Mạc Đăng Doanh. Ông làm quan dưới triều Mạc, từng giữ chức Tả thị lang Bộ Hình, Tả thị lang Bộ Lại, kiêm Đông các Đại học sĩ. Năm 1542, sau khi dâng sớ xin trị tội 18 lộng thần nhưng không được chấp thuận, ông xin về quê, mở trường dạy học. Ông được phong tước Trình Tuyền hầu, về sau là Trình Quốc công, nên dân gian thường gọi là Trạng Trình.",
  reforms: "• Xây dựng Am Bạch Vân thành nơi đào tạo nhân tài: Sau khi rời triều đình, Nguyễn Bỉnh Khiêm dựng Am Bạch Vân tại quê nhà, mở trường dạy học. Danh tiếng và học vấn của ông thu hút người học từ nhiều nơi. Hoạt động giáo dục tại đây trở thành đóng góp nổi bật trong cuộc đời ông, gắn tên tuổi người thầy với việc bồi dưỡng nhân tài ở thế kỷ XVI.\n• Đào tạo những học trò có đóng góp trên nhiều lĩnh vực: Những môn sinh được các tư liệu giới thiệu gồm Phùng Khắc Khoan, Lương Hữu Khánh, Nguyễn Quyện và Đinh Thời Trung. Họ trưởng thành trong những hoàn cảnh khác nhau, có người nổi tiếng về văn chương, ngoại giao, có người đóng góp về chính trị, quân sự. Thành tựu của các thế hệ học trò góp phần thể hiện ảnh hưởng của Nguyễn Bỉnh Khiêm đối với đời sống trí thức đương thời.\n• Coi trọng đạo đức và trách nhiệm của người học: Sự nghiệp giáo dục của ông gắn với quan niệm tu dưỡng nhân cách, sống ngay thẳng, giữ lòng nhân nghĩa và quan tâm đến đời sống nhân dân. Qua hoạt động dạy học và thơ văn, ông đề cao sự thanh liêm, tình nghĩa, phê phán thói tham lam, xu nịnh và việc chạy theo danh lợi. Chính cuộc sống thanh cao cùng thái độ cương trực trước triều chính của ông cũng là bài học đối với môn sinh.\n• Gắn học vấn với suy ngẫm về thời cuộc: Nguyễn Bỉnh Khiêm sống trong thế kỷ có nhiều biến động và chiến tranh giữa các thế lực phong kiến. Thơ văn của ông phản ánh nỗi lo trước cảnh dân chúng đói khổ, lưu tán, đồng thời bày tỏ mong muốn đất nước yên ổn. Từ đó, có thể thấy việc học và tu dưỡng trong tư tưởng của ông luôn gắn với trách nhiệm đối với con người và xã hội.\n• Để lại di sản văn chương mang ý nghĩa giáo dục: Hai tập thơ tiêu biểu là 'Bạch Vân am thi tập' bằng chữ Hán và 'Bạch Vân quốc ngữ thi' bằng chữ Nôm. Thơ ông kết hợp suy ngẫm về cuộc đời với những lời khuyên về cách sống, cách ứng xử, thể hiện tình yêu thiên nhiên và thái độ coi trọng nhân cách. Di sản ấy góp phần truyền tải những bài học về đạo lý và trách nhiệm của người trí thức.",
  legacy: "Nguyễn Bỉnh Khiêm được ghi nhận là nhà giáo, nhà thơ và nhà tư tưởng tiêu biểu của Việt Nam thế kỷ XVI. Am Bạch Vân cùng các thế hệ học trò là dấu ấn nổi bật trong sự nghiệp giáo dục của ông. Trong ký ức dân gian, ông còn gắn với nhiều giai thoại và lời sấm; những nội dung này cần được phân biệt với các sự kiện lịch sử khi giới thiệu nhân vật. Đền thờ Nguyễn Bỉnh Khiêm tại Trung Am, Hải Phòng được xếp hạng di tích quốc gia đặc biệt theo Quyết định số 2367/QĐ-TTg ngày 23/12/2015. Tên ông được đặt cho nhiều trường học, đường phố, thể hiện sự trân trọng đối với người thầy có ảnh hưởng sâu rộng trong lịch sử văn hóa dân tộc.",
  source: "Cổng thông tin điện tử thành phố Hải Phòng, 'Danh nhân văn hóa – Trạng Trình Nguyễn Bỉnh Khiêm (1491–1585)', ngày 25/10/2012; 'Đền thờ Danh nhân văn hóa Trạng Trình Nguyễn Bỉnh Khiêm – Di tích lịch sử Quốc gia đặc biệt'; 'Lãnh đạo thành phố dâng hương tại Đền thờ Trạng Trình Nguyễn Bỉnh Khiêm'; Thư viện Đồng Nai, chuyên mục Những nhà giáo tiêu biểu Việt Nam, bài 'Nguyễn Bỉnh Khiêm (1491–1585)'."
},
{
  id: 10,
  name: "Hồng Hà nữ sĩ Đoàn Thị Điểm",
  years: "1705 – 1748",
  period: "phong_kien",
  subTheme: "Các nhà giáo thời phong kiến",
  title: "Nữ nhà giáo tài hoa – Gương sáng về học vấn, nghị lực và lòng nhân ái",
  img: "assets/teachers/pk_10_doan_thi_diem.jpg",
  career: "Đoàn Thị Điểm, hiệu Hồng Hà nữ sĩ, sinh năm 1705, mất năm 1748, quê làng Giai Phạm, còn gọi là Hiến Phạm, thuộc vùng Hưng Yên. Bà là con của Đoàn Doãn Nghi, một nhà nho làm nghề dạy học; anh trai là Đoàn Doãn Luân. Từ nhỏ, bà được gia đình cho học chữ, tiếp cận Tứ thư, Ngũ kinh, sớm thể hiện tư chất thông minh và năng khiếu văn chương. Trưởng thành trong gia đình có truyền thống giáo dục, bà từng giúp cha và anh trong việc dạy học. Sau những biến cố gia đình, bà vừa dạy học, vừa làm thuốc, chăm sóc mẹ và giúp chị dâu nuôi các cháu. Về sau, bà đến Chương Dương, thuộc vùng Thường Tín, Hà Nội ngày nay, mở lớp dạy học, được nhiều người tìm đến theo học. Năm 1742, bà kết hôn với Tiến sĩ Nguyễn Kiều. Năm 1748, trên đường cùng chồng vào Nghệ An nhận nhiệm sở, bà lâm bệnh và qua đời.",
  reforms: "• Nữ nhà giáo tiêu biểu trong xã hội phong kiến: Đoàn Thị Điểm trực tiếp tham gia dạy học và mở lớp thu nhận học trò trong bối cảnh cơ hội học tập, tham gia khoa cử của phụ nữ còn nhiều hạn chế. Với học vấn và tài văn chương, bà được người đương thời biết đến và kính trọng. Hoạt động giáo dục của bà là một trường hợp nổi bật về vai trò của người phụ nữ trong việc truyền dạy tri thức ở Việt Nam thế kỷ XVIII.\n• Tiếp nối nghề dạy học của gia đình: Từ việc giúp cha và anh, bà từng bước đảm nhận công việc dạy học để duy trì sinh kế và chăm lo người thân. Sau khi anh trai qua đời, bà tiếp tục dạy học, làm thuốc, nuôi mẹ và giúp đỡ gia đình anh. Sự gắn bó với nghề thể hiện nghị lực, tinh thần tự lập và trách nhiệm của bà trước những khó khăn trong cuộc sống.\n• Mở lớp tại Chương Dương, bồi dưỡng người học: Tại Chương Dương, Đoàn Thị Điểm vừa dạy học, vừa chữa bệnh. Theo tư liệu giới thiệu của địa phương, học trò đến theo học khá đông; trong số đó có Đào Duy Doãn, người về sau đỗ Tiến sĩ. Đây là căn cứ cụ thể ghi nhận đóng góp của bà đối với việc đào tạo người học, bên cạnh danh tiếng về văn chương.\n• Góp phần khẳng định năng lực trí tuệ của phụ nữ: Cuộc đời học tập, dạy học và sáng tác của Đoàn Thị Điểm cho thấy phụ nữ có thể làm chủ tri thức, truyền dạy kiến thức và đóng góp vào đời sống văn hóa. Nhìn từ lịch sử giáo dục, tấm gương của bà có ý nghĩa khuyến học và khích lệ sự tự tin, ý chí vươn lên của người học, đặc biệt là nữ giới.\n• Để lại tác phẩm văn học giàu giá trị nhân văn: Bà là tác giả 'Truyền kỳ tân phả', tập truyện viết bằng chữ Hán, trong đó có những hình tượng phụ nữ tài năng, đức hạnh và có bản lĩnh. Tên tuổi bà còn gắn với việc diễn Nôm 'Chinh phụ ngâm' của Đặng Trần Côn. Tuy nhiên, tác giả bản diễn Nôm phổ biến hiện nay vẫn là vấn đề có ý kiến khác nhau giữa các nhà nghiên cứu, chủ yếu xoay quanh Đoàn Thị Điểm và Phan Huy Ích; vì vậy không nên khẳng định tuyệt đối bản hiện hành là của bà.",
  legacy: "Đoàn Thị Điểm được ghi nhận là nữ sĩ và nữ nhà giáo tiêu biểu thời Lê Trung Hưng. Giá trị trong cuộc đời bà thể hiện ở học vấn, tài văn chương, hoạt động dạy học và nghị lực chăm lo gia đình trong hoàn cảnh khó khăn. Di sản của bà góp phần làm phong phú văn học trung đại, đồng thời lưu lại hình ảnh người phụ nữ có tri thức, có khả năng truyền dạy và đóng góp cho cộng đồng. Tại quê hương Hưng Yên có nhà lưu niệm Hồng Hà nữ sĩ Đoàn Thị Điểm; tên bà được đặt cho nhiều trường học và đường phố, thể hiện sự trân trọng đối với những đóng góp của bà trong lịch sử văn hóa, giáo dục Việt Nam.",
  source: "Cổng thông tin điện tử tỉnh Hưng Yên, 'Đoàn Thị Điểm (1705–1748)'; Cổng thông tin điện tử địa phương thuộc tỉnh Hưng Yên, 'Nhà lưu niệm Hồng Hà nữ sĩ Đoàn Thị Điểm'; Thư viện Đồng Nai, chuyên mục 'Thầy giáo Việt Nam 10 thế kỷ', tư liệu về Đoàn Thị Điểm; Viện Nghiên cứu Hán Nôm, 'Sơ lược giới thiệu Chinh phụ ngâm tập chú', Thông báo Hán Nôm học năm 2012; Digitizing Việt Nam, bộ sưu tập 'Chinh phụ ngâm khúc'."
},
{
  id: 11,
  name: "La Sơn phu tử Nguyễn Thiếp",
  years: "1723 – 1804",
  period: "phong_kien",
  subTheme: "Các nhà giáo thời phong kiến",
  title: "Bậc thầy đạo học – Đề cao thực học, học đi đôi với hành",
  img: "assets/teachers/pk_11_nguyen_thiep.jpg",
  career: "Nguyễn Thiếp sinh năm 1723, mất năm 1804, quê làng Nguyệt Ao, huyện La Sơn xưa, thuộc tỉnh Hà Tĩnh ngày nay. Ông có các tên tự, hiệu như Khải Xuyên, Hạnh Am, Lạp Phong cư sĩ; được Nguyễn Huệ kính trọng gọi là La Sơn phu tử, về sau là La Sơn tiên sinh. Năm 1743, ông thi đỗ Hương giải. Ông từng đảm nhiệm việc học tại phủ Anh Đô, sau làm Tri huyện Thanh Chương, thuộc trấn Nghệ An. Năm 1768, ông từ quan, về sống tại trại Bùi Phong trên dãy núi Thiên Nhẫn, gần thành Lục Niên, đọc sách, làm ruộng và dạy học. Học vấn và nhân cách của ông được sĩ phu đương thời kính trọng. Từ năm 1786, Nguyễn Huệ nhiều lần gửi thư mời ông cộng tác. Năm 1791, Nguyễn Thiếp vào Phú Xuân, dâng bản tấu bàn về đức của vua, lòng dân và phép học. Cũng trong năm này, vua Quang Trung giao ông làm Viện trưởng Sùng Chính viện, phụ trách những công việc quan trọng về giáo dục và dịch sách.",
  reforms: "• Xác định việc học trước hết để làm người: Trong phần bàn về phép học, thường được biết đến với tên 'Bàn luận về phép học', Nguyễn Thiếp đặt việc hiểu đạo lý làm người làm mục đích căn bản của giáo dục. Ông phê phán lối học chạy theo hình thức, chỉ nhằm cầu danh lợi, đồng thời đề nghị khôi phục việc học có nền tảng đạo đức. Quan niệm này vẫn nằm trong khuôn khổ Nho học, nhưng thể hiện rõ yêu cầu học để tu dưỡng và có ích cho xã hội.\n• Đề cao học có trình tự, hiểu rộng và nắm được điều cốt yếu: Ông đề xuất bắt đầu từ kiến thức căn bản rồi tuần tự tiến lên Tứ thư, Ngũ kinh và các sách sử. Người học cần mở rộng hiểu biết, sau đó biết tóm lược, hệ thống lại những nội dung thiết yếu. Đây là quan điểm coi trọng nền tảng, trình tự và khả năng tự tổng hợp kiến thức.\n• Gắn kiến thức với việc thực hành: Nguyễn Thiếp yêu cầu người học vận dụng những điều đã hiểu vào hành động. Theo ông, việc học đúng hướng có thể giúp con người trưởng thành, tạo nên nhân tài và góp phần làm cho đất nước vững mạnh. Tư tưởng ấy thể hiện sự coi trọng thực học, tránh việc chỉ thuộc sách mà không biết ứng dụng.\n• Kiến nghị mở rộng điều kiện học tập: Trong bản tấu năm 1791, ông đề nghị triều đình tạo điều kiện để người học tại các trường công, trường tư và những người thuộc các nhóm được nêu trong bản tấu có thể thuận tiện đến học. Ông coi việc tổ chức học tập và lựa chọn người dạy là những vấn đề cần được nhà nước quan tâm để bồi dưỡng nhân tài.\n• Phụ trách Sùng Chính viện: Năm 1791, vua Quang Trung thành lập Sùng Chính viện và giao Nguyễn Thiếp làm Viện trưởng. Theo chiếu giao nhiệm vụ, ông chuyên coi việc dạy, giảng rõ đạo học, đồng thời khảo xét học vấn và phẩm hạnh của những người được giới thiệu để tâu lên triều đình lựa chọn sử dụng. Vai trò này cho thấy đóng góp của ông vượt ra ngoài việc trực tiếp dạy học, gắn với tổ chức hoạt động giáo dục dưới triều Tây Sơn.\n• Tổ chức dịch sách chữ Hán sang chữ Nôm: Nguyễn Thiếp cùng các cộng sự thực hiện việc diễn dịch sách phục vụ học tập theo chủ trương của vua Quang Trung. Văn bản hiện được Bảo tàng Lịch sử quốc gia lưu giữ xác nhận việc dịch các sách Tiểu học và Tứ thư; chiếu năm 1792 tiếp tục yêu cầu dịch các kinh Thi, Thư, Dịch. Hoạt động này góp phần tăng việc sử dụng tiếng Việt qua chữ Nôm trong truyền đạt tri thức. Cần phân biệt những sách đã được xác nhận hoàn thành với những sách mới được giao tiếp tục dịch.",
  legacy: "Nguyễn Thiếp để lại dấu ấn trong lịch sử giáo dục Việt Nam với tư cách người thầy có uy tín và người tham gia công cuộc chấn hưng việc học dưới triều Quang Trung. Những quan điểm về học để làm người, học có nền tảng, nắm điều cốt yếu và vận dụng vào thực tế là nội dung nổi bật trong tư tưởng giáo dục của ông. Hoạt động của Sùng Chính viện thể hiện sự kết hợp giữa trọng dụng học giả, tổ chức giáo dục và biên dịch tài liệu học tập. Các thư, chiếu liên quan đến Nguyễn Huệ – Quang Trung và Nguyễn Thiếp hiện được Bảo tàng Lịch sử quốc gia lưu giữ là chứng cứ trực tiếp về sự tin cậy và cộng tác giữa nhà vua với người thầy xứ Nghệ.",
  source: "Bảo tàng Hà Tĩnh, 'La Sơn phu tử Nguyễn Thiếp – Con người và sự nghiệp', ngày 09/12/2023; 'Một số đóng góp của La Sơn phu tử Nguyễn Thiếp đối với chính sách cải cách giáo dục thời Tây Sơn', ngày 30/10/2023; 'Nguyễn Thiếp với ba lần cầu hiền của Nguyễn Huệ'; Bảo tàng Lịch sử quốc gia, 'Văn bản Quang Trung lưu giữ tại Bảo tàng Lịch sử Quốc gia', ngày 23/10/2015."
},
{
  id: 12,
  name: "Hải Thượng Lãn Ông Lê Hữu Trác",
  years: "1724 – 1791",
  period: "phong_kien",
  subTheme: "Các nhà giáo thời phong kiến",
  title: "Đại danh y – Người thầy truyền dạy y thuật và y đức",
  img: "assets/teachers/pk_12_le_huu_trac.jpg",
  career: "Lê Hữu Trác, hiệu Hải Thượng Lãn Ông, sinh năm 1724, mất năm 1791, nguyên quán làng Liêu Xá, huyện Đường Hào, phủ Thượng Hồng, trấn Hải Dương xưa, thuộc tỉnh Hưng Yên ngày nay. Ông xuất thân trong gia đình có truyền thống khoa bảng; thân phụ là Lê Hữu Mưu, thân mẫu là Bùi Thị Thưởng. Thuở nhỏ, ông theo cha học tại Thăng Long, được tiếp thu nền tảng Nho học. Ông từng tham gia quân ngũ, sau rời binh nghiệp, về quê mẹ tại Hương Sơn, Hà Tĩnh để chăm lo gia đình. Trong thời gian chữa bệnh với lương y Trần Độc, ông có điều kiện tiếp cận sách thuốc và được truyền dạy kiến thức y học. Từ đó, ông chuyên tâm nghiên cứu, hành nghề chữa bệnh và đào tạo học trò. Phần lớn sự nghiệp y học của ông gắn với vùng Hương Sơn, nơi ông vừa khám chữa bệnh, vừa đọc sách, trao đổi học thuật và biên soạn các công trình để truyền lại cho đời sau.",
  reforms: "• Trực tiếp truyền dạy nghề y: Lê Hữu Trác mở lớp truyền dạy y thuật, hướng dẫn học trò nghiên cứu sách y học và tích lũy kinh nghiệm chữa bệnh. Hoạt động đào tạo là một bộ phận quan trọng trong sự nghiệp của ông, gắn với mong muốn có thêm những người đủ kiến thức, năng lực và trách nhiệm để chăm sóc người bệnh.\n• Đặt y đức làm nền tảng của việc học nghề: Ông coi việc tu dưỡng đạo đức là yêu cầu thiết yếu đối với người thầy thuốc. Trong 'Y huấn cách ngôn', ông nêu chín điều giáo huấn, đề cập đến trách nhiệm học tập, cách thăm khám, thái độ đối với người bệnh, quan hệ với đồng nghiệp và việc giữ gìn phẩm hạnh. Những lời răn dạy này thể hiện quan niệm đào tạo người hành nghề phải đồng thời chú trọng chuyên môn và nhân cách.\n• Giáo dục lòng nhân ái và trách nhiệm với người bệnh: Ông căn dặn người làm nghề y phải quan tâm đến người nghèo, người cô độc và những hoàn cảnh khó khăn; tránh thái độ phân biệt, vụ lợi. Việc cứu chữa cần xuất phát từ trách nhiệm đối với sinh mạng con người. Đây là nội dung nổi bật trong di sản giáo dục y đức của ông, được các thế hệ thầy thuốc tiếp tục trân trọng.\n• Biên soạn 'Hải Thượng y tông tâm lĩnh': Bộ sách gồm 28 tập, chia thành 66 quyển, hệ thống hóa nhiều nội dung về y đức, y lý, y thuật, dược học và dưỡng sinh. Công trình kết hợp việc tiếp thu y thư với kinh nghiệm thực hành của tác giả, trở thành tài liệu quan trọng để nghiên cứu, học tập và truyền nghề trong y học cổ truyền Việt Nam.\n• Gắn nghiên cứu sách vở với kinh nghiệm chữa bệnh: Trong quá trình hành nghề và viết sách, ông ghi lại cả những trường hợp điều trị thành công và những trường hợp không thành công để suy xét, rút kinh nghiệm. Cách làm này thể hiện thái độ thận trọng, tinh thần tự nhìn nhận trách nhiệm và ý thức giúp người học tránh lặp lại sai sót.\n• Tạo điều kiện trao đổi tri thức giữa các thầy thuốc: Bên cạnh dạy học, ông tổ chức hoạt động hội y để những người hành nghề gặp gỡ, trao đổi kiến thức và học hỏi lẫn nhau. Việc truyền nghề của ông vì vậy gắn với cả nghiên cứu, thực hành và chia sẻ kinh nghiệm trong cộng đồng thầy thuốc.",
  legacy: "Lê Hữu Trác để lại di sản có giá trị về y học, giáo dục, văn học và đạo đức nghề nghiệp. 'Hải Thượng y tông tâm lĩnh' là công trình tiêu biểu trong lịch sử y học cổ truyền Việt Nam; 'Y huấn cách ngôn' lưu giữ những lời dạy quan trọng về trách nhiệm và phẩm hạnh của người thầy thuốc. Ông còn là tác giả 'Thượng kinh ký sự', tác phẩm có giá trị văn học và tư liệu về xã hội thời Lê – Trịnh. Trong lịch sử giáo dục, đóng góp nổi bật của ông là truyền dạy nghề y, biên soạn tài liệu học tập và gắn đào tạo chuyên môn với rèn luyện y đức. Năm 2023, Đại hội đồng UNESCO khóa 42 thông qua việc cùng tham gia kỷ niệm 300 năm ngày sinh của ông vào năm 2024, ghi nhận những đóng góp của ông đối với các giá trị mà tổ chức này đề cao.",
  source: "Thông tấn xã Việt Nam, hồ sơ nhân vật 'Lê Hữu Trác'; Cổng thông tin điện tử tỉnh Hà Tĩnh, 'Tiểu sử Hải Thượng Lãn Ông Lê Hữu Trác'; Sở Y tế Hà Tĩnh, 'Noi gương Hải Thượng Lãn Ông, phát huy y đức của người thầy thuốc hôm nay'; Bảo tàng Hà Tĩnh, 'UNESCO ra nghị quyết vinh danh Hải Thượng Lãn Ông Lê Hữu Trác'; Bộ Văn hóa, Thể thao và Du lịch, 'UNESCO vinh danh Đại danh y Hải Thượng Lãn Ông Lê Hữu Trác'."
},
{
  id: 13,
  name: "Bảng nhãn Lê Quý Đôn",
  years: "1726 – 1784",
  period: "phong_kien",
  subTheme: "Các nhà giáo thời phong kiến",
  title: "Nhà bác học uyên bác – Người thầy coi trọng khảo cứu và thực học",
  img: "assets/teachers/pk_13_le_quy_don.jpg",
  career: "Lê Quý Đôn, tên ban đầu là Lê Danh Phương, tự Doãn Hậu, hiệu Quế Đường, sinh năm 1726, mất năm 1784, quê làng Diên Hà, trấn Sơn Nam xưa, thuộc vùng đất Thái Bình. Ông xuất thân trong gia đình khoa bảng, là con của Tiến sĩ Lê Trọng Thứ. Từ nhỏ, ông nổi tiếng thông minh, ham đọc sách và có trí nhớ tốt. Năm 1743, ông thi Hương đỗ Giải nguyên, sau đó về quê dạy học, nghiên cứu và tiếp tục chuẩn bị cho các kỳ thi. Năm 1752, dưới triều vua Lê Hiển Tông, ông đỗ Hội nguyên; vào thi Đình tiếp tục đứng đầu, được ban học vị Bảng nhãn. Vì khoa thi này không lấy Trạng nguyên nên ông vừa là Đình nguyên, vừa là Bảng nhãn. Sau khi đỗ đạt, ông đảm nhiệm nhiều chức vụ trong triều đình Lê – Trịnh, tham gia biên soạn quốc sử, đi sứ và làm việc tại các địa phương. Năm 1767, ông kiêm chức Tư nghiệp Quốc Tử Giám. Cuộc đời hoạt động của ông gắn với việc học tập, giảng dạy, khảo sát thực tế và biên soạn một di sản học thuật phong phú.",
  reforms: "• Trực tiếp tham gia giáo dục và đào tạo người học: Sau khi đỗ Giải nguyên, Lê Quý Đôn từng về quê dạy học. Về sau, trên cương vị Tư nghiệp Quốc Tử Giám, ông tham gia công việc giáo dục tại cơ sở đào tạo quan trọng của triều đình. Ông cũng từng được giao coi thi Hội. Những hoạt động này là căn cứ cụ thể để ghi nhận vai trò nhà giáo của ông bên cạnh sự nghiệp nghiên cứu và trước tác.\n• Nêu gương về tinh thần học hỏi bền bỉ: Học vấn của Lê Quý Đôn được bồi đắp từ việc đọc sách, trao đổi với những người có hiểu biết và quan sát đời sống. Trong quá trình đi sứ, làm quan và công cán, ông tiếp tục tìm kiếm tư liệu, ghi chép những điều mắt thấy, tai nghe. Cuộc đời ông cho thấy việc học không dừng lại ở đỗ đạt mà cần được duy trì qua công việc và trải nghiệm.\n• Coi trọng khảo cứu, đối chiếu và hệ thống hóa tri thức: Các trước tác của ông thể hiện công phu thu thập tài liệu, phân loại vấn đề, so sánh thông tin và bổ sung nhận xét. Ông không chỉ tiếp nhận kiến thức từ sách vở mà còn sử dụng tư liệu thu được qua thực tế. Từ phương pháp làm việc ấy, có thể rút ra bài học về sự cẩn trọng, khả năng tổng hợp và tinh thần chủ động khi nghiên cứu.\n• Mở rộng phạm vi hiểu biết vượt ra ngoài văn chương khoa cử: Di sản của Lê Quý Đôn bao quát nhiều lĩnh vực như sử học, địa lý, văn học, triết học, kinh tế và đời sống xã hội. 'Vân đài loại ngữ' là công trình tiêu biểu cho việc tập hợp, phân loại tri thức trên nhiều phương diện. Những trước tác này góp phần làm phong phú nguồn tài liệu học tập, khảo cứu và lưu truyền hiểu biết cho các thế hệ sau.\n• Gắn tri thức với việc tìm hiểu đất nước: 'Phủ biên tạp lục', được biên soạn trong thời gian ông làm việc tại Thuận Hóa năm 1776, ghi chép nhiều mặt của vùng Thuận Hóa – Quảng Nam, từ địa lý, tổ chức hành chính đến sản vật, kinh tế và phong tục. Công trình thể hiện sự quan tâm đến điều kiện thực tế của từng vùng đất và trách nhiệm tìm hiểu đời sống nhân dân.\n• Sưu tầm, gìn giữ di sản văn hiến: Qua những tác phẩm như 'Đại Việt thông sử', 'Kiến văn tiểu lục' và 'Toàn Việt thi lục', ông góp phần lưu giữ tư liệu lịch sử, văn hóa và thơ ca của dân tộc. Việc biên soạn không chỉ phục vụ nhu cầu học thuật đương thời mà còn tạo nguồn tư liệu quan trọng cho nghiên cứu, giảng dạy về sau.",
  legacy: "Lê Quý Đôn được ghi nhận là nhà bác học, nhà văn hóa và nhà giáo tiêu biểu của Việt Nam thế kỷ XVIII. Những tác phẩm nổi bật của ông gồm 'Đại Việt thông sử', 'Vân đài loại ngữ', 'Kiến văn tiểu lục', 'Phủ biên tạp lục', 'Toàn Việt thi lục', 'Quần thư khảo biện' và 'Quế Đường thi tập'. Trong lịch sử giáo dục, đóng góp của ông thể hiện ở hoạt động dạy học, việc đảm nhiệm chức Tư nghiệp Quốc Tử Giám và sự nghiệp biên soạn, hệ thống hóa tri thức. Tinh thần ham học, ý thức ghi chép, khảo cứu và tìm hiểu thực tế của ông tiếp tục có ý nghĩa đối với việc học tập, nghiên cứu. Tên ông được đặt cho nhiều trường học và đường phố, thể hiện sự trân trọng đối với một trí tuệ lớn của nền văn hiến Việt Nam.",
  source: "Viện Sử học, 'Xứ Đàng Trong qua ghi chép của Lê Quý Đôn trong Phủ biên tạp lục', ngày 26/7/2026; Bảo tàng Lịch sử quốc gia, 'Nhà bác học Lê Quý Đôn (1726–1784)', ngày 16/8/2016; Ủy ban Nhà nước về người Việt Nam ở nước ngoài – Bộ Ngoại giao, 'Nhà bác học Lê Quý Đôn'; Báo Điện tử Chính phủ, 'Kỷ niệm 290 năm ngày sinh Danh nhân Văn hóa Lê Quý Đôn'."
},
{
  id: 14,
  name: "Nhà giáo Võ Trường Toản",
  years: "? – 1792",
  period: "phong_kien",
  subTheme: "Các nhà giáo thời phong kiến",
  title: "Bậc tôn sư đất Gia Định – Người thầy có ảnh hưởng sâu rộng đến học phong Nam Bộ",
  img: "assets/teachers/pk_14_vo_truong_toan.jpg",
  career: "Võ Trường Toản là nhà nho, nhà giáo tiêu biểu ở Gia Định vào thế kỷ XVIII. Năm sinh và nguồn gốc gia đình của ông hiện chưa được xác định chắc chắn. Ông sống và mở trường dạy học tại Hòa Hưng, thuộc vùng Gia Định xưa, nay thuộc Thành phố Hồ Chí Minh. Trong thời kỳ chiến tranh giữa Tây Sơn và Nguyễn Ánh, ông không tham gia chính sự, chuyên tâm dạy học, giữ cuộc sống thanh cao. Học vấn sâu rộng và đức độ của ông được người đương thời kính trọng, thu hút nhiều học trò đến theo học. Ông mất ngày 27/7/1792. Nguyễn Ánh thương tiếc, ban danh hiệu 'Gia Định xử sĩ Sùng Đức Võ tiên sinh'. Cuộc đời ông chủ yếu được biết đến qua sự nghiệp giáo dục, các thế hệ môn sinh và những văn bia do người đời sau soạn để tưởng nhớ.",
  reforms: "• Mở trường dạy học, đào tạo nhân tài tại Gia Định: Võ Trường Toản dành tâm sức cho việc truyền dạy tri thức và rèn luyện học trò. Theo văn bia do Phan Thanh Giản soạn, người theo học ông có đến hàng trăm. Trường học của ông góp phần bồi dưỡng một lớp trí thức có vai trò quan trọng trong đời sống văn hóa, học thuật và chính trị ở Nam Bộ cuối thế kỷ XVIII, đầu thế kỷ XIX.\n• Đào tạo những môn sinh nổi tiếng: Các học trò được tư liệu ghi nhận gồm Ngô Tùng Châu, Trịnh Hoài Đức, Lê Quang Định, Ngô Nhân Tịnh, Phạm Ngọc Uẩn và Lê Bá Phẩm. Trong đó, Trịnh Hoài Đức, Lê Quang Định và Ngô Nhân Tịnh được biết đến với tên gọi 'Gia Định tam gia', có đóng góp nổi bật về văn chương và học thuật. Sự trưởng thành của các môn sinh là dấu ấn cụ thể trong sự nghiệp giáo dục của ông.\n• Lấy nghĩa lý và việc tu dưỡng làm trọng: Võ Trường Toản được ghi nhận là người dạy học chú trọng nghĩa lý, hướng người học đến sự hiểu biết và rèn luyện phẩm chất. Học vấn cần đi cùng đạo nghĩa, giúp con người hình thành cách sống có trách nhiệm. Nhân cách thanh cao và thái độ không chạy theo danh lợi của người thầy cũng góp phần tạo nên sức thuyết phục trong việc giáo dục môn sinh.\n• Truyền dạy tinh thần 'Tri ngôn dưỡng khí': Văn bia về ông có nhắc việc truyền thụ nghĩa 'Tri ngôn dưỡng khí', một quan niệm bắt nguồn từ Mạnh Tử. Có thể hiểu khái quát là rèn khả năng nhận biết, suy xét lời nói và lý lẽ, đồng thời nuôi dưỡng khí chất đạo đức. Theo nghiên cứu của PGS.TS. Đoàn Lê Giang, đây là một đầu mối quan trọng để tìm hiểu tư tưởng giáo dục và ảnh hưởng học thuật của Võ Trường Toản.\n• Góp phần hình thành học phong coi trọng đạo nghĩa và tính thiết thực: Những nghiên cứu về ông nhấn mạnh sự gắn bó giữa học vấn, tu dưỡng và hành động có ích. Ảnh hưởng của người thầy không chỉ thể hiện ở thành tựu của học trò trực tiếp mà còn ở sự kính trọng của các thế hệ sĩ phu về sau. Phan Thanh Giản, Nguyễn Thông và Nguyễn Đình Chiểu thuộc những thế hệ sau, không phải học trò trực tiếp của ông.\n• Để lại dấu ấn văn chương qua 'Hoài cổ phú': Tác phẩm được lưu truyền của ông là bài 'Hoài cổ phú' viết bằng chữ Nôm. Bài phú suy ngẫm về sự hưng vong, biến đổi của lịch sử và đời người, qua đó đề cao giá trị của nhân nghĩa. Đây là tư liệu giúp tìm hiểu thêm quan niệm sống và nhân cách của người thầy đất Gia Định.",
  legacy: "Võ Trường Toản được các thế hệ sĩ phu Nam Bộ kính trọng như một người thầy chung. Di sản nổi bật của ông là những môn sinh có đóng góp cho đất nước và ảnh hưởng về đạo nghĩa, học phong đối với các thế hệ sau. Sau khi ba tỉnh miền Đông Nam Kỳ bị thực dân Pháp chiếm, các sĩ phu tổ chức đưa hài cốt ông về Bảo Thạnh, vùng Ba Tri, để cải táng; Phan Thanh Giản soạn văn bia tưởng niệm. Di tích mộ Võ Trường Toản được công nhận là di tích lịch sử cấp quốc gia ngày 24/1/1998. Tên ông được đặt cho nhiều trường học, đường phố và Giải thưởng Võ Trường Toản nhằm tôn vinh những nhà giáo tiêu biểu, tiếp nối truyền thống trọng thầy, trọng đạo.",
  source: "Cổng thông tin điện tử tỉnh Vĩnh Long, tài liệu 'Di tích Mộ nhà giáo Võ Trường Toản'; Cổng thông tin du lịch Bến Tre, 'Lăng mộ Võ Trường Toản và đền thờ'; Đoàn Lê Giang, 'Thuyết Tri ngôn dưỡng khí, Dương Minh học và tư tưởng giáo dục của Võ Trường Toản', Tạp chí Hán Nôm, số 5 (120), tr. 14–25, đăng trên website Viện Nghiên cứu Hán Nôm; Đài Tiếng nói Việt Nam, 'Hoài cổ phú: Trước tác của Nhà giáo Võ Trường Toản', ngày 26/8/2022."
},

{
  id: 16,
  name: "Tiến sĩ Phạm Quý Thích",
  years: "1760 – 1825",
  period: "phong_kien",
  subTheme: "Các nhà giáo thời phong kiến",
  title: "Danh sư đất Thăng Long – Người thầy của Nguyễn Văn Siêu và Vũ Tông Phan",
  img: "assets/teachers/pk_16_pham_quy_thich.jpg",
  career: "Phạm Quý Thích, tự Dữ Đạo, hiệu Lập Trai, biệt hiệu Thảo Đường cư sĩ, quê xã Hoa Đường, huyện Đường An, vùng Hải Dương xưa. Gia đình ông về sau chuyển đến phường Báo Thiên, huyện Thọ Xương, Thăng Long. Theo các nghiên cứu của Viện Nghiên cứu Hán Nôm, ông sinh năm 1760, mất năm 1825. Năm 1777, ông đỗ Hương cống; năm 1779, dưới triều vua Lê Hiển Tông, ông đỗ Tiến sĩ. Ông từng giữ các chức trong Viện Hàn lâm và làm Giám sát Ngự sử đạo Kinh Bắc. Thời Tây Sơn, ông sống ẩn dật; sang thời Nguyễn, ông có thời gian giữ chức Thị trung Học sĩ. Bên cạnh những giai đoạn tham gia quan trường, ông dành nhiều tâm sức cho việc dạy học, đọc sách và sáng tác. Trường học của ông tại phường Báo Thiên trở thành một địa chỉ giáo dục có ảnh hưởng ở Thăng Long đầu thế kỷ XIX.",
  reforms: "• Mở trường dạy học tại Thăng Long: Phạm Quý Thích tổ chức dạy học tại nơi sinh sống ở phường Báo Thiên. Hoạt động của ông góp phần duy trì truyền thống học thuật tại Thăng Long trong giai đoạn chuyển tiếp từ cuối thời Lê sang đầu thời Nguyễn. Uy tín của người thầy được thể hiện qua những môn sinh về sau trở thành nhà giáo, nhà văn hóa có đóng góp cho đất nước.\n• Đào tạo Nguyễn Văn Siêu và Vũ Tông Phan: Nguyễn Văn Siêu và Vũ Tông Phan là những học trò nổi tiếng được các tư liệu nghiên cứu ghi nhận. Cùng học với họ còn có Ngô Thế Vinh và Lê Duy Trung. Nhiều người trong số này tiếp tục mở trường, dạy học, biên soạn sách và tham gia các hoạt động văn hóa. Qua đó, ảnh hưởng của Phạm Quý Thích được tiếp nối trong đời sống giáo dục Hà Nội thế kỷ XIX.\n• Gắn việc học với tu dưỡng phẩm chất: Thơ văn của ông thể hiện sự coi trọng nhân cách, lòng ngay thẳng và trách nhiệm của người trí thức. Trong khuôn khổ đạo đức Nho giáo đương thời, ông đề cao việc giữ gìn tiết tháo, không để hoàn cảnh khó khăn làm suy giảm chí hướng. Đây cũng là phương diện giúp hiểu thêm hình ảnh người thầy được môn sinh kính trọng.\n• Để lại trước tác phục vụ đời sống học thuật: Di sản của ông có các tập thơ, văn và những công trình khảo cứu. 'Lập Trai văn tập' lưu giữ nhiều loại văn bản như sớ, biểu, văn bia, bài ký và văn tế. 'Lập Trai thi tuyển' tập hợp thơ ngâm vịnh, cảm tác, vịnh sử, tiễn tặng và khóc bạn. Những tác phẩm này cung cấp tư liệu về tâm tư của nhà nho và sinh hoạt văn hóa, học thuật đương thời.\n• Góp phần vào lịch sử tiếp nhận 'Truyện Kiều': Ông có bài thơ cảm tác về 'Đoạn trường tân thanh', được các văn bản chép với những tên như 'Thính Đoạn trường tân thanh' hoặc 'Thính Đoạn trường tân thanh hữu cảm'. Bài thơ về sau được đưa vào đầu một số bản in 'Truyện Kiều'. Tuy nhiên, không nên từ đó khẳng định ông là người sửa chữa, đổi tên hoặc tổ chức khắc in 'Truyện Kiều' lần đầu, vì những nhận định này còn cần chứng cứ văn bản.",
  legacy: "Phạm Quý Thích được ghi nhận là nhà giáo và tác gia tiêu biểu cuối thế kỷ XVIII, đầu thế kỷ XIX. Dấu ấn giáo dục nổi bật của ông là việc đào tạo những học trò tiếp tục đóng góp cho học thuật và văn hóa Thăng Long, đặc biệt là Nguyễn Văn Siêu và Vũ Tông Phan. Thơ văn của ông còn được lưu giữ tại các cơ quan nghiên cứu, thư viện, là nguồn tư liệu để tìm hiểu nhân cách, quan niệm sống và tâm trạng của tầng lớp trí thức trước những biến động lịch sử. Cuộc đời ông thể hiện vai trò của người thầy trong việc truyền nối tri thức và bồi dưỡng các thế hệ trí thức.",
  source: "Vương Thị Hường, 'Nghiên cứu văn bản thơ chữ Hán của Phạm Quý Thích', Tạp chí Hán Nôm, số 2 (111), năm 2012, tr. 20–39; 'Tìm hiểu tư tưởng của Phạm Quý Thích qua thơ văn', Tạp chí Hán Nôm, số 2 (93), năm 2009, tr. 8–18; Nguyễn Thị Thanh Chung, 'Tìm hiểu về cuộc đời Nguyễn Văn Siêu', Thông báo Hán Nôm học 2009; Viện Nghiên cứu Hán Nôm, thư mục 'Lập Trai thi tuyển', 'Lập Trai văn tập'; Báo Quân đội nhân dân, 'Nhà văn hóa Vũ Tông Phan'. Lưu ý: một số tài liệu ghi năm sinh 1759; hồ sơ này dùng 1760 theo các nghiên cứu chuyên khảo nêu trên."
},
{
  id: 17,
  name: "Phó bảng Nguyễn Văn Siêu",
  years: "1799 – 1872",
  period: "phong_kien",
  subTheme: "Các nhà giáo thời phong kiến",
  title: "Danh sư Phương Đình – Nhà văn hóa góp phần chấn hưng đạo học Thăng Long",
  img: "assets/teachers/pk_17_nguyen_van_sieu.jpg",
  career: "Nguyễn Văn Siêu, tự Tốn Ban, hiệu Phương Đình, còn có hiệu Thọ Xương cư sĩ, sinh năm 1799, mất năm 1872. Ông quê làng Kim Lũ, huyện Thanh Trì, thuộc Hà Nội ngày nay; từ nhỏ theo gia đình đến sinh sống tại vùng Dũng Thọ, huyện Thọ Xương, Thăng Long. Ban đầu được cha dạy học, khi trưởng thành ông theo học Tiến sĩ Phạm Quý Thích, nổi tiếng học rộng và có tài văn chương. Năm 1825, ông đỗ Cử nhân, đứng thứ hai trường thi Thăng Long, tức Á nguyên. Năm 1838, ông đỗ Phó bảng dưới triều Minh Mạng, sau đó làm việc tại Viện Hàn lâm và đảm nhiệm nhiều chức vụ trong triều Nguyễn. Năm 1848, ông được thăng Thị giảng học sĩ, phụ trách giảng sách cho hoàng tử; năm 1849 được cử đi sứ nhà Thanh. Ông từng làm Án sát tại Hà Tĩnh và Hưng Yên. Năm 1854, ông rời quan trường, trở về Hà Nội, tiếp tục dạy học, nghiên cứu và tham gia các hoạt động văn hóa.",
  reforms: "• Xây dựng trường Phương Đình, truyền nối việc học: Nguyễn Văn Siêu mở trường dạy học tại nơi sinh sống ở Thăng Long. Trường Phương Đình là một trong những trường tư nổi tiếng của Hà Nội thế kỷ XIX, thu hút học trò từ nhiều nơi. Sau khi rời quan trường, ông tiếp tục dành tâm sức cho việc giảng dạy, góp phần duy trì sinh hoạt học thuật tại đất cố đô.\n• Chú trọng hiểu sâu nghĩa lý kinh sách: Theo tư liệu được Bảo tàng Lịch sử quốc gia giới thiệu, ông đọc kỹ chú giải của các nhà nho đi trước, gặp vấn đề khó hoặc còn nghi ngờ thì tìm hiểu rộng hơn để làm rõ. Cách học và giảng dạy ấy thể hiện yêu cầu hiểu nội dung, suy xét vấn đề, tránh chỉ tiếp nhận lời sách một cách đơn giản.\n• Biên soạn tài liệu phục vụ giảng dạy: Bên cạnh sáng tác thơ văn, ông nghiên cứu, khảo giải kinh sử và để lại những công trình như 'Chư kinh khảo ước', 'Chư sử khảo thích', 'Tứ thư bị giảng'. Các trước tác cho thấy việc dạy học của ông gắn với quá trình đọc, khảo cứu và hệ thống hóa kiến thức. Môn sinh cũng tập hợp những bài văn, sách lược của thầy để lưu truyền.\n• Để lại di sản khảo cứu trên nhiều lĩnh vực: Những tác phẩm tiêu biểu gồm 'Phương Đình văn loại', 'Phương Đình tùy bút lục', 'Phương Đình dư địa chí' và các tập thơ. Riêng thơ ca có các tập 'Vạn lý', 'Anh ngôn', 'Lưu lãm', 'Mạn hứng'. Di sản này cung cấp tư liệu về lịch sử, địa lý, văn hóa và đời sống tinh thần của người trí thức thế kỷ XIX.\n• Góp phần tôn tạo đền Ngọc Sơn: Năm 1865, Nguyễn Văn Siêu đứng ra lo việc tu sửa đền Ngọc Sơn, gắn với việc tạo dựng, chỉnh trang các công trình trong quần thể như cầu Thê Húc, Tháp Bút và Đài Nghiên. Những công trình ấy kết hợp cảnh quan với ý nghĩa văn hóa, thể hiện sự trân trọng văn chương và đạo học.\n• Gửi gắm tinh thần hiếu học qua Tháp Bút – Đài Nghiên: Hình tượng ngọn bút vươn lên cùng ba chữ 'Tả thanh thiên' và nghiên mực bằng đá tạo nên một biểu tượng nổi bật của văn hiến Thăng Long. Đóng góp này cho thấy sự nghiệp giáo dục của ông còn gắn với việc gìn giữ không gian văn hóa, khuyến khích tinh thần học tập và tu dưỡng.",
  legacy: "Nguyễn Văn Siêu được ghi nhận là nhà giáo, nhà thơ, nhà khảo cứu và danh nhân văn hóa tiêu biểu của Thăng Long – Hà Nội thế kỷ XIX. Di sản của ông thể hiện qua trường Phương Đình, các công trình giảng giải kinh sử, trước tác địa lý, thơ văn và hoạt động tôn tạo di tích. Tháp Bút – Đài Nghiên tại đền Ngọc Sơn tiếp tục lưu giữ dấu ấn của ông trong cảnh quan Hà Nội. Cuộc đời người thầy Phương Đình cho thấy sự gắn bó giữa việc học, dạy học, nghiên cứu và trách nhiệm gìn giữ truyền thống văn hóa.",
  source: "Nguyễn Thị Thanh Chung, 'Tìm hiểu về cuộc đời Nguyễn Văn Siêu', Thông báo Hán Nôm học 2009, đăng trên website Viện Nghiên cứu Hán Nôm; Nguyễn Thị Thanh Chung, 'Sự nghiệp trước tác thi ca của Nguyễn Văn Siêu', Tạp chí Hán Nôm, số 1 (92), năm 2009, tr. 41–47; Bảo tàng Lịch sử quốc gia, 'Nguyễn Siêu – Một danh nhân văn hóa của Thăng Long – Hà Nội (1799–1872)', ngày 09/3/2015; Sở Văn hóa và Thể thao Hà Nội, 'Đền Ngọc Sơn'; Cổng thông tin điện tử thành phố Hà Nội, 'Thăng Long – Hà Nội thời Nguyễn: Đời sống xã hội'."
},
{
  id: 18,
  name: "Tiến sĩ Vũ Tông Phan",
  years: "1800 – 1851",
  period: "phong_kien",
  subTheme: "Các nhà giáo thời phong kiến",
  title: "Danh sư Tự Tháp – Người góp phần chấn hưng văn hóa, giáo dục Thăng Long",
  img: "assets/teachers/pk_18_vu_tong_phan.jpg",
  career: "Vũ Tông Phan, tự Hoán Phủ, hiệu Đường Xuyên và Lỗ Am, sinh năm 1800, mất năm 1851. Ông sinh trưởng tại Thăng Long, quê gốc làng Hoa Đường, huyện Đường An, vùng Hải Dương xưa. Thuở nhỏ theo cha học tập, về sau ông thụ giáo Tiến sĩ Phạm Quý Thích, cùng học với Nguyễn Văn Siêu, Ngô Thế Vinh và Lê Duy Trung. Năm 1825, ông đỗ Cử nhân; năm 1826 đỗ Tiến sĩ dưới triều Minh Mạng. Ông từng làm việc tại Viện Hàn lâm và đảm nhiệm một số chức vụ ở địa phương, trong đó có Giáo thụ phủ Thuận An và phụ trách việc học tại Bắc Ninh. Từ năm 1833, ông về dưỡng bệnh, mở trường Hồ Đình tại thôn Tự Tháp, bên hồ Hoàn Kiếm; năm 1838 được nghỉ hẳn. Những năm cuối đời, ông tiếp tục dạy học tại Kim Giang và qua đời năm 1851.",
  reforms: "• Mở trường Hồ Đình, đào tạo người học: Trường Hồ Đình, còn được gọi theo địa danh là trường Tự Tháp, là một địa chỉ giáo dục nổi tiếng của Thăng Long thế kỷ XIX. Tên gọi 'ông Nghè Tự Tháp' gắn với học vị và nơi dạy học của Vũ Tông Phan. Ông dành nhiều tâm sức cho việc truyền dạy kiến thức, hướng dẫn văn bài và rèn luyện học trò.\n• Đào tạo những môn sinh có đóng góp cho đất nước: Các học trò được tư liệu ghi nhận gồm Nguyễn Tư Giản, Lê Đình Diên, Nguyễn Huy Đức và Ngô Văn Dạng. Nhiều người tiếp tục làm quan, dạy học và tham gia đời sống văn hóa. Sự kính trọng của môn sinh được lưu lại trong văn tế, văn bia và việc dựng nhà thờ tưởng nhớ thầy.\n• Gắn giáo dục với hoạt động Hội Hướng thiện: Với vai trò Hội trưởng Hội Hướng thiện, ông cùng các sĩ phu tổ chức hoạt động văn hóa, khuyến thiện và đề cao việc tu dưỡng. Ông tham gia xây dựng Văn chỉ Thọ Xương, góp sức vào việc cải tạo chùa Ngọc Sơn thành đền thờ Văn Xương, tạo không gian sinh hoạt văn hóa cho giới trí thức và cộng đồng.\n• Để lại trước tác phục vụ học thuật: Những tác phẩm gắn với ông gồm 'Lỗ Am di cảo thi tập', 'Thăng Long hoài cổ thập tứ thủ' và 'Cổ văn hợp tuyển'. Ông còn soạn nhiều văn bia, trong đó có 'Ngọc Sơn Đế quân từ ký' năm 1843. Di sản này phản ánh sự gắn bó giữa dạy học, sáng tác và gìn giữ văn hiến.",
  legacy: "Vũ Tông Phan được ghi nhận là nhà giáo, nhà thơ và danh nhân văn hóa tiêu biểu của Thăng Long nửa đầu thế kỷ XIX. Trường Tự Tháp, các thế hệ môn sinh và hoạt động Hội Hướng thiện là những dấu ấn nổi bật trong sự nghiệp của ông. Niên đại 1800–1851 được các nghiên cứu đối chiếu văn bia và gia phả xác nhận, thay cho những mốc cũ còn xuất hiện trong một số tài liệu.",
  source: "Vũ Thế Khôi, 'Về thân thế và sự nghiệp Tiến sĩ Vũ Tông Phan', Tạp chí Hán Nôm, số 3 năm 1993; Lại Văn Hùng, 'Tìm hiểu thêm về sự nghiệp thơ văn Vũ Tông Phan (1800–1851)', Tạp chí Hán Nôm, số 5 năm 2005; Bảo tàng Lịch sử quốc gia, 'Vũ Tông Phan, danh nhân văn hóa, nhà giáo tiêu biểu của Thăng Long – Hà Nội', ngày 08/12/2017."
},
{
  id: 19,
  name: "Nhà giáo Cao Bá Quát",
  years: "1808/1809 – 1855",
  period: "phong_kien",
  subTheme: "Các nhà giáo thời phong kiến",
  title: "Nhà giáo, nhà thơ tài hoa – Người trí thức giàu bản lĩnh và tinh thần phản tỉnh",
  img: "assets/teachers/pk_19_cao_ba_quat.jpg",
  career: "Cao Bá Quát, tự Chu Thần, quê làng Phú Thị, huyện Gia Lâm, vùng Hà Nội ngày nay. Năm sinh của ông còn được ghi khác nhau: 1808 hoặc 1809; năm mất được dùng trong hồ sơ này là 1855. Ông nổi tiếng về tài văn chương, đỗ Cử nhân năm 1831 nhưng không đỗ đại khoa. Năm 1841, ông được bổ làm Hành tẩu Bộ Lễ. Trong thời gian tham gia chấm thi tại Thừa Thiên, ông liên quan đến việc sửa những bài thi phạm húy, bị bắt và xử phạt; sau được cử đi công cán ở nước ngoài. Trở về, ông tiếp tục có thời gian làm việc trong triều. Năm 1850, ông làm Giáo thụ phủ Quốc Oai, sau thôi chức. Ông tham gia cuộc khởi nghĩa Mỹ Lương chống triều Nguyễn và tử trận năm 1855.",
  reforms: "• Trực tiếp đảm nhiệm công việc giáo dục: Cao Bá Quát từng dạy học và giữ chức Giáo thụ phủ Quốc Oai. Đây là căn cứ cụ thể để giới thiệu ông trong lịch sử nhà giáo Việt Nam. Tuy nhiên, thời gian đảm nhiệm học chức không dài; không nên mô tả ông đã tổ chức một hệ thống trường học hoặc tiến hành cải cách giáo dục quy mô lớn.\n• Thể hiện sự trăn trở trước con đường khoa cử: Thơ văn của ông phản ánh những suy nghĩ về công danh, sự bế tắc của người trí thức và những giới hạn của lối tiến thân đương thời. 'Sa hành đoản ca' là tác phẩm tiêu biểu để tìm hiểu tâm trạng ấy. Giá trị giáo dục có thể rút ra là thái độ tự suy xét mục đích học tập và ý nghĩa của con đường mình lựa chọn.\n• Coi trọng năng lực văn chương thực chất: Vụ sửa bài thi năm 1841 thường được nhắc đến khi nói về thái độ của ông đối với những bài có nội dung tốt nhưng phạm quy. Cần trình bày đầy đủ rằng hành động này vi phạm phép trường thi và bị xử lý; không nên biến sự việc thành một cuộc cải cách thi cử đã được triều đình công nhận.\n• Để lại di sản thơ văn giàu sức suy ngẫm: Sáng tác của ông thể hiện tài năng ngôn ngữ, lòng tự trọng, sự cảm thông với cảnh ngộ con người và thái độ bất bình trước thực trạng xã hội. Những tác phẩm như 'Sa hành đoản ca', 'Dương phụ hành' góp phần làm nên vị trí của ông trong văn học Việt Nam thế kỷ XIX.",
  legacy: "Cao Bá Quát được ghi nhận trước hết là nhà thơ lớn, đồng thời là người từng trực tiếp dạy học và đảm nhiệm học chức. Cuộc đời nhiều thăng trầm cùng thơ văn của ông để lại bài học về bản lĩnh trí thức, sự tự vấn và trách nhiệm trước đời sống. Những giai thoại về tài năng, câu đối và lời nói của ông cần được phân biệt với sự kiện có chứng cứ. Không gọi ông là Tiến sĩ, vì học vị ông đạt được là Cử nhân.",
  source: "Bảo tàng Lịch sử quốc gia, 'Những người tuổi Tỵ lừng danh trong sử Việt'; Tạp chí Hán Nôm, 'Về bài Thi tiên trong thơ Thánh Quát', số 6 (91), năm 2008, tr. 71–76; Quốc phòng Thủ đô, 'Cuộc đời và sự nghiệp của Cao Bá Quát'. Lưu ý: nguồn nghiên cứu có khác biệt giữa năm sinh 1808 và 1809."
},
{
  id: 20,
  name: "Nhà giáo Nguyễn Đình Chiểu",
  years: "1822 – 1888",
  period: "phong_kien",
  subTheme: "Các nhà giáo thời phong kiến",
  title: "Người thầy giàu nghị lực – Nhà thơ yêu nước, thầy thuốc hết lòng vì dân",
  img: "assets/teachers/pk_20_nguyen_dinh_chieu.jpg",
  career: "Nguyễn Đình Chiểu sinh năm 1822, mất năm 1888, thường được gọi là Đồ Chiểu, hiệu Trọng Phủ và Hối Trai. Ông sinh tại làng Tân Thới, huyện Bình Dương, phủ Tân Bình, tỉnh Gia Định xưa. Năm 1843, ông đỗ Tú tài tại trường thi Gia Định. Sau đó, ông ra Huế tiếp tục học tập, nhưng khi được tin mẹ mất đã trở về chịu tang. Trên đường về, ông lâm bệnh nặng và mất thị lực. Vượt qua hoàn cảnh khó khăn, ông mở lớp dạy học, làm thuốc và sáng tác văn chương. Khi thực dân Pháp đánh chiếm Gia Định, ông cùng gia đình về Thanh Ba, Cần Giuộc, rồi chuyển đến Ba Tri. Tại những nơi sinh sống, ông tiếp tục dạy học, chữa bệnh và dùng thơ văn cổ vũ tinh thần yêu nước, không hợp tác với thực dân Pháp.",
  reforms: "• Kiên trì dạy học trong hoàn cảnh mất thị lực: Nguyễn Đình Chiểu tiếp tục lao động trí óc, truyền dạy kiến thức và chăm lo học trò dù không còn nhìn thấy. Hoạt động giáo dục của ông gắn với Gia Định, Cần Giuộc và Ba Tri. Tấm gương vượt khó của ông có ý nghĩa rõ nét trong lịch sử nhà giáo Việt Nam.\n• Dùng văn chương để truyền đạt đạo lý: 'Lục Vân Tiên' đề cao nhân nghĩa, lòng hiếu thảo, sự thủy chung và tinh thần giúp người gặp nạn. Thông qua câu chuyện và nhân vật, tác phẩm truyền tải những chuẩn mực ứng xử gần gũi với đời sống. Đây là giá trị giáo dục nổi bật trong di sản của ông, bên cạnh việc trực tiếp mở lớp dạy học.\n• Kết hợp dạy học với chữa bệnh: Ông vừa làm thầy giáo, vừa làm thầy thuốc, giúp đỡ người dân bằng tri thức và lòng nhân ái. Tác phẩm 'Ngư Tiều y thuật vấn đáp' kết hợp nội dung y học với những suy ngẫm về đạo đức, trách nhiệm và cách sống của người hành nghề.\n• Giáo dục lòng yêu nước bằng ngòi bút: 'Văn tế nghĩa sĩ Cần Giuộc', thơ điếu Trương Định và các tác phẩm yêu nước khác thể hiện sự trân trọng đối với những người chống ngoại xâm. Ông đưa hình ảnh người nông dân nghĩa sĩ vào văn học với niềm cảm phục sâu sắc, góp phần nuôi dưỡng ý thức trách nhiệm đối với đất nước.\n• Nêu gương về sự thống nhất giữa lời dạy và cách sống: Thái độ không hợp tác với thực dân Pháp, sự gắn bó với nhân dân cùng công việc dạy học, chữa bệnh thể hiện nhân cách của ông. Ảnh hưởng giáo dục của Đồ Chiểu vì vậy đến từ cả tác phẩm và cuộc đời.",
  legacy: "Nguyễn Đình Chiểu là nhà giáo, nhà thơ yêu nước và thầy thuốc tiêu biểu của Việt Nam thế kỷ XIX. Những tác phẩm nổi bật gồm 'Lục Vân Tiên', 'Dương Từ – Hà Mậu', 'Ngư Tiều y thuật vấn đáp' và 'Văn tế nghĩa sĩ Cần Giuộc'. Năm 2021, Đại hội đồng UNESCO khóa 41 thông qua việc cùng tham gia kỷ niệm 200 năm ngày sinh của ông vào năm 2022. Di sản của ông tiếp tục được trân trọng ở các giá trị nhân nghĩa, lòng yêu nước, nghị lực và tinh thần phục vụ cộng đồng.",
  source: "Thông tấn xã Việt Nam, hồ sơ nhân vật 'Nguyễn Đình Chiểu'; Cục Di sản văn hóa, 'Di tích lịch sử Mộ và Khu tưởng niệm Nguyễn Đình Chiểu'; Bộ Văn hóa, Thể thao và Du lịch, tư liệu về cuộc đời, hoạt động dạy học của Nguyễn Đình Chiểu tại Thanh Ba; Báo Điện tử Chính phủ, 'UNESCO vinh danh 2 Danh nhân văn hóa Việt Nam', ngày 26/11/2021."
},
{
  id: 21,
  name: "Tam nguyên Yên Đổ Nguyễn Khuyến",
  years: "1835 – 1909",
  period: "phong_kien",
  subTheme: "Các nhà giáo thời phong kiến",
  title: "Người thầy hiếu học, trọng nhân cách – Nhà thơ của làng quê Việt Nam",
  img: "assets/teachers/pk_21_nguyen_khuyen.jpg",
  career: "Nguyễn Khuyến sinh năm 1835, mất năm 1909, tên ban đầu là Nguyễn Thắng, tự Miễn Chi, hiệu Quế Sơn. Quê nội ông ở làng Và, xã Yên Đổ, huyện Bình Lục, vùng Hà Nam xưa. Xuất thân trong gia đình Nho học, ông sớm theo cha học tập, có thời gian dạy học để sinh sống và tiếp tục theo đuổi khoa cử. Năm 1864, ông đỗ đầu kỳ thi Hương trường Hà Nội; năm 1871, tiếp tục đỗ đầu thi Hội và thi Đình, được ban học vị Hoàng giáp. Do đứng đầu cả ba kỳ thi, ông được gọi là Tam nguyên Yên Đổ. Ông từng làm Đốc học Thanh Hóa và đảm nhiệm một số chức vụ trong triều đình, tại địa phương. Năm 1884, ông cáo quan về quê, tiếp tục dạy học, sáng tác và sống gắn bó với làng quê cho đến khi mất.",
  reforms: "• Nêu gương về nghị lực học tập: Con đường khoa cử của Nguyễn Khuyến trải qua nhiều lần chưa thành công trước khi đạt kết quả cao. Ông tiếp tục học tập trong hoàn cảnh gia đình khó khăn, không sớm từ bỏ chí hướng. Cuộc đời ấy là một tấm gương cụ thể về sự bền bỉ, tinh thần tự rèn luyện và ý chí vươn lên bằng học vấn.\n• Trực tiếp tham gia dạy học và quản lý giáo dục: Ông từng dạy học trước khi đỗ đại khoa, sau giữ chức Đốc học Thanh Hóa. Khi rời quan trường, ông tiếp tục có thời gian làm nghề dạy học. Vai trò nhà giáo của ông vì vậy được xác nhận bằng hoạt động thực tế, bên cạnh danh tiếng về khoa cử và thơ văn.\n• Coi trọng nhân cách hơn sự phô trương danh vị: Trong thơ văn, ông nhiều lần suy ngẫm về giá trị của đỗ đạt, trách nhiệm của người có học và khoảng cách giữa danh tiếng với đóng góp thực chất. Những tác phẩm như 'Tiến sĩ giấy' có thể được đọc như lời nhắc về việc học có nội dung, có năng lực, tránh chỉ chạy theo hình thức.\n• Dùng thơ văn để phê phán thói xấu và giữ gìn tình nghĩa: Sáng tác của ông vừa có giọng trào phúng sắc sảo, vừa thể hiện tình cảm đối với bạn bè, gia đình và người dân quê. Qua đó, người đọc nhận ra sự trân trọng đối với lối sống chân thành, giản dị và sự phê phán những biểu hiện giả dối, cơ hội.\n• Gìn giữ vẻ đẹp ngôn ngữ và đời sống làng quê: Những bài 'Thu điếu', 'Thu ẩm', 'Thu vịnh', 'Bạn đến chơi nhà' cho thấy khả năng sử dụng tiếng Việt tinh tế và tình cảm gắn bó với cảnh vật, con người. Di sản ấy trở thành nguồn học liệu có giá trị trong giáo dục văn học và bồi dưỡng tình yêu quê hương.",
  legacy: "Nguyễn Khuyến được ghi nhận là nhà thơ lớn, đồng thời là người từng dạy học và đảm nhiệm học chức. Ông để lại di sản thơ chữ Hán, chữ Nôm, nổi bật ở tình yêu làng quê, tình bạn, sự tự vấn của người trí thức và tiếng cười phê phán xã hội. Tên gọi 'Tam nguyên Yên Đổ' ghi nhận thành tích đứng đầu ba kỳ thi; học vị chính xác của ông là Hoàng giáp, không phải Trạng nguyên. Cuộc đời và tác phẩm của ông tiếp tục có ý nghĩa giáo dục về sự hiếu học, lòng tự trọng và trách nhiệm của người có tri thức.",
  source: "Ủy ban Nhà nước về người Việt Nam ở nước ngoài – Bộ Ngoại giao, 'Nguyễn Khuyến (1835–1909)'; Trường THPT Nguyễn Khuyến, thành phố Đà Nẵng, 'Tiểu sử Nguyễn Khuyến (1835–1909)'; tư liệu 'Địa chí huyện Bình Lục: Giáo dục – Đào tạo và Y tế'; Nguyễn Thế Nữu, 'Nhân kỷ niệm 100 năm bài thơ Trị mệnh của Nguyễn Khuyến', Tạp chí Hán Nôm, số 2 (93), năm 2009."
},
{
  id: 23,
  name: "Thầy giáo Lương Văn Can",
  years: "1854 – 1927",
  period: "dau_tk20_1945",
  subTheme: "Gieo mầm phong trào Duy Tân & Yêu nước",
  title: "Thục trưởng Đông Kinh Nghĩa Thục – Người cổ vũ thực học và đạo đức kinh doanh",
  img: "assets/teachers/dt_23_luong_van_can.jpg",
  career: "Lương Văn Can, còn có tên Lương Ngọc Can, tự Ôn Như, hiệu Sơn Lão, sinh năm 1854, mất năm 1927, quê làng Nhị Khê, vùng Thường Tín, Hà Nội. Năm 1874, ông đỗ Cử nhân, thường được gọi là cụ Cử Can. Ông không nhận chức quan được bổ, về dạy học; năm 1879 mở trường tại nơi ở trên phố Hàng Đào. Tháng 3 năm 1907, ông cùng Nguyễn Quyền và các đồng chí sáng lập Đông Kinh Nghĩa Thục ở Hà Nội, đảm nhiệm vai trò Thục trưởng. Sau khi trường bị buộc đóng cửa cuối năm 1907, ông tiếp tục chịu sự theo dõi của chính quyền thực dân. Năm 1913, ông bị bắt và đày sang Nam Vang, Campuchia. Năm 1921 trở về Hà Nội, ông tiếp tục mở trường Ôn Như, dạy học và soạn sách cho đến những năm cuối đời.",
  reforms: "• Cùng sáng lập và điều hành Đông Kinh Nghĩa Thục: Với cương vị Thục trưởng, Lương Văn Can góp phần tổ chức một mô hình giáo dục mới, không thu học phí, vận động sự đóng góp của cộng đồng. Nhà trường kết hợp giảng dạy, biên soạn tài liệu và diễn thuyết nhằm mở mang dân trí.\n• Góp phần phổ biến chữ Quốc ngữ: Đông Kinh Nghĩa Thục coi chữ Quốc ngữ là phương tiện quan trọng để mở rộng việc học. Đây là chủ trương chung của nhà trường, gắn với sự đóng góp của nhiều giáo viên và nhân sĩ, trong đó Lương Văn Can giữ vai trò lãnh đạo.\n• Cổ vũ học tập thiết thực: Nhà trường hướng đến những hiểu biết có ích cho đời sống, bổ sung kiến thức phổ thông và khuyến khích thực nghiệp. Việc học được đặt trong mối quan hệ với trách nhiệm đối với cộng đồng, thay vì chỉ nhằm đỗ đạt và làm quan.\n• Truyền dạy đạo làm người và đạo kinh doanh: Qua 'Kim cổ cách ngôn' và 'Thương học phương châm', ông đề cập đến phẩm hạnh, sự cần kiệm, lòng trung thực và trách nhiệm trong hoạt động làm ăn. Những tác phẩm này thể hiện sự quan tâm đến cả giáo dục nhân cách và năng lực sinh kế.\n• Tiếp tục dạy học sau thời gian lưu đày: Khi trở về Hà Nội, ông tiếp tục mở trường và biên soạn sách. Sự bền bỉ ấy cho thấy giáo dục là công việc gắn bó lâu dài trong cuộc đời ông.",
  legacy: "Lương Văn Can là nhà giáo, nhà yêu nước tiêu biểu trong phong trào đổi mới giáo dục đầu thế kỷ XX. Đóng góp nổi bật của ông gắn với vai trò Thục trưởng Đông Kinh Nghĩa Thục và các trước tác bàn về đạo đức, học tập, kinh doanh. Di sản của ông thể hiện sự kết nối giữa mở mang tri thức, bồi dưỡng nhân cách và khuyến khích người Việt tự cường về kinh tế.",
  source: "Báo Quân đội nhân dân, 'Lương Văn Can, nhà Nho yêu nước thương nòi', ngày 08/3/2014; Bộ Văn hóa, Thể thao và Du lịch, 'Giới thiệu 2 cuốn sách về những câu chuyện đạo đức, lối sống, cách làm ăn kinh tế và doanh nhân Việt Nam thời trước', ngày 27/10/2025; Bảo tàng Lịch sử quốc gia, 'Đông Kinh Nghĩa Thục và tư tưởng cải cách giáo dục', ngày 23/9/2012; Thư viện Quốc gia Việt Nam, thư mục 'Thương học phương châm & Kim cổ cách ngôn'."
},
{
  id: 24,
  name: "Thầy giáo Nguyễn Quyền",
  years: "1869 – 1941",
  period: "dau_tk20_1945",
  subTheme: "Gieo mầm phong trào Duy Tân & Yêu nước",
  title: "Giám học Đông Kinh Nghĩa Thục – Người thầy nhiệt thành với công cuộc khai dân trí",
  img: "assets/teachers/dt_24_nguyen_quyen.jpg",
  career: "Nguyễn Quyền, hiệu Đông Đường, sinh năm 1869, mất năm 1941, quê làng Thượng Trì, vùng Thuận Thành, Bắc Ninh. Ông đỗ Tú tài năm 1891, từng làm Huấn đạo tại Lạng Sơn nên thường được gọi là Huấn Quyền. Đầu thế kỷ XX, ông rời học chức để tham gia hoạt động yêu nước. Năm 1907, ông cùng Lương Văn Can và các đồng chí sáng lập Đông Kinh Nghĩa Thục tại Hà Nội, giữ vai trò Giám học, tham gia giảng dạy và tổ chức hoạt động của nhà trường. Sau khi phong trào bị đàn áp, ông bị bắt năm 1908, bị kết án và đày ra Côn Đảo. Về sau, ông bị buộc an trí tại Bến Tre, sống nhiều năm ở Nam Bộ và mất tại Sa Đéc năm 1941.",
  reforms: "• Tham gia tổ chức Đông Kinh Nghĩa Thục: Nguyễn Quyền là một trong những nhân vật chủ chốt của trường, đảm nhiệm vai trò Giám học. Ông góp sức vào công việc giảng dạy, tổ chức và vận động duy trì hoạt động của nghĩa thục.\n• Truyền bá tinh thần đổi mới việc học: Ông cùng các đồng chí cổ vũ sử dụng chữ Quốc ngữ, tiếp cận tri thức mới và hướng việc học đến những nhu cầu của đất nước. Hoạt động này thuộc chương trình chung của Đông Kinh Nghĩa Thục, không phải một hệ thống cải cách do riêng ông xây dựng.\n• Kết hợp giáo dục với tuyên truyền, cổ động: Tác phẩm 'Phen này cắt tóc đi tu' sử dụng hình thức thơ dễ nhớ để chuyển tải mong muốn mở mang dân trí và làm cho đất nước tiến bộ. Lối diễn đạt gần gũi giúp tư tưởng duy tân vượt ra ngoài phạm vi lớp học.\n• Gắn khai trí với thực nghiệp: Ông tham gia tổ chức hãng buôn Hồng Tân Hưng, hướng đến việc khuyến khích hàng hóa trong nước và tạo nguồn hỗ trợ hoạt động. Đây là biểu hiện của quan niệm kết hợp nâng cao hiểu biết với tự cường kinh tế.",
  legacy: "Nguyễn Quyền được ghi nhận là nhà giáo, nhà yêu nước và Giám học của Đông Kinh Nghĩa Thục. Đóng góp của ông nổi bật ở sự kết hợp giữa dạy học, tổ chức nhà trường và vận động xã hội. Cuộc đời trải qua tù đày nhưng vẫn gắn với chí hướng phụng sự đất nước để lại dấu ấn trong lịch sử giáo dục và phong trào yêu nước đầu thế kỷ XX.",
  source: "Nguyễn Thanh Tùng, 'Nguyễn Quyền – nhà trí sĩ một đời vì nước', Người Hà Nội, ngày 15/11/2023, dẫn tư liệu 'Danh nhân Thăng Long – Hà Nội'; Bảo tàng Lịch sử quốc gia, '130 năm thăng trầm chữ Việt – Kỳ 6: Ngọn lửa Đông Kinh nghĩa thục'; Lê Minh Quốc, 'Kể chuyện danh nhân Việt Nam – Tập 9: Danh nhân sư phạm', mục Nguyễn Quyền; tư liệu 'Huyền thoại Côn Đảo'."
},
{
  id: 25,
  name: "Tiến sĩ Trần Quý Cáp",
  years: "1870 – 1908",
  period: "dau_tk20_1945",
  subTheme: "Gieo mầm phong trào Duy Tân & Yêu nước",
  title: "Người thầy cổ vũ tân học – Chí sĩ tiên phong của phong trào Duy Tân",
  img: "assets/teachers/dt_25_tran_quy_cap.jpg",
  career: "Trần Quý Cáp sinh năm 1870, mất năm 1908, tên ban đầu là Trần Nghị, tự Dã Hàng, còn có tự Thích Phu, hiệu Thai Xuyên. Ông quê làng Bất Nhị, vùng Điện Bàn, Quảng Nam, xuất thân trong gia đình làm nông, nổi tiếng hiếu học và là học trò của Đốc học Trần Đình Phong. Năm 1904, ông đỗ Tiến sĩ. Ông cùng Phan Châu Trinh, Huỳnh Thúc Kháng tham gia khởi xướng phong trào Duy Tân, coi mở mang dân trí là một nhiệm vụ quan trọng. Năm 1906, ông được bổ làm Giáo thụ phủ Thăng Bình. Cuối năm 1907, triều đình có văn bản đổi ông vào làm Giáo thụ phủ Ninh Hòa, Khánh Hòa. Năm 1908, trong đợt đàn áp phong trào chống sưu thuế và các hoạt động duy tân, ông bị bắt, kết án và xử tử tại Khánh Hòa.",
  reforms: "• Trực tiếp dạy học, bồi dưỡng người học: Trước và sau khi đỗ Tiến sĩ, Trần Quý Cáp đều gắn bó với nghề dạy học. Uy tín của ông được ghi nhận qua sự kính trọng của môn sinh và những lời tưởng niệm của Huỳnh Thúc Kháng.\n• Đưa nội dung tân học vào trường: Khi làm Giáo thụ Thăng Bình, ông mời người biết chữ Quốc ngữ và chữ Pháp đến dạy. Tư liệu Châu bản được cơ quan lưu trữ giới thiệu là căn cứ quan trọng xác nhận hoạt động đổi mới giáo dục này.\n• Cổ vũ thay đổi mục đích học tập: Ông phản đối việc chỉ học văn chương để cầu khoa danh, khuyến khích tiếp nhận tri thức có ích cho đời sống. Việc học được đặt trong công cuộc nâng cao dân trí, cải biến xã hội và làm cho đất nước tự cường.\n• Dùng diễn thuyết và văn chương vận động duy tân: Năm 1905, ông cùng Phan Châu Trinh và Huỳnh Thúc Kháng đi vào các tỉnh phía Nam, tìm hiểu tình hình và truyền bá tư tưởng mới. Bài phú 'Lương ngọc danh sơn', do ông cùng Huỳnh Thúc Kháng thực hiện, là một dấu ấn trong việc phê phán lối học cử nghiệp.\n• Gắn giáo dục với cải thiện dân sinh: Ông tham gia cổ vũ mở trường, lập hội buôn, hội nông và thay đổi những tập quán không còn phù hợp. Những hoạt động này cho thấy giáo dục trong tư tưởng duy tân gắn với đời sống kinh tế, văn hóa và trách nhiệm xã hội.",
  legacy: "Trần Quý Cáp là nhà giáo, chí sĩ tiêu biểu của phong trào Duy Tân đầu thế kỷ XX. Đóng góp nổi bật của ông là kết hợp việc trực tiếp dạy học với vận động tân học, phổ biến chữ Quốc ngữ và khuyến khích tiếp nhận kiến thức mới. Sự hy sinh năm 1908 trở thành dấu mốc đau thương trong lịch sử phong trào. Châu bản về việc bổ nhiệm, thuyên chuyển và xử án ông là những tư liệu quan trọng để nghiên cứu cuộc đời người thầy yêu nước này.",
  source: "Trung tâm Lưu trữ quốc gia I, 'Chí sĩ Trần Quý Cáp – người thầy khai dân trí, chấn dân khí truyền lửa yêu nước', ngày 19/11/2021, giới thiệu Châu bản triều Nguyễn; Bảo tàng Lịch sử quốc gia, bài cùng tên, ngày 10/02/2022; Bảo tàng Lịch sử quốc gia, 'Trần Quí Cáp – Một nhà cách mạng dân quyền', ngày 27/11/2013."
},
{
  id: 26,
  name: "Nguyễn Tất Thành – Hồ Chí Minh",
  years: "1890 – 1969",
  period: "dau_tk20_1945",
  subTheme: "Gieo mầm phong trào Duy Tân & Yêu nước",
  title: "Từ thầy giáo Dục Thanh đến người đặt nền móng cho nền giáo dục Việt Nam mới",
  img: "assets/teachers/dt_26_nguyen_tat_thanh.jpg",
  career: "Chủ tịch Hồ Chí Minh sinh năm 1890, mất năm 1969, quê Nghệ An; tên lúc nhỏ là Nguyễn Sinh Cung, sau đổi thành Nguyễn Tất Thành. Trước khi ra đi tìm đường cứu nước, Người có thời gian dạy học tại Trường Dục Thanh, Phan Thiết, vào cuối năm 1910 và đầu năm 1911. Khoảng tháng 2 năm 1911, Nguyễn Tất Thành rời trường vào Sài Gòn; ngày 5/6/1911 ra đi tìm đường cứu nước. Trong quá trình hoạt động cách mạng, với tên Nguyễn Ái Quốc, Người trực tiếp tổ chức các lớp huấn luyện, đào tạo thanh niên Việt Nam yêu nước tại Quảng Châu. Sau Cách mạng tháng Tám năm 1945, trên cương vị Chủ tịch nước, Người đặc biệt quan tâm đến việc chống nạn mù chữ và xây dựng nền giáo dục mới.",
  reforms: "• Trực tiếp dạy học tại Trường Dục Thanh: Nguyễn Tất Thành tận tâm với học sinh, quan tâm đến cả việc học tập và sinh hoạt. Theo biên niên tiểu sử, thầy Thành phụ trách thể dục buổi sáng, chăm lo tủ sách, hướng dẫn học sinh tham quan cảnh vật trong vùng và phổ biến những bài thơ ca yêu nước.\n• Kết hợp truyền dạy kiến thức với bồi dưỡng lòng yêu nước: Những hoạt động ở Dục Thanh cho thấy việc giáo dục không chỉ diễn ra trong giờ học mà còn thông qua đọc sách, rèn luyện thân thể và tiếp xúc với đời sống. Hình ảnh người thầy gần gũi, tận tụy được lưu lại trong hồi ức của học sinh.\n• Tổ chức đào tạo thanh niên cách mạng: Tại Quảng Châu từ năm 1925, Nguyễn Ái Quốc trực tiếp phụ trách và giảng dạy các lớp huấn luyện chính trị. Nội dung gồm tình hình cách mạng, phương pháp tổ chức và vận động quần chúng. Học viên được chia tổ thảo luận, nhắc lại và bổ sung những điều đã học nhằm nắm vững nội dung.\n• Đặt nhiệm vụ chống nạn mù chữ trong những công việc cấp bách: Ngay sau ngày độc lập năm 1945, Người đề nghị phát động chiến dịch chống nạn mù chữ. Trong thư gửi học sinh nhân năm học đầu tiên của nước Việt Nam Dân chủ Cộng hòa, Người nêu yêu cầu xây dựng nền giáo dục Việt Nam, phát triển năng lực của người học và đào tạo công dân có ích.",
  legacy: "Dấu ấn giáo dục của Hồ Chí Minh trải từ thời gian trực tiếp dạy học tại Dục Thanh, tổ chức huấn luyện cán bộ đến việc lãnh đạo xây dựng nền giáo dục sau năm 1945. Tinh thần chăm lo con người, mở rộng cơ hội học tập và gắn kiến thức với trách nhiệm đối với đất nước là những nội dung nổi bật. Di tích Trường Dục Thanh tiếp tục lưu giữ ký ức về thời gian Người làm thầy giáo trước khi ra đi tìm đường cứu nước.",
  source: "Hồ Chí Minh – Biên niên tiểu sử, tập 1, mục năm 1910–1911, đăng trên hệ thống Tư liệu – Văn kiện Đảng; Bảo tàng Hồ Chí Minh, giới thiệu Bảo tàng Hồ Chí Minh – Chi nhánh Bình Thuận; Bảo tàng Hồ Chí Minh, biên niên sự kiện Nguyễn Ái Quốc mở lớp huấn luyện chính trị tại Quảng Châu năm 1925; Viện Sử học, 'Cách mạng tháng Tám năm 1945 – Dấu mốc quan trọng mở ra kỷ nguyên mới của nền giáo dục Việt Nam'."
},

{
  id: 29,
  name: "Nhà giáo Dương Quảng Hàm",
  years: "1898 – 1946",
  period: "dau_tk20_1945",
  subTheme: "Gieo mầm phong trào Duy Tân & Yêu nước",
  title: "Người thầy Trường Bưởi – Học giả góp phần xây dựng môn văn học sử Việt Nam",
  img: "assets/teachers/dt_29_duong_quang_ham.jpg",
  career: "Dương Quảng Hàm, hiệu Hải Lượng, sinh năm 1898, mất năm 1946, quê làng Phú Thị, vùng Mễ Sở, Văn Giang, Hưng Yên. Ông xuất thân trong gia đình có truyền thống Nho học và hoạt động văn hóa. Năm 1920, ông tốt nghiệp thủ khoa Trường Cao đẳng Sư phạm Đông Dương, sau giảng dạy tại Trường Trung học Bảo hộ, thường gọi là Trường Bưởi. Ban đầu ông dạy tiếng Việt, tiếng Pháp, lịch sử và địa lý; về sau tập trung vào Việt văn. Sau Cách mạng tháng Tám năm 1945, ông được giao công việc thanh tra trung học, rồi làm Hiệu trưởng Trường Chu Văn An. Ông mất trong những ngày đầu Toàn quốc kháng chiến tại Hà Nội, tháng 12 năm 1946.",
  reforms: "• Gắn giảng dạy với biên soạn học liệu: Từ thực tế đứng lớp, Dương Quảng Hàm biên soạn văn tuyển và sách giáo khoa nhằm cung cấp cho học sinh tài liệu học tập có hệ thống. Hoạt động nhà giáo và công việc nghiên cứu văn học gắn bó chặt chẽ trong sự nghiệp của ông.\n• Biên soạn 'Việt Nam văn học sử yếu': Công trình xuất bản lần đầu năm 1943, hướng đến nhu cầu học Việt văn ở bậc trung học. Sách trình bày tiến trình văn học Việt Nam, giới thiệu tác giả, tác phẩm và những điều kiện văn hóa có liên quan. Đây là một trong những công trình nền tảng của việc nghiên cứu, giảng dạy văn học sử bằng chữ Quốc ngữ.\n• Kết hợp văn học sử với văn bản tuyển chọn: 'Việt Nam thi văn hợp tuyển' cung cấp tác phẩm để người học tiếp xúc trực tiếp với văn chương, bổ sung cho phần kiến thức khái quát. Cách tổ chức này giúp việc học văn có cả nội dung lịch sử và cơ sở văn bản.\n• Tiếp cận văn học bằng phương pháp khảo cứu: Ông chú ý đến nguồn gốc, văn tự, thể loại, ảnh hưởng văn hóa và quá trình phát triển của văn học. Các công trình thể hiện nỗ lực kết hợp vốn Hán học với phương pháp học thuật mới.\n• Góp phần khẳng định giá trị văn học dân tộc: Trong bối cảnh giáo dục thuộc địa, việc biên soạn tài liệu về văn học Việt Nam bằng tiếng Việt giúp học sinh tiếp cận thành tựu văn chương của đất nước và hiểu rõ hơn truyền thống văn hóa.",
  legacy: "Dương Quảng Hàm được ghi nhận là nhà giáo tận tụy và một trong những học giả có đóng góp quan trọng cho ngành văn học sử Việt Nam hiện đại. 'Việt Nam văn học sử yếu' và 'Việt Nam thi văn hợp tuyển' tiếp tục có giá trị tư liệu trong nghiên cứu lịch sử giáo dục, lịch sử nghiên cứu văn học. Khi sử dụng, cần đối chiếu những nhận định của sách với các kết quả nghiên cứu về sau.",
  source: "Cổng thông tin điện tử tỉnh Hưng Yên, 'Dương Quảng Hàm (1898–1946)'; chuyên trang Thông tin đối ngoại Hưng Yên, bài về Dương Quảng Hàm; Dương Quảng Hàm, 'Việt Nam văn học sử yếu', bản số hóa tại Thư viện Lâm Đồng; Viện Nghiên cứu Hán Nôm, các nghiên cứu dẫn bản xuất bản năm 1943."
},
{
  id: 31,
  name: "Thầy giáo Võ Nguyên Giáp",
  years: "1911 – 2013",
  period: "dau_tk20_1945",
  subTheme: "Gieo mầm phong trào Duy Tân & Yêu nước",
  title: "Người thầy dạy sử ở Trường Thăng Long – Đại tướng của Quân đội nhân dân Việt Nam",
  img: "assets/teachers/dt_31_vo_nguyen_giap.jpg",
  career: "Võ Nguyên Giáp sinh năm 1911, mất năm 2013, quê Lệ Thủy, Quảng Bình. Trước khi trở thành nhà lãnh đạo quân sự, ông có thời gian làm giáo viên tại Trường tư thục Thăng Long, Hà Nội. Theo tư liệu và hồi ức được Báo Quân đội nhân dân giới thiệu, ông dạy tại trường từ tháng 9 năm 1935 đến tháng 5 năm 1940. Ông giảng dạy lịch sử, đồng thời có thời gian dạy địa lý và Pháp văn; ở bậc tú tài, ông dạy lịch sử. Trong thời gian làm giáo viên, ông còn viết báo và tham gia hoạt động cách mạng. Tháng 5 năm 1940, ông rời trường để thực hiện nhiệm vụ được giao. Về sau, ông trở thành Đại tướng, Bộ trưởng Bộ Quốc phòng, Tổng Tư lệnh Quân đội nhân dân Việt Nam.",
  reforms: "• Chuẩn bị và giảng dạy lịch sử một cách sinh động: Qua hồi ức học trò, những bài giảng của thầy Giáp để lại ấn tượng về sự am hiểu, nhiệt tình và khả năng làm sống lại sự kiện. Ông không chỉ trình bày diễn biến mà còn đặt câu hỏi để học sinh suy nghĩ về nguyên nhân và kết quả.\n• Bồi dưỡng ý thức dân tộc qua môn lịch sử: Khi nói về những nhân vật và cuộc chiến đấu bảo vệ đất nước, ông giúp học sinh hiểu truyền thống dân tộc và hoàn cảnh mất nước. Những nội dung ấy có ảnh hưởng đến nhận thức, tình cảm của nhiều học trò.\n• Kết hợp bài học với địa điểm lịch sử: Theo lời kể của học sinh cũ, ông từng đưa học trò đến những địa điểm gắn với các trận chống Pháp ở Hà Nội, giải thích sự kiện ngay tại nơi diễn ra. Cách tổ chức này giúp kiến thức lịch sử trở nên cụ thể và gần gũi.\n• Duy trì tình nghĩa thầy trò: Dù thời gian đứng lớp chỉ khoảng năm năm, ông vẫn giữ mối liên hệ với nhiều học sinh cũ. Những cuộc gặp gỡ về sau và hồi ức của môn sinh lưu lại hình ảnh người thầy tận tâm, có ảnh hưởng lâu dài.\n• Tiếp tục hoạt động giáo dục trong công tác cách mạng: Sau khi rời trường, ông tham gia xây dựng cơ sở, tổ chức các lớp huấn luyện và đào tạo lực lượng. Đây là sự tiếp nối hoạt động truyền dạy trong một môi trường khác, cần phân biệt với giai đoạn làm giáo viên phổ thông tại Trường Thăng Long.",
  legacy: "Võ Nguyên Giáp được biết đến với những đóng góp lớn về quân sự và cách mạng, đồng thời có một giai đoạn làm nhà giáo được học trò ghi nhớ. Trong hồ sơ lịch sử giáo dục, dấu ấn nổi bật của ông là những năm dạy sử tại Trường Thăng Long, cách gắn bài học với sự kiện và tinh thần trách nhiệm đối với học sinh. Không nên từ thành tựu quân sự về sau suy diễn rằng ông đã xây dựng một học thuyết sư phạm riêng khi còn đứng lớp.",
  source: "Báo Quân đội nhân dân, 'Đại tướng Võ Nguyên Giáp – Thời trẻ', mục Thầy giáo Trường Thăng Long, tháng 9/1935–5/1940; Báo Quân đội nhân dân Cuối tuần, 'Có lẽ tôi vẫn là một thầy giáo'; tư liệu 'Võ Nguyên Giáp qua lời kể của những người thân'; Thông cáo đặc biệt về việc Đại tướng Võ Nguyên Giáp từ trần."
},
{
  id: 32,
  name: "NGND. Nguyễn Lân",
  years: "1906 – 2003",
  period: "khang_chien_1945_1975",
  subTheme: "Giáo dục thời kỳ kháng chiến 1945 - 1975",
  title: "Người thầy của ngành sư phạm – Chủ nhiệm đầu tiên Khoa Tâm lý – Giáo dục học, Đại học Sư phạm Hà Nội",
  img: "assets/teachers/kc_32_nguyen_lan.jpg",
  career: "Nguyễn Lân sinh năm 1906, mất năm 2003, bút danh Từ Ngọc. Ông tốt nghiệp Trường Cao đẳng Sư phạm Đông Dương năm 1932, có nhiều năm giảng dạy và biên soạn sách. Trong kháng chiến, ông tham gia đào tạo tại Trường Sư phạm cao cấp ở Khu học xá Trung ương, Nam Ninh, Trung Quốc. Năm 1956, ông về công tác tại Đại học Sư phạm Hà Nội, phụ trách hoạt động giáo dục học. Năm 1958, khi tổ Giáo dục – Tâm lý học được hình thành, ông được cử làm Chủ nhiệm bộ môn. Năm 1965, Khoa Tâm lý – Giáo dục chính thức thành lập, ông là Chủ nhiệm khoa đầu tiên.",
  reforms: "• Góp phần xây dựng ngành giáo dục học: Ông tham gia hình thành đội ngũ, tổ chức giảng dạy và phát triển đơn vị chuyên môn về tâm lý, giáo dục tại Đại học Sư phạm Hà Nội.\n• Đào tạo nghiệp vụ cho giáo viên: Công việc của ông gắn với giảng dạy giáo dục học và tổ chức thực tập sư phạm, giúp sinh viên chuẩn bị cho nghề dạy học bên cạnh kiến thức chuyên ngành.\n• Biên soạn tài liệu giáo dục: Ông có nhiều công trình phục vụ đào tạo người thầy, góp phần xây dựng nguồn học liệu cho ngành sư phạm trong giai đoạn còn thiếu sách và cán bộ.\n• Tham gia nghiên cứu, biên soạn từ điển: Ngoài giáo dục học, ông còn hoạt động trong lĩnh vực ngôn ngữ và từ điển. Các công trình cần được sử dụng cùng sự đối chiếu, trao đổi học thuật như những nguồn tham khảo khác.\n• Duy trì hoạt động khuyến học: Sau khi nghỉ công tác, ông tiếp tục viết sách và tham gia các hoạt động xã hội liên quan đến giáo dục, khuyến khích việc học tập.",
  legacy: "Nguyễn Lân được phong tặng danh hiệu Nhà giáo Nhân dân năm 1989 và được trao Giải thưởng Nhà nước năm 2001 cho cụm công trình giáo dục học và từ điển tiếng Việt. Đóng góp nổi bật của ông là xây dựng chuyên ngành, đào tạo giáo viên và biên soạn học liệu. Cần phân biệt mốc bắt đầu công tác năm 1956 với mốc thành lập khoa năm 1965.",
  source: "Trường Đại học Sư phạm Hà Nội, 'Hội thảo khoa học NGND.GS Nguyễn Lân – Cuộc đời và sự nghiệp', năm 2013; tư liệu 'Tiền thân của Khoa Tâm lý – Giáo dục'; Đại học Sư phạm Hà Nội, bài giới thiệu nhà giáo Nguyễn Lân nhân việc đặt tên phố."
},

{
  id: 33,
  name: "GS. BS. Hồ Đắc Di",
  years: "1900 – 1984",
  period: "khang_chien_1945_1975",
  subTheme: "Giáo dục thời kỳ kháng chiến 1945 - 1975",
  title: "Bậc danh sư y khoa – Hiệu trưởng người Việt đầu tiên của Trường Y sau Cách mạng tháng Tám",
  img: "assets/teachers/kc_32_ho_dac_di.jpg",
  career: "Hồ Đắc Di sinh năm 1900, mất năm 1984, quê làng An Truyền, vùng Phú Vang, Thừa Thiên Huế. Ông sang Pháp học y khoa, sau trở về nước làm bác sĩ và giảng dạy tại Trường Y ở Hà Nội, đồng thời phẫu thuật tại Bệnh viện Phủ Doãn. Sau Cách mạng tháng Tám năm 1945, ông được giao nhiều trọng trách trong lĩnh vực y tế và đại học. Theo lịch sử lãnh đạo của Đại học Y Hà Nội, ông đứng đầu nhà trường trong giai đoạn 1945–1976. Trong kháng chiến chống Pháp, ông cùng các đồng nghiệp tổ chức duy trì đào tạo y khoa tại Việt Bắc. Sau ngày hòa bình lập lại, ông tiếp tục lãnh đạo, giảng dạy và xây dựng đội ngũ cán bộ y tế.",
  reforms: "• Duy trì đào tạo y khoa trong kháng chiến: Ông cùng tập thể giảng viên tổ chức trường lớp trong điều kiện thiếu thốn, phải nhiều lần di chuyển địa điểm. Việc đào tạo được duy trì nhằm đáp ứng nhu cầu bác sĩ, cán bộ y tế phục vụ kháng chiến và nhân dân.\n• Gắn nhà trường với bệnh viện: Xuất thân là bác sĩ phẫu thuật, ông kết hợp giảng dạy với công việc khám chữa bệnh, coi thực hành lâm sàng là bộ phận quan trọng của quá trình đào tạo. Hoạt động của ông thể hiện sự gắn bó giữa kiến thức, kỹ năng và trách nhiệm đối với người bệnh.\n• Bồi dưỡng đội ngũ giảng viên, bác sĩ: Ông có công đào tạo và dìu dắt nhiều thế hệ cán bộ y khoa. Tôn Thất Tùng là người học trò, cộng sự tiêu biểu, về sau tiếp tục đóng góp cho nhà trường và ngành ngoại khoa.\n• Nêu gương về trách nhiệm của người thầy thuốc: Sự nghiệp của ông gắn với việc truyền dạy chuyên môn và xây dựng tinh thần tận tụy phục vụ người bệnh. Vai trò người thầy được thể hiện qua giảng dạy, nghiên cứu, quản lý và cách ứng xử trong nghề.",
  legacy: "Hồ Đắc Di là một trong những nhân vật có công lớn xây dựng nền đào tạo y khoa Việt Nam sau năm 1945. Di sản nổi bật của ông là sự bền bỉ duy trì nhà trường trong chiến tranh, xây dựng đội ngũ và kết nối đào tạo với thực hành y tế. Khi giới thiệu cần ghi rõ ông là Hiệu trưởng người Việt đầu tiên sau Cách mạng tháng Tám, tránh hiểu là người đứng đầu đầu tiên kể từ khi Trường Y được thành lập năm 1902.",
  source: "Trường Đại học Y Hà Nội, 'Danh sách lãnh đạo qua các thời kỳ'; Thông tấn xã Việt Nam, hồ sơ 'Hồ Đắc Di (1900–1984)'; Thông tấn xã Việt Nam, 'Những danh y, thầy thuốc nổi tiếng trong lịch sử y học Việt Nam'; Viện Sốt rét – Ký sinh trùng – Côn trùng Quy Nhơn, tư liệu về Hồ Đắc Di."
},
{
  id: 34,
  name: "GS. Lê Văn Thiêm",
  years: "1918 – 1991",
  period: "khang_chien_1945_1975",
  subTheme: "Giáo dục thời kỳ kháng chiến 1945 - 1975",
  title: "Người tiên phong xây dựng nền toán học Việt Nam – Viện trưởng đầu tiên của Viện Toán học",
  img: "assets/teachers/kc_34_le_van_thiem.jpg",
  career: "Lê Văn Thiêm sinh năm 1918, mất năm 1991, quê Trung Lễ, Đức Thọ, Hà Tĩnh. Ông học tập tại châu Âu, bảo vệ luận án tiến sĩ toán học ở Göttingen năm 1945, sau tiếp tục nghiên cứu tại Pháp và bảo vệ tiến sĩ quốc gia về toán năm 1948. Cuối năm 1949, ông trở về nước tham gia kháng chiến và xây dựng nền giáo dục đại học. Ông có nhiều đóng góp trong đào tạo khoa học cơ bản, giảng dạy toán và xây dựng Đại học Tổng hợp Hà Nội. Năm 1970, ông được giao làm Phó Viện trưởng phụ trách Viện Toán học; năm 1975 được bổ nhiệm làm Viện trưởng, giữ chức vụ đến năm 1980.",
  reforms: "• Xây dựng đào tạo toán học hiện đại: Ông tham gia tổ chức các cơ sở đào tạo khoa học cơ bản và đại học, trực tiếp giảng dạy, viết và dịch giáo trình, góp phần chuẩn bị đội ngũ giảng viên, nhà nghiên cứu toán học.\n• Đặt nền móng cho Viện Toán học: Ông cùng các nhà khoa học xây dựng định hướng phát triển, tuyển chọn cán bộ và tổ chức hoạt động của viện trong những năm đầu. Công việc kết hợp nghiên cứu cơ bản, ứng dụng và đào tạo.\n• Dìu dắt thế hệ nghiên cứu trẻ: Ông quan tâm phát hiện sinh viên có năng lực, tạo điều kiện học tập và nghiên cứu nâng cao. Sự phát triển đội ngũ được xem là nhiệm vụ lâu dài của nền toán học trong nước.\n• Gắn toán học với nhu cầu thực tiễn: Bên cạnh nghiên cứu hàm biến phức, ông quan tâm đến ứng dụng toán học và việc đưa kiến thức khoa học phục vụ những yêu cầu của đất nước.\n• Góp sức phát triển môi trường học toán: Ông là một trong những người tham gia xây dựng các lớp chuyên Toán và tạp chí 'Toán học và Tuổi trẻ', mở thêm điều kiện tiếp cận toán học cho học sinh.",
  legacy: "Lê Văn Thiêm là một trong những người tiên phong xây dựng nền toán học Việt Nam trên các phương diện đào tạo, nghiên cứu và tổ chức khoa học. Ông được tặng Giải thưởng Hồ Chí Minh về khoa học và công nghệ năm 1996. Cần phân biệt rõ việc phụ trách Viện Toán học từ năm 1970 với mốc bổ nhiệm Viện trưởng năm 1975.",
  source: "Viện Toán học, 'Giới thiệu chung về Viện Toán học' và tư liệu lịch sử viện; Trường Đại học Khoa học Tự nhiên, ĐHQGHN, 'GS. Lê Văn Thiêm, nhà khoa học xuất sắc, niềm tự hào của nền Toán học Việt Nam'; Đại học Quốc gia Hà Nội, tư liệu lịch sử Khoa Toán – Cơ – Tin học."
},
{
  id: 35,
  name: "GS. NGND. Nguyễn Thúc Hào",
  years: "1912 – 2009",
  period: "khang_chien_1945_1975",
  subTheme: "Giáo dục thời kỳ kháng chiến 1945 - 1975",
  title: "Nhà giáo toán học – Hiệu trưởng đầu tiên của Đại học Sư phạm Vinh",
  img: "assets/teachers/kc_35_nguyen_thuc_hao.jpg",
  career: "Nguyễn Thúc Hào sinh năm 1912, mất năm 2009, quê làng Xuân Liễu, Nam Đàn, Nghệ An, trong một gia đình có truyền thống khoa bảng. Sau thời gian học tại Pháp, ông trở về nước, dạy toán ở Quốc học Huế. Sau Cách mạng tháng Tám, ông đảm nhiệm nhiều công việc giáo dục, tham gia tổ chức đào tạo đại học và sư phạm trong kháng chiến. Ông từng làm Hiệu phó Đại học Sư phạm Hà Nội. Từ năm 1959 đến năm 1974, ông là Hiệu trưởng đầu tiên của Đại học Sư phạm Vinh, nay là Trường Đại học Vinh.",
  reforms: "• Góp phần duy trì đào tạo đại học trong kháng chiến: Ông tham gia tổ chức, giảng dạy tại các cơ sở dự bị đại học và sư phạm cao cấp ở Liên khu IV. Hoạt động ấy góp phần bảo đảm sự tiếp nối của đào tạo khoa học và giáo viên trong điều kiện chiến tranh.\n• Xây dựng Đại học Sư phạm Vinh từ những ngày đầu: Ông cùng tập thể cán bộ tổ chức tuyển sinh, xây dựng đội ngũ, chương trình và nền nếp giảng dạy. Nhà trường đảm nhiệm đào tạo giáo viên phục vụ nhu cầu phát triển giáo dục.\n• Kết hợp giảng dạy chuyên môn với đào tạo người thầy: Sự nghiệp của ông gắn với toán học và sư phạm. Ông chú trọng xây dựng đội ngũ giảng viên, tạo môi trường học tập nghiêm túc và bồi dưỡng trách nhiệm nghề nghiệp.\n• Giữ vững hoạt động nhà trường trong chiến tranh: Trên cương vị Hiệu trưởng, ông tham gia tổ chức sơ tán, bảo đảm việc học và sinh hoạt của cán bộ, sinh viên, duy trì đào tạo trong hoàn cảnh bị đánh phá.\n• Dìu dắt nhiều thế hệ người học: Đồng nghiệp và học trò ghi nhận ở ông sự tận tụy, nền nếp làm việc và tinh thần trách nhiệm đối với sự trưởng thành của sinh viên.",
  legacy: "Nguyễn Thúc Hào là nhà giáo, nhà khoa học và nhà quản lý có công xây dựng giáo dục đại học Việt Nam, đặc biệt là Đại học Sư phạm Vinh. Niên đại chính xác được nhà trường xác nhận là 1912–2009; thời gian giữ chức Hiệu trưởng là 1959–1974.",
  source: "Trường Đại học Vinh, thông báo về GS. NGND Nguyễn Thúc Hào qua đời; 'Giáo sư Nguyễn Thúc Hào – Vị Hiệu trưởng tài đức vẹn toàn'; hồi ức 'Nhớ lại những ngày thành lập trường' của GS. NGND Nguyễn Thúc Hào."
},
{
  id: 36,
  name: "GS. Ngụy Như Kon Tum",
  years: "1913 – 1991",
  period: "khang_chien_1945_1975",
  subTheme: "Giáo dục thời kỳ kháng chiến 1945 - 1975",
  title: "Nhà vật lý, nhà giáo – Hiệu trưởng đầu tiên của Đại học Tổng hợp Hà Nội",
  img: "assets/teachers/kc_366_nguy_nhu_kon_tum.jpg",
  career: "Ngụy Như Kon Tum sinh năm 1913, mất năm 1991, quê gốc ở Huế, sinh tại Kon Tum. Ông học tập trong nước rồi sang Pháp du học, được đào tạo về vật lý và hóa học. Khi Chiến tranh thế giới thứ hai bùng nổ, ông trở về nước, dạy học tại Sài Gòn và Hà Nội. Sau Cách mạng tháng Tám, ông tham gia xây dựng nền giáo dục mới. Năm 1951, ông được giao làm Giám đốc Trường Sư phạm cao cấp tại Khu học xá Trung ương ở Nam Ninh, Trung Quốc. Năm 1956, khi Trường Đại học Tổng hợp Hà Nội được thành lập, ông được bổ nhiệm làm Hiệu trưởng đầu tiên và giữ cương vị này đến năm 1982.",
  reforms: "• Tham gia đào tạo giáo viên và cán bộ khoa học: Tại Khu học xá Trung ương, ông vừa tổ chức nhà trường, vừa tham gia giảng dạy, góp phần chuẩn bị đội ngũ cho giáo dục và khoa học trong nước.\n• Xây dựng Đại học Tổng hợp Hà Nội: Trên cương vị Hiệu trưởng đầu tiên, ông cùng đội ngũ giảng viên tổ chức đào tạo các ngành khoa học, xây dựng nền nếp học thuật và phát triển cán bộ. Nhà trường trở thành một cơ sở quan trọng của giáo dục đại học Việt Nam.\n• Kết hợp giảng dạy với nghiên cứu: Hoạt động chuyên môn của ông gắn với vật lý học, biên soạn học liệu và phổ biến kiến thức. Ông góp phần hình thành môi trường đại học trong đó đào tạo và nghiên cứu hỗ trợ lẫn nhau.\n• Duy trì hoạt động đại học trong chiến tranh: Trong những năm chống Mỹ, nhà trường phải sơ tán và tổ chức học tập trong điều kiện khó khăn. Vai trò quản lý của ông gắn với việc bảo đảm sự liên tục của đào tạo và xây dựng đội ngũ.",
  legacy: "Ngụy Như Kon Tum để lại dấu ấn nổi bật trong lịch sử Trường Đại học Tổng hợp Hà Nội với 26 năm giữ chức Hiệu trưởng, từ 1956 đến 1982. Ông được ghi nhận là nhà khoa học, nhà giáo và nhà quản lý có công xây dựng những nền tảng của giáo dục đại học Việt Nam hiện đại.",
  source: "Đại học Quốc gia Hà Nội, 'Lễ gắn biển phố Ngụy Như Kon Tum và phố Lê Văn Thiêm'; Trường Đại học Khoa học Tự nhiên, ĐHQGHN, 'Giáo sư Ngụy Như Kon Tum – Hiệu trưởng đầu tiên và lâu nhất của Đại học Tổng hợp Hà Nội'; Trung tâm Thư viện và Tri thức số, ĐHQGHN, tư liệu về Ngụy Như Kon Tum."
},
{
  id: 37,
  name: "GS. Hoàng Tụy",
  years: "1927 – 2019",
  period: "khang_chien_1945_1975",
  subTheme: "Giáo dục thời kỳ kháng chiến 1945 - 1975",
  title: "Người tiên phong của tối ưu toàn cục – Nhà giáo góp phần xây dựng nền toán học Việt Nam",
  img: "assets/teachers/kc_37_hoang_tuy.jpg",
  career: "Hoàng Tụy sinh năm 1927, mất năm 2019, quê Xuân Đài, Điện Bàn, Quảng Nam. Ông bắt đầu nghề giáo trong kháng chiến, từng dạy toán tại Trường Trung học Lê Khiết ở Liên khu V, sau học tập và tham gia đào tạo khoa học cơ bản. Từ năm 1954, ông giảng dạy tại Hà Nội; năm 1956 trở thành một trong những giảng viên đầu tiên của Đại học Tổng hợp Hà Nội. Ông từng phụ trách Khoa Toán – Lý, rồi Khoa Toán, góp phần tổ chức nghiên cứu và đào tạo. Năm 1968, ông chuyển sang công tác tại cơ quan khoa học nhà nước, phụ trách Phòng Nghiên cứu toán. Từ năm 1980 đến năm 1989, ông là Viện trưởng Viện Toán học.",
  reforms: "• Gắn đào tạo phổ thông với đại học: Từ người dạy toán ở vùng tự do, ông tiếp tục biên soạn sách giáo khoa, giáo trình và giảng dạy đại học, góp phần tạo sự tiếp nối giữa các bậc học.\n• Đóng góp nền tảng cho tối ưu toàn cục: Năm 1964, ông đề xuất phương pháp 'lát cắt Tụy', một kết quả được xem là dấu mốc quan trọng trong sự hình thành lĩnh vực tối ưu toàn cục.\n• Xây dựng đội ngũ nghiên cứu toán: Ông cùng Lê Văn Thiêm và các đồng nghiệp bồi dưỡng giảng viên, tổ chức nghiên cứu và phát triển môi trường học thuật. Tại Viện Toán học, ông chú trọng nâng cao chất lượng theo chuẩn mực quốc tế.\n• Coi trọng ứng dụng toán học: Ông tham gia định hướng sử dụng toán học để giải quyết các vấn đề quản lý, sản xuất và đời sống, góp phần khẳng định vai trò thực tiễn của khoa học cơ bản.\n• Biên soạn và phổ biến tri thức: Các giáo trình, chuyên khảo và bài viết của ông phục vụ nhiều thế hệ người học. Hoạt động giảng dạy và nghiên cứu cho thấy sự coi trọng tư duy độc lập, tìm tòi và chất lượng học thuật.",
  legacy: "Hoàng Tụy được ghi nhận là nhà toán học có ảnh hưởng quốc tế và một trong những người tiên phong xây dựng nền toán học Việt Nam. Ông được trao Giải thưởng Hồ Chí Minh năm 1996 và Giải thưởng Constantin Carathéodory của Hội Tối ưu toàn cục quốc tế năm 2011. Di sản của ông gắn với tối ưu toàn cục, đào tạo đội ngũ và xây dựng các tổ chức nghiên cứu toán học.",
  source: "Trường Đại học Khoa học Tự nhiên, ĐHQGHN, 'Vô cùng thương tiếc GS. Hoàng Tụy: Một nhà khoa học xuất sắc – Một nhân cách lớn'; Viện Toán học, 'Lịch sử hình thành' và danh mục giải thưởng; Báo Điện tử Chính phủ, 'GS Hoàng Tụy – Cây đại thụ của nền Toán học Việt Nam'; Viện Hàn lâm Khoa học và Công nghệ Việt Nam, tư liệu về hoạt động giảng dạy mang tên Hoàng Tụy."
},

{
  id: 39,
  name: "NGND. Lê Hải Châu",
  years: "1926 – 2022",
  period: "khang_chien_1945_1975",
  subTheme: "Giáo dục thời kỳ kháng chiến 1945 - 1975",
  title: "Người thầy bồi dưỡng tài năng toán học – Gắn bó với đội tuyển Olympic từ những năm đầu",
  img: "assets/teachers/kc_39_le_hai_chau.jpg",
  career: "Lê Hải Châu sinh năm 1926, mất năm 2022, quê Xuân Đan, Nghi Xuân, Hà Tĩnh. Ông bắt đầu công tác giáo dục năm 1946, giảng dạy toán tại nhiều trường ở Liên khu IV. Sau thời gian học nâng cao tại Khu học xá Trung ương, Nam Ninh, ông về nước tham gia biên soạn sách và công tác tại cơ quan quản lý giáo dục phổ thông. Ông phụ trách chuyên môn toán, công tác phát hiện, bồi dưỡng học sinh giỏi và tham gia tổ chức đội tuyển dự Olympic Toán quốc tế. Năm 1974, ông cùng Phan Đức Chính dẫn đoàn Việt Nam lần đầu dự kỳ thi này.",
  reforms: "• Biên soạn học liệu toán trong kháng chiến: Từ những năm 1949–1953, ông đã biên soạn sách về đại số, hình học và quỹ tích phục vụ việc dạy học tại Liên khu IV.\n• Tham gia xây dựng sách giáo khoa phổ thông: Sau hòa bình lập lại, ông cùng các đồng nghiệp, trong đó có Hoàng Tụy, biên soạn nhiều đầu sách toán. Ông còn trực tiếp dạy thí điểm để gắn việc viết sách với thực tế lớp học.\n• Phát hiện và bồi dưỡng học sinh giỏi: Trên cương vị chuyên viên phụ trách môn toán, ông tham gia tổ chức thi, tuyển chọn, huấn luyện và chăm lo cho các đội tuyển học sinh.\n• Gắn bó với Olympic Toán quốc tế: Ông là một trong hai nhà giáo dẫn đoàn Việt Nam dự IMO năm 1974, sau tiếp tục nhiều lần phụ trách đoàn. Học trò ghi nhận sự chu đáo của ông trong cả chuyên môn và sinh hoạt.\n• Truyền cảm hứng qua sách tham khảo: Các sách toán giải trí, bài toán chọn lọc và tài liệu bồi dưỡng của ông giúp người học tiếp cận toán học bằng sự tò mò, tìm tòi và niềm vui giải quyết vấn đề.",
  legacy: "Lê Hải Châu có đóng góp lâu dài cho giáo dục toán phổ thông, biên soạn sách và bồi dưỡng học sinh giỏi. Nên giới thiệu ông là người góp công phát triển phong trào chuyên, học sinh giỏi và đội tuyển Olympic; không khẳng định ông là người duy nhất sáng lập hệ thống chuyên Toán Việt Nam.",
  source: "Hệ thống thông tin Báo cáo viên, 'Nhà giáo nhân dân Lê Hải Châu – Người thầy của nhiều tài năng Toán học', ngày 04/02/2022; Đài Tiếng nói Việt Nam, 'Kỷ niệm với NGND Lê Hải Châu'; Thông tin đối ngoại, tư liệu 50 năm Việt Nam tham dự Olympic Toán quốc tế; thông tin cáo phó từ Bộ GDĐT được báo chí công bố."
},

{
  id: 38,
  name: "GS. BS. Tôn Thất Tùng",
  years: "1912 – 1982",
  period: "khang_chien_1945_1975",
  subTheme: "Giáo dục thời kỳ kháng chiến 1945 - 1975",
  title: "Người thầy lớn của ngoại khoa Việt Nam – Nhà khoa học với phương pháp cắt gan mang tên mình",
  img: "assets/teachers/kc_38_ton_that_tung.jpg",
  career: "GS. BS. Tôn Thất Tùng sinh ngày 10/5/1912 tại Thanh Hóa, quê ở Huế. Ông theo học Trường Y – Dược thuộc Đại học Đông Dương và hoàn thành luận án bác sĩ y khoa năm 1939 với đề tài nghiên cứu sự phân chia mạch máu trong gan. Trong kháng chiến chống Pháp, ông tham gia cứu chữa thương bệnh binh, đồng thời cùng GS. Hồ Đắc Di duy trì hoạt động đào tạo y khoa tại chiến khu Việt Bắc. Ông giữ chức Thứ trưởng Bộ Y tế giai đoạn 1947–1961. Từ năm 1954, ông làm Giám đốc Bệnh viện Việt Đức và Chủ nhiệm Bộ môn Ngoại của Trường Đại học Y Dược Hà Nội, sau này là Trường Đại học Y Hà Nội. Ông qua đời ngày 7/5/1982.",
  reforms: "• Góp phần xây dựng nền đào tạo ngoại khoa trong kháng chiến: Tại Chiêm Hóa, Tuyên Quang, năm 1947, ông cùng GS. Hồ Đắc Di phụ trách chương trình giảng dạy với trọng tâm là ngoại khoa, đáp ứng yêu cầu đào tạo nhân lực cứu chữa thương bệnh binh. Hoạt động đào tạo gắn với thực tế điều trị trong hoàn cảnh thiếu thốn của chiến khu.\n• Phát triển phương pháp cắt gan mang tên Tôn Thất Tùng: Từ những nghiên cứu giải phẫu hệ thống mạch máu và đường mật trong gan, ông xây dựng phương pháp cắt gan có kế hoạch, kiểm soát các cuống mạch ngay trong nhu mô gan. Công trình được hoàn chỉnh và công bố rộng rãi năm 1962, trở thành đóng góp nổi bật của ngoại khoa Việt Nam đối với y học thế giới.\n• Gắn giảng dạy, nghiên cứu với điều trị tại bệnh viện: Trên cương vị lãnh đạo bệnh viện và bộ môn, ông tham gia đào tạo đội ngũ bác sĩ ngoại khoa, đưa những vấn đề của thực hành phẫu thuật vào nghiên cứu và giảng dạy. Bệnh viện đồng thời là cơ sở điều trị, đào tạo và trao đổi kinh nghiệm chuyên môn.\n• Phát triển ngoại khoa phục vụ thời chiến: Ông cùng đồng nghiệp nghiên cứu, tổng kết kinh nghiệm xử trí vết thương chiến tranh. Năm 1966, ông chủ trì hội nghị khoa học quân và dân y về xử trí vết thương do vũ khí mới, đặc biệt là bom bi, góp phần phổ biến kinh nghiệm cấp cứu và điều trị.\n• Chuẩn bị cho những hướng phát triển chuyên sâu: Ông tổ chức nghiên cứu ghép tạng trên động vật từ thập niên 1960 và cử các kíp chuyên môn đi học ở nước ngoài, góp phần chuẩn bị nhân lực cho sự phát triển lâu dài của ngành ngoại khoa.",
  legacy: "Tôn Thất Tùng là một trong những người có đóng góp quan trọng vào sự phát triển của ngoại khoa và đào tạo y khoa Việt Nam. Di sản của ông gồm phương pháp cắt gan mang tên mình, các công trình nghiên cứu và những thế hệ bác sĩ được đào tạo. Ông được phong tặng danh hiệu Anh hùng Lao động năm 1962, được Viện Hàn lâm Phẫu thuật Paris trao Huy chương Lannelongue năm 1977 và được truy tặng Giải thưởng Hồ Chí Minh về khoa học và công nghệ năm 1996.",
  source: "Thông tấn xã Việt Nam, hồ sơ 'Tôn Thất Tùng'; Bệnh viện Hữu nghị Việt Đức, 'Lưu giữ ký ức thời chiến – Giá trị vượt thời gian' và 'Ghép tạng tại Bệnh viện Hữu nghị Việt Đức'; Báo Sức khỏe và Đời sống, bài về kỷ niệm 75 năm Bộ môn Ngoại, Trường Đại học Y Hà Nội (06/10/2022); Báo Nhân Dân, '100 năm Bệnh viện Việt – Đức' (2006)."
},
{
  id: 40,
  name: "GS. NGND. Trần Văn Giàu",
  years: "1911 – 2010",
  period: "khang_chien_1945_1975",
  subTheme: "Giáo dục thời kỳ kháng chiến 1945 - 1975",
  title: "Nhà giáo, nhà sử học – Người góp phần xây dựng khoa học xã hội Việt Nam hiện đại",
  img: "assets/teachers/kc_40_tran_van_giau.jpg",
  career: "Trần Văn Giàu sinh năm 1911, mất năm 2010, quê Long An. Ông tham gia hoạt động cách mạng từ sớm, giữ nhiều trọng trách trong phong trào đấu tranh giải phóng dân tộc. Từ năm 1951 đến năm 1954, ông tham gia lãnh đạo và trực tiếp giảng dạy tại Trường Dự bị đại học, Trường Sư phạm cao cấp trong vùng tự do Thanh – Nghệ – Tĩnh. Sau năm 1954, ông góp phần xây dựng các cơ sở đại học tại Hà Nội. Ông là một trong những giáo sư đầu tiên của nền đại học Việt Nam mới, từng làm Chủ nhiệm Khoa Lịch sử và Bí thư Đảng ủy Trường Đại học Tổng hợp Hà Nội.",
  reforms: "• Tổ chức đào tạo trong kháng chiến: Ông tham gia lãnh đạo nhà trường và trực tiếp giảng dạy trong điều kiện khó khăn, góp phần chuẩn bị đội ngũ trí thức cho giáo dục và khoa học xã hội.\n• Xây dựng các ngành lịch sử, triết học: Những năm đầu của Đại học Sư phạm và Đại học Tổng hợp Hà Nội, ông tham gia giảng dạy khoa học chính trị, triết học, lịch sử Việt Nam và lịch sử thế giới, góp phần hình thành nền tảng chuyên môn.\n• Biên soạn sách cho giảng dạy, nghiên cứu: Các công trình như 'Triết học phổ thông', 'Chống xâm lăng' và những nghiên cứu về giai cấp công nhân, lịch sử cận đại cung cấp nguồn tài liệu cho thầy và trò trong giai đoạn thiếu học liệu.\n• Gắn nghiên cứu với đào tạo: Hoạt động học thuật của ông đồng thời tạo nguồn kiến thức cho giảng đường và đặt ra những vấn đề để người học tiếp tục tìm hiểu, khảo cứu.\n• Bồi dưỡng thế hệ cán bộ khoa học xã hội: Vai trò người thầy của ông được thể hiện qua giảng dạy, hướng dẫn và ảnh hưởng đối với đội ngũ nghiên cứu lịch sử, triết học về sau.",
  legacy: "Trần Văn Giàu để lại sự nghiệp nghiên cứu và giáo dục có ảnh hưởng trong khoa học xã hội Việt Nam. Ông được phong danh hiệu Nhà giáo Nhân dân năm 1992 và Anh hùng Lao động năm 2003. Những trước tác của ông là nguồn tư liệu quan trọng, đồng thời cần được đọc trong bối cảnh phương pháp và vấn đề học thuật của thời đại.",
  source: "Trường Đại học Khoa học Xã hội và Nhân văn, ĐHQGHN, 'Giáo sư Trần Văn Giàu – Một học giả lớn, một nhân cách lớn'; Đại học Quốc gia Hà Nội, 'Giáo sư Trần Văn Giàu, một học giả lớn'."
},
{
  id: 41,
  name: "GS. NGND. Nguyễn Cảnh Toàn",
  years: "1926 – 2017",
  period: "hien_dai_1975_nay",
  subTheme: "Các nhà giáo từ năm 1975 đến nay",
  title: "Nhà toán học, nhà quản lý giáo dục – Người bền bỉ đề cao năng lực tự học",
  img: "assets/teachers/hd_41_nguyen_canh_toan.jpg",
  career: "GS. TSKH. Nguyễn Cảnh Toàn sinh tại xã Đông Sơn, huyện Đô Lương, tỉnh Nghệ An theo địa danh đương thời. Ông bắt đầu dạy toán ở bậc trung học trong kháng chiến chống Pháp, sau đó tham gia giảng dạy đại học. Năm 1963, ông bảo vệ thành công luận án Tiến sĩ khoa học tại Liên Xô trên cơ sở công trình nghiên cứu thực hiện ở Việt Nam. Ông làm Hiệu trưởng Trường Đại học Sư phạm Hà Nội II, phụ trách các khoa tự nhiên, giai đoạn 1967–1975; năm 1975 tiếp tục làm Hiệu trưởng Trường Đại học Sư phạm Hà Nội I sau tổ chức lại. Từ năm 1976 đến năm 1989, ông giữ chức Thứ trưởng Bộ Giáo dục.",
  reforms: "• Đề cao vai trò chủ động của người học: Ông kiên trì phát triển quan điểm biến quá trình đào tạo thành quá trình tự đào tạo, coi việc hình thành năng lực tự học là nhiệm vụ quan trọng của nhà trường. Trong giảng dạy, ông chú trọng khơi gợi tính tò mò khoa học, khả năng đặt câu hỏi và suy nghĩ độc lập.\n• Gắn nghiên cứu toán học với đào tạo giáo viên: Ông nghiên cứu hình học xạ ảnh và hình học siêu phi Euclid, đồng thời viết tài liệu về phương pháp học, dạy và nghiên cứu toán. Ông khuyến khích giáo viên tham gia nghiên cứu khoa học và hướng dẫn học sinh làm quen với hoạt động tìm tòi.\n• Phát triển hoạt động phổ biến toán học: Ông tham gia sáng lập Tạp chí Toán học và Tuổi trẻ năm 1964, đảm nhiệm vai trò Chủ nhiệm, sau gọi là Tổng biên tập, trong hơn 40 năm. Tạp chí tạo thêm môi trường học tập, trao đổi bài toán và bồi dưỡng niềm yêu thích toán học ngoài lớp học.",
  legacy: "Được phong tặng danh hiệu Nhà giáo Nhân dân. Ông để lại nhiều công trình toán học và giáo dục, trong đó có sách Phương pháp luận duy vật biện chứng với việc học, dạy và nghiên cứu Toán học. Cuộc đời học tập, nghiên cứu và giảng dạy của ông là một tấm gương về tinh thần tự học bền bỉ.",
  source: "Trường Đại học Sư phạm Hà Nội, 'Giáo sư Hiệu trưởng Nguyễn Cảnh Toàn' (2011); Báo Nhân Dân, 'Giáo sư Nguyễn Cảnh Toàn, người dành cả cuộc đời cho sự nghiệp khoa học và giáo dục' (13/02/2017); Báo Giáo dục và Thời đại, 'Hồi ức về Tổng Biên tập đầu tiên của Toán học & Tuổi trẻ' (2017)."
},
{
  id: 42,
  name: "GS. TSKH. Hồ Ngọc Đại",
  years: "Sinh năm 1936",
  period: "hien_dai_1975_nay",
  subTheme: "Các nhà giáo từ năm 1975 đến nay",
  title: "Người khởi xướng Công nghệ giáo dục tại Việt Nam – Đề cao hoạt động học tập của trẻ em",
  img: "assets/teachers/hd_42_ho_ngoc_dai.jpg",
  career: "GS. TSKH. Hồ Ngọc Đại sinh năm 1936, quê ở huyện Triệu Phong, tỉnh Quảng Trị theo địa danh đương thời. Ông từng dạy toán, học chuyên ngành tâm lý học tại Trường Đại học Sư phạm Hà Nội, sau đó sang Liên Xô nghiên cứu tâm lý học trẻ em và giáo dục. Năm 1976, ông hoàn thành luận án Tiến sĩ khoa học liên quan đến tâm lý học trong giảng dạy toán cho học sinh tiểu học. Sau khi về nước, ông tập trung nghiên cứu Công nghệ giáo dục; năm 1978 bắt đầu triển khai thực nghiệm tại Trường Thực nghiệm ở Giảng Võ, Hà Nội.",
  reforms: "• Xây dựng hướng nghiên cứu Công nghệ giáo dục: Ông chủ trương thiết kế nội dung, nhiệm vụ và các bước học tập để học sinh trực tiếp hoạt động, từng bước hình thành kiến thức và cách tư duy. Người thầy tổ chức, hướng dẫn và kiểm tra quá trình học của từng em.\n• Coi trẻ em là chủ thể của hoạt động học: Ông nhấn mạnh việc tôn trọng đặc điểm phát triển, khả năng và sự khác biệt của học sinh; hướng đến môi trường học tập giúp trẻ chủ động khám phá, được thử và sửa sai. Quan điểm này gắn với mong muốn để trẻ cảm nhận niềm vui khi đến trường.\n• Nghiên cứu dạy tiếng Việt ở đầu cấp tiểu học: Ông cùng cộng sự xây dựng tài liệu Tiếng Việt 1 – Công nghệ giáo dục, chú trọng phân tích ngữ âm và tổ chức thao tác học tập nhằm hình thành kỹ năng đọc, viết. Tài liệu từng được triển khai tại nhiều địa phương, trong đó có các chương trình hỗ trợ học sinh dân tộc thiểu số.",
  legacy: "Đóng góp nổi bật của ông là một quá trình nghiên cứu, thực nghiệm giáo dục kéo dài nhiều thập kỷ, đặt trọng tâm vào cách trẻ em học và vai trò tổ chức hoạt động học của giáo viên. Các quan điểm và tài liệu Công nghệ giáo dục của ông là đối tượng trao đổi, đánh giá và tranh luận chuyên môn trong quá trình đổi mới giáo dục Việt Nam.",
  source: "Báo Nhân Dân cuối tuần, 'Một lần nữa giáo dục đang có cơ hội thay đổi' (29/08/2025); Thông tấn xã Việt Nam/VietnamPlus, 'Giáo sư Hồ Ngọc Đại và sách công nghệ giáo dục: Hơn 40 năm thăng trầm' (13/09/2019); Báo Tuổi Trẻ, 'Giáo sư Hồ Ngọc Đại: Được làm nghề giáo là hạnh phúc' (20/11/2023)."
},
{
  id: 43,
  name: "NGƯT. Nguyễn Ngọc Ký",
  years: "1947 – 2022",
  period: "hien_dai_1975_nay",
  subTheme: "Các nhà giáo từ năm 1975 đến nay",
  title: "Người thầy viết bằng chân – Tấm gương vượt khó và bền bỉ theo đuổi việc học",
  img: "assets/teachers/hd_43_nguyen_ngoc_ky.jpg",
  career: "Nhà giáo Ưu tú Nguyễn Ngọc Ký sinh ngày 28/6/1947 tại huyện Hải Hậu, tỉnh Nam Định theo địa danh đương thời. Một trận bệnh khi lên bốn tuổi khiến ông bị liệt hai tay. Ông kiên trì tập dùng chân để viết, học tập và thực hiện nhiều công việc trong sinh hoạt. Từ năm 1966 đến năm 1970, ông học ngành Ngữ văn tại Trường Đại học Tổng hợp Hà Nội. Sau khi tốt nghiệp, ông trở về quê dạy học. Năm 1994, ông chuyển vào Thành phố Hồ Chí Minh, tiếp tục làm việc, viết sách và tham gia các hoạt động giáo dục. Ông qua đời ngày 28/9/2022.",
  reforms: "• Giáo dục bằng tấm gương vượt khó: Từ một trẻ em bị liệt hai tay, ông kiên trì tìm cách tiếp tục học tập và trở thành giáo viên. Hành trình ấy đem lại cho học sinh một bài học cụ thể về sự nhẫn nại, ý chí và khả năng vượt qua trở ngại của bản thân.\n• Gắn việc dạy văn với sự quan tâm đến học trò: Trong quá trình giảng dạy, ông chú trọng động viên, thấu hiểu và khơi dậy sự tự tin của học sinh. Những hồi ức của học trò ghi nhận ở ông sự gần gũi, lòng yêu nghề và thái độ kiên trì trong giáo dục.\n• Mở rộng hoạt động giáo dục qua sách và giao lưu: Ngoài công việc giảng dạy, ông viết tự truyện, tham gia nói chuyện với học sinh, sinh viên và bạn đọc. Hai tác phẩm Tôi đi học và Tôi học đại học kể lại quá trình học tập của ông, giúp người đọc hiểu những khó khăn và nỗ lực đằng sau thành quả đạt được.",
  legacy: "Được phong tặng danh hiệu Nhà giáo Ưu tú năm 1992; là hội viên Hội Nhà văn Việt Nam. Câu chuyện học tập bằng đôi chân của ông được giới thiệu trong sách giáo khoa qua nhiều thời kỳ. Ông được nhiều thế hệ học sinh nhớ đến như một người thầy giàu nghị lực và tận tâm với giáo dục.",
  source: "Báo Nhân Dân, 'Thầy giáo Nguyễn Ngọc Ký, người viết chữ bằng chân, qua đời' (28/09/2022) và 'Nụ cười thầy Nguyễn Ngọc Ký' (2022); Thông tấn xã Việt Nam/VietnamPlus, 'Tôi học đại học – Tự truyện của Nguyễn Ngọc Ký' (2013); Báo VnExpress, 'Thầy giáo Nguyễn Ngọc Ký qua đời' (28/09/2022)."
},
{
  id: 44,
  name: "GS. NGND. Lê Trí Viễn",
  years: "1918 – 2012",
  period: "hien_dai_1975_nay",
  subTheme: "Các nhà giáo từ năm 1975 đến nay",
  title: "Nhà nghiên cứu văn học – Người thầy gắn bó với đào tạo giáo viên Ngữ văn",
  img: "assets/teachers/hd_44_le_tri_vien.jpg",
  career: "GS. NGND. Lê Trí Viễn sinh ngày 10/3/1918 tại thôn Bào Đông, xã Điện Hồng, huyện Điện Bàn, tỉnh Quảng Nam theo địa danh đương thời. Ông bắt đầu dạy học sau khi tốt nghiệp trường sư phạm năm 1939, đồng thời kiên trì tự học để nâng cao trình độ. Trong kháng chiến chống Pháp, ông tham gia giảng dạy và quản lý trường học. Từ năm 1963 đến năm 1978, ông làm Chủ nhiệm Khoa Ngữ văn, Trường Đại học Sư phạm Hà Nội. Năm 1978, ông chuyển vào Trường Đại học Sư phạm Thành phố Hồ Chí Minh, tiếp tục giảng dạy và nghiên cứu. Ông qua đời ngày 3/2/2012.",
  reforms: "• Đào tạo đội ngũ giáo viên và người nghiên cứu văn học: Ông giảng dạy ở nhiều cấp học, tham gia đào tạo đại học và sau đại học, hướng dẫn học viên nghiên cứu chuyên ngành Ngữ văn. Hoạt động sư phạm của ông gắn chặt với nghiên cứu và thực hành phân tích tác phẩm.\n• Xây dựng học liệu cho ngành Ngữ văn: Ông tham gia biên soạn bộ giáo trình Lịch sử văn học Việt Nam, viết sách giáo khoa và tài liệu hướng dẫn giảng dạy. Các công trình như Đặc trưng văn học trung đại Việt Nam và Đến với thơ hay là những tài liệu trong di sản nghiên cứu, giảng dạy của ông.\n• Tiếp tục đóng góp cho giáo dục phổ thông sau khi nghỉ hưu: Năm 1992, ông cùng nhà giáo Nguyễn Ngọc Phấn sáng lập Trường Phổ thông cấp 2 Nguyễn Khuyến tại Thành phố Hồ Chí Minh, tiền thân của Trường THCS – THPT Nguyễn Khuyến. Ông đồng thời tiếp tục viết sách và tham gia đào tạo sau đại học.",
  legacy: "Được phong chức danh Giáo sư năm 1980 và danh hiệu Nhà giáo Nhân dân; được truy tặng Giải thưởng Hồ Chí Minh về Văn học, nghệ thuật năm 2012. Sự nghiệp của ông để lại dấu ấn trong nghiên cứu văn học Việt Nam, biên soạn học liệu và đào tạo nhiều thế hệ giáo viên Ngữ văn.",
  source: "Khoa Ngữ văn, Trường Đại học Sư phạm Hà Nội, 'Kỉ niệm 100 năm ngày sinh GS Lê Trí Viễn: Lê Trí Viễn – Cuộc đời và sự nghiệp'; Trường Đại học Sư phạm Hà Nội, 'GS.NGND Lê Trí Viễn – Bậc sư biểu Kính nhi cận chi'; Bảo tàng Văn học Việt Nam, hồ sơ Lê Trí Viễn (1918–2012)."
},
{
  id: 45,
  name: "GS. NGND. Hoàng Như Mai",
  years: "1919 – 2013",
  period: "hien_dai_1975_nay",
  subTheme: "Các nhà giáo từ năm 1975 đến nay",
  title: "Người thầy truyền cảm hứng văn chương – Nhà nghiên cứu văn học và sân khấu",
  img: "assets/teachers/hd_45_hoang_nhu_mai.jpg",
  career: "GS. NGND. Hoàng Như Mai sinh năm 1919 tại phủ Lạng Thương, tỉnh Bắc Giang; quê gốc ở thôn Nội Am, xã Liên Ninh, huyện Thanh Trì, Hà Nội theo địa danh đương thời. Ông từng học tại Trường Bưởi, theo học y khoa và luật khoa trước khi gắn bó với giáo dục, văn chương và sân khấu. Ông từng làm Hiệu trưởng Trường Phan Thanh ở Thái Bình, Trường Sư phạm Việt Bắc và các trường sư phạm trung cấp. Sau thời gian giảng dạy tại Đại học Tổng hợp Hà Nội, ông chuyển vào công tác tại Đại học Tổng hợp Thành phố Hồ Chí Minh từ đầu thập niên 1980. Ông qua đời năm 2013.",
  reforms: "• Truyền tình yêu văn học qua giảng dạy: Ông được nhiều thế hệ sinh viên ghi nhớ bởi khả năng đọc, bình giảng và diễn giải tác phẩm giàu cảm xúc. Kiến thức văn hóa cùng trải nghiệm sân khấu giúp ông làm rõ vẻ đẹp ngôn từ và khơi gợi sự đồng cảm với tác phẩm.\n• Kết hợp nghiên cứu văn học với nghệ thuật sân khấu: Ông viết tài liệu Văn học Việt Nam hiện đại, nghiên cứu về cải lương, soạn giả Trần Hữu Trang và sáng tác kịch. Hoạt động này góp phần đưa trải nghiệm nghệ thuật vào giảng dạy, nghiên cứu và phổ biến văn học.\n• Gắn bó với giáo dục ngoài giảng đường đại học: Ông tham gia hoạt động khuyến học, nói chuyện văn chương và giữ cương vị Chủ tịch Hội Nghiên cứu và Giảng dạy Văn học Thành phố Hồ Chí Minh. Sau khi nghỉ hưu, ông tiếp tục làm việc trong lĩnh vực giáo dục, trong đó có vai trò Hiệu trưởng Trường THPT Trương Vĩnh Ký.",
  legacy: "Được phong tặng danh hiệu Nhà giáo Nhân dân năm 1990 và Huân chương Lao động hạng Nhất. Di sản của ông gồm các công trình nghiên cứu, sáng tác và nhiều thế hệ học trò. Ông được nhớ đến như một người thầy có phong cách nghệ sĩ, giàu nhiệt huyết và có khả năng đưa văn chương đến gần công chúng.",
  source: "Khoa Văn học và Ngôn ngữ, Trường Đại học Khoa học Xã hội và Nhân văn – ĐHQG TP.HCM, hồ sơ 'Hoàng Như Mai'; Trường Đại học Khoa học Xã hội và Nhân văn – ĐHQGHN, 'Giáo sư Hoàng Như Mai – người thầy nghệ sĩ' (03/09/2015); Báo Sài Gòn Giải Phóng, 'Vĩnh biệt Giáo sư – Nhà giáo Nhân dân Hoàng Như Mai' (28/09/2013)."
},

];

if (typeof window !== 'undefined') {
  window.themesData = themesData;
  window.teachersData = teachersData;
}
if (typeof module !== 'undefined') {
  module.exports = { themesData, teachersData };
}
