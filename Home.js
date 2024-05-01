
function redirectToCollege() {
    window.location.href = "https://nie.ac.in";
}


var Time=5000;
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }  
    

    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
    

    setTimeout(showSlides, Time);
}


function plusSlides(n) {
    slideIndex += n;
    showSlides();
}


function currentSlide(n) {
    slideIndex = n;
    showSlides();
}
