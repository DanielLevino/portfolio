

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