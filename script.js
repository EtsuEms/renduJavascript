const jsonUrl = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/escape-game.json";

fetch(jsonUrl)
  .then(response => response.json())
  .then(data => { 
    
    // test
    console.log(data.activites);

   
});