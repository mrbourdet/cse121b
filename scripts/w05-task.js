/* W05: Programming Tasks */
//https://byui-cse.github.io/cse121b-ww-course/resources/temples.json

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];

/* async displayTemples Function */
let displayTemples = (temples) => 
{
    temples.forEach(temple => 
        {
            let article = document.createElement('article');

            let templeName = document.createElement('h3');
            templeName.textContent = temple.templeName;

            let img = document.createElement('img');
            img.setAttribute('src',temple.imageUrl);
            img.setAttribute('alt', temple.location);
            
            article.appendChild(templeName);
            article.appendChild(img);

            templesElement.appendChild(article);                
        }
    );            
};
/* async getTemples Function using fetch()*/
const getTemples = async () =>{
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    if (response.ok)
    {
        templeList = await response.json();
        displayTemples(templeList);      
    };
}
/* reset Function */
let reset = ()=> 
    {      
        templesElement.innerHTML ='';    
    }
/* sortBy Function */  // Actually filter by
const sortBy = (temples) => {    
    reset();
    let filter = document.querySelector("#sortBy").value;
    switch (filter) 
    {
        case "utah": // (temple)=>temple.location.includes("Utah")
            displayTemples(temples.filter((temple)=>temple.location.includes("Utah"))); //In Utah .filter iterates like a forEach
            break;
        case "notutah": //(temple)=>!temple.location.includes("Utah")
            displayTemples(temples.filter((temple)=>!temple.location.includes("Utah"))); //Outside of Utah Not = !
            break;
        case "older": //Built Before 1950 // "dedicated": "1884, May, 17",                    
            displayTemples(temples.filter((temple)=>new Date(1950,0,1) > new Date(temple.dedicated))); //compare Jan 1, 1950 to dedicated date *the month is 0-indexed           
            break;
        case "all": //no filter
            displayTemples(temples);
            break;                                              
    }
}

getTemples(); //Fetch all once and display opening screen

/* Event Listener */
document.querySelector('#sortBy').addEventListener('change',() => sortBy(templeList)); // each change will display again