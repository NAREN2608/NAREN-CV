(function () {
  var langButton = document.getElementById('lang-toggle');
  var themeButton = document.getElementById('theme-toggle');
  var savedLang = 'es';
  var savedTheme = 'light';

  try { savedLang = localStorage.getItem('cv-lang') === 'en' ? 'en' : 'es'; } catch (e) {}
  try { savedTheme = localStorage.getItem('cv-theme') === 'dark' ? 'dark' : 'light'; } catch (e) {}

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-es][data-en]').forEach(function (element) {
      element.textContent = element.getAttribute('data-' + lang);
    });
    langButton.textContent = lang === 'es' ? 'EN' : 'ES';
    langButton.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a español');
    try { localStorage.setItem('cv-lang', lang); } catch (e) {}
  }

  function applyTheme(theme) {
    document.body.classList.toggle('dark', theme === 'dark');
    themeButton.textContent = theme === 'dark' ? '☀' : '◐';
    themeButton.setAttribute('aria-label', theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro');
    try { localStorage.setItem('cv-theme', theme); } catch (e) {}
  }

  langButton.addEventListener('click', function () { applyLanguage(document.documentElement.lang === 'es' ? 'en' : 'es'); });
  themeButton.addEventListener('click', function () { applyTheme(document.body.classList.contains('dark') ? 'light' : 'dark'); });
  applyLanguage(savedLang);
  applyTheme(savedTheme);
}());

