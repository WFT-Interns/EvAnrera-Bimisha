const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let slideIndex = 0;

// Set the first slide to be shown
showSlides();

// Previous slide button click event
prevBtn.addEventListener('click', () => {
  slideIndex--;
  showSlides();
});

// Next slide button click event
nextBtn.addEventListener('click', () => {
  slideIndex++;
  showSlides();
});

// Function to show the slides
function showSlides() {
  const slides = slider.querySelectorAll('img');
  // Reset slideIndex if it goes out of bounds
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  // Hide all slides except for the current one
  for (let i = 0; i < slides.length; i++) {
    if (i === slideIndex) {
      slides[i].style.display = 'block';
    } else {
      slides[i].style.display = 'none';
    }
  }
}
