import { loadCards, filters } from "./app.js"
let state = [];
const DivTodo = document.getElementById("DivTodo");
// console.log(DivTodo);
const DivInProgress = document.getElementById("DivInProgress");
// console.log(DivInProgress);
const DivDone = document.getElementById("DivDone");
// console.log(DivDone);
const DivLoad = document.getElementById("DivLoad");

document.addEventListener("DOMContentLoaded", () => {
    DivLoad.hidden = false;
    loadCards((cards) => {
        DivLoad.hidden = true;
        afficherCards(cards);
        state = cards;
        // console.log(state);
    }, Diverreur);


});

function afficherCards(cards) {
    DivTodo.innerHTML = "";
    DivInProgress.innerHTML = "";
    DivDone.innerHTML = "";

    compteur(cards);
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].status === "todo") {
            DivTodo.innerHTML += `
            <article class="flex flex-col gap-3 rounded-lg bg-white p-4 shadow-sm">
                <h3 class=" text-slate-800">${cards[i].title}</h3>
                 <p class="text-sm text-slate-500">${cards[i].description}</p>
                 <div class="flex items-center justify-between gap-2">
                        <span class="rounded bg-amber-100 px-2 py-1 text-xs text-amber-700">${cards[i].priority}</span>
                         <span class="text-xs text-slate-500">${cards[i].assignee}</span>
                    </div>
                <span class="text-xs text-slate-400">Échéance : ${cards[i].dueDate}</span>
             <div class="flex flex-wrap gap-2">
                <span class="rounded bg-blue-50 px-2 py-1 text-xs text-blue-700">#${cards[i].tags.join(" ")}</span>
             </div>
            </article>
    `
        } else if (cards[i].status === "in-progress") {
            DivInProgress.innerHTML += `
            <article class="flex flex-col gap-3 rounded-lg bg-white p-4 shadow-sm">
                <h3 class=" text-slate-800">${cards[i].title}</h3>
                 <p class="text-sm text-slate-500">${cards[i].description}</p>
                 <div class="flex items-center justify-between gap-2">
                        <span class="rounded bg-amber-100 px-2 py-1 text-xs text-amber-700">${cards[i].priority}</span>
                         <span class="text-xs text-slate-500">${cards[i].assignee}</span>
                    </div>
                <span class="text-xs text-slate-400">Échéance : ${cards[i].dueDate}</span>
             <div class="flex flex-wrap gap-2">
                <span class="rounded bg-blue-50 px-2 py-1 text-xs text-blue-700">#${cards[i].tags.join(" ")}</span>
             </div>
            </article>
    `
        } else {
            DivDone.innerHTML += `
            <article class="flex flex-col gap-3 rounded-lg bg-white p-4 shadow-sm">
                <h3 class=" text-slate-800">${cards[i].title}</h3>
                 <p class="text-sm text-slate-500">${cards[i].description}</p>
                 <div class="flex items-center justify-between gap-2">
                        <span class="rounded bg-amber-100 px-2 py-1 text-xs text-amber-700">${cards[i].priority}</span>
                         <span class="text-xs text-slate-500">${cards[i].assignee}</span>
                    </div>
                <span class="text-xs text-slate-400">Échéance : ${cards[i].dueDate}</span>
             <div class="flex flex-wrap gap-2">
                <span class="rounded bg-blue-50 px-2 py-1 text-xs text-blue-700">#${cards[i].tags.join(" ")}</span>
             </div>
            </article>
    `
        }
    }
}
const spanTodoCount = document.getElementById("countTodo");
const spanInProgressCount = document.getElementById("countInProgress");
const spanDoneCount = document.getElementById("countDone");
// console.log(spanDoneCount,spanInProgressCount,spanTodoCount);
function compteur(cards) {
    let TODO = cards.filter((card) => card.status === "todo");
    // console.log(TODO);
    spanTodoCount.textContent = TODO.length;
    let INPROGRESS = cards.filter((card) => card.status === "in-progress");
    // console.log(INPROGRESS);
    spanInProgressCount.textContent = INPROGRESS.length;
    let DONE = cards.filter((card) => card.status === "done");
    // console.log(DONE);
    spanDoneCount.textContent = DONE.length;

}
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
function Diverreur() {
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

        btnRéessayer.addEventListener("click", () => {
            DivErreur.hidden = true;
            loadCards(afficherCards, Diverreur);
        });
    }

    DivErreur.hidden = false;
}
const inputTitle = document.getElementById("title");
// console.log(inputTitle);
const btnSubmit = document.getElementById("btnSubmit");
// console.log(btnSubmit);
const DivTitle = document.getElementById("DivTitle");
function regexTitle() {
    const regexTitle = /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/;
    const valueTitle = inputTitle.value;
    // console.log(valueTitle);

    if (regexTitle.test(valueTitle)) {
        DivTitle.querySelector("span")?.remove();
        return true;
    } else {
        DivTitle.querySelector("span")?.remove();
        const span = document.createElement("span");
        span.textContent = "Vous avez entrer un titre invalide";
        span.style.color = "red";
        DivTitle.appendChild(span);
        return false;
    }
}
const textareaDescription = document.getElementById("description");
// console.log(textareaDescription);
const DivDescription = document.getElementById("DivDescription");
// console.log(DivDescription);
function regexDescription() {
    const regexDescription = /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/;
    const valueDescription = textareaDescription.value;
    // console.log(valueDescription);
    if (regexDescription.test(valueDescription)) {
        DivDescription.querySelector("span")?.remove();
        return true;
    } else {
        DivDescription.querySelector("span")?.remove();
        const span = document.createElement("span");
        span.textContent = "Vous avez entrer une description invalide";
        span.style.color = "red";
        DivDescription.appendChild(span);
        return false;
    }
}
const selectStatus = document.getElementById("status");
// console.log(selectStatus);
const DivStatus = document.getElementById("DivStatus");
// console.log(DivStatus);
function regexStatus() {
    const valueStatus = selectStatus.value;
    // console.log(valueStatus);
    if (valueStatus) {
        DivStatus.querySelector("span")?.remove();
        return true;
    } else {
        DivStatus.querySelector("span")?.remove();
        const span = document.createElement("span");
        span.textContent = "Vous avez choisir un choix";
        span.style.color = "red";
        DivStatus.appendChild(span);
        return false;
    }
}
const selectPriority = document.getElementById("priorityy");
// console.log(selectPriority);
const DivPriority = document.getElementById("DivPriority");
// console.log(DivPriority);
function regexPriority() {
    const valuePriority = selectPriority.value;
    // console.log(valuePriority);
    if (valuePriority) {
        DivPriority.querySelector("span")?.remove();
        return true;
    } else {
        DivPriority.querySelector("span")?.remove();
        const span = document.createElement("span");
        span.textContent = "Vous avez choisir un choix";
        span.style.color = "red";
        DivPriority.appendChild(span);
        return false;
    }
}
const DivAssignee = document.getElementById("DivAssignee");
// console.log(DivAssignee);
const inputAssignee = document.getElementById("assigneeAdd");
// console.log(inputAssignee);
function regexAssignee() {
    const regexAssignee = /^[a-zA-ZÀ-ÿ\s'-]{2,50}$/;
    const valueAssignee = inputAssignee.value;
    // console.log(valueAssignee);
    if (regexAssignee.test(valueAssignee)) {
        DivAssignee.querySelector("span")?.remove();
        return true;
    } else {
        DivAssignee.querySelector("span")?.remove();
        const span = document.createElement("span");
        span.textContent = "Vous avez entrer l'assigné  invalide";
        span.style.color = "red";
        DivAssignee.appendChild(span);
        return false;
    }

}
const DivDate = document.getElementById("DivDate");
// console.log(DivDate);
const inputDate = document.getElementById("dueDate");
// console.log(inputDate);
function regexDate() {
    const datenew = new Date();
    //  console.log(inputDate);
    datenew.setHours(0, 0, 0, 0);
    // console.log(datenew);

    const valueDate = new Date(inputDate.value);
    // console.log(valueDate);

    if (valueDate >= datenew) {
        DivDate.querySelector("span")?.remove();
        return true;
    } else {
        DivDate.querySelector("span")?.remove();

        const span = document.createElement("span");
        span.textContent = "Vous avez entrer une date invalide";
        span.style.color = "red";
        DivDate.appendChild(span);
        return false;
    }
}
const DivTags = document.getElementById("DivTags");
// console.log(DivTags);
const inputTags = document.getElementById("tags");
// console.log(inputTags);
function regexTags() {
    const regexTags = /^[a-zA-ZÀ-ÿ_-]+(\s*,\s*[a-zA-ZÀ-ÿ_-]+)*$/;
    const valueTags = inputTags.value.trim();
    if (regexTags.test(valueTags)) {
        // console.log("Tags valides");
        DivTags.querySelector("span")?.remove();
        return true;
    } else {
        // console.log("Format des tags invalide");
        DivTags.querySelector("span")?.remove();
        const span = document.createElement("span");
        span.textContent = "Vous avez entrer une tags invalide";
        span.style.color = "red";
        DivTags.appendChild(span);
        return false;
    }

}
function regexForm() {
    const title = regexTitle();
    const description = regexDescription();
    const status = regexStatus();
    const priority = regexPriority();
    const assignee = regexAssignee();
    const date = regexDate();
    const tags = regexTags();
    return title && description && status && priority && assignee && date && tags;
}
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
        // console.log("newcard",newCard);

        state.push(newCard);
        // console.log("state",state);
        form.reset();
        afficherCards(state);
        dialog.close();
    }

});
// btnSubmit.addEventListener("click",regexForm);
//  filters(priority, assignee, title, afficherCards, Diverreur)

const selectPriorityy = document.getElementById("priority");
// console.log(selectPriorityy);


const selectAssignee = document.getElementById("assignee");
// console.log(selectAssignee);


const inputSearch = document.getElementById("search");
// console.log(inputSearch);

function appliquerFiltres() {
    filters(selectPriorityy.value,selectAssignee.value,inputSearch.value,afficherCards,Diverreur);
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






