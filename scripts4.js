const rwForm = document.getElementById('rw-grades-form');
const rwResult = document.getElementById('rw-result');

rwForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const rw_WW1 = Number(document.getElementById('rw_ww1').value);
  const rw_WW1Max = Number(document.getElementById('rw_ww1max').value);
  const rw_WW2 = Number(document.getElementById('rw_ww2').value);
  const rw_WW2Max = Number(document.getElementById('rw_ww2max').value);
  const rw_WW3 = Number(document.getElementById('rw_ww3').value);
  const rw_WW3Max = Number(document.getElementById('rw_ww3max').value);
  const rw_WW4 = Number(document.getElementById('rw_ww4').value);
  const rw_WW4Max = Number(document.getElementById('rw_ww4max').value);
  const rw_WW5 = Number(document.getElementById('rw_ww5').value);
  const rw_WW5Max = Number(document.getElementById('rw_ww5max').value);
  const rw_WW6 = Number(document.getElementById('rw_ww6').value);
  const rw_WW6Max = Number(document.getElementById('rw_ww6max').value);

  const rw_PETA1 = Number(document.getElementById('rw_peta1').value);
  const rw_PETA1Max = Number(document.getElementById('rw_peta1max').value);
  const rw_PETA2 = Number(document.getElementById('rw_peta2').value);
  const rw_PETA2Max = Number(document.getElementById('rw_peta2max').value);

  const rw_QA1 = Number(document.getElementById('rw_qa1').value);
  const rw_QA1Max = Number(document.getElementById('rw_qa1max').value);
  const rw_QA2 = Number(document.getElementById('rw_qa2').value);
  const rw_QA2Max = Number(document.getElementById('rw_qa2max').value);

  const rw_WWTotal = rw_WW1 + rw_WW2 + rw_WW3 + rw_WW4 + rw_WW5 + rw_WW6;
  const rw_WWMaxTotal = rw_WW1Max + rw_WW2Max + rw_WW3Max + rw_WW4Max + rw_WW5Max + rw_WW6Max;
  const rw_WWPercent = (rw_WWTotal / rw_WWMaxTotal) * 100;

  const rw_PETATotal = rw_PETA1 + rw_PETA2;
  const rw_PETAMaxTotal = rw_PETA1Max + rw_PETA2Max;
  const rw_PETAPercent = (rw_PETATotal / rw_PETAMaxTotal) * 100;

  const rw_QATotal = rw_QA1 + rw_QA2;
  const rw_QAMaxTotal = rw_QA1Max + rw_QA2Max;
  const rw_QAPercent = (rw_QATotal / rw_QAMaxTotal) * 100;

  const rw_finalGrade = (rw_WWPercent * 0.25) + (rw_PETAPercent * 0.50) + (rw_QAPercent * 0.25);

  rwResult.textContent = `The INITIAL grade for Reading and Writing is: ${rw_finalGrade.toFixed(2)}`;
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
