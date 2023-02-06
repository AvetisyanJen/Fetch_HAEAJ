// working with APIs

async function getBooksAgatha() {
  try {
    const response_first = await fetch("https://openlibrary.org/search.json?author=Agatha Christie");
    const data = await response_first.json();
    const books_agatha = data.docs
      .slice(0,50)
      .sort((a, b) => a.title.localeCompare(b.title))
      .filter(author => author.title.length <= 40);
    
    let list1 = "<ol>" + books_agatha.map(book => `<li>${book.title_suggest} (${book.language})</li>`).join("") + "</ol>";
    
    document.getElementById("second_author").innerHTML = list1;
  } catch (error) {
    console.error(error);
    document.getElementById("second_author").innerHTML = "An error occurred while fetching the books. Please try again later.";
  }
}
getBooksAgatha()




async function getDataTolkien() {
  try {
    const response = await fetch("https://openlibrary.org/search.json?author=J.R.R. Tolkien");
    const data1 = await response.json();
    const books_tolkien = data1.docs
      .slice(0, 56)
      .sort((a, b) => new Date(a.first_publish_year) - new Date(b.first_publish_year));
    
    let list2 = "<ol>" + books_tolkien.reduce((acc, book) => {
      if (book.title.length <= 40) {
        return acc + `<li>${book.title} (${book.first_publish_year})</li>`;
      }
      return acc;
    }, "") + "</ol>";
    
    document.getElementById("books").innerHTML = list2;
  } catch (error) {
    console.error(error);
    document.getElementById("books").innerHTML = "An error occurred while fetching the books. Please try again later.";
  }
}

getDataTolkien()






 
// used for seeing the data in the console
  
// import('node-fetch').then(({ default: fetch }) => {
//   fetch("https://openlibrary.org/search.json?author=Agatha Christie")
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }).catch(error => {
//   console.error(error);
// });
