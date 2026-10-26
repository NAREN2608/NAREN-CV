(function () {
  var languageButton = document.getElementById('lang-toggle');
  var themeButton = document.getElementById('theme-toggle');
  var themeIcon = document.getElementById('theme-icon');
  var language = 'es';
  var theme = 'light';

  try {
    language = localStorage.getItem('cv-lang') === 'en' ? 'en' : 'es';
    theme = localStorage.getItem('cv-theme') === 'dark' ? 'dark' : 'light';
  } catch (error) {}

  function setLanguage(nextLanguage) {
    language = nextLanguage;
    document.documentElement.lang = language;
    document.title = language === 'es'
      ? 'Naren Cipagauta | Hoja de vida'
      : 'Naren Cipagauta | Resume';

    document.querySelectorAll('[data-es][data-en]').forEach(function (element) {
      element.textContent = element.getAttribute('data-' + language);
    });

    languageButton.textContent = language === 'es' ? 'EN' : 'ES';
    languageButton.setAttribute('aria-label', language === 'es' ? 'Switch to English' : 'Cambiar a español');
    languageButton.setAttribute('aria-pressed', String(language === 'en'));

    try { localStorage.setItem('cv-lang', language); } catch (error) {}
  }

  function setTheme(nextTheme) {
    theme = nextTheme;
    document.body.classList.toggle('dark', theme === 'dark');
    themeIcon.textContent = theme === 'dark' ? '☀' : '◐';

    var label = theme === 'dark'
      ? (language === 'es' ? 'Modo claro' : 'Light mode')
      : (language === 'es' ? 'Modo oscuro' : 'Dark mode');
    themeButton.querySelector('.control-label').textContent = label;
    themeButton.setAttribute('aria-label', theme === 'dark'
      ? (language === 'es' ? 'Activar modo claro' : 'Switch to light mode')
      : (language === 'es' ? 'Activar modo oscuro' : 'Switch to dark mode'));
    themeButton.setAttribute('aria-pressed', String(theme === 'dark'));

    try { localStorage.setItem('cv-theme', theme); } catch (error) {}
  }

  languageButton.addEventListener('click', function () {
    setLanguage(language === 'es' ? 'en' : 'es');
    setTheme(theme);
  });

  themeButton.addEventListener('click', function () {
    setTheme(theme === 'light' ? 'dark' : 'light');
  });

  setLanguage(language);
  setTheme(theme);
}());

