console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function listItems() {
  if (basket.length === 0) {
    console.log('Basket is empty');
  }
  for (let item of basket) {
    console.log(item);
  }
}
console.log('List of basket items:');
listItems();

function addItem(item) {
  basket.push(item);
  return true;
}
console.log(`Basket is ${basket}`);
console.log('Adding milk', addItem('milk'));
console.log(`Basket is now ${basket}`);
console.log('Adding waffles', addItem('waffles'));
console.log(`Basket is now ${basket}`);
console.log('Adding pizza', addItem('pizza'));
console.log(`Basket is now ${basket}`);

console.log('List of basket items:');
listItems();

// console.log(basket);

function empty() {
  basket.length = 0; // Is it better to set the property to 0 or reset it?
  //basket.splice(0, basket.length);
}

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);

console.log('Basket before emptying:');
listItems();

console.log('Basket after emptying:');
empty();
console.log(`Basket is now ${basket}`);

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    basket: typeof basket !== 'undefined' ? basket : undefined,
    addItem: typeof addItem !== 'undefined' ? addItem : undefined,
    listItems: typeof listItems !== 'undefined' ? listItems : undefined,
    maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
    empty: typeof empty !== 'undefined' ? empty : undefined,
    isFull: typeof isFull !== 'undefined' ? isFull : undefined,
    removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
  };
} catch (e) {
  // Do nothing
}
