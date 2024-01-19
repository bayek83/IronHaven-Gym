const showLogin = document.querySelector(".login-nice");
const offLogin = document.querySelector(".login-nice2");
const close = document.querySelector(".close-login");
const loginv2 = document.querySelector(".loginv2");
const signup = document.querySelector(".signup");
const loginNav = document.querySelector(".left-btn");
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 1) {
    navbar.classList.add("scrollY");
  } else if (window.screenY == 0) {
    navbar.classList.remove("scrollY");
  }
});
loginNav.addEventListener("click", function () {
  signup.classList.toggle("signupShow");
});

close.addEventListener("click", function () {
  signup.classList.remove("signupShow");
});
showLogin.addEventListener("click", function (e) {
  e.preventDefault();
  loginv2.classList.toggle("show");
});
offLogin.addEventListener("click", function (e) {
  e.preventDefault();
  loginv2.classList.remove("show");
});
