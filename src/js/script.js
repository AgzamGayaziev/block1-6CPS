const navigationListMenu = document.querySelector(".navigation__list--menu");
const burgerButton = document.querySelector(".button-menu");
const navigationListSupport = document.querySelector(
  ".navigation__list--support"
);
const mainOfAll = document.querySelector(".main");
const headerNavigation = document.querySelector(".header__navigation");
const closedMainMenu = document.querySelector(".main-menu");
const buttonReadMore = document.querySelector(".read-more");
const textInfoClosed = document.querySelector(".article__content-inner");
const articleBluredWhenMenuOpen = document.querySelector(".main__article");
const navigationSlideBluredWhenMenuOpen = document.querySelector(
  ".navigation-content"
);
const buttonCloseMenu = document.querySelector(".button-close-menu");
const overlayMenu = document.querySelector(".overlay-menu");
const overlayFeedback = document.querySelector(".overlay-feedback");

//
const modalWindowFeedback = document.querySelector(
  ".modal-window-feedback-container"
);
const buttonCloseModalWindow = document.querySelector(
  ".modal-window-feedback__button-close"
);
const buttonRequestCall = document.querySelector(".request-call");
const buttonFeedback = document.querySelector(".feedback-btn");
const feedbackTitle = document.querySelector(".modal-window-feedback__title");
const requestCallTitle = document.querySelector(".request-call-title");
const inputName = document.querySelector(".modal-window-feedback__input-name");
const inputMail = document.querySelector(".modal-window-feedback__input-mail");
const inputMessage = document.querySelector(
  ".modal-window-feedback__input-message"
);
const hederButtonRequestCall = document.querySelector(
  ".feedback__button--call"
);
const hederButtonFeedback = document.querySelector(".feedback__button--mail");
//
burgerButton.addEventListener("click", function () {
  //navigationListMenu.classList.add("navigation__list--wider");
  headerNavigation.classList.add("navigation--unbordered");
  closedMainMenu.classList.add("main-menu--open");
  overlayMenu.classList.add("overlay-menu--blured");
});

buttonCloseMenu.addEventListener("click", function () {
  //navigationListMenu.classList.remove("navigation__list--wider");
  headerNavigation.classList.remove("navigation--unbordered");
  closedMainMenu.classList.remove("main-menu--open");
  overlayMenu.classList.remove("overlay-menu--blured");
});
mainOfAll.addEventListener("click", function () {
  //navigationListMenu.classList.remove("navigation__list--wider");
  headerNavigation.classList.remove("navigation--unbordered");
  closedMainMenu.classList.remove("main-menu--open");
  overlayMenu.classList.remove("overlay-menu--blured");
  overlayFeedback.classList.remove("overlay-feedback--blured");
  modalWindowFeedback.classList.remove(
    "modal-window-feedback-container--openned"
  );
});

buttonReadMore.addEventListener("click", function () {
  textInfoClosed.classList.toggle("article__content-inner--open");
});
//
buttonRequestCall.addEventListener("click", function (evt) {
  evt.preventDefault;
  modalWindowFeedback.classList.add("modal-window-feedback-container--openned");
  feedbackTitle.classList.add("request-call-title");
  requestCallTitle.classList.remove("request-call-title");
  inputName.classList.add("modal-window-feedback__input-name--request-call");
  inputMail.classList.add("modal-window-feedback__input-mail--request-call");
  inputMessage.classList.add(
    "modal-window-feedback__input-message--request-call"
  );
  overlayFeedback.classList.add("overlay-feedback--blured");
});

hederButtonRequestCall.addEventListener("click", function (evt) {
  evt.preventDefault;
  modalWindowFeedback.classList.add("modal-window-feedback-container--openned");
  feedbackTitle.classList.add("request-call-title");
  requestCallTitle.classList.remove("request-call-title");
  inputName.classList.add("modal-window-feedback__input-name--request-call");
  inputMail.classList.add("modal-window-feedback__input-mail--request-call");
  inputMessage.classList.add(
    "modal-window-feedback__input-message--request-call"
  );
  overlayFeedback.classList.add("overlay-feedback--blured");
});

buttonFeedback.addEventListener("click", function (evt) {
  evt.preventDefault;
  modalWindowFeedback.classList.add("modal-window-feedback-container--openned");
  overlayFeedback.classList.add("overlay-feedback--blured");
});

hederButtonFeedback.addEventListener("click", function (evt) {
  evt.preventDefault;
  modalWindowFeedback.classList.add("modal-window-feedback-container--openned");
  overlayFeedback.classList.add("overlay-feedback--blured");
});

buttonCloseModalWindow.addEventListener("click", function () {
  modalWindowFeedback.classList.remove(
    "modal-window-feedback-container--openned"
  );
  feedbackTitle.classList.remove("request-call-title");
  requestCallTitle.classList.add("request-call-title");
  inputName.classList.remove("modal-window-feedback__input-name--request-call");
  inputMail.classList.remove("modal-window-feedback__input-mail--request-call");
  inputMessage.classList.remove(
    "modal-window-feedback__input-message--request-call"
  );
  overlayFeedback.classList.remove("overlay-feedback--blured");
});
