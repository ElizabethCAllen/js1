// let inside= true;
// if(inside){
//   console.log('i am inside');
// } else{
//   console.log('i am not inside');
// }
// condition ? expression1 : expression2

// let example2 =inside ? "I am inside": "I am not inside"

// let number = 15;
// console.log(number > 10 ? "number is greater than 10" :"number is less than 10");

// let name= false;
// let email = true;
//
// if (name) {
//   console.log("I have name")
// }
// else if (email) {
//   console.log("I have email");
//
// }
// else {
//   console.log("I have none");
// }

// name ? "I have name" :email ? "I have email" :"I have none";
// console.log(name ? "I have name" :email ? "I have email" :"I have none");

// let iAmHUngry = true;
// let money = 5;
// if (iAmHUngry) {
//   if (money > 10) {
//     'i am hungry and I have more than ten'
//   }
//   else {
//     'i am hungry and i have less than ten'
//   }
//   else {
//     if (money > 10) {
//       'i am not hungry and i have more than ten'
//
//     }
//     else {
//       'i am not hungry and i have less than ten'
//     }
//   }
// }
// let hungry= iAmHUngry? ((money>10)? "I am hungry ad i have more than 10": "i am hungry amd have less than 10"):
//             ((money<10)? "I am not hungry and i have more than 10": "I am not hungry and i have less than 10")
// console.log(hungry);


let arr= ["javascript"];
console.log(arr[0]);

let tryIt =["Pilgrimage",36 , false, 2013];
console.log(tryIt.length);
// tryIt.push("pizza");
// // .push adds a vaue to the end of an array
// console.log(tryIt);
// tryIt.unshift(7);
// // .upshift adds a value to the beginning of the array
// console.log(tryIt);
// console.log(tryIt [5]);
// console.log(tryIt [4]);
// tryIt. pop();
// // .pop removes the value at the end of the array
// tryIt.shift();
// // .shift removes the first value as the array
// let first = tryIt.shift();
// console.log(tryIt[tryIt.length -2]);
// // removes the first item of an array and returns that removed irem to you as your variable 'first'
// console.log(tryIt, first);

// tryIt.splice(2);
// // ^^^one arg will remove that index and everything after
// tryIt.splice(2, 1);
// // ^^^ with 2 args you start removing item at the first arguement (index) and then remove only the number of items that you passed in as the second arguement (delete count)
let removedItems= tryIt.splice(2, 1, true, "faith", "alex");

// console.log(tryIt, "this is the result of the splice");
// console.log(removedItems, "the thing that we removed");
// console.log(tryIt.indexOf("Pilgrimage"));
// // .indexOf gives you the first indexof a member of your array
// // .lastIndexOf gives you the last index of a member of the array
//
tryIt.reverse();
// reverses the order of the array
// use .sort to sort the array
console.log(tryIt);
// below how to find the length of an array and pick out the last and second to last values
// var fruits = ['Apple', 'Banana'];
//
// console.log(fruits.length);
// // 2
// var first = fruits[0];
// // Apple
//
// var last = fruits[fruits.length - 1];
// // Banana



const products = [["blanket", 12.99, "the best blanket around"], ['rattle',4.99,'it rattles man'], ['diapers', 12.99, 'they catch the doo doo']];
console.log(products[0][1]);

const mov1= ["the Hobbit: An Unexpected Journey", 'Bilbo Baggins'];
const mov2= ["Howl's Moving Castle", 'Sofie'];
const mov3= ["The Hobbit: Desolation of Smaug", 'Bilbo Baggins'];
const mov4= ["Troll Hunter", 'Hans'];
const mov5= ["Raw", 'Justine'];

favoriteMovies.push(mov1, mov2, mov3, mov4, mov5);
let titles=[];
titles.push(favoriteMovies[0][0], favoriteMovies [1][0]);
