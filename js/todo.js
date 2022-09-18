const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos(){
    // 로컬 스토리지에 배열을 문자열 형태로 추가  
    localStorage.setItem("todos", JSON.stringify(toDos)); 
}

function deleteToDo(event){
    // target은 버튼, parent는 li 
    const li = event.target.parentElement;
    li.remove(); // 항목 제거 
}

function paintToDo(newTodo){
    // li 태그의 span에 새 항목 추가 
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo; 
    
    // x 버튼 클릭하면 항목 제거 
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    
    // li 태그에 span과 button 추가 
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li); // ul에 li 추가
}

function handleToDoSubmit(event){
    event.preventDefault();

    const newTodo = toDoInput.value; 
    toDoInput.value = ""; 
    toDos.push(newTodo); // 배열에 추가 
    paintToDo(newTodo); // 브라우저에 표시 
    saveToDos(); // 로컬 스토리지에 배열 저장 
}

toDoForm.addEventListener("submit", handleToDoSubmit);
