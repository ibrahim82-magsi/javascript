// alert("hello world")
// Given an array [2, 2, 2, 2, 2], use a loop to check whether all elements are equal.

// let arr = [2, 2, 2, 2, 2];
// let equal = true;

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[0]) {
//         equal = false;
//         break;
//     }
// }
// console.log(equal);


let arr = [2, 2, 2, 2, 2];
let equal = true;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
        equal = false;
        break

    }
}

console.log(equal);
