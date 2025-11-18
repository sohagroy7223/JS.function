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
const output = wloop(num);
console.log(output);
