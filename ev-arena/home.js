let slideIndex = 1;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
function plusSlides(n) {
  showSlides(slideIndex + n);
}

function currentSlide(n) {
  if(n!=slideIndex){
    showSlides(n);
  }
}

function showSlides(n) {
  let i;
  if (n > slides.length) {n= 1}
  if (n < 1) {n = slides.length}
  // for (i = 0; i < slides.length; i++) {
  //   slides[i].style.display = "none";  
  // }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  if(n<slideIndex){
    slides[n-1].className += " slide-left-current";
    slides[slideIndex-1].className += " slide-left-prev";
    slides[n-1].style.display = "block";  
    dots[n-1].className += " active";
    
  }
  else{
    slides[n-1].className += " slide-right-current";
    slides[slideIndex-1].className += " slide-right-prev";
    slides[n-1].style.display = "block";  
    dots[n-1].className += " active";
  }
  setTimeout(() => {
    // 4 second delay here before running next line
  slides[slideIndex-1].style.display = "none"; 
  dots[slideIndex-1].className = dots[slideIndex-1].className.replace(" active", "");
  slides[slideIndex-1].className = "mySlides";
  slides[n-1].className = "mySlides";
  slideIndex = n;
  }, 1500)
 
}