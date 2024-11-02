let btn = document.getElementById("btn");
let Box1 = document.querySelector(".Box1");
let Box2 = document.querySelector(".Box2");
let Box3 = document.querySelector(".Box3");
let Box4 = document.querySelector(".Box4");

window.onscroll = function () {
  if (window.scrollY > 120) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// -------------------
document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);

    // إذا كان العنصر مفتوحًا، أغلقه
    if (targetElement.classList.contains("show")) {
      targetElement.classList.remove("show");
    } else {
      // إغلاق أي عناصر أخرى مفتوحة
    }
  });
});
