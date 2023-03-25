// This function returns the most frequent character in a string

function mostFreqChar(s) {
  const charObj = {};

  for (let char of s) {
    if (!charObj[char]) {
      charObj[char] = 0;
    }

    charObj[char] += 1;
  }

  let mostFreq = -Infinity;
  let mostFreqKey = null;
  for (let key in charObj) {
    if (charObj[key] > mostFreq) {
      mostFreqKey = key;
      mostFreq = charObj[key];
    }
  }
  return mostFreqKey;
}

console.log(mostFreqChar("test"));
console.log(mostFreqChar("bookeeper"));
console.log(mostFreqChar("mississippi"));
