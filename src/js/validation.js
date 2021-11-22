//elements ref
const formRef = document.forms.signup;
const firstNameRef = document.getElementById('user-first-name');
const secondNameRef = document.getElementById('user-second-name');
const countryRef = document.getElementById('user-country');
const phoneRef = document.getElementById('user-phone');
const passwordRef = document.getElementById('user-password');
const confirmPasswordRef = document.getElementById('confirm-password');
const emailRef = document.getElementById('user-email');
const checkboxRef = document.getElementById('user-checkbox');

//error message ref
const firstNameErrorRef = document.querySelector('.first-name-error');
const secondNameErrorRef = document.querySelector('.second-name-error');
const countryErrorRef = document.querySelector('.country-error');
const phoneErrorRef = document.querySelector('.phone-error');
const passwordErrorRef = document.querySelector('.password-error');
const confirmPasswordErrorRef = document.querySelector('.confirm-password-error');
const emailErrorRef = document.querySelector('.email-error');

//element Reg
const emailRegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
const nameRegExp = /^[a-zA-Z][a-zA-Z0-9-_\.]{2,20}$/;
const passwordRegExp = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
const phoneRegExp = /[0-9]{10,12}$/;

formRef.addEventListener('submit', function () {
  event.preventDefault();

  const firstNameValidation =
    firstNameRef.value.length === -1 || nameRegExp.test(firstNameRef.value);
  const secondNameValidation =
    secondNameRef.value.length === -1 || nameRegExp.test(secondNameRef.value);
  const countryValidation = countryRef.value !== 'none';
  const phoneValidation = phoneRef.value.length === -1 || phoneRegExp.test(phoneRef.value);
  const passwordValidation =
    passwordRef.value.length === -1 || passwordRegExp.test(passwordRef.value);
  const confirmPasswordValidation =
    confirmPasswordRef.value.length !== 0 || confirmPasswordRef.value !== passwordRef.value;
  const emailValidation = emailRef.value.length === -1 || emailRegExp.test(emailRef.value);
  const checkboxValidation = checkboxRef.checked;

  if (!firstNameValidation) {
    firstNameErrorRef.classList.add('visible');
    setTimeout(() => {
      firstNameErrorRef.classList.remove('visible');
    }, 4000);
  }
  if (!secondNameValidation) {
    secondNameErrorRef.classList.add('visible');
    setTimeout(() => {
      secondNameErrorRef.classList.remove('visible');
    }, 4000);
  }
  if (!countryValidation) {
    countryErrorRef.classList.add('visible');
    setTimeout(() => {
      countryErrorRef.classList.remove('visible');
    }, 4000);
  }
  if (!phoneValidation) {
    phoneErrorRef.classList.add('visible');
    setTimeout(() => {
      phoneErrorRef.classList.remove('visible');
    }, 4000);
  }
  if (!passwordValidation) {
    passwordErrorRef.classList.add('visible');
    setTimeout(() => {
      passwordErrorRef.classList.remove('visible');
    }, 4000);
  }
  if (!confirmPasswordValidation) {
    confirmPasswordErrorRef.classList.add('visible');
    setTimeout(() => {
      confirmPasswordErrorRef.classList.remove('visible');
    }, 4000);
  }
  if (!emailValidation) {
    emailErrorRef.classList.add('visible');
    setTimeout(() => {
      emailErrorRef.classList.remove('visible');
    }, 4000);
  }
  if (!checkboxValidation) {
    checkboxRef.classList.add('visible-check');
    setTimeout(() => {
      checkboxRef.classList.remove('visible-check');
    }, 4000);
  }

  if (
    (firstNameValidation,
    secondNameValidation,
    countryValidation,
    phoneValidation,
    passwordValidation,
    confirmPasswordValidation,
    emailValidation,
    checkboxValidation)
  ) {
    console.log(true);
    firstNameRef.value = '';
    secondNameRef.value = '';
    countryRef.value = 'none';
    phoneRef.value = '';
    passwordRef.value = '';
    confirmPasswordRef.value = '';
    emailRef.value = '';
    checkboxRef.checked = false;
  }
});
