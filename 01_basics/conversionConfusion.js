let num = "33abc";
number = parseInt(num); // parses only integers
const numberOrNot = Number(num)
console.log(numberOrNot); // NaN
console.log(number);
// "33" => 33
// "33abc" => NaN

