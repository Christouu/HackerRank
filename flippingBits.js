function flippingBits(n) {
  console.log(2 ** 32 - 1 - n);
}

flippingBits(2);

//first return the max value 2 pow 32
// - 1 is to get to 0 cases
// and - n is for what ever our input is

// Take 1 for example,
// as unsigned 32-bits is 00000000000000000000000000000001
// and doing the flipping we get 11111111111111111111111111111110 which in turn is 4294967294.
