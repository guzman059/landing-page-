const prev = document.getElementById('prev');
const next = document.getElementById('next');
const slides = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');

let index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    slides[i].classList.add('active');
    dots[i].classList.add('active');
}

function changeSlide(n) {
    index += n;
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    showSlide(index);
}

// Setas
prev.addEventListener('click', () => changeSlide(-1));
next.addEventListener('click', () => changeSlide(1));

// Dots
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        index = i;
        showSlide(index);
    });
});

// Autoplay
setInterval(() => changeSlide(1), 20000);
