const button = document.querySelector("#js-button-drawer");
const drawer = document.querySelector("#js-drawer");

button.addEventListener("click", function () {
  this.classList.toggle("is-checked");
  drawer.classList.toggle("is-open");
});

// ハンバーガーメニューを閉じる
document.querySelectorAll(".header__link").forEach(link => {
  link.addEventListener("click", () => {
    button.classList.remove("is-checked");
    drawer.classList.remove("is-open");
  });
});

// 肉球ギミック：各ナビリンクに img を挿入
document.querySelectorAll(".header__link").forEach((link) => {
  const paw = document.createElement("img");
  paw.src = "./assets/img/img_nikukyu.svg";
  paw.alt = "";
  paw.className = "nikukyu";
  link.prepend(paw);  // リンクテキストの前に挿入
});

// スクロールアニメーション
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("is-visible");
  });
}, { threshold: 0.1 });

document.querySelectorAll(".about, .skills, .career, .works, .vision, .contact")
  .forEach(el => observer.observe(el));

// ページトップボタン
const pageTopButton = document.querySelector("#js-page-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    pageTopButton.classList.add("is-visible");
  } else {
    pageTopButton.classList.remove("is-visible");
  }
});

pageTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// cat　スライドショー
const swiper = new Swiper(".catSwiper", {
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  speed: 800,

  centeredSlides: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  /* ▼ 表示枚数のバランスをお洒落に調整 */
  slidesPerView: 1.3, // スマホで両隣が15%ずつチラ見えするバランス
  spaceBetween: 16,

  breakpoints: {
    768: {
      slidesPerView: 1.8, // タブレットで真ん中をしっかり目立たせる
      spaceBetween: 24,
    },

    1024: {
      slidesPerView: 2.2, // PCでも3枚並びきらせず、両隣をハミ出させて中央を主役に！
      spaceBetween: 32,
    }
  }
});