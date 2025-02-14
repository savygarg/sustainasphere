let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.querySelectorAll(".slide");

    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    slides.forEach(slide => slide.style.display = "none");
    
    // Correctly adding fade effect
    slides[slideIndex].style.display = "block";
    slides[slideIndex].classList.add("fade");
}
