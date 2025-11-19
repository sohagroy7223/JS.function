/**
 *Objective: write a Finction to give me the some of all numbers in an array
 *stap-1: declare a function
 *stap-2: call check whether the function is call properly
 *stap-3: set a parametar(s)
 *stap-4: pas the parametar(s), check whether parametar is passed in a proper format
 *stap-5: do the function task (stap by stap)
 * */

// function sumOfNumbers(numbers) {
//     let sum = 0;
//     for (const number of numbers) {
//         console.log(number);
//         sum = sum + number;
//     }
//     return sum;
// }
// const num = [13, 4, 8, 2];
// const sum = sumOfNumbers(num);
// console.log("the number of sum is", sum);

//

function wloop(numbers) {
    let i = 0;
    let result = [];
    while (i < numbers.length) {
        result.push(numbers[i]);
        i++;
    }
    return result;
}
const num = [2, 3, 56, 7, 9];
const re = wloop([12, 343, 6, 67, 77]);
console.log(re);
console.log("------------");
const output = wloop(num);
console.log(output);
