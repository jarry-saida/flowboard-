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
    localStorage.setItem("priority", priority);
}
export function assignee(assignee) {
    localStorage.setItem("assignee", assignee);
}
export function title(title_like) {
    localStorage.setItem("title", title_like);
}
export function priorityValue() {
    return localStorage.getItem("priority");
}
export function assigneeValue() {
    return localStorage.getItem("assignee");
}
export function titleValue() {
    return localStorage.getItem("title");
}
//SessionStorage
// inputDate,
// inputTags,
// inputAssignee,
// inputTitle,
// textareaDescription,
// selectPriority,
// selectStatus,
// valueTags,valueDate,valueAssignee,valuePriority,valueStatus,valueDescription,valueTitle
export function inputTitleSession(valueTitle) {
    sessionStorage.setItem("inputTitle", valueTitle);
}
export function inputTagsSession(valueTags) {
    sessionStorage.setItem("inputTags", valueTags);
}
export function inputDateSession(valueDate) {
    sessionStorage.setItem("inputDate", valueDate);
}
export function inputAssigneeSession(valueAssignee) {
    sessionStorage.setItem("inputAssignee", valueAssignee);
}
export function selectPrioritySession(valuePriority) {
    sessionStorage.setItem("selectPriority", valuePriority);
}
export function textareaDescriptionSession(valueDescription) {
    sessionStorage.setItem("textareaDescription", valueDescription);
}
export function selectStatusSession(valueStatus) {
    sessionStorage.setItem("selectStatus", valueStatus);
}
export function textareaDescriptionValue() {
    return sessionStorage.getItem("textareaDescription");
}
export function inputTitleValue() {
    return sessionStorage.getItem("inputTitle");
}
export function inputTagsValue() {
    return sessionStorage.getItem("inputTags");
}
export function inputDateValue() {
    return sessionStorage.getItem("inputDate");
}
export function inputAssigneeValue() {
    return sessionStorage.getItem("inputAssignee");
}
export function selectPriorityValue() {
    return sessionStorage.getItem("selectPriority");
}
export function selectStatusValue() {
    return sessionStorage.getItem("selectStatus");
}
export function changeTheme() {

    const ThemeMaintenant = localStorage.getItem("theme") || "light";
    // console.log(ThemeMaintenant);
    
    let newTheme;

    if (ThemeMaintenant === "light") {
        newTheme = "dark";
    } else {
        newTheme = "light";
    }
    // console.log(newTheme);
    document.querySelector("html").classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    return newTheme;
}

