/** @format */

export class Validator {
  isRequired(item) {
    return item.value == '';
  }
  isEmail(item) {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(item.value);
  }
  isPhone(item) {
    const phoneRegex = /^\+\d{12}$/;
    return phoneRegex.test(item.value);
  }
  isDate(item) {
    const dataRegex = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/;
    return dataRegex.test(item.value);
  }
  confirmPassword(item, itemNext) {
    return item.value == itemNext.value;
  }
}
