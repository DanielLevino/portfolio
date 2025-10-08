// translate.js
const STORAGE_KEY = "lang";

let messages = {};
let currentLang = localStorage.getItem(STORAGE_KEY) || navigator.language?.toLowerCase().startsWith("pt") ? "pt-br" : "en";

// Carrega o dicionário conforme o idioma
export async function initI18n() {
  await loadLanguage(currentLang);
}

export async function loadLanguage(lang) {
  currentLang = lang;
  // import dinâmico do arquivo de idioma
  if (lang === "pt-br") {
    messages = (await import("./translate/pt-br.js")).default;
    document.documentElement.lang = "pt-BR";
  } else {
    messages = (await import("./translate/en.js")).default;
    document.documentElement.lang = "en";
  }
  localStorage.setItem(STORAGE_KEY, currentLang);
  // acessório: dispara um evento para re-render em quem escutar
  document.dispatchEvent(new CustomEvent("i18n:changed", { detail: { lang: currentLang }}));
}

// Função para pegar a string pela chave, com interpolação opcional
export function t(key, vars = {}) {
  const val = 
    key.split(".")
    .reduce((acc, part) => (acc && acc[part] != null ? acc[part] : undefined), messages);
    
  if (val == null) return key;
  
  return String(val).replace(/\$\{(\w+)\}/g, (_, k) => (k in vars ? vars[k] : ""));
}

export function getLang() {
  return currentLang;
}

export async function setLang(lang) {
  if (lang === currentLang) return;
  await loadLanguage(lang);
}
