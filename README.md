# NEZA Digital Marketing — Agency Website

A premium, dark-themed, fully animated digital marketing agency website built with plain HTML5, CSS3, and vanilla JavaScript (no frameworks).

## 📁 Project Structure

```
neza/
├── index.html          Main page (all 15 sections)
├── css/
│   └── style.css       Full design system + responsive styles
├── js/
│   └── script.js        All interactivity & animations
├── assets/
│   ├── favicon.svg
│   └── og-cover.svg     Social share preview image
├── robots.txt
├── sitemap.xml
└── README.md
```

## 🚀 How to Use

1. Unzip / copy the whole `neza` folder anywhere.
2. Open `index.html` directly in a browser, **or** serve it locally for the best experience:
   ```bash
   npx serve neza
   ```
3. To publish, upload the folder to any static host (Netlify, Vercel, GitHub Pages, Hostinger, etc.).

## 🖼️ Replacing the Founder Photo

The founder photo is currently a circular placeholder with initials ("EA"). To use a real photo:

1. Add your photo to `assets/` (e.g. `assets/founder.jpg`).
2. In `index.html`, find:
   ```html
   <div class="founder-photo-placeholder" id="founderPhoto">EA</div>
   ```
3. Replace it with:
   ```html
   <img src="assets/founder.jpg" alt="Ebinezar A, Founder of NEZA Digital Marketing" class="founder-photo-img">
   ```
4. Add this CSS rule to `css/style.css` (near `.founder-photo-placeholder`):
   ```css
   .founder-photo-img{position:relative;width:140px;height:140px;border-radius:50%;object-fit:cover;border:2px solid var(--line);}
   ```

## 🔧 Editing Content

- **Contact details** (email, phone, WhatsApp, social links) live in `index.html` — search for `ebisaaraa@gmail.com` or `6374581582` to find every instance.
- **Skills / Tools / Projects / Certifications** are in their respective `<section>` blocks (`#skills`, `#tools`, `#projects`, `#certifications`).
- **Colors, fonts, spacing** are controlled by CSS variables at the top of `css/style.css` under `:root`.

## 🎨 Design Tokens

| Token | Value |
|---|---|
| Void background | `#050505` |
| Surface (cards) | `#0b0d17` |
| Royal Blue | `#3355FF` |
| Purple | `#8B2FF8` |
| Neon Cyan | `#00E5FF` |
| Display font | Sora |
| Body font | Inter |
| Data/mono font | Space Mono |

## ✅ Included Features

- Loading screen with animated progress bar
- Custom cursor glow + dot
- Signature "growth rail" scroll-progress line + top progress bar
- Glassmorphism cards, animated gradient blobs, floating particles canvas
- Typed.js animated headline, GSAP entrance animations, AOS scroll reveals
- VanillaTilt hover-tilt on cards, Swiper.js testimonial slider
- Animated skill bars & CountUp-style statistic counters
- Accordion FAQ, validated contact form with success animation
- Fully functional WhatsApp, phone, email, Instagram, Facebook, and Google Maps links
- Floating action buttons (WhatsApp / Call / Email / Back-to-top)
- SEO: meta tags, Open Graph, Twitter Card, Schema.org JSON-LD, robots.txt, sitemap.xml, canonical URL, favicon
- Fully responsive: mobile, tablet, laptop, desktop, ultra-wide

## 📚 External Libraries (via CDN)

- GSAP + ScrollTrigger — entrance & scroll animations
- AOS — scroll reveal
- Typed.js — animated hero headline
- Swiper.js — testimonial carousel
- VanillaTilt.js — 3D card tilt
- Lucide Icons — icon set

All loaded via CDN `<script>`/`<link>` tags in `index.html` — no build step, no npm install required.

---

Built for **NEZA Digital Marketing**, founded by **Ebinezar A**.
