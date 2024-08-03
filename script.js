const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let counter = 0;
const size = images[0].clientWidth;

function slide() {
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
}

function nextSlide() {
    if (counter >= images.length - 1) {
        counter = -1;
    }
    counter++;
    slide();
}

function prevSlide() {
    if (counter <= 0) {
        counter = images.length;
    }
    counter--;
    slide();
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

setInterval(nextSlide, 2000);


slides.addEventListener('transitionend', () => {
    if (counter >= images.length) {
        slides.style.transition = 'none';
        counter = 0;
        slides.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
