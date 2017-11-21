var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
]
/*
var totalAmount = 0;
for(var i = 0, len = orders.length; i < len; i++) {
  totalAmount += orders[i].amount;
}
*/

var totalAmount = orders.reduce( (sum, order) => sum + order.amount, 0)

console.log(totalAmount);
