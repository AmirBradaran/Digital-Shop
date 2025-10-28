export const mobileValidations = (mobile) => {
  const regex = /^(?:\+98|0|9)\d{9,11}$/;
  return regex.test(mobile);
};
export const convertNumberEngToPersian = (engNumber) => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return engNumber.toString().replace(/\d/g, (digit) => persianDigits[+digit]);
};
