let input = document.querySelector("input")
const table = document.createElement("table")
table.className = "table"

const tr = document.createElement("tr")
document.querySelector("main").append(table)
table.append(tr)


fetch("https://myfakeapi.com/api/cars/")
   .then(response => response.json())
   .then(data => {
      let car = data.cars.slice(0, 100)
   


      function creatTable() {
   ///creat th 

         let title = Object.keys(car[0]).slice(1, 7)
         for (let i = 0; i < title.length; i++) {
            // console.log(title[i])
            const th = document.createElement("th")
            th.innerHTML = title[i]
            tr.append(th)
         }

         ///creat tr

         for (let i = 0; i < car.length; i++) {
            delete car[i].id
            delete car[i].availability
           
            const tr = document.createElement('tr');

            ///creat td

            for (let j in car[i]) {
               const td = document.createElement('td')
               td.innerText = car[i][j]

               tr.append(td);
            }
            table.append(tr);
         }
      }

      input.addEventListener("change", function () { searchCar() })

      function searchCar() {
              car = car.filter(el =>el.car === input.value)
              creatTable(car) 
              input.value = ""
           
           
      }
      

   })




