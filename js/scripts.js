// let body = document.getElementsByTagName('body');
// console.log(body);
// // array
// let classes =document.getElementsByClassName("my-header");
//
// let id = document.getElementsById('my-paragaph');
// // newer methods
//
// let tag = document.querySelector('body');
//
// let myClass= document.querySelector('.my-header');
//
// let myId= document.querySelector('#my-paragaph');
// console.log(myId);
//
// let tags = document.querySelector('body');

// remove();
//
// // try it out
// function queryDom(methodName, element) {
//   switch (methodname.toLowerCase()) {
//     case 'getElementsByTagName':
//     document.getElementsByTagName(element);
//     break;
//     case 'querySelector': document.querySelector(`${element}`);
//     break;
//     default;
//     break;
//   }
// }
let myClass= document.querySelector('.my-header');

myClass.addEventListener(
  'click', //first arg
  e=>{//second arg
    console.log(e, 'this is an event');
    alert('you clicked on me!!')
  }
)
let myBtn = document.querySelector('.btn');
let div = document.querySelector('div');
myBtn.addEventListener('click',e=>{
    e.target.textContent="You just killed a puppy";
  })
div.addEventListener('mouseenter', e=>{
  e.target.style.backgroundColor = "red";
  console.log(e);
})
div.addEventListener('mouseleave', e=>{
  e.target.style.backgroundColor= "purple";
})

div.innerHTML= "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, reiciendis?</p>";
