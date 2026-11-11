import {loadCards} from "./app.js"
const DivTodo = document.getElementById("DivTodo");
// console.log(DivTodo);
const DivInProgress = document.getElementById("DivInProgress");
// console.log(DivInProgress);
const DivDone = document.getElementById("DivDone");
// console.log(DivDone);
document.addEventListener("DOMContentLoaded", () => {
    loadCards(afficherCards, Diverreur);
});

function afficherCards(cards) {
    compteur (cards);
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].status === "todo") {
            DivTodo.innerHTML += `
    <div class="flex min-w-64 flex-1 flex-col gap-4 rounded-lg bg-slate-200 p-4" id="DivTodo">
        <div class="flex flex-col gap-3" >
            <article class="flex flex-col gap-3 rounded-lg bg-white p-4 shadow-sm">
                <h3 class=" text-slate-800">${cards[i].title}</h3>
                 <p class="text-sm text-slate-500">${cards[i].description}</p>
                 <div class="flex items-center justify-between gap-2">
                        <span class="rounded bg-amber-100 px-2 py-1 text-xs text-amber-700">${cards[i].priority}</span>
                         <span class="text-xs text-slate-500">${cards[i].assignee}</span>
                    </div>
                <span class="text-xs text-slate-400">Échéance : ${cards[i].dueDate}</span>
             <div class="flex flex-wrap gap-2">
                <span class="rounded bg-blue-50 px-2 py-1 text-xs text-blue-700">${cards[i].tags.join(" ")}</span>
             </div>
            </article>
        </div>
    </div>
    `
        } else if(cards[i].status === "in-progress"){
            DivInProgress.innerHTML += `
    <div class="flex min-w-64 flex-1 flex-col gap-4 rounded-lg bg-slate-200 p-4" id="DivTodo">
        <div class="flex flex-col gap-3" >
            <article class="flex flex-col gap-3 rounded-lg bg-white p-4 shadow-sm">
                <h3 class=" text-slate-800">${cards[i].title}</h3>
                 <p class="text-sm text-slate-500">${cards[i].description}</p>
                 <div class="flex items-center justify-between gap-2">
                        <span class="rounded bg-amber-100 px-2 py-1 text-xs text-amber-700">${cards[i].priority}</span>
                         <span class="text-xs text-slate-500">${cards[i].assignee}</span>
                    </div>
                <span class="text-xs text-slate-400">Échéance : ${cards[i].dueDate}</span>
             <div class="flex flex-wrap gap-2">
                <span class="rounded bg-blue-50 px-2 py-1 text-xs text-blue-700">${cards[i].tags.join(" ")}</span>
             </div>
            </article>
        </div>
    </div>
    `
        }else{
                        DivDone.innerHTML += `
    <div class="flex min-w-64 flex-1 flex-col gap-4 rounded-lg bg-slate-200 p-4" id="DivTodo">
        <div class="flex flex-col gap-3" >
            <article class="flex flex-col gap-3 rounded-lg bg-white p-4 shadow-sm">
                <h3 class=" text-slate-800">${cards[i].title}</h3>
                 <p class="text-sm text-slate-500">${cards[i].description}</p>
                 <div class="flex items-center justify-between gap-2">
                        <span class="rounded bg-amber-100 px-2 py-1 text-xs text-amber-700">${cards[i].priority}</span>
                         <span class="text-xs text-slate-500">${cards[i].assignee}</span>
                    </div>
                <span class="text-xs text-slate-400">Échéance : ${cards[i].dueDate}</span>
             <div class="flex flex-wrap gap-2">
                <span class="rounded bg-blue-50 px-2 py-1 text-xs text-blue-700">${cards[i].tags.join(" ")}</span>
             </div>
            </article>
        </div>
    </div>
    `
        }
    }
}
const spanTodoCount = document.getElementById("countTodo");
const spanInProgressCount = document.getElementById("countInProgress");
const spanDoneCount = document.getElementById("countDone");
// console.log(spanDoneCount,spanInProgressCount,spanTodoCount);
function compteur (cards) {
    let TODO = cards.filter((card)=> card.status === "todo" );
    // console.log(TODO);
    spanTodoCount.textContent = TODO.length;
    let INPROGRESS = cards.filter((card)=> card.status === "in-progress" );
    // console.log(INPROGRESS);
    spanInProgressCount.textContent = INPROGRESS.length;
    let DONE = cards.filter((card)=> card.status === "done" );
    // console.log(DONE);
    spanDoneCount.textContent = DONE.length;
    
}
const btnOpenModal = document.getElementById("openModal");
// console.log(btnOpenModal);
const dialog = document.getElementById("cardModal");
// console.log(dialog);
btnOpenModal.addEventListener("click",()=>{
    dialog.showModal();
});
const btnCloseModal = document.getElementById("closeModal");
// console.log(btnCloseModal);
btnCloseModal.addEventListener("click", () => {
    dialog.close();
});
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

        btnRéessayer.addEventListener("click", () => {
            DivErreur.hidden = true;
            loadCards(afficherCards, Diverreur);
        });
    }

    DivErreur.hidden = false;
}

