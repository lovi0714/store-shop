let loginBox = document.querySelector(".out-box");
let loginInputBox = document.querySelector("#password");
loginInputBox.addEventListener("keyup", function () {
  if (!loginInputBox.value == '') {
    loginBox.classList.add("existence");
  } else {
    loginBox.classList.remove("existence");
  }
});