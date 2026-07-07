import { CONFIG } from "./config.js";
import { t } from "./translate.js";

document.getElementById("version").innerHTML = CONFIG.VERSION
// Cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;
  
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
  });
  function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
    requestAnimationFrame(animRing);
  }
  animRing();

  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.getElementById('navbar');

  window.addEventListener('click', (e) => {
    if (e.target.id === 'menu-icon') {
        navbar.classList.toggle('active');
        e.target.classList.toggle('bi-x'); 
    } 
    
    else if (navbar.classList.contains('active')) {
        if (!navbar.contains(e.target) || e.target.tagName === 'A') {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bi-x');
        }
    }
});

// Nav scroll
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(r => obs.observe(r));

// Form

const form = document.querySelector('.contact-form');

form.addEventListener('submit', (event)=>{
  handleSubmit(event)
})

function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value
  const message = document.getElementById('message').value;
  
  if(!name || !email || !message){
    alert("Please fill in the required fields.");
    return;
  }

  btn.disabled = true;

  const phone = "5581997194976"; 
  
  var text = `Olá! Meu nome é ${name} (${email}).%0A%0A${message}`;

  text = subject ? `*${subject}* %0A%0A${text}`: text;
  
  const wpUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${text}`;

  btn.textContent = t('contact.form.sending');
  
  setTimeout(() => {
    window.open(wpUrl, '_blank');
    btn.textContent = t('contact.form.sent');
    document.getElementById('form-feedback').style.display = 'block';
  }, 1200);
}

// Carousel factory
  function initCarousel({ trackId, dotsId, prevId, nextId, perView }) {
    const track = document.getElementById(trackId);
    const dotsContainer = document.getElementById(dotsId);
    const btnPrev = document.getElementById(prevId);
    const btnNext = document.getElementById(nextId);
    const cards = track.querySelectorAll('.carousel-card');
    const total = cards.length;
    let current = 0;

    // Calcular número de "páginas"
    const pages = Math.ceil(total / perView);

    // Criar dots
    for (let i = 0; i < pages; i++) {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Página ${i + 1}`);
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    }

    function goTo(page) {
      current = Math.max(0, Math.min(page, pages - 1));
      // Calcula quantos % avançar por card
      const cardWidth = cards[0].offsetWidth + 24; // width + gap (1.5rem = 24px)
      const offset = current * perView * cardWidth;
      track.style.transform = `translateX(-${offset}px)`;

      // Atualizar dots
      dotsContainer.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === current);
      });

      // Atualizar botões
      btnPrev.disabled = current === 0;
      btnNext.disabled = current >= pages - 1;
    }

    btnPrev.addEventListener('click', () => goTo(current - 1));
    btnNext.addEventListener('click', () => goTo(current + 1));

    // Swipe touch
    let startX = 0;
    track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
    });

    // Init
    goTo(0);

    // Recalcular ao redimensionar
    window.addEventListener('resize', () => goTo(current));
  }

  // Detectar perView por tela
  function getPerView(carouselId) {
    if (window.innerWidth <= 700) return 1;
    return carouselId === 'projectsCarousel' ? 3 : 2;
  }

  initCarousel({
    trackId: 'projectsTrack', dotsId: 'projectsDots',
    prevId: 'projectsPrev', nextId: 'projectsNext',
    perView: getPerView('projectsCarousel')
  });

  initCarousel({
    trackId: 'testiTrack', dotsId: 'testiDots',
    prevId: 'testiPrev', nextId: 'testiNext',
    perView: getPerView('testiCarousel')
  });