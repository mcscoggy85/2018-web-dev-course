const script2 = require('./script2');

const a = 5;
const b = 6;
console.log(a+b);

setTimeout(() => {
    console.log(a);
}, 2000);

setTimeout(() => {
    console.log(b);
}, 4000);

setTimeout(() => {
    console.log(script2.largeNumber);
}, 6000);

setTimeout(() => {
    console.log('All done!!....');
}, 8000);

