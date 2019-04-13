// require("dotenv").config();

// var keys = require("./keys.js")
var axios = require("axios");
// var moment = require("moment");
// var spotify = new spotify(keys.spotify);
var input = process.argv[2];

console.log("Before Axios");

// Then run a request with axios to the OMDB API with the movie specified
axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=fdc8c4b3")
  .then(callBack);

function callBack(response) {

  var { Title, Year, Genre, imdbRating } = response.data;

  console.log("The movie's rating is: " + imdbRating);
  console.log("Title: ", Title);
  console.log("Year: ", Year);
  console.log("Genre ", Genre);

};


console.log("After Axios");



