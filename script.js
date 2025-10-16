const CORRECT_PASSWORD = "test123";

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("loginBtn");
  const input = document.getElementById("password");
  const errorMsg = document.getElementById("error-msg");

  btn.addEventListener("click", () => {
    const userInput = input.value.trim().toLowerCase();

    if (userInput === CORRECT_PASSWORD) {
      window.location.href = "home";
    } else {
      errorMsg.textContent = "Špatné heslo. Zkus to znovu.";
      input.value = "";
      input.focus();
    }
  });

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") btn.click();
  });
});
