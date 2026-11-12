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
// function filters(members,title,status) {

//  const target = "/cards";
 
//  const path = "https://flowboard-api-virid.vercel.app";
 
// const url = new URL (target,path);
// url.searchParams.set("title",title);
// url.searchParams.set("assignee",members);
// url.searchParams.set("status",status);
// let response = fetch(url.toString());
// console.log(response);

// }

const path = "https://flowboard-api-virid.vercel.app";

export function filters(priority, assignee, title, afficherCards, Diverreur) {

  const url = new URL("/cards", path);

  if (priority) {
    url.searchParams.set("priority", priority);
  }

  if (assignee) {
    url.searchParams.set("assignee", assignee);
  }

  if (title) {
    url.searchParams.set("title_like", title);
  }

  fetch(url.toString())
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erreur HTTP : " + response.status);
      }


      return response.json();
    })
    .then((cards) => {
      // console.log("cards filtres", cards);
      afficherCards(cards);
    })
    .catch((error) => {
      console.log("Erreur :", error);
      Diverreur();
    });
}
