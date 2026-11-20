import { loadCards, filters, getDataCard, AjouterCardEdit, MoveCard, SupprimerCard } from "./services/cardService.js";
import { afficherCards, DivTodo, DivInProgress, DivDone } from "./ui/board.js";
import { Diverreur, ModificationSwal, SupprimerSwal } from "./ui/notifications.js";
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

import { state, setState, changeState, changeStatusState, changeStateDelete, newState, titleValue, assigneeValue, priorityValue, title, assignee, priority,    inputDateSession,
    inputTagsSession,
    inputAssigneeSession,
    inputTitleSession,
    textareaDescriptionSession,
    selectPrioritySession,
    selectStatusSession ,textareaDescriptionValue,inputTitleValue,inputTagsValue,inputDateValue,inputAssigneeValue,selectPriorityValue,selectStatusValue} from "./data/store.js";



document.addEventListener("DOMContentLoaded", () => {

inputSearch.value = titleValue();
selectAssignee.value = assigneeValue();
 selectPriorityy.value = priorityValue();
            inputTitle.value = inputTitleValue();
            inputAssignee.value = inputAssigneeValue();
            inputTags.value = inputTagsValue();
            textareaDescription.value = textareaDescriptionValue();
            inputDate.value = inputDateValue();
            selectPriority.value = selectPriorityValue();
            selectStatus.value = selectStatusValue();

    appliquerFiltres();
    
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
    // form.reset();


    btnEdit.style.display = "none";
    btnSubmit.style.display = "block";

    dialog.showModal();

});
const btnCloseModal = document.getElementById("closeModal");
// console.log(btnCloseModal);
btnCloseModal.addEventListener("click", () => {
    // form.reset();

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

        // console.log("newcard", newCard);

        state.push(newCard);
        // console.log("state",state);
        afficherCards(state);
        // form.reset();
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
selectPriorityy.addEventListener("change", () => {
    priority(selectPriorityy.value);
    appliquerFiltres();
}
);
selectAssignee.addEventListener("change", () => {
    appliquerFiltres();
    assignee(selectAssignee.value);
}
);
inputSearch.addEventListener("input", () => {
    appliquerFiltres();
    title(inputSearch.value);
});
const btnRénitialiser = document.getElementById("btnRénitialiser");

btnRénitialiser.addEventListener("click", () => {
    inputSearch.value = "";
    selectAssignee.value = "";
    selectPriorityy.value = "";
    loadCards(afficherCards, Diverreur);
});
let Card = null;
document.addEventListener("click", async (e) => {

    let btnEditClick = e.target.closest(".btnModifier");
    if (btnEditClick) {
        // console.log(e.target.dataset.id);
        // form.reset();
        inputDate.value = "";
        inputTags.value = "";
        inputAssignee.value = "";
        inputTitle.value = "";
        textareaDescription.value = "";
        selectPriority.value = "";
        selectStatus.value = "";

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
        // console.log(data);

    }
});

btnEdit.addEventListener("click", async (e) => {

    if (!regexForm()) {
        return;
    }

    const newData = {
        id: Card.id,
        title: form.querySelector('[name="title"]').value,
        description: form.querySelector('[name="description"]').value,
        assignee: form.querySelector('[name="assigneeAdd"]').value,
        status: form.querySelector('[name="status"]').value,
        priority: form.querySelector('[name="priorityAdd"]').value,
        dueDate: form.querySelector('[name="dueDate"]').value,
        tags: form.querySelector('[name="tags"]').value.split(",")
    };
    btnEdit.disabled = true;
    btnEdit.textContent = "Modification en cours...";

    try {
        changeState(state, newData);

        // console.log(Card);
        console.log(state);


        await AjouterCardEdit(Card);
        // console.log(Card);

        afficherCards(state);
        ModificationSwal();
        dialog.close();

    } catch (error) {

        console.log(error);

    } finally {
        btnEdit.disabled = false;
        btnEdit.textContent = "Modifier";
    }


});
document.addEventListener("click", async (e) => {
    let targetSelect = e.target.closest("[name=statusEdit]");
    // console.log(targetSelect);
    // targetSelect && targetSelect.value
    if (targetSelect && targetSelect.value) {
        let valueStatus = targetSelect.value;
        // console.log(valueStatus);
        let idCard = e.target.dataset.id;
        // console.log(idCard);
        changeStatusState(idCard, valueStatus);
        await MoveCard(idCard, valueStatus);
        afficherCards(state);
    }
});
const modal = document.getElementById("deleteModal");
const cancelBtn = document.getElementById("cancelDelete");
const confirmBtn = document.getElementById("confirmDelete");
const errorMessage = document.getElementById("errorMessage");
const modalDelete = document.getElementById("modalDelete");
// console.log(modalDelete);
let idCardDelete = null;
document.addEventListener("click", (e) => {
    let btnSupprimer = e.target.closest(".btnSupprimer");
    // console.log(btnSupprimer);
    idCardDelete = e.target.dataset.id;
    // console.log(idCardDelete);
    if (btnSupprimer) {

        modalDelete.showModal();
        modal.classList.remove("hidden");
        errorMessage.textContent = "";
        // changeStateDelete(idCardDelete);
        // await  SupprimerCard(idCardDelete);
        // // console.log(state);
        // afficherCards(newState);       
    }
});
cancelBtn.addEventListener("click", () => {
    modalDelete.close();
});
confirmBtn.addEventListener("click", async (e) => {
    try {
        // console.log(idCardDelete);
        errorMessage.textContent = "Une erreur est survenue lors du chargement des cartes."
        errorMessage.hidden = true;
        changeStateDelete(idCardDelete);
        await SupprimerCard(idCardDelete);
        // // console.log(state);
        SupprimerSwal();
        modalDelete.close();
        afficherCards(newState);
    } catch (error) {
        modalDelete.close();
        console.log(error);
        errorMessage.textContent = "Une erreur est survenue lors du suppression  des cartes."
        errorMessage.hidden = false;
    }

});
function SessionStorage() {
    inputDateSession(inputDate.value);
    inputTagsSession(inputTags.value);
    inputAssigneeSession(inputAssignee.value);
    inputTitleSession(inputTitle.value);
    textareaDescriptionSession(textareaDescription.value);
    selectPrioritySession(selectPriority.value);
    selectStatusSession(selectStatus.value);
}
form.addEventListener("input", SessionStorage);
form.addEventListener("change", SessionStorage);
// wselt anani ndir get l sessionstorage 
