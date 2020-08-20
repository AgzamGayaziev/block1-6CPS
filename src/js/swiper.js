// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from "swiper";

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

// init Swiper:
const sliders = document.querySelectorAll(".swiper-container");

sliders.forEach((el) => {
  let mySwiper = new Swiper(el, {
    slidesPerView: "auto",
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
  });
});

if (document.body.clientWidth > 750) {
  const listBrandsContainer = document.querySelector(".swiper-container");
  const ListBrands = document.querySelector(".section__list");
  const btnShowHide = document.querySelector(".show-all");
  const nameButtonShow = btnShowHide.querySelector(".show-all__title-show");
  const nameButtonHide = btnShowHide.querySelector(".show-all__title-hide");
  const imageArrowButton = btnShowHide.querySelector(".show-all__arrow");

  btnShowHide.addEventListener("click", function () {
    listBrandsContainer.classList.toggle("swiper-container--opened");
    ListBrands.classList.toggle("section__list--opened");
    nameButtonShow.classList.toggle("show-all__title-show--hide");
    nameButtonHide.classList.toggle("show-all__title-show");
    imageArrowButton.classList.toggle("show-all__arrow--rotate");
  });

  const containerListBrandsServices = document.querySelector(
    ".section-services__content"
  );
  const ListBrandsServices = document.querySelector(".section-services__list");
  const btnShowHideServices = document.querySelector(".show-all-services");
  const nameButtonShowServices = btnShowHideServices.querySelector(
    ".show-all-services__title-show"
  );
  const nameButtonHideServices = btnShowHideServices.querySelector(
    ".show-all-services__title-hide"
  );
  const imageArrowButtonServices = btnShowHideServices.querySelector(
    ".show-all-services__arrow"
  );
  btnShowHideServices.addEventListener("click", function () {
    containerListBrandsServices.classList.toggle(
      "section-services__content--opened"
    );
    ListBrandsServices.classList.toggle("section-services__list--opened");
    nameButtonShowServices.classList.toggle(
      "show-all-services__title-show--hide"
    );
    nameButtonHideServices.classList.toggle("show-all-services__title-show");
    imageArrowButtonServices.classList.toggle(
      "show-all-services__arrow--rotate"
    );
  });
}
