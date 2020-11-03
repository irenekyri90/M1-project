'use strict';

const toggleNavBar = () => {
    const navBar = document.querySelector("#nav-bar-links");
    navBar.classList.toggle("foldout-menu");
    const foldedOutMenu = document.createElement("div");
    
    foldedOutMenu.appendChild(navBar);
    const parentNode= document.querySelector("header");
    parentNode.appendChild(foldedOutMenu);
  };
  const burgerMenuBar = document.querySelector("#burger");
  burgerMenuBar.addEventListener("click", toggleNavBar);

// function dropDown () {
//     const nav = document.querySelector('#nav-bar-links');
//     nav.style.display = "block";
//     const foldedOutMenu = document.createElement("div");
//     foldedOutMenu.classList.toggle("foldout-menu");
//     foldedOutMenu.appendChild(nav);
//     const parentNode =document.querySelector("header");
//     parentNode.appendChild(foldedOutMenu);
//     //dropdownBtn.removeEventListener("click", dropDown):
// }

// const dropdownBtn = document.querySelector('#burger');
// dropdownBtn.addEventListener("click", dropDown);
//get hamburger and then add event list to burger with click

//  #nav-bar-links {
 //   display: none; 
//  }

// if (nav.style.display === 'none') {
//     nav.style.display = 'block'
// } else {
//     nav.style.display = 'none'
// }