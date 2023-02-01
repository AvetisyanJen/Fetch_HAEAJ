// working with APIs

async function getData() {
  const response = await fetch("https://openlibrary.org/search.json?author=J.R.R. Tolkien");
  const data = await response.json();
  console.log(data);
  const books = data.docs;
  books.sort((a, b) => new Date(a.first_publish_year) - new Date(b.first_publish_year))
  let filtered_data= books.filter(author => author.title.length <= 40);
  let list = "<ol>";
  for (const book of filtered_data) {
    list += `<li>${book.title} (${book.first_publish_year})</li>`;
  }
  list += "</ol>";
  document.getElementById("books").innerHTML = list;
}
getData()


async function getDatas() {
  const response_first = await fetch("https://openlibrary.org/search.json?author=Agatha Christie");
  const data_first = await response_first.json();
  const books_ag = data_first.docs;
  //books_ag.sort((a, b) => new Date(a.first_publish_year) - new Date(b.first_publish_year))
  books_ag.sort((a, b) => a.title.localeCompare(b.title));
  let filtered_data1= books_ag.filter(author => author.title.length <= 40);
  let list = "<ol>";
  for (const book of filtered_data1) {
    list += `<li>${book.title_suggest} (${book.language})</li>`;
  }
  list += "</ol>";
  document.getElementById("second_author").innerHTML = list;
}
getDatas()
 


   


  
// const fetch = require("node-fetch");

// fetch("https://openlibrary.org/search.json?author=Agatha Christie")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });