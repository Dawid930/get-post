                                        // map- async-await-el
 
const loadEvent = async () =>{
    const rootElement = document.getElementById("root");
    const beersObjData = await fetch("public/data.json");
    const beersObj = await beersObjData.json();

    const beerHTML = beersObj.cards.map(x => `
    <div class="beer">
        <h2>${x.title}</h2>
        <h4>${x.sub}</h4>
        <p>${x.text}</p>
    </div>
    `);

    console.log(beerHTML);

    rootElement.insertAdjacentHTML('beforeend', beerHTML.join(''))  // join nelkul a .map arrayt dob vissza, amit nem jol fog megjeleniteni a bongeszo, mert string kell neki. A .join stringet ad vissza!!

}

window.addEventListener("load", loadEvent)

/* 
                                        //for ciklussal
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
  
 */