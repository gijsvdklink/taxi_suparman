(function () {
  var html = document.documentElement;
  var toggle = document.getElementById("lang-toggle");
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
  }

  apply(lang);

  toggle.addEventListener("click", function () {
    lang = html.getAttribute("data-lang") === "id" ? "en" : "id";
    apply(lang);
  });
})();
