/**
 * =========================================================================================
 * BẢO TÀNG SỐ NHÀ GIÁO VIỆT NAM — GOOGLE APPS SCRIPT ĐỒNG BỘ 2 TAB & LƯU ẢNH DRIVE TỰ ĐỘNG
 * 
 * 1. Google Spreadsheet ID: 1NTR--NxzjtvlzQVDhuVNYQ5q71tVJ8i-4DMnW3uMdSg
 *    - Tab 1: "Trang tính1" (hoặc "cây tri ân"): Lưu Lời chúc & Thiệp trên Cội Cây Tri Ân (7 cột)
 *    - Tab 2: "Trang tính2": Lưu Ảnh tư liệu & Bài đăng Bức Tường Ký Ức (8 cột)
 * 2. Thư mục Google Drive Lưu Trữ Ảnh Tự Động: 1fhjd8d7Ilf8FhHYTrxvjJJdMaE1q0ZBH
 *    (Link Drive: https://drive.google.com/drive/folders/1fhjd8d7Ilf8FhHYTrxvjJJdMaE1q0ZBH)
 * =========================================================================================
 * 
 * HƯỚNG DẪN 3 BƯỚC CẬP NHẬT RẤT NHANH (GIỮ NGUYÊN ĐƯỜNG LINK WEB APP CŨ):
 * 
 * BƯỚC 1: Mở Google Sheet "cây tri ân":
 *         https://docs.google.com/spreadsheets/d/1NTR--NxzjtvlzQVDhuVNYQ5q71tVJ8i-4DMnW3uMdSg/edit
 * 
 * BƯỚC 2: Vào menu "Tiện ích mở rộng" (Extensions) -> chọn "Apps Script".
 *         Xóa toàn bộ mã cũ trong file Code.gs, dán toàn bộ mã này vào và bấm LƯU (Ctrl + S).
 * 
 * BƯỚC 3: Bấm nút "Triển khai" (Deploy) ở góc trên bên phải:
 *         -> Chọn "Quản lý các tùy chọn triển khai" (Manage deployments).
 *         -> Bấm vào biểu tượng CÂY BÚT ✏️ (Chỉnh sửa) ở góc phải bản triển khai hiện tại.
 *         -> Tại dòng "Phiên bản" (Version): Chọn "Phiên bản mới" (New version).
 *         -> Đảm bảo: "Thực thi dưới dạng" = "Tôi" (Me), "Ai có quyền truy cập" = "Bất kỳ ai" (Anyone).
 *         -> Bấm "Triển khai" (Deploy) -> Xong 100%!
 * =========================================================================================
 */

var SPREADSHEET_ID = '1NTR--NxzjtvlzQVDhuVNYQ5q71tVJ8i-4DMnW3uMdSg';
var DRIVE_FOLDER_ID = '1fhjd8d7Ilf8FhHYTrxvjJJdMaE1q0ZBH';
var TAB_TRIBUTES = 'Trang tính1'; // Cây tri ân
var TAB_MEMORIES = 'Trang tính2'; // Bức tường ký ức

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
  var sheet = ss.getSheetByName(TAB_TRIBUTES);
  if (!sheet) sheet = ss.getSheetByName('cây tri ân');
  if (!sheet) sheet = ss.getSheets()[0];

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
// 2. TÌM VÀ TRẢ VỀ TAB "Trang tính2" (BỨC TƯỜNG KÝ ỨC - 8 CỘT)
// -----------------------------------------------------------------------------------------
function getSheetMemories(ss) {
  var sheet = ss.getSheetByName(TAB_MEMORIES);
  if (!sheet) sheet = ss.getSheetByName('Bức tường ký ức');
  if (!sheet) {
    var sheets = ss.getSheets();
    if (sheets.length > 1) {
      sheet = sheets[1]; // Chọn tab thứ 2
    } else {
      sheet = ss.insertSheet(TAB_MEMORIES);
    }
  }

  // Nếu sheet hoàn toàn trống thì tạo tiêu đề 8 cột chuẩn
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Thời gian',
      'Người gửi',
      'Lớp',
      'Trường',
      'Tỉnh/Thành phố',
      'Nhà giáo',
      'Kính gửi Thầy/Cô',
      'Link ảnh'
    ]);
    sheet.getRange(1, 1, 1, 8).setFontWeight('bold').setBackground('#fce4d6');
  }
  return sheet;
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
    var blob = Utilities.newBlob(decoded, contentType, filename || ('anh_nha_giao_' + Date.now() + '.jpg'));
    var file = folder.createFile(blob);

    // Cấp quyền xem cho bất kỳ ai có link
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);

    var fileId = file.getId();
    // Link trực tiếp tốt nhất hiển thị trên mọi website không bị chặn cookie/CORS
    var directUrl = 'https://lh3.googleusercontent.com/d/' + fileId;
    return { url: directUrl, fileId: fileId, viewUrl: file.getUrl() };
  } catch (err) {
    Logger.log('Lỗi lưu ảnh Google Drive: ' + err);
    return { url: '', fileId: '', error: String(err) };
  }
}

// -----------------------------------------------------------------------------------------
// 4. GHI DỮ LIỆU VÀO TAB "Trang tính2" (BỨC TƯỜNG KÝ ỨC - ĐÚNG 8 CỘT)
// -----------------------------------------------------------------------------------------
function appendMemoryWall(payload) {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = getSheetMemories(ss);

  var now = new Date();
  var createdAt = payload.createdAt || Utilities.formatDate(now, 'Asia/Ho_Chi_Minh', 'dd/MM/yyyy HH:mm:ss');
  var senderName = toProperCaseVN(payload.senderName || payload.studentName || payload.sender || 'Học sinh');
  var senderClass = formatClassVN(payload.senderClass || payload.className || '');
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

  // Khớp chính xác 8 cột của Trang tính2:
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

  // Khớp chính xác 7 cột của Trang tính1:
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
// 6. ĐỌC DỮ LIỆU THEO TÊN TAB
// -----------------------------------------------------------------------------------------
function getSheetRows(tabName) {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = ss.getSheetByName(tabName);
  if (!sheet) {
    if (tabName === TAB_MEMORIES) sheet = getSheetMemories(ss);
    else sheet = getSheetTributes(ss);
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

    // Lấy dữ liệu Bức Tường Ký Ức (Trang tính2)
    if (action === 'getMemories') {
      var memRows = getSheetRows(TAB_MEMORIES);
      return ContentService.createTextOutput(JSON.stringify({ ok: true, tab: TAB_MEMORIES, data: memRows }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Lấy dữ liệu Cây Tri Ân (Trang tính1)
    if (action === 'getTributes') {
      var tribRows = getSheetRows(TAB_TRIBUTES);
      return ContentService.createTextOutput(JSON.stringify({ ok: true, tab: TAB_TRIBUTES, data: tribRows }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Thêm vào Bức tường ký ức qua GET (nếu không có ảnh)
    if (action === 'addMemory') {
      var memRes = appendMemoryWall(params);
      return ContentService.createTextOutput(JSON.stringify(memRes))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Thêm vào Cây tri ân (Trang tính1)
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
      message: 'Bảo Tàng Số Nhà Giáo Việt Nam — Hệ Thống Kết Nối Google Sheet & Google Drive Hoạt Động Tốt!',
      spreadsheetId: SPREADSHEET_ID,
      driveFolderId: DRIVE_FOLDER_ID,
      tab1_Tributes: tSheet.getName() + ' (' + Math.max(0, tSheet.getLastRow() - 1) + ' lời tri ân)',
      tab2_Memories: mSheet.getName() + ' (' + Math.max(0, mSheet.getLastRow() - 1) + ' ảnh tư liệu)'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// -----------------------------------------------------------------------------------------
// 8. CỔNG TIẾP NHẬN POST (doPost) — TIẾP NHẬN ẢNH VÀ DỮ LIỆU LỚN
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

    // Nếu là bài đăng Bức Tường Ký Ức (có action addMemory hoặc có base64 hoặc thông tin nhà giáo)
    if (action === 'addMemory' || payload.base64 || payload.teacherBio || payload.teacherName) {
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
