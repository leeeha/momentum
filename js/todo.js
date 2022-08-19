const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span); // li �ȿ� span �߰��ϱ� 
    span.innerText = newTodo; 
    toDoList.appendChild(li); // ul�� li �߰��ϱ� 
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value = "";
    paintToDo(newTodo); 
}

toDoForm.addEventListener("submit", handleToDoSubmit);
