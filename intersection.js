function intersection(arr1, arr2) {
  const elements = {};
  const largestLength = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < largestLength; i++) {
    if (!elements[arr1[i]]) {
      elements[arr1[i]] = 1;
    } else {
      elements[arr1[i]] += 1;
    }

    if (!elements[arr2[i]]) {
      elements[arr2[i]] = 1;
    } else {
      elements[arr2[i]] += 1;
    }
  }

  const resultArr = [];
  for (key in elements) {
    if (elements[key] > 1) {
      resultArr.push(key);
    }
  }

  return resultArr;
}

console.log(intersection(["a", "b", "c"], ["c", "t", "a"]));
console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]));
console.log(intersection([4, 2, 1], [1, 2, 4, 6]));
