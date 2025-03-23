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

// sum of numbers

// let pr = prompt("give your number");

// if (pr === null) {
//   console.log("cancelled");
// } else {
//   let n = Number(pr);
//   if (isNaN(n)) {
//     console.log("invalid input");
//   } else {
//     if (n > 0) {
//       let sum = 0;
//       while (n > 0) {
//         let rem = n % 10;
//         sum = sum + rem;
//         n = Math.floor(n / 10);
//       }
//       console.log(sum);
//     } else {
//       console.log("should be positive ans more than 0");
//     }
//   }
// }

//reverse a number

// let pr = prompt("give your number");

// if (pr === null) {
//   console.log("cancelled");
// } else {
//   let n = Number(pr);
//   if (isNaN(n)) {
//     console.log("invalid input");
//   } else {
//     if (n > 0) {
//       let rev = 0;
//       while (n > 0) {
//         let rem = n % 10;
//         rev = rev * 10 + rem;
//         n = Math.floor(n / 10);
//       }
//       console.log(rev);
//     } else {
//       console.log("should be positive ans more than 0");
//     }
//   }
// }

//strong number
// let pr = prompt("give your number");

// if (pr === null) {
//   console.log("cancelled");
// } else {
//   let n = Number(pr);
//   if (isNaN(n)) {
//     console.log("invalid input");
//   } else {
//     if (n > 0) {
//       let sum = 0;
//       let copy = n;
//       while (n > 0) {
//         let rem = n % 10;
//         let fact = 1;
//         for (i = 1; i <= rem; i++) {
//           fact = fact * i;
//         }
//         sum = sum + fact;
//         n = Math.floor(n / 10);
//       }
//       if (copy === sum) {
//         console.log("strong");
//       } else {
//         console.log("not strong");
//       }
//     } else {
//       console.log("should be positive ans more than 0");
//     }
//   }
// }
