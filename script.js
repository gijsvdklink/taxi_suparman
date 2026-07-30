(function () {
  var html = document.documentElement;
  var buttons = document.querySelectorAll("[data-lang-btn]");
  var stored = localStorage.getItem("lang");
  var lang = stored === "id" ? "id" : "en";

  function apply(lang) {
    html.setAttribute("lang", lang);
    html.setAttribute("data-lang", lang);
    localStorage.setItem("lang", lang);

    document.querySelectorAll("[data-en]").forEach(function (el) {
      var text = el.getAttribute(lang === "id" ? "data-id" : "data-en");
      if (text) el.textContent = text;
    });

    buttons.forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang-btn") === lang);
    });
  }

  apply(lang);

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      apply(btn.getAttribute("data-lang-btn"));
    });
  });
})();
