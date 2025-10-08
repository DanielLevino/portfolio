// htmlInjector.js
import { t, initI18n, setLang, getLang } from "./translate.js";

// Botões de tradução
const btnPT = get("btn-pt");
const btnEN = get("btn-en");


// ============= Barra de Navegação ===========>

const nav = get("navbar");

function renderNav() {
  nav.innerHTML = `
  <a href="#home" class="active">${t("common.start")}</a>
  <a href="#education">${t("common.education")}</a>
  <a href="#services">${t("common.knowledge")}</a>
  <a href="#portfolio">${t("common.portfolio")}</a>
  <a href="#curriculo">${t("common.resume")}</a>
  <a href="#contact">${t("common.contact")}</a>
  `
}

// =============== Home Section ===============>

const homeTitle = get("home-title");
const homeIAm = get("home-iam");
const homeResume = get("home-resume");
const homeContact = get("home-contact")

function renderHome() {
  homeTitle.innerHTML = `${t("home.hi")} <span>Daniel</span>`;
  homeIAm.innerHTML = t("home.iam");
  homeResume.innerHTML = t("home.resume");
  homeContact.innerHTML = t("common.contact")
}

// ============== Education Section =========== >

const educTitle = get("education-title");
const educ = Array.from({ length: 4 }, (_, i) => {
  const idx = i + 1;
  return {
    idx: idx,
    titleEl: get(`educ-title-${idx}`),
    descEl: get(`educ-desc-${idx}`),
  };
});

function renderEducation() {
  educTitle.innerHTML = t("common.education");
  educ.forEach(obj => {
    obj.titleEl.innerHTML = t(`education.educTitle_${obj.idx}`);
    obj.descEl.innerHTML = t(`education.educDesc_${obj.idx}`)
  })
}

// ==================== Knowlege Section ================ >

const knowledge = get("services")

function renderKnowledge() {
  knowledge.querySelector('h2').innerHTML = t("common.knowledge");
  knowledge.querySelectorAll('.services-container .service-box')
    .forEach((box, i) => {
      box.querySelector('h4').innerHTML = t(`knowledge.knowTitle_${i + 1}`)
      box.querySelector('p').innerHTML = t(`knowledge.knowDesc_${i + 1}`)
    })
}

// ================ Portfolio Section ================>
const portfolio = get("portfolio")

function renderPortfolio() {
  let li = ''
  const nums = Array.from({ length: 8 }, (_, i) => i);

  for (let i = nums.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // 0..i
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  portfolio.querySelector('h2').innerHTML = t("common.portfolio");

  nums.forEach(i => {

    let img = t(`portfolio.image_${i}`);
    let title = t(`portfolio.title_${i}`);
    let desc = t(`portfolio.desc_${i}`);
    let link = t(`portfolio.link_${i}`);
    let stacks = ''
    t(`portfolio.stack_${i}`).split(/\s*,\s*/).forEach(stack => {
      stacks += `<p class="badge">${stack}</p>`
    })

    li +=
    `<li class="card-item swiper-slide">
      <div class="card-link">
        <img src="./src/img/portfolio/${img}" alt="" class="card-image clickable"
          onclick="openImgModal(this)">
        <div class="badge-content">
          ${stacks}
        </div>
        <div class="card-text-content clickable" data-url="${link}"
          onclick="openDataUrl(this)">
          <h2 class="card-title">${title}</h2>
          <p class="card-description">
            ${desc}
          </p>
        </div>
        <button class="card-btn material-symbols-rounded clickable"
          data-url="${link}" onclick="openDataUrl(this)">
          arrow_forward
        </button>
      </div>
    </li>`
  })
  portfolio.querySelector('ul').innerHTML = li
}
// =============== Section Resume ==============>
const resume = get('curriculo');

function renderResume() {
  resume.querySelector('.heading').innerHTML = t('common.resume')
  resume.querySelector('.curriculo-text').innerHTML =
    `<p>${t("resume.text")}<br/><br/>${t('resume.accent')}</p>`;
  resume.querySelector('.btn-group').innerHTML =
    `<a class="btn" href="src/pdf/${t('resume.link')}" target="_blank">
      ${t('resume.button')}
    </a>`
}

// =============== Section Contact ===============>
const contact = get('contact');
const form = get('contactForm')

function renderContact() {
  contact.querySelector('.heading').innerHTML = t('common.contact');
  
  form.innerHTML = 
    `
      <div class="input-group-2">
        <textarea name="message" id="" cols="30" rows="10" placeholder="${t("contact.message")}"></textarea>
      </div>
      <div class="input-box">
        <input type="text" name="name" placeholder="${t("contact.name")}">
        <input type="phone" name="phone" placeholder="${t("contact.phone")}">
        <button type="button" class="btn" id="sendMessage" onclick="send()">${t("contact.send")} <i class="bi bi-whatsapp"></i></button>
      </div>
    `
}

// =============== Render ==================>

function renderPage() {
  renderNav();
  renderHome();
  renderEducation();
  renderKnowledge();
  renderPortfolio();
  renderResume();
  renderContact();
}

// =============== Inicializa Botões ========= >
function wireLangButtons() {
  let currentLang = getLang();

  if (currentLang === "en") {
    btnEN.style.display = "none"
  } else {
    btnPT.style.display = "none"
  }

  btnPT.addEventListener("click", () => {
    setLang("pt-br");
    btnPT.style.display = "none";
    btnEN.style.display = "block"
  });

  btnEN.addEventListener("click", () => {
    setLang("en");
    btnEN.style.display = "none"
    btnPT.style.display = "block";
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
