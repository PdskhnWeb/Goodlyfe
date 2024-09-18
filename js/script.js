let slideIndex = 0;
    showSlide(slideIndex);

    function changeSlide(n) {
        showSlide(slideIndex += n);
    }

    function currentSlide(n) {
        showSlide(slideIndex = n);
    }

    function showSlide(n) {
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");
        if (n >= slides.length) {slideIndex = 0}
        if (n < 0) {slideIndex = slides.length - 1}
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex].style.display = "block";
        dots[slideIndex].className += " active";
    }

const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;

function updateSlide(index) {
    if (index >= items.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = items.length - 1;
    } else {
        currentIndex = index;
    }

    track.style.transform = `translateX(${-currentIndex * 100}%)`;

    indicators.forEach(indicator => indicator.classList.remove('active-indicator'));
    indicators[currentIndex].classList.add('active-indicator');
}

nextButton.addEventListener('click', () => {
    updateSlide(currentIndex + 1);
});

prevButton.addEventListener('click', () => {
    updateSlide(currentIndex - 1);
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        updateSlide(index);
    });
});

updateSlide(currentIndex);