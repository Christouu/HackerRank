function flippingBits(n) {
  console.log(2 ** 32 - 1 - n);
}

flippingBits(2);

//first return the max value 2 pow 32
// - 1 is to get to 0 cases
// and - n is for what ever our input is
