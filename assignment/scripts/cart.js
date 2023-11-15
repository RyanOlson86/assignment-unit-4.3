console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
// const maxItems = 5;

function addItem(item){
    //Push new item to basket array
    basket.push(item);
    console.log('Item added to basket: ', item);
    return true;
}//end addItem function

function listItems(list){
    for( let contents of list){
        console.log('Items in basket: ', contents);
    }// end for loop listing items
} // end listItems function

function empty(){
    basket = [];
    console.log('Basket was emptied', basket);
}

//Code for testing
// addItem('Steak');
// addItem('potatoes');
// addItem('Asparagus');
// listItems(basket);
// empty();


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
