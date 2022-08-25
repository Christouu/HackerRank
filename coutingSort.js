function countingSort(arr) {
  let countingArr = new Array(arr.length).fill(0);

  for (const num of arr) {
    countingArr[num]++;
  }

  console.log(countingArr);
}

countingSort([1, 2, 3, 1, 2, 4, 0]);

// Another sorting method, the counting sort, does not require comparison.
// Instead, you create an integer array whose index range covers the entire range of values in your array to sort.
// Each time a value occurs in the original array, you increment the counter at that index.
// At the end, run through your counting array, printing the value of each non-zero valued index that number of times.

//arr = [1,1,3,2,1]

// All of the values are in the range [0...3], so create an array of zeros, .
// The results of each iteration follow:
// i	arr[i]	result
// 0	1	[0, 1, 0, 0]
// 1	1	[0, 2, 0, 0]
// 2	3	[0, 2, 0, 1]
// 3	2	[0, 2, 1, 1]
// 4	1	[0, 3, 1, 1]

// The frequency array is [0,3,1,1].
// These values can be used to create the sorted array as well: [1,1,1,2,3].
