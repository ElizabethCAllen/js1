// let object1={}
// let object2= new Object ()
//
// let person={
//   firstName:"liz",
//   lastName:"allen",
//   age: 23,
//   favorites:["food", "netflix", "candy"],
//   desc:{
//     hairColor:"brown"
//   }
// }
// object1.food = "food";
// object1['color']= 'green';
// console.log(object1);
// console.log(object1.age);
// //
// // //for in
// // for(let key in person){
// //   console.log(person[key]);
// // }
// // // for of loops are for arrays and not effiecent as for inloops
// // for (let [key, value] of  Object.entries(person)) { //object must be capitalized it is a special reserved word
// //   console.log(key, value);
// // }
// let newObj= Object.create(object1);
// newObj.flower='sunflower';
// console.log(newObj);
// newObj.color='blue';
// console.log(newObj);
// console.log('object1', object1);

//
//
// let recipe = {
//   flour: '20 oz',
//   eggs: 3,
//   vanilla: true,
//   rum: 'hella'
// };
// console.log(recipe);
//
// let clone = Object.create(recipe);
// console.log(Object.getPrototypeOf(recipe));
//
// let vehicle = {
//   wheels:4,
//   windows: null,
//   engineSize: '4 cylinder',
//   doors:4
// }
//
//
// let colorScheme1 = ['red', 'blue', 'black', 'white'];
// console.log(colorScheme1);
// console.log(Object.getPrototypeOf(colorScheme1));
//
//
// function Spaceship(rockets, fluxCapacitor, pilot, blasters, shield, landingGear) {
//   this.rocket = rockets;
//   this.fluxCapacitor = fluxCapacitor;
//   this.pilot = pilot;
//   this.blasters = blasters;
//   this.shield= shield;
//   this.landingGear = landingGear;
// }
//
// function Todo(name, dueDate, status, timeElapsed, dueByTime, peopleWith, priority, tags, label, necessaryWith) {
//   this.name = name;
//   this.dueDate
// }
//
// let un = (prompt("Please create a username", 'Meaty-Pinatas'));
// let password = (prompt("Please create a password", '********'));
// function User(name, pw) {
//   this.name= name;
//   this.pw= pw;
// }
// let newUser= new User(un, password);
// console.log(newUser);
// //instance = singleton  console example --->User {name: "Meaty-Pinatas", pw: "********"}
//
// let advertisement = "Hey! welcome to our site!! get 40% off today!!";
// setTimeout(()=>{
//   alert(advertisement);
// },5000);






let cart = [];
function Product(name, price, description,) {
  this.name= name;
  this.price= price;
  this .description= description;
}
let soapBtn= document.forms.orderForm.soap;
soapBtn.addEventListener('click', e=>{
  e.preventDefault();
  let soap = new Product("soap", 2.99, "makes you clean");
  cart.push(soap);
  localStorage. setItem('soap', JSON.stringify(soap));
})


function getSoap() {
  let storedItem= localStorage.getItem('soap')
  console.log(JSON.parse(storedItem));
}

getSoap();
