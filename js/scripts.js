let body = document.getElementsByTagName('body');
console.log(body);
// array
let classes =document.getElementsByClassName("my-header");

let id = document.getElementsById('my-paragaph');
// newer methods

let tag = document.querySelector('body');

let myClass= document.querySelector('.my-header');

let myId= document.querySelector('#my-paragaph');
console.log(myId);

let tags = document.querySelector('body');

remove();

// try it out
function queryDom(methodName, element) {
  switch (methodname.toLowerCase()) {
    case 'getElementsByTagName':
    document.getElementsByTagName(element);
    break;
    case 'querySelector': document.querySelector(`${element}`);
    break;
    default;
    break;
  }

}
