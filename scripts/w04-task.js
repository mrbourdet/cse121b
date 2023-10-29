/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfle = {
    name: 'Michael Bourdet',
    photo: 'images/IMG_1164.JPG',
    favoriteFoods: ['cheese','bread'],
    hobbies: ['computers', 'music'],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfle.placesLived.push(
    {
        place: 'Saratoga, CA',
        length: '18 years'
    });
myProfle.placesLived.push(
    {
        place: 'New York City',
        length: '16 years'
    });
myProfle.placesLived.push(
    {
        place: 'Valley Stream, NY',
        length: '8 years'
    });

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfle.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfle.photo;
document.querySelector('#photo').alt = myProfle.photo;
/* Favorite Foods List*/
myProfle.favoriteFoods.forEach(food => {
    let li=document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfle.hobbies.forEach(hobby => {
    let li=document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfle.placesLived.forEach(placesLived => {
    let dt=document.createElement('dt');
    dt.textContent = placesLived.place;
    document.querySelector('#places-lived').appendChild(dt);
    // let dt2=document.createElement('dd');
    // dt2.textContent = placesLived.length;
    // document.querySelector('#places-lived').appendChild(dd);
    let dd=document.createElement('dd');
    dd.textContent = placesLived.length;
    document.querySelector('#places-lived').appendChild(dd);
});

//Create an HTML <dt> element and put its place property in the <dt> element.
//Create an HTML <dd> element and put its length property in the <dd> element

