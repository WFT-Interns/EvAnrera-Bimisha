let isClicked = false;
let slideIndex = 1;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";

function plusSlides(nextSlide) {
  nextSlide += slideIndex;
  showSlides(nextSlide);
}

function currentSlide(nextSlide) {
  if(nextSlide!=slideIndex){
    showSlides(nextSlide);
  }
}

function showSlides(nextSlide) {
  if (!isClicked) {
    isClicked = true;
    let slide_right = nextSlide < slideIndex;
    if (nextSlide > slides.length) {
      nextSlide= 1
    } else if (nextSlide < 1) {
      nextSlide = slides.length
    }

    slides[nextSlide-1].style.display = "block";
    dots[nextSlide-1].className += " active";

    if(slide_right) {
      slides[slideIndex-1].className += " slide-right-prev";
      slides[nextSlide-1].className += " slide-right-current";
    } else {
      slides[slideIndex-1].className += " slide-left-prev";
      slides[nextSlide-1].className += " slide-left-current";
    }
    setTimeout(() => {
      // 4 second delay here before running next line
      slides[slideIndex-1].style.display = "none"; 
      dots[slideIndex-1].className = dots[slideIndex-1].className.replace(" active", "");
      slides[slideIndex-1].className = "mySlides";
      slides[nextSlide-1].className = "mySlides";
      slideIndex = nextSlide;
      isClicked = false;
    }, 1500)
  }
}