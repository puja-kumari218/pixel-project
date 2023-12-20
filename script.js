let currentIndex = 0;
const totalSlides = document.querySelectorAll('.rectangle-parent1').length;

function showSlide(index) {
  const slides = document.querySelectorAll('.rectangle-parent1');
  const translateValue = -index * 100 + '%';
  
  slides.forEach((slide) => {
    slide.style.transform = 'translateX(' + translateValue + ')';
  });
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

// Event listeners for arrow clicks
document.querySelector('.left-arrow').addEventListener('click', prevSlide);
document.querySelector('.right-arrow').addEventListener('click', nextSlide);



let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;

const scrollContainer = document.getElementById('scrollContainer');

scrollContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  startPosition = e.clientX - scrollContainer.offsetLeft;
  currentTranslate = getTranslateX();
});

scrollContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const newPosition = e.clientX - scrollContainer.offsetLeft;
  const translateDelta = newPosition - startPosition;
  const newTranslate = currentTranslate + translateDelta;

  setTranslateX(newTranslate);
});

scrollContainer.addEventListener('mouseup', () => {
  isDragging = false;
});

scrollContainer.addEventListener('mouseleave', () => {
  isDragging = false;
});

function getTranslateX() {
  const style = window.getComputedStyle(scrollContainer);
  const matrix = new WebKitCSSMatrix(style.transform);
  return matrix.m41;
}

function setTranslateX(translateX) {
  scrollContainer.style.transform = `translateX(${translateX}px)`;
}



