// Challenge 1

const theNum = (num) => {
  return num + 42;
}

console.log(theNum(123));

// Challenge 2

const oldMan = (yearBorn) => {
  return 2099 - yearBorn;
}

console.log(oldMan(1997));


// Extra Challenge 1

const evenOdd = (i) => {
  if (i % 2 === 0) {
    return "Even";
  } else return "Odd";
}

console.log(evenOdd(1124356));

// Extra Challenge 2

const opposite = (i) => {
  return -i;
}

console.log(opposite(23));

// Extra Challenge 3

const palindrome = (word) => {
  const splitWord = word.split("");
  const reverseWord = splitWord.reverse();
  const joinWord = reverseWord.join("");
  if (word === joinWord) {
    return true;
  } else return false;
}

console.log(palindrome("racecar"));
