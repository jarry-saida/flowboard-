let state = null;
import { afficherCards } from  "./ui.js";
fetch("https://flowboard-api-virid.vercel.app/cards")
  .then((response) => response.json())
  .then((cards) => {
    // console.log(cards);
    
    state = cards;
    // console.log(state);
    afficherCards(cards);
    
    
  })
  .catch((error) => {
    console.log("Erreur :", error);
  });