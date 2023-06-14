const philoForm = document.getElementById('philo-grades-form');
const philoResult = document.getElementById('philo-result');

philoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const philo_WW1 = Number(document.getElementById('philo_ww1').value);
  const philo_WW1Max = Number(document.getElementById('philo_ww1max').value);
  const philo_WW2 = Number(document.getElementById('philo_ww2').value);
  const philo_WW2Max = Number(document.getElementById('philo_ww2max').value);
  const philo_WW3 = Number(document.getElementById('philo_ww3').value);
  const philo_WW3Max = Number(document.getElementById('philo_ww3max').value);
  const philo_WW4 = Number(document.getElementById('philo_ww4').value);
  const philo_WW4Max = Number(document.getElementById('philo_ww4max').value);
  
  const philo_PETA1 = Number(document.getElementById('philo_peta1').value);
  const philo_PETA1Max = Number(document.getElementById('philo_peta1max').value);
  const philo_PETA2 = Number(document.getElementById('philo_peta2').value);
  const philo_PETA2Max = Number(document.getElementById('philo_peta2max').value);

  const philo_QA1 = Number(document.getElementById('philo_qa1').value);
  const philo_QA1Max = Number(document.getElementById('philo_qa1max').value);
  const philo_QA2 = Number(document.getElementById('philo_qa2').value);
  const philo_QA2Max = Number(document.getElementById('philo_qa2max').value);

  const philo_WWTotal = philo_WW1 + philo_WW2 + philo_WW3 + philo_WW4;
  const philo_WWMaxTotal = philo_WW1Max + philo_WW2Max + philo_WW3Max + philo_WW4Max;
  const philo_WWPercent = (philo_WWTotal / philo_WWMaxTotal) * 100;

  const philo_PETATotal = philo_PETA1 + philo_PETA2;
  const philo_PETAMaxTotal = philo_PETA1Max + philo_PETA2Max;
  const philo_PETAPercent = (philo_PETATotal / philo_PETAMaxTotal) * 100;

  const philo_QATotal = philo_QA1 + philo_QA2;
  const philo_QAMaxTotal = philo_QA1Max + philo_QA2Max;
  const philo_QAPercent = (philo_QATotal / philo_QAMaxTotal) * 100;

  const philo_finalGrade = (philo_WWPercent * 0.25) + (philo_PETAPercent * 0.50) + (philo_QAPercent * 0.25);

  philoResult.textContent = `The INITIAL grade for 21st is: ${philo_finalGrade.toFixed(2)}`;
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
