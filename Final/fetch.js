// fetch.js
const fileName = "postage.json"
const url = `https://mrbourdet.github.io/cse121b/Final/${fileName}`;
async function getRate(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
  results = data;
  console.log("first: ", results.RateV4Response.Package.Postage.Rate);
}
getRate(url);