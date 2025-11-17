function sevenTime(number) {
    const result = number * 7;
    return result;
}

console.log("-----------");
const fivtime = sevenTime(20);
console.log(fivtime);
console.log("---------------");
const result = sevenTime(50);
console.log(result);

function numhalf(num) {
    const half = num / 2;
    console.log(half);
}
numhalf(sevenTime(100));
