'use strict';

const navBar = document.querySelector('#navbar');
const navBarHeight = navBar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if(window.scrollY > navBarHeight) {
    console.log(navBar);
    navBar.classList.add('navbar--dark');
  }else {
    navBar.classList.remove('navbar--dark');
  }
  
})