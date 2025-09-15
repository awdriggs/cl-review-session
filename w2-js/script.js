console.log("yo!")
//variables up top
let names = ["mario", "toadstool", "peach", "donkey kong", "luigi", "bowser", "koopa troopa"];
let usedNames = [];

//create the html element you need
let body = document.querySelector("body");
//add a h1 element with js
let title = document.createElement("h1");
//assigned some text to that element
title.innerHTML = "random name generator";
//added the title to the body;
body.append(title);

//create my button in javascript
let button = document.createElement("button");
button.innerHTML = "Get random character";
//add the button to the body
body.append(button);

//add the click listener to the button
button.addEventListener("click", getRandomName);

//creat the place for the name to get injected to
let nameSpace = document.createElement("p");
body.append(nameSpace)

//an example of an anonymous callback function
//button.addEventListener("click", () => {
//   console.log("anonymous callback function")
// });

function getRandomName(){
  console.log("getting a random name")
  //see if the names list is empty? 
  //if yes, move the names from used names back to og names list
  //clear usedNames to reset
  if(names.length == 0){
    names = usedNames;
    usedNames = [];
  }

//no repeats, pull the name from the list
//save those to a used array
//if no names are left, reset names to the orignal list of names
//  let grabName = names[Math.floor(Math.random() * names.length)];
let randomIndex = Math.floor(Math.random() * names.length); //gets a random whole number
let randomName = names.splice(randomIndex, 1)[0];
usedNames.push(randomName);
nameSpace.innerHTML = randomName;

console.log(randomName);
console.log(names);
console.log(usedNames);

}