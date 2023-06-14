const pagbasaForm = document.getElementById('pagbasa-grades-form');
const pagbasaResult = document.getElementById('pagbasa-result');

pagbasaForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const pagbasa_WW1 = Number(document.getElementById('pagbasa_ww1').value);
  const pagbasa_WW1Max = Number(document.getElementById('pagbasa_ww1max').value);
  const pagbasa_WW2 = Number(document.getElementById('pagbasa_ww2').value);
  const pagbasa_WW2Max = Number(document.getElementById('pagbasa_ww2max').value);
  const pagbasa_WW3 = Number(document.getElementById('pagbasa_ww3').value);
  const pagbasa_WW3Max = Number(document.getElementById('pagbasa_ww3max').value);
  const pagbasa_WW4 = Number(document.getElementById('pagbasa_ww4').value);
  const pagbasa_WW4Max = Number(document.getElementById('pagbasa_ww4max').value);

  const pagbasa_PETA1 = Number(document.getElementById('pagbasa_peta1').value);
  const pagbasa_PETA1Max = Number(document.getElementById('pagbasa_peta1max').value);
  const pagbasa_PETA2 = Number(document.getElementById('pagbasa_peta2').value);
  const pagbasa_PETA2Max = Number(document.getElementById('pagbasa_peta2max').value);

  const pagbasa_QA1 = Number(document.getElementById('pagbasa_qa1').value);
  const pagbasa_QA1Max = Number(document.getElementById('pagbasa_qa1max').value);
  const pagbasa_QA2 = Number(document.getElementById('pagbasa_qa2').value);
  const pagbasa_QA2Max = Number(document.getElementById('pagbasa_qa2max').value);

  const pagbasa_WWTotal = pagbasa_WW1 + pagbasa_WW2 + pagbasa_WW3 + pagbasa_WW4;
  const pagbasa_WWMaxTotal = pagbasa_WW1Max + pagbasa_WW2Max + pagbasa_WW3Max + pagbasa_WW4Max;
  const pagbasa_WWPercent = (pagbasa_WWTotal / pagbasa_WWMaxTotal) * 100;

  const pagbasa_PETATotal = pagbasa_PETA1 + pagbasa_PETA2;
  const pagbasa_PETAMaxTotal = pagbasa_PETA1Max + pagbasa_PETA2Max;
  const pagbasa_PETAPercent = (pagbasa_PETATotal / pagbasa_PETAMaxTotal) * 100;

  const pagbasa_QATotal = pagbasa_QA1 + pagbasa_QA2;
  const pagbasa_QAMaxTotal = pagbasa_QA1Max + pagbasa_QA2Max;
  const pagbasa_QAPercent = (pagbasa_QATotal / pagbasa_QAMaxTotal) * 100;

  const pagbasa_finalGrade = (pagbasa_WWPercent * 0.25) + (pagbasa_PETAPercent * 0.50) + (pagbasa_QAPercent * 0.25);

  pagbasaResult.textContent = `The INITIAL grade for Pagbasa is: ${pagbasa_finalGrade.toFixed(2)}`;
});

const navHeader = document.querySelector('.nav-header');

let prevScrollPosition = window.pageYOffset;
window.addEventListener('scroll', () => {
  let currentScrollPosition = window.pageYOffset;

  if (window.innepagbasaidth <= 768) {
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
  if (window.innepagbasaidth > 768) {
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
