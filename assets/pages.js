(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const root = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const hdr = $('#hdr');
  const bar = $('#progress');
  const tick = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    if (bar) bar.style.setProperty('--p', max > 0 ? (scrollY / max).toFixed(4) : '0');
    if (hdr) hdr.classList.toggle('scrolled', scrollY > 10);
  };
  addEventListener('scroll', tick, { passive: true });
  addEventListener('resize', tick);
  tick();

  const themeBtn = $('#themeBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', (e) => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      const commit = () => {
        root.dataset.theme = next;
        try { localStorage.setItem('hp-theme', next); } catch (_) {}
      };
      if (reduce || !document.startViewTransition) { commit(); return; }
      const x = e.clientX || innerWidth / 2;
      const y = e.clientY || 40;
      const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
      const vt = document.startViewTransition(commit);
      vt.ready.then(() => {
        root.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
          { duration: 520, easing: 'cubic-bezier(.22,.68,.16,1)', pseudoElement: '::view-transition-new(root)' }
        );
      }).catch(() => {});
    });
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
  $$('.reveal').forEach((el) => io.observe(el));

  const links = $$('.toc a');
  const sections = links
    .map((a) => {
      const id = a.getAttribute('href');
      return id && id.startsWith('#') ? $(id) : null;
    })
    .filter(Boolean);
  if (sections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = `#${entry.target.id}`;
        links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === id));
      });
    }, { rootMargin: '-18% 0px -68% 0px', threshold: 0 });
    sections.forEach((s) => spy.observe(s));
  }

  $$('[data-copy]').forEach((el) => {
    el.addEventListener('click', async (e) => {
      e.preventDefault();
      const text = el.getAttribute('data-copy') || '';
      if (!text) return;
      try {
        await navigator.clipboard.writeText(text);
        const old = el.textContent;
        el.textContent = '已复制';
        setTimeout(() => { el.textContent = old; }, 1400);
      } catch (_) {
        location.href = `mailto:${text}`;
      }
    });
  });

  $$('a[href]').forEach((a) => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || a.target || /^(https?:|mailto:|tel:)/.test(href)) return;
    a.addEventListener('click', (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      e.preventDefault();
      document.body.classList.add('leaving');
      setTimeout(() => { location.href = href; }, 170);
    });
  });
})();
