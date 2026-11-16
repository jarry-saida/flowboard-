export function Diverreur() {
    const DivErreur = document.getElementById("DivErreur");

    let btnRéessayer = document.getElementById("btnRéessayer");

    if (!btnRéessayer) {
        const paragraphe = document.createElement("p");
        paragraphe.textContent = "Une erreur est survenue lors du chargement des cartes.";
        paragraphe.className = "text-red-600 mb-3";

        btnRéessayer = document.createElement("button");
        btnRéessayer.textContent = "Réessayer";
        btnRéessayer.id = "btnRéessayer";
        btnRéessayer.className = "bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700";

        DivErreur.append(paragraphe, btnRéessayer);

        // btnRéessayer.addEventListener("click", () => {
        //     DivErreur.hidden = true;
        //     loadCards(afficherCards, Diverreur);
        // });
    }

    DivErreur.hidden = false;
}

