export let state = [];

export function setState(cards) {
    state = cards;
}
export function changeState(state,newData) {
    const index = state.findIndex(card => card.id === newData.id);
    state[index] = newData;
}
export function changeStatusState(idCard,valueStatus) {
    const card = state.find(card => card.id == idCard);
    // console.log(card);
    
    if (card) {
        card.status = valueStatus;
    }
    // console.log(card);
    
}
//localestorage