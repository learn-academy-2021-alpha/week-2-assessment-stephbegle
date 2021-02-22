// ASSESSMENT 2: Coding practical questions with Jest

// const { expect } = require("@jest/globals");

// const { describe } = require("yargs");

// const { test } = require("picomatch");
// const { describe } = require("yargs");

// const { test } = require("picomatch");

// const { italic } = require("ansi-styles");
// const { exportAllDeclaration } = require("babel-types");
// const { test } = require("picomatch");
// const { describe } = require("yargs");

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("When isDivByThree is called", () => {

    it("returns '15 is divisible by three'", () => {

        const num = 15;

        const actResult = isDivByThree(num);

        expect(actResult).toEqual("15 is divisible by three")
    })

    it("returns '0 is divisible by three'", () => {

        const num = 0;

        const actResult = isDivByThree(num);

        expect(actResult).toEqual("0 is divisible by three")
    })

    it("returns '-7 is not divisible by three'", () => {

        const num = -7;

        const actResult = isDivByThree(num);

        expect(actResult).toEqual("-7 is not divisible by three")
    })

})

// b) Create the function that makes the test pass.

const isDivByThree = (num) => {

    if(num % 3 === 0){
        // if the number is evenly divisble by three print this
        return `${num} is divisible by three`

    } else {
        // if not, print this
        return `${num} is not divisible by three`
    }
};

var num1 = 15
console.log(isDivByThree(num1))
// Expected output: "15 is divisible by three"

var num2 = 0
console.log(isDivByThree(num2))
// Expected output: "0 is divisible by three"

var num3 = -7
console.log(isDivByThree(num3))
// Expected output: "-7 is not divisble by three"




// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe("When capitalize is called," , () => {

    it("will return an array of capitalized strings", () => {

        const actResult = capitalize(randomNouns1);

        expect(actResult).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    })

    it("will return an array of capitalized strings", () => {

        const actResult = capitalize(randomNouns2);

        expect(actResult).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
    })
})

// b) Create the function that makes the test pass.

const capitalize = (array) => {

    newArr = []
    // initializing a new array 

    for(i = 0; i < array.length; i++){
        newArr.push(array[i].charAt(0).toUpperCase() + array[i].slice(1))
        // add the first letter of the current element to the new array and capitalize it, then add the rest of the word (starting at index 1), to complete the word.
    }

    return newArr
}
console.log(capitalize(randomNouns1))
console.log(capitalize(randomNouns2))




// --------------------3) Create a function that takes in an array of mixed data types and returns an array with ONLY NUMBERS sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var mixedDataArray1 = [true, 8, "hello", -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 107]

var mixedDataArray2 = [3, "yo!", 94, -9, false, 0, 18, "hola!"]
// Expected output: [-9, 0, 3, 18, 94]

describe("When ascNums is called", () => {

    it("will return an array of only numbers ordered from least to greatest", () => {

        const mixedDataArray1 = [true, 8, "hello", -8, null, 0, 46, 59, 107, "hey!"];

        const actResult = ascNums(mixedDataArray1);

        expect(actResult).toEqual([-8, 0, 8, 46, 59, 107]);
    })

    it("will return an array of only numbers ordered from least to greatest", () => {

        const mixedDataArray2 = [3, "yo!", 94, -9, false, 0, 18, "hola!"];

        const actResult = ascNums(mixedDataArray2);
        
        expect(actResult).toEqual([-9, 0, 3, 18, 94]);
    })
})

// b) Create the function that makes the test pass.

const ascNums = (array) => {

    let numArr = [];
    let sortArr = [];

    for(i = 0; i < array.length; i++){

        if(typeof array[i] === "number"){
            // loop through the array and find only the numbers

            numArr.push(array[i])
            // push the numbers into numArr array
        }
    }

    const arrLength = numArr.length
    // set the length of the new array to never change for the next for-loop

    for(j = 0; j < arrLength ; j++){ 

        min = Math.min.apply(Math, numArr);
        // find the min number in the array and set it to a variable

        sortArr.push(min);
        // push the min number to a new array (sortArr)

        index = numArr.indexOf(min)
        // find the index of the min number in the old array (numArr)

        numArr.splice(index, 1)
        // remove the current min number from the old array using its index
    }

    return sortArr
}



// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2

describe("When firstVow is called,", () => {

    it("returns the index of the first vowel of the string 'learn'", () => {

        const vowelTester1 = "learn";

        const actResult = firstVow(vowelTester1);

        expect(actResult).toEqual(1);
    })

    it("returns the index of the first vowel of the string 'academy'", () => {

        const vowelTester1 = "academy";

        const actResult = firstVow(vowelTester1);

        expect(actResult).toEqual(0);
    })

    it("returns the index of the first vowel of the string 'challenge'", () => {

        const vowelTester1 = "challenge";

        const actResult = firstVow(vowelTester1);

        expect(actResult).toEqual(2);
    })
})


// b) Create the function that makes the test pass.

const firstVow = (string) => {

    string = string.split("");
    let boolArr = [];

    for(i = 0; i < string.length; i++){

        if(string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u"){
            boolArr.push(true);
        } else {
            boolArr.push(false);
        }
    }

    return boolArr.indexOf(true)
}

// Another simpler way of doing this using .search

// const firstVow_2 = (string) => {

//     let search = string.search(/[a,e,i,o,u,A,E,I,O,U]/g)
//     // the search method searches for the specified values (vowels) and returns the index of the first match

//     return search
// }