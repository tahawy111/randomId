"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_crypto_1 = __importDefault(require("node:crypto"));
function getRandomUUID() {
    const buf = node_crypto_1.default.randomBytes(16);
    buf[6] &= 0x0f;
    buf[6] |= 0x40;
    buf[8] &= 0x3f;
    buf[8] |= 0x80;
    const hex = buf.toString('hex').match(/.{1,2}/g).join('');
    return `${hex.substr(0, 8)}-${hex.substr(8, 4)}-4${hex.substr(12, 3)}-${hex.substr(15, 4)}-${hex.substr(19, 12)}`;
}
console.log(getRandomUUID());
