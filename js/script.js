/** @format */
import { Validator } from './modules/classValidator.js';

const formItems = document.querySelectorAll('input');
const submitButton = document.getElementById('submitButton');
const form = document.querySelector('form');

const validator = new Validator();

const validationMap = new Map([
  ['required', validator.isRequired],
  ['phone', validator.isPhone],
  ['email', validator.isEmail],
  ['birth_date', validator.isDate],
  ['password', validator.confirmPassword],
]);

const outputError = (item, isValid) => {
  let error = 0;
  if (isValid) {
    item.parentNode.classList.remove('error');
  } else {
    item.parentNode.classList.add('error');
    error++;
  }
  return error;
};
const validateForm = (itemList) => {
  let formErrorCount = 0;
  for (let i = 0; i < itemList.length; i++) {
    if (itemList[i].hasAttribute('required')) {
      const validationMethod = validationMap.get('required');
      formErrorCount =
        formErrorCount +
        outputError(itemList[i], !validationMethod(itemList[i]));
    }
    if (validationMap.has(itemList[i].id) && itemList[i].value != '') {
      const validationMethod = validationMap.get(itemList[i].id);
      formErrorCount =
        formErrorCount +
        outputError(
          itemList[i],
          validationMethod(itemList[i], itemList[i + 1])
        );
    }
  }
  return formErrorCount;
};

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (validateForm(formItems) == 0) {
    form.submit();
  }
});
