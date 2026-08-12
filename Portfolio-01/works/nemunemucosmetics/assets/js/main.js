// スクロールアニメーション
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("is-visible");
  });
}, { threshold: 0.1 });

document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));

// ---- カート機能 ----
const cartCountEl = document.querySelector("#js-cart-count");

// ページ読み込み時にlocalStorageから合計を復元して表示
function updateCartDisplay() {
  const total = parseInt(localStorage.getItem("cartTotal") || "0");
  if (cartCountEl) cartCountEl.textContent = total;
}

updateCartDisplay();

// カートリセット
const cartResetBtn = document.querySelector("#js-cart-reset");

if (cartResetBtn) {
  cartResetBtn.addEventListener("click", () => {
    localStorage.setItem("cartTotal", "0");
    updateCartDisplay();
  });
}

// カートに入れるボタンの処理
document.querySelectorAll(".cart-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const select = this.closest(".cart-wrap").querySelector(".cart-select");
    const qty = parseInt(select.value);

    // localStorageの合計に加算して保存
    const current = parseInt(localStorage.getItem("cartTotal") || "0");
    const newTotal = current + qty;
    localStorage.setItem("cartTotal", newTotal);

    // 表示を更新
    updateCartDisplay();

    // ボタンのフィードバック
    this.textContent = "✅ カートに入れました！";
    this.disabled = true;

    setTimeout(() => {
      this.textContent = "🛒 カートに入れる";
      this.disabled = false;
    }, 2000);
  });
});

// ハンバーガーメニュー（ねむねむ用）
const nemuBtn = document.querySelector("#js-nemu-drawer-btn");
const nemuDrawer = document.querySelector("#js-nemu-drawer");

if (nemuBtn && nemuDrawer) {
  nemuBtn.addEventListener("click", () => {
    nemuBtn.classList.toggle("is-open");
    nemuDrawer.classList.toggle("is-open");
  });

  // リンクをタップしたら閉じる
  nemuDrawer.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nemuBtn.classList.remove("is-open");
      nemuDrawer.classList.remove("is-open");
    });
  });
}