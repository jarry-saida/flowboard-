
export const DivTodo = document.getElementById("DivTodo");
// console.log(DivTodo);
export const DivInProgress = document.getElementById("DivInProgress");
// console.log(DivInProgress);
export const DivDone = document.getElementById("DivDone");
// console.log(DivDone);
export const DivButton = document.getElementById("DivButton");
// console.log(DivButton);
export function afficherCards(cards) {


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
                <span class="rounded bg-blue-50 px-2 py-1 text-xs text-blue-700">#${cards[i].tags.join("#")}</span>
             </div>
             <button data-id = ${cards[i].id}
                        class="btnModifier px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg ">
                       Modifier
                    </button>
                        <select  name="statusEdit" data-id = ${cards[i].id}
                            class="w-full border border-slate-300 rounded-lg px-3 py-3 bg-white">
                            <option value="" selected disabled>changement de status</option>
                            <option value="todo">todo</option>
                            <option value="in-progress">in-progress</option>
                            <option value="done">done</option>
                        </select>
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
                <span class="rounded bg-blue-50 px-2 py-1 text-xs text-blue-700">#${cards[i].tags.join("#")}</span>
             </div>
                        <button data-id = ${cards[i].id}
                        class="btnModifier px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg " >
                       Modifier
                    </button>
                                            <select  name="statusEdit" data-id = ${cards[i].id}
                            class="w-full border border-slate-300 rounded-lg px-3 py-3 bg-white">
                            <option value="" selected disabled >changement de status</option>
                            <option value="todo">todo</option>
                            <option value="in-progress">in-progress</option>
                            <option value="done">done</option>
                        </select>
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
                <span class="rounded bg-blue-50 px-2 py-1 text-xs text-blue-700">#${cards[i].tags.join("#")}</span>
             </div>
            <button data-id = ${cards[i].id}
                        class="btnModifier px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg ">
                       Modifier
            </button>
                        <select  name="statusEdit" data-id = ${cards[i].id}
                            class="w-full border border-slate-300 rounded-lg px-3 py-3 bg-white">
                            <option value="" selected disabled >changement de status</option>
                            <option value="todo">todo</option>
                            <option value="in-progress">in-progress</option>
                            <option value="done">done</option>
                        </select>
            </article>
    `
            
        }
    }
}

export const spanTodoCount = document.getElementById("countTodo");
export const spanInProgressCount = document.getElementById("countInProgress");
export const spanDoneCount = document.getElementById("countDone");
// console.log(spanDoneCount,spanInProgressCount,spanTodoCount);
export function compteur(cards) {
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
