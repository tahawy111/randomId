declare class RandomId {
    protected counter: number;
    protected lastTimestamp: number;
    constructor();
    randomid(): string;
    protected generateRandomNumber(length: number): number;
    getTimestamp(): string;
    randomUniqueArrayOfNumbers(length: number): number[];
    randomUniqueNumbers(length: number): number;
    randomTimeStamp(): number;
}
export default RandomId;
