document.body.style.backgroundColor="black";

var slideIndex = 1;
showSlide(slideIndex);

function carouselPrev() {
  showSlide(slideIndex -= 1);
}

function carouselNext() {
  showSlide(slideIndex += 1);
}

function showSlide(n) {
    var parent=document.getElementById('carousel');
    var slides=parent.querySelectorAll('img');

 
  
  if (n > slides.length) {
    slideIndex = 1;
  }
  
  if (n < 1) {
    slideIndex = slides.length;
  }
  
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slides[slideIndex - 1].style.display = "block";
}

