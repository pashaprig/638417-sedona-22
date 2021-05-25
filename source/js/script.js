var navMain = document.querySelector(".main-nav");
var navMainMobile = document.querySelector(".main-nav-not-mobile");
var navToggle = document.querySelector(".main-nav__toggle");
var modalFailure = document.querySelector(".modal__failure");
var modalFailureButton = document.querySelector(".modal__button__failure");
var modalSuccess = document.querySelector(".modal__success");
var modalSuccessButton = document.querySelector(".modal__button__success");
var reviewsForm = document.querySelector(".reviews-form");
var formName = reviewsForm.querySelector(".form__input-name");
var formSurname = reviewsForm.querySelector(".form__input-surname");
var formTel = reviewsForm.querySelector(".form__input-tel");
var formEmail = reviewsForm.querySelector(".form__input-email");

//Navigation

navMain.classList.remove("main-nav--nojs");
navMainMobile.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

//Failure

modalFailure.classList.add("modal__failure--close");

modalFailureButton.addEventListener("click", function() {
  if (modalFailure.classList.contains("modal__failure--open")) {
    modalFailure.classList.remove("modal__failure--open");
    modalFailure.classList.add("modal__failure--close");
  } else {
  }
});

//Success

modalSuccess.classList.add("modal__success--close");

modalSuccessButton.addEventListener("click", function() {
  if (modalSuccess.classList.contains("modal__success--open")) {
    modalSuccess.classList.remove("modal__success--open");
    modalSuccess.classList.add("modal__success--close");
  } else {
    }
});

//Pop Up

reviewsForm.addEventListener("submit", function (evt) {
  if (!formName.value || !formSurname.value || !formTel.value || !formEmail.value) {
    evt.preventDefault();
    modalFailure.classList.add("modal__failure--open");
  } else {
    modalSuccess.classList.add("modal__success--open");
    }
});
