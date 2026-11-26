export const inputTitle = document.getElementById("title");
// console.log(inputTitle);
export const btnSubmit = document.getElementById("btnSubmit");
// console.log(btnSubmit);
export const DivTitle = document.getElementById("DivTitle");
export function regexTitle() {
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
export const textareaDescription = document.getElementById("description");
// console.log(textareaDescription);
export const DivDescription = document.getElementById("DivDescription");
// console.log(DivDescription);
export function regexDescription() {
    const regexDescription = /^[\s\S]{2,500}$/;
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
export const selectStatus = document.getElementById("status");
// console.log(selectStatus);
export const DivStatus = document.getElementById("DivStatus");
// console.log(DivStatus);
export function regexStatus() {
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
export const selectPriority = document.getElementById("priorityy");
// console.log(selectPriority);
export const DivPriority = document.getElementById("DivPriority");
// console.log(DivPriority);
export function regexPriority() {
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
export const DivAssignee = document.getElementById("DivAssignee");
// console.log(DivAssignee);
export const inputAssignee = document.getElementById("assigneeAdd");
// console.log(inputAssignee);
export function regexAssignee() {
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
export const DivDate = document.getElementById("DivDate");
// console.log(DivDate);
export const inputDate = document.getElementById("dueDate");
// console.log(inputDate);
export function regexDate() {
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
export const DivTags = document.getElementById("DivTags");
// console.log(DivTags);
export const inputTags = document.getElementById("tags");
// console.log(inputTags);
export function regexTags() {
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
export function regexForm() {
    const title = regexTitle();
    const description = regexDescription();
    const status = regexStatus();
    const priority = regexPriority();
    const assignee = regexAssignee();
    const date = regexDate();
    const tags = regexTags();
    return title && description && status && priority && assignee && date && tags;
}
export const DivDescriptionAi = document.querySelector("#DivDescriptionAi");
// console.log(DivDescriptionAi);
export const textareaDescriptionAi = document.getElementById("descriptionAi");
// console.log(textareaDescriptionAi);
export function regexDescriptionAi() {
    const regexDescriptionAi = /^[\s\S]{20,1000}$/;
    const valueDescriptionAi = textareaDescriptionAi.value;
    if (regexDescriptionAi.test(valueDescriptionAi)) {
        DivDescriptionAi.querySelector("span")?.remove();
        return true;
    } else {
        DivDescriptionAi.querySelector("span")?.remove();
        const span = document.createElement("span");
        span.textContent = "Vous avez entrer une description invalide";
        span.style.color = "red";
        DivDescriptionAi.appendChild(span);
        return false;
    }
}
export const inputCountAi = document.querySelector("#countAi");
// console.log(inputCountAi);
export const DivCountAi = document.getElementById("DivCountAi");
// console.log(DivCountAi);
export function regexCountAi() {
    const regexCountAi =  /^(?:[1-9]|10)$/;
    const valueCountAi = inputCountAi.value;
    if (regexCountAi.test(valueCountAi)) {
        DivCountAi.querySelector("span")?.remove();
        return true;
    } else {
        DivCountAi.querySelector("span")?.remove();
        const span = document.createElement("span");
        span.textContent = "Vous avez entrer un nombre invalide";
        span.style.color = "red";
        DivCountAi.appendChild(span);
        return false;
    }
}