/** @format */

let formItems = document.querySelectorAll('input');
const submit = document.getElementById('submit');

class Validator {
  static isEmail(item) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (item.id == 'email') {
      return emailRegex.test(item.value);
    } else {
      return true;
    }
  }
  static isPhone(item) {
    const phoneRegex = /^\+\d{12}$/;
    if (item.id == 'phone') {
      return phoneRegex.test(item.value);
    } else {
      return true;
    }
  }
  static isDate(item) {
    const dataRegex = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/;
    if (item.id == 'birth_date') {
      return dataRegex.test(item.value);
    } else {
      return true;
    }
  }
  static isRequired(item) {
    return item.hasAttribute('required') && item.value == '';
  }
  static confirmPassword(item) {
    if (item.id == 'password' && item.value == item.nextSibling.value) {
      return false;
    } else {
      return true;
    }
  }
  static validateForm(itemList) {
    for (let i = 0; i < itemList.length; i++) {
      if (
        this.isRequired(itemList[i]) ||
        !this.isEmail(itemList[i]) ||
        !this.isPhone(itemList[i]) ||
        !this.isDate(itemList[i]) ||
        !this.confirmPassword(itemList[i])
      ) {
        itemList[i].parentNode.classList.add('error');
      } else {
        itemList[i].parentNode.classList.remove('error');
      }
    }
  }
}
submit.addEventListener('click', () => {
  Validator.validateForm(formItems);
});
