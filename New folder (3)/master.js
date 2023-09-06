var username = document.getElementById("name");
var email = document.getElementById("email");
var pass = document.getElementById("pass");
var hopy = document.getElementsByName("check");
var login = document.getElementById("login");
var reset = document.getElementById("reset");
var nameShowErr = document.getElementById("nameError");
var emailShowErr = document.getElementById("emailError");
var passShowErr = document.getElementById("passError");
var hoppyErr = document.getElementById("hopyChedk");
var errorBorder = "1px solid red";
var successBorder = "1px solid green";
var isValid = false;
username.addEventListener("input", function (evt) {
  if (evt.target.value.length >= 3 && /^[a-zA-Z0-9]*$/.test(evt.target.value)) {
    username.style.border = successBorder;
    nameShowErr.style.display = "none";
    isValid = true;
  } else {
    username.style.border = errorBorder;
    nameShowErr.style.display = "block";
    isValid = false;
  }
});
pass.addEventListener("input", function (evt) {
  if (evt.target.value.length >= 3) {
    pass.style.border = successBorder;
    passShowErr.style.display = "none";
    isValid = true;
  } else {
    pass.style.border = errorBorder;
    passShowErr.style.display = "block";
    isValid = false;
  }
});
email.addEventListener("input", function (evt) {
  if (
    evt.target.value.length >= 3 &&
    evt.target.value.search("@gmail.com") != -1
  ) {
    email.style.border = successBorder;
    emailShowErr.style.display = "none";
    isValid = true;
  } else {
    email.style.border = errorBorder;
    emailShowErr.style.display = "block";
    isValid = false;
  }
});
function checkHopy() {
  if (
    (hopy[0].checked && hopy[1].checked) ||
    (hopy[0].checked && hopy[2].checked)
  ) {
    return true;
  } else if (hopy[1].checked && hopy[2].checked) {
    return true;
  } else {
    return false;
  }
}
login.addEventListener("click", function (evt) {
  if (isValid == false) {
    emailShowErr.style.display = "block";
    nameShowErr.style.display = "block";
    passShowErr.style.display = "block";
    hoppyErr.style.display = "block";
    evt.preventDefault();
  } else {
    if (checkHopy()) {
      hoppyErr.style.display = "none";
    } else {
      hoppyErr.style.display = "block";
      evt.preventDefault();
    }
  }
});
reset.addEventListener("click", function () {
  username.value = "";
  email.value = "";
  pass.value = "";
  window.location.reload();
});
