const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = []; 

function saveToDos(){
    // 로컬 스토리지에 배열을 문자열 형태로 추가  
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
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

    // 초기에 toDos 배열은 항상 비어있음. 
    toDos.push(newTodo); // 배열에 추가 
    paintToDo(newTodo); // 브라우저에 표시 
    saveToDos(); // 로컬 스토리지에 배열 저장 
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    // 문자열을 배열로 변환   
    const parsedToDos = JSON.parse(savedToDos);

    // 로컬 스토리지에 저장된 값으로 toDos 배열 초기화 
    toDos = parsedToDos; 

    // 배열의 각 항목에 대해 동일한 함수 실행 
    parsedToDos.forEach(paintToDo); 
}
