console.log("yo!")
//variables up top
//let names = ["mario", "toadstool", "peach", "donkey kong", "luigi", "bowser", "koopa troopa"];
console.log(characters);
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
button.addEventListener("click", () => {
  //get a random character
  let aCharacter = getRandomName();
  //render than random character
  renderCharacter(aCharacter);

});

//creat the place for the name to get injected to
let nameSpace = document.createElement("div");
body.append(nameSpace)

//an example of an anonymous callback function
//button.addEventListener("click", () => {
//   console.log("anonymous callback function")
// });

function getRandomName() {
  console.log("getting a random name")
  //see if the names list is empty? 
  //if yes, move the names from used names back to og names list
  //clear usedNames to reset
  if (characters.length == 0) {
    characters = usedNames;
    usedNames = [];
  }

  //no repeats, pull the name from the list
  //save those to a used array
  //if no names are left, reset names to the orignal list of names
  //  let grabName = names[Math.floor(Math.random() * names.length)];
  let randomIndex = Math.floor(Math.random() * characters.length); //gets a random whole number
  let randomName = characters.splice(randomIndex, 1)[0];
  usedNames.push(randomName);

  return randomName;
}


function renderCharacter(cObj) {
  nameSpace.innerHTML = '';
  //build the title area
  let characterTitle = document.createElement("h2");
  characterTitle.innerHTML = cObj.name;
  nameSpace.append(characterTitle);

  //build the desciption
  let desc = document.createElement("p");
  desc.innerHTML = cObj.description;
  nameSpace.append(desc);
  //build the image
  let img = document.createElement('img');
  img.src = cObj.imgUrl;
  nameSpace.append(img);

}