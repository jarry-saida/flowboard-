export let state = [];

export function setState(cards) {
    state = cards;
}
export function changeState(state,newData) {
    const index = state.findIndex(card => card.id === newData.id);
    state[index] = newData;
}
//localestorage