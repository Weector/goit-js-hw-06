const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені!");
  }

  const userData = {
    email: `${email.name}: ${email.value}`,
    password: `${password.name}: ${password.value}`,
  };
  console.log(userData);

  event.currentTarget.reset();
});
