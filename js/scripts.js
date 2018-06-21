// let passwordInput = document.forms.login.password;
// let emailInput = document.forms.login.email;
// let myPTag = document.querySelector('#data_binding')
// let submit = document.forms.login.subBtn;
// emailInput.addEventListener('keyup', e=>{
//   myPTag.textContent = e.target.value //e.target.value grabs the shit the user gives you and hands it back to them in the form of a p tag
// });
//
// submit.addEventListener('click', e =>{
//   if (passwordInput.value !== ''|| emailInput.value !=='') {
//     submit.disabled =false;
//   }
// });

let user = {
  name: "henry",
  password: 12345,
  status: "active"
};
let guest ={
  name: "guest",
  password: undefined,
  status: "inactive"
};
let newScope = {
  name: "peter parker",
  password: "spidermanrulz",
  instrument:"cello",
  myFunction: logMyName
};

newScope.myFunction("hewwo", "OWO");

function logMyName(greeting){ //definition
  console.log(this.name, this.password);
  alert(`${greeting}, ${this.name}`);
}
// logMyName.apply(user, ["hello"]);//call site
// logMyName.call(guest, "sign up");
let classScore = 90;
const scopeOne = {
  classScore: 75,
  scopeTwo: {
    classScore: 50
  }
}
console.log(classScore);
console.log(scopeOne.classScore);
console.log(scopeOne.scopeTwo.classScore);♦
