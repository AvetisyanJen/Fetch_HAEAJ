const fetch = require("node-fetch");

fetch("https://openlibrary.org/search.json?author=Agatha Christie")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });