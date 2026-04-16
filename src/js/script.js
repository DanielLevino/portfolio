import { t } from "./translate.js";

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
  