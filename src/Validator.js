"use strict";


class Validator {
  constructor() {
    this.invalidEmailError = "Enter a valid email address";
    this.emailExistsError = "The entered email address is already taken.";
    this.passwordError = "Password must be at least 6 characters long";
    this.repeatPasswordError = "Password and reapeat password must match!";

    this.errors = {
      invalidEmailError: this.invalidEmailError,
      passwordError: this.passwordError,
      repeatPasswordError: this.repeatPasswordError,
    };
  }

  validateValidEmail = (email) => {
    if (this.emailSyntaxIsValid(email)) { 
      delete this.errors.invalidEmailError;
    } else {
      this.errors.invalidEmailError = this.invalidEmailError;
    }
  };

  emailSyntaxIsValid = (email) => {
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    const emailIsValid = emailRegEx.test(email);
    return emailIsValid;
  };

  validateUniqueEmail = (newEmail) => {
    const users = db.getAllUsers(); //

    let emailUnique = true;

    users.forEach((userObj) => {
      if (userObj.email === newEmail) {
        emailUnique = false; 
      }
    });

    if (emailUnique) {
      delete this.errors.emailExistsError;
    } else {
      this.errors.emailExistsError = this.emailExistsError;
    }
  };

  validatePassword = (password) => {
    if (password.length >= 6) {
      delete this.errors.passwordError;
    } else {
      this.errors.passwordError = this.passwordError;
    }
  };

  validateRepeatPassword = (password, repeatPassword) => {
    if (password === repeatPassword) {
      delete this.errors.repeatPasswordError;
    } else {
      this.errors.repeatPasswordError = this.repeatPasswordError;
      //this.repeatPasswordError.classList = "alert alert-danger";
    }
  };

  //alert alert-danger

  getErrors = () => {
    return this.errors;
  };
}

const validator = new Validator();