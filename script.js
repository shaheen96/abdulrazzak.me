/* =========================================================================
   EDIT EVERYTHING HERE. Nothing else in this file needs to change.

   category  →  corporate | events | portraits | product | location
   exif      →  optional. Leave "" to hide it.
   ========================================================================= */

/* Photography projects. Same pattern as the reels: one entry per
   project, each linking out to its full gallery. Add a `url` and the
   card becomes a link; leave it off and the card opens in the
   in-page lightbox instead (useful for single standalone frames). */
const PHOTOS = [
  { src:"images/work-grad.jpg", caption:"Graduation Photos",
    caption_ar:"صور التخرّج",
    url:"https://www.behance.net/gallery/159386767/Graduation-Photos" },
  { src:"images/work-corporate.jpg", caption:"Corporate Portraits",
    caption_ar:"بورتريهات مؤسسية",
    url:"https://shahin25.pixieset.com/corporateportraits/" },
  { src:"images/work-architecture.jpg", caption:"Architecture & Interiors",
    caption_ar:"العمارة والتصميم الداخلي",
    url:"https://shahin25.pixieset.com/architectureandinteriors/" },
  { src:"images/work-events.jpg", caption:"Event Photography",
    caption_ar:"تصوير الفعاليات",
    url:"https://shahin25.pixieset.com/eventphotography/" }
];

/* Landscape 16:9 films for the Motion section.
   Same three sources as the vertical reels below.
   Vimeo: { host:"vimeo", id:"1222497309", poster:"…", title:"…", note:"…" }
          add hash:"XXXX" only if the video is unlisted.
   YouTube: { host:"youtube", id:"ABC123", … }
   Nothing plays until the visitor clicks — the player script never loads otherwise.
   Empty the array to hide the section. */
const REELS = [
  { host:"vimeo", id:"1222497309",
    poster:"https://i.vimeocdn.com/video/2195468797-43ecd277eb6b2edda8cb1ee6c82f437ab4a9288c77e232917777ca94c0c94737-d_1200",
    title:"Dr Sunny Year End Party 2025", note:"Event film — multi-camera coverage, cut, graded and mixed.",
    title_ar:"حفل نهاية العام — دكتور صني ٢٠٢٥", note_ar:"فيلم فعالية — تغطية بأكثر من كاميرا، مونتاج وتدرّج لوني ومزج صوتي." },
  { host:"vimeo", id:"1222667458",
    poster:"images/maika-poster.jpg",
    title:"Maika", note:"Brand film — concept through to final grade.",
    title_ar:"مايكا", note_ar:"فيلم علامة تجارية — من الفكرة حتى التدرّج النهائي." },
  { host:"vimeo", id:"1223232488",
    poster:"https://i.vimeocdn.com/video/2196396773-ba45bf674d156a6d8cebd4ad57eda1c4bd3f2ab9e634972e402f41701ee80cd5-d_1200",
    title:"Welcome", note:"Corporate film — filmed, edited and graded.",
    title_ar:"ترحيب", note_ar:"فيلم مؤسسي — تصوير ومونتاج وتدرّج لوني." }
];

/* Vertical 9:16 reels.
   Three ways to add one:

   A) Vimeo (recommended — no branding clutter, no suggested videos)
        { type:"vimeo", id:"1222492466", poster:"...", title:"…", note:"…" }
        Unlisted videos need `hash` — it is the h= value in the player URL.
        Public videos: leave hash out.
   B) YouTube Short
        { type:"youtube", id:"ABC123", poster:"…", title:"…", note:"…" }
   C) Your own file
        { type:"file", src:"reels/reel-01.mp4", poster:"reels/reel-01.jpg", title:"…", note:"…" }

   `poster` is the still shown before playback. For Vimeo you can paste the
   thumbnail URL, but saving it into reels/ is faster and keeps you independent.
   Empty the array to hide the whole section. */
const VREELS = [
  { type:"vimeo", id:"1222492466",
    poster:"reels/reel-01.jpg",
    title:"1000+ Employees, One Team", note:"Corporate film",
    title_ar:"أكثر من ١٠٠٠ موظف، فريق واحد", note_ar:"فيلم مؤسسي" },
  { type:"vimeo", id:"1222493958",
    poster:"reels/reel-02.jpg",
    title:"Aston Martin", note:"Automotive film",
    title_ar:"أستون مارتن", note_ar:"فيلم سيارات" },
  { type:"vimeo", id:"1222497108",
    poster:"https://i.vimeocdn.com/video/2195467709-5cf269380a947e100471ddd42e158184d292045a65987030dee8533f5d4a12c8-d_1200",
    title:"Oxygeneo Facial", note:"Beauty & treatment",
    title_ar:"جلسة أوكسيجينيو للبشرة", note_ar:"تجميل وعناية" },
  { type:"vimeo", id:"1222625576",
    poster:"https://i.vimeocdn.com/video/2195632700-acf43df98d3db9143edb60f33bcc9c5c6548c70122eca0f7f1673a4351d0593c-d_1200",
    title:"Dr Sunny App", note:"Product launch",
    title_ar:"تطبيق دكتور صني", note_ar:"إطلاق منتج" },
  { type:"vimeo", id:"1223904502",
    poster:"reels/wedding-invite.jpg",
    title:"AI Wedding Invitation", note:"AI-generated concept film",
    title_ar:"دعوة زفاف بالذكاء الاصطناعي", note_ar:"فيلم مفاهيمي مولّد بالذكاء الاصطناعي" },
  { type:"vimeo", id:"1222668318",
    poster:"https://i.vimeocdn.com/video/2195686136-df649bb520e681e2445630d104dd60ae992cff53ac3e59be2c29d492d5ec082b-d_1200",
    title:"Happy Onam", note:"Seasonal campaign",
    title_ar:"أونام سعيد", note_ar:"حملة موسمية" },
  { type:"vimeo", id:"1223238287",
    poster:"reels/nano-after.jpg",
    title:"Nano Teeth Whitening", note:"Treatment promo",
    title_ar:"تبييض الأسنان بالنانو", note_ar:"إعلان علاجي" },
  { type:"vimeo", id:"1222613807",
    poster:"reels/reel-06.jpg",
    title:"Nano Teeth Whitening", note:"Treatment promo",
    title_ar:"تبييض الأسنان بالنانو", note_ar:"إعلان علاجي" },
  { type:"vimeo", id:"1222646989",
    poster:"reels/reel-07.jpg",
    title:"Emirati Women's Day", note:"National campaign",
    title_ar:"يوم المرأة الإماراتية", note_ar:"حملة وطنية" },
  { type:"vimeo", id:"1222615083",
    poster:"reels/reel-09.jpg",
    title:"Lip Filler", note:"Treatment promo",
    title_ar:"فيلر الشفاه", note_ar:"إعلان علاجي" }
];

/* Design pieces. `url` is optional — add one and the tile becomes a link
   that opens the full project in a new tab. Leave it out for a plain image. */
const DESIGNS = [
  { src:"images/design/design-01.jpg", alt:"Social media design set",
    title:"Social Media", title_ar:"تصاميم السوشال ميديا", url:"https://www.behance.net/gallery/244742483/Social-Media" },
  { src:"images/design/design-02.jpg", alt:"Haram Transfer brand guidelines",
    title:"Brand Guidelines", title_ar:"دليل الهوية البصرية", url:"https://www.behance.net/gallery/159319755/Brand-Guidelines" },
  { src:"images/design/design-03.jpg", alt:"Social media post designs",
    title:"Social Media Posts", title_ar:"منشورات السوشال ميديا", url:"https://www.behance.net/gallery/180026977/Social-media-Post" }
];


/* =========================== LANGUAGE ===========================
   English is the primary language. Arabic is a full translation
   layer applied over the same markup — no second page to maintain.
   To change a string, edit it in BOTH dictionaries below.        */

const I18N = {
  en: {
    "skip":"Skip to work",
    "nav.work":"Photography", "nav.motion":"Video", "nav.reels":"Reels",
    "nav.design":"Design", "nav.about":"About", "nav.contact":"Contact",
    "hero.title":"Abdul Razzak<br>Shahin",
    "hero.badge.loc":"Dubai, UAE", "hero.badge.avail":"Available for work",
    "hero.sub":"Photographer & Videographer based in Dubai. I shoot corporate, event, portrait and product work across the UAE, then take it through post-production to polished, on-brand final content.",
    "hero.cta1":"See the work", "hero.cta2":"Download CV", "scroll":"Scroll",
    "work.eyebrow":"Selected photography", "work.title":"Featured Work",
    "work.lede":"A tight edit, not an archive.",
    "work.empty":"No frames in this set yet.",
    "motion.eyebrow":"Selected Video", "motion.title":"Video Production",
    "motion.lede":"From camera to final delivery, filming, editing, colour grading and post-production for brands, events and corporate projects.",
    "reels.eyebrow":"Selected Reels", "reels.title":"Reels & Social Video",
    "reels.lede":"Vertical-first content for brands, events and campaigns, covering filming, editing and post-production for social media.",
    "reels.hint":"Scroll sideways",
    "design.eyebrow":"Design experience", "design.title":"Graphic Design & Large Format",
    "design.lede":"I create visual content for digital, print and large-format applications, including social media, brand assets, banners, signage and outdoor advertising.",
    "design.view":"View project \u2197",
    "about.eyebrow":"About", "about.title":"From concept to final delivery",
    "about.caption":"Studio portrait · Dubai",
    "about.p1":"I am a photographer and videographer based in Dubai. Since 2021, I have worked with healthcare, hospitality and entertainment brands across the UAE. My work includes corporate portraits, facility and location photography, product work, and full event coverage.",
    "about.p2":"I set up my own camera, lighting and audio, and carry everything through post myself: culling, retouching, colour correction, grading, sound, and final export for whatever the destination requires.",
    "facts.based":"Based",     "facts.basedv":"Dubai, UAE",
    "facts.shoot":"Shooting",  "facts.shootv":"DSLR · drone · gimbal · studio lighting",
    "facts.post":"Post",       "facts.postv":"Lightroom · Photoshop · Premiere Pro · After Effects",
    "facts.lang":"Languages",  "facts.langv":"Arabic (native) · English (professional)",
    "about.cv":"Download CV",
    "contact.eyebrow":"Available for assignments and full-time roles",
    "contact.wa":"WhatsApp",
    "foot":"Dubai, UAE · +971 54 372 7507",
    "frameWord":"Frame", "reelWord":"Reel", "projectWord":"Project", "langBtn":"العربية"
  },
  ar: {
    "skip":"تخطَّ إلى الأعمال",
    "nav.work":"التصوير", "nav.motion":"الفيديو", "nav.reels":"الريلز",
    "nav.design":"التصميم", "nav.about":"نبذة", "nav.contact":"تواصل",
    "hero.title":"عبد الرزاق<br>شاهين",
    "hero.badge.loc":"دبي، الإمارات", "hero.badge.avail":"متاح للعمل",
    "hero.sub":"مصور فوتوغرافي وفيديو مقيم في دبي. أصوّر الأعمال المؤسسية والفعاليات والبورتريه والمنتجات في أنحاء الإمارات، ثم أتولّى المونتاج والمعالجة وما بعد الإنتاج حتى تسليم محتوى نهائي متوافق مع هوية العلامة التجارية.",
    "hero.cta1":"شاهد الأعمال", "hero.cta2":"تحميل السيرة الذاتية", "scroll":"مرّر",
    "work.eyebrow":"صور مختارة", "work.title":"أبرز الأعمال",
    "work.lede":"اختيار مختصر، وليس أرشيفاً كاملاً.",
    "work.empty":"لا توجد صور في هذه الفئة بعد.",
    "motion.eyebrow":"فيديوهات مختارة", "motion.title":"إنتاج الفيديو",
    "motion.lede":"من التصوير إلى التسليم النهائي، تصوير ومونتاج وتصحيح وتدرّج الألوان وما بعد الإنتاج للعلامات التجارية والفعاليات والمشاريع المؤسسية.",
    "reels.eyebrow":"ريلز مختارة", "reels.title":"الريلز وفيديوهات السوشيال ميديا",
    "reels.lede":"محتوى فيديو عمودي للعلامات التجارية والفعاليات والحملات، يشمل التصوير والمونتاج وما بعد الإنتاج لمنصات التواصل الاجتماعي.",
    "reels.hint":"مـــرّر  للجــانب",
    "design.eyebrow":"خبرة في التصميم", "design.title":"التصميم الجرافيكي والمطبوعات",
    "design.lede":"أصمم محتوى بصرياً للاستخدامات الرقمية والمطبوعة والإعلانات كبيرة الحجم، بما يشمل تصاميم وسائل التواصل الاجتماعي، وعناصر الهوية البصرية، والبانرات، واللوحات الإرشادية، والإعلانات الخارجية.",
    "design.view":"عرض المشروع \u2197",
    "about.eyebrow":"نـبــــذة", "about.title":"من الفكرة إلى التسليم النهائي",
    "about.caption":"بورتريه استوديو · دبي",
    "about.p1":"أنا مصور فوتوغرافي ومصور فيديو مقيم في دبي. منذ عام ٢٠٢١، عملت مع علامات تجارية في قطاعات الرعاية الصحية والضيافة والترفيه في مختلف أنحاء دولة الإمارات. تشمل أعمالي التصوير المؤسسي للأفراد، وتصوير المنشآت والمواقع، وتصوير المنتجات، والتغطية الكاملة للفعاليات.",
    "about.p2":"أتولى بنفسي إعداد الكاميرا والإضاءة والصوت، وأكمل جميع مراحل ما بعد الإنتاج، بدءًا من فرز المواد وتنقيح الصور وتصحيح الألوان والتلوين، وصولًا إلى معالجة الصوت وتجهيز الملفات النهائية بما يتناسب مع جهة الاستخدام.",
    "facts.based":"الإقامة",   "facts.basedv":"دبي، الإمارات",
    "facts.shoot":"التصوير",   "facts.shootv":"DSLR · درون · جيمبال · إضاءة استوديو",
    "facts.post":"المعالجة",   "facts.postv":"Lightroom · Photoshop · Premiere Pro · After Effects",
    "facts.lang":"اللغات",     "facts.langv":"العربية (لغة أم) · الإنجليزية (احترافية)",
    "about.cv":"تحميل السيرة الذاتية",
    "contact.eyebrow":"متـــاح  للمهــام  المســـتقلة  و الوظـائف  بـــدوام  كـامــل",
    "contact.wa":"واتساب",
    "foot":"دبي، الإمارات · ‎+971 54 372 7507",
    "frameWord":"الإطار", "reelWord":"ريل", "projectWord":"مشروع", "langBtn":"English"
  }
};

let LANG = "en";
const T = k => (I18N[LANG] && I18N[LANG][k]) || I18N.en[k] || "";

/* ===================== nothing to edit below ===================== */

const $ = (s, r = document) => r.querySelector(s);
const grid = $("#grid"), empty = $("#empty");
let shown = PHOTOS.slice();

const pad = n => String(n).padStart(3, "0");

function renderGrid() {
  shown = PHOTOS.slice();
  grid.innerHTML = "";
  empty.hidden = shown.length > 0;

  shown.forEach((p, i) => {
    // An entry with a `url` is a linked project, not a single frame:
    // render it as an anchor that opens the gallery in a new tab
    // instead of a button that opens the in-page lightbox.
    const isLink = Boolean(p.url);
    const cell = document.createElement(isLink ? "a" : "button");
    cell.className = isLink ? "cell cell--link rv" : "cell rv";
    if (isLink) {
      cell.href = p.url;
      cell.target = "_blank";
      cell.rel = "noopener";
    } else {
      cell.type = "button";
    }
    cell.setAttribute("aria-label", localised(p,"caption"));
    cell.dataset.i = i;
    cell.innerHTML = `
      <img src="${p.src}" alt="${localised(p,"caption")}" loading="lazy" decoding="async">
      <span class="cell__meta">
        <span class="cell__no">${isLink ? T("projectWord") : T("frameWord") + " " + pad(i + 1)}</span>
        <span class="cell__cap">${localised(p,"caption")}</span>
        ${isLink
          ? `<span class="cell__go">${T("design.view")}</span>`
          : (p.exif ? `<span class="cell__exif">${p.exif}</span>` : "")}
      </span>`;
    if (!isLink) cell.addEventListener("click", () => openLb(i));
    grid.appendChild(cell);
  });
  observeReveals();
}

/* ---- motion (landscape) ---- */
function renderReels() {
  const wrap = document.getElementById("reels");
  wrap.innerHTML = "";
  if (!REELS.length) { wrap.closest("section").hidden = true; return; }

  REELS.forEach(r => {
    const card = document.createElement("article");
    card.className = "reel rv";
    card.innerHTML = `
      <button class="reel__frame" type="button" aria-label="${localised(r,"title")}">
        <img src="${r.poster}" alt="" loading="lazy" decoding="async">
        <span class="reel__play"></span>
      </button>
      <div class="reel__cap"><h3>${localised(r,"title")}</h3><p>${localised(r,"note")}</p></div>`;

    card.querySelector(".reel__frame").addEventListener("click", e => {
      const frame = e.currentTarget;
      const src = r.host === "vimeo"
        ? `https://player.vimeo.com/video/${r.id}${r.hash ? `?h=${r.hash}&` : "?"}autoplay=1&title=0&byline=0&portrait=0`
        : `https://www.youtube-nocookie.com/embed/${r.id}?autoplay=1`;
      frame.outerHTML = `<div class="reel__frame">
        <iframe src="${src}" title="${r.title}"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture" allowfullscreen></iframe>
      </div>`;
    });

    wrap.appendChild(card);
  });
}

/* ---- vertical reels ---- */
function renderVReels(){
  const rail = document.getElementById("rail");
  const sect = document.getElementById("reels-v");
  rail.innerHTML = "";
  if (!VREELS.length) { sect.hidden = true; return; }

  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  VREELS.forEach((r, i) => {
    const card = document.createElement("button");
    card.className = "vreel rv";
    card.type = "button";
    card.setAttribute("aria-label", localised(r,"title"));

    const media = r.type === "file"
      ? `<video src="${r.src}" poster="${r.poster}" muted loop playsinline preload="none"></video>`
      : `<img src="${r.poster}" alt="${r.title}" loading="lazy" decoding="async"
             onerror="this.style.opacity=.25">`;

    card.innerHTML = `${media}
      <span class="vreel__scrim"></span>
      <span class="vreel__play"></span>
      <span class="vreel__meta">
        <span class="vreel__no">${T("reelWord")} ${String(i + 1).padStart(2, "0")}</span>
        <span class="vreel__title">${localised(r,"title")}</span>
        ${r.note ? `<span class="vreel__note">${localised(r,"note")}</span>` : ""}
      </span>`;

    card.addEventListener("click", () => openReel(r));
    rail.appendChild(card);
  });

  // silent preview loops only while the card is on screen
  if (!reduce && "IntersectionObserver" in window) {
    const vio = new IntersectionObserver(entries => {
      entries.forEach(en => {
        const v = en.target.querySelector("video");
        if (!v) return;
        if (en.isIntersecting) { v.play().catch(() => {}); }
        else { v.pause(); }
      });
    }, { threshold: 0.45 });
    rail.querySelectorAll(".vreel").forEach(c => vio.observe(c));
  }

  // drag to scroll on desktop
  let down = false, x0 = 0, s0 = 0;
  rail.addEventListener("pointerdown", e => { down = true; x0 = e.clientX; s0 = rail.scrollLeft; });
  addEventListener("pointerup", () => { down = false; });
  rail.addEventListener("pointermove", e => {
    if (!down) return;
    rail.scrollLeft = s0 - (e.clientX - x0);
  });
}

/* ---- design ---- */
function renderDesign() {
  const wrap = $("#strip");
  if (!DESIGNS.length) { wrap.closest("section").hidden = true; return; }
  wrap.innerHTML = DESIGNS.map(d => {
    const img = `<img src="${d.src}" alt="${d.alt}" loading="lazy" decoding="async">`;
    if (!d.url) return `<figure class="tile rv">${img}</figure>`;
    return `<a class="tile tile--link rv" href="${d.url}" target="_blank" rel="noopener"
              aria-label="${localised(d,"title") || d.alt}">
      ${img}
      <span class="tile__meta">
        <span class="tile__title">${localised(d,"title") || d.alt}</span>
        <span class="tile__go">${T("design.view")}</span>
      </span>
    </a>`;
  }).join("");
}

/* ---- lightbox ---- */
const lb = $("#lb"), lbImg = $("#lbImg"), lbCap = $("#lbCap"), lbExif = $("#lbExif");
let cur = 0, lastFocus = null;

function openReel(r) {
  lastFocus = document.activeElement;
  lbImg.hidden = true;
  const holder = lbImg.parentNode;
  holder.querySelectorAll(".lb__vid, .lb__embed").forEach(n => n.remove());

  let node;
  if (r.type === "file") {
    node = document.createElement("video");
    node.className = "lb__vid";
    node.src = r.src; node.poster = r.poster;
    node.controls = true; node.autoplay = true; node.playsInline = true;
  } else {
    node = document.createElement("iframe");
    node.className = "lb__embed";
    node.src = r.type === "vimeo"
      ? `https://player.vimeo.com/video/${r.id}${r.hash ? `?h=${r.hash}&` : "?"}autoplay=1&title=0&byline=0&portrait=0`
      : `https://www.youtube-nocookie.com/embed/${r.id}?autoplay=1`;
    node.allow = "autoplay; fullscreen; encrypted-media; picture-in-picture";
    node.allowFullscreen = true;
  }
  holder.insertBefore(node, holder.firstChild);

  lbCap.textContent = localised(r,"title");
  lbExif.textContent = localised(r,"note");
  document.getElementById("lbPrev").hidden = true;
  document.getElementById("lbNext").hidden = true;
  lb.hidden = false;
  document.body.style.overflow = "hidden";
  $("#lbClose").focus();
}

function openLb(i) {
  lbImg.hidden = false;
  lb.querySelectorAll(".lb__vid, .lb__embed").forEach(n => n.remove());
  document.getElementById("lbPrev").hidden = false;
  document.getElementById("lbNext").hidden = false;
  cur = i; lastFocus = document.activeElement;
  paint(); lb.hidden = false;
  document.body.style.overflow = "hidden";
  $("#lbClose").focus();
}
function paint() {
  const p = shown[cur];
  lbImg.src = p.src; lbImg.alt = localised(p,"caption");
  lbCap.textContent = localised(p,"caption");
  lbExif.textContent = p.exif || "";
}
function closeLb() {
  lb.hidden = true; lbImg.src = "";
  lb.querySelectorAll(".lb__vid, .lb__embed").forEach(n => n.remove());
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}
// Linked project entries have no lightbox view, so arrow navigation
// steps past them instead of landing on a card it cannot display.
const step = d => {
  for (let n = 0; n < shown.length; n++) {
    cur = (cur + d + shown.length) % shown.length;
    if (!shown[cur].url) break;
  }
  paint();
};

$("#lbClose").addEventListener("click", closeLb);
$("#lbPrev").addEventListener("click", () => step(-1));
$("#lbNext").addEventListener("click", () => step(1));
lb.addEventListener("click", e => { if (e.target === lb) closeLb(); });
document.addEventListener("keydown", e => {
  if (lb.hidden) return;
  if (e.key === "Escape") closeLb();
  if (document.getElementById("lbPrev").hidden) return;
  if (e.key === "ArrowLeft") step(-1);
  if (e.key === "ArrowRight") step(1);
});

/* ---- nav + reveals ---- */
const nav = $("#nav");
const onScroll = () => nav.classList.toggle("is-stuck", window.scrollY > 40);
addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---- active section in the nav ---- */
(function trackSection(){
  const links = [...document.querySelectorAll('.nav__links a[href^="#"]')]
    .filter(a => !a.classList.contains("nav__cta"));
  const sections = links
    .map(a => ({ link: a, el: document.getElementById(a.getAttribute("href").slice(1)) }))
    .filter(s => s.el);
  if (!sections.length) return;

  const mark = () => {
    // the section covering the point just below the fixed header wins
    const line = window.scrollY + 120;
    let current = null;
    for (const s of sections) {
      if (s.el.offsetTop <= line) current = s;
    }
    // past the last section, keep the final link lit
    if (!current && window.scrollY + window.innerHeight >= document.body.scrollHeight - 4) {
      current = sections[sections.length - 1];
    }
    links.forEach(a => a.classList.remove("is-here"));
    if (current) current.link.classList.add("is-here");
  };

  let ticking = false;
  addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { mark(); ticking = false; });
  }, { passive: true });
  addEventListener("resize", mark, { passive: true });
  mark();
})();

let io;
function observeReveals() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".rv").forEach(el => el.classList.add("is-in"));
    return;
  }
  io = io || new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".rv:not(.is-in)").forEach(el => io.observe(el));
}

/* ---- hero: cursor as key light + layered parallax ---- */
(function heroMotion(){
  const hero = document.querySelector(".hero");
  if (!hero) return;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (matchMedia("(hover: none)").matches) return;   // no pointer, no parallax

  const bg      = hero.querySelector(".hero__img");
  const portrait= hero.querySelector(".portrait");
  const title   = hero.querySelector(".hero__title");

  // target vs rendered, so movement eases instead of snapping
  let tx = 0, ty = 0, x = 0, y = 0, raf = null;

  hero.addEventListener("pointermove", e => {
    const r = hero.getBoundingClientRect();
    tx = (e.clientX - r.left) / r.width  - .5;   // -0.5 … 0.5
    ty = (e.clientY - r.top)  / r.height - .5;
    hero.style.setProperty("--kx", `${((tx + .5) * 100).toFixed(1)}%`);
    hero.style.setProperty("--ky", `${((ty + .5) * 100).toFixed(1)}%`);
    hero.classList.add("is-lit");
    if (!raf) raf = requestAnimationFrame(tick);
  });

  hero.addEventListener("pointerleave", () => {
    tx = ty = 0;
    hero.classList.remove("is-lit");
    if (!raf) raf = requestAnimationFrame(tick);
  });

  function tick(){
    x += (tx - x) * .07;
    y += (ty - y) * .07;

    bg.style.transform       = `translate3d(${(-x * 22).toFixed(2)}px, ${(-y * 16).toFixed(2)}px, 0) scale(1.02)`;
    title.style.transform    = `translate3d(${(x * 9).toFixed(2)}px, ${(y * 7).toFixed(2)}px, 0)`;
    portrait.style.transform = `translate3d(${(x * -26).toFixed(2)}px, ${(y * -18).toFixed(2)}px, 0) rotate(${(x * 1.1).toFixed(2)}deg)`;

    raf = (Math.abs(tx - x) > .0006 || Math.abs(ty - y) > .0006)
      ? requestAnimationFrame(tick)
      : null;
  }
})();

$("#yr").textContent = new Date().getFullYear();

/* pick the Arabic variant of a field when available, else fall back */
function localised(obj, key) {
  if (LANG === "ar" && obj[key + "_ar"]) return obj[key + "_ar"];
  return obj[key] || "";
}

function applyLang(lang) {
  LANG = (lang === "ar") ? "ar" : "en";
  const ar = LANG === "ar";

  document.documentElement.lang = ar ? "ar" : "en";
  document.documentElement.dir  = ar ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = T(el.dataset.i18n);
    if (v) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const v = T(el.dataset.i18nHtml);
    if (v) el.innerHTML = v;
  });

  const btn = document.getElementById("lang");
  if (btn) btn.textContent = T("langBtn");

  // re-render the data-driven sections so their labels follow the language
  renderGrid();
  renderReels();
  renderVReels();
  renderDesign();

  // the sections above just replaced every .rv element with a fresh one;
  // the old IntersectionObserver never saw the new nodes, so without this
  // call everything they contain would stay invisible (opacity:0) until
  // a full page reload re-ran the whole script from scratch.
  observeReveals();

  try { localStorage.setItem("lang", LANG); } catch (e) {}
}

document.getElementById("lang").addEventListener("click", () => {
  applyLang(LANG === "en" ? "ar" : "en");
});

let saved = "en";
try { saved = localStorage.getItem("lang") || "en"; } catch (e) {}
applyLang(saved);

observeReveals();
