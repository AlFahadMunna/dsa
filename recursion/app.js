// function recur(n){
//     if(n===0)return
//     console.log(n);
//     recur(n-1)
// }
// recur(5)

// Backtracking
// function sum(n) {
//   if (n == 1) return 1;
//   return n + sum(n - 1);
//   // User return when previous state wait for next calculation (with value)
// }
// console.log(sum(5));

// Factorial

// function fact(n) {
//   if (n == 1) return 1;
//   return n * fact(n - 1);
//   // User return when previous state wait for next calculation (with value)
// }
// console.log(fact(6));

// Fibonacci
// n numbers of fibonacci

// let n = 10
// let first =0; second =1;

// function fibonacci(n,first,second){
//     if(n==0) return
//     let third = first+second
//     process.stdout.write(third+" ")
//     fibonacci(n-1,second,third)
// }
// process.stdout.write(0+" "+1+" ")
// fibonacci(n-2,0,1)

// Using for loop
// for(let i=1;i<=n-2;i++){
//     let third = first+second;
//     first = second
//     second = third
//     process.stdout.write(third+" ")
// }

// Fibonacci of nth numbers sum
// let n = 7;
// function fibonacci(n) {
//   if (n == 0 || n == 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(n));

// Uclidian math problem

// let a = 32,
//   b = 20;

// while(a !=b){
//   if(a>b) a =a-b;
//   else b= b-a;
// }
// console.log(a);
// function gcb(a, b) {
//   if (a == b) return a;
//   if (a > b) return gcb(a - b, b);
//   return gcb(b, b - a);
// }
// console.log(gcb(a, b));

// function gcd(a,b){
//   if(b==0)return a;
//   return gcd(b,a%b)
// }
// console.log(gcd(16,14));
