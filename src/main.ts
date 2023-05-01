export function randomId(): string {
  const keysList: string[] = "abcdefghijklmnopqrstuvwxyz".split("").concat(Date.now().toString().split(""));
  let retVal: string[] = [];
  for (var i = 0; i < keysList.length; i++) {
    retVal.push(keysList[Math.floor(Math.random() * keysList.length)]);
  }

  return retVal.join('').substring(0,26);
}

console.log(randomId());
