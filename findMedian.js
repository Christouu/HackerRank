function findMedian(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });

  let median = Math.floor(arr.length / 2);

  if (arr.length % 2) return arr[median];
  else return (arr[median - 1] + arr[median]) / 2;
}

findMedian([0, 1, 2, 3, 4, 5, 6]);

//This function finds the median of an array
