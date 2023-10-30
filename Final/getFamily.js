export function GetFamily() 
{
    // let fullNames = []
    let familyFile = [{
        "firstName": "Rene",
        "lastName": "Bourdet",
        "birthDate": "December 31, 1920",
        "marriage" : "2"
    }, {
        "firstName": "Lydia",
        "lastName": "Bourdet",
        "birthDate": "January 7, 1926",
        "marriage" : "2"
    }, {
        "firstName": "Lucie",
        "lastName": "Killian",
        "birthDate": "October 18, 1956",
        "marriage" : "2"
    }, {
        "firstName": "Michael",
        "lastName": "Bourdet",
        "birthDate": "January 18, 1959",
        "marriage" : "2"
    }, {
        "firstName": "Katherine",
        "lastName": "Henson",
        "birthDate": "June 6, 1963",
        "marriage" : "2"
    }, {
        "firstName": "John",
        "lastName": "Bourdet",
        "birthDate": "February 25, 1966",
        "marriage" : "2"
    }]
    // for (let i = 0; i < familyFile.length; i++) {
    //     const fullName = `${familyFile[i].firstName} ${familyFile[i].lastName}`;
    //     fullNames.push(fullName);
    // }
    
    const familyElement = document.querySelector('#familyMembers');
    let displayFamily = (names) =>
    {
        names.forEach(name => 
            {
                let paragraph = document.createElement('p');
                let unorderedList = document.createElement('ul');
                paragraph.appendChild(unorderedList);
                let fullName = document.createElement('li');
                fullName.textContent = `${name.firstName} ${name.lastName} ---- Birthdate: ${name.birthDate}`;
                paragraph.appendChild(fullName);
                familyElement.appendChild(paragraph);                
            }
        );            
    };
    displayFamily(familyFile);
}

export function CalculateAge() {
    const birthdateInput = document.getElementById("birthdate");
    const resultElement = document.getElementById("result");

    // Get the birthdate from the input field
    const birthdate = new Date(birthdateInput.value);

    // Check if a valid date was entered
    if (isNaN(birthdate)) {
        resultElement.value = `Please enter a valid birthdate.`;
        return;
    }

    // Get the current date
    let today = new Date();

    // Calculate the age
    let age = today.getFullYear() - birthdate.getFullYear();

    // Check if the birthday hasn't occurred this year yet 
    if (today.getMonth() < birthdate.getMonth() || (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())) {
        age--;
    }
    let smartRemark = ``
    if (age <=3) {smartRemark = `What a baby!`;}
    else if (age < 3) {smartRemark = `Go find your mom!`;}
    else if (age < 7) {smartRemark = `You're a MID KID! (or is it a squid?)`;}
    else if (age < 12) {smartRemark = `Still Wet Behind the Ears`;}
    else if (age == 12) {smartRemark = `Congratulations. You're a tweenie`;}
    else if (age < 18) {smartRemark = `So now you are a teenager. I bet you know EVERYTHING.`;}
    else if (age < 21) {smartRemark= `You can vote, but you still can't get drunk. Sorry.`;}
    else if (age < 30) {smartRemark = `Sorry. You still can't drink. Word of Wisdom, remember?`;}
    else if (age < 40) {smartRemark = `Is that a wrinkle?`;}
    else if (age < 50) {smartRemark = `Over the hill.`;}
    else if (age < 65) {smartRemark= `Now things are starting to fall apart`;}
    else if (age < 80) {smartRemark = `A little cranky are you?`;}
    else if (age < 100) {smartRemark = `I bet they don't make the parts for you anymore.`;}
    else if (age < 110) {smartRemark = `Just getting out of bed is a victory.`;}
    else { smartRemark = `OK now you are OLD!`;}
        
    resultElement.value = `Your Age is ${age} years old. ----- ${smartRemark}`;
}
  