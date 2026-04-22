#!/usr/bin/env python3
import os

# Cấu hình các chuyên mục
categories = {
    'congnghe': 'Công Nghệ',
    'doisong': 'Đời Sống',
    'dulich': 'Du Lịch',
    'giaoduc': 'Giáo Dục',
    'suckhoe': 'Sức Khỏe',
    'thethao': 'Thể Thao',
    'thoisu': 'Thời Sự',
    'vanhoa': 'Văn Hóa'
}

category_nav = {
    'thoisu': ('Thời Sự', '../thoisu/thoisu.html'),
    'giaoduc': ('Giáo Dục', '../giaoduc/giaoduc.html'),
    'suckhoe': ('Sức Khỏe', '../suckhoe/suckhoe.html'),
    'vanhoa': ('Văn Hóa', '../vanhoa/vanhoa.html'),
    'thethao': ('Thể Thao', '../thethao/thethao.html'),
    'congnghe': ('Công Nghệ', '../congnghe/congnghe.html'),
    'doisong': ('Đời Sống', '../doisong/doisong.html'),
    'bandoc': ('Bạn Đọc', '../bandoc/bandoc.html'),
    'dulich': ('Du Lịch', '../dulich/dulich.html'),
    'multimedia': ('Multimedia', '../multimedia/multimedia.html')
}

html_template = '''<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{category_name} - VietNews</title>
  <link rel="stylesheet" href="../assets/styles.css">
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
    <div class="container">
      <section>
        <div class="section-title">
          <h1>{category_name}</h1>
        </div>
        <div class="articles-grid">
          <div class="article-card" onclick="window.location.href='{folder}{num_articles}1.html'">
            <img src="https://via.placeholder.com/400x250/8B7355/ffffff?text={category_name}+1" alt="{category_name}">
            <div class="article-card-content">
              <div class="article-card-category">{category_name}</div>
              <h3>Bài viết {category_name} số 1</h3>
              <p>Nội dung bài viết {category_name} số 1 sẽ được cập nhật...</p>
              <div class="article-card-footer">
                <span class="article-card-date">18 Tháng 4</span>
                <a href="#" class="read-more">Đọc Thêm →</a>
              </div>
            </div>
          </div>

          <div class="article-card" onclick="window.location.href='{folder}{num_articles}2.html'">
            <img src="https://via.placeholder.com/400x250/8B7355/ffffff?text={category_name}+2" alt="{category_name}">
            <div class="article-card-content">
              <div class="article-card-category">{category_name}</div>
              <h3>Bài viết {category_name} số 2</h3>
              <p>Nội dung bài viết {category_name} số 2 sẽ được cập nhật...</p>
              <div class="article-card-footer">
                <span class="article-card-date">17 Tháng 4</span>
                <a href="#" class="read-more">Đọc Thêm →</a>
              </div>
            </div>
          </div>

          <div class="article-card" onclick="window.location.href='{folder}{num_articles}3.html'">
            <img src="https://via.placeholder.com/400x250/8B7355/ffffff?text={category_name}+3" alt="{category_name}">
            <div class="article-card-content">
              <div class="article-card-category">{category_name}</div>
              <h3>Bài viết {category_name} số 3</h3>
              <p>Nội dung bài viết {category_name} số 3 sẽ được cập nhật...</p>
              <div class="article-card-footer">
                <span class="article-card-date">16 Tháng 4</span>
                <a href="#" class="read-more">Đọc Thêm →</a>
              </div>
            </div>
          </div>

          <div class="article-card" onclick="window.location.href='{folder}{num_articles}4.html'">
            <img src="https://via.placeholder.com/400x250/8B7355/ffffff?text={category_name}+4" alt="{category_name}">
            <div class="article-card-content">
              <div class="article-card-category">{category_name}</div>
              <h3>Bài viết {category_name} số 4</h3>
              <p>Nội dung bài viết {category_name} số 4 sẽ được cập nhật...</p>
              <div class="article-card-footer">
                <span class="article-card-date">15 Tháng 4</span>
                <a href="#" class="read-more">Đọc Thêm →</a>
              </div>
            </div>
          </div>

          <div class="article-card" onclick="window.location.href='{folder}{num_articles}5.html'">
            <img src="https://via.placeholder.com/400x250/8B7355/ffffff?text={category_name}+5" alt="{category_name}">
            <div class="article-card-content">
              <div class="article-card-category">{category_name}</div>
              <h3>Bài viết {category_name} số 5</h3>
              <p>Nội dung bài viết {category_name} số 5 sẽ được cập nhật...</p>
              <div class="article-card-footer">
                <span class="article-card-date">14 Tháng 4</span>
                <a href="#" class="read-more">Đọc Thêm →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    function updateDate() {{
      const options = {{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }};
      const today = new Date();
      document.getElementById('currentDate').textContent = 
        'Thứ ' + today.toLocaleDateString('vi-VN', options);
    }}
    updateDate();
  </script>
</body>
</html>'''

print("Generating category main pages...")
for folder_name, category_name in categories.items():
    folder_path = f'/vercel/share/v0-project/{folder_name}'
    main_file_path = f'{folder_path}/{folder_name}.html'
    
    html_content = html_template.format(
        category_name=category_name,
        folder=folder_name,
        num_articles=folder_name
    )
    
    print(f"Generated {main_file_path}")

print("Done!")
