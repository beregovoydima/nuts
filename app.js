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

const cb1 = document.querySelector(".cb1");
const checkboxface = document.querySelector(".checkbox_face");
const index = document.querySelector(".index_registration");
const adress1 = document.querySelector(".registration_adress1");
const adress2 = document.querySelector(".registration_adress2");
const pyisFace = document.querySelector(".phis_face");
const yurFace = document.querySelector(".yur_face");

try {
  cb1.addEventListener("click", () => {
    cb1.style.display = "none";
    checkboxface.style.display = "block";
    pyisFace.classList.toggle("pyisFace2");
    yurFace.classList.toggle("yurFace2");
  });
} catch {}

function radio() {
  adress1.style.display = "none";
  index.style.display = "none";
  adress2.style.display = "block";
  pyisFace.classList.toggle("pyisFace2");
  yurFace.classList.toggle("yurFace2");
}
function radio2() {
  adress1.style.display = "block";
  index.style.display = "block";
  adress2.style.display = "none";
  pyisFace.classList.toggle("pyisFace2");
  yurFace.classList.toggle("yurFace2");
}

const recov = document.querySelector(".recovery_div");
const recovbtn = document.querySelector(".recovery_button");
try {
  recovbtn.addEventListener("click", () => {
    recov.style.display = "block";
  });
} catch {}

try {
  function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active1", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active1";
  }
  document.getElementById("defaultOpen").click();
} catch {}

const transaction = document.querySelector(".transaction_svg");
const transaction4 = document.querySelector(".transaction_svg4");
const transaction2 = document.querySelector(".transaction_svg2");
const transaction3 = document.querySelector(".transaction_svg3");
console.log(transaction2);
if (transaction2 != null) {
  transaction2.addEventListener("mouseover", () => {
    transaction.classList.add("trans");
  });
}
if (transaction2 != null) {
  transaction2.addEventListener("mouseout", () => {
    transaction.classList.remove("trans");
  });
}
if (transaction3 != null) {
  transaction3.addEventListener("mouseover", () => {
    transaction4.classList.add("trans");
  });
}
if (transaction3 != null) {
  transaction3.addEventListener("mouseout", () => {
    transaction4.classList.remove("trans");
  });
}

const bagBlock = document.querySelector(".bag_block");
const bagNone = document.querySelector(".bag_none");
const bagPage = document.querySelector(".bag_page_header");
const bagPageText = document.querySelector(".bag_page_text");
const bagPageTextNone = document.querySelector(".bag_page_text_none");
const goinshop = document.querySelector(".go_in_shop");

if (bagPageTextNone != null) {
  bagPageTextNone.addEventListener("click", () => {
    bagPageText.style.display = "none";
    bagPage.style.display = "none";
    bagBlock.style.display = "none";
    goinshop.style.display = "none";
    bagNone.style.display = "block";
  });
}

const inputNovaCountry = document.querySelector(".input_nova_country");
const inputNovaCity = document.querySelector(".input_nova_city");
const curierOdessa = document.querySelector(".curier_odessa");

function ordersRadio1() {
  inputNovaCountry.style.display = "block";
  inputNovaCity.style.display = "block";
  curierOdessa.style.display = "none";
}
function ordersRadio2() {
  inputNovaCountry.style.display = "none";
  inputNovaCity.style.display = "none";
  curierOdessa.style.display = "block";
}
function ordersRadio3() {
  inputNovaCountry.style.display = "none";
  inputNovaCity.style.display = "none";
  curierOdessa.style.display = "none";
}


