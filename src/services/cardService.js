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
  const response = await api.put(`/cards/${card.id}`,
    card,
    {
      params: {
        password: "1234"
      }
    }
  );
  return response.data;
}
// export async function MoveCard(card) {
//     const response = await api.patch("/cards/"+card.id,
//     card,
//     {
//       params: {
//         password: "1234"
//       }
//     }
//   );
//   return response.data;
// }
export async function MoveCard(idCard, valueStatus) {

  const options = {
    method: 'PATCH',
    url: 'https://flowboard-api-virid.vercel.app/cards/' + idCard,
    headers: {
      'X-Workspace': 'public',
      'Content-Type': 'application/json'
    },
    params: {
      password: "1234"
    },
    data: {
      status: valueStatus
    }
  }

  const { data } = await axios.request(options)
  console.log(data)

}
export async function SupprimerCard(idCardDelete) {
  const options = {
    method: 'DELETE',
    url: 'https://flowboard-api-virid.vercel.app/cards/' + idCardDelete,
    headers: {
      'X-Workspace': 'public'
    },
    params: {
      password: "1234"
    },
  }

  const { data } = await axios.request(options);
  console.log(data);

}

