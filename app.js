// export let state = [];
export function loadCards(afficherCards , Diverreur) {
  fetch("https://flowboard-api-virid.vercel.app/cards")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erreur HTTP : " + response.status);
      }
      return response.json();
    })
    .then((cards) => {
      //console.log(cards);
      afficherCards(cards);
    })
    .catch((error) => {
      console.log("Erreur :", error);
      Diverreur();
    });
}

