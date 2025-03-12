// let ans = Number(prompt("What is your age?"));

// if (isNaN(ans)) {
//   console.log("wrong input");
// } else if (ans >= 18) {
//   console.log("you can vote!");
// } else {
//   console.log("you cannot vote");
// }

//! discount

// let amount = Number(prompt("what is your amount?"));
// let dis = 0;

// if (amount > 0 && amount <= 5000) {
//   dis = 0;
// } else if (amount > 5000 && amount <= 7000) {
//   dis = 5;
// } else if (amount > 7000 && amount <= 9000) {
//   dis = 10;
// } else if (amount > 9000) {
//   dis = 20;
// }
// console.log(amount - Math.floor((dis * amount) / 100));

//!electric bill
// let unit = Number(prompt("Enter electricity unit"));
// let amount = 0;
// if (unit > 400) {
//   amount = (unit - 400) * 13;
//   unit = 400;
// }
// if (unit > 200 && unit <= 400) {
//   amount += (unit - 200) * 8;
//   unit = 200;
// }
// if (unit > 100 && unit <= 200) {
//   amount += (unit - 100) * 6;
//   unit = 100;
// }
// amount += unit * 4;
// console.log(amount);
