(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  }

  const search = document.querySelector('#literature-search');
  if (search) {
    const items = [...document.querySelectorAll('.literature-item')];
    search.addEventListener('input', () => {
      const q = search.value.toLowerCase().trim();
      items.forEach((item) => {
        item.hidden = q && !item.dataset.search.toLowerCase().includes(q);
      });
    });
  }
})();
