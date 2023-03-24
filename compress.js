function compress(s) {
  let result = [];

  let currentString = "";
  for (let i = 0; i < s.length; i++) {
    if (
      currentString.length < 1 ||
      s[i] === currentString[currentString.length - 1]
    ) {
      currentString += s[i];
    }

    if (s[i + 1] !== currentString[currentString.length - 1]) {
      if (currentString.length === 1) {
        result.push(currentString[0]);
      } else {
        result.push(currentString.length, currentString[0]);
      }
      currentString = "";
    }
  }
  return result.join("");
}

console.log(compress("aaabb"));
console.log(compress("ccaaatsss"));
console.log(compress("ssssbbz"));
console.log(
  compress(
    "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy"
  )
);
