function evenNumberOnly(numbers) {
    const even = [];
    for (const number of numbers) {
        if (number % 2 === 0) {
            // console.log(number);
            even.push(number);
            console.log(even);
        }
    }
    return even;
}
const num = [12, 3, 4, 7, 5, 8];
const evens = evenNumberOnly(num);
console.log(" even numbers is", evens);

function sumOfEvenNumber(number) {
    let sum = 0;
    for (const numb of number) {
        console.log(numb);
        sum = sum + numb;
    }
    return sum;
}
const sum = sumOfEvenNumber(evens);
console.log("totla number of the sum is", sum);
