function fiveSort(nums) {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;
  while (leftPointer < rightPointer) {
    if (nums[leftPointer] === 5) {
      if (nums[rightPointer] !== 5) {
        let temp = nums[rightPointer];
        nums[rightPointer] = nums[leftPointer];
        nums[leftPointer] = temp;

        leftPointer += 1;
        rightPointer -= 1;
      } else {
        rightPointer -= 1;
      }
    } else {
      leftPointer += 1;
      if (nums[rightPointer] === 5) {
        rightPointer -= 1;
      }
    }
  }

  return nums;
}

console.log(fiveSort([12, 5, 1, 5, 12, 7]));
console.log(fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]));
console.log(fiveSort([5, 5, 6, 5, 5, 5, 5]));
