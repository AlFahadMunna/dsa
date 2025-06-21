//left rotation by 1 element

// let arr =[1,2,3,4,5]

// let first = arr[0]

// for (let i=0;i<arr.length-1;i ++){
//     arr[i]=arr[i+1]
// }
// arr[arr.length-1]= first

// console.log(arr);

//right rotation by 1 element

// let arr =[1,2,3,4,5]

// let last = arr.length;

// for(let i =arr.length-1;i>0;i--){
//     arr[i]=arr[i-1]
// }
// arr[0]=last
// console.log(arr);

// left rotation by K step
// let arr = [1, 2, 3, 4, 5];
// let temp = new Array(arr.length)

// let k = Number(prompt("Enter k value"));let first = arr[0];
// k= k%arr.length

// for(let i=0;i<arr.length;i++){
//     temp[i] = arr[(i+k)%arr.length]
// }
// console.log(temp);

// left rotation 2 step best way

// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("Enter k value"));
// k= k%arr.length

// reverse(0,k-1)
// reverse(k,arr.length-1)
// reverse(0,arr.length-1)

// function reverse(i,j){
//   while(i<j){
//       let temp = arr[i]
//     arr[i]= arr[j]
//     arr[j]=temp
//     i++
//     j--
//   }
// }
// console.log(arr);

// marge two sorted array

// let arr1 =[2,5,6]
// let arr2=[1,3,4,8]

// let marge = new Array(arr1.length+arr2.length)

// let i =j=k=0;
// while (i<arr1.length&&j<arr2.length){
//     if (arr1[i]<arr2[j]){
//         marge[k++]= arr1[i++]
//     }else{
//         marge[k++]= arr2[j++]
//     }
// }
// while(j<arr2.length){
//     marge[k++]=arr2[j++]
// }
// while(i<arr1.length){
//     marge[k++]=arr1[i++]
// }
// console.log(marge);


// best time to buy and sell stocks
// var maxProfit = function(prices) {
//     let minPrice = Infinity
//     let maxProfit = 0;
//     for(let price of prices){
//         if(price <minPrice){
//             minPrice = price
//         } else {
//             maxProfit = Math.max(maxProfit,price - minPrice)
//         }
//     }
//     return maxProfit
// };


