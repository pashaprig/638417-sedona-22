var navMain = document.querySelector(".main-nav");
var navMainMobile = document.querySelector(".main-nav-not-mobile");
var navToggle = document.querySelector(".main-nav__toggle");
var modalFailure = document.querySelector(".modal__failure");
var modalFailureButton = document.querySelector(".modal__button__failure");
var modalSuccess = document.querySelector(".modal__success");
var modalSuccessButton = document.querySelector(".modal__button__success");
var reviewsForm = document.querySelector(".reviews-form");
var formName = document.querySelector(".form__input-name");
var formSurname = document.querySelector(".form__input-surname");
var formTel = document.querySelector(".form__input-tel");
var formEmail = document.querySelector(".form__input-email");

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

//Pop Up

reviewsForm.addEventListener("submit", function (evt) {
  console.log(formName.value);
  if (!formName.value || !formSurname.value || !formTel.value || !formEmail.value) {
    evt.preventDefault();
    modalFailure.classList.add("modal--open");
  } else {
    modalSuccess.classList.add("modal--open");
    }
});

//Failure

// modalFailure.classList.add("modal__failure--close");

modalFailureButton.addEventListener("click", function() {
  if (modalFailure.classList.contains("modal--open")) {
    modalFailure.classList.remove("modal--open");
    // modalFailure.classList.add("modal__failure--close");
  } else {
  }
});

//Success

// modalSuccess.classList.add("modal__success--close");

modalSuccessButton.addEventListener("click", function() {
  if (modalSuccess.classList.contains("modal--open")) {
    modalSuccess.classList.remove("modal--open");
    // modalSuccess.classList.add("modal__success--close");
  } else {
    }
});

//чтобы работало несколько раз нужно вставить?
// modalFailure.offsetWidth = modalFailure.offsetWidth;
// modalSuccess.offsetWidth = modalSuccess.offsetWidth;
