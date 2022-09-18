const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos(){
    // ���� ���丮���� �迭�� ���ڿ� ���·� �߰�  
    localStorage.setItem("todos", JSON.stringify(toDos)); 
}

function deleteToDo(event){
    // target�� ��ư, parent�� li 
    const li = event.target.parentElement;
    li.remove(); // �׸� ���� 
}

function paintToDo(newTodo){
    // li �±��� span�� �� �׸� �߰� 
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo; 
    
    // x ��ư Ŭ���ϸ� �׸� ���� 
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    
    // li �±׿� span�� button �߰� 
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li); // ul�� li �߰�
}

function handleToDoSubmit(event){
    event.preventDefault();

    const newTodo = toDoInput.value; 
    toDoInput.value = ""; 
    toDos.push(newTodo); // �迭�� �߰� 
    paintToDo(newTodo); // �������� ǥ�� 
    saveToDos(); // ���� ���丮���� �迭 ���� 
}

toDoForm.addEventListener("submit", handleToDoSubmit);
