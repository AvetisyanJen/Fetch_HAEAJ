// working with APIs

async function getBooksAgatha() {
  const response_first = await fetch("https://openlibrary.org/search.json?author=Agatha Christie");
  const data_first = await response_first.json();
  const books_agatha = data_first.docs.slice(0,50);
  //books_agatha.sort((a, b) => new Date(a.first_publish_year) - new Date(b.first_publish_year))
  books_agatha.sort((a, b) => a.title.localeCompare(b.title));
  let filtered_data1= books_agatha.filter(author => author.title.length <= 40);
  let list = "<ol>";
  for (const book of filtered_data1) {
    list += `<li>${book.title_suggest} (${book.language})</li>`;
  }
  list += "</ol>";
  document.getElementById("second_author").innerHTML = list;
}
getBooksAgatha()
async function getDataTolkien() {
  const response = await fetch("https://openlibrary.org/search.json?author=J.R.R. Tolkien");
  const data = await response.json();
  console.log(data);
  const books = data.docs.slice(0,56);
  books.sort((a, b) => new Date(a.first_publish_year) - new Date(b.first_publish_year))//returns the date number in increasing order
  let filtered_data= books.filter(author => author.title.length <= 40);
  let list = "<ol>";
  for (const book of filtered_data) {
    list += `<li>${book.title} (${book.first_publish_year})</li>`;
  }
  list += "</ol>";
  document.getElementById("books").innerHTML = list;
}
getDataTolkien()



 
// used for seeing the data in the console
  
// const fetch = require("node-fetch");

// fetch("https://openlibrary.org/search.json?author=Agatha Christie")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });