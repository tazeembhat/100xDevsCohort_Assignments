/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/
function searchKey(array, key) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].category === key) {
      return [true, i]; // Key found
    }
  }
  return [false, -1]; // Key not found
}
function calculateTotalSpentByCategory(transactions) {
  if(transactions.length === 0){return [];}

  let ans = [];

  for(let i = 0; i<transactions.length;  i++){
    let ret = searchKey(ans, transactions[i].category)
    if(ret[0]){
      ans[ret[1]].totalSpent += transactions[i].price;
    }
    else{
      ans.push({category: transactions[i].category, totalSpent: transactions[i].price});
    }
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
