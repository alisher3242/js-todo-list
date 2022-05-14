import todoDatas from "../API/Data.js";
import * as library from "./library.js";

let forma = document.querySelector("#forma")
let storage = window.localStorage;
let data = JSON.parse(storage.getItem("todos")) ?
    JSON.parse(storage.getItem("todos")) :
    todoDatas;

let makerTodo = document.querySelector(".maker-todo")
let addTodo = document.querySelector(".add-todo")
let listGroup = document.querySelector(".list-group")
forma.addEventListener("submit", (event) => {
    event.preventDefault
})

listGroup.addEventListener("click", (event) => {
    let eventTarget = event.target;
    if (!listGroup.contains(eventTarget)) return;
    if (!eventTarget.closest("[data-type")) return;

    switch (eventTarget.dataset.type) {
        case "delete":
            let deleteEventTarget = eventTarget.parentNode.parentNode;
            console.log(deleteEventTarget);
            data = data.filter((todo) => {
                return todo.id != deleteEventTarget.dataset.id
            });

            storage.setItem("todos", JSON.stringify(data));
            deleteEventTarget.remove();
            break;
        case "check":
            let checkEventTarget = eventTarget.parentNode;
            checkEventTarget.classList.toggle("task-done")
                // checkEventTarget.dataset.isDone =
                //     checkEventTarget.dataset.isDone === "false" ? true : false;
            data = data.map(todo => {
                if (todo.id == checkEventTarget.dataset.id) {
                    todo.isDone = !todo.isDone
                }

                return todo;
            });

            console.log(data);

            storage.setItem("todos", JSON.stringify(data))
            break;

        case "edit":
            let editEventTarget = eventTarget.parentNode.parentNode;
            let todoText = editEventTarget.childNodes[1].textContent;
            let editId = editEventTarget.dataset.id
            editTodo.value = todoText
            editTodo.dataset.id = editId

            break
    }
})

addTodo.addEventListener("click", () => {

    if (makerTodo.value.trim().length <= 3) {
        alert("")
        return
    }

    let todoObject = library.todoNewObject(makerTodo.value);
    data.push(todoObject);

    storage.setItem("todos", JSON.stringify(data));

    let todoNode = library.createID(
        todoObject.id,
        todoObject.isDone,
        todoObject.text
    );
    listGroup.prepend(todoNode);
    makerTodo.value = "";
});

data.forEach((todo) => {
    let todoNode = library.createID(todo.id, todo.isDone, todo.text);
    listGroup.prepend(todoNode)
});

saveTodoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let newTodo = editTodo.value.trim();
    let todoId = editTodo.dataset.id;

    if (newTodo.length < 3) {
        alert("Ko'proq matn kiriting");
        return;
    }

    data = data.map((todo) => {
        if (todo.id == todoId) {
            todo.text = newTodo;
        }

        return todo;
    });

    library.render(data, listGroup);
});