import { loadCards, filters, getDataCard } from "./services/cardService.js";
import { afficherCards, DivTodo, DivInProgress, DivDone } from "./ui/board.js";
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

import { state, setState } from "./data/store.js";

const btnEdit = document.getElementById("btn-Edit");    
const btnSubmit = document.getElementById("btnSubmit");

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
    btnEdit.style.display = "none";
    // btnEdit.hidden = false;
    btnSubmit.style.display = "block";
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
        console.log("newcard", newCard);

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
// const btnModifier = document.querySelectorAll('[data-id]');
// console.log(btnModifier);
// const btnModifier = document.querySelectorAll("button[data-id]");
// console.log("btnModifier",btnModifier);

document.addEventListener("click", async (e) => {
    // let 
    if (e.target.closest(".btnModifier")) {
        // console.log(e.target.dataset.id);
        dialog.showModal();
        let idTarget = e.target.dataset.id;
        const { data } = await getDataCard(idTarget);
        // console.log(data);
        document.querySelector('[name="title"]').value = data.title;
        document.querySelector('[name="description"]').value = data.description;
        document.querySelector('[name="assigneeAdd"]').value = data.assignee;
        document.querySelector('[name="status"]').value = data.status;
        document.querySelector('[name="priorityAdd"]').value = data.priority;
        document.querySelector('[name="dueDate"]').value = data.dueDate;
        document.querySelector('[name="tags"]').value = data.tags;
    }
    // console.log(btnSubmit);
    btnSubmit.style.display = "none";
    btnEdit.style.display ="block";
    // btnSubmit.classList.add("hidden");
    

});
