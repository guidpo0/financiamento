const infoContainerClass = document.querySelector('.info-container').classList;
const openInfoButton = document.querySelector('.open-info-button');
const closeInfoButton = document.querySelector('.close-info-button');
const simulateButton = document.querySelector('.simulate-button');

window.onload = () => {
  const valueInput = document.querySelector('.value-input');
  const termYearsInput = document.querySelector('.term-years-input');
  const interestPerYearInput = document.querySelector('.interest-per-year-input');

  valueInput.value = 200000;
  termYearsInput.value = 20;
  interestPerYearInput.value = 0.08;
};

function makeInfoVisible() {
  if (!infoContainerClass.contains('visible')) infoContainerClass.add('visible');
}

function makeInfoInvisible() {
  if (infoContainerClass.contains('visible')) infoContainerClass.remove('visible');
}

function simulateFinancing() {
  const termMonths = document.querySelector('.term-months');
  const interestPerMonth = document.querySelector('.interest-per-month');
  const accruedInterest = document.querySelector('.accrued-interest');
}

function checkFormValidity() {
  const financingForm = document.querySelector('.financing-form');
  if (financingForm.checkValidity()) simulateFinancing();
  /* eslint-disable */
  if (!financingForm.checkValidity()) alert('Preencha todos os campos');
  /* eslint-enable */
}

openInfoButton.addEventListener('click', makeInfoVisible);
closeInfoButton.addEventListener('click', makeInfoInvisible);
simulateButton.addEventListener('click', checkFormValidity);
