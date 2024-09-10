const linkedList = require('./script.js');

const listOne = linkedList()
listOne.append("dog");
listOne.append("cat");
listOne.append("parrot");

listOne.prepend("lion");

console.log(listOne.at(3));