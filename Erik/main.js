let database = fetch('	https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    // null-r@ poxume datark toxov
    data.drinks.forEach(element => { 
      for(let el in element){
        if(element[el]==null){
          element[el]=''
        }
      }
    });

        // DEEP klonavorum aranc original obekti popoxman
    const Y = deepClonee(data.drinks); 
    const X = deepClonee(data.drinks);
    function deepClonee(obj) { // rekussia
      const clone = {};
      for(const i in obj) {   
        if (obj[i] instanceof Object) { // instanceof stugum e ardyoq obekt@ patkanume nshvac klassin
          clone[i] = deepClonee(obj[i]);
          continue;
        }
        clone[i] = obj[i];
      }
      return clone;
    }
    data.drinksrus = Object.values(Y); // obekt@ sarqumenq massiv
    data.drinkshay = Object.values(X);

    // stexcumenq massivner ruseren ev hayeren 
    array_rus_name = ['Маргарита', 'Голубая Маргарита', 'Маргарита Томми', 'Уайткэп Маргарита', 'Клубничная Маргарита', 'Арбузная Маргарита'];
    array_hay_name = ['Մարգարիտա', 'Կապույտ Մարգարիտա', 'Թոմի Մարգարիտա', 'Սպիտակ գլխարկ Մարգարիտա', 'Ելակի Մարգարիտա', 'Ձմերուկի Մարգարիտա'];
    array_rus_instruction = ['Протрите край стакана ломтиком лайма, чтобы соль прилипла к нему. Позаботьтесь о том, чтобы увлажнить только внешний край и посыпать его солью. Соль должна быть на губах выпившего и никогда не смешиваться с коктейлем. Встряхните остальные ингредиенты со льдом, затем осторожно перелейте в бокал.', 'Натрите край бокала для коктейля соком лайма. Обмакнуть край в крупную соль. Смешать текилу, блю кюрасао и сок лайма со льдом, процедить в бокал с соленой оправой и подавать.', 'Встряхнуть и процедить в охлажденный коктейльный бокал.', 'Поместите все ингредиенты в блендер и взбейте до получения однородной массы. Из этого получается один напиток.', 'Натрите ободок коктейльного бокала лимонным соком и обмакните ободок в соль. Смешайте шнапс, текилу, трипл сек, лимонный сок и клубнику со льдом, процедите в бокал с соленой каемкой и подавайте.', 'В стеклянной банке смешайте арбуз и 5 листьев мяты в пюре и процедите. Затем добавьте грейпфрутовый сок, сок половины лайма и текилу, а также немного льда. Накройте банку крышкой и встряхните. Налейте в стакан и добавьте еще льда. Украсьте свежей мятой и небольшим ломтиком арбуза.'];
    array_hay_instruction = ['Գավաթի եզրին քսեք լայմի մի կտոր, որպեսզի աղը կպչի դրան: Համոզվեք, որ խոնավացաց է միայն արտաքին եզրը և շաղ տալ այն աղով: Աղը պետք է կպչի շուրթերին և երբեք չխառնվի կոկտեյլի հետ ։ Մնացած բաղադրիչները հարում ենք սառույցով, ապա զգուշորեն լցնում բաժակի մեջ։', 'Կոկտեյլ բաժակի եզրին քսեք լայմի հյութ: Ընկղմեք կողմը կոպիտ աղի մեջ: Տեկիլան, կապույտ կուրասաոն և լայմի հյութը խառնել սառույցի հետ, քամել աղի եզրով բաժակի մեջ և մատուցել:', 'Թափահարեք և քամեք սառեցված կոկտեյլ բաժակի մեջ:', 'Տեղադրել բոլոր բաղադրիչները բլենդերի մեջ և հարել մինչև հարթ: Դրանից ստացվում է մեկ խմիչք:', 'Կոկտեյլ բաժակի եզրը քսել կիտրոնի հյութով և եզրը թաթախել աղի մեջ։ Խառնել շնապսը, տեկիլան, եռակի սեկը, կիտրոնի հյութը և ելակը սառույցի վրա, քամել աղի եզրով բաժակի մեջ և մատուցել:', 'Ապակե տարայի մեջ խառնեք ձմերուկը և անանուխի 5 տերևները խյուսի մեջ և քամեք: Դրանից հետո ավելացրեք գրեյպֆրուտի հյութը, կես կրաքարի հյութը և տեկիլան, ինչպես նաև մի փոքր սառույց: Կափարիչը դրեք տարայի վրա և թափահարեք ։ Լցնել բաժակի մեջ և ավելացնել ավելի շատ սառույց: Զարդարեք թարմ անանուխով և ձմերուկի մի փոքր կտորով:'];
    
    // massivneric elementner@ poxancumenq obektnerin
    function pushArrayName (array, object){
        for(let m=0; m<array.length; m++){
          object[m].strDrink = array[m]
        }
      }
      function pushArrayInstruction (array, object){
        for(let m=0; m<array.length; m++){
          object[m].strInstructions = array[m]
        }
      }
    pushArrayName(array_rus_name, data.drinksrus);
    pushArrayInstruction(array_rus_instruction, data.drinksrus);
    pushArrayName(array_hay_name, data.drinkshay);
    pushArrayInstruction(array_hay_instruction, data.drinkshay);
    data.drinks.header = '"Margarita" cocktails collection';  // obektnerum avelacnum enq 'header' banaliner ir arjeqnerov
    data.drinksrus.header = 'Коллекция коктейлей "Маргарита"';
    data.drinkshay.header = '«Մարգարիտա» կոկտեյլների հավաքածու'

    // stexcumenq bacvox selektor
    document.querySelector('.select').innerHTML = '<form name="myForm"><select name="user"><option value="eng">english</option><option value="rus">русский</option><option value="hay">հայերեն</option></select></form>';

    // buttoni popoxutyan funkcia
    
    let capsule = data.drinks;  
    let languagesSelect = myForm.user;
    function changeOption(){
    let selectedOption = languagesSelect.options[languagesSelect.selectedIndex];
    let button_value = selectedOption.value
      
    if(button_value=='rus'){
      capsule=data.drinksrus     
    } else if(button_value=='hay'){
      capsule=data.drinkshay} else {capsule=data.drinks}
    addHTML()
    };    

    languagesSelect.addEventListener("change", changeOption);
             
      // avelacnumenq HTML parunakutyun@
    function addHTML (){
      // stexcumenq h1 vernagir
    document.querySelector('.header').innerHTML = '<div><h1>' + capsule.header + '</h1></div>';
      // div-ri  avelacum massivi elementneri qanaki hamapatasxan 
    let begin = ''
    for(let j=0; j<data.drinks.length; j++){
      begin  += '<div class=image'+j+'></div>';
    };
      //div-i parunakutyun
    document.querySelector('.main').innerHTML = begin
    for (i = 0; i < capsule.length; i++) {
      document.querySelector(".image" + i).innerHTML = "<img src=" + capsule[i].strDrinkThumb + " width=300px height=300px>" + "<h2><b>" + capsule[i].strDrink + "</b></h2>" + "<p><b>" + "Ingedients: </b>" + capsule[i].strIngredient1 + "   " + capsule[i].strIngredient2 + "   " + capsule[i].strIngredient3 + "   " + capsule[i].strIngredient4 + "   " + capsule[i].strIngredient5 + "   " + capsule[i].strIngredient6 + "   " + capsule[i].strIngredient7 + "</p>" + "<p><b>" + "Instructions: </b>" + capsule[i].strInstructions + "</p>"
    }
  }
  addHTML()
  });