let marksWeight = 78;
let marksHeiht = 1.68;

let johneWeight = 92;
let johnHeiht = 1.95;

function calculateBMI(weight, height) {
  if (weight && height) {
    return weight / (height ** 2);
  }
}

let marksBMI = calculateBMI(marksWeight, marksHeiht);
let johnsBMI = calculateBMI(johneWeight, johnHeiht);
let temp = calculateBMI(null, johnHeiht);

console.log(marksBMI, johnsBMI);
console.log(marksBMI >= johnsBMI);

if(marksBMI > johnsBMI){
    console.log(`Mark has the highest BMI is ${johnsBMI}`)
}else if(marksBMI < johnsBMI){
    console.log(`John has the highest BMI is ${johnsBMI}`)
}else{
    console.log(`John Mark Both has same BMI ${marksBMI}`)
}




