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

//There are two n-element arrays of integers, A and B.
// Permute them into some A' and B' such that the relation A'[i] + B'[i] >= k  holds for all i .
// There will be q queries consisting of A, B and k .
// For each query, return YES if some permutation ,  satisfying the relation exists. Otherwise, return NO.

// 3 10        A[] and B[] size n = 3, k = 10
// 2 1 3       A = [2, 1, 3]
// 7 8 9       B = [7, 8, 9]

// 4 5         A[] and B[] size n = 4, k = 5
// 1 2 2 1     A = [1, 2, 2, 1]
// 3 3 3 4     B = [3, 3, 3, 4]

// There are two queries:

// 1.Permute these into A' = [1,2,3] and B' = [9,8,7] so that the following statements are true:
// A[0] + B[0] = 1 + 9 >= k (10)
// A[1] + B[1] = 2 + 8 >= k (10)
// A[2] + B[2] = 3 + 7 >= k (10)
// A = [1,2,2,1],B = [3,3,3,4] , k = 5 . To permute A and B into a valid A' and B',
// there must be at least three numbers in A that are greater than 1.
