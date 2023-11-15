console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem(item) {
  // Check if basket is full
  if (isFull() === false) {
    //Push new item to basket array
    basket.push(item);
    console.log("Item added to basket: ", item);
    return true;
  } else {
    console.log("Too many items in basket! Cannot add " + item);
    return false;
  }
} //end addItem function

function listItems(list) {
  for (let contents of list) {
    console.log("Items in basket: ", contents);
  } // end for loop listing items
} // end listItems function

function empty() {
  basket.length = 0; // NOTE: basket=[]; would not pass Prime Testing. Had to empty by changing array length
  console.log("Basket was emptied", basket);
}

function isFull() {
  if (basket.length < maxItems) {
    return false;
  } else {
    return true;
  }
} // end isFull function

function removeItem(item){
    let index = basket.indexOf(item); // console.log('index', index); // Used for debugging
    let deletedItem = null;
    if (index >= 0){
        deletedItem = basket.splice(index, 1); console.log(deletedItem);
        console.log('Item removed: ', deletedItem[0]);
        return deletedItem[0]; // NOTE: needed to add [0] to deleted item to pass Prime Testing
    } else{
        return deletedItem;
    }
}   

//Code for testing adding items
console.log("Starting basket:", basket);
console.log("--- Add 4 new items ---");
addItem("Steak");
addItem("potatoes");
addItem("Asparagus");
addItem("gravy");

// Code for testing ifFull functionality
console.log("Check if cart is full (expect false)?", isFull(), basket);
console.log("--- Add bread ---");
addItem("bread");
console.log("Check if cart is full (expect true)?", isFull(), basket);

// Code for checking addItem while cart is full
console.log("--- Try to add Dessert, Expect to be full ---");
addItem("Dessert");

// Code to test for listItems functionality
console.log("--- Run list items (expect 5 items) ---");
listItems(basket);

// Tests to check functionality of removeItem
console.log(basket);
removeItem('Asparagus');
console.log(basket); 
removeItem('carrots');
console.log(basket); 
// End test for removeItem

// Test for empyt functionality
console.log("--- Run empty basket function (expect empty basket) --- ");
empty();

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    basket: typeof basket !== "undefined" ? basket : undefined,
    addItem: typeof addItem !== "undefined" ? addItem : undefined,
    listItems: typeof listItems !== "undefined" ? listItems : undefined,
    maxItems: typeof maxItems !== "undefined" ? maxItems : undefined,
    empty: typeof empty !== "undefined" ? empty : undefined,
    isFull: typeof isFull !== "undefined" ? isFull : undefined,
    removeItem: typeof removeItem !== "undefined" ? removeItem : undefined,
  };
} catch (e) {
  // Do nothing
}
