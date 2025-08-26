

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height =  sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bi-x');
    navbar.classList.toggle('active');
}

document.getElementById('sendMessage').addEventListener('click', function() {
    const form = document.getElementById('contactForm');

    const nome = form.name.value;
    const fone = form.phone.value;
    const msg = form.message.value;

    const texto = `Olá Daniel, meu nome é ${nome} e meu número é ${fone}. ${msg}`;

    const numero = '5581997194976';

    const url = `https://wa.me/${numero}?text=${texto}`;

    window.open(url, '_blank');
});

const swiper = new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween:30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView:1
        },
        986: {
            slidesPerView:2
        },
    }
});

function openImgModal(image) {
  const modal = document.getElementById('modal');
  const imgAmpliada = document.getElementById('full-image');
  imgAmpliada.src = image.src;
  modal.style.display = 'flex';
}

function closeImgModal() {
  document.getElementById('modal').style.display = 'none';
}

function openDataUrl(el) {
    window.open(el.dataset.url, '_blank');
}

const typingElement = document.getElementById("typing");

const palavras = [
  "Software Engineer!",
  "Fullstack Developer!",
  "Game Developer!",
  "Mobile Developer!",
  "Software Tester!",
  "Businessperson"
];

let palavraIndex = 0;
let letraIndex = 0;
let apagando = false;
let velocidade = 100;

function digitar() {
  const palavraAtual = palavras[palavraIndex];

  if (!apagando) {
    // digitando
    typingElement.textContent = palavraAtual.substring(0, letraIndex + 1);
    letraIndex++;

    if (letraIndex === palavraAtual.length) {
      apagando = true;
      setTimeout(digitar, 1500);
      return;
    }
  } else {
    // apagando
    typingElement.textContent = palavraAtual.substring(0, letraIndex - 1);
    letraIndex--;

    if (letraIndex === 0) {
      apagando = false;
      palavraIndex = (palavraIndex + 1) % palavras.length;
    }
  }

  setTimeout(digitar, apagando ? 50 : velocidade);
}

digitar();