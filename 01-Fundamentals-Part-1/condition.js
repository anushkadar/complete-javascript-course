//Conditions otherwise control structures

const age = 16;
const hasValidAge = age >= 18;

// if else control structure
if (hasValidAge) {
  console.log("Sarah has valige age limit ❤ 🎈");
} else {
  const yearLeft = 18 - age;
  console.log(`Sarah have to wait ${yearLeft} years`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(`your are born in ${century}th Century!`);
