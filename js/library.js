let storage = window.localStorage

export function render(data, list) {
    storage.setItem("todos", JSON.stringify(data));
    let fragment = document.createDocumentFragment()

    data.forEach(({ id, isDone, text }) => {
        fragment.prepend(createID(id, isDone, text))
    })

    list.innerHTML = ""
    list.append(fragment)
}


export function createID(id, isDone, text) {
    let LI = document.createElement("li")
    LI.className = `list-group-item d-flex ${ isDone ? "task-done" :"" } align-items-center`;
    LI.dataset.id = id
    LI.dataset.isDone = isDone

    let INPUT = document.createElement("input")
    INPUT.dataset.type = "check"
    INPUT.checked = isDone
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
        // data-bs-toggle="modal" data-bs-target="#exampleModal"
    BTN_EDIT.setAttribute("data-bs-toggle", "modal")
    BTN_EDIT.setAttribute("data-bs-target", "#exampleModal")
    BTN_EDIT.dataset.type = "edit"
    BTN_EDIT.className = "btn btn-warning"
    BTN_EDIT.textContent = "edit"
    BTN_WRAPPER.append(BTN_EDIT)

    let BTN_DELETE = document.createElement("button")
    BTN_DELETE.dataset.type = "delete"
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