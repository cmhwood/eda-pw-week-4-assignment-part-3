console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Global variables
let basket = [];
const maxItems = 5;

// Function to add item to the basket
function addItem(item) {
  if (isFull()) {
    console.log(`Basket is full! Could not add ${item}.`);
    return false;
  } else {
    console.log(`Added ${item}.`);
    basket.push(item);
    return true;
  }
}

// Function to list items in the basket
function listItems() {
  for (let item of basket) {
    console.log(item);
  }
}
// console.log('List of basket items:');
listItems();

// console.log(`Basket is: ${basket}`);
// console.log('Adding milk', addItem('milk'));
// // console.log(`Basket is now: ${basket}`);
// console.log('Adding waffles', addItem('waffles'));
// // console.log(`Basket is now: ${basket}`);
// console.log('Adding pizza', addItem('pizza'));
// // console.log('Adding pizza', addItem('ice cream'));
// console.log('Adding bananas', addItem('bananas'));
// // console.log(`Basket is now: ${basket}`);
// // console.log(basket.length);
// console.log('List of basket items:');
// listItems();

function empty() {
  basket.length = 0; // Is it better to set the property to 0 or reset it?
  //basket.splice(0, basket.length);
  console.log('Basket Emptied');
}

// console.log(`Basket is: ${basket}`);
// console.log('Adding apples (expect true)', addItem('apples'));
// console.log(`Basket is now: ${basket}`);
// // console.log(basket.length);
// console.log('Basket before emptying:');
// listItems();

// console.log('Basket after emptying:');
// empty();
// console.log(`Basket is now: ${basket}`);
// listItems();
// console.log(basket.length);

// Function to check if basket is full
function isFull() {
  if (basket.length < maxItems) {
    return false;
  } else {
    return true;
  }
}
console.log('Adding more items to basket...');
console.log('Adding milk', addItem('milk'));
console.log('Adding tea', addItem('tea'));
console.log('Adding soda', addItem('soda'));
console.log('Adding wine', addItem('wine'));
console.log('Adding beer', addItem('beer'));
console.log('Adding bears', addItem('bears'));
console.log('Number of items in basket:', basket.length);

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
