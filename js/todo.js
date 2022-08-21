const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event){
    // target�� ��ư, parent�� li 
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo; 
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    
    li.appendChild(span); // li�� span �߰�
    li.appendChild(button); // li�� button �߰�
    toDoList.appendChild(li); // ul�� li �߰� 
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value = "";
    paintToDo(newTodo); 
}

toDoForm.addEventListener("submit", handleToDoSubmit);
