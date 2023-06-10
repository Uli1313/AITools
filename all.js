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

// recommend 輪播
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ai-type active
const options = document.querySelectorAll(".ai-tools-menu-type li a");

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", function () {
    const currentOption = this.id;

    // 移除所有選項的active
    for (let j = 0; j < options.length; j++) {
      options[j].classList.remove("ai-tools-menu-type-active");
    }

    // 當前點擊選項設為active
    document
      .getElementById(currentOption)
      .classList.add("ai-tools-menu-type-active");
  });
}

// ai-pagination active
const paginationOptions = document.querySelectorAll(".pagination li a");

for (let i = 0; i < paginationOptions.length; i++) {
  paginationOptions[i].addEventListener("click", function () {
    const paginationCurrentOption = this.id;

    for (let j = 0; j < paginationOptions.length; j++) {
      paginationOptions[j].classList.remove("pagination-active");
    }

    document
      .getElementById(paginationCurrentOption)
      .classList.add("pagination-active");
  });
}
