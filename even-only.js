// function evenNumberOnly(numbers) {
//     const even = [];
//     for (const number of numbers) {
//         if (number % 2 === 0) {
//             // console.log(number);
//             even.push(number);
//             console.log(even);
//         }
//     }
//     return even;
// }
// const num = [12, 3, 4, 7, 5, 8];
// const evens = evenNumberOnly(num);
// console.log(" even numbers is", evens);

// function sumOfEvenNumber(number) {
//     let sum = 0;
//     for (const numb of number) {
//         console.log(numb);
//         sum = sum + numb;
//     }
//     return sum;
// }
// const sum = sumOfEvenNumber(evens);
// console.log("totla number of the sum is", sum);

function oddAllNumber(numbers) {
    const odd = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            console.log(number);
            odd.push(number);
        }
    }
    return odd;
}
const num = [12, 3, 6, 7, 5, 9];
const sum = oddAllNumber(num);
console.log("total odd number", sum);

function oddNumberSum(numbers) {
    let sum = 0;
    for (const number of numbers) {
        if (number % 2 === 1) {
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}
const oddSum = oddNumberSum(sum);
console.log("total odd number sum", oddSum);
