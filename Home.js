
function redirectToCollege() {
    window.location.href = "https://nie.ac.in";
}


var Time=5000;
var slideIndex = 0; // Start from the first slide
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    
    // Hide all slides and remove active dot class
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Increment slideIndex and reset to 1 if it exceeds the number of slides
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }  
    
    // Display the current slide and set active dot class
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
    
    // Call the function recursively every 5 seconds
    setTimeout(showSlides, Time);
}

// Function to advance to the next slide manually
function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

// Function to jump to a specific slide
function currentSlide(n) {
    slideIndex = n;
    showSlides();
}
