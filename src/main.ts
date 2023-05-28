class RandomId {
    protected counter: number;
    protected lastTimestamp: number;

    constructor() {
        this.counter = 0;
        this.lastTimestamp = 0;
    }

    public randomid(): string {
        const keysList: string[] = [..."abcdefghijklmnopqrstuvwxyz", ...`${this.randomTimeStamp()}`.split("")];
        let retVal: string[] = keysList.map(() => keysList[Math.floor(Math.random() * keysList.length)]);
        return retVal.join('').substring(0, 26);
    }

    public getTimestamp(): string {
        const timestamp = Date.now();
        if (timestamp === this.lastTimestamp) {
            this.counter++;
        } else {
            this.counter = 0;
        }
        this.lastTimestamp = timestamp;
        return timestamp.toString().substring(0, 12) + this.counter.toString();
    }

    protected generateRandomNumber(length: number): number {
        return Math.floor(
            +`1${"0".repeat(length - 1)}` +
            Math.random() * +`9${"0".repeat(length - 1)}`
        ); // generates a 6-digit random number
    }

    public randomUniqueArrayOfNumbers(length: number): number[] {

        let uniqueNumbersArr = []; // create an empty Arr to store unique numbers

        while (uniqueNumbersArr.length < length) {
            let randomNumber = this.generateRandomNumber(length);
            if (!uniqueNumbersArr.includes(randomNumber as never)) {
                // check if the number is already in the Arr
                uniqueNumbersArr.push(randomNumber as never); // add the number to the set if it's unique
            }
        }

        return uniqueNumbersArr;

    }

    public randomUniqueNumbers(length: number): number {
        return this.randomUniqueArrayOfNumbers(length)[0];
    }

    public randomTimeStamp(): number {
        return Math.abs(+new Date(Math.floor(Math.random() * 10000) + 10000, Math.floor(Math.random() * 11) + 0, Math.floor(Math.random() * 30) + 1, Math.floor(Math.random() * 24) + 1, Math.floor(Math.random() * 60) + 1, Math.floor(Math.random() * 60) + 1, Math.floor(Math.random() * 1000) + 1));
    }

}

// console.log(new RandomId().randomid()); // returns => ym0kg4cy16rk7t2z674w4y6yh3
// console.log(new RandomId().randomid()); // returns => gqacpenixft8frhy3nck6nzvse
// console.log(new RandomId().randomid()); // returns => ep6j4prd03tlm1mddy3pqocnzx
// console.log(new RandomId().randomid()); // returns => 7873cbd6ot4obj8npalbac10fw
// console.log(new RandomId().randomid()); // returns => tkuu48b787m07vzw3czveu67mc
// console.log(new RandomId().randomid()); // returns => hqtm4xlkrf3yq0rnlcuk6uvo3b

// // Testing if the array contains a duplicates ♥ NO DUPLICATES (1/1000000)
// const arr: string[] = [];
// for (let i = 0; i < 10000000; i++) {
//     arr.push(new RandomId().randomid());
// }

// const hasDuplicates = new Set(arr).size !== arr.length;

// if (hasDuplicates) {
//     console.log('The array contains duplicates');
// } else {
//     console.log('The array does not contain duplicates');
// }

// export default RandomId;