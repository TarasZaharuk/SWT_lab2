// =========================================================
// Кафедра комп'ютерного моделювання процесів і систем
// Загальний script.js для всіх сторінок сайту
// =========================================================

document.addEventListener("DOMContentLoaded", function () {
  initNavToggle();
  markActiveLink();
  setCurrentYear();
});

/**
 * Відкриває/закриває мобільне навігаційне меню
 * за допомогою кнопки-«гамбургера».
 */
function initNavToggle() {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener("click", function () {
    var isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

/**
 * Позначає посилання поточної сторінки в навігації
 * атрибутом aria-current="page" для стилізації та доступності.
 */
function markActiveLink() {
  var links = document.querySelectorAll(".site-nav a");
  var currentPath = window.location.pathname.split("/").pop() || "index.html";

  links.forEach(function (link) {
    var linkPath = link.getAttribute("href").split("/").pop();

    if (linkPath === currentPath) {
      link.setAttribute("aria-current", "page");
    }
  });
}

/**
 * Вставляє поточний рік у футер, якщо на сторінці
 * є елемент з id="year".
 */
function setCurrentYear() {
  var yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
