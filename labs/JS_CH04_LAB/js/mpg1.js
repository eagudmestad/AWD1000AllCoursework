'use strict';

const calcMpg = function calcMpg(miles, gallons) {
  return miles / gallons;
};

const onCalculate = function onCalculate(evt) {
  // let miles = document.querySelector('#miles');
  // miles = miles.value;
  // miles = parseFloat(miles);

  const miles = parseFloat(document.querySelector('#miles').value);
  const gallons = parseFloat(document.querySelector('#gallons').value);

  if (miles && miles > 0 && gallons && gallons > 0) {
    const mpg = calcMpg(miles, gallons);
    document.querySelector('#mpg').value = `${mpg.toFixed(0)} mpg`;
  } else {
    document.querySelector('#mpg').innerHTML = `
      <div>Please enter a positive miles.</div>
      <div>Please enter positive gallons.</div>
    `;
  }

  document.querySelector('#miles').focus();
};

const onClear = function onClear(evt) {
  document.querySelector('#miles').value = '';
  document.querySelector('#gallons').value = '';
  document.querySelector('#mpg').value = 'Please enter Miles and Gallons...';

  document.querySelector('#miles').focus();
};

const onFocus = function onFocus(evt) {
  evt.currentTarget.value = '';
};

const onLoad = function onLoad(evt) {
  document.querySelector('#calc-mpg-button').addEventListener('click', onCalculate);
  document.querySelector('#clear-mpg-button').addEventListener('click', onClear);
  // document.querySelectorAll('#miles, #gallons').addEventListener('focus', onFocus);

  // eslint-disable-next-line no-restricted-syntax
  for (const field of document.querySelectorAll('input.form-control')) {
    field.addEventListener('focus', onFocus);
  }
};

window.addEventListener('DOMContentLoaded', onLoad);
