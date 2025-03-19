// sum of n natural numbers

// let pr = prompt("give your number");

// if (pr === null) {
//   console.log("cancelled");
// } else {
//   let ans = Number(pr);
//   if (isNaN(ans)) {
//     console.log("invalid input");
//   } else {
//     if (ans > 0) {
//       var sum = 0;
//       for (var i = 1; i <= ans; i++) {
//         sum = sum + i;
//       }
//       console.log(sum);
//     } else {
//       console.log("should be positive ans more than 0");
//     }
//   }
// }

//factorial

// let pr = prompt("give your number");

// if (pr === null) {
//   console.log("cancelled");
// } else {
//   let ans = Number(pr);
//   if (isNaN(ans)) {
//     console.log("invalid input");
//   } else {
//     if (ans > 0) {
//       var fact = 1;
//       for (var i = 1; i <= ans; i++) {
//         fact = fact * i;
//       }
//       console.log(fact);
//     } else {
//       console.log("should be positive ans more than 0");
//     }
//   }
// }

//factor of numbers

// let pr = prompt("give your number");

// if (pr === null) {
//   console.log("cancelled");
// } else {
//   let ans = Number(pr);
//   if (isNaN(ans)) {
//     console.log("invalid input");
//   } else {
//     if (ans > 0) {
//       for (var i = 1; i <= Math.floor(ans / 2); i++) {
//         if (ans % i === 0) {
//           console.log(i);
//         }
//       }
//       console.log(ans);
//     } else {
//       console.log("should be positive ans more than 0");
//     }
//   }
// }

// prime numbers

// let pr = prompt("give your number");

// if (pr === null) {
//   console.log("cancelled");
// } else {
//   let ans = Number(pr);
//   if (isNaN(ans)) {
//     console.log("invalid input");
//   } else {
//     if (ans > 0) {
//       console.log(isPrime(ans));
//     } else {
//       console.log("should be positive ans more than 0");
//     }
//   }
// }

// function isPrime(n) {
//   if (n <= 1) return false;
//   if (n == 2) return true;
//   if (n % 2 == 0) return false;
//   for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
//     if (n % i == 0) return false;
//   }
//   return true;
// }
