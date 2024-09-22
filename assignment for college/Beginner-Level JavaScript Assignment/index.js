// Question 1:
function concatenateNames(firstName, lastName) {
    const fullName = firstName + ' ' + lastName;
    console.log(fullName);
}
concatenateNames('mahendra', 'singh');

// Question 2:
function checkNumber(num) {
    if (num > 0) {
        console.log('Positive');
    } else if (num < 0) {
        console.log('Negative');
    } else {
        console.log('Zero');
    }
}

checkNumber(5);
checkNumber(-3);
checkNumber(0);

// Question 3:
function printNumbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
printNumbers();

// Question 4:
function greet(name) {
    console.log('Hello, ' + name + '!');
}

greet('mahendra');

// Question 5:
function sumArray() {
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
    console.log('Sum of array:', sum);
}
sumArray();