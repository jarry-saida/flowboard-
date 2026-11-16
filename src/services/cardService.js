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
