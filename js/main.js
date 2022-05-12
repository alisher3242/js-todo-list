import todoDatas from "../API/Data.js";
import * as library from "./library.js";

let storage = window.localStorage;
let data = JSON.parse(storage.getItem("todos")).length > 0 ?
    JSON.parse(storage.getItem("todos")) :
    todoDatas;

let makerTodo = document.querySelector(".maker-todo")
let addTodo = document.querySelector(".add-todo")
let listGroup = document.querySelector(".list-group")

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