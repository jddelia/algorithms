// This function returns the pair of indices in an array that sum to a given target

// O(n^2)
function pairSum(arr, target) {
  let startIndex = 0;
  while (startIndex < arr.length) {
    let num1 = arr[startIndex];
    for (let i = startIndex + 1; i < arr.length; i++) {
      if (num1 + arr[i] === target) {
        return [startIndex, i];
      }
    }
    startIndex += 1;
  }
}

function pairSum2(arr, target) {
  const nums = {};
  for (let i = 0; i < arr.length; i++) {
    let numsKey = target - arr[i];
    if (nums[numsKey] !== undefined) {
      return [nums[numsKey], i];
    }
    nums[arr[i]] = i;
  }
}

console.log(pairSum([1, 2, 3, 4, 5], 9));
console.log(pairSum([3, 2, 5, 4, 1], 8));
console.log(pairSum([4, 7, 9, 2, 5, 1], 5));

console.log("\nPAIR SUM 2\n");

console.log(pairSum2([1, 2, 3, 4, 5], 9));
console.log(pairSum2([3, 2, 5, 4, 1], 8));
console.log(pairSum2([4, 7, 9, 2, 5, 1], 5));
