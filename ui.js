
const DivTodo = document.getElementById("DivTodo");
// console.log(DivTodo);
const DivInProgress = document.getElementById("DivInProgress");
// console.log(DivInProgress);
const DivDone = document.getElementById("DivDone");
// console.log(DivDone);
export function afficherCards(cards) {
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
                <span class="rounded bg-blue-50 px-2 py-1 text-xs text-blue-700">${cards[i].tags}</span>
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
                <span class="rounded bg-blue-50 px-2 py-1 text-xs text-blue-700">${cards[i].tags}</span>
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
                <span class="rounded bg-blue-50 px-2 py-1 text-xs text-blue-700">${cards[i].tags}</span>
             </div>
            </article>
        </div>
    </div>
    `
        }
    }

}

