import { loadCards, filters } from "./services/cardService.js";
import { afficherCards,DivTodo,DivInProgress,DivDone} from "./ui/board.js";
import { Diverreur } from "./ui/notifications.js";
import {
    regexForm,
    inputDate,
    inputTags,
    inputAssignee,
    inputTitle,
    textareaDescription,
    selectPriority,
    selectStatus,
} from "./ui/modal.js";

import { state , setState} from "./data/store.js";

document.addEventListener("DOMContentLoaded", () => {
    loadCards((cards) => {
        afficherCards(cards);
        // state = cards;
        setState(cards);
        // console.log(state);
    }, Diverreur);
});
const DivErreur = document.getElementById("DivErreur");

DivErreur.addEventListener("click", (e) => {
    if (e.target.id === "btnRéessayer") {
        DivErreur.hidden = true;
        loadCards(afficherCards, Diverreur);
    }
});
const btnOpenModal = document.getElementById("openModal");
// console.log(btnOpenModal);
const dialog = document.getElementById("cardModal");
// console.log(dialog);
btnOpenModal.addEventListener("click", () => {
    dialog.showModal();
});
const btnCloseModal = document.getElementById("closeModal");
// console.log(btnCloseModal);
btnCloseModal.addEventListener("click", () => {
    dialog.close();
});

const form = document.getElementById("form");
// console.log(form);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (regexForm()) {

        DivDone.innerHTML = "";
        DivInProgress.innerHTML = "";
        DivTodo.innerHTML = "";

        const newCard = {
            title: inputTitle.value,
            assignee: inputAssignee.value,
            tags: inputTags.value.split(","),
            description: textareaDescription.value,
            dueDate: inputDate.value,
            priority: selectPriority.value,
            status: selectStatus.value
        };
        console.log("newcard",newCard);

        state.push(newCard);
        // console.log("state",state);
        form.reset();
        afficherCards(state);
        dialog.close();
    }

});

const selectPriorityy = document.getElementById("priority");
// console.log(selectPriorityy);
const selectAssignee = document.getElementById("assignee");
// console.log(selectAssignee);
const inputSearch = document.getElementById("search");
// console.log(inputSearch);
function appliquerFiltres() {
    filters(selectPriorityy.value, selectAssignee.value, inputSearch.value, afficherCards, Diverreur);
}
selectPriorityy.addEventListener("change", appliquerFiltres);
selectAssignee.addEventListener("change", appliquerFiltres);
inputSearch.addEventListener("input", appliquerFiltres);
const btnRénitialiser = document.getElementById("btnRénitialiser");

btnRénitialiser.addEventListener("click", () => {
    inputSearch.value = "";
    selectAssignee.value = "";
    selectPriorityy.value = "";
    loadCards(afficherCards, Diverreur);
});