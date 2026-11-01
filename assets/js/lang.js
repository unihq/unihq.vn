(function () {
  var root = document.documentElement;
  function setLang(l) {
    if (l !== 'vi' && l !== 'en') l = 'vi';
    root.setAttribute('data-lang', l);
    root.setAttribute('lang', l);
    var btns = document.querySelectorAll('[data-set-lang]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].setAttribute('aria-pressed', btns[i].getAttribute('data-set-lang') === l ? 'true' : 'false');
    }
    try { localStorage.setItem('uni-lang', l); } catch (e) {}
  }
  var start = 'vi';
  try {
    var q = new URLSearchParams(location.search).get('lang');
    var saved = localStorage.getItem('uni-lang');
    start = q || saved || 'vi';
  } catch (e) {}
  setLang(start);
  document.addEventListener('click', function (ev) {
    var b = ev.target.closest('[data-set-lang]');
    if (b) setLang(b.getAttribute('data-set-lang'));
  });
})();
