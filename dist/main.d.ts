declare class RandomId {
    counter: number;
    lastTimestamp: number;
    constructor();
    randomid(): string;
    getTimestamp(): string;
}
export default RandomId;
