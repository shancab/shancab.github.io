const statsForm = document.getElementById('stats-grades-form');
const statsResult = document.getElementById('stats-result');

statsForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const stats_WW1 = Number(document.getElementById('stats_ww1').value);
  const stats_WW1Max = Number(document.getElementById('stats_ww1max').value);
  const stats_WW2 = Number(document.getElementById('stats_ww2').value);
  const stats_WW2Max = Number(document.getElementById('stats_ww2max').value);
  const stats_WW3 = Number(document.getElementById('stats_ww3').value);
  const stats_WW3Max = Number(document.getElementById('stats_ww3max').value);
  const stats_WW4 = Number(document.getElementById('stats_ww4').value);
  const stats_WW4Max = Number(document.getElementById('stats_ww4max').value);
  const stats_WW5 = Number(document.getElementById('stats_ww5').value);
  const stats_WW5Max = Number(document.getElementById('stats_ww5max').value);
  const stats_WW6 = Number(document.getElementById('stats_ww6').value);
  const stats_WW6Max = Number(document.getElementById('stats_ww6max').value);
  
  const stats_PETA1 = Number(document.getElementById('stats_peta1').value);
  const stats_PETA1Max = Number(document.getElementById('stats_peta1max').value);
  const stats_PETA2 = Number(document.getElementById('stats_peta2').value);
  const stats_PETA2Max = Number(document.getElementById('stats_peta2max').value);
  const stats_PETA3 = Number(document.getElementById('stats_peta3').value);
  const stats_PETA3Max = Number(document.getElementById('stats_peta3max').value);
  const stats_PETA4 = Number(document.getElementById('stats_peta4').value);
  const stats_PETA4Max = Number(document.getElementById('stats_peta4max').value);

  const stats_QA1 = Number(document.getElementById('stats_qa1').value);
  const stats_QA1Max = Number(document.getElementById('stats_qa1max').value);
  const stats_QA2 = Number(document.getElementById('stats_qa2').value);
  const stats_QA2Max = Number(document.getElementById('stats_qa2max').value);

  const stats_WWTotal = stats_WW1 + stats_WW2 + stats_WW3 + stats_WW4 + stats_WW5 + stats_WW6;
  const stats_WWMaxTotal = stats_WW1Max + stats_WW2Max + stats_WW3Max + stats_WW4Max + stats_WW5Max + stats_WW6Max;
  const stats_WWPercent = (stats_WWTotal / stats_WWMaxTotal) * 100;

  const stats_PETATotal = stats_PETA1 + stats_PETA2;
  const stats_PETAMaxTotal = stats_PETA1Max + stats_PETA2Max;
  const stats_PETAPercent = (stats_PETATotal / stats_PETAMaxTotal) * 100;

  const stats_QATotal = stats_QA1 + stats_QA2;
  const stats_QAMaxTotal = stats_QA1Max + stats_QA2Max;
  const stats_QAPercent = (stats_QATotal / stats_QAMaxTotal) * 100;

  const stats_finalGrade = (stats_WWPercent * 0.25) + (stats_PETAPercent * 0.50) + (stats_QAPercent * 0.25);

  statsResult.textContent = `The INITIAL grade for Stats is: ${stats_finalGrade.toFixed(2)}`;
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
