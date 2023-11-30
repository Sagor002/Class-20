// // dom == document object model
// // api --> Application programming interface
// // browser api

// //select elements
// // selecting by id
// const myHeading = document.getElementById("heading");

// // console.log(myHeading);

// // selecting by class name
// const myPara1 = document.getElementsByClassName("para1"); //[]

// // console.log(myPara1);

// const myPara2 = document.getElementsByClassName("para2"); //[]

// // console.log(myPara2);

// // selecting by tag name
// const myHeading2 = document.getElementsByTagName("h2");

// console.log(myHeading2);

// // Query selector
// const myDiv = document.querySelector('div');
// const myHeading3 = document.querySelector("#heading")
// // console.log(myDiv);

// // console.log(myHeading3);

// // const myPara1 = document.querySelector('.para1');

// // console.log(myPara1);

// // const myPara1 = document.querySelectorAll('.para1');

// // console.log(myPara1);

// const myPara2 = document.querySelectorAll('.para2');

// console.log(myPara2);

// // manipulate styles
// const heading = document.querySelector("#heading");

// heading.style.color = "red";
// heading.style.backgroundColor = "black";

// document.body.style.backgroundColor = "#b4d6c2";

// manipulate text contents

// const h1 = document.querySelector(".my__title");

// const countryName = "Bangladesh";
// h1.textContent = `hello ${countryName}!`;

//  */

// create element and append
// const container  = document.querySelector(".container");

// //create a paragraph el
// const newParagraph = document.createElement('p');
// newParagraph.textContent = "Hello, I am your new paragraph!!";
// newParagraph.style.fontSize = "32px";
// newParagraph.style.fontFamily = "Tahoma";
// container.appendChild(newParagraph);
// */
// const myButton = document.querySelector(".my__button");

// myButton.addEventListener("click", buttonClick);
// function buttonClick() {
// document.title = "My new title"
// document.body.style.backgroundColor = "red";
// myButton.textContent = "I'm clicked";
// }
// creating a modal
const btnOpen = document.querySelector(".open__modal");
const btnClose = document.querySelector(".close__modal");
const modal = document.querySelector(".modal");

const modalOpen = () => {
  // modal.style.display = "flex";
  // modal.classList.remove("hidden");
  modal.classList.toggle("hidden");
};

const modalclose = () => {
  // modal.style.display = "none";
  // modal.classList.add("hidden");
    modal.classList.toggle("hidden");
};

btnOpen.addEventListener("click", modalOpen);
btnClose.addEventListener("click", modalclose);
