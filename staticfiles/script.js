// =============================
// Переключение языков
// =============================
const translations = {
  ru: {
    title: "Демонтажные работы",
    description: "Мы выполняем демонтаж любых конструкций быстро и качественно.",
    contactBtn: "Контакты",
    contacts: "Контакты:\n+38 (099) 602-86-37\n+38 (099) 728-30-14\ngazel251180@gmail.com"
  },
  uk: {
    title: "Демонтажні роботи",
    description: "Ми виконуємо демонтаж будь-яких конструкцій швидко та якісно.",
    contactBtn: "Контакти",
    contacts: "Контакти:\n+38 (099) 602-86-37\n+38 (099) 728-30-14\ngazel251180@gmail.com"
  }
};

let currentLang = localStorage.getItem("site-lang") || "ru";

function switchLanguage(lang) {
  currentLang = lang;

  // 1. Переводим элементы по data-translate
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // 2. Показываем правильное меню
  const menuRu = document.querySelector(".menu-ru");
  const menuUa = document.querySelector(".menu-ua");
  if (menuRu && menuUa) {
    menuRu.style.display = (lang === "ru") ? "flex" : "none";
    menuUa.style.display = (lang === "uk") ? "flex" : "none";
  }

  // 3. Сохраняем выбор
  localStorage.setItem("site-lang", lang);
}

// =============================
// DOMContentLoaded
// =============================
document.addEventListener("DOMContentLoaded", () => {
  // Применяем язык при загрузке
  switchLanguage(currentLang);

  // Кнопка контактов
  const contactBtn = document.getElementById("contact-button");
  if (contactBtn) {
    contactBtn.addEventListener("click", () => {
      alert(translations[currentLang].contacts);
    });
  }

  // Сжатие шапки при скролле
  const header = document.querySelector(".header");
  const onScroll = () => {
    if (window.scrollY > 10) header.classList.add("header--shrink");
    else header.classList.remove("header--shrink");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Бургер-меню
  const burger = document.getElementById("hamburger");
  const nav = document.getElementById("site-nav");
  if (burger && nav) {
    burger.addEventListener("click", () => {
      const expanded = burger.getAttribute("aria-expanded") === "true";
      burger.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        burger.setAttribute("aria-expanded","false");
        nav.classList.remove("open");
      });
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.myth-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.myth-card');
      const content = card.querySelector('.myth-content');

      if (card.classList.contains('active')) {
        // закрытие
        content.style.maxHeight = content.scrollHeight + "px"; // фиксируем текущую
        requestAnimationFrame(() => {
          content.style.maxHeight = "0";
        });
        card.classList.remove('active');
      } else {
        // открытие
        card.classList.add('active');
        content.style.maxHeight = content.scrollHeight + "px";
        content.addEventListener('transitionend', () => {
          if (card.classList.contains('active')) {
            content.style.maxHeight = "none"; // снимаем ограничение после анимации
          }
        }, { once: true });
      }
    });
  });
});
