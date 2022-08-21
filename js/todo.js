const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event){
    // target은 버튼, parent는 li 
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
    
    li.appendChild(span); // li에 span 추가
    li.appendChild(button); // li에 button 추가
    toDoList.appendChild(li); // ul에 li 추가 
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; 
    toDoInput.value = "";
    paintToDo(newTodo); 
}

toDoForm.addEventListener("submit", handleToDoSubmit);
