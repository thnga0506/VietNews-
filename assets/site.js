/**
 * VietNews shared partials
 * - Logo + slogan
 * - Category hero banner
 * - Article detail 2-column layout with sidebar widgets
 * - Footer with editor-in-chief info
 */

(function () {
  'use strict';

  // ---- Category metadata ----
  var CATEGORIES = {
    thoisu: {
      name: 'Thời Sự',
      kicker: 'Tin nóng · Cập nhật liên tục',
      desc: 'Những sự kiện trong nước và quốc tế mới nhất, góc nhìn đa chiều và phân tích sâu sắc.',
      hero: 'hero-thoisu.jpg',
      trending: [
        { t: 'Quốc hội thông qua nghị quyết mới về đầu tư công 2024', d: '2 giờ trước' },
        { t: 'Lạm phát quý I giảm xuống 3,1%, thấp nhất 3 năm', d: '5 giờ trước' },
        { t: 'Bão số 2 đang mạnh lên, miền Trung chủ động ứng phó', d: '8 giờ trước' },
        { t: 'Đường sắt cao tốc Bắc - Nam dự kiến khởi công 2027', d: '12 giờ trước' },
        { t: 'Thủ tướng tiếp Thủ tướng Nhật Bản tại Hà Nội', d: '1 ngày trước' }
      ]
    },
    suckhoe: {
      name: 'Sức Khoẻ',
      kicker: 'Y học · Dinh dưỡng · Tâm lý',
      desc: 'Hướng dẫn chăm sóc sức khoẻ, cập nhật nghiên cứu y khoa mới nhất và lời khuyên từ chuyên gia.',
      hero: 'hero-suckhoe.jpg',
      trending: [
        { t: 'Vaccine ung thư mRNA bước vào thử nghiệm giai đoạn III', d: '4 giờ trước' },
        { t: '7 thói quen buổi sáng giúp giảm 40% nguy cơ tim mạch', d: '6 giờ trước' },
        { t: 'Trầm cảm sau sinh: dấu hiệu nhận biết và cách hỗ trợ', d: '10 giờ trước' },
        { t: 'WHO cảnh báo biến thể cúm mới tại khu vực châu Á', d: '14 giờ trước' },
        { t: 'Dinh dưỡng hợp lý cho người trên 60 tuổi', d: '1 ngày trước' }
      ]
    },
    thethao: {
      name: 'Thể Thao',
      kicker: 'Bóng đá · Quần vợt · SEA Games',
      desc: 'Tin tức thể thao trong nước và quốc tế, phân tích chuyên sâu các trận đấu và giải đấu lớn.',
      hero: 'hero-thethao.jpg',
      trending: [
        { t: 'Tuyển Việt Nam thắng 3-0 tại vòng loại World Cup', d: '3 giờ trước' },
        { t: 'Nguyễn Thuỳ Linh vào chung kết giải cầu lông quốc tế', d: '6 giờ trước' },
        { t: 'V-League 2024 đổi lịch do thời tiết khắc nghiệt', d: '11 giờ trước' },
        { t: 'Olympic 2024: Thể thao VN đặt mục tiêu 1 HCV', d: '15 giờ trước' },
        { t: 'HLV Troussier chia sẻ về lực lượng tuyển Olympic', d: '1 ngày trước' }
      ]
    },
    vanhoa: {
      name: 'Văn Hoá',
      kicker: 'Di sản · Nghệ thuật · Đời sống',
      desc: 'Khám phá văn hoá Việt Nam và thế giới, từ di sản truyền thống đến trào lưu nghệ thuật đương đại.',
      hero: 'hero-vanhoa.jpg',
      trending: [
        { t: 'Áo dài Việt được UNESCO đề cử di sản văn hoá phi vật thể', d: '5 giờ trước' },
        { t: 'Liên hoan phim quốc tế Hà Nội 2024 công bố danh sách tranh giải', d: '9 giờ trước' },
        { t: 'Bộ sách cổ thời Nguyễn được số hoá toàn diện', d: '13 giờ trước' },
        { t: 'Ca trù Hà Nội: hành trình bảo tồn và hồi sinh', d: '17 giờ trước' },
        { t: 'Triển lãm mỹ thuật đương đại Việt Nam tại Paris', d: '1 ngày trước' }
      ]
    },
    giaoduc: {
      name: 'Giáo Dục',
      kicker: 'Học đường · Đại học · STEM',
      desc: 'Cập nhật chính sách giáo dục, xu hướng học tập và thành tựu của học sinh, sinh viên Việt Nam.',
      hero: 'hero-giaoduc.jpg',
      trending: [
        { t: 'Công bố phương án tuyển sinh đại học 2025', d: '2 giờ trước' },
        { t: 'Học sinh Việt giành 4 HCV Olympic Toán quốc tế', d: '7 giờ trước' },
        { t: 'Giáo dục STEM: 50 trường thí điểm chương trình mới', d: '11 giờ trước' },
        { t: 'Bộ GD-ĐT đề xuất lương giáo viên tăng 30% từ 2025', d: '16 giờ trước' },
        { t: 'Đại học Việt lọt top 500 châu Á 2024', d: '1 ngày trước' }
      ]
    },
    congnghe: {
      name: 'Công Nghệ',
      kicker: 'AI · Chip bán dẫn · Startup',
      desc: 'Cập nhật xu hướng công nghệ mới nhất, tin tức về AI, blockchain, gadget và hệ sinh thái startup Việt.',
      hero: 'hero-congnghe.jpg',
      trending: [
        { t: 'Việt Nam sắp có nhà máy sản xuất chip đầu tiên', d: '3 giờ trước' },
        { t: 'GPT-5 chính thức ra mắt với khả năng xử lý video', d: '6 giờ trước' },
        { t: 'Startup Việt gọi vốn 50 triệu USD vòng Series B', d: '10 giờ trước' },
        { t: '5G phủ sóng 100% tỉnh thành vào cuối 2025', d: '14 giờ trước' },
        { t: 'Apple mở trung tâm R&D tại TP.HCM', d: '1 ngày trước' }
      ]
    },
    doisong: {
      name: 'Đời Sống',
      kicker: 'Gia đình · Ẩm thực · Lối sống',
      desc: 'Góc nhìn về cuộc sống thường ngày, chuyện gia đình, ẩm thực và những xu hướng mới trong xã hội.',
      hero: 'hero-doisong.jpg',
      trending: [
        { t: 'Phở Hà Nội được CNN vinh danh trong top 50 món ăn thế giới', d: '4 giờ trước' },
        { t: 'Xu hướng "lối sống chậm" lên ngôi trong giới trẻ Việt', d: '8 giờ trước' },
        { t: 'Chi phí cưới hỏi trung bình 2024 tăng 20%', d: '12 giờ trước' },
        { t: 'Bí quyết sống khoẻ từ người Nhật trăm tuổi', d: '16 giờ trước' },
        { t: 'Cà phê đặc sản Việt Nam chinh phục thị trường châu Âu', d: '1 ngày trước' }
      ]
    },
    bandoc: {
      name: 'Bạn Đọc',
      kicker: 'Ý kiến · Phản hồi · Câu chuyện',
      desc: 'Nơi chia sẻ ý kiến, phản hồi và câu chuyện từ chính bạn đọc của VietNews trên khắp cả nước.',
      hero: 'hero-bandoc.jpg',
      trending: [
        { t: 'Bạn đọc chia sẻ: "Tôi trở về quê sau 15 năm xa xứ"', d: '5 giờ trước' },
        { t: 'Góc nhìn: Thế hệ Z nghĩ gì về hôn nhân?', d: '9 giờ trước' },
        { t: 'Phản hồi loạt bài về giáo dục STEM', d: '13 giờ trước' },
        { t: 'Thư gửi toà soạn: "Cảm ơn vì loạt bài về miền Tây"', d: '17 giờ trước' },
        { t: 'Bạn đọc hỏi về chính sách bảo hiểm y tế mới', d: '1 ngày trước' }
      ]
    },
    dulich: {
      name: 'Du Lịch',
      kicker: 'Khám phá · Trải nghiệm · Hướng dẫn',
      desc: 'Hành trình khám phá vẻ đẹp Việt Nam và thế giới, từ điểm đến nổi tiếng đến góc khuất ít người biết.',
      hero: 'hero-dulich.jpg',
      trending: [
        { t: 'Vịnh Hạ Long lọt top 25 kỳ quan thiên nhiên thế giới 2024', d: '3 giờ trước' },
        { t: 'Khách Hàn Quốc đến Việt Nam tăng 150% trong quý I', d: '7 giờ trước' },
        { t: '10 điểm đến được yêu thích nhất Tây Bắc', d: '11 giờ trước' },
        { t: 'Hướng dẫn chi tiết du lịch Phú Quốc mùa thấp điểm', d: '15 giờ trước' },
        { t: 'Làng gốm Bát Tràng - điểm đến cuối tuần Hà Nội', d: '1 ngày trước' }
      ]
    }
  };

  // Detect current page context
  var path = window.location.pathname.toLowerCase();
  var currentCat = null;
  var isDetail = false;
  var isLandingArticle = false;

  for (var key in CATEGORIES) {
    if (path.indexOf('/' + key + '/') !== -1) {
      currentCat = key;
      // Is it the category landing (e.g. /suckhoe/suckhoe.html) or a sub-article (/suckhoe/suckhoe1.html)?
      var m = path.match(new RegExp('/' + key + '/' + key + '(\\d*)\\.html'));
      if (m && m[1] === '') {
        isDetail = false;
      } else if (m && m[1] !== '') {
        isDetail = true;
      }
      break;
    }
  }

  // Is it a top-level index article? (index1..5.html)
  if (/\/index\d+\.html$/.test(path)) {
    isLandingArticle = true;
  }

  // Detect base path (../ if inside category folder, ./ otherwise)
  var base = currentCat ? '../' : '';

  // ---- helper ----
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function el(html) {
    var d = document.createElement('div');
    d.innerHTML = html.trim();
    return d.firstChild;
  }

  // ==================== 1. ENHANCE LOGO WITH SLOGAN ====================
  function enhanceLogo() {
    var logo = $('.logo');
    if (!logo || logo.dataset.enhanced) return;
    logo.dataset.enhanced = '1';

    // Stylize logo text: "Viet" white + "News" red-italic
    logo.innerHTML = 'Viet<em style="font-style:italic;color:#914F1E;font-weight:900;">News</em>';

    // If the page already has a .brand-block wrapper (e.g. multimedia pages),
    // just ensure a slogan is present and exit.
    var parent = logo.parentNode;
    if (parent && parent.classList && parent.classList.contains('brand-block')) {
      if (!parent.querySelector('.brand-slogan')) {
        parent.appendChild(el('<span class="brand-slogan">Tiếng nói · Sự thật · Thời đại</span>'));
      }
      return;
    }

    // Otherwise wrap logo in a .brand-block and add slogan
    var wrapper = el('<div class="brand-block"></div>');
    parent.insertBefore(wrapper, logo);
    wrapper.appendChild(logo);
    wrapper.appendChild(el('<span class="brand-slogan">Tiếng nói · Sự thật · Thời đại</span>'));
  }

  // Replace via.placeholder.com images with real local images
  function fixPlaceholderImages() {
    var imgs = document.querySelectorAll('img[src*="via.placeholder.com"], img[src*="placeholder.com"]');
    if (!imgs.length) return;
    var pool = {
      thoisu:   base + 'assets/hero-thoisu.jpg',
      suckhoe:  base + 'assets/hero-suckhoe.jpg',
      thethao:  base + 'assets/hero-thethao.jpg',
      vanhoa:   base + 'assets/hero-vanhoa.jpg',
      giaoduc:  base + 'assets/hero-giaoduc.jpg',
      congnghe: base + 'assets/hero-congnghe.jpg',
      doisong:  base + 'assets/hero-doisong.jpg',
      bandoc:   base + 'assets/hero-bandoc.jpg',
      dulich:   base + 'assets/hero-dulich.jpg'
    };
    var fallback = [
      base + 'multimedia/images/hero-mekong.jpg',
      base + 'multimedia/images/chuong1-dat.jpg',
      base + 'multimedia/images/chuong2-ruong.jpg',
      base + 'multimedia/images/chuong3-sinhke.jpg',
      base + 'multimedia/images/chuong4-ngare.jpg',
      base + 'multimedia/images/chuong5-loira.jpg',
      base + 'multimedia/images/modern-farm.jpg',
      base + 'multimedia/images/flood.jpg',
      base + 'multimedia/images/drought.jpg',
      base + 'multimedia/images/mangrove.jpg'
    ];
    var catImg = currentCat ? pool[currentCat] : pool.thoisu;
    imgs.forEach(function (img, i) {
      img.src = (i % 3 === 0 && catImg) ? catImg : fallback[i % fallback.length];
      img.style.objectFit = 'cover';
    });
  }

  // ==================== 2. CATEGORY HERO BANNER ====================
  function injectCategoryHero() {
    if (!currentCat || isDetail) return;
    var cat = CATEGORIES[currentCat];
    var main = $('main');
    if (!main) return;

    // Remove old <section> title so we don't duplicate; we'll keep it below.
    var hero = el(
      '<section class="category-hero">' +
      '  <img class="category-hero-img" src="' + base + 'assets/' + cat.hero + '" alt="' + cat.name + '" />' +
      '  <div class="category-hero-inner">' +
      '    <span class="category-hero-kicker">' + cat.kicker + '</span>' +
      '    <h1>' + cat.name + '</h1>' +
      '    <p class="category-hero-desc">' + cat.desc + '</p>' +
      '  </div>' +
      '</section>'
    );
    main.insertBefore(hero, main.firstChild);

    // Hide old .section-title (redundant with hero) and transform articles layout
    var sectionTitle = $('.section-title', main);
    if (sectionTitle) sectionTitle.style.display = 'none';

    // Wrap existing <section>'s articles-grid with section-with-sidebar + widgets
    var section = main.querySelector('.container section');
    if (!section) return;

    var wrap = el('<div class="section-with-sidebar"></div>');
    var sectionMain = el('<div class="section-main"></div>');
    var grid = section.querySelector('.articles-grid');
    if (grid) {
      wrap.appendChild(sectionMain);
      sectionMain.appendChild(grid);
      wrap.appendChild(buildSidebar(cat));
      section.appendChild(wrap);
    }
  }

  function buildSidebar(cat) {
    var aside = el('<aside class="sidebar-widgets"></aside>');

    // Widget: Trending
    var trendList = cat.trending.map(function (t, i) {
      return '<li><a href="#">' + t.t + '<span class="trending-meta">' + t.d + '</span></a></li>';
    }).join('');
    aside.appendChild(el(
      '<div class="widget">' +
      '  <h3 class="widget-title">Đọc nhiều nhất</h3>' +
      '  <ol class="trending-list">' + trendList + '</ol>' +
      '</div>'
    ));

    // Widget: Editor's pick
    aside.appendChild(el(
      '<div class="widget editor-pick">' +
      '  <h3 class="widget-title">Tiêu điểm biên tập</h3>' +
      '  <img class="editor-pick-img" src="' + base + 'multimedia/images/hero-mekong.jpg" alt="Phóng sự miền Tây" />' +
      '  <h4>Miền Tây đang rơi: Phóng sự 5 kỳ về vùng đất đang đổi thay</h4>' +
      '  <p>Sáu tháng đi qua 8 tỉnh ĐBSCL, loạt phóng sự đặc biệt của chúng tôi khắc hoạ chân dung một vùng đất đang chuyển mình giữa biến đổi khí hậu và làn sóng di cư.</p>' +
      '  <div class="editor-pick-byline">Trần Quỳnh Mai · Tổng biên tập</div>' +
      '</div>'
    ));

    // Widget: Newsletter
    aside.appendChild(el(
      '<div class="widget newsletter-widget">' +
      '  <h3 class="widget-title">Bản tin hàng ngày</h3>' +
      '  <p>Nhận tin tức chọn lọc và phân tích chuyên sâu mỗi sáng, miễn phí vào hộp thư của bạn.</p>' +
      '  <form class="newsletter-form" onsubmit="event.preventDefault();this.querySelector(\'button\').textContent=\'Đã đăng ký ✓\';">' +
      '    <input type="email" placeholder="Địa chỉ email" required />' +
      '    <button type="submit">Đăng ký</button>' +
      '  </form>' +
      '</div>'
    ));

    // Widget: Tag cloud
    var tags = ['Việt Nam', cat.name, 'Kinh tế', 'Chính sách', 'Phân tích', 'Bình luận', 'Multimedia', '2024'];
    var tagHtml = tags.map(function (t) { return '<a href="#">' + t + '</a>'; }).join('');
    aside.appendChild(el(
      '<div class="widget">' +
      '  <h3 class="widget-title">Chủ đề nổi bật</h3>' +
      '  <div class="tag-cloud">' + tagHtml + '</div>' +
      '</div>'
    ));

    return aside;
  }

  // ==================== 3. ARTICLE DETAIL — 2-COLUMN LAYOUT ====================
  function enhanceArticleDetail() {
    var detail = $('.article-detail');
    if (!detail) return;

    // Wrap the detail in article-layout grid
    var parent = detail.parentNode;
    var wrap = el('<div class="article-layout"></div>');
    parent.insertBefore(wrap, detail);
    wrap.appendChild(detail);

    // Reset inline styles added by per-page <style>
    detail.style.maxWidth = 'none';
    detail.style.margin = '0';
    detail.style.padding = '0';
    detail.style.background = 'transparent';

    // Breadcrumb
    var catName = (currentCat && CATEGORIES[currentCat]) ? CATEGORIES[currentCat].name : 'Trang chủ';
    var catLink = currentCat ? base + currentCat + '/' + currentCat + '.html' : base + 'index.html';
    var breadcrumb = el(
      '<div class="article-breadcrumb">' +
      '  <a href="' + base + 'index.html">Trang chủ</a>' +
      '  <span class="sep">›</span>' +
      '  <a href="' + catLink + '">' + catName + '</a>' +
      '  <span class="sep">›</span>' +
      '  <span>Bài viết</span>' +
      '</div>'
    );
    detail.insertBefore(breadcrumb, detail.firstChild);

    // Promote first image inside .article-content to hero
    var firstImg = detail.querySelector('.article-content img');
    if (firstImg) {
      firstImg.classList.add('article-hero-img');
      // Move it right after h1
      var h1 = detail.querySelector('h1');
      if (h1 && h1.nextSibling) {
        // Insert after h1 and meta
        var meta = detail.querySelector('.article-meta');
        var afterNode = meta ? meta.nextSibling : h1.nextSibling;
        detail.insertBefore(firstImg, afterNode);
      }
    }

    // Share buttons
    var share = el(
      '<div class="article-share">' +
      '  <span>Chia sẻ</span>' +
      '  <a href="#" class="share-btn">Facebook</a>' +
      '  <a href="#" class="share-btn">Twitter</a>' +
      '  <a href="#" class="share-btn">Sao chép link</a>' +
      '</div>'
    );
    var meta = detail.querySelector('.article-meta');
    if (meta && meta.nextSibling) {
      detail.insertBefore(share, meta.nextSibling);
    }

    // Tags at the bottom (before back-link)
    var tags = ['#' + (catName.replace(/\s+/g, '')), '#VietNews', '#2024', '#TinTuc', '#PhanTich'];
    var tagsEl = el(
      '<div class="article-tags">' +
      tags.map(function (t) { return '<a href="#">' + t + '</a>'; }).join('') +
      '</div>'
    );
    var backLink = detail.querySelector('.back-link');
    if (backLink) detail.insertBefore(tagsEl, backLink);
    else detail.appendChild(tagsEl);

    // Author card
    var author = el(
      '<div class="article-author">' +
      '  <div class="article-author-avatar">VN</div>' +
      '  <div class="article-author-info">' +
      '    <h5>Phóng viên VietNews</h5>' +
      '    <p>Đội ngũ phóng viên và biên tập của VietNews, dẫn dắt bởi Tổng biên tập Trần Quỳnh Mai.</p>' +
      '  </div>' +
      '</div>'
    );
    if (backLink) detail.insertBefore(author, backLink);
    else detail.appendChild(author);

    // Sidebar
    var cat = CATEGORIES[currentCat] || CATEGORIES.thoisu;
    wrap.appendChild(buildSidebar(cat));
  }

  // ==================== 4. FOOTER — TỔNG BIÊN TẬP ====================
  function enhanceFooter() {
    var footer = document.querySelector('footer');
    if (!footer || footer.dataset.enhanced) return;
    footer.dataset.enhanced = '1';

    // Inject masthead block before footer-content
    var content = footer.querySelector('.footer-content');
    if (content) {
      var masthead = el(
        '<div class="footer-masthead" style="max-width:1200px;margin:0 auto 40px;padding:0 40px;display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:40px;align-items:start;">' +
        '  <div>' +
        '    <div style="font-family:\'Playfair Display\',serif;font-size:28px;font-weight:800;color:#fff;letter-spacing:2px;margin-bottom:6px;">Viet<em style="font-style:italic;color:#914F1E;">News</em></div>' +
        '    <div style="font-family:\'Lora\',serif;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:rgba(255,255,255,0.7);font-style:italic;margin-bottom:18px;">Tiếng nói · Sự thật · Thời đại</div>' +
        '    <p style="font-size:13px;color:#aaa;line-height:1.75;margin:0;">Nhật báo điện tử uy tín của Việt Nam. Đưa tin trung thực, phân tích sâu sắc, kết nối bạn đọc với thời đại.</p>' +
        '  </div>' +
        '  <div>' +
        '    <h4 style="font-family:\'Playfair Display\',serif;color:#f0d39b;margin:0 0 16px;font-size:13px;letter-spacing:2.5px;text-transform:uppercase;border-bottom:1px solid rgba(240,211,155,0.3);padding-bottom:10px;">Ban biên tập</h4>' +
        '    <div style="display:flex;gap:14px;align-items:flex-start;">' +
        '      <img src="' + base + 'assets/editor-portrait.jpg" alt="Trần Quỳnh Mai" style="width:64px;height:64px;border-radius:50%;object-fit:cover;flex-shrink:0;border:2px solid #f0d39b;" />' +
        '      <div>' +
        '        <div style="font-family:\'Playfair Display\',serif;font-size:17px;font-weight:700;color:#fff;margin-bottom:3px;">Trần Quỳnh Mai</div>' +
        '        <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#f0d39b;margin-bottom:10px;font-weight:600;">Tổng biên tập</div>' +
        '        <p style="font-size:12px;color:#aaa;line-height:1.6;margin:0;">"Báo chí là tiếng nói của sự thật, là cầu nối giữa nhân dân và thời đại."</p>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '  <div>' +
        '    <h4 style="font-family:\'Playfair Display\',serif;color:#f0d39b;margin:0 0 16px;font-size:13px;letter-spacing:2.5px;text-transform:uppercase;border-bottom:1px solid rgba(240,211,155,0.3);padding-bottom:10px;">Toà soạn</h4>' +
        '    <div style="font-size:13px;color:#bbb;line-height:1.9;">' +
        '      <div><strong style="color:#fff;">Địa chỉ:</strong> 58 Quán Sứ, Hoàn Kiếm, Hà Nội</div>' +
        '      <div><strong style="color:#fff;">VP phía Nam:</strong> 234 Nguyễn Thị Minh Khai, Q.3, TP.HCM</div>' +
        '      <div><strong style="color:#fff;">Điện thoại:</strong> (024) 3936-8888</div>' +
        '      <div><strong style="color:#fff;">Đường dây nóng:</strong> 0912 345 678 (24/7)</div>' +
        '      <div><strong style="color:#fff;">Email:</strong> toasoan@vietnews.vn</div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
      );
      footer.insertBefore(masthead, content);
    }

    // Update footer-bottom
    var bottom = footer.querySelector('.footer-bottom');
    if (bottom) {
      bottom.innerHTML =
        '<p style="margin:0 0 6px;">© 2024 VietNews. Bản quyền thuộc về Báo điện tử VietNews.</p>' +
        '<p style="margin:0;font-size:11px;color:#888;">Giấy phép báo chí điện tử số 123/GP-BTTTT do Bộ Thông tin & Truyền thông cấp ngày 15/03/2020. Tổng biên tập: <strong style="color:#f0d39b;">Trần Quỳnh Mai</strong>.</p>';
    }
  }

  // ==================== 5. READING PROGRESS BAR ====================
  function addReadingProgress() {
    if (!$('.article-detail')) return;
    var bar = el('<div class="reading-progress" id="readingProgress"></div>');
    document.body.insertBefore(bar, document.body.firstChild);

    window.addEventListener('scroll', function () {
      var h = document.documentElement;
      var scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      bar.style.width = scrolled + '%';
    }, { passive: true });
  }

  // ==================== 6. HOMEPAGE MULTIMEDIA TEASER ====================
  function addHomepageMultimediaTeaser() {
    // Only on index.html (root, not index1..5)
    if (!/\/(index\.html)?$/.test(path)) return;
    if (isLandingArticle) return;

    var container = $('main .container');
    if (!container) return;

    var teaser = el(
      '<section class="home-mm-teaser" style="margin:60px 0;padding:60px 40px;background:linear-gradient(135deg,#31511E 0%,#859F3D 100%);border-radius:8px;color:#fff;position:relative;overflow:hidden;">' +
      '  <div style="max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:center;">' +
      '    <div>' +
      '      <div style="font-size:11px;letter-spacing:4px;text-transform:uppercase;color:#cbdba0;font-weight:700;margin-bottom:14px;">— Phóng sự đặc biệt —</div>' +
      '      <h2 style="font-family:\'Playfair Display\',serif;font-size:44px;font-weight:800;line-height:1.1;margin:0 0 18px;letter-spacing:0.3px;">Miền Tây đang rơi<br/><em style="font-style:italic;color:#cbdba0;">— 5 chương phóng sự điều tra</em></h2>' +
      '      <p style="font-family:\'Lora\',serif;font-size:17px;line-height:1.7;color:rgba(255,255,255,0.92);margin:0 0 26px;">Hành trình 6 tháng qua 8 tỉnh Đồng bằng sông Cửu Long. Câu chuyện về đất, nước, sinh kế và con người trước biến đổi khí hậu và làn sóng di cư.</p>' +
      '      <a href="multimedia/multimedia.html" style="display:inline-flex;align-items:center;gap:12px;padding:14px 28px;background:#fff;color:#31511E;text-decoration:none;font-weight:700;font-size:13px;letter-spacing:2px;text-transform:uppercase;border-radius:3px;transition:transform 0.3s;">Xem toàn bộ phóng sự <span>→</span></a>' +
      '    </div>' +
      '    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">' +
      '      <a href="multimedia/chuong1.html" style="aspect-ratio:1;background:url(\'multimedia/images/chuong1-dat.jpg\') center/cover;border-radius:4px;position:relative;overflow:hidden;text-decoration:none;"><span style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 50%,rgba(20,30,15,0.9));display:flex;align-items:flex-end;padding:12px;color:#fff;font-family:\'Playfair Display\',serif;font-size:14px;font-weight:700;">01 · Dòng sông cạn</span></a>' +
      '      <a href="multimedia/chuong2.html" style="aspect-ratio:1;background:url(\'multimedia/images/chuong2-ruong.jpg\') center/cover;border-radius:4px;position:relative;overflow:hidden;text-decoration:none;"><span style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 50%,rgba(20,30,15,0.9));display:flex;align-items:flex-end;padding:12px;color:#fff;font-family:\'Playfair Display\',serif;font-size:14px;font-weight:700;">02 · Ruộng vắng</span></a>' +
      '      <a href="multimedia/chuong3.html" style="aspect-ratio:1;background:url(\'multimedia/images/chuong3-sinhke.jpg\') center/cover;border-radius:4px;position:relative;overflow:hidden;text-decoration:none;"><span style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 50%,rgba(20,30,15,0.9));display:flex;align-items:flex-end;padding:12px;color:#fff;font-family:\'Playfair Display\',serif;font-size:14px;font-weight:700;">03 · Sinh kế lung lay</span></a>' +
      '      <a href="multimedia/chuong4.html" style="aspect-ratio:1;background:url(\'multimedia/images/chuong4-ngare.jpg\') center/cover;border-radius:4px;position:relative;overflow:hidden;text-decoration:none;"><span style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 50%,rgba(20,30,15,0.9));display:flex;align-items:flex-end;padding:12px;color:#fff;font-family:\'Playfair Display\',serif;font-size:14px;font-weight:700;">04 · Người ở lại</span></a>' +
      '    </div>' +
      '  </div>' +
      '</section>'
    );

    // Insert before last section
    var sections = container.querySelectorAll('section');
    if (sections.length > 0) {
      container.appendChild(teaser);
    }
  }

  // ==================== INIT ====================
  function init() {
    enhanceLogo();
    fixPlaceholderImages();
    injectCategoryHero();
    enhanceArticleDetail();
    addReadingProgress();
    addHomepageMultimediaTeaser();
    enhanceFooter();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
