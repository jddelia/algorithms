// This function returns the max value in an array

function findMax(arr) {
  if (arr.length < 1) return null;

  let max = -Infinity;
  for (let val of arr) {
    if (val > max) max = val;
  }

  return max;
}

console.log(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 10
console.log(findMax([13, 93, 84, 27, 36, 54, 44, 63, 22, 14])); // 93
console.log(findMax([1, 2, 34, 4040, 532, 786, 37, 80, 9, 23, 10])); // 4040
console.log(findMax([]));
