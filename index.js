function isPalindrome(word) {
  const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the cleaned word
  const reversedWord = cleanedWord.split('').reverse().join('');

  // Compare the cleaned word with the reversed word
  return cleanedWord === reversedWord;
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
