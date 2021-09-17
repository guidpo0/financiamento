const infoContainerClass = document.querySelector('.info-container').classList;
const openInfoButton = document.querySelector('.open-info-button');
const closeInfoButton = document.querySelector('.close-info-button');
const simulateButton = document.querySelector('.simulate-button');
const valueInput = document.querySelector('.value-input');
const termYearsInput = document.querySelector('.term-years-input');
const interestPerYearInput = document.querySelector('.interest-per-year-input');

valueInput.value = 200000;
termYearsInput.value = 20;
interestPerYearInput.value = 0.08;

function makeInfoVisible() {
  if (!infoContainerClass.contains('visible')) infoContainerClass.add('visible');
}

function makeInfoInvisible() {
  if (infoContainerClass.contains('visible')) infoContainerClass.remove('visible');
}

function constructSimulatedTable(lines, value, amortization, monthInterest) {
  const tableBody = document.querySelector('.table-body');
  for (let index = 0; index < lines; index += 1) {
    const newLine = document.createElement('tr');
    const installmentColumn = document.createElement('td');
    const amortizationColumn = document.createElement('td');
    const feesColumn = document.createElement('td');
    const totalColumn = document.createElement('td');

    installmentColumn.innerText = index + 1;
    amortizationColumn.innerText = amortization.toFixed(2);
    feesColumn.innerText = ((value - (index * amortization)) * monthInterest).toFixed(2);
    totalColumn.innerHTML = (
      amortization + (value - (index * amortization)) * monthInterest
    ).toFixed(2);

    [installmentColumn, amortizationColumn, feesColumn, totalColumn]
      .forEach((item) => newLine.appendChild(item));
    tableBody.appendChild(newLine);
  }
}

function simulateFinancing() {
  const resultsContainerClass = document.querySelector('.results-container').classList;
  const termMonths = document.querySelector('.term-months');
  const interestPerMonth = document.querySelector('.interest-per-month');
  const accruedInterest = document.querySelector('.accrued-interest');

  const value = parseFloat(valueInput.value);
  const years = parseInt(termYearsInput.value, 10);
  const interestPerYear = parseFloat(interestPerYearInput.value);
  const installmentQuantity = years * 12;
  const amortization = value / installmentQuantity;
  const monthInterest = ((1 + interestPerYear) ** (1 / 12)) - 1;
  let totalInterestPayed = 0;

  termMonths.innerText = installmentQuantity;
  interestPerMonth.innerText = monthInterest.toFixed(15);

  for (let index = 0; index < installmentQuantity; index += 1) {
    totalInterestPayed += (value - (index * amortization)) * monthInterest;
  }
  accruedInterest.innerText = totalInterestPayed.toFixed(2);

  constructSimulatedTable(5, value, amortization, monthInterest);

  if (!resultsContainerClass.contains('visible')) resultsContainerClass.add('visible');
}

function checkFormValidity() {
  const financingForm = document.querySelector('.financing-form');
  if (financingForm.checkValidity()) {
    const tableLines = document.querySelectorAll('tr');
    tableLines.forEach((line, index) => {
      if (index !== 0) {
        line.remove();
      }
    });
    simulateFinancing();
  }
  /* eslint-disable */
  if (!financingForm.checkValidity()) alert('Preencha todos os campos');
  /* eslint-enable */
}

openInfoButton.addEventListener('click', makeInfoVisible);
closeInfoButton.addEventListener('click', makeInfoInvisible);
simulateButton.addEventListener('click', checkFormValidity);
