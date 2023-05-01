"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomid() {
    const keysList = "abcdefghijklmnopqrstuvwxyz".split("").concat(Date.now().toString().split(""));
    let retVal = [];
    for (var i = 0; i < keysList.length; i++) {
        retVal.push(keysList[Math.floor(Math.random() * keysList.length)]);
    }
    return retVal.join('').substring(0, 26);
}
exports.default = randomid;
