//document.addEventListener("DOMContentLoaded", function () {
var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
var galleryImage = document.getElementById("galleryImage");
var previousBtn = document.getElementById("previousBtn");
var slideshowBtn = document.getElementById("slideshowBtn");
var nextBtn = document.getElementById("nextBtn");
var stopBtn = document.getElementById("stopBtn");

var currentIndex = 0;
var slideshowInterval;

function showImage(index) {
  galleryImage.src = images[index];
}

function nextImage() {
  if (currentIndex != 5) {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  } else {
    showImage(5);
  }
}

function previousImage() {
  if (currentIndex != 0) {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  } else {
    showImage(0);
  }
}
function slideImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function startSlideshow() {
  stopSlideshow();
  slideshowInterval = setInterval(slideImage, 1000);
}

function stopSlideshow() {
  clearInterval(slideshowInterval);
}

showImage(currentIndex);

previousBtn.addEventListener("click", previousImage);
slideshowBtn.addEventListener("click", startSlideshow);
nextBtn.addEventListener("click", nextImage);
stopBtn.addEventListener("click", stopSlideshow);
