class RandomId {
    counter: number;
    lastTimestamp: number;

    constructor() {
        this.counter = 0;
        this.lastTimestamp = 0;
    }

    public randomid(): string {
        const keysList: string[] = "abcdefghijklmnopqrstuvwxyz".split("").concat(this.getTimestamp().split(""));
        let retVal: string[] = [];
        for (var i = 0; i < keysList.length; i++) {
            retVal.push(keysList[Math.floor(Math.random() * keysList.length)]);
        }

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
        return `${timestamp + this.counter}`
    }

}

// console.log(new RandomId().randomid()); // returns => ym0kg4cy16rk7t2z674w4y6yh3
// console.log(new RandomId().randomid()); // returns => gqacpenixft8frhy3nck6nzvse
// console.log(new RandomId().randomid()); // returns => ep6j4prd03tlm1mddy3pqocnzx
// console.log(new RandomId().randomid()); // returns => 7873cbd6ot4obj8npalbac10fw
// console.log(new RandomId().randomid()); // returns => tkuu48b787m07vzw3czveu67mc
// console.log(new RandomId().randomid()); // returns => hqtm4xlkrf3yq0rnlcuk6uvo3b
// console.log(new RandomId().randomid()); // returns => 3li7mna467wa4vtb7g437y73j4

export default RandomId;