fetch("./public/data.json")
    .then(response => response.json())
    .then(data =>{
        for (const beer of data.cards) {
            document.getElementById("root").insertAdjacentHTML("beforeend", 
            `<div class="cards">
                <h2>${beer.title}</h2><br>
                <p>${beer.sub}</p><br>
                <p> ${beer.text}</p><br>
            </div>
            `)
        }
    })
  
