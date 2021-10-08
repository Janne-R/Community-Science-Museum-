const form = document.querySelector("form");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const tel = document.querySelector("#tel");
const telError = document.querySelector("#telError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const contactButton = document.querySelector(".form-contact-button");
const messageContainer = document.querySelector(".messageContainer");

const checkLength = (value, len) => {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

const validateEmail = email => {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

const validfullName = () => {
  if (checkLength(fullName.value, 5)) {
    nameError.style.display = "none";
    return true;
  } else {
    nameError.style.display = "block";
    return false;
  }
};

const validEmail = () => {
  if (validateEmail(email.value)) {
    emailError.style.display = "none";
    return true;
  } else {
    emailError.style.display = "block";
    return false;
  }
};

const validTel = () => {
  if (checkLength(tel.value, 7)) {
    telError.style.display = "none";
    return true;
  } else {
    telError.style.display = "block";
    return false;
  }
};

const validMessage = () => {
  if (checkLength(message.value, 9)) {
    messageError.style.display = "none";
    return true;
  } else {
    messageError.style.display = "block";
    return false;
  }
};

const validateForm = () => {
  if (validfullName() && validEmail() && validTel() && validMessage()) {
    contactButton.disabled = false;
  } else {
    messageContainer.innerHTML = "";
    contactButton.disabled = true;
  }
}

fullName.addEventListener("keyup", validateForm);
email.addEventListener("keyup", validateForm);
tel.addEventListener("keyup", validateForm);
message.addEventListener("keyup", validateForm);

function submitForm(event) {
  event.preventDefault();
  messageContainer.innerHTML = '<div class="formMessage">Your message has been sent</div>';
  form.reset();
  contactButton.disabled = true;
}

contactButton.addEventListener("click", submitForm);


