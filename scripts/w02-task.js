/* W02-Task - Profile Home Page */
/* Step 1 - Setup type tasks - no code required */
/* Step 2 - Variables */
let fullName="Michael Bourdet";
let currentYear=2023;
let profilePicture = "images/IMG_1164.JPG";
/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageTag = document.getElementsByTagName("img");
const imageElement = imageTag[0];

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src',profilePicture);
imageElement.setAttribute('alt',`Profile image of ${fullName}`);

/* Step 5 - Array */
let foodArray=["cheese", "pasta", "ice cream", "sushi"];
foodElement.innerHTML = `${foodArray}`;
let anotherFood="beef steak";
foodArray.push(anotherFood);
foodElement.innerHTML += `<br>${foodArray}`;
foodArray.shift();
foodElement.innerHTML += `<br>${foodArray}`;
foodArray.pop();
foodElement.innerHTML += `<br>${foodArray}`;


