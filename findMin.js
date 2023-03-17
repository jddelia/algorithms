// This function returns the min value in an array

function findMin(arr) {
  if (arr.length < 1) return null;

  let min = Infinity;
  for (let num of arr) {
    if (num < min) min = num;
  }
  return min;
}

console.log(findMin([15, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 2
console.log(findMin([13, 93, 84, 27, 36, 54, 44, 63, 22, 14])); // 13
console.log(findMin([17, 25, 34, 4040, 532, 786, 37, 80, 9, 23, 10])); // 9
console.log(findMin([])); // null
