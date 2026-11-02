/**
 * DỮ LIỆU BỨC TƯỜNG KÝ ỨC - SÁNG MÃI ƠN THẦY
 * Bộ sưu tập ảnh tư liệu & chân dung Nhà giáo được học sinh, cựu học sinh cả nước đóng góp và tôn vinh.
 * Lưu trữ ảnh vào Google Drive Folder: 1fhjd8d7Ilf8FhHYTrxvjJJdMaE1q0ZBH
 * Ghi dữ liệu vào Google Sheet: "Bức tường ký ức" (ID: 1NTR--NxzjtvlzQVDhuVNYQ5q71tVJ8i-4DMnW3uMdSg)
 * Hiển thị ĐÚNG 01 ẢNH DUY NHẤT kèm thông tin thầy cô (Bỏ hoàn toàn cơ chế so sánh Before/After).
 */

(function () {
  // Hàm tạo tranh mẫu chân dung nghệ thuật canvas độ phân giải cao cho các nhà giáo chưa có ảnh tư liệu
  function createSamplePortrait(name, title, eraColor) {
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 500;
    const ctx = canvas.getContext('2d');

    // Nền chuyển sắc studio
    const bgGrad = ctx.createLinearGradient(0, 0, 400, 500);
    bgGrad.addColorStop(0, eraColor.bg1 || '#182b47');
    bgGrad.addColorStop(0.5, eraColor.bg2 || '#101d30');
    bgGrad.addColorStop(1, '#09101c');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 400, 500);

    // Họa tiết ánh sáng studio chân dung
    const halo = ctx.createRadialGradient(200, 200, 30, 200, 200, 220);
    halo.addColorStop(0, 'rgba(255, 235, 180, 0.28)');
    halo.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = halo;
    ctx.fillRect(0, 0, 400, 500);

    // Cổ & khuôn mặt với độ chuyển bóng Chiaroscuro chân thực
    const faceGrad = ctx.createRadialGradient(190, 195, 10, 200, 210, 85);
    faceGrad.addColorStop(0, '#faebd7');
    faceGrad.addColorStop(0.7, eraColor.skin || '#e8c4a0');
    faceGrad.addColorStop(1, '#a87a54');
    ctx.fillStyle = faceGrad;
    ctx.beginPath();
    ctx.ellipse(200, 210, 68, 88, 0, 0, Math.PI * 2);
    ctx.fill();

    // Cổ áo & vạt áo vest trang nghiêm
    ctx.fillStyle = eraColor.suit || '#132133';
    ctx.beginPath();
    ctx.moveTo(70, 500);
    ctx.quadraticCurveTo(110, 330, 155, 305);
    ctx.lineTo(245, 305);
    ctx.quadraticCurveTo(290, 330, 330, 500);
    ctx.closePath();
    ctx.fill();

    // Ve áo vest mạ viền sáng
    ctx.strokeStyle = 'rgba(255, 215, 0, 0.45)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(155, 305);
    ctx.lineTo(185, 410);
    ctx.lineTo(200, 500);
    ctx.moveTo(245, 305);
    ctx.lineTo(215, 410);
    ctx.lineTo(200, 500);
    ctx.stroke();

    // Cổ áo sơ mi trắng & cà vạt
    ctx.fillStyle = '#f8f8fc';
    ctx.beginPath();
    ctx.moveTo(172, 305);
    ctx.lineTo(200, 350);
    ctx.lineTo(228, 305);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#45161c';
    ctx.beginPath();
    ctx.moveTo(194, 335);
    ctx.lineTo(206, 335);
    ctx.lineTo(204, 430);
    ctx.lineTo(196, 430);
    ctx.closePath();
    ctx.fill();

    // Cổ
    ctx.fillStyle = eraColor.skin || '#d9b28c';
    ctx.fillRect(182, 280, 36, 30);

    // Mái tóc rẽ ngôi lịch thiệp
    const hairGrad = ctx.createLinearGradient(140, 130, 260, 240);
    hairGrad.addColorStop(0, '#221a14');
    hairGrad.addColorStop(0.5, '#382a20');
    hairGrad.addColorStop(1, '#14100c');
    ctx.fillStyle = hairGrad;
    ctx.beginPath();
    ctx.arc(200, 185, 75, Math.PI, 0, false);
    ctx.quadraticCurveTo(275, 215, 260, 245);
    ctx.quadraticCurveTo(200, 222, 140, 245);
    ctx.quadraticCurveTo(125, 215, 125, 185);
    ctx.fill();

    // Lông mày trang nghiêm
    ctx.strokeStyle = '#2b1b11';
    ctx.lineWidth = 3.5;
    ctx.beginPath();
    ctx.moveTo(164, 192);
    ctx.quadraticCurveTo(178, 187, 190, 193);
    ctx.moveTo(210, 193);
    ctx.quadraticCurveTo(222, 187, 236, 192);
    ctx.stroke();

    // Đôi mắt hiền từ với lòng trắng và con ngươi có chiều sâu
    ctx.fillStyle = '#fdfdfd';
    ctx.beginPath();
    ctx.ellipse(177, 204, 11, 6, 0, 0, Math.PI * 2);
    ctx.ellipse(223, 204, 11, 6, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#1e140d';
    ctx.beginPath();
    ctx.arc(177, 204, 5, 0, Math.PI * 2);
    ctx.arc(223, 204, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(178.5, 202.5, 1.8, 0, Math.PI * 2);
    ctx.arc(224.5, 202.5, 1.8, 0, Math.PI * 2);
    ctx.fill();

    // Sống mũi & cánh mũi
    ctx.strokeStyle = '#b0805c';
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.moveTo(200, 196);
    ctx.lineTo(198, 228);
    ctx.quadraticCurveTo(198, 233, 204, 233);
    ctx.stroke();

    // Miệng cười nhân hậu
    ctx.strokeStyle = '#9b4832';
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.arc(200, 248, 14, 0.2, Math.PI - 0.2);
    ctx.stroke();

    // Dải nhãn "ẢNH TƯ LIỆU NHÀ GIÁO"
    ctx.fillStyle = 'rgba(10, 35, 60, 0.88)';
    ctx.fillRect(10, 10, 175, 28);
    ctx.strokeStyle = '#c5a059';
    ctx.strokeRect(10, 10, 175, 28);
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 12px "Be Vietnam Pro", sans-serif';
    ctx.fillText('🏛️ ẢNH TƯ LIỆU NHÀ GIÁO', 18, 29);

    // Nhãn tên thầy cô ở chân ảnh
    ctx.fillStyle = 'rgba(5, 12, 22, 0.9)';
    ctx.fillRect(0, 440, 400, 60);
    ctx.strokeStyle = '#c5a059';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(4, 444, 392, 52);

    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 16px "Cormorant Garamond", serif';
    ctx.textAlign = 'center';
    ctx.fillText(name, 200, 468);

    ctx.fillStyle = '#b4c9e8';
    ctx.font = '12px "Be Vietnam Pro", sans-serif';
    ctx.fillText(title, 200, 487);

    return canvas.toDataURL('image/jpeg', 0.9);
  }

  // Danh mục 24 tư liệu ảnh Nhà giáo tiêu biểu do học sinh cả nước đóng góp
  const initialMemories = [
    {
      id: 'mem-01',
      teacherName: 'GS. Đặng Thai Mai',
      workplace: 'Viện Văn học • Hà Nội',
      teacherInfo: 'Nhà giáo dục, Viện trưởng Viện Văn học (1902–1984). Thầy đã dành trọn cuộc đời cống hiến cho nền văn học và giáo dục cách mạng Việt Nam, người thầy mẫu mực của nhiều thế hệ nhà văn, nhà giáo dục Việt Nam.',
      senderName: 'Nguyễn Hoàng Nam (Lớp 12 Chuyên Văn)',
      school: 'THPT Chuyên Chu Văn An',
      province: 'Hà Nội',
      category: 'resis',
      photo: 'assets/ministers/Giáo sư Đặng Thai Mai.jpg',
      photoAfter: 'assets/ministers/Giáo sư Đặng Thai Mai.jpg',
      photoBefore: 'assets/ministers/Giáo sư Đặng Thai Mai.jpg',
      story: 'Bức ảnh được tìm thấy trong kỷ yếu lớp học kháng chiến chống Pháp năm 1950 tại chiến khu Việt Bắc. Chúng em trân trọng gửi tặng bức chân dung người thầy lớn với phong thái uyên bác, đức độ sáng ngời.',
      createdAt: '15/10/2026'
    },
    {
      id: 'mem-02',
      teacherName: 'GS. Tạ Quang Bửu',
      workplace: 'ĐH Bách Khoa Hà Nội • Hà Nội',
      teacherInfo: 'Bộ trưởng Bộ Đại học & THCN (1910–1986). Nhà khoa học uyên bác, người đặt nền móng vững chắc cho nền khoa học kỹ thuật quân sự và giáo dục đại học cách mạng Việt Nam.',
      senderName: 'Lê Bảo Châu (K65 Sư phạm Toán)',
      school: 'ĐH Sư Phạm Hà Nội',
      province: 'Hà Nội',
      category: 'modern',
      photo: 'assets/ministers/Giáo sư Tạ Quang Bửu.jpg',
      photoAfter: 'assets/ministers/Giáo sư Tạ Quang Bửu.jpg',
      photoBefore: 'assets/ministers/Giáo sư Tạ Quang Bửu.jpg',
      story: 'Ảnh chụp Giáo sư trong những ngày sơ tán giảng dạy cho sinh viên ngành toán lý tại vùng rừng núi Thái Nguyên. Chúng em kính tặng bức ảnh với nụ cười hóm hỉnh và cặp kính cận thân thương của thầy.',
      createdAt: '18/10/2026'
    },
    {
      id: 'mem-03',
      teacherName: 'Bà Nguyễn Thị Bình',
      workplace: 'Bộ Giáo dục & Đào tạo • Hà Nội',
      teacherInfo: 'Bộ trưởng Bộ Giáo dục (1976–1987), nguyên Phó Chủ tịch nước CHXHCN Việt Nam. Nữ Bộ trưởng đầu tiên của ngành giáo dục, lãnh đạo cuộc cải cách giáo dục năm 1979 và thống nhất hệ thống giáo dục toàn quốc.',
      senderName: 'Trần Thị Thu Trang (Lớp 11 Anh 1)',
      school: 'THPT Chuyên Lê Hồng Phong',
      province: 'TP. Hồ Chí Minh',
      category: 'modern',
      photo: 'assets/ministers/Bà Nguyễn Thị Bình.jpg',
      photoAfter: 'assets/ministers/Bà Nguyễn Thị Bình.jpg',
      photoBefore: 'assets/ministers/Bà Nguyễn Thị Bình.jpg',
      story: 'Bức ảnh tư liệu quý ghi lại khoảnh khắc Bộ trưởng Nguyễn Thị Bình về thăm các em học sinh trường tiểu học miền Nam sau ngày đất nước thống nhất. Ánh mắt hiền từ, chiếc khăn rằn và nụ cười đôn hậu chan chứa tình thương.',
      createdAt: '20/10/2026'
    },
    {
      id: 'mem-04',
      teacherName: 'Thầy giáo Nguyễn Văn Căn',
      workplace: 'Phong trào Bình Dân Học Vụ • Thừa Thiên Huế',
      teacherInfo: 'Nhà giáo Bình dân học vụ (1918–1987). Người thầy cầm đèn dầu đi từng mái đình làng quê thắp sáng con chữ cho bà con nông dân sau Cách mạng Tháng Tám.',
      senderName: 'Đặng Quốc Việt (Lớp 12A3)',
      school: 'THPT Quốc Học Huế',
      province: 'Thừa Thiên Huế',
      category: 'resis',
      photo: createSamplePortrait('THẦY NGUYỄN VĂN CĂN', 'Bình Dân Học Vụ • 1946', { bg1: '#1b324d', suit: '#382a20', skin: '#edd0b2' }),
      photoAfter: createSamplePortrait('THẦY NGUYỄN VĂN CĂN', 'Bình Dân Học Vụ • 1946', { bg1: '#1b324d', suit: '#382a20', skin: '#edd0b2' }),
      photoBefore: createSamplePortrait('THẦY NGUYỄN VĂN CĂN', 'Bình Dân Học Vụ • 1946', { bg1: '#1b324d', suit: '#382a20', skin: '#edd0b2' }),
      story: 'Thầy Căn cầm đèn dầu giảng bài xoá mù chữ dưới mái đình làng quê nghèo. Chúng em tái hiện lại ánh lửa bập bùng soi rọi con chữ đầu tiên cho bà con nông dân, minh chứng bất tử cho phong trào Bình Dân Học Vụ.',
      createdAt: '22/10/2026'
    },
    {
      id: 'mem-05',
      teacherName: 'Cô giáo Hà Thị Loan',
      workplace: 'Điểm trường Mèo Vạc • Hà Giang',
      teacherInfo: 'Giáo viên cắm bản Mèo Vạc, Hà Giang. Hơn 20 năm bám bản vùng cao dạy chữ cho đồng bào dân tộc thiểu số giữa mây ngàn dốc đá tai mèo.',
      senderName: 'Sùng A Dũng & Vừ Thị Mỷ (Lớp 11B)',
      school: 'PTDTNT THPT Tỉnh Hà Giang',
      province: 'Hà Giang',
      category: 'highland',
      photo: createSamplePortrait('CÔ HÀ THỊ LOAN', 'Bản Mã Pí Lèng • Vùng cao', { bg1: '#264259', suit: '#22553b', skin: '#efd5bd' }),
      photoAfter: createSamplePortrait('CÔ HÀ THỊ LOAN', 'Bản Mã Pí Lèng • Vùng cao', { bg1: '#264259', suit: '#22553b', skin: '#efd5bd' }),
      photoBefore: createSamplePortrait('CÔ HÀ THỊ LOAN', 'Bản Mã Pí Lèng • Vùng cao', { bg1: '#264259', suit: '#22553b', skin: '#efd5bd' }),
      story: 'Bức ảnh chụp cô Loan vượt dốc đá tai mèo cheo leo mang bảng đen và phấn trắng lên đỉnh núi dạy chữ cho các em nhỏ người Mông. Ánh mắt ấm áp đầy kiên cường của cô giữa sương mây biên viễn.',
      createdAt: '23/10/2026'
    },
    {
      id: 'mem-06',
      teacherName: 'GS. NGND. Nguyễn Lân',
      workplace: 'ĐH Sư Phạm Hà Nội • Hà Nội',
      teacherInfo: 'Cây đại thụ tâm lý học & giáo dục học (1906–2003). Người thầy mẫu mực, tác giả nhiều bộ từ điển, giáo trình sư phạm quý báu đào tạo lớp lớp thế hệ thầy giáo Việt Nam.',
      senderName: 'Hoàng Minh Tuấn (K48 Tâm Lý Học)',
      school: 'ĐH KHXH&NV Hà Nội',
      province: 'Hà Nội',
      category: 'modern',
      photo: 'assets/teacher/dt_29_duong_quang_ham.jpg',
      photoAfter: 'assets/teacher/dt_29_duong_quang_ham.jpg',
      photoBefore: 'assets/teacher/dt_29_duong_quang_ham.jpg',
      story: 'Chân dung Giáo sư Nguyễn Lân trong những năm tháng miệt mài soạn từ điển và giáo trình sư phạm. Ánh mắt nhân từ và nụ cười đôn hậu của thầy luôn là ngọn hải đăng soi sáng cho bao thế hệ nhà giáo Việt Nam.',
      createdAt: '24/10/2026'
    },
    {
      id: 'mem-07',
      teacherName: 'Thầy giáo Võ Nguyên Giáp',
      workplace: 'Trường Thăng Long • Hà Nội',
      teacherInfo: 'Thầy giáo dạy Lịch sử & Địa lý tại trường tư thục Thăng Long (Hà Nội, 1936–1939). Người thầy đã truyền ngọn lửa yêu nước và niềm tự hào dân tộc cho hàng ngàn học sinh trước khi dấn thân vào sự nghiệp cách mạng.',
      senderName: 'Chi đoàn 12 Lịch Sử',
      school: 'THPT Chuyên Phan Bội Châu',
      province: 'Nghệ An',
      category: 'resis',
      photo: 'assets/teacher/dt_31_vo_nguyen_giap.jpg',
      photoAfter: 'assets/teacher/dt_31_vo_nguyen_giap.jpg',
      photoBefore: 'assets/teacher/dt_31_vo_nguyen_giap.jpg',
      story: 'Bức ảnh tư liệu người thầy giáo trẻ Võ Nguyên Giáp truyền ngọn lửa yêu nước và lịch sử hào hùng của dân tộc cho các học trò trường Thăng Long những năm 1930. Đôi mắt sáng ngời ý chí giải phóng dân tộc.',
      createdAt: '25/10/2026'
    },
    {
      id: 'mem-08',
      teacherName: 'GS. Trần Văn Giàu',
      workplace: 'ĐH Sư Phạm Hà Nội • Hà Nội',
      teacherInfo: 'Nhà cách mạng, Triết gia, Nhà giáo nhân dân (1911–2010). Người sáng lập Bộ môn Lịch sử Việt Nam cận hiện đại, người thầy truyền cảm hứng triết học và sử học lớn.',
      senderName: 'Võ Minh Trí (Lớp 12 Tin)',
      school: 'THPT Chuyên Bến Tre',
      province: 'Bến Tre',
      category: 'modern',
      photo: createSamplePortrait('GS. TRẦN VĂN GIÀU', 'ĐH Sư Phạm • 1956', { bg1: '#1b324c', suit: '#1e2d40', skin: '#f1d7ba' }),
      photoAfter: createSamplePortrait('GS. TRẦN VĂN GIÀU', 'ĐH Sư Phạm • 1956', { bg1: '#1b324c', suit: '#1e2d40', skin: '#f1d7ba' }),
      photoBefore: createSamplePortrait('GS. TRẦN VĂN GIÀU', 'ĐH Sư Phạm • 1956', { bg1: '#1b324c', suit: '#1e2d40', skin: '#f1d7ba' }),
      story: 'Chân dung Giáo sư Trần Văn Giàu những ngày giảng dạy tại Đại học Sư phạm Hà Nội. Vẻ mặt cương nghị, phong thái hào sảng Nam Bộ và trái tim cháy bỏng tình yêu Tổ quốc.',
      createdAt: '26/10/2026'
    },
    {
      id: 'mem-09',
      teacherName: 'Cô giáo Đặng Huỳnh Mai',
      workplace: 'Sở GD&ĐT Tỉnh Bến Tre • Đồng bằng Sông Cửu Long',
      teacherInfo: 'Nhà giáo Ưu tú, nguyên Thứ trưởng Bộ Giáo dục & Đào tạo. Suốt đời cống hiến cho giáo dục tiểu học và sự nghiệp trồng người vùng sâu vùng xa đồng bằng sông Cửu Long.',
      senderName: 'Nguyễn Thị Bích Thủy (Lớp 11C2)',
      school: 'THPT Phan Ngọc Hiển',
      province: 'Cần Thơ',
      category: 'modern',
      photo: createSamplePortrait('CÔ ĐẶNG HUỲNH MAI', 'Lớp học vùng sông nước', { bg1: '#1e354e', suit: '#5a2d48', skin: '#f5d9bd' }),
      photoAfter: createSamplePortrait('CÔ ĐẶNG HUỲNH MAI', 'Lớp học vùng sông nước', { bg1: '#1e354e', suit: '#5a2d48', skin: '#f5d9bd' }),
      photoBefore: createSamplePortrait('CÔ ĐẶNG HUỲNH MAI', 'Lớp học vùng sông nước', { bg1: '#1e354e', suit: '#5a2d48', skin: '#f5d9bd' }),
      story: 'Ảnh cô giáo Đặng Huỳnh Mai thời còn dạy học sinh tiểu học miền sông nước Cửu Long. Cô luôn dành trọn tình thương cho các em học sinh có hoàn cảnh khó khăn và tận tụy với sự nghiệp giáo dục mầm non, tiểu học.',
      createdAt: '27/10/2026'
    },
    {
      id: 'mem-10',
      teacherName: 'Thầy giáo Chu Văn An',
      workplace: 'Quốc Tử Giám • Thăng Long',
      teacherInfo: 'Vạn thế sư biểu • Hiệu trưởng Quốc Tử Giám (1292–1370). Tượng đài bất hủ của đạo học Việt Nam, người thầy cương trực, liêm khiết coi trọng học đạo trước khi học chữ.',
      senderName: 'CLB Hội Họa & Văn Hóa Cổ Truyền',
      school: 'THPT Chu Văn An',
      province: 'Hà Nội',
      category: 'ancient',
      photo: 'assets/teacher/dt_23_luong_van_can.jpg',
      photoAfter: 'assets/teacher/dt_23_luong_van_can.jpg',
      photoBefore: 'assets/teacher/dt_23_luong_van_can.jpg',
      story: 'Bức tranh họa Thầy Chu Văn An thờ tại Văn Miếu. Chúng em trân quý dâng tặng hình ảnh tà áo xanh nho sinh thanh bạch, chòm râu bạc như cước và cốt cách cương trực lưu truyền ngàn năm.',
      createdAt: '28/10/2026'
    },
    {
      id: 'mem-11',
      teacherName: 'Cố Thủ tướng Phạm Văn Đồng',
      workplace: 'Chính phủ nước CHXHCN Việt Nam • Hà Nội',
      teacherInfo: 'Nhà văn hóa lớn, Người hết lòng vì sự nghiệp giáo dục (1906–2000). Trưởng ban Chỉ đạo Cải cách Giáo dục Trung ương, người ký quyết định thành lập Ngày Nhà giáo Việt Nam 20/11.',
      senderName: 'Nhóm Tri Ân Thầy Cô 20/11',
      school: 'THPT Chuyên Lê Khiết',
      province: 'Quảng Ngãi',
      category: 'modern',
      photo: 'assets/ministers/GS. Vũ Đình Hòe.jpg',
      photoAfter: 'assets/ministers/GS. Vũ Đình Hòe.jpg',
      photoBefore: 'assets/ministers/GS. Vũ Đình Hòe.jpg',
      story: 'Bức ảnh Bác Đồng ân cần thăm hỏi các thầy cô giáo tiêu biểu toàn quốc năm 1982, ngày Nhà giáo Việt Nam 20/11 đầu tiên được chính thức công nhận. Nụ cười ấm áp chan chứa niềm tin vào đội ngũ người đưa đò.',
      createdAt: '29/10/2026'
    },
    {
      id: 'mem-12',
      teacherName: 'Thầy giáo Nguyễn Tất Thành',
      workplace: 'Trường Dục Thanh • Phan Thiết, Bình Thuận',
      teacherInfo: 'Thầy giáo dạy chữ Hán, chữ Quốc ngữ và thể dục tại trường Dục Thanh (Phan Thiết, 1910). Người thầy trẻ đầy nhiệt huyết yêu nước, khai mở tư duy tự lực tự cường cho thế hệ trẻ.',
      senderName: 'Lê Thanh Bình & Nhóm Sử Học Trẻ',
      school: 'THPT Chuyên Phan Thiết',
      province: 'Bình Thuận',
      category: 'resis',
      photo: 'assets/teacher/dt_26_nguyen_tat_thanh.jpg',
      photoAfter: 'assets/teacher/dt_26_nguyen_tat_thanh.jpg',
      photoBefore: 'assets/teacher/dt_26_nguyen_tat_thanh.jpg',
      story: 'Bức ảnh phục dựng người thầy giáo trẻ Nguyễn Tất Thành với bảng gỗ và lớp học rợp bóng cây khế trường Dục Thanh (Phan Thiết, 1910). Nét mặt tuấn tú, đôi mắt sáng rực hoài bão tìm đường cứu nước.',
      createdAt: '30/10/2026'
    },
    {
      id: 'mem-13',
      teacherName: 'GS. Lê Văn Thiêm',
      workplace: 'ĐH Tổng hợp Hà Nội • Hà Nội',
      teacherInfo: 'Nhà toán học hàng đầu Việt Nam, Viện trưởng đầu tiên của Viện Toán học (1918–1991). Người thầy đặt nền móng cho nền toán học hiện đại Việt Nam.',
      senderName: 'Phạm Đức Anh (Lớp 11 Toán 1)',
      school: 'THPT Chuyên KHTN ĐHQG Hà Nội',
      province: 'Hà Nội',
      category: 'modern',
      photo: createSamplePortrait('GS. LÊ VĂN THIÊM', 'Khu sơ tán • 1966', { bg1: '#18304c', suit: '#1f2a3a', skin: '#edd3b6' }),
      photoAfter: createSamplePortrait('GS. LÊ VĂN THIÊM', 'Khu sơ tán • 1966', { bg1: '#18304c', suit: '#1f2a3a', skin: '#edd3b6' }),
      photoBefore: createSamplePortrait('GS. LÊ VĂN THIÊM', 'Khu sơ tán • 1966', { bg1: '#18304c', suit: '#1f2a3a', skin: '#edd3b6' }),
      story: 'Ảnh phục hồi những bài giảng toán lý thuyết hàm số phức đầu tiên tại khu sơ tán Đại học Tổng hợp trong kháng chiến chống Mỹ.',
      createdAt: '31/10/2026'
    },
    {
      id: 'mem-14',
      teacherName: 'GS. Hoàng Tụy',
      workplace: 'Viện Toán học Việt Nam • Hà Nội',
      teacherInfo: 'Viện trưởng Viện Toán học, Cha đẻ của trường phái Tối ưu toàn cục (1927–2019). Tấm gương lớn về sự trung thực trong học thuật và tinh thần phụng sự giáo dục.',
      senderName: 'Đoàn Nhật Quang (Lớp 12 Chuyên Tin)',
      school: 'THPT Chuyên Lê Quý Đôn',
      province: 'Đà Nẵng',
      category: 'modern',
      photo: createSamplePortrait('GS. HOÀNG TỤY', 'Bảng phấn Viện Toán • 1978', { bg1: '#19324e', suit: '#212d3e', skin: '#eed3b7' }),
      photoAfter: createSamplePortrait('GS. HOÀNG TỤY', 'Bảng phấn Viện Toán • 1978', { bg1: '#19324e', suit: '#212d3e', skin: '#eed3b7' }),
      photoBefore: createSamplePortrait('GS. HOÀNG TỤY', 'Bảng phấn Viện Toán • 1978', { bg1: '#19324e', suit: '#212d3e', skin: '#eed3b7' }),
      story: 'Chân dung GS. Hoàng Tụy bên bảng phấn đầy ắp những phương trình tối ưu học làm rạng danh nền toán học nước nhà trên trường quốc tế.',
      createdAt: '01/11/2026'
    },
    {
      id: 'mem-15',
      teacherName: 'Cô giáo Lê Thị Mây',
      workplace: 'Trường Tiểu học Ngư Thủy • Lệ Thủy, Quảng Bình',
      teacherInfo: 'Giáo viên vùng bão lũ miền Trung. Người cô chèo đò vượt nước lũ dâng cao mang bài giảng và sách vở đến tận nhà cho các em học sinh nghèo.',
      senderName: 'Trần Văn Hưng (Lớp 10A4)',
      school: 'THPT Lệ Thủy',
      province: 'Quảng Bình',
      category: 'highland',
      photo: createSamplePortrait('CÔ LÊ THỊ MÂY', 'Đò qua rốn lũ • 2005', { bg1: '#213a52', suit: '#4f2d3a', skin: '#edd4b7' }),
      photoAfter: createSamplePortrait('CÔ LÊ THỊ MÂY', 'Đò qua rốn lũ • 2005', { bg1: '#213a52', suit: '#4f2d3a', skin: '#edd4b7' }),
      photoBefore: createSamplePortrait('CÔ LÊ THỊ MÂY', 'Đò qua rốn lũ • 2005', { bg1: '#213a52', suit: '#4f2d3a', skin: '#edd4b7' }),
      story: 'Bức ảnh cô giáo chèo đò vượt nước lũ đưa bài học đến cho các em học sinh ở làng ngập sâu. Nụ cười ấm áp của cô là điểm tựa cho bao em nhỏ vùng rốn lũ.',
      createdAt: '01/11/2026'
    },
    {
      id: 'mem-16',
      teacherName: 'Thầy giáo Nguyễn Ngọc Ký',
      workplace: 'Trường THCS Hải Thanh • Hải Hậu, Nam Định',
      teacherInfo: 'Nhà giáo Ưu tú viết bằng chân (1947–2022). Tấm gương vượt lên số phận phi thường, người thầy truyền cảm hứng bất tận về nghị lực sống cho hàng triệu thế hệ học sinh.',
      senderName: 'Bùi Thị Hồng Hạnh (Lớp 11 Văn)',
      school: 'THPT Chuyên Lương Thế Vinh',
      province: 'Đồng Nai',
      category: 'modern',
      photo: createSamplePortrait('THẦY NGUYỄN NGỌC KÝ', 'Vượt lên số phận • 1968', { bg1: '#1c344f', suit: '#202f43', skin: '#eed5b9' }),
      photoAfter: createSamplePortrait('THẦY NGUYỄN NGỌC KÝ', 'Vượt lên số phận • 1968', { bg1: '#1c344f', suit: '#202f43', skin: '#eed5b9' }),
      photoBefore: createSamplePortrait('THẦY NGUYỄN NGỌC KÝ', 'Vượt lên số phận • 1968', { bg1: '#1c344f', suit: '#202f43', skin: '#eed5b9' }),
      story: 'Tấm gương sáng phi thường của Thầy Nguyễn Ngọc Ký với đôi chân tài hoa nắn nót từng dòng chữ trên trang vở học trò, biểu tượng kiên cường bất khuất.',
      createdAt: '01/11/2026'
    },
    {
      id: 'mem-17',
      teacherName: 'GS. Tôn Thất Tùng',
      workplace: 'Đại học Y Hà Nội • Hà Nội',
      teacherInfo: 'Anh hùng Lao động, Thầy thuốc nhân dân (1912–1982). Nhà bác học ngoại khoa lỗi lạc, người thầy đào tạo lớp lớp thế hệ bác sĩ phẫu thuật cứu thương nơi chiến trường.',
      senderName: 'Nguyễn Thành Long (K118 Bác sĩ Đa khoa)',
      school: 'ĐH Y Hà Nội',
      province: 'Hà Nội',
      category: 'resis',
      photo: createSamplePortrait('GS. TÔN THẤT TÙNG', 'Hầm dã chiến • 1970', { bg1: '#1b334d', suit: '#2a3b4c', skin: '#eed5b8' }),
      photoAfter: createSamplePortrait('GS. TÔN THẤT TÙNG', 'Hầm dã chiến • 1970', { bg1: '#1b334d', suit: '#2a3b4c', skin: '#eed5b8' }),
      photoBefore: createSamplePortrait('GS. TÔN THẤT TÙNG', 'Hầm dã chiến • 1970', { bg1: '#1b334d', suit: '#2a3b4c', skin: '#eed5b8' }),
      story: 'Chân dung Giáo sư Tôn Thất Tùng hướng dẫn sinh viên y khoa thực tập phẫu thuật trong hầm hào kháng chiến chống Mỹ cứu nước.',
      createdAt: '02/11/2026'
    },
    {
      id: 'mem-18',
      teacherName: 'Thầy giáo Đỗ Trọng Thao',
      workplace: 'Trường Sa Mưu • Vĩnh Linh, Quảng Trị',
      teacherInfo: 'Giáo viên vùng giới tuyến Vĩnh Linh. Thầy dũng cảm che chắn bom đạn cho học trò trong các lớp học hầm địa đạo, giữ vững tiếng giảng bài giữa mưa bom bão đạn.',
      senderName: 'Lê Phước Khang (Lớp 12A1)',
      school: 'THPT Chuyên Lê Thánh Tông',
      province: 'Quảng Nam',
      category: 'resis',
      photo: createSamplePortrait('THẦY ĐỖ TRỌNG THAO', 'Địa đạo Vĩnh Linh • 1972', { bg1: '#1a324c', suit: '#293e2f', skin: '#edd3b6' }),
      photoAfter: createSamplePortrait('THẦY ĐỖ TRỌNG THAO', 'Địa đạo Vĩnh Linh • 1972', { bg1: '#1a324c', suit: '#293e2f', skin: '#edd3b6' }),
      photoBefore: createSamplePortrait('THẦY ĐỖ TRỌNG THAO', 'Địa đạo Vĩnh Linh • 1972', { bg1: '#1a324c', suit: '#293e2f', skin: '#edd3b6' }),
      story: 'Thầy Thao che chắn cho học sinh dưới làn bom đạn vùng giới tuyến Vĩnh Linh, Quảng Trị. Bức ảnh ghi dấu ấn tinh thần quả cảm kiên trung của nhà giáo Việt Nam.',
      createdAt: '02/11/2026'
    },
    {
      id: 'mem-19',
      teacherName: 'Cô giáo Bùi Thị Cúc',
      workplace: 'Trường Mầm non Xã Đảo Song Tử Tây • Huyện Đảo Trường Sa',
      teacherInfo: 'Cô giáo trường mầm non Song Tử Tây, huyện đảo Trường Sa, Khánh Hòa. Tận tụy gieo mầm tri thức và tình yêu biển đảo thiêng liêng nơi đầu sóng ngọn gió.',
      senderName: 'Nhóm Em Yêu Biển Đảo (Khối 8)',
      school: 'THCS Trần Phú',
      province: 'Khánh Hòa',
      category: 'highland',
      photo: createSamplePortrait('CÔ BÙI THỊ CÚC', 'Trường Sa thân yêu • 2012', { bg1: '#1d3e5a', suit: '#3a4a62', skin: '#efd5b9' }),
      photoAfter: createSamplePortrait('CÔ BÙI THỊ CÚC', 'Trường Sa thân yêu • 2012', { bg1: '#1d3e5a', suit: '#3a4a62', skin: '#efd5b9' }),
      photoBefore: createSamplePortrait('CÔ BÙI THỊ CÚC', 'Trường Sa thân yêu • 2012', { bg1: '#1d3e5a', suit: '#3a4a62', skin: '#efd5b9' }),
      story: 'Lớp học mầm non rộn rã tiếng cười giữa muôn trùng sóng gió Trường Sa. Bức ảnh tôn vinh người cô giáo mang tuổi trẻ đến với hải đảo tiền tiêu của Tổ quốc.',
      createdAt: '02/11/2026'
    },
    {
      id: 'mem-20',
      teacherName: 'Thầy giáo La Văn Hùng',
      workplace: 'Điểm trường Bản Làng Nủ • Phúc Khánh, Bảo Yên, Lào Cai',
      teacherInfo: 'Giáo viên vùng cao bản Làng Nủ. Sau trận lũ quét kinh hoàng, thầy cùng dân bản đào bới bùn đất dựng lại phòng học, tìm lại từng cuốn sách vở cho học trò đến trường.',
      senderName: 'Nhóm Trái Tim Học Trò (Lớp 11 Sinh)',
      school: 'THPT Chuyên Lào Cai',
      province: 'Lào Cai',
      category: 'highland',
      photo: createSamplePortrait('THẦY LA VĂN HÙNG', 'Dựng lại lớp học • 2024', { bg1: '#1e344e', suit: '#353f32', skin: '#f0d6b9' }),
      photoAfter: createSamplePortrait('THẦY LA VĂN HÙNG', 'Dựng lại lớp học • 2024', { bg1: '#1e344e', suit: '#353f32', skin: '#f0d6b9' }),
      photoBefore: createSamplePortrait('THẦY LA VĂN HÙNG', 'Dựng lại lớp học • 2024', { bg1: '#1e344e', suit: '#353f32', skin: '#f0d6b9' }),
      story: 'Bức ảnh thầy Hùng sau trận lũ quét lịch sử, cặm cụi cùng dân bản dựng lại từng chiếc bàn, tìm lại từng cuốn vở cho học trò trở lại lớp học.',
      createdAt: '02/11/2026'
    },
    {
      id: 'mem-21',
      teacherName: 'GS. Phan Huy Lê',
      workplace: 'Khoa Lịch sử • ĐH KHXH&NV ĐHQG Hà Nội',
      teacherInfo: 'Nhà sử học lớn, Nhà giáo nhân dân (1934–2018). Người thầy khai mở nhiều công trình nghiên cứu sử học và khảo cổ học tầm vóc quốc gia như Hoàng thành Thăng Long.',
      senderName: 'Nguyễn Văn Minh (K60 Sử Học)',
      school: 'ĐH KHXH&NV ĐHQG Hà Nội',
      province: 'Hà Nội',
      category: 'modern',
      photo: createSamplePortrait('GS. PHAN HUY LÊ', 'Nghiên cứu Hoàng Thành • 2004', { bg1: '#1c3450', suit: '#202e42', skin: '#eed4b7' }),
      photoAfter: createSamplePortrait('GS. PHAN HUY LÊ', 'Nghiên cứu Hoàng Thành • 2004', { bg1: '#1c3450', suit: '#202e42', skin: '#eed4b7' }),
      photoBefore: createSamplePortrait('GS. PHAN HUY LÊ', 'Nghiên cứu Hoàng Thành • 2004', { bg1: '#1c3450', suit: '#202e42', skin: '#eed4b7' }),
      story: 'Bức ảnh Giáo sư Phan Huy Lê bên di tích Hoàng thành Thăng Long, người thầy đã truyền tình yêu sử học cho hàng vạn sinh viên Việt Nam.',
      createdAt: '02/11/2026'
    },
    {
      id: 'mem-22',
      teacherName: 'Thầy giáo Nguyễn Xuân Khang',
      workplace: 'Trường Marie Curie • Hà Nội',
      teacherInfo: 'Hiệu trưởng trường Marie Curie Hà Nội. Người thầy nhân ái đã đứng ra nhận nuôi và tài trợ toàn bộ học phí, sinh hoạt cho các em nhỏ mồ côi sau thảm họa lũ quét Làng Nủ đến khi trưởng thành.',
      senderName: 'Học sinh Marie Curie khóa 2023–2026',
      school: 'Trường Marie Curie',
      province: 'Hà Nội',
      category: 'modern',
      photo: createSamplePortrait('THẦY NGUYỄN XUÂN KHANG', 'Vòng tay nhân ái • 2024', { bg1: '#1b334e', suit: '#1e2c40', skin: '#eed5b8' }),
      photoAfter: createSamplePortrait('THẦY NGUYỄN XUÂN KHANG', 'Vòng tay nhân ái • 2024', { bg1: '#1b334e', suit: '#1e2c40', skin: '#eed5b8' }),
      photoBefore: createSamplePortrait('THẦY NGUYỄN XUÂN KHANG', 'Vòng tay nhân ái • 2024', { bg1: '#1b334e', suit: '#1e2c40', skin: '#eed5b8' }),
      story: 'Bức ảnh Thầy Khang nhận nuôi các em nhỏ mồ côi bản Làng Nủ học tập đến năm 18 tuổi. Tấm lòng nhân ái bao la của người thầy vĩ đại trong lòng học trò.',
      createdAt: '02/11/2026'
    },
    {
      id: 'mem-23',
      teacherName: 'Cô giáo Trương Thị Lệ',
      workplace: 'Trường Nuôi Dạy Trẻ Khuyết Tật • Đà Nẵng',
      teacherInfo: 'Giáo viên dạy trẻ khuyết tật khiếm thính. Hơn 15 năm dùng đôi bàn tay yêu thương và ngôn ngữ ký hiệu thắp sáng tương lai cho hàng trăm trẻ em câm điếc.',
      senderName: 'Hội Cựu Học Sinh Khiếm Thính',
      school: 'Trường Nuôi Dạy Trẻ Khuyết Tật',
      province: 'Đà Nẵng',
      category: 'highland',
      photo: createSamplePortrait('CÔ TRƯƠNG THỊ LỆ', 'Ngôn ngữ của tình thương • 2015', { bg1: '#1e3752', suit: '#502a42', skin: '#eed5b8' }),
      photoAfter: createSamplePortrait('CÔ TRƯƠNG THỊ LỆ', 'Ngôn ngữ của tình thương • 2015', { bg1: '#1e3752', suit: '#502a42', skin: '#eed5b8' }),
      photoBefore: createSamplePortrait('CÔ TRƯƠNG THỊ LỆ', 'Ngôn ngữ của tình thương • 2015', { bg1: '#1e3752', suit: '#502a42', skin: '#eed5b8' }),
      story: 'Đôi bàn tay ấm áp của cô Lệ hướng dẫn từng ngôn ngữ ký hiệu cho các em nhỏ không nghe không nói được, thắp sáng tương lai cho trẻ thơ.',
      createdAt: '02/11/2026'
    },
    {
      id: 'mem-24',
      teacherName: 'GS. Viện sĩ Trần Đại Nghĩa',
      workplace: 'Cục Quân giới • Chiến khu Việt Bắc',
      teacherInfo: 'Nhà khoa học quân sự lỗi lạc, Người thầy đào tạo thế hệ kỹ sư quân giới đầu tiên (1913–1997). Người thầy mở lớp đào tạo kỹ thuật vũ khí trong rừng rậm Việt Bắc bảo vệ nền độc lập tự do.',
      senderName: 'CLB Kỹ Thuật Trẻ',
      school: 'THPT Chuyên Trần Đại Nghĩa',
      province: 'TP. Hồ Chí Minh',
      category: 'resis',
      photo: createSamplePortrait('GS. TRẦN ĐẠI NGHĨA', 'Lớp học quân giới • 1948', { bg1: '#19314c', suit: '#1d2a3c', skin: '#efd5b7' }),
      photoAfter: createSamplePortrait('GS. TRẦN ĐẠI NGHĨA', 'Lớp học quân giới • 1948', { bg1: '#19314c', suit: '#1d2a3c', skin: '#efd5b7' }),
      photoBefore: createSamplePortrait('GS. TRẦN ĐẠI NGHĨA', 'Lớp học quân giới • 1948', { bg1: '#19314c', suit: '#1d2a3c', skin: '#efd5b7' }),
      story: 'Chân dung Giáo sư Trần Đại Nghĩa trong lớp học chế tạo vũ khí tại rừng rậm chiến khu Việt Bắc, người thầy đào tạo thế hệ kỹ sư quân giới đầu tiên.',
      createdAt: '02/11/2026'
    }
  ];

  window.MEMORY_WALL_DATA = initialMemories;
})();
