const sinon = require('sinon');
function writeCards(names, occasion) {
  const messages = [];
  for (const name of names) {
    messages.push(`Thank you, ${name}, for the wonderful ${occasion} gift!`);
  }
  return messages;
}
function countDown(startNumber) {
  for (let i = startNumber; i >= 0; i--) {
    console.log(i);
  }
}
