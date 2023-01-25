const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {

    it("should take a string as an argument and return a new reversed version of the string", () => {
      const str = 'Hello World!';
      const reverseStr = "!dlroW olleH";
      const algo = new Algo().reverse(str);
      expect(algo).toEqual(reverseStr);
    });

    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
   it("should take a string as an argument and return a new reversed version of the string", () => {
     const str = "racecar";
     const algo = new Algo().isPalindrome(str);
     expect(algo).toEqual(true);
     
   }); 
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
  });
});
