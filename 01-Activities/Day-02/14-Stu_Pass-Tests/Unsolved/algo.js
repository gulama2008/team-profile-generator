function Algo() {}

Algo.prototype.reverse = function(str) {
  // TODO: Your code here
  let reverseStr = str.split("").reverse().join("");
  return reverseStr;
};

Algo.prototype.isPalindrome = function (str) {
  
  let reverseStr = str.reverse();
  return str === reverseStr;
  // TODO: Your code here
};

Algo.prototype.capitalize = function(str) {
  // TODO: Your code here 
};

console.log(new Algo().reverse('abccd')); 

module.exports = Algo;
