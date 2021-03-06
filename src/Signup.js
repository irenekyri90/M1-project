"use strict";

class Signup {
  constructor() {
    this.nameInput = document.querySelector("#name");
    this.signatureCocktail = document.querySelector("#signature-cocktail");
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");
    this.repeatPasswordInput = document.querySelector("#repeat-password");

    this.buttonInput = document.querySelector("#signup-btn");
    this.errorsWrapper = document.querySelector(".message-container");
  }


  handleEmailInput = (event) => {
    const emailInput = event.target;
    const email = emailInput.value;

    validator.validateValidEmail(email);
    validator.validateUniqueEmail(email);

    this.setErrorMessages();
  };


  handlePasswordInput = (event) => {
    const passwordInput = event.target;
    const repeatPasswordInput = this.repeatPasswordInput;

    const password = passwordInput.value;
    const repeatPassword = repeatPasswordInput.value;

    validator.validatePassword(password);
    validator.validateRepeatPassword(password, repeatPassword);

    this.setErrorMessages();
  };


  handleRepeatPasswordInput = (event) => {
    const passwordInput = event.target;
    const repeatPasswordInput = this.repeatPasswordInput;

    const password = passwordInput.value;
    const repeatPassword = repeatPasswordInput.value;

    validator.validatePassword(password);
    validator.validateRepeatPassword(password, repeatPassword);

    this.setErrorMessages();
  };


  setErrorMessages = () => {

    this.errorsWrapper.innerHTML = "";
    this.errorsWrapper.classList = '';
     

    const errorsObj = validator.getErrors();

    const errorStringsArr = Object.values( errorsObj );

    errorStringsArr.forEach( (str) => {

      const p = document.createElement('p');
      p.textContent = str;
      this.errorsWrapper.classList.add('alert');
      this.errorsWrapper.classList.add('alert-danger');
      this.errorsWrapper.appendChild(p);
      
    })
  }


  saveData = (event) => {


    event.preventDefault();

    const name = this.nameInput.value;
    const signatureCocktail = this.signatureCocktail.value;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;

    const newUser = new User(name, signatureCocktail, email, password);

    db.saveNewUser(newUser);

    this.nameInput.value = "";
    this.signatureCocktail.value = "";
    this.emailInput.value = "";
    this.passwordInput.value = "";
    this.redirect();
  };

  addListeners = () => {
    this.emailInput.addEventListener("input", this.handleEmailInput);
    this.passwordInput.addEventListener("input", this.handlePasswordInput);
    this.repeatPasswordInput.addEventListener("input", this.handleRepeatPasswordInput);
    this.buttonInput.addEventListener("click", this.saveData);
  }

  redirect = () => {
    setTimeout( function () {
      location.assign("./login.html");
    }, 2000)
  }

}

const signup = new Signup();

window.addEventListener('load', signup.addListeners )