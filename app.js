// export let state = [];
export async function loadCards(afficherCards, Diverreur) {
  try {
    const response = await axios.get("https://flowboard-api-virid.vercel.app/cards");
    afficherCards(response.data);
  } catch (error) {
    // console.log("Erreur :", error);
    Diverreur(error);
  }
}


// const path = "https://flowboard-api-virid.vercel.app/cards?";

// export function filters(priority, assignee, title, afficherCards, Diverreur) {

//   const url = new URL("/cards", path);

//   if (priority) {
//     url.searchParams.set("priority", priority);
//   }

//   if (assignee) {
//     url.searchParams.set("assignee", assignee);
//   }

//   if (title) {
//     url.searchParams.set("title_like", title);
//   }

//   fetch(url.toString())
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Erreur HTTP : " + response.status);
//       }


//       return response.json();
//     })
//     .then((cards) => {
//       // console.log("cards filtres", cards);
//       afficherCards(cards);
//     })
//     .catch((error) => {
//       console.log("Erreur :", error);
//       Diverreur();
//     });
// }



//axios
export async function filters(priority, assignee, title, afficherCards, Diverreur) {

  try {
    // const url = new URL("/cards", path);
    const objet = {};

    if (priority) {
      objet.priority = priority;
    }

    if (assignee) {
      objet.assignee = assignee;
    }

    if (title) {
      objet.title_like = title;
    }

    const response = await axios.get("https://flowboard-api-virid.vercel.app/cards?", {
      params: objet,
    });
    afficherCards(response.data);
  } catch (error) {
    Diverreur(error);
    console.log(error)
  }
}


