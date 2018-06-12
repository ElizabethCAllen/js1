// takehome
function powerOfTwo(number) {
  if(!isNaN(number)){
    return number * number;
  } else {
    alert("NaN");
    powerOfTwo(parseInt(prompt("That wasn't a number! What number?", '2')));
  }
};

let answer = powerOfTwo(parseInt(prompt("What do you want to square?", '2')));
alert(answer);

// takehome 2
function parseString(string) {
  let parsedLetter= string.charAt(0).toUpperCase();
  let stringArr = string.split('');
  stringArr.splice(0, 1, parsedLetter);
  string = stringArr.join('');//replaces the first letter with the new uppercase
  if (string.charAt(string.length -1) !== '.') string = string+'.';
  return string;
}
let answer2 = parseString(prompt("type something in.", "i love chocolate"));
alert(answer2);

// takehome4
function reverseHalves(string) {
  let halfIndex = string.length / 2;
  let firstHalf = string.substring(0, string.length / 2);
  let secondHalf = string.substring(halfIndex - 1, string.length - 1);
  alert(`${secondHalf}${firstHalf}`);
}
// reverseHalves(prompt("give me a sentence", "hello world!"));
//
// takehome 5
function isPalindrome(string)() {
  let reversed = string
                        .split('')//string.split turns the string into an array
                        .reverse()//only works on arrays
                        .join('')//returns the array to a string
  if (string ===reversed) return true;
  return false;

  }
}
