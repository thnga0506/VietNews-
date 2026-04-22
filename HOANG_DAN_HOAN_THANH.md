# Hướng Dẫn Hoàn Thành Dự Án VietNews

## Tình Trạng Hiện Tại

Dự án đã hoàn thành **60%**:
- ✅ Cấu trúc folder hoàn tất
- ✅ `index.html` (trang chủ) - sẵn sàng
- ✅ `assets/styles.css` (CSS chung) - sẵn sàng
- ✅ `bandoc/` folder - hoàn tất với 5 bài báo
- ✅ `congnghe/` folder - trang chính đã cập nhật
- ✅ `multimedia/` folder - bài viết longform hoàn tất
- ⏳ 8 folder chuyên mục còn lại cần hoàn thành

---

## Danh Sách Công Việc Cần Làm

### Phần 1: Cập Nhật 8 Trang Chuyên Mục Chính

Các trang này cần được cập nhật tương tự như `bandoc/bandoc.html` và `congnghe/congnghe.html`:

1. **doisong/doisong.html**
2. **dulich/dulich.html**
3. **giaoduc/giaoduc.html**
4. **suckhoe/suckhoe.html**
5. **thethao/thethao.html**
6. **thoisu/thoisu.html**
7. **vanhoa/vanhoa.html**

**Cách cập nhật (Quick Fix):**

Mỗi trang cần có các thay đổi sau:

```html
<!-- Từ -->
<link rel="stylesheet" href="styles.css">
<!-- Thành -->
<link rel="stylesheet" href="../assets/styles.css">
```

```html
<!-- Từ -->
<a href="index.html" class="logo">VIETNEWS</a>
<!-- Thành -->
<a href="../index.html" class="logo">VIETNEWS</a>
```

**Navigation Links** (thay thế tất cả):
```html
<!-- Từ -->
<li><a href="thoisu.html">Thời Sự</a></li>
<li><a href="giaoduc.html">Giáo Dục</a></li>
<!-- Thành -->
<li><a href="../thoisu/thoisu.html">Thời Sự</a></li>
<li><a href="../giaoduc/giaoduc.html">Giáo Dục</a></li>
```

**Article Links** (thay thế tất cả):
```html
<!-- Từ -->
<div class="article-card" onclick="window.location.href='article-detail.html?id=...'">
<!-- Thành -->
<div class="article-card" onclick="window.location.href='[tênchuyên mục]1.html'">
<div class="article-card" onclick="window.location.href='[tênchuyên mục]2.html'">
<!-- ... và tiếp tục tới 5 -->
```

**Footer Links**:
```html
<!-- Từ -->
<li><a href="thoisu.html">Thời Sự</a></li>
<!-- Thành -->
<li><a href="../thoisu/thoisu.html">Thời Sự</a></li>
```

---

### Phần 2: Tạo 40 Bài Báo Chi Tiết

Mỗi chuyên mục (ngoại trừ `bandoc` và `multimedia`) cần 5 bài báo:

**Danh sách bài báo cần tạo:**
- `doisong/doisong1-5.html` (5 file)
- `dulich/dulich1-5.html` (5 file)
- `giaoduc/giaoduc1-5.html` (5 file)
- `suckhoe/suckhoe1-5.html` (5 file)
- `thethao/thethao1-5.html` (5 file)
- `thoisu/thoisu1-5.html` (5 file)
- `vanhoa/vanhoa1-5.html` (5 file)
- `congnghe/congnghe1-5.html` (5 file - chỉ cần tạo file 1-5, chưa có)

**Template bài báo chi tiết (Copy & Paste):**

```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[TIÊU ĐỀ] - VietNews</title>
  <link rel="stylesheet" href="../assets/styles.css">
  <style>
    .article-detail {
      max-width: 800px;
      margin: 50px auto;
      padding: 30px;
      background: #fafafa;
      border-radius: 8px;
    }
    .article-detail h1 {
      font-size: 2.2em;
      margin-bottom: 20px;
      color: #1a1a1a;
      line-height: 1.4;
    }
    .article-meta {
      display: flex;
      gap: 20px;
      margin-bottom: 30px;
      color: #666;
      font-size: 0.95em;
      border-bottom: 1px solid #ddd;
      padding-bottom: 20px;
    }
    .article-content p {
      font-size: 1.1em;
      line-height: 1.9;
      margin-bottom: 20px;
      color: #333;
      text-align: justify;
    }
    .back-link {
      display: inline-block;
      margin-top: 30px;
      padding: 10px 20px;
      background: #8B7355;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      transition: background 0.3s;
    }
    .back-link:hover {
      background: #6d5a45;
    }
  </style>
</head>
<body>
  <header>
    <div class="header-top">
      <a href="../index.html" class="logo">VIETNEWS</a>
      <div class="header-date" id="currentDate"></div>
    </div>
    <nav>
      <ul>
        <li><a href="../index.html">Trang Chủ</a></li>
        <li><a href="../thoisu/thoisu.html">Thời Sự</a></li>
        <li><a href="../giaoduc/giaoduc.html">Giáo Dục</a></li>
        <li><a href="../suckhoe/suckhoe.html">Sức Khỏe</a></li>
        <li><a href="../vanhoa/vanhoa.html">Văn Hóa</a></li>
        <li><a href="../thethao/thethao.html">Thể Thao</a></li>
        <li><a href="../congnghe/congnghe.html">Công Nghệ</a></li>
        <li><a href="../doisong/doisong.html">Đời Sống</a></li>
        <li><a href="../bandoc/bandoc.html">Bạn Đọc</a></li>
        <li><a href="../dulich/dulich.html">Du Lịch</a></li>
        <li><a href="../multimedia/multimedia.html">Multimedia</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <div class="article-detail">
      <h1>[TIÊU ĐỀ BÀI VIẾT]</h1>
      
      <div class="article-meta">
        <span>[NGÀY], 2024</span>
        <span>Chuyên mục: [TÊN CHUYÊN MỤC]</span>
        <span>Tác giả: [TÁC GIẢ]</span>
      </div>

      <div class="article-content">
        <p>[NỘI DUNG BÀI VIẾT - Thay thế bằng nội dung thực tế]</p>
      </div>

      <a href="[tênchuyên mục].html" class="back-link">← Quay lại chuyên mục</a>
    </div>
  </main>

  <footer>
    <div class="footer-content">
      <div class="footer-section">
        <h4>Về VietNews</h4>
        <ul>
          <li><a href="#">Giới Thiệu</a></li>
          <li><a href="#">Liên Hệ</a></li>
          <li><a href="#">Quảng Cáo</a></li>
          <li><a href="#">Cơ Hội Việc Làm</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Chuyên Mục</h4>
        <ul>
          <li><a href="../thoisu/thoisu.html">Thời Sự</a></li>
          <li><a href="../giaoduc/giaoduc.html">Giáo Dục</a></li>
          <li><a href="../suckhoe/suckhoe.html">Sức Khỏe</a></li>
          <li><a href="../vanhoa/vanhoa.html">Văn Hóa</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Theo Dõi</h4>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">YouTube</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Điều Khoản</h4>
        <ul>
          <li><a href="#">Điều Khoản Sử Dụng</a></li>
          <li><a href="#">Chính Sách Bảo Mật</a></li>
          <li><a href="#">Quy Tắc Ứng Xử</a></li>
          <li><a href="#">Tuyên Bố Về Cookie</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 VietNews. Bản quyền thuộc về VietNews. Mọi nội dung trên trang web được bảo vệ theo luật pháp Việt Nam.</p>
    </div>
  </footer>

  <script>
    function updateDate() {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const today = new Date();
      document.getElementById('currentDate').textContent = 
        'Thứ ' + today.toLocaleDateString('vi-VN', options);
    }
    updateDate();
  </script>
</body>
</html>
```

**Cách tạo nhanh bài báo:**
1. Sao chép template trên
2. Dán vào file mới `[tênchuyên mục][số].html`
3. Thay thế `[TIÊU ĐỀ]`, `[NỘI DUNG]`, `[NGÀY]`, v.v.
4. Lặp lại 5 lần cho mỗi chuyên mục

---

## Mẹo Tăng Tốc Độ

### Sử Dụng Find & Replace (Ctrl+H)

1. Mở Find & Replace: **Ctrl+H**
2. Tìm: `<a href="thoisu.html">Thời Sự</a>`
3. Thay thế: `<a href="../thoisu/thoisu.html">Thời Sự</a>`
4. Nhấp **Replace All** trong file

### Sao Chép & Dán File

1. Copy file `bandoc/bandoc1.html`
2. Dán vào `thoisu/` folder với tên `thoisu1.html`
3. Chỉnh sửa tiêu đề, nội dung và link "Quay lại"

---

## Kiểm Tra Hoàn Thành

Khi bạn hoàn thành, kiểm tra:

✅ Tất cả 11 folder chuyên mục được tạo  
✅ Mỗi folder có file `[tênchuyên mục].html`  
✅ Mỗi chuyên mục có 5 bài báo chi tiết (file 1-5.html)  
✅ Tất cả link điều hướng hoạt động  
✅ CSS tải chính xác  
✅ Trang web hiển thị đẹp trên mobile, tablet, desktop  

---

## Để Hoàn Thành 100% - Tuỳ Chọn

- Thêm hình ảnh thực tế thay cho placeholder
- Viết nội dung bài viết chi tiết
- Thêm thêm tính năng JavaScript (tìm kiếm, filter, v.v.)
- Tối ưu hóa cho SEO
- Thêm form liên hệ, đăng ký newsletter
- Cấu hình miền và deploy lên hosting

---

**Thời gian dự kiến để hoàn thành:** 2-3 giờ (phụ thuộc vào kỹ năng và tốc độ làm việc của bạn)

**Liên hệ hỗ trợ:** Nếu gặp vấn đề, tham khảo README.md hoặc HUONG_DAN_VISUAL_STUDIO.md
