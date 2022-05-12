export function createID(id, isDone, text) {
    let LI = document.createElement("li")
    LI.className = "list-group-item d-flex align-items-center"
    LI.dataset.id = id
    LI.dataset.isDone = isDone

    let INPUT = document.createElement("input")
    INPUT.className = "form-check-input me-3"
    INPUT.setAttribute('type', 'checkbox')
    LI.append(INPUT)

    let TEXT_DIV = document.createElement("div")
    TEXT_DIV.textContent = text
    TEXT_DIV.className = "text w-100"
    LI.append(TEXT_DIV)

    let BTN_WRAPPER = document.createElement("div")
    BTN_WRAPPER.className = "d-flex gap-1";

    let BTN_EDIT = document.createElement("button")
    BTN_EDIT.dataset.type = "delete"
    BTN_EDIT.className = "btn btn-warning"
    BTN_EDIT.textContent = "edit"
    BTN_WRAPPER.append(BTN_EDIT)

    let BTN_DELETE = document.createElement("button")
    BTN_DELETE.dataset.type = "edit"
    BTN_DELETE.className = "btn btn-danger"
    BTN_DELETE.textContent = "delete"
    BTN_WRAPPER.append(BTN_DELETE)

    LI.append(BTN_WRAPPER)
    return LI;
}

export function todoNewObject(text) {
    return {
        id: new Date().getTime(),
        isDone: false,
        text
    };
}