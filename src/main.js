import { loadCards, filters, getDataCard, AjouterCardEdit } from "./services/cardService.js";
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

import { state, setState ,changeState} from "./data/store.js";



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
const btnEdit = document.getElementById("btn-Edit");
const btnSubmit = document.getElementById("btnSubmit");
btnOpenModal.addEventListener("click", () => {
    form.reset();

    btnEdit.style.display = "none";
    btnSubmit.style.display = "block";

    dialog.showModal();

});
const btnCloseModal = document.getElementById("closeModal");
// console.log(btnCloseModal);
btnCloseModal.addEventListener("click", () => {
    form.reset();
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
let Card = null;
document.addEventListener("click", async (e) => {
    let btnEditClick = e.target.closest(".btnModifier");
    if (btnEditClick) {
        // console.log(e.target.dataset.id);
        form.reset();
        let idTarget = e.target.dataset.id;
        const { data } = await getDataCard(idTarget);
        Card = data;
        // console.log(data);
        document.querySelector('[name="title"]').value = data.title;
        document.querySelector('[name="description"]').value = data.description;
        document.querySelector('[name="assigneeAdd"]').value = data.assignee;
        document.querySelector('[name="status"]').value = data.status;
        document.querySelector('[name="priorityAdd"]').value = data.priority;
        document.querySelector('[name="dueDate"]').value = data.dueDate;
        document.querySelector('[name="tags"]').value = data.tags;
        btnSubmit.style.display = "none";
        btnEdit.style.display = "block";
        dialog.showModal();
        console.log(data);

    }
});

btnEdit.addEventListener("click", async (e) => {
    

    const newData = {
        id:Card.id,
        title: form.querySelector('[name="title"]').value,
        description: form.querySelector('[name="description"]').value,
        assignee: form.querySelector('[name="assigneeAdd"]').value,
        status: form.querySelector('[name="status"]').value,
        priority: form.querySelector('[name="priorityAdd"]').value,
        dueDate: form.querySelector('[name="dueDate"]').value,
        tags: [form.querySelector('[name="tags"]').value]
    };
    
    changeState(state,newData);
    
    // console.log(Card);
    console.log(state);
    
    
    await AjouterCardEdit(Card);
    // console.log(Card);
    dialog.close();

    afficherCards(state);

});