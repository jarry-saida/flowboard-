export let state = [];

export function setState(cards) {
    state = cards;
}
export function changeState(state, newData) {
    const index = state.findIndex(card => card.id === newData.id);
    state[index] = newData;
}
export function changeStatusState(idCard, valueStatus) {
    const card = state.find(card => card.id == idCard);
    // console.log(card);

    if (card) {
        card.status = valueStatus;
    }
    // console.log(card);

}
export let newState = null;
export function changeStateDelete(idCardDelete) {

    newState = state.filter(card => card.id != idCardDelete);
    // console.log(newState);
    // console.log(card);
}
//localestorage
export function priority(priority) {
  window.localStorage.setItem("priority", priority);
    
}
export function assignee(assignee) {
  window.localStorage.setItem("assignee", assignee);
}
export function title(title_like) {
   window.localStorage.setItem("title", title_like);
}
export function priorityValue() {
  return window.localStorage.getItem("priority");
}
export function assigneeValue() {
   return window.localStorage.getItem("assignee");
}
export function titleValue() {
 return window.localStorage.getItem("title");
}
