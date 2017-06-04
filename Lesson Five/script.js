//1. print the number 5 to the console
console.log(5);

//2. Print your name to the console
console.log('Amedeo');

//3. Store your age as a variable called "myAge"
var myAge = 24;

//4. Print to the console how old you will be in 5 years
console.log(myAge + 5);

//5. Store your favorite food as a variable called "myFavoriteFood"
var myFavoriteFood = 'Smoked Salmon';

//6. Publish your favorite food to `index.html` using `document.write()`
document.write(myFavoriteFood);

//7. Print the remainder of 14 / 3 to the console
console.log(14 % 3);

//8. Print the remainder of 829 / 13 to the console
console.log(829 % 13);

//9. Create a for loop that counts from 0 to 130 by 3s
var numbers = '';
for (var i = 0; i <= 130; i += 3) {
    numbers += i + ', ';
}
console.log(numbers.slice(0, -2));

//10. Create a for loop that counts from 3 to 17 by 2s
numbers = '';
for (i = 3; i <= 17; i += 2) {
    numbers += i + ', ';
}
console.log(numbers.slice(0, -2));

//11. Create a for loop that counts from 100 to 3 by -1
numbers = '';
for (i = 100; i >= 3; i -= 1) {
    numbers += i + ', ';
}
console.log(numbers.slice(0, -2));

//12. Create a for loop that counts from 1 to 100 by 1s
numbers = '';
for (i = 1; i <= 100; i += 1) {
    numbers += i + ', ';
}
console.log(numbers.slice(0, -2));

//13. Create a for loop that counts from 1 to 100, but instead of printing `i` prints `fizz` if the number is divisible by 5
for (i = 1; i <= 100; i += 1) {
    if (i % 5 === 0) {
        console.log('fizz');
    }
}

//14. Create a for loop that counts from 1 to 100, but instead of printing `i` prints `buzz` if the number is divisible by 3
for (i = 1; i <= 100; i += 1) {
    if (i % 3 === 0) {
        console.log('buzz');
    }
}

//15. Create a for loop that counts from 1 to 100, but instead of printing `i` prints `fizzbuzz` if the number is divisible by 15
for (i = 1; i <= 100; i += 1) {
    if (i % 15 === 0) {
        console.log('fizzbuzz');
    }
}

//EXTRA CREDIT: Fizzbuzz
console.log('Fizzbuzz:')
for (i = 1; i <= 100; i += 1) {
    var result = '';
    if (i % 3 === 0) {
        result += 'fizz';
    }

    if (i % 5 === 0) {
        result += 'buzz';
    }

    if (result !== '') {
        console.log(result);
    }
}

// Alternative Fizzbuzz:
console.log('Alternative Fizzbuzz:')
for (i = 1; i <= 100; i += 1) {
    if (i % 15 === 0) {
        console.log('fizzbuzz');
    } else if (i % 5 === 0) {
        console.log('buzz');
    } else if (i % 3 === 0) {
        console.log('fizz');
    }
}

/*

The "Fizz-Buzz test" is an interview question designed to help filter out the 99.5% of programming job candidates who can't seem to program their way out of a wet paper bag. The text of the programming assignment is as follows:

"Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”."

Hint: Use your last three loops and if/then/else statements. You can learn about those here https://www.w3schools.com/js/js_if_else.asp

*/