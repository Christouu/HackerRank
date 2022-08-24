function matchingStrings(strings, queries) {
  let match = [];

  for (let i = 0; i <= queries.length - 1; i++) {
    let filtered = strings.filter((s) => s === queries[i]).length;
    match.push(filtered);
  }

  return match;
}

// Function Description

// Complete the function matchingStrings in the editor below.
// The function must return an array of integers representing the frequency of occurrence of each query string in strings.

// matchingStrings has the following parameters:

// string strings[n] - an array of strings to search
// string queries[q] - an array of query strings
// Returns

// int[q]: an array of results for each query
// Input Format

// The first line contains and integer , the size of strings.
// Each of the next  lines contains a string strings[i] .
// The next line contains , the size of queries.
// Each of the next  lines contains a string queries[i].

//Input
// 4
// aba
// baba
// aba
// xzxb
// 3
// aba
// xzxb
// ab

//Output
// 2 -> 2 times there is a aba match in the 4 strings above
// 1 -> 1 times there is xzxb match
// 0 -> times there is ab match
