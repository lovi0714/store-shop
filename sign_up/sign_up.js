document.querySelectorAll("input").forEach(input => {
    input.addEventListener("invalid", () => {
      // 검증 후 폼 요소에 was-validated 클래스로 표시해 둔다
      document.forms[0].classList.add("was-validated")
    })
  })