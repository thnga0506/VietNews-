# VietNews - Trang Web Báo Điện Tử

Đây là một trang web báo điện tử chuyên nghiệp với tên **VietNews**, được xây dựng bằng HTML, CSS thuần và JavaScript.

## Cấu Trúc Dự Án

```
v0-project/
├── index.html                  # Trang chủ
├── assets/
│   └── styles.css             # File CSS chung cho toàn bộ trang web
├── bandoc/
│   ├── bandoc.html            # Trang chuyên mục Bạn Đọc
│   ├── bandoc1.html - bandoc5.html  # 5 bài báo chi tiết
├── congnghe/
│   ├── congnghe.html          # Trang chuyên mục Công Nghệ
│   ├── congnghe1.html - congnghe5.html  # 5 bài báo chi tiết
├── doisong/
│   ├── doisong.html           # Trang chuyên mục Đời Sống
│   ├── doisong1.html - doisong5.html  # 5 bài báo chi tiết
├── dulich/
│   ├── dulich.html            # Trang chuyên mục Du Lịch
│   ├── dulich1.html - dulich5.html  # 5 bài báo chi tiết
├── giaoduc/
│   ├── giaoduc.html           # Trang chuyên mục Giáo Dục
│   ├── giaoduc1.html - giaoduc5.html  # 5 bài báo chi tiết
├── multimedia/
│   ├── multimedia.html        # Trang chuyên mục Multimedia (Chương 1)
│   ├── multimedia2.html - multimedia5.html  # Chương 2-5
├── suckhoe/
│   ├── suckhoe.html           # Trang chuyên mục Sức Khỏe
│   ├── suckhoe1.html - suckhoe5.html  # 5 bài báo chi tiết
├── thethao/
│   ├── thethao.html           # Trang chuyên mục Thể Thao
│   ├── thethao1.html - thethao5.html  # 5 bài báo chi tiết
├── thoisu/
│   ├── thoisu.html            # Trang chuyên mục Thời Sự
│   ├── thoisu1.html - thoisu5.html  # 5 bài báo chi tiết
└── vanhoa/
    ├── vanhoa.html            # Trang chuyên mục Văn Hóa
    └── vanhoa1.html - vanhoa5.html  # 5 bài báo chi tiết
```

## Các Chuyên Mục

1. **Thời Sự** - Cập nhật tin tức và các sự kiện nổi bật
2. **Giáo Dục** - Thông tin về tuyển sinh, chính sách giáo dục
3. **Sức Khỏe** - Kiến thức y tế và lối sống lành mạnh
4. **Văn Hóa - Giải Trí** - Tin tức về lễ hội, âm nhạc, phim ảnh
5. **Thể Thao** - Cập nhật thông tin về các giải đấu
6. **Công Nghệ** - Tin tức về thiết bị công nghệ, AI
7. **Đời Sống** - Nhịp sống xã hội, gia đình, đất đai
8. **Bạn Đọc** - Nơi độc giả chia sẻ tâm sự
9. **Du Lịch** - Giới thiệu các điểm đến, ẩm thực
10. **Multimedia** - Bài viết longform với tông màu đặc biệt

## Cách Chạy Dự Án trong Visual Studio 2022

### Bước 1: Tải Dự Án

1. Tải file dự án (v0-project.rar hoặc ZIP)
2. Giải nén file vào một thư mục tùy chọn, ví dụ: `C:\Projects\VietNews`

### Bước 2: Mở Visual Studio 2022

1. Mở **Visual Studio 2022**
2. Chọn **File** → **Open Folder** (hoặc Ctrl+K, Ctrl+O)
3. Điều hướng đến thư mục `v0-project` mà bạn vừa giải nén
4. Nhấp **Select Folder** để mở dự án

### Bước 3: Cài Đặt Live Server (Tuỳ Chọn)

Để xem trang web chạy trực tiếp với tính năng tự động reload khi thay đổi file:

1. Trong Visual Studio 2022, cài đặt extension **Live Server**:
   - Nhấp chuột phải vào `index.html` trong Explorer
   - Chọn **Open with Live Server**

**Hoặc** sử dụng Python HTTP Server:
1. Mở Terminal trong Visual Studio 2022 (Ctrl+`)
2. Điều hướng đến thư mục dự án:
   ```bash
   cd C:\Projects\VietNews
   ```
3. Chạy lệnh:
   ```bash
   python -m http.server 8000
   ```
4. Mở trình duyệt và truy cập: `http://localhost:8000`

### Bước 4: Duyệt Trang Web

- Trang chủ: `http://localhost:8000/index.html`
- Trang chuyên mục: `http://localhost:8000/bandoc/bandoc.html`
- Bài báo chi tiết: `http://localhost:8000/bandoc/bandoc1.html`

## Hoàn Thành Dự Án (Nếu Chưa Xong)

Nếu bạn nhận thấy một số trang chuyên mục chưa được cập nhật đầy đủ, hãy làm theo bước sau:

### 1. Cập Nhật Các Trang Chuyên Mục Chính

Các trang còn lại cần được cập nhật tương tự như `bandoc.html` và `congnghe.html`:

- `doisong/doisong.html`
- `dulich/dulich.html`
- `giaoduc/giaoduc.html`
- `suckhoe/suckhoe.html`
- `thethao/thethao.html`
- `thoisu/thoisu.html`
- `vanhoa/vanhoa.html`

**Cập nhật cần làm:**
- Thay đổi `href="styles.css"` thành `href="../assets/styles.css"`
- Thay đổi `href="index.html"` thành `href="../index.html"`
- Thay đổi tất cả navigation links để trỏ đúng (thêm `../`)
- Thay đổi `onclick="window.location.href='article-detail.html?id=...'"` thành `onclick="window.location.href='[tênchuyên mục]1.html'"`
- Cập nhật footer links tương tự

### 2. Tạo Các Bài Báo Chi Tiết

Mỗi chuyên mục cần có 5 file: `[tênchuyên mục]1.html` - `[tênchuyên mục]5.html`

**Template bài báo chi tiết:**
```html
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Tiêu đề] - VietNews</title>
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
    }
    .back-link:hover {
      background: #6d5a45;
    }
  </style>
</head>
<body>
  <!-- Header & Navigation -->
  <header>
    <div class="header-top">
      <a href="../index.html" class="logo">VIETNEWS</a>
      <div class="header-date" id="currentDate"></div>
    </div>
    <nav>
      <ul>
        <li><a href="../index.html">Trang Chủ</a></li>
        <li><a href="../thoisu/thoisu.html">Thời Sự</a></li>
        <!-- ... Các navigation links khác ... -->
      </ul>
    </nav>
  </header>

  <main>
    <div class="article-detail">
      <h1>[Tiêu đề Bài Viết]</h1>
      
      <div class="article-meta">
        <span>[Ngày]</span>
        <span>Chuyên mục: [Tên Chuyên Mục]</span>
        <span>Tác giả: [Tác Giả]</span>
      </div>

      <div class="article-content">
        <!-- Nội dung bài viết -->
      </div>

      <a href="[tênchuyên mục].html" class="back-link">← Quay lại chuyên mục</a>
    </div>
  </main>

  <!-- Footer -->
  <footer>
    <!-- ... Footer content ... -->
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

### 3. Cập Nhật Multimedia Chapters

Nếu chưa tạo `multimedia2.html` - `multimedia5.html`:
- Sao chép `multimedia.html` 4 lần
- Thay đổi nội dung để hiển thị chương 2, 3, 4, 5
- Cập nhật các nút điều hướng (chapter buttons)

## Đặc Điểm Thiết Kế

- **Tông màu:** Đen, Trắng, Nâu (#8B7355)
- **Typography:** Sử dụng Google Fonts
- **Responsive:** Hoạt động tốt trên mobile, tablet, desktop
- **Tính năng:** Navigation sticky, smooth scrolling, hover effects

## Công Nghệ Sử Dụng

- **HTML5** - Cấu trúc trang web
- **CSS3** - Styling và layout
- **JavaScript** - Tương tác và động năng
- **Responsive Design** - Thích ứng với nhiều kích thước màn hình

## Hỗ Trợ

Nếu bạn gặp vấn đề:

1. **Live Server không hoạt động:** Cài đặt extension Live Server từ Visual Studio Marketplace
2. **CSS không tải:** Kiểm tra đường dẫn `../assets/styles.css` có chính xác không
3. **Navigation không hoạt động:** Kiểm tra tất cả đường dẫn href có đúng cấp thư mục không

---

**Phiên bản:** 1.0  
**Ngày tạo:** Tháng 4, 2024  
**Tác giả:** VietNews Development Team
