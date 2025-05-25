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



