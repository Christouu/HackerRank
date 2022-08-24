function lonelyinteger(a) {
  let unique;

  for (let i = 0; i <= a.length - 1; i++) {
    unique = a.filter((n) => n === a[i]);

    if (unique.length === 1) break;
  }

  console.log(...unique);
}

lonelyinteger([1, 2, 3, 4, 3, 2, 1]);

// Given an array of integers, where all elements but one occur twice, find the unique element.

// Example
// a = [1, 2, 3, 4, 3, 2, 1]
// The unique element is 4.
