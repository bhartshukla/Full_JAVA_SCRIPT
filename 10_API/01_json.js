//  API == APPLICATION PROGRAMMING INTERFACE

//JSON JAVASCRIPT OBJECT NOTATION

// Accesssing data from json\

// JSON.parse(data)  to parse a string data into a js object

// JSON string (note the quotes around the whole object)
let jsonData = `
{
  "name": "Bharat",
  "city": "Lucknow",
  "profession": "Web Developer",
  "language": "English"
}`;

// Parse JSON string into JavaScript object
let validRes = JSON.parse(jsonData);
console.log(validRes)
console.log(validRes.city)

/*


{
  "name": "Bharat",
  "city": "Lucknow",
  "profession": "Web Developer",
  "language": "English"
}

*/

//JSON.stringify(json) to parse a js object data into json

let jsobj = {
  "name": "Bharat",
  "city": "Lucknow",
  "profession": "Web Developer",
  "language": "English"
}

let jsondata= JSON.stringify(jsobj)
console.log(jsonData)