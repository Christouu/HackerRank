function twoArrays(k, A, B) {
  // Write your code here

  let sortedA = A.sort();
  let sortedB = B.sort();

  let aIndex = 0;
  let bIndex = sortedB.length - 1;

  while (aIndex < sortedA.length && bIndex >= 0) {
    if (sortedA[aIndex] + sortedB[bIndex] < k) return "NO";
    aIndex++;
    bIndex--;
  }

  return "YES";
}

// twoArrays(10, [2, 1, 3], [7, 8, 9]);
twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]);
