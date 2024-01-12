//scroll hibrido
const stickySections = [...document.querySelectorAll('.sticky_wrap')];

function transform(section) {
  const offsetTop = section.parentElement.offsetTop;
  const scrollSection = section.querySelector('.horizontal_scroll');
  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
  percentage = percentage < 0 ? 0 : percentage > 480 ? 480 : percentage;
  scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;
}

function handleScroll() {
  if (window.innerWidth >= 550) {
    for (let i = 0; i < stickySections.length; i++) {
      transform(stickySections[i]);
    }
  }
}

window.addEventListener('scroll', handleScroll);

handleScroll();

//troca da cara dos speakers automatica
document.addEventListener("DOMContentLoaded", function () {
  function createSlider(images, sliderId, interval) {
      var currentIndex = 0;
      var slider = document.getElementById(sliderId);
      var sliderImage = slider.querySelector(".slider-image");

      function changeImage() {
          sliderImage.src = images[currentIndex];
          currentIndex = (currentIndex + 1) % images.length;
      }

      // Change image every 3 seconds (adjust the interval as needed)
      setInterval(changeImage, interval);
  }

  // Define images for each slider
  var imagesSlider1 = ["imagens/caras_rejane/rejaine - cartoon.png", "imagens/caras_rejane/rejaine - cor.png", "imagens/caras_rejane/rejaine - normal.png", "imagens/caras_rejane/rejaine - pixel.png"];
  var imagesSlider2 = ["imagens/caras_braulio/braulio - normal.png", "imagens/caras_braulio/braulio - cartoon.png", "imagens/caras_braulio/braulio - pixel.png", "imagens/caras_braulio/braulio - cor.png"];
  var imagesSlider3 = ["imagens/caras_camila/camila - pixel.png", "imagens/caras_camila/camila - normal.png", "imagens/caras_camila/camila - cor.png", "imagens/caras_camila/camila - cartoon.png"];
  var imagesSlider4 = ["imagens/caras_susana/susana - cor.png", "imagens/caras_susana/susana - normal.png", "imagens/caras_susana/susana - cartoon.png", "imagens/caras_susana/susana - pixel.png"];

  // Create sliders
  createSlider(imagesSlider1, "rejane", 2100);
  createSlider(imagesSlider2, "braulio", 2000);
  createSlider(imagesSlider3, "camila", 2500);
  createSlider(imagesSlider4, "susana", 2200);
});


//cor random quando se da hover sobre uma das opções do menu
function getRandomColor() {
  var colors = ["green", "blue", "orange", "yellow"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function changeColor(element) {
  element.originalColor = element.style.color;
  element.style.color = getRandomColor();
}

function resetColor(element) {
  element.style.color = element.originalColor;
}