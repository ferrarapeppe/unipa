(function () {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const EN = document.documentElement.lang === "en";
  const UI = EN
    ? { dept: "Department", more: "Explore the research areas ↗", skills: "Discover the expertise →", locale: "en-US" }
    : { dept: "Dipartimento", more: "Approfondisci le aree di ricerca ↗", skills: "Scopri le competenze →", locale: "it-IT" };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- Aree di ricerca ---------- */
  $("#areas").innerHTML = window.AREAS.map((a, i) => `
    <article class="area reveal" style="--i:${i % 4}">
      <span class="area-n">${String(i + 1).padStart(2, "0")}</span>
      <svg class="area-ico" aria-hidden="true"><use href="#${a.icon}"/></svg>
      <h3>${esc(a.t)}</h3>
      <p>${esc(a.d)}</p>
    </article>`).join("");

  /* ---------- Esploratore dipartimenti ---------- */
  const tabs = $("#deptTabs"), panel = $("#deptPanel");
  tabs.innerHTML = window.DEPTS.map((d, i) => `
    <button class="dept-tab" role="tab" id="tab-${i}" aria-controls="deptPanel" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}">
      <span class="abbr">${esc(d.abbr)}</span><span class="full">${esc(d.name)}</span>
    </button>`).join("");

  function showDept(i) {
    const d = window.DEPTS[i];
    tabs.querySelectorAll(".dept-tab").forEach((t, j) => {
      t.setAttribute("aria-selected", j === i);
      t.tabIndex = j === i ? 0 : -1;
    });
    panel.setAttribute("aria-labelledby", "tab-" + i);
    panel.innerHTML = `
      <svg class="glyph" viewBox="-50 -50 100 100" aria-hidden="true"><use href="#star8" x="-50" y="-50" width="100" height="100"/></svg>
      <div class="anim">
        <span class="tag">${UI.dept} · ${esc(d.abbr)}</span>
        <h4>${esc(d.name)}</h4>
        <p class="desc">${esc(d.desc)}</p>
        ${d.kpi ? `<div class="dept-kpi">${d.kpi.map(k => `<div>${esc(k[0])}<small>${esc(k[1])}</small></div>`).join("")}</div>` : ""}
        <div class="topics">${d.topics.map(t => `<div class="topic"><b>${esc(t[0])}</b><span>${esc(t[1])}</span></div>`).join("")}</div>
        ${d.link ? `<a class="dept-link" href="${d.link}" target="_blank" rel="noopener">${UI.more}</a>` : ""}
      </div>`;
  }
  tabs.addEventListener("click", (e) => {
    const b = e.target.closest(".dept-tab");
    if (b) showDept([...tabs.children].indexOf(b));
  });
  tabs.addEventListener("keydown", (e) => {
    const list = [...tabs.children], cur = list.indexOf(document.activeElement);
    if (cur < 0) return;
    let n = null;
    if (["ArrowDown", "ArrowRight"].includes(e.key)) n = (cur + 1) % list.length;
    if (["ArrowUp", "ArrowLeft"].includes(e.key)) n = (cur - 1 + list.length) % list.length;
    if (e.key === "Home") n = 0;
    if (e.key === "End") n = list.length - 1;
    if (n !== null) { e.preventDefault(); list[n].focus(); showDept(n); }
  });
  showDept(0);

  /* ---------- Cluster terza missione ---------- */
  const dlg = $("#clusterDialog");
  $("#clusters").innerHTML = window.CLUSTERS.map((c, i) => `
    <button class="cluster reveal" style="--i:${i % 4}" data-i="${i}" aria-haspopup="dialog">
      <span class="n">${String(i + 1).padStart(2, "0")}</span>
      <svg class="emoji" aria-hidden="true"><use href="#${c.e}"/></svg>
      <h4>${esc(c.t)}</h4>
      <ul>${c.short.map(s => `<li>${esc(s)}</li>`).join("")}</ul>
      <span class="more">${UI.skills}</span>
    </button>`).join("");
  $("#clusters").addEventListener("click", (e) => {
    const b = e.target.closest(".cluster");
    if (!b) return;
    const c = window.CLUSTERS[+b.dataset.i];
    $("#dlgEmoji").innerHTML = `<svg aria-hidden="true"><use href="#${c.e}"/></svg>`;
    $("#dlgTitle").textContent = c.t;
    // items contengono solo <em>/&amp; da data.js (contenuto statico)
    $("#dlgBody").innerHTML = c.items.map(it => `<div><b>${esc(it[0])}</b><p>${it[1]}</p></div>`).join("");
    dlg.showModal();
  });
  $("#dlgClose").addEventListener("click", () => dlg.close());
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });


  /* ---------- Progetti in evidenza ---------- */
  $("#showcase").innerHTML = window.SHOWCASE.map((p, i) => `
    <article class="show-card" style="--c: var(--${p.c})">
      <span class="show-n">${String(i + 1).padStart(2, "0")}</span>
      <span class="show-tag">${esc(p.tag)}</span>
      <h4>${esc(p.t)}</h4>
      <p>${esc(p.d)}</p>
    </article>`).join("");

  /* ---------- Header e navigazione ---------- */
  const header = $(".site-header"), toggle = $(".nav-toggle");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  toggle.addEventListener("click", () => {
    const open = header.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", open);
  });
  document.querySelectorAll(".nav-links a").forEach(a => a.addEventListener("click", () => {
    header.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", false);
  }));

  const links = [...document.querySelectorAll(".nav-links a")];
  const spy = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  links.map(l => document.getElementById(l.getAttribute("href").slice(1))).filter(Boolean).forEach(el => spy.observe(el));

  /* ---------- Reveal + contatori ---------- */
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fmt = (n, plain) => plain ? String(n) : n.toLocaleString(UI.locale);
  function count(el) {
    const end = +el.dataset.count, plain = el.hasAttribute("data-plain");
    if (reduce) { el.textContent = fmt(end, plain); return; }
    const start = plain ? Math.max(0, end - 220) : 0, t0 = performance.now(), dur = 1800;
    const step = (t) => {
      const p = Math.min(1, (t - t0) / dur), v = Math.round(start + (end - start) * (1 - Math.pow(1 - p, 4)));
      el.textContent = fmt(v, plain);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add("in");
      en.target.querySelectorAll("[data-count]").forEach(count);
      if (en.target.matches("[data-count]")) count(en.target);
      io.unobserve(en.target);
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal, .hero-stats").forEach(el => io.observe(el));
})();
