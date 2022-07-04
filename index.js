const myForm = document.querySelector("form");
const userName = document.getElementById("username");
const myError = document.getElementById("error");

myForm.addEventListener("submit", (e) => {
  let myRegex = /^[a-zA-Z-\s]+$/;

  if (userName.value == "") {
    e.preventDefault();
    myError.textContent = "le champ utilisateur est requis";
    myError.style.color = "red";
  } else if (myRegex.test(userName.value) == false) {
    e.preventDefault();
    myError.textContent =
      "le nom doit comporter des lettres et des tirets uniquement";
    myError.style.color = "red";
  }
});
