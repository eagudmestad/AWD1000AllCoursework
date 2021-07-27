'use strict';

const calcMpg = (miles, gallons) => miles / gallons;

const onFocus = (evt) => {
  // eslint-disable-next-line
  evt.currentTarget.value = '';
};

window.addEventListener('DOMContentLoaded', () => {
  document
    .querySelector('#mpg-form')
    .addEventListener('submit', (evt) => {
      evt.preventDefault();

      const miles = parseFloat(document.querySelector('#miles').value);
      const gallons = parseFloat(document.querySelector('#gallons').value);

      console.log(`miles = ${miles} gallons = ${gallons}`);

      if (miles && miles > 0 && gallons && gallons > 0) {
        const mpg = calcMpg(miles, gallons);
        document.querySelector('#mpg').innerHTML = `${mpg.toFixed(0)} mpg`;
      } else {
        document.querySelector('#mpg').innerHTML = `
        <div>Please enter a positive miles.</div>
        <div>Please enter positive gallons.</div>
      `;
      }

      document.querySelector('#miles').focus();
    });

  document
    .querySelector('#mpg-form')
    .addEventListener('reset', (evt) => {
      evt.preventDefault();

      document.querySelector('#miles').value = '';
      document.querySelector('#gallons').value = '';
      document.querySelector('#mpg').value =
        'Please enter Miles and Gallons...';

      document.querySelector('#miles').focus();
    });

  // eslint-disable-next-line no-restricted-syntax
  for (const field of document.querySelectorAll('input.form-control')) {
    field.addEventListener('focus', onFocus);
  }
});
