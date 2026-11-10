export let state = [];
export function loadCards(afficherCards)
{
  fetch("https://flowboard-api-virid.vercel.app/cards")
  .then((response) => response.json())
  .then((cards) => {
    // console.log(cards);
    afficherCards(cards);
  })
  .catch((error) => {
    console.log("Erreur :", error);
  });
}

