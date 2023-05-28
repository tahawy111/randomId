declare class RandomId {
    protected counter: number;
    protected lastTimestamp: number;
    constructor();
    randomid(): string;
    getTimestamp(): string;
    protected generateRandomNumber(length: number): number;
    randomUniqueArrayOfNumbers(length: number): number[];
    randomUniqueNumbers(length: number): number;
    randomTimeStamp(): number;
}
