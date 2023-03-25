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

// O(n)
function pairSum2(arr, target) {
  const nums = {};
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (nums[complement] !== undefined) {
      return [nums[complement], i];
    }
    nums[arr[i]] = i;
  }
}

function pairSumRecursive(arr, target, startIndex = 0) {
  if (startIndex >= arr.length - 1) {
    return undefined;
  }

  let num = arr[startIndex];
  for (let i = startIndex + 1; i < arr.length; i++) {
    if (num + arr[i] === target) {
      return [startIndex, i];
    }
  }

  return pairSumRecursive(arr, target, startIndex + 1);
}

function pairSumRecursive2(arr, target, startIndex = 0, seenNums = {}) {
  if (startIndex >= arr.length) {
    return undefined;
  }

  let num = arr[startIndex];
  let complement = target - num;
  if (seenNums[complement] !== undefined) {
    return [seenNums[complement], startIndex];
  }

  seenNums[num] = startIndex;
  return pairSumRecursive2(arr, target, startIndex + 1, seenNums);
}

console.log("\nPair Sum\n");

console.log(pairSum([1, 2, 3, 4, 5], 9));
console.log(pairSum([3, 2, 5, 4, 1], 8));
console.log(pairSum([4, 7, 9, 2, 5, 1], 5));

console.log("\nPair Sum 2\n");

console.log(pairSum2([1, 2, 3, 4, 5], 9));
console.log(pairSum2([3, 2, 5, 4, 1], 8));
console.log(pairSum2([4, 7, 9, 2, 5, 1], 5));

console.log("\nPair Sum Recursive\n");

console.log(pairSum([1, 2, 3, 4, 5], 9));
console.log(pairSum([3, 2, 5, 4, 1], 8));
console.log(pairSum([4, 7, 9, 2, 5, 1], 5));

console.log("\nPair Sum Recursive 2\n");

console.log(pairSum2([1, 2, 3, 4, 5], 9));
console.log(pairSum2([3, 2, 5, 4, 1], 8));
console.log(pairSum2([4, 7, 9, 2, 5, 1], 5));
