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
    }
    DivErreur.hidden = false;
}
export function ModificationSwal() {
        Swal.fire({
            title: "Modification réussie !",
            icon: "success",
            confirmButtonText: "Annuler",
            confirmButtonColor: "#394832"
        });
}
export function SupprimerSwal() {
        Swal.fire({
            title: "Suppression réussie !",
            icon: "success",
            confirmButtonText: "Annuler",
            confirmButtonColor: "#394832"
        });
}
export function GénérationAiSwal(count) {
        Swal.fire({
            title: "Génération de " + count + " carte(s) réussie !",
            icon: "success",
            confirmButtonText: "Annuler",
            confirmButtonColor: "#394832"
        });
}
export function AjouterCardSwal() {
        Swal.fire({
            title: "Carte ajouter!",
            icon: "success",
            confirmButtonText: "Annuler",
            confirmButtonColor: "#394832"
        });
}



