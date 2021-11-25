new Swiper(".swiperok", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
new Swiper(".about_manufacture_swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

new Swiper(".swiper_news", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // // when window width is >= 480px
    // 480: {
    //   slidesPerView: 3,
    //   spaceBetween: 30
    // },
  },
});

const zoom = document.querySelectorAll(".swiperok_svg");
const zoomProduct = document.querySelectorAll(".swiperok_img");
console.log(zoom);

for (let i = 0; i < zoom.length; ++i) {
  for (let j = 0; j < zoomProduct.length; ++j) {
    zoom[i].addEventListener("click", function name(params) {
      zoomProduct[j].style.transform = "scale(1)";
      zoom[i].style.display = "none";
    });
  }
}
for (let i = 0; i < zoomProduct.length; ++i) {
  zoomProduct[i].addEventListener("mouseout", function name(params) {
    for (let j = 0; j < zoomProduct.length; ++j) {
      zoomProduct[j].style.transform = "scale(1)";
    }
    zoom[i].style.display = "block";
  });
}
const zoom1 = document.querySelectorAll(".swiperok_svg1");
const zoomProduct1 = document.querySelectorAll(".swiperok_img1");
console.log(zoom);

for (let i = 0; i < zoom1.length; ++i) {
  zoom1[i].addEventListener("click", function name(params) {
    for (let j = 0; j < zoomProduct1.length; ++j) {
      zoomProduct1[j].style.transform = "scale(1.3)";
    }
    zoom1[i].style.display = "none";
  });
}
for (let i = 0; i < zoomProduct1.length; ++i) {
  zoomProduct1[i].addEventListener("mouseout", function name(params) {
    for (let j = 0; j < zoomProduct1.length; ++j) {
      zoomProduct1[j].style.transform = "scale(1)";
    }
    zoom1[i].style.display = "block";
  });
}

const mobile = document.querySelector(".mobile_btn");
const burger = document.querySelector(".burger");
const navStyle = document.querySelector(".nav_ul");
const navigation = document.querySelector(".nav");
const navA = document.querySelectorAll(".nav_a");
const login = document.querySelector(".login_block");
const socialLink = document.querySelector(".social_link");
const footerLog = document.querySelector(".footer_log");

mobile.addEventListener("click", () => {
  burger.classList.toggle("burger_down");
  mobile.classList.toggle("active");
  navigation.classList.toggle("drop_nav");
  navStyle.classList.toggle("nav_style");
  login.classList.toggle("login_style");
  socialLink.classList.toggle("social_link_style");
  footerLog.classList.toggle("footer_log_style");
  for (let i = 0; i < navA.length; ++i) {
    navA[i].classList.toggle("nav_a_style");
  }
});

const bag = document.querySelector(".bag");
const bagclick = document.querySelector(".bag_click");
console.log(bag);
console.log(bagclick);
bag.addEventListener("click", () => {
  bagclick.classList.toggle("bagclick_active");
});

