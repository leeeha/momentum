const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span); // li 안에 span 추가하기 
    span.innerText = newTodo; 
    toDoList.appendChild(li); // ul에 li 추가하기 
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value = "";
    paintToDo(newTodo); 
}

toDoForm.addEventListener("submit", handleToDoSubmit);
