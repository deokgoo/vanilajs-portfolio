'use strict';

const navBar = document.querySelector('#navbar');
const navBarHeight = navBar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if(window.scrollY > navBarHeight) {
    navBar.classList.add('navbar--dark');
  }else {
    navBar.classList.remove('navbar--dark');
  }
})

const navBarMenu = document.querySelector('.navbar__menu');
navBarMenu.addEventListener('click', (evt) => {
  const { link } = evt.target.dataset;
  if(!link) return;
  const scrollTo = document.querySelector(link);
  console.log(scrollTo);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
})
