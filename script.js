// 1. Récuperer les données avec (fetch)

// const { createElement } = require("react");

const jsonUrl = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/escape-game.json";

fetch(jsonUrl)
  .then(response => response.json())
  .then(data => { 
    
    // test
    console.log(data.activites);

   // 2. Récuperer les éléments DOM 
    // const main = document.getElementById("escapeGame")

    const logo = document.getElementById("logoNav");
    const heroContainer = document.getElementById("heroSection");
    const avantageContainer = document.getElementById("containerAvantages");
    const activityContainer = document.getElementById("containerActivity");
    const temoignagesContainer = document.getElementById("containerReview");

    logo.textContent = data.nomCommercial;

    // 3. création élément section héro
        // - button CTA

    const div1 = document.createElement("div");
    const phraseAccroche = document.createElement("h1");
    phraseAccroche.textContent= data.phraseAccroche;
    // test
    console.log(phraseAccroche);

    div1.appendChild(phraseAccroche);


    const div2 = document.createElement("div");
    const btnCTA = document.createElement("button");
    btnCTA.textContent = data.texteAppelAction;

    div2.appendChild(btnCTA);


    heroContainer.appendChild(div1);
    heroContainer.appendChild(div2);  
    

    // création éléments section avantages
        // - div
        // -  titre
        // - description
    
    let i=0;

    data.avantagesClients.forEach(avantage => {
        const div = document.createElement("div");
        div.className = "cardAvantages";
    
        i++;

        const avantageTitle = document.createElement("h3");
        avantageTitle.textContent = `Avantage ${i}` ;
        console.log(avantageTitle);

        const avantageDescription = document.createElement("p");
        avantageDescription.textContent = avantage;
        console.log(avantageDescription);
    
        div.appendChild(avantageTitle);
        div.appendChild(avantageDescription);
        avantageContainer.appendChild(div);
    });    

     // création éléments section activité
        // - div
        // - lien Image
        // - non activité (titre)
        // - description

    data.activites.forEach(activity => {
        const div = document.createElement("div");
        div.className = "cardActivity";

        const activityImage = document.createElement("img");
        activityImage.src = activity["image-url"];

        const activityName = document.createElement("h3");
        activityName.textContent = activity.nom ;
        console.log(activityName);

        const activityDescription = document.createElement("p");
        activityDescription.textContent = activity.description ;
        console.log(activityDescription);

        
        
        div.appendChild(activityImage);
        div.appendChild(activityName);
        div.appendChild(activityDescription);

        activityContainer.appendChild(div);
    });   


   

    // création éléments section témoignages
        // - div
        // - type experience (titre)
        // - note
        // - commentaire
        // - prénom

    data.temoignages.forEach(review => {
        const div = document.createElement("div");
        div.className="cardReview";

        const activityType = document.createElement("h3");
        activityType.textContent = review.typeExperience ;

        const note = document.createElement("p");
        note.textContent = `Note: ${review.note}/5 `;

        const commentaire = document.createElement("p");
        commentaire.textContent = review.commentaire ;

        const prenom = document.createElement("p");
        prenom.textContent = review.prenom ;

        
        div.appendChild(activityType);
        div.appendChild(note);
        div.appendChild(commentaire);
        div.appendChild(prenom);

        temoignagesContainer.appendChild(div);
    });

});


