// htmlInjector.js
import { t, initI18n, setLang, getLang } from "./translate.js";

// Botões de tradução
const btnPT = get("btn-pt");
const btnEN = get("btn-en");


// ============= Barra de Navegação ===========>

const nav = get("navbar");

function renderNav() {
  nav.querySelector('.nav-links').innerHTML = 
  `<li><a href="#about">${t('common.about')}</a></li>
  <li><a href="#skills">Skills</a></li>
  <li><a href="#projects">${t('common.projects')}</a></li>
  <li><a href="#contact">${t('common.contact')}</a></li>
  <li title="${t('common.title_resume')}">
    <a href="./src/pdf/${t('nav.src')}" target="_blank">
      ${t('common.resume')}
      <span><i class="bi bi-cloud-download"></i></span>
  </a></li>`
}

// =============== Hero Section ===============>

  const hero = get("hero");

  function renderHero() {
    hero.innerHTML = 
    `<div class="hero-grid"></div>
  
      <div class="hero-glow"></div>
  
      <p class="hero-tag">${t('hero.tag')} · PHP · Laravel · Vue</p>
      <h1 class="hero-name">
        ${t('hero.name_1')}<br><span>${t('hero.name_2')}.</span>
      </h1>
      <p class="hero-desc">
        ${t('hero.desc')}
      </p>
      <div class="hero-cta">
        <a href="#projects" class="btn btn-primary">${t('hero.btn_1')}</a>
        <a href="#contact" class="btn btn-ghost">${t('hero.btn_2')}</a>
      </div>
      <div class="hero-scroll">
        <span class="scroll-label">scroll</span>
        <div class="scroll-line"></div>
      </div>
    `
  }

// ============== About Section =========== >

  const about = get("about")

  function renderAbout() {

    about.querySelector('.section-label').innerHTML = t('about.label')

    about.querySelector('.section-title').innerHTML = t('about.title')

    about.querySelector(".about-text").innerHTML = t('about.text')

    for (let i=1; i<=4; i++){
      get(`trait-title-${i}`).innerHTML = `${t(`about.trait_title_${i}`)}`
      get(`trait-text-${i}`).innerHTML = `${t(`about.trait_text_${i}`)}`
    }

    about.querySelector('.stats-bar').innerHTML = `
    <div class="stat">
        <span class="stat-num">5+</span>
        <span class="stat-label">${t('about.xp')}</span>
      </div>
      <div class="stat">
        <span class="stat-num">INFP</span>
        <span class="stat-label">${t('about.infp')}</span>
      </div>
      <div class="stat">
        <span class="stat-num"><i class="bi bi-tools"></i></span>
        <span class="stat-label">${t('about.fullcycle')}</span>
      </div>
      <div class="stat">
        <span class="stat-num"><i class="bi bi-translate"></i></span>
        <span class="stat-label">English, Español, Italiano</span>
      </div>`

  }

// ==================== Skills Section ================ >

  const skills = get('skills')

  function renderSkills() {
    skills.querySelector('.section-label').innerHTML = t('skills.label')

    skills.querySelector('.section-title').innerHTML = t('skills.title')

    skills.querySelector('#back').innerHTML = `<h3>Backend</h3>
        <div class="skills-grid" style="margin-top: 0; grid-template-columns: 1fr 1fr;">
          <div class="skill-chip">
            <span class="chip-name">PHP</span>
            ${t('skills.stars_advanced')}
          </div>
          <div class="skill-chip">
            <span class="chip-name">Laravel</span>
            ${t('skills.stars_advanced')}
          </div>
          <div class="skill-chip">
            <span class="chip-name">MySQL</span>
            ${t('skills.stars_advanced')}
          </div>
          <div class="skill-chip">
            <span class="chip-name">REST API</span>
            ${t('skills.stars_basic')}
          </div>
        </div>`
    
    skills.querySelector('#front').innerHTML = `<h3>Frontend</h3>
        <div class="skills-grid" style="margin-top: 0; grid-template-columns: 1fr 1fr;">
          <div class="skill-chip">
            <span class="chip-name">Vue.js</span>
            ${t('skills.stars_advanced')}
          </div>
          <div class="skill-chip">
            <span class="chip-name">Quasar</span>
            ${t('skills.stars_advanced')}
          </div>
          <div class="skill-chip">
            <span class="chip-name">HTML/CSS</span>
            ${t('skills.stars_advanced')}
          </div>
          <div class="skill-chip">
            <span class="chip-name">JavaScript</span>
            ${t('skills.stars_advanced')}
          </div>
        </div>`

    skills.querySelector('#infra').innerHTML = `<h3>${t('skills.infra')} &amp; ${t('skills.quality')}</h3>
        <div class="skills-grid" style="margin-top: 0; grid-template-columns: 1fr 1fr;">
          <div class="skill-chip">
            <span class="chip-name">Docker</span>
            ${t('skills.stars_advanced')}
          </div>
          <div class="skill-chip">
            <span class="chip-name">Git</span>
            ${t('skills.stars_advanced')}
          </div>
          <div class="skill-chip">
            <span class="chip-name">Scrum</span>
            ${t('skills.stars_advanced')}
          </div>
          <div class="skill-chip">
            <span class="chip-name">${t('skills.tests')}</span>
            ${t('skills.stars_intermediate')}
          </div>
        </div>`
  }

// ================ Projects Section ================>

  const proj = get('projects');

  function renderProj() {
    proj.querySelector('.section-label').innerHTML = t('projects.label')
    proj.querySelector('.section-title').innerHTML = t('projects.title')

    proj.querySelector(' #project-1').innerHTML = `
      <span class="project-num">01 /</span>
      <h3>${t('projects.proj_title_1')}</h3>
      <div class="img-container">
        <img src="./src/img/portfolio/dashboard.png" alt="">
      </div>
      <p>${t('projects.proj_desc_1')}</p>
      <div class="project-tags">
        <span class="tag">Laravel</span>
        <span class="tag">Sanctum</span>
        <span class="tag">Predis</span>
        <span class="tag">Quasar/Vue</span>
        <span class="tag">SQLite</span>
      </div>`;
    
    proj.querySelector('#project-2').innerHTML = `<span class="project-num">01 /</span>
      <h3>${t('projects.proj_title_2')}</h3>
      <div class="img-container">
        <img src="./src/img/portfolio/email-classifier.png" alt="">
      </div>
      <p>${t('projects.proj_desc_2')}</p>
      <div class="project-tags">
        <span class="tag">Python</span>
        <span class="tag">GPTs</span>
        <span class="tag">IA</span>
        <span class="tag">FastAPI</span>
      </div>`;

      proj.querySelector('#project-3').innerHTML = `<span class="project-num">01 /</span>
      <h3>${t('projects.proj_title_3')}</h3>
      <div class="img-container">
        <img src="./src/img/portfolio/zelcoy.png" alt="">
      </div>
      <p>${t('projects.proj_desc_3')}</p>
      <div class="project-tags">
        <span class="tag">Java</span>
        <span class="tag">Game Engine</span>
        <span class="tag">Topdown</span>
        <span class="tag">2D</span>
      </div>`;
  }

// =============== Testimonials Section ==============>


// =============== Contact Section ===============>

  const contact = get('contact');

  function renderContact() {
    contact.querySelector('.section-label').innerHTML = t('contact.label');
    contact.querySelector('.section-title').innerHTML = t('contact.title');
    contact.querySelector('#info').innerHTML = t('contact.info');
    contact.querySelector('#desc').innerHTML = t('contact.desc');
    
    contact.querySelector('.contact-form').innerHTML = `
        <div class="form-row">
          <div class="form-group">
            <label>${t('contact.form.name')}*</label>
            <input id="name" required type="text" placeholder="${t('contact.form.name_ph')}" />
          </div>
          <div class="form-group">
            <label>${t('contact.form.email')}*</label>
            <input id="email" required type="email" placeholder="${t('contact.form.email_ph')}" />
          </div>
        </div>
        <div class="form-group">
          <label>${t('contact.form.subject')}</label>
          <input id="subject" type="text" placeholder="${t('contact.form.subject_ph')}" />
        </div>
        <div class="form-group">
          <label>${t('contact.form.message')}*</label>
          <textarea id="message" required rows="5" placeholder="${t('contact.form.message_ph')}"></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="cursor: none; align-self: flex-start;" id="submitBtn">
          ${t('contact.form.send_btn')}
        </button>
        <p id="form-feedback"
          style="font-family: 'DM Mono', monospace; font-size: 0.78rem; color: var(--accent); display: none; margin-top: 0.5rem;">
          ${t('contact.form.feedback')}
        </p>`
  }

// =============== Footer ==================>

  const f_text = get('footer-text')

  const renderFooter = () => {
    f_text.innerHTML = t('footer.text')
  }

// =============== Render ==================>

function renderPage() {
  renderNav();
  renderHero();
  renderAbout();
  renderSkills();
  renderProj();
  renderContact();
  renderFooter()
}

// =============== Inicializa Botões ========= >
function wireLangButtons() {

  if (getLang() === "en") {
    btnEN.style.display = "none"
  } else {
    btnPT.style.display = "none"
  }

  btnPT.addEventListener("click", () => {
    setLang("pt-br");
    btnPT.style.display = "none"
    btnEN.style.display = "block"
  });

  btnEN.addEventListener("click", () => {
    setLang("en");
    btnEN.style.display = "none"
    btnPT.style.display = "block"
  });
}

function get(id) {
  return document.getElementById(id);
}

// Re-render quando o idioma muda
document.addEventListener("i18n:changed", () => {
  renderPage();
});

// Inicializa
(async function start() {
  await initI18n();
  wireLangButtons();
  renderPage();
})();
