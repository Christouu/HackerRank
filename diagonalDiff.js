function diagonalDifference(arr) {
  let diagonal1 = 0;
  let diagonal2 = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    diagonal1 += arr[i][i];
    diagonal2 += arr[i][arr.length - i - 1]; //2 2
  }

  console.log(Math.abs(diagonal1 - diagonal2));
}

diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// 1 2 3
// 4 5 6
// 9 8 9
// The left-to-right diagonal = 1 + 5 + 9= 15. The right to left diagonal = 3 + 5 + 9 = 17.
// Their absolute difference is |15 - 17| = 2.
