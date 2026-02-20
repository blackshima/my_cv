
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
const skillsSection = document.getElementById('skills');
const progressBars = document.querySelectorAll('.progress-bar');

window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos) {
        progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute('aria-valuenow') + '%';
            bar.style.width = targetWidth;
            bar.style.transition = "width 1.5s ease-in-out";
        });
    }
});

const allButtons = document.querySelectorAll('.btn');

allButtons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.1)';
        btn.style.transition = 'transform 0.2s ease';
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
    });
});

const contactBtn = document.querySelector('#contact .btn');

contactBtn.addEventListener('click', (e) => {
    alert('Thank you for reaching out! Your email client will now open.');
});

const myCarousel = document.querySelector('#portfolioCarousel');
const carouselInstance = new bootstrap.Carousel(myCarousel, {
    interval: 3000,
    ride: 'carousel'
});

myCarousel.addEventListener('mouseenter', () => {
    carouselInstance.pause();
    console.log('Carousel paused for viewing');
});

myCarousel.addEventListener('mouseleave', () => {
    carouselInstance.cycle();
    console.log('Carousel resumed');
});