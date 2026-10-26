(function () {
  var KEY = 'cv-lang';
  var meta = {
    es: { title: 'Naren Stiven Cipagauta Estupiñán · Desarrollador junior',
          desc: 'Estudiante de Ingeniería de Sistemas orientado al desarrollo web. Busco prácticas profesionales o un puesto de desarrollador junior.',
          photo: 'Fotografía de Naren Stiven Cipagauta Estupiñán', slot: 'Espacio para fotografía profesional' },
    en: { title: 'Naren Stiven Cipagauta Estupiñán · Junior developer',
          desc: 'Systems Engineering student focused on web development. Looking for a professional internship or a junior developer role.',
          photo: 'Photo of Naren Stiven Cipagauta Estupiñán', slot: 'Placeholder for a professional photo' }
  };
  var hasPhoto = false;
  var buttons = document.querySelectorAll('[data-set]');
  var photo = document.getElementById('photo');

  function apply(lang) {
    document.documentElement.lang = lang;
    document.title = meta[lang].title;
    document.querySelector('meta[name=description]').setAttribute('content', meta[lang].desc);
    photo.setAttribute('aria-label', hasPhoto ? meta[lang].photo : meta[lang].slot);
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.set === lang)); });
  }
  function save(lang) { try { localStorage.setItem(KEY, lang); } catch (e) {} }
  function load() { try { var v = localStorage.getItem(KEY); return v === 'en' ? 'en' : 'es'; } catch (e) { return 'es'; } }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () { apply(b.dataset.set); save(b.dataset.set); });
  });

  // Si existe web/assets/foto.jpg se usa automáticamente; si no, se mantiene el monograma.
  var img = new Image();
  img.onload = function () {
    hasPhoto = true;
    photo.style.backgroundImage = 'url(assets/foto.jpg)';
    photo.classList.add('has-img');
    apply(document.documentElement.lang);
  };
  img.src = 'assets/foto.jpg';

  apply(load());
})();
