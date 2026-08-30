/* =========================================================================
   EDIT EVERYTHING HERE. Nothing else in this file needs to change.

   category  →  corporate | events | portraits | product | location
   exif      →  optional. Leave "" to hide it.
   ========================================================================= */

const PHOTOS = [
  { src:"images/work-01.jpg", category:"portraits", caption:"Executive portrait",        exif:"85mm · f/1.8 · 1/160 · ISO 200" },
  { src:"images/work-02.jpg", category:"corporate", caption:"Facility walkthrough",      exif:"24mm · f/4 · 1/125 · ISO 400" },
  { src:"images/work-03.jpg", category:"events",    caption:"Opening night",             exif:"35mm · f/2 · 1/200 · ISO 1600" },
  { src:"images/work-04.jpg", category:"portraits", caption:"Studio headshot",           exif:"85mm · f/2.8 · 1/200 · ISO 100" },
  { src:"images/work-05.jpg", category:"location",  caption:"Site documentation",        exif:"16mm · f/8 · 1/250 · ISO 100" },
  { src:"images/work-06.jpg", category:"product",   caption:"Product on set",            exif:"100mm · f/11 · 1/160 · ISO 100" },
  { src:"images/work-07.jpg", category:"events",    caption:"Award ceremony",            exif:"70mm · f/2.8 · 1/250 · ISO 3200" },
  { src:"images/work-08.jpg", category:"location",  caption:"Exterior, blue hour",       exif:"24mm · f/8 · 4s · ISO 100" },
  { src:"images/work-09.jpg", category:"corporate", caption:"Team at work",              exif:"35mm · f/2.8 · 1/160 · ISO 800" },
  { src:"images/work-10.jpg", category:"product",   caption:"Packaging detail",          exif:"100mm · f/13 · 1/125 · ISO 100" },
  { src:"images/work-11.jpg", category:"events",    caption:"Crowd, stage light",        exif:"50mm · f/1.8 · 1/320 · ISO 2500" },
  { src:"images/work-12.jpg", category:"portraits", caption:"Environmental portrait",    exif:"50mm · f/2 · 1/200 · ISO 400" }
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
    title:"Dr Sunny Year End Party 2025", note:"Event film — shot, cut, graded and mixed." }
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
    poster:"https://i.vimeocdn.com/video/2195461360-19adeea2be5fbfab8df077dbb1f0c8e96949308ad040ffcec4831bdad4fb4a69-d_1200",
    title:"1000+ Employees, One Team", note:"Corporate film" },
  { type:"vimeo", id:"1222493958",
    poster:"https://i.vimeocdn.com/video/2195463516-b307a4250a213c46f5ce52c67d1022a4d4ccbbaa30194dd4b991a9dae5928afa-d_1200",
    title:"Aston Martin", note:"Automotive film" },
  { type:"vimeo", id:"1222497108",
    poster:"https://i.vimeocdn.com/video/2195467709-5cf269380a947e100471ddd42e158184d292045a65987030dee8533f5d4a12c8-d_1200",
    title:"Oxygeneo Facial", note:"Beauty & treatment" }
];

const DESIGNS = [
  { src:"images/design/design-01.jpg", alt:"Large-format campaign artwork" },
  { src:"images/design/design-02.jpg", alt:"Brand collateral" },
  { src:"images/design/design-03.jpg", alt:"Outdoor signage layout" }
];

/* ===================== nothing to edit below ===================== */

const $ = (s, r = document) => r.querySelector(s);
const grid = $("#grid"), empty = $("#empty");
let shown = PHOTOS.slice();

const pad = n => String(n).padStart(3, "0");

function renderGrid(filter = "all") {
  shown = filter === "all" ? PHOTOS.slice() : PHOTOS.filter(p => p.category === filter);
  grid.innerHTML = "";
  empty.hidden = shown.length > 0;

  shown.forEach((p, i) => {
    const cell = document.createElement("button");
    cell.className = "cell rv";
    cell.type = "button";
    cell.setAttribute("aria-label", `Open ${p.caption}`);
    cell.dataset.i = i;
    cell.innerHTML = `
      <img src="${p.src}" alt="${p.caption}" loading="lazy" decoding="async">
      <span class="cell__meta">
        <span class="cell__no">Frame ${pad(i + 1)}</span>
        <span class="cell__cap">${p.caption}</span>
        ${p.exif ? `<span class="cell__exif">${p.exif}</span>` : ""}
      </span>`;
    cell.addEventListener("click", () => openLb(i));
    grid.appendChild(cell);
  });
  observeReveals();
}

document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach(c => {
      c.classList.remove("is-on");
      c.setAttribute("aria-selected", "false");
    });
    chip.classList.add("is-on");
    chip.setAttribute("aria-selected", "true");
    renderGrid(chip.dataset.filter);
  });
});

/* ---- motion (landscape) ---- */
(function renderReels() {
  const wrap = document.getElementById("reels");
  if (!REELS.length) { wrap.closest("section").hidden = true; return; }

  REELS.forEach(r => {
    const card = document.createElement("article");
    card.className = "reel rv";
    card.innerHTML = `
      <button class="reel__frame" type="button" aria-label="Play ${r.title}">
        <img src="${r.poster}" alt="" loading="lazy" decoding="async">
        <span class="reel__play"></span>
      </button>
      <div class="reel__cap"><h3>${r.title}</h3><p>${r.note}</p></div>`;

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
})();

/* ---- vertical reels ---- */
(function renderVReels(){
  const rail = document.getElementById("rail");
  const sect = document.getElementById("reels-v");
  if (!VREELS.length) { sect.hidden = true; return; }

  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  VREELS.forEach((r, i) => {
    const card = document.createElement("button");
    card.className = "vreel rv";
    card.type = "button";
    card.setAttribute("aria-label", `Play ${r.title}`);

    const media = r.type === "file"
      ? `<video src="${r.src}" poster="${r.poster}" muted loop playsinline preload="none"></video>`
      : `<img src="${r.poster}" alt="${r.title}" loading="lazy" decoding="async"
             onerror="this.style.opacity=.25">`;

    card.innerHTML = `${media}
      <span class="vreel__scrim"></span>
      <span class="vreel__play"></span>
      <span class="vreel__meta">
        <span class="vreel__no">Reel ${String(i + 1).padStart(2, "0")}</span>
        <span class="vreel__title">${r.title}</span>
        ${r.note ? `<span class="vreel__note">${r.note}</span>` : ""}
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
})();

/* ---- design ---- */
(function renderDesign() {
  const wrap = $("#strip");
  if (!DESIGNS.length) { wrap.closest("section").hidden = true; return; }
  wrap.innerHTML = DESIGNS.map(d =>
    `<img class="rv" src="${d.src}" alt="${d.alt}" loading="lazy" decoding="async">`
  ).join("");
})();

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

  lbCap.textContent = r.title;
  lbExif.textContent = r.note || "";
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
  lbImg.src = p.src; lbImg.alt = p.caption;
  lbCap.textContent = p.caption;
  lbExif.textContent = p.exif || "";
}
function closeLb() {
  lb.hidden = true; lbImg.src = "";
  lb.querySelectorAll(".lb__vid, .lb__embed").forEach(n => n.remove());
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}
const step = d => { cur = (cur + d + shown.length) % shown.length; paint(); };

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
renderGrid("all");
observeReveals();
