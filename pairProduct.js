function pairProduct(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] * nums[j] === target) {
        return [i, j];
      }
    }
  }
}

function pairProduct2(nums, target) {
  let prevNums = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target / nums[i];
    if (prevNums[complement] !== undefined) {
      return [prevNums[complement], i];
    }

    prevNums[nums[i]] = i;
  }
}

function pairProductRecursive(nums, target, startIndex = 0) {
  if (startIndex >= nums.length - 1) return;

  for (let i = startIndex + 1; i < nums.length; i++) {
    if (nums[startIndex] * nums[i] === target) {
      return [startIndex, i];
    }
  }

  return pairProductRecursive(nums, target, startIndex + 1);
}

function pairProductRecursive2(nums, target, startIndex = 0, seenNums = {}) {
  if (startIndex > nums.length - 1) return;

  let complement = target / nums[startIndex];
  if (seenNums[complement] !== undefined) {
    return [seenNums[complement], startIndex];
  }

  return pairProductRecursive(nums, target, startIndex + 1, seenNums);
}

console.log(pairProduct([1, 2, 3, 4, 5], 12));
console.log(pairProduct([3, 2, 5, 4, 1], 8));
console.log(pairProduct([4, 7, 9, 2, 5, 1], 5));

console.log("\nPair Product 2\n");

console.log(pairProduct2([1, 2, 3, 4, 5], 12));
console.log(pairProduct2([3, 2, 5, 4, 1], 8));
console.log(pairProduct2([4, 7, 9, 2, 5, 1], 5));

console.log("\nPair Product Recursive\n");

console.log(pairProductRecursive([1, 2, 3, 4, 5], 12));
console.log(pairProductRecursive([3, 2, 5, 4, 1], 8));
console.log(pairProductRecursive([4, 7, 9, 2, 5, 1], 5));

console.log("\nPair Product Recursive 2\n");

console.log(pairProductRecursive2([1, 2, 3, 4, 5], 12));
console.log(pairProductRecursive2([3, 2, 5, 4, 1], 8));
console.log(pairProductRecursive2([4, 7, 9, 2, 5, 1], 5));
