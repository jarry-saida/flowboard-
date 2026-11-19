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
export let newState = null;
export function changeStateDelete(idCardDelete) {
    const card = state.find(card => card.id == idCardDelete);
    // console.log(card);
    // const index = state.findIndex(card => card.id === idCardDelete);
    // console.log(card);
    newState = state.filter(card => card.id != idCardDelete);
    // console.log(newState);
    // console.log(card);
}

//localestorage