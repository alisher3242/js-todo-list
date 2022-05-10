let makerTodo = document.querySelector(".maker-todo")
let addTodo = document.querySelector(".add-todo")
let listGroup = document.querySelector(".list-group")

addTodo.addEventListener("click", () => {
    let LI = document.createElement("li")
    LI.className = "list-group-item d-flex align-items-center"

    let INPUT = document.createElement("input")
    INPUT.className = "form-check-input me-3"
    INPUT.setAttribute('type', 'checkbox')
    LI.append(INPUT)

    let TEXT_DIV = document.createElement("div")
    TEXT_DIV.textContent = makerTodo.value
    TEXT_DIV.className = "text w-100"
    LI.append(TEXT_DIV)

    let BTN_WRAPPER = document.createElement("div")
    BTN_WRAPPER.className = "d-flex gap-1";

    let BTN_EDIT = document.createElement("button")
    BTN_EDIT.className = "btn btn-warning"
    BTN_EDIT.textContent = "edit"
    BTN_WRAPPER.append(BTN_EDIT)

    let BTN_DELETE = document.createElement("button")
    BTN_DELETE.className = "btn btn-danger"
    BTN_DELETE.textContent = "delete"
    BTN_WRAPPER.append(BTN_DELETE)

    LI.append(BTN_WRAPPER)
    listGroup.append(LI)

    makerTodo.value = ""
})