// const sinon = require('sinon');
// function writeCards(names, occasion) {
//   const messages = [];
//   for (const name of names) {
//     messages.push(`Thank you, ${name}, for the wonderful ${occasion} gift!`);
//   }
//   return messages;
// }
// function countDown(startNumber) {
//   for (let i = startNumber; i >= 0; i--) {
//     console.log(i);
//   }
// }

//
for (let age = 30 ; age < 40 ; age ++ ){
  console.log (`I\'m ${age} years old . Happy birthday to me !`)
  debugger;
}

// using for with arrays
const gift = ['teddy bear','drone','doll']
function wrapgift(gift){
  for (let i=0;i<gift.length;i++){
  console.log(`Wrapped ${gift[i]} and added a bowl`)
  debugger;
  }
  return gift
}
wrapgift(gift)
// counetr varible start at zero because array have a zero based index .

// thank you note function which  generate personalized thank you messages .
function writeCards(name,event){
  let messages = []
  for (z=0;z<name.length;z++){
    let message = `Tahnk you ${name[z]} for the ${event} gift`
    messages.push(message)
  }
  return messages
}
console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));