import api from "./api.js";

export async function loadCards(afficherCards, Diverreur) {
  try {
    const response = await api.get("/cards");
    afficherCards(response.data);
  } catch (error) {
    // console.log("Erreur :", error);
    Diverreur(error);
  }
}

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

    const response = await api.get("/cards?", {
      params: objet,
    });
    afficherCards(response.data);
  } catch (error) {
    Diverreur(error);
    console.log(error)
  }
}
export async function getDataCard(id) {
  return await api.get("/cards/" + id);
}
export async function AjouterCardEdit(card) {
  const response = await api.put(
    `/cards/${card.id}`,
    card,
    {
      params: {
        password: "1234"
      }
    }
  );

  return response.data;
}
//export async function AjouterCardEdit(card) {
//   try {
//     const response = await api.put(`/cards/${card.id}?password=1234`,
//       card,
//       {

//         headers: {
//           "X-Workspace": "public",
//           "Content-Type": "application/json"
//         }
//       }
//     );

//     console.log(response.card);
//     return response.card;

//   } catch (error) {
//     console.error(error.response?.card || error.message);
//     throw error;
//   }
// }
