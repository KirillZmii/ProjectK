document.addEventListener("DOMContentLoaded", () => {
  const buyButtons = document.querySelectorAll(".buy-btn");
  const orderForm = document.getElementById("orderForm");
  const closeForm = document.querySelector(".close-form");
  const contactForm = document.getElementById("contactForm");
  const popup = document.getElementById("popup");

  const productImage = document.getElementById("productImage");
  const productName = document.getElementById("productName");

  // Відкрити форму з даними продукту
  buyButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const product = e.target.closest(".product");
      const imgSrc = product.querySelector("img").src;
      const name = product.querySelector("h3").textContent;

      productImage.src = imgSrc;
      productName.textContent = name;

      orderForm.style.display = "flex";
    });
  });

  // Закрити форму
  closeForm.addEventListener("click", () => {
    orderForm.style.display = "none";
  });

  // Закрити при кліку поза формою
  orderForm.addEventListener("click", (e) => {
    if (e.target === orderForm) {
      orderForm.style.display = "none";
    }
  });

  // Надіслати форму
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    orderForm.style.display = "none";

    // Показати popup
    popup.style.display = "flex";

    setTimeout(() => {
      popup.style.display = "none";
    }, 2000);
  });
});
