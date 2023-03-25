// This function returns the most frequent character in a string

function mostFreqChar(s) {
  const charObj = {};
  for (let char of s) {
    if (!charObj[char]) {
      charObj[char] = 0;
    }
    charObj[char] += 1;
  }

  let mostFreq = s[0];
  for (let char of s) {
    if (charObj[char] > charObj[mostFreq]) {
      mostFreq = char;
    }
  }
  return mostFreq;
}

console.log(mostFreqChar("test"));
console.log(mostFreqChar("bookeeper"));
console.log(mostFreqChar("mississippi"));
