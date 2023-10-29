/* W05: Programming Tasks */
// https://byui-cse.github.io/cse121b-ww-course/resources/temples.json
// {
//     "templeName": "Aba Nigeria",
//     "location": "Aba, Nigeria",
//     "dedicated": "2005, August, 7",
//     "area": 11500,
//     "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
//   }

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        let article = document.createElement("article");
        let header = document.createElement("h3");
        header.textContent = temple.templeName;
    
        let image = document.createElement("img");
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", temple.location);
        //image.setAttribute("style", "max-width:400px");
    
        article.appendChild(header);
        article.appendChild(image);
        templesElement.appendChild(article);
      });
    };

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
      let templeList = await response.json();
      //templeList = data.flat()
      //templeList.push(data);
      console.log(templeList);
      displayTemples(templeList);
    }
  }

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
    }

getTemples();
reset();

/* sortBy Function */
const sortBy = (templeList) => 
{
    reset();
    let filter = document.querySelector("#sortBy");
    switch (filter.value) {
        case "utah":
            displayTemples(temples.filter((temple)=>temple.location.includes("Utah")));
            break;
        case "notutah":    
            displayTemples(temples.filter((temple)=>!temple.location.includes("Utah")));
            break;
        case "older":  //Built Before 1950 // "dedicated": "1884, May, 17",                    
            let date1 = new Date(1950,0,1);
            displayTemples(temples.filter((temple)=>date1 > new Date(temple.dedicated)));                    
            break;
        case "all":  
            displayTemples(temples);
            break;
    }
}
getTemples();
/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});

