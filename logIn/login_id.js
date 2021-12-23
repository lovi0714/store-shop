let loginBox = document.querySelector(".outer-box");
let loginInputBox = document.querySelector("#id");
loginInputBox.addEventListener("keyup", function () {
  if (!loginInputBox.value == '') {
    loginBox.classList.add("existence");
  } else {
    loginBox.classList.remove("existence");
  }
});