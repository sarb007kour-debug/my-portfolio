// Renders the whole website from content/portfolio.json.
// Edit that file (or use the /admin dashboard) to change anything on the site.

const esc = (value = "") =>
  String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const $ = (id) => document.getElementById(id);

// Shows the real image if one is set, otherwise a labelled placeholder.
function media(item, ratioClass = "media-4x5") {
  if (item.image) {
    return `<figure class="media ${ratioClass}"><img src="${esc(item.image)}" alt="${esc(item.label)}" loading="lazy"></figure>`;
  }
  return `<figure class="media placeholder ${ratioClass}" role="img" aria-label="Image placeholder: ${esc(item.label)}"><span>${esc(item.label)}</span></figure>`;
}

function renderNav() {
  const links = [
    ["about", "About"], ["expertise", "Expertise"], ["work", "Work"], ["kkc", "KKC Media"],
    ["pradarshak", "Gallery Pradarshak"], ["agency", "Agency"], ["skills", "Skills"],
    ["education", "Education"], ["contact", "Contact"]
  ];
  $("nav").innerHTML = links.map(([id, label]) => `<a href="#${id}">${label}</a>`).join("");
}

function renderHero(d) {
  const h = d.hero;
  $("hero").innerHTML = `
    <div>
      <h1 id="hero-name">${esc(h.name)}</h1>
      <p class="positioning">${esc(h.positioning)}</p>
      <p class="intro">${esc(h.intro)}</p>
    </div>
    <div class="hero-media">${media({ image: h.image, label: h.label }, "media-4x5")}</div>`;
}

function renderAbout(d) {
  const a = d.about;
  $("about").innerHTML = `
    <div class="section-grid">
      <div class="section-head"><h2 id="about-h">${esc(a.heading)}</h2></div>
      <div>
        <div class="paragraphs">${a.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("")}</div>
        <div class="industries">
          ${a.industries.map((i) => `<div><h3>${esc(i.title)}</h3><p>${esc(i.text)}</p></div>`).join("")}
        </div>
      </div>
    </div>`;
}

function renderExpertise(d) {
  const e = d.expertise;
  $("expertise").innerHTML = `
    <div class="section-grid">
      <div class="section-head"><h2 id="expertise-h">${esc(e.heading)}</h2></div>
      <div class="cards">
        ${e.items.map((i) => `<article class="card"><h3>${esc(i.title)}</h3><p>${esc(i.text)}</p></article>`).join("")}
      </div>
    </div>`;
}

function renderWork(d) {
  const w = d.selectedWork;
  $("work").innerHTML = `
    <div class="section-head" style="margin-bottom:2.5rem">
      <h2 id="work-h">${esc(w.heading)}</h2>
    </div>
    <div class="work-grid">
      ${w.items.map((i) => `
        <article class="work-item">
          ${media(i, "media-4x5")}
          <p class="tag">${esc(i.category)}</p>
          <h3>${esc(i.title)}</h3>
          <p>${esc(i.text)}</p>
        </article>`).join("")}
    </div>`;
}

function renderKkc(d) {
  const k = d.kkc;
  $("kkc").innerHTML = `
    <div class="section-head" style="margin-bottom:2rem">
      <h2 id="kkc-h">${esc(k.heading)}</h2>
      <p class="lede">${esc(k.summary)}</p>
    </div>
    <dl class="experience-meta">
      <div><dt>Designation</dt><dd>${esc(k.designation)}</dd></div>
      <div><dt>Duration</dt><dd>${esc(k.duration)}</dd></div>
      <div><dt>Industry</dt><dd>${esc(k.industry)}</dd></div>
    </dl>
    ${k.projects.map((p) => `
      <article class="project">
        <div class="project-media">${media(p, "media-16x10")}</div>
        <div class="project-copy">
          <div>
            <p class="label">${esc(p.specialty)}</p>
            <h3>${esc(p.client)}</h3>
            <p>${esc(p.text)}</p>
            ${p.links?.length ? `<ul class="links">${p.links.map((l) => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a></li>`).join("")}</ul>` : ""}
          </div>
        </div>
      </article>`).join("")}
    <div class="section-grid" style="margin-top:3rem">
      <div></div>
      ${contributionBlock(k.contribution)}
    </div>
    ${k.links?.length ? `<ul class="links" style="margin-top:2rem">${k.links.map((l) => `<li><a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a></li>`).join("")}</ul>` : ""}`;
}

function contributionBlock(items) {
  return `<div><h3>My contribution</h3><ul class="contribution">${items.map((c) => `<li>${esc(c)}</li>`).join("")}</ul></div>`;
}

function renderPradarshak(d) {
  const g = d.pradarshak;
  $("pradarshak").innerHTML = `
    <div class="section-head" style="margin-bottom:2rem">
      <h2 id="pradarshak-h">${esc(g.heading)}</h2>
      <p class="lede">${esc(g.summary)}</p>
    </div>
    <dl class="experience-meta">
      <div><dt>Designation</dt><dd>${esc(g.designation)}</dd></div>
      <div><dt>Duration</dt><dd>${esc(g.duration)}</dd></div>
      <div><dt>Industry</dt><dd>${esc(g.industry)}</dd></div>
    </dl>
    <div class="work-grid">
      ${g.showcase.map((s) => `
        <article class="work-item">
          ${media(s, "media-4x5")}
          <h3>${esc(s.title)}</h3>
          <p>${esc(s.text)}</p>
        </article>`).join("")}
    </div>
    <div class="section-grid" style="margin-top:4rem">
      <div>
        <h3>Content pillars</h3>
        <ul class="pillars">${g.pillars.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        ${g.instagram ? `<p style="margin-top:1.5rem"><a href="${esc(g.instagram)}" target="_blank" rel="noopener">View the gallery on Instagram</a></p>` : ""}
      </div>
      <div>${contributionBlock(g.contribution)}</div>
    </div>`;
}

function renderAgency(d) {
  const a = d.agency;
  $("agency").innerHTML = `
    <div class="section-head" style="margin-bottom:2rem">
      <h2 id="agency-h">${esc(a.heading)}</h2>
      <p class="lede">${esc(a.summary)}</p>
    </div>
    <dl class="experience-meta">
      <div><dt>Designation</dt><dd>${esc(a.designation)}</dd></div>
      <div><dt>Duration</dt><dd>${esc(a.duration)}</dd></div>
      <div><dt>Industry</dt><dd>${esc(a.industry)}</dd></div>
    </dl>
    <div class="work-grid">
      ${a.galleries.map((g) => `
        <article class="work-item">
          ${media(g, "media-4x5")}
          <h3>${esc(g.title)}</h3>
          <p>${esc(g.text)}</p>
        </article>`).join("")}
    </div>
    <div class="section-grid" style="margin-top:4rem">
      <div>
        <h3>${esc(a.brandsHeading)}</h3>
        <ul class="brand-grid" style="margin-top:1.25rem">
          ${a.brands.map((b) => `<li>${esc(b)}</li>`).join("")}
        </ul>
      </div>
      <div>${contributionBlock(a.contribution)}</div>
    </div>`;
}

function renderSkills(d) {
  const s = d.skills;
  $("skills").innerHTML = `
    <div class="section-grid">
      <div class="section-head"><h2 id="skills-h">${esc(s.heading)}</h2></div>
      <div class="stack">
        ${s.groups.map((g) => `
          <div class="skill-group">
            <h3>${esc(g.group)}</h3>
            <ul class="chips">${g.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
          </div>`).join("")}
        <div>
          <h3>${esc(s.toolsHeading)}</h3>
          <div class="tools-row" style="margin-top:0.8rem">
            ${s.tools.map((t) => `<div><p class="muted" style="margin:0 0 0.5rem">${esc(t.group)}</p><ul class="chips">${t.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul></div>`).join("")}
          </div>
        </div>
      </div>
    </div>`;
}

function renderEducation(d) {
  const e = d.education;
  $("education").innerHTML = `
    <div class="section-grid">
      <div class="section-head"><h2 id="education-h">${esc(e.heading)}</h2></div>
      <div>
        <h3>${esc(e.degree)}</h3>
        <p class="muted">${esc(e.year)}</p>
        <p>${esc(e.text)}</p>
      </div>
    </div>`;
}

function renderCareer(d) {
  const c = d.career;
  $("career").innerHTML = `
    <div class="section-grid">
      <div class="section-head"><h2 id="career-h">${esc(c.heading)}</h2></div>
      <ul class="contribution">${c.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
    </div>`;
}

function renderContact(d) {
  const c = d.contact;
  $("contact").innerHTML = `
    <div class="section-grid">
      <div class="section-head"><h2 id="contact-h">${esc(c.heading)}</h2></div>
      <div>
        <p>${esc(c.text)}</p>
        <ul class="contact-list">
          <li><span>Email</span><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></li>
          <li><span>LinkedIn</span><a href="${esc(c.linkedin)}" target="_blank" rel="noopener">${esc(c.linkedin)}</a></li>
          <li><span>Location</span>${esc(c.location)}</li>
          <li><span>Work preference</span>${esc(c.workPreference)}</li>
        </ul>
      </div>
    </div>`;
}

function renderFooter(d) {
  $("footer").innerHTML = `<span>${esc(d.hero.name)}</span><span>© ${new Date().getFullYear()}</span>`;
}

async function init() {
  try {
    const response = await fetch("content/portfolio.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`Could not load content (${response.status})`);
    const data = await response.json();

    document.title = data.site.title;
    document.querySelector('meta[name="description"]').setAttribute("content", data.site.description);
    $("brand").textContent = data.hero.name;

    renderNav();
    renderHero(data);
    renderAbout(data);
    renderExpertise(data);
    renderWork(data);
    renderKkc(data);
    renderPradarshak(data);
    renderAgency(data);
    renderSkills(data);
    renderEducation(data);
    renderCareer(data);
    renderContact(data);
    renderFooter(data);
  } catch (err) {
    document.querySelector("main").innerHTML = `<section class="block"><p>The content could not be loaded. Check that content/portfolio.json exists and the site is served over http.</p></section>`;
    console.error(err);
  }
}

init();
