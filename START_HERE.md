# 🚀 BẮT ĐẦU NGAY VỚI VIETNEWS

## Bước 1: Giải Nén File ✅

Bạn đã giải nén file `v0-project.rar` hoặc `.zip` vào máy tính.

## Bước 2: Mở Trong Visual Studio 2022 ✅

```
File → Open Folder → Chọn thư mục v0-project → Select Folder
```

## Bước 3: Chạy Trang Web 🎯

### Cách 1: Dùng Live Server (Khuyến Nghị)
- Nhấp chuột phải vào `index.html`
- Chọn **Open with Live Server**
- Trang web sẽ tự động mở trong trình duyệt

### Cách 2: Dùng Python
```bash
# Mở Terminal (Ctrl+`)
python -m http.server 8000

# Mở trình duyệt, truy cập:
# http://localhost:8000
```

---

## 📁 Cấu Trúc Dự Án

```
v0-project/
├── index.html                        ✅ Trang chủ
├── assets/styles.css                 ✅ CSS chung
├── bandoc/bandoc.html + 5 bài        ✅ Hoàn tất
├── congnghe/congnghe.html + ?        ⏳ Cần bài chi tiết
├── doisong/doisong.html              ⏳ Cần cập nhật
├── dulich/dulich.html                ⏳ Cần cập nhật
├── giaoduc/giaoduc.html              ⏳ Cần cập nhật
├── multimedia/multimedia.html        ✅ Hoàn tất
├── suckhoe/suckhoe.html              ⏳ Cần cập nhật
├── thethao/thethao.html              ⏳ Cần cập nhật
├── thoisu/thoisu.html                ⏳ Cần cập nhật
└── vanhoa/vanhoa.html                ⏳ Cần cập nhật
```

---

## 📖 Tài Liệu Hướng Dẫn

1. **README.md** - Tổng quan dự án & cách chạy
2. **HUONG_DAN_VISUAL_STUDIO.md** - Hướng dẫn chi tiết cho VS 2022
3. **HOANG_DAN_HOAN_THANH.md** - Hướng dẫn hoàn thành 100% dự án

---

## ⚡ Nhanh Chóng

### ✅ Hoàn Tất:
- Trang chủ
- Chuyên mục Bạn Đọc (5 bài)
- Chuyên mục Multimedia (5 chương)
- CSS & Styling
- Cấu trúc folder

### ⏳ Cần Hoàn Thành:
- Cập nhật 8 trang chuyên mục còn lại
- Tạo 40 bài báo chi tiết

**Thời gian:** ~2-3 giờ để hoàn tất 100%

---

## 🎯 Quá Trình Chỉnh Sửa Nhanh

### Để Cập Nhật Một Trang Chuyên Mục:

1. Mở `[tênchuyên mục]/[tênchuyên mục].html`
2. Thay thế:
   - `href="styles.css"` → `href="../assets/styles.css"`
   - `href="index.html"` → `href="../index.html"`
   - `href="thoisu.html"` → `href="../thoisu/thoisu.html"`
   - `href="article-detail.html?id=..."` → `href="[tênchuyên mục]1.html"`

### Để Tạo Một Bài Báo Chi Tiết:

1. Copy template từ `HOANG_DAN_HOAN_THANH.md`
2. Tạo file `[tênchuyên mục]/[tênchuyên mục]1.html`
3. Chỉnh sửa tiêu đề, ngày, nội dung

---

## ❓ Có Vấn Đề?

- **CSS không tải?** → Kiểm tra đường dẫn `../assets/styles.css`
- **Link không hoạt động?** → Kiểm tra `.html` trong onclick
- **Live Server không chạy?** → Dùng Python HTTP Server thay thế
- **Xem chi tiết** → Mở `HUONG_DAN_VISUAL_STUDIO.md`

---

## 🎉 Tiếp Theo

1. Chạy dự án để xem
2. Duyệt qua các trang hoàn tất
3. Hoàn thành các trang còn lại (2-3 giờ)
4. Tùy chỉnh nội dung bài viết
5. Deploy lên internet

---

**Bắt đầu ngay bây giờ:** F5 hoặc Ctrl+Shift+W để khởi động Live Server! 🚀
