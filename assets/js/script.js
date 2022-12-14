const inputs = document.querySelectorAll(".input");
const buttonSignin = document.querySelector(".signin__button");

const handleFocus = ({ target }) => {
  const span = target.previousElementSibling;
  span.classList.add("span-active");
};

const handleFocusOut = ({ target }) => {
  if (target.value === "") {
    const span = target.previousElementSibling;
    span.classList.remove("span-active");
  }
};

const handleChange = () => {
  const [username, password] = inputs;

  if (username.value && password.value.length > 4) {
    buttonSignin.removeAttribute("disabled");
  } else {
    buttonSignin.setAttribute("disabled", "");
  }
};

inputs.forEach((input) => input.addEventListener("focus", handleFocus));
inputs.forEach((input) => input.addEventListener("focusout", handleFocusOut));
inputs.forEach((input) => input.addEventListener("input", handleChange));
