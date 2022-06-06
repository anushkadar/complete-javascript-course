// 5 falsy Values (values that converted to Boolean false)
// 0 , '', undefined, null, NaN

// Anything else are Truthy Values

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log(Boolean("hellow"));

const money = 0;
if (money) {
  console.log("you dont have money");
} else {
  console.log("you have something");
}

let height;
if (height) {
  console.log("height is defined");
} else {
  console.log("height is NOT defined");
}

height = 0;
if (height) {
    console.log("height is defined");
  } else {
    console.log("height is NOT defined");
  }
