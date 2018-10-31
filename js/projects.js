// projects.js - JS for projects.html

const headerImg = document.querySelector('#jumbotron');
const h1 = document.querySelector('h1');

let windowResize = () => {

  if (window.innerWidth <= 800) {

    document.querySelector('#jumbotron').src = "./img/services/services-mobile-jumbotron.png";

  }

  else {

    document.querySelector('#jumbotron').src = "./img/services/services-jumbotron.png";

  }

}

window.addEventListener('resize', windowResize);

windowResize();

TweenMax.fromTo(headerImg, 1, {opacity: 0, yPercent: -100}, {opacity: 1, yPercent: 0, onComplete: () => {
  TweenMax.fromTo(h1, 1.5, {opacity: 0, xPercent: -150}, {opacity: 1, xPercent: 0});
}});