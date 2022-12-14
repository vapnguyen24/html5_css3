const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// Scroll Top
var scrollTop = () => {
  var header = $(".header");
  header.scrollIntoView({ behavior: "smooth", block: "start" });
};

var scrollBtn = $(".scroll-top");
scrollBtn.addEventListener("click", scrollTop);
window.addEventListener("scroll", scrollBtnDisplay);

function scrollBtnDisplay() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

// Active link header
var listLink = location.href;
var listItem = $$(".header__nav__container--list a");
var listLength = listItem.length;

var i = 0;
for (i; i < listLength; i++) {
  if (listItem[i].href === listLink) {
    listItem[i].className = "active";
  }
}

// var links = location.href;
// var items = $$(".header__menu__body--content a");
// var listslength = items.length;

// var j = 0;
// for (j; j < listLength; j++) {
//     if (items[j].href === links) {
//         items[j].className = "active";
//     }
// }

// Header sticky
var headerSticky = $(".header__nav");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    headerSticky.classList.add("scroll");
  } else {
    headerSticky.classList.remove("scroll");
  }
}

// Search Button
var searchIcon = $("#search");
var input = $(".header__nav__container--search input");

searchIcon.onclick = function () {
  input.classList.toggle("active");
};

// Active link
var links = $$(".header__nav__container--list li");
var add = function () {
  $(".header__nav__container--list li.active").classList.remove("active");
  this.classList.add("active");
};
links.forEach((link) => {
  link.addEventListener("click", add);
});

// Active Search
var tabs = $$(".search__container__tab");

tabs.forEach((tab) => {
  tab.onclick = function () {
    $(".search__container__tab.active").classList.remove("active");
    this.classList.add("active");
  };
});

// Header menu modal

var box = $(".header__menu__overlay");
var boxBody = $(".header__menu__body--content");
var open = $("#menu_open");
var close = $("#menu_close");

open.onclick = function () {
  box.style.display = "block";
  boxBody.classList.add("open");
};

close.onclick = function () {
  box.style.display = "none";
  boxBody.classList.remove("open");
};

// signin
var email = document.getElementById("mail");
var password = document.getElementById("password");
var rePassword = document.getElementById("repassword");
var er1 = document.getElementById("error1");
var er2 = document.getElementById("error2");
var er3 = document.getElementById("error3");
function valid() {
  var flag = 0;
  if (email.value.length == 0) er1.innerHTML = "Vui l??ng nh???p v??o ?? ??ang tr???ng";
  else if (!ValidateEmail(email.value))
    er1.innerHTML = "Vui l??ng nh???p ????ng ?????nh d???ng";
  else {
    er1.innerHTML = "";
    flag++;
  }

  if (password.value.length == 0) {
    er2.innerHTML = "Vui l??ng nh???p v??o ?? ??ang tr???ng";
  } else if (password.value.length < 6)
    er2.innerHTML = "M???t kh???u ph???i c?? ??t nh???t 6 k?? t???";
  else {
    er2.innerHTML = "";
    flag++;
  }

  if (rePassword.value.length == 0) {
    er3.innerHTML = "Vui l??ng nh???p v??o ?? ??ang tr???ng";
  } else if (
    rePassword.value !== password.value ||
    rePassword.value.length < 6
  ) {
    er3.innerHTML = "M???t kh???u kh??ng tr??ng kh???p";
  } else {
    er3.innerHTML = "";
    flag++;
  }
}

function ValidateEmail(mail) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
}
