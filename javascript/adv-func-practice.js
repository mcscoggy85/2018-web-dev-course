const multiply = (a, b) => {
    console.log(a*b);
    // return a*b;
};
multiply(5,6);

const curriedMultiply = (a) => (b) => console.log(a * b);
curriedMultiply(5)(7);

const multiplyByFive = curriedMultiply(5);
multiplyByFive(5);