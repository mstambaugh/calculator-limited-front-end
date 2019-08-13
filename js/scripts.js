var add = function(number1, number2) {
  return number1 + number2;
};
var sub = function(number1, number2) {
  return number1 - number2;
};
var mul = function(number1, number2) {
  return number1 * number2;
};
var div = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = div(number1, number2);
alert(result);
