let slideIndexSlides = 0;
    showSlide(slideIndex);

    function changeSlide(n) {
        showSlide(slideIndex += n);
    }

    function currentSlide(n) {
        showSlide(slideIndex = n);
    }

    function showSlide(n) {
        let slides = document.getElementsByClassName("slide-about");
        let dots = document.getElementsByClassName("dot-inner");
        if (n >= slides.length) {slideIndex = 0}
        if (n < 0) {slideIndex = slides.length - 1}
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active-about", "");
        }
        slides[slideIndex].style.display = "block-about";
        dots[slideIndex].className += " active-about";
    }