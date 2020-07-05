'use strict';

const navBar = document.querySelector('#navbar');
const navUp = document.querySelector('.arrow-up');
const navBarHeight = navBar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if(window.scrollY > navBarHeight) {
    navBar.classList.add('navbar--dark');
    navUp.classList.add('active');
  }else {
    navBar.classList.remove('navbar--dark');
    navUp.classList.remove('active');
  }
})

navUp.addEventListener('click', () => {
  window.scrollTo(0, 0);
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

  home.setAttribute('style', `opacity: ${0.9-window.scrollY/homeHeight}`)
})

// project
const projectType = { ALL: 0, FRONTEND: 1, BACKEND: 2, MOBILE: 3 };
let selectedType = projectType.ALL;
const projects = document.querySelectorAll('.project');
const projectContainer = document.querySelector('.work__projects');
const workBtnContainer = document.querySelector('.work__categories');

workBtnContainer.addEventListener('click', (e) => {
  const select = e.target.dataset.select || e.target.parentNode.dataset.select;
  if(typeof projectType[select] !== 'number') return;
  selectedType = projectType[select];
  projectContainer.classList.add('anim-out');
  projects.forEach((x) => {
    const { part } = x.dataset;
    if(projectType[part] === selectedType || !selectedType) {
      x.classList.remove('invisible');
    } else {
      x.classList.add('invisible');
    }
  })
  setTimeout(() => projectContainer.classList.remove('anim-out'), 300);
})
