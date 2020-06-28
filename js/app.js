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
const contactMeBtn = document.querySelector('.home__contact');
navBarMenu.addEventListener('click', scrollHandler);
contactMeBtn.addEventListener('click', scrollHandler);

function scrollHandler(evt) {
  const { link } = evt.target.dataset;
  if(!link) return;
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

// home smooth

document.addEventListener('scroll', () => {
  const home = document.querySelector('.home__container');
  const homeHeight = home.getBoundingClientRect().height;

  home.setAttribute('style', `opacity: ${1-window.scrollY/homeHeight}`)
})