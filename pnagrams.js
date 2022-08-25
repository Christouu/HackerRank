function pangrams(s) {
  let pangrams = false;
  pangrams = new Set(s.toLowerCase().replace(/[^a-z]/g, "")).size === 26;

  if (pangrams) {
    console.log("pangram");
  } else {
    console.log("not pangram");
  }
}

pangrams("We promptly judged antique ivory buckles for the prize");

// A pangram is a string that contains every letter of the alphabet.
// Given a sentence determine whether it is a pangram in the English alphabet.
// Ignore case. Return either pangram or not pangram as appropriate.

//We promptly judged antique ivory buckles for the next prize
// output : pangram

//We promptly judged antique ivory buckles for the prize
// output : not pangram
