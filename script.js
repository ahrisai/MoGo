

let menuBtn = document.querySelector('.burger__menu');
let menu = document.querySelector('.nav');
let container=document.querySelector('.container')
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    if(menu.classList.contains('active')){
  container.style.padding='0';

    }
  else container.style.padding='0 15px';
})














var acc = document.getElementsByClassName("accordion__header");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
   
    if (panel.style.display === "block") {
        panel.style.maxHeight = null;
        setTimeout(() => {
        panel.style.display = "none";
            
        }, 50);

      } else {
              panel.style.display = "block";
              
        panel.style.padding='15px 20px'
      panel.style.maxHeight = panel.scrollHeight + "px";
      }
  });
}

var slideIndex = 1;
showSlides(slideIndex,"mySlides1");
showSlides(slideIndex,"mySlides2");


// Next/previous controls
function plusSlides(n,selector) {
  showSlides(slideIndex += n,selector);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n,selector) {
  var i;
  var slides = document.getElementsByClassName(selector);
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
 
  slides[slideIndex-1].style.display = "flex";
}