export function twoSum(array1, array2) {
  const num1 = Number(array1.join(''));
  const num2 = Number(array2.join(''));
  return num1 + num2;
}
export function luckyNumber(value) {
  const str = String(value);
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
export function errorMessage(input) {
  if (input === '' || input === null || input === undefined) {
    return 'Required field';
  }
  const value = Number(input);
  if (!value) {
    return 'Must be a number besides 0';
  }
  return '';
}