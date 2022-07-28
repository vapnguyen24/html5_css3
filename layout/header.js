let header =  document.querySelector('.header');
header.innerHTML = `
<nav class="header__nav">
<div class="header__nav__container">
  <div class="grid wide">
    <div class="row">
      <div class="l-3 m-6 c-8">
        <a href="#">
          <div class="header__nav__container--logo">
            <img src="assets/images/logo.webp" alt="" /> Travelix
          </div>
        </a>
      </div>
      <div class="l-6 hide-on-tablet_mobile special">
        <ul class="header__nav__container--list">
          <li><a href="index.html">TRANG CHỦ</a></li>
          <li><a href="about.html">GIỚI THIỆU</a></li>
          <li><a href="offers.html">ƯU ĐÃI</a></li>
          <li><a href="news.html">TIN TỨC</a></li>
          <li><a href="contact.html">LIÊN HỆ</a></li>
          <li><a href="signin.html" style="margin-right:0;">ĐĂNG NHẬP</a></li>
        </ul>
      </div>              
      <div class="l-3 m-6 c-4 special1">
        <i class="fas fa-bars list-tablet-mobile" id="menu_open"></i>
        <div class="header__nav__container--search">
          <i class="fas fa-search" id="search"></i>
          <br />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </div>
  </div>
</div>
</nav>

<div class="header__menu">
<div class="header__menu__overlay"></div>
<div class="header__menu__body--content">
  <ul>
    <li><a href="index.html">TRANG CHỦ</a></li>
    <li><a href="about.html">GIỚI THIỆU</a></li>
    <li><a href="offers.html">ƯU ĐÃI</a></li>
    <li><a href="news.html">TIN TỨC</a></li>
    <li><a href="contact.html">LIÊN HỆ</a></li>
    <li><a href="signin.html">ĐĂNG NHẬP</a></li>
  </ul>
  <i class="fas fa-times" id="menu_close"></i>
</div>
</div>
<div class="scroll-top">
<i class="fas fa-arrow-up"></i>
</div>
`