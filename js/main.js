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
    BTN_WRAPPER.className = "d-flex gap-1"

    let EDIT_BTN = document.createElement("button")
    EDIT_BTN.className = "btn btn-warning"
    EDIT_BTN.textContent = "edit"
    BTN_WRAPPER.append(EDIT_BTN)

    let DELETE_BTN = document.createElement("button")
    EDIT_BTN.className = "btn btn-danger"
    DELETE_BTN.textContent = "delete"
    BTN_WRAPPER.append(DELETE_BTN)

    LI.append(BTN_WRAPPER)
    listGroup.append(LI)

    makerTodo.value = ""
})