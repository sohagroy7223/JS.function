// string word /langth ******

function evenSizeString(str) {
    const word = str.length;
    console.log(str, word);
    if (word % 2 === 0) {
        console.log("even number");
        return true;
    } else {
        console.log("odd number");
        return false;
    }
}
// evenSizeString("Rangpur");
// evenSizeString("lalamoni");
// evenSizeString("Bangladesh");

// Boolean - true/ false *****

function homeOrMarket(number, market) {
    if (market === true) {
        const result = number * 2;
        return result;
    } else {
        const result = number;
        return result;
    }
}
// console.log(homeOrMarket(50, true));
// console.log(homeOrMarket(30, false));

// array function*******

function numberOfElements(number) {
    console.log(number);
    const lang = number.length;
    return lang;
}

// const output = numberOfElements([23, 34, 567, 74, 23, 5, 78, 35]);
// console.log(output);

// object descler function*****

function getGpa(person) {
    const gpa = person.exm.gpa;
    return gpa;
}
const result = getGpa(
    (person = {
        name: "sohag",
        isStudent: true,
        class: 12,
        age: 24,
        exm: {
            name: "final year",
            gpa: "5.00",
        },
    })
);
console.log(result);
