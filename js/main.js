/*menu*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener('click', () =>  {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () =>  {
        navMenu.classList.remove('show-menu')
    })
}

/* remove menu mobile*/
const navLink = document.querySelectorAll('.navLink')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n =>  n.addEventListener('click', linkAction))

/*swiper nuevos slider */

let newSwiper = new Swiper (".new-swiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
    spaceBetween: 16,
})



/*Background header*/

function scrollHeader() {
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*scroll section*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset 
    sections.forEach(current =>  {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop -58,
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.navM a[href*='+ sectionId + ']').classList.add('active-link')
        }
        else {
            document.querySelector('.navM a[href*='+ sectionId + ']').classList.remove('active-link')
        }
    } )
}
window.addEventListener('scroll', scrollActive)


/*scroll up*/


function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 460 ) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)


/*Animation*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300
})

sr.reveal(`.home-swiper, .new-swiper, .newslc`)
sr.reveal(`.categorydata, .footercontent`, {interval: 100})
sr.reveal(`.aboutdata, .discountimg`, {origin: 'left'})
sr.reveal(`.aboutimg, .discountdata`, {origin: 'left'})

document.addEventListener('DOMContentLoaded', function () {
  const subscribeBtn = document.getElementById('subscribeBtn');
  const emailInput = document.getElementById('newsemail');

  if (subscribeBtn && emailInput) {
    subscribeBtn.addEventListener('click', function (e) {
      const userEmail = emailInput.value.trim();
      if (!userEmail) {
        alert('Introduce tu correo por favor.');
        emailInput.focus();
        return;
      }

      const to = '70635336@iestpasm.edu.pe';
      const subject = encodeURIComponent('Contacto desde la web');
      const body = encodeURIComponent(`Correo del usuario: ${userEmail}\n\nMensaje:\n`);

      // URL para abrir el composer de Gmail en una nueva pestaña (si el usuario está logueado)
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${subject}&body=${body}`;

      // Intentar abrir Gmail; si el navegador bloquea la ventana, usar mailto como fallback
      const win = window.open(gmailUrl, '_blank');
      if (!win) {
        window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
      }
    });
  }
});

// Flip cards: show back image 4 seconds then return
document.addEventListener('DOMContentLoaded', function () {
    const FLIP_TIME = 4000; // milliseconds
    document.querySelectorAll('.productcontent').forEach(function (card) {
        let busy = false;
        card.addEventListener('click', function (e) {
            if (busy) return;
            busy = true;
            card.classList.add('flipped');
            setTimeout(function () {
                card.classList.remove('flipped');
                busy = false;
            }, FLIP_TIME);
        });
    });
});

// Info background toggle button behavior
document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('infoToggle');
    if (!btn) return;
    const video = document.querySelector('.bg-video');
    const sourceEl = video ? video.querySelector('source') : null;
    const originalSrc = sourceEl ? sourceEl.getAttribute('src') : null;
    const altSrc = 'img/denji.mp4';

    btn.addEventListener('click', function () {
        const body = document.body;
        const active = body.classList.toggle('alt-bg');
        btn.classList.toggle('active', active);

        if (sourceEl && video) {
            try {
                sourceEl.setAttribute('src', active ? altSrc : originalSrc);
                video.load();
                // attempt autoplay if allowed
                const p = video.play();
                if (p && p.catch) p.catch(() => {});
            } catch (err) {
                console.error('Error swapping background video source:', err);
            }
        }
    });
});