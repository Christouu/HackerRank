// function sockMerch(n, arr) {
//   let matches = 0;
//   console.log(arr);

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         matches++;
//         arr.splice(i, 1);
//         arr.splice(j - 1, 1);
//         console.log(arr);
//         j = 1;
//         i = 0;
//       }
//     }
//   }

//   console.log(matches);
// }

// function sockMerchant(n, ar) {
//   // Write your code here
//   const uniqueValues = [...new Set(ar)];
//   let count = 0;
//   uniqueValues.forEach((value) => {
//     const filterValues = ar.filter((element) => element == value);
//     console.log(filterValues);
//     const pairsNumber = Math.floor(filterValues.length / 2);
//     count += pairsNumber;
//   });
//   console.log(count);
// }

// sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);

// sockMerch(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
// sockMerch(20, [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5]);

// There is a large pile of socks that must be paired by color.
// Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
// n = 7;
//ar = [1,2,1,2,1,3,2]

// There is one pair of color 1 and one of color 2 . There are three odd socks left, one of each color. The number of pairs is 2.
// The second function is from the internet because i wanted to see different solutions
