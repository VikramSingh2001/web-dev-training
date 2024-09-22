// 1. Basic Function
function sayHello() {
    return "Hello, World!";
}
sayHello();
// 2. Function with Parameters
function doubleNumber(num) {
    return num * 2;
}
console.log(doubleNumber(5));
// 3. Simple Return Function
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addTwoNumbers(4,6));
// 4. Arrow Function
const doubleNumberArrow = (num) => num * 2;
console.log(doubleNumberArrow(5));
// 5. Arithmetic Operator
function subtractTen(num) {
    return num - 10;
}
console.log(subtractTen(50));
// 6. Comparison Operator
function isGreaterThanFive(num) {
    console.log(num);
    return num > 5;
}
if(isGreaterThanFive(8)){
    isGreaterThanFive(8);
}
else{
    console.log("num is not greater then 5");
}
// 7. Logical Operator
function isBetweenOneAndTen(num) {
    if(num >= 1 && num <= 10){
        return num;
    }
    else{
        return 0;
    }
}
if(isBetweenOneAndTen(5)==5){
    console.log("num. is between 1 to 10");
}
else{
    console.log("num is nort in bvetween 1 to 10");
}
// 8. If-Else Statement
function isEven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

// 9. Ternary Operator
function checkAge(age) {
    return age >= 18 ? "Adult" : "Minor";
}
if(checkAge(50)=="Adult"){
    console.log("you are adult");
}
if(checkAge(50)=="minor"){
    console.log("you are minor");
}
// 10. Switch Statement
function getDayType(day) {
    switch (day%7) {
        case 0: console.log("sunday");
        break;
        case 1: console.log("monday");
        break;
        case 2: console.log("tuesday");
        break;
        case 3: console.log("wednesday");
        break;
        case 4: console.log("thursday");
        break;
        case 5: console.log("friday");
        break;
        case 6: console.log("saturday");
        break;
        default:
            return "Invalid day";
    }
}
getDayType(6);