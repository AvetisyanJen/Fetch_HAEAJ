let database = fetch('	https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    // for(i=0; i<data.drinks.length; i++){
    //     // console.log(data.drinks[i].strDrinkThumb)
    // }
    // data.drinks.forEach(element => {
    //     console.log(element.strDrinkThumb)
    // });
    for(i=0; i<data.drinks.length; i++){
        document.querySelector(".image"+i).innerHTML = "<img src="+data.drinks[i].strDrinkThumb+" width=300px height=300px>"+"<h2><b>"+data.drinks[i].strDrink+"</b></h2>"+"<p><b>"+"Ingedients: </b>"+data.drinks[i].strIngredient1+", "+data.drinks[i].strIngredient2+", "+data.drinks[i].strIngredient3+", "+data.drinks[i].strIngredient4+", "+data.drinks[i].strIngredient5+", "+data.drinks[i].strIngredient6+", "+data.drinks[i].strIngredient7+"</p>"+"<p><q><b>"+"Instructions: </b>"+data.drinks[i].strInstructions+"</q></p>"
        }
        const text = document.querySelector("q").outerHTML;
        console.log(text)
  });
