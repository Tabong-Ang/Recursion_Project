function mergeSort(arr) {
    // Base case: arrays with fewer than 2 elements are already sorted
    if (arr.length < 2) {
      return arr;
    }
  
    // Split the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    // Recursively sort each half
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
  
    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
  }
  
  function merge(left, right) {
    const sortedArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Merge the two arrays while comparing elements
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        sortedArray.push(left[leftIndex]);
        leftIndex++; // move left array cursor
      } else {
        sortedArray.push(right[rightIndex]);
        rightIndex++; // move right array cursor
      }
    }
  
    // Concatenate remaining elements
    return sortedArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  // Examples
  console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); 
  console.log(mergeSort([105, 79, 100, 110])); 
  