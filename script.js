

  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("image_container");
  let dot_counter = document.getElementsByClassName("counter");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dot_counter.length; i++) {
    dot_counter[i].className = dot_counter[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dot_counter[slideIndex - 1].className += " active";
}