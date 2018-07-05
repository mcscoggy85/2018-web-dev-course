// array practice

// Author: Chris Scogin

let list = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
list.splice(0,1);
console.log(list);

// 2. Sort the array in order.
list.sort();
console.log(list);

// 3. Put "Kiwi" at the end of the array.
list.push("Kiwi");
console.log(list);

// 4. Remove "Apples" from the array.
const apple = list.indexOf('Apples');
console.log(apple);
list.splice(0,1);
console.log(list);
// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
list.reverse();
console.log(list);

// using this array,
const list2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
console.log(list2[1][1][0]);