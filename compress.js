// function compress(s) {
//   let result = "";

//   let currentString = "";
//   for (let i = 0; i < s.length; i++) {
//     if (
//       currentString.length < 1 ||
//       s[i] === currentString[currentString.length - 1]
//     ) {
//       currentString += s[i];
//     }

//     if (s[i] !== currentString[currentString.length - 1] || !s[i + 1]) {
//       if (currentString.length === 1) {
//         result += currentString[0];
//       } else {
//         result += currentString.length.toString() + currentString[0];
//       }
//       currentString = s[i];
//     }
//   }
//   return result;
// }

function compress(s) {
  let result = "";

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
        result += currentString[0];
      } else {
        result += currentString.length.toString() + currentString[0];
      }
      currentString = "";
    }
  }
  return result;
}

console.log(compress("aaabb"));
console.log(compress("ccaaatsss"));
console.log(compress("ssssbbz"));
console.log(compress("aaabbc"));
