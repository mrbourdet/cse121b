import { GetFamily, ProcessFamily } from "./getFamily.js";
document.getElementById("year").innerHTML = new Date().getFullYear();
//let jsonSource = "https://mrbourdet.github.io/cse121b/Final/postage.json";
let jsonURL = "family.json";
//document.getElementById("calculate-button").addEventListener("click", postageRateJson = getRate());
//let postageRateJson = getRate(jsonSource);
let familyFileJson = GetFamily(jsonURL);
//let familyData = ProcessFamily(familyFileJson);
//document.getElementById("shipping-cost").textContent = "family";
console.log(familyFileJson);
//let postageRate= processRate(postageRateJson);
//console.log(postageRateJson);
let fullNames = []
let familyFile = [{
    "firstName": "Rene",
    "lastName": "Bourdet",
    "birthYear": "1920",
    "marriage" : "0"
}, {
    "firstName": "Lydia",
    "lastName": "Bourdet",
    "birthYear": "1926",
    "marriage" : "2"
}, {
    "firstName": "Linda",
    "lastName": "Murtha",
    "birthYear": "1945",
    "marriage" : "1"
}, {
    "firstName": "Elaine",
    "lastName": "Retzer",
    "birthYear": "1946",
    "marriage" : "1"
}, {
    "firstName": "Lucie",
    "lastName": "Killian",
    "birthYear": "1956",
    "marriage" : "2"
}, {
    "firstName": "Michael",
    "lastName": "Bourdet",
    "birthYear": "1959",
    "marriage" : "2"
}, {
    "firstName": "Katherine",
    "lastName": "Henson",
    "birthYear": "1963",
    "marriage" : "2"
}, {
    "firstName": "John",
    "lastName": "Bourdet",
    "birthYear": "1966",
    "marriage" : "2"
}]
for (let i = 0; i < familyFile.length; i++) {
    const fullName = `${familyFile[i].firstName} ${familyFile[i].lastName}`;
    fullNames.push(fullName);
}
console.log(fullNames)
// let firstNames = ["Rene", "Lydia", "Linda", "Elaine", "Lucie", "Michael", "Katharine", "John"];
// let lastNames = ["Bourdet", "Bourdet", "Murtha", "Retzer", "Killian", "Bourdet", "Henson", "Bourdet"];

// for (let i = 0; i < firstNames.length; i++) {
//     const fullName = `${firstNames[i]} ${lastNames[i]}`;
//     fullNames.push(fullName);
// }
// let birthYears = ["1920", "1926", "1945", "1947", "1956", "1959", "1963", "1966"];

// let index = firstNames.findIndex(function (element) {
//     return element =="Lucie";
// });
const familyElement = document.querySelector('#familyMembers');
let displayFamily = (names) => 
{
    names.forEach(name => 
        {
            let article = document.createElement('article');

            let fullName = document.createElement('p');
            fullName.textContent = `${name.firstName} ${name.lastName} - ${name.birthYear}`;

            // let img = document.createElement('img');
            // img.setAttribute('src',temple.imageUrl);
            // img.setAttribute('alt', temple.location);
            
            article.appendChild(fullName);
            // article.appendChild(img);

            familyElement.appendChild(article);                
        }
    );            
};
displayFamily(familyFile);