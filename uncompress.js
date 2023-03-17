function uncompress(string) {
  let result = "";

  let currentNum = "";
  for (let i = 0; i < string.length; i++) {
    if (!isNaN(parseInt(string[i]))) {
      currentNum += string[i];
    } else {
      let currentMultiple = parseInt(currentNum);
      for (let n = 0; n < currentMultiple; n++) {
        result += string[i];
        currentNum = "";
      }
    }
  }
  return result;
}

function uncompress2(string) {
  let result = "";
  let j = 0;
  let capturedString = "";
  let capturedNum = "";

  while (j < string.length) {
    // Is it a number
    if (!isNaN(parseInt(string[j]))) {
      capturedNum += string[j];
    }

    // Is is a letter
    if (isNaN(parseInt(string[j]))) {
      capturedString += string[j];
      // If no next item or next item is number add string * multiple to result
      if (!string[j + 1] || !isNaN(parseInt(string[j + 1]))) {
        currentMultiple = parseInt(capturedNum);
        for (let i = 0; i < currentMultiple; i++) {
          result += capturedString;
        }
        capturedString = "";
        capturedNum = "";
      }
    }
    j += 1;
  }
  return result;
}

console.log(uncompress("2c3e10o9r"));
console.log(uncompress("2c3e10o9r2c3e10o9r"));
console.log(uncompress("20i3e10q100o9r"));

console.log("\nuncompress 2\n");

console.log(uncompress2("2test3no"));
console.log(uncompress2("2test3no10L"));
console.log(uncompress2("2test3no10L4o"));
