/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */ // using quick sort
var sortBy = function (arr, fn) {
  // function quick sort
  const quickSort = (arr, leftBound = 0, rightBound = arr.length - 1) => {
    if (leftBound < rightBound) {
      const pivotIdx = partition(arr, leftBound, rightBound);
      quickSort(arr, leftBound, pivotIdx - 1);
      quickSort(arr, pivotIdx, rightBound);
    }
    return arr;
  };

  // function partition
  const partition = (arr, left, right) => {
    const pivot = fn(arr[Math.floor((right + left) / 2)]);
    while (left <= right) {
      while (fn(arr[left]) < pivot) left++;
      while (fn(arr[right]) > pivot) right--;

      if (left <= right) {
        // swap
        const temp = arr[right];
        arr[right] = arr[left];
        arr[left] = temp;

        left++;
        right--;
      }
    }

    return left;
  };

  return quickSort(arr);
};

// Example 1:

// Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
// Output: [1, 2, 3, 4, 5]
// Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.
// Example 2:

// Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
// Output: [{"x": -1}, {"x": 0}, {"x": 1}]
// Explanation: fn returns the value for the "x" key. So the array is sorted based on that value.
// Example 3:

// Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
// Output: [[10, 1], [5, 2], [3, 4]]
// Explanation: arr is sorted in ascending order by number at index=1.
