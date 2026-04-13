/* ============================================
   EUGENIO QUINTERO — PORTFOLIO JS
   ============================================ */

/* ---- Navbar: transparent → solid on scroll ---- */
(function () {
    var navbar = document.getElementById('navbar');
    function onScroll() {
        navbar.classList.toggle('scrolled', window.scrollY > 60);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();

/* ---- Mobile nav toggle ---- */
(function () {
    var toggle = document.getElementById('navToggle');
    var links  = document.getElementById('navLinks');
    if (!toggle || !links) return;

    toggle.addEventListener('click', function () {
        links.classList.toggle('open');
    });

    links.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
            links.classList.remove('open');
        });
    });
})();

/* ---- Typing animation ---- */
(function () {
    var el = document.getElementById('typedText');
    if (!el) return;

    var words = [
        'SQL databases',
        'Python & pandas',
        'MySQL pipelines',
        'Power BI reports',
        'data storytelling'
    ];

    var wordIndex = 0;
    var charIndex = 0;
    var deleting  = false;

    function tick() {
        var current = words[wordIndex];

        if (deleting) {
            el.textContent = current.substring(0, charIndex - 1);
            charIndex--;
        } else {
            el.textContent = current.substring(0, charIndex + 1);
            charIndex++;
        }

        var delay = deleting ? 55 : 95;

        if (!deleting && charIndex === current.length) {
            delay    = 1800;
            deleting = true;
        } else if (deleting && charIndex === 0) {
            deleting  = false;
            wordIndex = (wordIndex + 1) % words.length;
            delay     = 350;
        }

        setTimeout(tick, delay);
    }

    tick();
})();

/* ---- Scroll reveal ---- */
(function () {
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry, i) {
            if (entry.isIntersecting) {
                var el = entry.target;
                var delay = i * 75;
                setTimeout(function () {
                    el.classList.add('visible');
                }, delay);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.12 });

    els.forEach(function (el) { observer.observe(el); });
})();

/* ---- Active nav link on scroll ---- */
(function () {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-links a');

    function onScroll() {
        var scrollY = window.scrollY + 100;
        var activeId = null;
        sections.forEach(function (section) {
            if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
                activeId = section.getAttribute('id');
            }
        });
        navLinks.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + activeId);
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
})();
