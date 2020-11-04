"use strict";

class Login {
  constructor() {
    this.emailInput = document.querySelector("#email");
    this.passwordInput = document.querySelector("#password");
    this.messageContainer = document.querySelector(".message-container");
    this.loginButton = document.querySelector("#login-btn");
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const email = this.emailInput.value; 
    const password = this.passwordInput.value; 

    const users = db.getAllUsers();

    const user = users.find( function(userObj) {
      if (userObj.email === email &&  userObj.password === password) {
        return true;
      }
    })

    this.messageContainer.innerHTML = "";
    const p = document.createElement('p');

    if (!user) {
      p.textContent = "Email or password are incorrect!";
    }
    else {
      p.textContent = `Hello ${user.name}!`;
      p.classList.add('correct-message');
      this.redirect();
    }

    this.messageContainer.appendChild(p);
  }


  redirect = () => {
    setTimeout( function () {
      location.assign("./index.html")
    }, 2000)
  }
}

const login = new Login();

window.addEventListener('load', function () {
  const loginButton = document.getElementById('login-btn');
  loginButton.addEventListener('click', login.handleSubmit );
} )
