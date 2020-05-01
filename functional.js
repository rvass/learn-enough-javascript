// 6.1 Map

let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//  Example: "North Dakota" -> "north-dakota"
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join('-');
  }  

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function functionalUrls(elements) {
    return elements.map(element => urlify(element));
  }
  console.log(functionalUrls(states));


// 6.1.1 Exercises  

// Using map, write a function that takes in the states variable and returns an array of URLs of the form https://example.com/<urlified form>. 
function urlAddresses(elements) {
    return elements.map(n => `https://example.com/${urlify(n)}`)
}

console.log(urlAddresses(states));