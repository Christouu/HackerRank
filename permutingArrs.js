function twoArrays(k, A, B) {
  // Write your code here

  let sum = [];

  let sortedA = A.sort();
  let sortedB = B.sort((a, b) => b - a);

  for (let i = 0; i <= sortedA.length - 1; i++) {
    sum.push(sortedA[i] + sortedB[i]);
  }

  let everyIsBiggerThanK = sum.every((n) => n >= k);

  if (everyIsBiggerThanK) {
    return "YES";
  } else {
    return "NO";
  }
}

// twoArrays(10, [2, 1, 3], [7, 8, 9]);
twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]);
