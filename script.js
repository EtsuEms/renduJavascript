// 1. Récuperer les données avec (fetch)

const jsonUrl = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/escape-game.json";

fetch(jsonUrl)
  .then(response => response.json())
  .then(data => { 
    
    // test
    console.log(data.activites);

   // 2. Récuperer les éléments DOM 
    const main = document.getElementById("escapeGame")

    const logo = document.getElementById("logoNav");
    const heroContainer = document.getElementById("heroSection");
    const avantageContainer = document.getElementById("avantagesSection");
    const activityContainer = document.getElementById("activitySection");
    const temoignagesContainer = document.getElementById("temoignagesSection");

    logo.textContent = data.nomCommercial;

    // 3. création élément section héro
    const phraseAccroche = document.createElement("h1");
    phraseAccroche.textContent= data.phraseAccroche;

    // test
    console.log(phraseAccroche);
    
    const btnCTA = document.createElement("button");
    btnCTA.textContent = data.texteAppelAction;

    heroContainer.appendChild(phraseAccroche);
    heroContainer.appendChild(btnCTA);  
    

    // création éléments section avantages
    array.forEach(avantage => {
        afficherAvantage(avantage);
    });    



    // création éléments section activité

    // création éléments section témoignages

});


// fonction carte avantage
function afficherAvantage(avantage) {
    const div = document.createElement("div");

    const avantageTitle = document.createElement("h3");
    avantageTitle.textContent = 
}