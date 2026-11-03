/**
 * =========================================================================================
 * BẢO TÀNG SỐ NHÀ GIÁO VIỆT NAM — HỆ THỐNG ĐỒNG BỘ 2 TAB & LƯU ẢNH VÀO GOOGLE DRIVE (v2.0)
 * 
 * 1. Google Spreadsheet ID: 1NTR--NxzjtvlzQVDhuVNYQ5q71tVJ8i-4DMnW3uMdSg
 *    - Tab 1: "Trang tính1" (ID: 0): Lưu Lời chúc & Thiệp trên Cội Cây Tri Ân (7 cột)
 *    - Tab 2: "ảnh·" (ID: 99743454): Lưu Ảnh tư liệu & Bài đăng Bức Tường Ký Ức (8 cột)
 * 
 * 2. Thư mục Google Drive Lưu Ảnh Tự Động: 1fhjd8d7Ilf8FhHYTrxvjJJdMaE1q0ZBH
 *    (Link Drive: https://drive.google.com/drive/folders/1fhjd8d7Ilf8FhHYTrxvjJJdMaE1q0ZBH)
 * =========================================================================================
 * 
 * HƯỚNG DẪN 3 BƯỚC CẬP NHẬT CHUẨN XÁC 100% (GIỮ NGUYÊN ĐƯỜNG LINK WEB APP CŨ):
 * 
 * ✦ BƯỚC 1: DÁN CODE MỚI & LƯU
 *    - Mở Google Sheet "cây tri ân" -> Tiện ích mở rộng -> Apps Script.
 *    - Xóa toàn bộ mã cũ trong file Code.gs, dán toàn bộ đoạn code này vào.
 *    - Bấm LƯU (Ctrl + S).
 * 
 * ✦ BƯỚC 2: CHẠY HÀM KIỂM TRA ĐỂ CẤP QUYỀN GOOGLE DRIVE (CỰC KỲ QUAN TRỌNG)
 *    - Trên thanh công cụ trên cùng, tại menu thả xuống bên cạnh nút "Gỡ lỗi", chọn hàm:
 *      👉 kiemTraVaCapQuyen
 *    - Bấm nút "Chạy" (Run) ▶️.
 *    - Google sẽ hiện bảng "Cần có sự ủy quyền" (Authorization Required):
 *      1. Bấm "Xem lại quyền" (Review permissions).
 *      2. Chọn tài khoản Google của bạn.
 *      3. Bấm vào chữ "Nâng cao" (Advanced) ở góc dưới.
 *      4. Bấm "Đi tới ... (không an toàn)" / "Go to ... (unsafe)".
 *      5. Bấm "Cho phép" (Allow).
 *    - Sau khi cấp quyền, hàm sẽ chạy và xuất thông báo "🎉 CHÚC MỪNG! HỆ THỐNG ĐÃ CẤP QUYỀN THÀNH CÔNG!"
 *      và bạn sẽ thấy ngay 1 dòng test xuất hiện trong tab "ảnh" của Google Sheet!
 * 
 * ✦ BƯỚC 3: CẬP NHẬT PHIÊN BẢN MỚI CHO WEB APP
 *    - Bấm nút "Triển khai" (Deploy) màu xanh ở góc trên bên phải.
 *    - Chọn "Quản lý các tùy chọn triển khai" (Manage deployments).
 *    - Bấm biểu tượng CÂY BÚT ✏️ (Chỉnh sửa) ở góc phải bản triển khai hiện tại.
 *    - Tại dòng "Phiên bản" (Version): Bấm chọn 👉 "Phiên bản mới" (New version).
 *    - Kiểm tra: "Thực thi dưới dạng" = "Tôi" (Me); "Ai có quyền truy cập" = "Bất kỳ ai" (Anyone).
 *    - Bấm nút "Triển khai" (Deploy) ➔ XONG 100%!
 * =========================================================================================
 */

var SPREADSHEET_ID = '1NTR--NxzjtvlzQVDhuVNYQ5q71tVJ8i-4DMnW3uMdSg';
var DRIVE_FOLDER_ID = '1fhjd8d7Ilf8FhHYTrxvjJJdMaE1q0ZBH';
var TAB_TRIBUTES_ID = 0;         // Tab 1: Trang tính1
var TAB_MEMORIES_ID = 99743454;  // Tab 2: ảnh

// -----------------------------------------------------------------------------------------
// HÀM CHUẨN HÓA VĂN BẢN TIẾNG VIỆT
// -----------------------------------------------------------------------------------------
function toProperCaseVN(str) {
  if (!str) return '';
  var ACRONYMS = ['THPT', 'THCS', 'TH', 'MN', 'ĐH', 'CĐ', 'HV', 'GDĐT', 'GDTX', 'GDNN', 'TP.', 'TP', 'GS', 'PGS', 'TS', 'THS', 'NGND', 'NGƯT', 'I', 'II', 'III'];
  return String(str)
    .trim()
    .replace(/\s+/g, ' ')
    .split(' ')
    .map(function (w) {
      if (!w) return '';
      if (w === '-' || w === '–') return '–';
      var up = w.toUpperCase();
      if (ACRONYMS.indexOf(up) !== -1 || ACRONYMS.indexOf(up.replace(/\./g, '')) !== -1) return up;
      return w.charAt(0).toUpperCase() + w.slice(1).toLowerCase();
    })
    .join(' ');
}

function formatClassVN(str) {
  if (!str) return '';
  return String(str).trim().replace(/\s+/g, ' ').toUpperCase();
}

function formatSentenceVN(str) {
  if (!str) return '';
  var s = String(str).trim().replace(/\s+/g, ' ');
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// -----------------------------------------------------------------------------------------
// 1. TÌM VÀ TRẢ VỀ TAB "Trang tính1" (CÂY TRI ÂN - 7 CỘT)
// -----------------------------------------------------------------------------------------
function getSheetTributes(ss) {
  var allSheets = ss.getSheets();
  // 1. Tìm theo sheetId 0 (chuẩn xác vĩnh viễn)
  for (var i = 0; i < allSheets.length; i++) {
    if (allSheets[i].getSheetId() === TAB_TRIBUTES_ID) {
      return allSheets[i];
    }
  }
  // 2. Tìm theo tên "Trang tính1" hoặc "cây tri ân"
  var sheet = ss.getSheetByName('Trang tính1');
  if (!sheet) sheet = ss.getSheetByName('cây tri ân');
  if (!sheet) sheet = allSheets[0];

  // Nếu sheet hoàn toàn trống thì tạo tiêu đề 7 cột
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Thời gian',
      'Người gửi',
      'Lớp',
      'Trường',
      'Tỉnh/Thành phố',
      'Kính gửi Thầy/Cô',
      'Thông điệp'
    ]);
    sheet.getRange(1, 1, 1, 7).setFontWeight('bold').setBackground('#d9e1f2');
  }
  return sheet;
}

// -----------------------------------------------------------------------------------------
// 2. TÌM VÀ TRẢ VỀ TAB "ảnh" (BỨC TƯỜNG KÝ ỨC - 8 CỘT)
// -----------------------------------------------------------------------------------------
function getSheetMemories(ss) {
  var allSheets = ss.getSheets();

  // 1. Tìm theo sheetId 99743454 (chuẩn xác 100% không phụ thuộc tên tab!)
  for (var i = 0; i < allSheets.length; i++) {
    if (allSheets[i].getSheetId() === TAB_MEMORIES_ID) {
      return allSheets[i];
    }
  }

  // 2. Tìm theo tên tab có chứa chữ "ảnh" hoặc "tính 2" hoặc "ký ức"
  for (var j = 0; j < allSheets.length; j++) {
    var name = allSheets[j].getName().toLowerCase();
    if (name.indexOf('ảnh') !== -1 || name.indexOf('anh') !== -1 || name.indexOf('tính2') !== -1 || name.indexOf('ký ức') !== -1) {
      return allSheets[j];
    }
  }

  // 3. Chọn tab thứ 2 (index 1) nếu có
  if (allSheets.length > 1) {
    return allSheets[1];
  }

  // 4. Nếu chưa có tab thứ 2, tự động tạo mới
  var newSheet = ss.insertSheet('ảnh');
  newSheet.appendRow([
    'Thời gian',
    'Người gửi',
    'Lớp',
    'Trường',
    'Tỉnh/Thành phố',
    'Nhà giáo',
    'Kính gửi Thầy/Cô',
    'Link ảnh'
  ]);
  newSheet.getRange(1, 1, 1, 8).setFontWeight('bold').setBackground('#fce4d6');
  return newSheet;
}

// -----------------------------------------------------------------------------------------
// 3. HÀM LƯU ẢNH BASE64 VÀO GOOGLE DRIVE FOLDER (1fhjd8d7Ilf8FhHYTrxvjJJdMaE1q0ZBH)
// -----------------------------------------------------------------------------------------
function saveBase64ImageToDrive(base64Data, filename, mimeType) {
  if (!base64Data) return { url: '', fileId: '' };
  try {
    var folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
    var cleanBase64 = String(base64Data).trim();
    var contentType = mimeType || 'image/jpeg';

    if (cleanBase64.indexOf(';base64,') !== -1) {
      var parts = cleanBase64.split(';base64,');
      contentType = parts[0].replace('data:', '') || contentType;
      cleanBase64 = parts[1];
    } else if (cleanBase64.indexOf(',') !== -1) {
      cleanBase64 = cleanBase64.split(',')[1];
    }

    var decoded = Utilities.base64Decode(cleanBase64);
    var safeFileName = filename || ('anh_nha_giao_' + Date.now() + '.jpg');
    var blob = Utilities.newBlob(decoded, contentType, safeFileName);
    var file = folder.createFile(blob);

    // Cấp quyền xem cho bất kỳ ai có link
    try {
      file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    } catch (eShare) {
      Logger.log('Quyền chia sẻ: ' + eShare);
    }

    var fileId = file.getId();
    // Link trực tiếp tối ưu nhất hiển thị trên mọi website không bị chặn cookie/CORS
    var directUrl = 'https://lh3.googleusercontent.com/d/' + fileId;
    return { url: directUrl, fileId: fileId, viewUrl: file.getUrl() };
  } catch (err) {
    Logger.log('Lỗi lưu ảnh Google Drive: ' + err);
    return { url: '', fileId: '', error: String(err) };
  }
}

// -----------------------------------------------------------------------------------------
// 4. GHI DỮ LIỆU VÀO TAB "ảnh" (BỨC TƯỜNG KÝ ỨC - ĐÚNG 8 CỘT)
// -----------------------------------------------------------------------------------------
function appendMemoryWall(payload) {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = getSheetMemories(ss);

  var now = new Date();
  var createdAt = payload.createdAt || Utilities.formatDate(now, 'Asia/Ho_Chi_Minh', 'dd/MM/yyyy HH:mm:ss');
  var senderName = toProperCaseVN(payload.senderName || payload.studentName || payload.sender || 'Học sinh');
  var senderClass = formatClassVN(payload.senderClass || payload.className || payload.class || '');
  var senderSchool = toProperCaseVN(payload.senderSchool || payload.school || '');
  var senderCity = toProperCaseVN(payload.senderCity || payload.province || '');
  var teacherName = toProperCaseVN(payload.teacherName || payload.teacher || 'Thầy Cô Kính Mến');
  var teacherBio = formatSentenceVN(payload.teacherBio || payload.story || payload.message || '');

  // Lưu ảnh vào Drive Folder chỉ định
  var photoUrl = payload.photoUrl || '';
  var fileId = '';
  if (payload.base64) {
    var fileName = payload.fileName || ('Anh_' + teacherName.replace(/\s+/g, '_') + '_' + now.getTime() + '.jpg');
    var uploadRes = saveBase64ImageToDrive(payload.base64, fileName, payload.mimeType);
    if (uploadRes.url) {
      photoUrl = uploadRes.url;
      fileId = uploadRes.fileId;
    }
  }

  // Khớp chính xác 8 cột của tab "ảnh":
  // Cột A: Thời gian
  // Cột B: Người gửi
  // Cột C: Lớp
  // Cột D: Trường
  // Cột E: Tỉnh/Thành phố
  // Cột F: Nhà giáo
  // Cột G: Kính gửi Thầy/Cô (Thông tin & Tiểu sử nhà giáo)
  // Cột H: Link ảnh
  sheet.appendRow([
    createdAt,
    senderName,
    senderClass,
    senderSchool,
    senderCity,
    teacherName,
    teacherBio,
    photoUrl
  ]);

  return {
    ok: true,
    tab: sheet.getName(),
    tabId: sheet.getSheetId(),
    row: sheet.getLastRow(),
    photoUrl: photoUrl,
    fileId: fileId,
    data: {
      createdAt: createdAt,
      senderName: senderName,
      senderClass: senderClass,
      senderSchool: senderSchool,
      senderCity: senderCity,
      teacherName: teacherName,
      teacherBio: teacherBio,
      photoUrl: photoUrl
    }
  };
}

// -----------------------------------------------------------------------------------------
// 5. GHI DỮ LIỆU VÀO TAB "Trang tính1" (CÂY TRI ÂN - ĐÚNG 7 CỘT)
// -----------------------------------------------------------------------------------------
function appendTribute(payload) {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = getSheetTributes(ss);

  var now = new Date();
  var createdAt = payload.createdAt || Utilities.formatDate(now, 'Asia/Ho_Chi_Minh', 'dd/MM/yyyy HH:mm:ss');
  var sender = toProperCaseVN(payload.senderName || payload.sender || 'Học sinh');
  var className = formatClassVN(payload.className || payload.class || '');
  var school = toProperCaseVN(payload.school || '');
  var province = toProperCaseVN(payload.province || '');
  var teacher = toProperCaseVN(payload.teacher || 'Thầy Cô Kính Mến');
  var message = formatSentenceVN(payload.message || '');

  // Khớp chính xác 7 cột của tab "Trang tính1":
  // Cột A: Thời gian
  // Cột B: Người gửi
  // Cột C: Lớp
  // Cột D: Trường
  // Cột E: Tỉnh/Thành phố
  // Cột F: Kính gửi Thầy/Cô
  // Cột G: Thông điệp
  sheet.appendRow([
    createdAt,
    sender,
    className,
    school,
    province,
    teacher,
    message
  ]);

  return {
    ok: true,
    tab: sheet.getName(),
    tabId: sheet.getSheetId(),
    row: sheet.getLastRow(),
    data: {
      createdAt: createdAt,
      sender: sender,
      className: className,
      school: school,
      province: province,
      teacher: teacher,
      message: message
    }
  };
}

// -----------------------------------------------------------------------------------------
// 6. ĐỌC DỮ LIỆU THEO TÊN TAB HOẶC ID TAB
// -----------------------------------------------------------------------------------------
function getSheetRows(tabKey) {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = null;
  if (tabKey === 'memories' || tabKey === 'ảnh' || tabKey === 'Trang tính2') {
    sheet = getSheetMemories(ss);
  } else {
    sheet = getSheetTributes(ss);
  }

  if (!sheet || sheet.getLastRow() <= 1) return [];

  var data = sheet.getDataRange().getValues();
  var rows = [];
  for (var i = 1; i < data.length; i++) {
    rows.push(data[i]);
  }
  return rows;
}

// -----------------------------------------------------------------------------------------
// 7. CỔNG TIẾP NHẬN GET (doGet)
// -----------------------------------------------------------------------------------------
function doGet(e) {
  try {
    var params = (e && e.parameter) ? e.parameter : {};
    var action = params.action || '';

    // Lấy dữ liệu Bức Tường Ký Ức (tab "ảnh")
    if (action === 'getMemories') {
      var memRows = getSheetRows('memories');
      return ContentService.createTextOutput(JSON.stringify({ ok: true, tab: 'ảnh', data: memRows }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Lấy dữ liệu Cây Tri Ân (tab "Trang tính1")
    if (action === 'getTributes') {
      var tribRows = getSheetRows('tributes');
      return ContentService.createTextOutput(JSON.stringify({ ok: true, tab: 'Trang tính1', data: tribRows }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Thêm vào Bức tường ký ức qua GET
    if (action === 'addMemory') {
      var memRes = appendMemoryWall(params);
      return ContentService.createTextOutput(JSON.stringify(memRes))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Thêm vào Cây tri ân qua GET
    if (action === 'add' || action === 'addTribute' || params.message) {
      var tribRes = appendTribute(params);
      return ContentService.createTextOutput(JSON.stringify(tribRes))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Mặc định: Trả về trạng thái hoạt động tốt của cả 2 Tab & Thư mục Drive
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var tSheet = getSheetTributes(ss);
    var mSheet = getSheetMemories(ss);

    return ContentService.createTextOutput(JSON.stringify({
      ok: true,
      status: 'ONLINE',
      version: '2.0.0',
      message: 'Bảo Tàng Số Nhà Giáo Việt Nam — Hệ thống kết nối Google Sheet (2 Tab độc lập) & Google Drive hoạt động hoàn hảo!',
      spreadsheetId: SPREADSHEET_ID,
      driveFolderId: DRIVE_FOLDER_ID,
      tab1_CaiTriAn: tSheet.getName() + ' (ID: ' + tSheet.getSheetId() + ', ' + Math.max(0, tSheet.getLastRow() - 1) + ' lời tri ân)',
      tab2_BucTuongKyUc: mSheet.getName() + ' (ID: ' + mSheet.getSheetId() + ', ' + Math.max(0, mSheet.getLastRow() - 1) + ' tư liệu ảnh)'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// -----------------------------------------------------------------------------------------
// 8. CỔNG TIẾP NHẬN POST (doPost) — TIẾP NHẬN ẢNH VÀ DỮ LIỆU FORM
// -----------------------------------------------------------------------------------------
function doPost(e) {
  try {
    var payload = {};
    if (e && e.postData && e.postData.contents) {
      try {
        payload = JSON.parse(e.postData.contents);
      } catch (ex) {
        payload = (e && e.parameter) ? e.parameter : {};
      }
    } else if (e && e.parameter) {
      payload = e.parameter;
    }

    var action = payload.action || '';

    // Nếu là bài đăng Bức Tường Ký Ức (action === 'addMemory' hoặc có base64 hoặc có photoUrl hoặc có teacherBio)
    if (action === 'addMemory' || payload.base64 || payload.photoUrl || payload.teacherBio || (payload.teacherName && !payload.message)) {
      var memRes = appendMemoryWall(payload);
      return ContentService.createTextOutput(JSON.stringify(memRes))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Mặc định: Ghi vào Cây Tri Ân (Trang tính1)
    var tributeRes = appendTribute(payload);
    return ContentService.createTextOutput(JSON.stringify(tributeRes))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// -----------------------------------------------------------------------------------------
// 9. HÀM KIỂM TRA & CẤP QUYỀN TRUY CẬP (CHẠY 1 LẦN TRÊN TRÌNH SOẠN THẢO APPS SCRIPT)
// -----------------------------------------------------------------------------------------
function kiemTraVaCapQuyen() {
  Logger.log('--- BẮT ĐẦU KIỂM TRA HỆ THỐNG BẢO TÀNG NHÀ GIÁO ---');
  
  // 1. Kiểm tra Google Sheet
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet1 = getSheetTributes(ss);
  var sheet2 = getSheetMemories(ss);
  Logger.log('✅ 1. Kết nối Tab 1 (Cội Cây Tri Ân): ' + sheet1.getName() + ' [GID: ' + sheet1.getSheetId() + ']');
  Logger.log('✅ 2. Kết nối Tab 2 (Bức Tường Ký Ức): ' + sheet2.getName() + ' [GID: ' + sheet2.getSheetId() + ']');
  
  // 2. Kiểm tra Google Drive Folder
  var folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
  Logger.log('✅ 3. Kết nối Thư mục Google Drive: ' + folder.getName() + ' [ID: ' + folder.getId() + ']');
  
  // 3. Thử tạo 1 file ảnh nhỏ vào Drive
  var testBlob = Utilities.newBlob('He thong Bao tang Nha giao Viet Nam', 'text/plain', 'test_ket_noi.txt');
  var testFile = folder.createFile(testBlob);
  testFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
  Logger.log('✅ 4. Quyền lưu file Drive hoạt động tốt! File test ID: ' + testFile.getId());
  testFile.setTrashed(true); // Dọn dẹp file test
  
  // 4. Ghi thử 1 dòng chuẩn vào Tab ảnh (Tab 2)
  var testRow = [
    Utilities.formatDate(new Date(), 'Asia/Ho_Chi_Minh', 'dd/MM/yyyy HH:mm:ss'),
    'Hệ Thống Kiểm Tra',
    'Chuyên Gia',
    'Bảo Tàng Số',
    'Việt Nam',
    'Thầy Cô Kính Yêu',
    'Kết nối thành công giữa Google Drive và Tab Ảnh của Google Sheet!',
    'https://drive.google.com/drive/folders/' + DRIVE_FOLDER_ID
  ];
  sheet2.appendRow(testRow);
  Logger.log('✅ 5. Đã ghi thử 1 dòng vào Tab ' + sheet2.getName() + ' thành công!');
  
  Logger.log('-----------------------------------------------------------');
  Logger.log('🎉 CHÚC MỪNG! GOOGLE DRIVE VÀ GOOGLE SHEET ĐÃ ĐƯỢC CẤP QUYỀN 100%!');
  Logger.log('👉 Bây giờ bạn chỉ cần bấm "Triển khai" -> "Quản lý các tùy chọn triển khai" -> Bút chì ✏️ -> "Phiên bản mới" -> "Triển khai" là xong!');
}
