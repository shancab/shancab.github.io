const navHeader = document.querySelector('.nav-header');

let prevScrollPosition = window.pageYOffset;
window.addEventListener('scroll', () => {
  let currentScrollPosition = window.pageYOffset;

  if (window.innerWidth <= 768) {
    if (prevScrollPosition > currentScrollPosition) {
      navHeader.classList.remove('hide');
    } else {
      navHeader.classList.add('hide');
    }
  } else {
    navHeader.classList.remove('hide');
  }
  prevScrollPosition = currentScrollPosition;
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navHeader.classList.remove('hide');
  }
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  body.classList.toggle("nav-open");
});



