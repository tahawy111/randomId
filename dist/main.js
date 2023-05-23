"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RandomId {
    constructor() {
        this.counter = 0;
        this.lastTimestamp = 0;
    }
    randomid() {
        const keysList = "abcdefghijklmnopqrstuvwxyz".split("").concat(this.getTimestamp().split(""));
        let retVal = [];
        for (var i = 0; i < keysList.length; i++) {
            retVal.push(keysList[Math.floor(Math.random() * keysList.length)]);
        }
        return retVal.join('').substring(0, 26);
    }
    generateRandomNumber(length) {
        return Math.floor(+`1${"0".repeat(length - 1)}` +
            Math.random() * +`9${"0".repeat(length - 1)}`); // generates a 6-digit random number
    }
    getTimestamp() {
        const timestamp = Date.now();
        if (timestamp === this.lastTimestamp) {
            this.counter++;
        }
        else {
            this.counter = 0;
        }
        this.lastTimestamp = timestamp;
        return timestamp.toString().substring(0, 12) + this.counter.toString();
    }
    randomUniqueArrayOfNumbers(length) {
        let uniqueNumbersArr = []; // create an empty Arr to store unique numbers
        while (uniqueNumbersArr.length < length) {
            let randomNumber = this.generateRandomNumber(length);
            if (!uniqueNumbersArr.includes(randomNumber)) {
                // check if the number is already in the Arr
                uniqueNumbersArr.push(randomNumber); // add the number to the set if it's unique
            }
        }
        return uniqueNumbersArr;
    }
    randomUniqueNumbers(length) {
        return this.randomUniqueArrayOfNumbers(length)[0];
    }
    generateRandomTimeStamp() {
        return Math.abs(new Date(Math.floor(Math.random() * 10000) + 5000, Math.floor(Math.random() * 11) + 0, Math.floor(Math.random() * 30) + 1, Math.floor(Math.random() * 24) + 1, Math.floor(Math.random() * 60) + 1, Math.floor(Math.random() * 60) + 1, Math.floor(Math.random() * 1000) + 1).getTime());
    }
}
// console.log(new RandomId().randomid()); // returns => ym0kg4cy16rk7t2z674w4y6yh3
// console.log(new RandomId().randomid()); // returns => gqacpenixft8frhy3nck6nzvse
// console.log(new RandomId().randomid()); // returns => ep6j4prd03tlm1mddy3pqocnzx
// console.log(new RandomId().randomid()); // returns => 7873cbd6ot4obj8npalbac10fw
// console.log(new RandomId().randomid()); // returns => tkuu48b787m07vzw3czveu67mc
// console.log(new RandomId().randomid()); // returns => hqtm4xlkrf3yq0rnlcuk6uvo3b
console.log(new RandomId().randomUniqueNumbers(7)); // returns => 3li7mna467wa4vtb7g437y73j4
exports.default = RandomId;
