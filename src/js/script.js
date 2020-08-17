const navigationListMenu = document.querySelector(".navigation__list--menu");
const burgerButton = navigationListMenu.querySelector(".navigation__button");
const navigationListSupport = document.querySelector(
  ".navigation__list--support"
);
const mainOfAll = document.querySelector(".main-of-all");
const headerNavigation = document.querySelector(".header__navigation");
const closedMainMenu = document.querySelector(".main-menu");
const buttonReadMore = document.querySelector(".read-more");
const textInfoClosed = document.querySelector(".article__content-inner");
const articleBluredWhenMenuOpen = document.querySelector(".main__article");
const navigationSlideBluredWhenMenuOpen = document.querySelector(
  ".navigation-content"
);
const buttonCloseMenu = document.querySelector(".button-close-menu");
const headerBluredWhenMenuOpen = document.querySelector(".header__navigation");
const footer = document.querySelector(".footer");
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
//
burgerButton.addEventListener("click", function () {
  navigationListMenu.classList.add("navigation__list--wider");
  headerNavigation.classList.add("navigation--unbordered");
  closedMainMenu.classList.add("main-menu--open");
  mainOfAll.classList.add("main-0f-all--blured-for-menu");
  footer.classList.add("footer--blured-for-menu");
});

buttonCloseMenu.addEventListener("click", function () {
  navigationListMenu.classList.remove("navigation__list--wider");
  headerNavigation.classList.remove("navigation--unbordered");
  closedMainMenu.classList.remove("main-menu--open");
  mainOfAll.classList.remove("main-0f-all--blured-for-menu");
  footer.classList.remove("footer--blured-for-menu");
});
mainOfAll.addEventListener("click", function () {
  navigationListMenu.classList.remove("navigation__list--wider");
  headerNavigation.classList.remove("navigation--unbordered");
  closedMainMenu.classList.remove("main-menu--open");
  mainOfAll.classList.remove("main-0f-all--blured-for-menu");
  footer.classList.remove("footer--blured-for-menu");
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
});

buttonFeedback.addEventListener("click", function (evt) {
  evt.preventDefault;
  modalWindowFeedback.classList.add("modal-window-feedback-container--openned");
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
});
