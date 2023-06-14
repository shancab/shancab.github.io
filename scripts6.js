const drrrForm = document.getElementById('drrr-grades-form');
const drrrResult = document.getElementById('drrr-result');

drrrForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const drrr_WW1 = Number(document.getElementById('drrr_ww1').value);
  const drrr_WW1Max = Number(document.getElementById('drrr_ww1max').value);
  const drrr_WW2 = Number(document.getElementById('drrr_ww2').value);
  const drrr_WW2Max = Number(document.getElementById('drrr_ww2max').value);
  const drrr_WW3 = Number(document.getElementById('drrr_ww3').value);
  const drrr_WW3Max = Number(document.getElementById('drrr_ww3max').value);
  const drrr_WW4 = Number(document.getElementById('drrr_ww4').value);
  const drrr_WW4Max = Number(document.getElementById('drrr_ww4max').value);

  const drrr_PETA1 = Number(document.getElementById('drrr_peta1').value);
  const drrr_PETA1Max = Number(document.getElementById('drrr_peta1max').value);
  const drrr_PETA2 = Number(document.getElementById('drrr_peta2').value);
  const drrr_PETA2Max = Number(document.getElementById('drrr_peta2max').value);
  const drrr_PETA3 = Number(document.getElementById('drrr_peta3').value);
  const drrr_PETA3Max = Number(document.getElementById('drrr_peta3max').value);
  const drrr_PETA4 = Number(document.getElementById('drrr_peta4').value);
  const drrr_PETA4Max = Number(document.getElementById('drrr_peta4max').value);

  const drrr_QA1 = Number(document.getElementById('drrr_qa1').value);
  const drrr_QA1Max = Number(document.getElementById('drrr_qa1max').value);
  const drrr_QA2 = Number(document.getElementById('drrr_qa2').value);
  const drrr_QA2Max = Number(document.getElementById('drrr_qa2max').value);

  const drrr_WWTotal = drrr_WW1 + drrr_WW2 + drrr_WW3 + drrr_WW4;
  const drrr_WWMaxTotal = drrr_WW1Max + drrr_WW2Max + drrr_WW3Max + drrr_WW4Max;
  const drrr_WWPercent = (drrr_WWTotal / drrr_WWMaxTotal) * 100;

  const drrr_PETATotal = drrr_PETA1 + drrr_PETA2 + drrr_PETA3 + drrr_PETA4;
  const drrr_PETAMaxTotal = drrr_PETA1Max + drrr_PETA2Max + drrr_PETA3Max + drrr_PETA4Max;
  const drrr_PETAPercent = (drrr_PETATotal / drrr_PETAMaxTotal) * 100;

  const drrr_QATotal = drrr_QA1 + drrr_QA2;
  const drrr_QAMaxTotal = drrr_QA1Max + drrr_QA2Max;
  const drrr_QAPercent = (drrr_QATotal / drrr_QAMaxTotal) * 100;

  const drrr_finalGrade = (drrr_WWPercent * 0.25) + (drrr_PETAPercent * 0.50) + (drrr_QAPercent * 0.25);

  drrrResult.textContent = `The INITIAL grade for DRRR is: ${drrr_finalGrade.toFixed(2)}`;
});

const navHeader = document.querySelector('.nav-header');

let prevScrollPosition = window.pageYOffset;
window.addEventListener('scroll', () => {
  let currentScrollPosition = window.pageYOffset;

  if (window.innedrrridth <= 768) {
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
  if (window.innedrrridth > 768) {
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
