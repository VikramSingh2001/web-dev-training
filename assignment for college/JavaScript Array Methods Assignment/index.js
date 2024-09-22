// 1. push() method
let array1 = [1, 2, 3];
array1.push(4);
console.log("After push:", array1);
// 2. pop() method
array1.pop();
console.log("After pop:", array1);

// 3. shift() method
array1.shift();
console.log("After shift:", array1);

// 4. unshift() method
array1.unshift(1);
console.log("After unshift:", array1);

// 5. splice() method.
array1.splice(2, 1, 5, 6); // Remove 1 element at index 2 and add 5, 6
console.log("After splice:", array1);

// 6. slice() method
console.log("After slice:", array1.slice(1, 3)); ; // Get elements from index 1 to 2 both included

// 7. indexOf() method.
let index = array1.indexOf(3);
console.log("Index of 3 is : ", index);

// 8. map() method.
let Array = array1.map(x => x * 2);
console.log("After map:", Array);

// 9. filter() method.
let filtered = array1.filter(x => x > 3);
console.log("After filter:", filtered);

// 10. reduce() method.
let sum = array1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum using reduce:", sum);