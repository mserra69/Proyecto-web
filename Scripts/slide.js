const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const slideInterval = 5000; // 5 segundos

function changeSlide(index) {
    slides[currentIndex].classList.remove('active');
    currentIndex = (index + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
}

function moveSlide(direction) {
    changeSlide(currentIndex + direction);
}setInterval(() => {
    moveSlide(1);
}, slideInterval);