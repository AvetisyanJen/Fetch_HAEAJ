
fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
.then(response => response.json())
.then(result => {
console.log(result)

const data = result.slice(0,10);

 for(i=0; i< data.length;i++){
 const maindiv = document.querySelector('#mainDiv');
 const div = document.createElement('div');
 div.className = "pic_div";
 const h4 = document.createElement('h4');
 const p = document.createElement('p')
 p.classList = "price";
 const img = document.createElement('img');
 img.src = data[i].image_link;
 img.className = "pic";
 div.append(img,h4,p);
 h4.textContent = (data[i].name)
 p.textContent = data[i].price;
 maindiv.appendChild(div);
}
});