// ai-tools下拉選單
$(function () {
  $("#dropdown-toggle-select").click(function () {
    $("#dropdown-menu-select").slideToggle("");
  });
});
$(function () {
  $("#dropdown-toggle-latest").click(function () {
    $("#dropdown-menu-latest").slideToggle("");
  });
});

// recommend Carousel
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
  let slides = document.getElementsByClassName("recommend-slides");
  let dots = document.getElementsByClassName("dot");
  // console.log(slides.length);
  // console.log(dots.length);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].setAttribute("style", "display:none;");
    // console.log(slides);
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex - 1].setAttribute("style", "display:block;");
  dots[slideIndex - 1].classList.add("active");
}
