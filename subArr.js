function birthday(s, d, m) {
  let matches = 0;

  for (let i = 0; i < s.length; i++) {
    let sub_arr = s.slice(i, i + m);
    let sum = sub_arr.reduce((prev, curr) => prev + curr);

    if (sum === d) matches++;
  }

  console.log(matches);
}

birthday([2, 2, 1, 3, 2], 4, 2);

// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.

// Lily wants to find segments summing to Ron's birth day, d = 4 with a length equalling his birth month, m = 2 .
//  In this case, there are two segments meeting her criteria: [2,2]  and [1,3].
