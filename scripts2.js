const pr1Form = document.getElementById('pr1-grades-form');
const pr1Result = document.getElementById('pr1-result');

pr1Form.addEventListener('submit', (event) => {
  event.preventDefault();

  const WW1 = Number(document.getElementById('ww1').value);
  const WW2 = Number(document.getElementById('ww2').value);
  const WW3 = Number(document.getElementById('ww3').value);
  const WW4 = Number(document.getElementById('ww4').value);

  const WWW1 = Number(document.getElementById('ww1max').value);
  const WWW2 = Number(document.getElementById('ww2max').value);
  const WWW3 = Number(document.getElementById('ww3max').value);
  const WWW4 = Number(document.getElementById('ww4max').value);

  const PETA1 = Number(document.getElementById('peta1').value);
  const PETA2 = Number(document.getElementById('peta2').value);

  const PETAA1 = Number(document.getElementById('peta1max').value);
  const PETAA2 = Number(document.getElementById('peta2max').value);

  const QA1 = Number(document.getElementById('qa1').value);
  const QA2 = Number(document.getElementById('qa2').value);
  const QATotal = Number(document.getElementById('qa1max').value) + Number(document.getElementById('qa2max').value);

  const WW = WW1 + WW2 + WW3 + WW4;
  const WWW = WWW1 + WWW2 + WWW3 + WWW4;
  const WW_T = (WW / WWW) * 100;

  const PETA = PETA1 + PETA2;
  const PETAA = PETAA1 + PETAA2;
  const PETA_T = (PETA / PETAA) * 100;

  const QA = QA1 + QA2;
  const QA_T = (QA / QATotal) * 100;

  const finalGrade = (WW_T * 0.25) + (PETA_T * 0.45) + (QA_T * 0.30);

  pr1Result.textContent = `The INITIAL grade for Practical Research 1 is: ${finalGrade.toFixed(2)}`;
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
