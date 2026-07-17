/* =========================================================
   NEZA DIGITAL MARKETING — script.js
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Lucide Icons ---------- */
  if (window.lucide) lucide.createIcons();

  /* ---------- Font Awesome load check + inline SVG fallback ---------- */
  /* Guarantees Instagram / Facebook / WhatsApp / Email / Phone icons are
     always visible even if the Font Awesome CDN fails to load. */
  function isFontAwesomeLoaded() {
    const test = document.createElement('i');
    test.className = 'fa-brands fa-instagram';
    test.style.cssText = 'position:absolute;left:-9999px;font-size:40px;';
    document.body.appendChild(test);
    const family = window.getComputedStyle(test).getPropertyValue('font-family') || '';
    const width = test.getBoundingClientRect().width;
    document.body.removeChild(test);
    // A loaded FA glyph renders a wide, non-zero box in its own icon font.
    return family.toLowerCase().includes('awesome') && width > 10;
  }

  const SVG_FALLBACKS = {
    'fa-instagram': '<svg viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>',
    'fa-facebook-f': '<svg viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>',
    'fa-facebook': '<svg viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>',
    'fa-whatsapp': '<svg viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.4 0 224-99.6 224-222 0-59.3-25.2-115-67-156.9zM223.9 438.2c-33.2 0-65.7-8.9-94-25.8l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.3-63.3-28.3-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.5 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.7z"/></svg>',
    'fa-envelope': '<svg viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48H48zM0 176v208c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>',
    'fa-phone': '<svg viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6l-40.4 49.3c-70.4-33.3-127.4-90.3-160.7-160.7l49.3-40.4c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>',
    'fa-linkedin-in': '<svg viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 1 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>',
    'fa-youtube': '<svg viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.1 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232 336.1V175.9L361 256l-129 80.1z"/></svg>'
  };

  function applyIconFallback() {
    document.querySelectorAll('.social-icon').forEach(el => {
      const brandClass = Array.from(el.classList).find(c => SVG_FALLBACKS[c]);
      if (!brandClass) return;
      const wrapper = document.createElement('span');
      wrapper.className = 'social-icon-svg-fallback';
      wrapper.innerHTML = SVG_FALLBACKS[brandClass];
      el.replaceWith(wrapper);
    });
  }

  window.addEventListener('load', () => {
    setTimeout(() => {
      if (!isFontAwesomeLoaded()) applyIconFallback();
    }, 300);
  });

  /* ---------- Loading Screen ---------- */
  const loader = document.getElementById('loader');
  const loaderProgress = document.getElementById('loaderProgress');
  let progress = 0;
  const loadInterval = setInterval(() => {
    progress += Math.random() * 18;
    if (progress >= 100) {
      progress = 100;
      clearInterval(loadInterval);
      setTimeout(() => loader.classList.add('hide'), 300);
    }
    loaderProgress.style.width = progress + '%';
  }, 140);

  /* ---------- Custom Cursor ---------- */
  const cursorGlow = document.getElementById('cursorGlow');
  const cursorDot = document.getElementById('cursorDot');
  if (window.matchMedia('(hover: hover)').matches) {
    window.addEventListener('mousemove', (e) => {
      cursorGlow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
  }

  /* ---------- Scroll Progress + Growth Rail (signature element) ---------- */
  const scrollTop = document.getElementById('scrollProgressTop');
  const growthFill = document.getElementById('growthPathFill');
  const growthDot = document.getElementById('growthDot');
  const RAIL_HEIGHT = 1000;

  function updateScrollProgress() {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = scrollHeight > 0 ? (window.scrollY / scrollHeight) : 0;
    const pct = Math.min(Math.max(scrolled, 0), 1);

    if (scrollTop) scrollTop.style.width = (pct * 100) + '%';

    if (growthFill) {
      const y = pct * RAIL_HEIGHT;
      growthFill.setAttribute('d', `M20 0 L20 ${y}`);
      growthDot.setAttribute('cy', y);
    }

    const backTop = document.getElementById('backToTop');
    if (backTop) backTop.classList.toggle('show', window.scrollY > 500);

    const navbar = document.getElementById('navbar');
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', updateScrollProgress, { passive: true });
  updateScrollProgress();

  /* ---------- Mobile Nav Toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  /* ---------- Back To Top ---------- */
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const backToTop = document.getElementById('backToTop');
  if (backToTop) backToTop.addEventListener('click', scrollToTop);
  const backToTopFooter = document.getElementById('backToTopFooter');
  if (backToTopFooter) backToTopFooter.addEventListener('click', scrollToTop);

  /* ---------- Footer Year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- AOS ---------- */
  if (window.AOS) AOS.init({ duration: 700, once: true, offset: 60, easing: 'ease-out-cubic' });

  /* ---------- Typed.js Hero Headline ---------- */
  if (window.Typed) {
    new Typed('#typedHero', {
      strings: ['Powerful Digital Marketing', 'Data-Driven SEO', 'High-ROI Google Ads', 'Result-Driven Social Media'],
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 1800,
      loop: true,
      smartBackspace: true
    });
  }

  /* ---------- VanillaTilt ---------- */
  if (window.VanillaTilt) {
    VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
      max: 8,
      speed: 400,
      glare: true,
      'max-glare': 0.15
    });
  }

  /* ---------- Swiper Testimonials ---------- */
  if (window.Swiper) {
    new Swiper('.testi-swiper', {
      loop: true,
      spaceBetween: 24,
      slidesPerView: 1,
      autoplay: { delay: 4500, disableOnInteraction: false },
      pagination: { el: '.swiper-pagination', clickable: true },
      breakpoints: {
        768: { slidesPerView: 2 },
        1100: { slidesPerView: 3 }
      }
    });
  }

  /* ---------- Skill Bars Animation on Scroll ---------- */
  const skillBars = document.querySelectorAll('.skill-bar span');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.width + '%';
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  skillBars.forEach(bar => skillObserver.observe(bar));

  /* ---------- Counter Animation (CountUp-style, vanilla) ---------- */
  function animateCounter(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const startTime = performance.now();
    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(eased * target);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(tick);
  }
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-num').forEach(el => counterObserver.observe(el));

  /* ---------- FAQ Accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      if (!isActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ---------- Button Ripple Effect ---------- */
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = (e.clientX - rect.left) + 'px';
      ripple.style.top = (e.clientY - rect.top) + 'px';
      ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    });
  });

  /* ---------- Contact Form Validation + EmailJS Delivery ---------- */
  /* ============================================================
     EMAILJS SETUP — replace the three placeholders below with the
     values from your EmailJS account (https://www.emailjs.com):
       1. EMAILJS_PUBLIC_KEY  → Account → General → Public Key
       2. EMAILJS_SERVICE_ID  → Email Services → your connected service
       3. EMAILJS_TEMPLATE_ID → Email Templates → your template
     In the EmailJS template itself, set the "To email" field to
     nezadigital.in@gmail.com (or to {{to_email}}, which this form
     already sends) so every submission is delivered there.
     Template should reference these variables: {{from_name}},
     {{from_email}}, {{phone}}, {{company}}, {{service}}, {{message}}.
     ============================================================ */
  const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY';
  const EMAILJS_SERVICE_ID = 'YOUR_EMAILJS_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = 'YOUR_EMAILJS_TEMPLATE_ID';
  const CONTACT_RECEIVER_EMAIL = 'nezadigital.in@gmail.com';

  if (window.emailjs && EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY.indexOf('YOUR_') !== 0) {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }

  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  const formError = document.getElementById('formError');
  if (form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const submitBtnLabel = submitBtn ? submitBtn.querySelector('span') : null;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      const requiredFields = form.querySelectorAll('[required]');

      requiredFields.forEach(field => {
        const wrapper = field.closest('.field');
        let fieldValid = field.value.trim() !== '';
        if (field.type === 'email') {
          fieldValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
        }
        if (field.type === 'tel') {
          fieldValid = /^[+\d][\d\s-]{7,}$/.test(field.value.trim());
        }
        wrapper.classList.toggle('invalid', !fieldValid);
        if (!fieldValid) valid = false;
      });

      if (!valid) return;

      if (formError) formError.classList.remove('show');
      if (submitBtn) { submitBtn.disabled = true; submitBtn.classList.add('is-loading'); }
      if (submitBtnLabel) submitBtnLabel.textContent = 'Sending…';

      const templateParams = {
        to_email: CONTACT_RECEIVER_EMAIL,
        from_name: form.name.value.trim(),
        from_email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        company: form.company.value.trim() || 'Not provided',
        service: form.service.value,
        message: form.message.value.trim()
      };

      const resetButton = () => {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.classList.remove('is-loading'); }
        if (submitBtnLabel) submitBtnLabel.textContent = 'Send Message';
      };

      if (!window.emailjs) {
        resetButton();
        if (formError) formError.classList.add('show');
        return;
      }

      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(() => {
          formSuccess.classList.add('show');
          setTimeout(() => {
            form.reset();
            formSuccess.classList.remove('show');
          }, 3200);
        })
        .catch((err) => {
          console.error('EmailJS send failed:', err);
          if (formError) formError.classList.add('show');
        })
        .finally(resetButton);
    });

    form.querySelectorAll('input, textarea, select').forEach(input => {
      input.addEventListener('input', () => {
        input.closest('.field').classList.remove('invalid');
      });
    });
  }

  /* ---------- GSAP Hero Entrance ---------- */
  if (window.gsap) {
    gsap.from('.hero-eyebrow', { opacity: 0, y: 20, duration: 0.7, delay: 0.2 });
    gsap.from('.hero-title', { opacity: 0, y: 30, duration: 0.8, delay: 0.3 });
    gsap.from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.8, delay: 0.45 });
    gsap.from('.hero-actions', { opacity: 0, y: 20, duration: 0.8, delay: 0.6 });
    gsap.from('.hero-trust', { opacity: 0, y: 20, duration: 0.8, delay: 0.75 });
    gsap.from('.dashboard-mock', { opacity: 0, scale: 0.92, duration: 1, delay: 0.5, ease: 'power3.out' });
    gsap.from('.phone-mock', { opacity: 0, scale: 0.9, y: 30, duration: 1, delay: 0.75, ease: 'power3.out' });
  }

  /* ---------- Canvas Particles (Hero background) ---------- */
  const canvas = document.getElementById('particles');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    const colors = ['#3355FF', '#8B2FF8', '#00E5FF'];

    function resizeCanvas() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function initParticles() {
      const count = window.innerWidth < 760 ? 30 : 60;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.6,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.2
      }));
    }
    initParticles();

    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      requestAnimationFrame(drawParticles);
    }
    drawParticles();
  }

});
