function sumOfNumbers(numbers) {
    let sum = 0;
    for (const number of numbers) {
        console.log(number);
        sum = sum + number;
    }
    return sum;
}
const num = [13, 4, 8, 2];
const sum = sumOfNumbers(num);
console.log("the number of sum is", sum);
