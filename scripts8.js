const litForm = document.getElementById('lit-grades-form');
const litResult = document.getElementById('lit-result');

litForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const lit_WW1 = Number(document.getElementById('lit_ww1').value);
  const lit_WW1Max = Number(document.getElementById('lit_ww1max').value);
  const lit_WW2 = Number(document.getElementById('lit_ww2').value);
  const lit_WW2Max = Number(document.getElementById('lit_ww2max').value);
  const lit_WW3 = Number(document.getElementById('lit_ww3').value);
  const lit_WW3Max = Number(document.getElementById('lit_ww3max').value);
  const lit_WW4 = Number(document.getElementById('lit_ww4').value);
  const lit_WW4Max = Number(document.getElementById('lit_ww4max').value);
  
  const lit_PETA1 = Number(document.getElementById('lit_peta1').value);
  const lit_PETA1Max = Number(document.getElementById('lit_peta1max').value);
  const lit_PETA2 = Number(document.getElementById('lit_peta2').value);
  const lit_PETA2Max = Number(document.getElementById('lit_peta2max').value);

  const lit_QA1 = Number(document.getElementById('lit_qa1').value);
  const lit_QA1Max = Number(document.getElementById('lit_qa1max').value);
  const lit_QA2 = Number(document.getElementById('lit_qa2').value);
  const lit_QA2Max = Number(document.getElementById('lit_qa2max').value);

  const lit_WWTotal = lit_WW1 + lit_WW2 + lit_WW3 + lit_WW4;
  const lit_WWMaxTotal = lit_WW1Max + lit_WW2Max + lit_WW3Max + lit_WW4Max;
  const lit_WWPercent = (lit_WWTotal / lit_WWMaxTotal) * 100;

  const lit_PETATotal = lit_PETA1 + lit_PETA2;
  const lit_PETAMaxTotal = lit_PETA1Max + lit_PETA2Max;
  const lit_PETAPercent = (lit_PETATotal / lit_PETAMaxTotal) * 100;

  const lit_QATotal = lit_QA1 + lit_QA2;
  const lit_QAMaxTotal = lit_QA1Max + lit_QA2Max;
  const lit_QAPercent = (lit_QATotal / lit_QAMaxTotal) * 100;

  const lit_finalGrade = (lit_WWPercent * 0.25) + (lit_PETAPercent * 0.50) + (lit_QAPercent * 0.25);

  litResult.textContent = `The INITIAL grade for 21st is: ${lit_finalGrade.toFixed(2)}`;
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
