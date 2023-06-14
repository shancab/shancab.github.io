const subjects = [
    "pr1",
    "stats",
    "rw",
    "pagbasa",
    "drrr",
    "bascal",
    "philo",
    "lit",
    "emptech"
];

const grades = {};

subjects.forEach((subject) => {
    const input = document.getElementById(subject);
    input.addEventListener("input", (event) => {
        const grade = parseFloat(event.target.value);
        if (isNaN(grade) || grade <= 0) {
            grades[subject] = 0;
        } else {
            grades[subject] = grade;
        }
    });
});

const form = document.getElementById("grades-form");
const resultElement = document.getElementById("result");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const sum = Object.values(grades).reduce((accumulator, currentValue) => {
        if (isNaN(currentValue)) {
            return accumulator;
        }
        return accumulator + currentValue;
    }, 0);

    if (Object.values(grades).some((grade) => isNaN(grade))) {
        resultElement.textContent = "Invalid input detected. Please enter valid grades.";
        return;
    }

    const average = sum / Object.keys(grades).length;
    resultElement.textContent = `Your average grade is: ${average.toFixed(2)}`;

    if (average >= 80) {
        resultElement.textContent += " You have a passing grade. Congratulations!";
    } else if (average >= 75) {
        resultElement.textContent += " You have a passing grade, but you can do better.";
    } else {
        resultElement.textContent += " I'm sorry, but you have failed. Get ready for summer class.";
    }
});

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



