// === check the type coresion .to

const age = '18';

if(age === 18) console.log("you are a adult first");

if(age == 18) console.log("you are a adult second");

//alert("how are you?");
//prompt("what is your favorite number?");

setTimeout(() => {
    console.log('AsyncCall');
}, 500);

setTimeoutMe(() => {
    console.log('AsyncCall Me');
}, 5000);

//declare function setTimeoutMe(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;