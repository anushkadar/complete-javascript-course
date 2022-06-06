//NAN - "Not a Number =  invalid number"

// Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + inputYear);
console.log(Number(inputYear) + 15);
console.log(Number("inputYear"));
console.log(String(2005));

// Type Coercion (conversion happening implicitly)
console.log(Number(inputYear), inputYear);
console.log(`I am ` + 20 + ' years old');
console.log('23' - '10' - 3);
console.log('23' - '10' + 3); //Since first two conver to number the resutl is number
console.log('23' + '10' + 3); // this will work as string 
console.log('23' * '10' );
console.log('23' / '10' );
console.log('23' > '10' );

// tutorial
let n = '1' + 1;
n = n -1;
console.log(n);