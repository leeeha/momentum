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
    li.remove(); 

    // 선택된 li.id와 다른 toDo는 남겨두기 
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));

    // 로컬 스토리지에 변경된 배열 내용 반영하기 
    saveToDos(); 
}

function paintToDo(newTodo){
    // 새 항목을 구별하기 위해 id 추가 
    const li = document.createElement("li");
    li.id = newTodo.id; 
    
    // span 태그의 텍스트 설정 
    const span = document.createElement("span");
    span.innerText = newTodo.text; 
    
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
    event.preventDefault(); // 페이지 새로고침 방지 
    const newTodo = toDoInput.value; 
    toDoInput.value = ""; 

    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj); // 배열에 객체 저장 
    paintToDo(newTodoObj); // 브라우저에 새 항목 표시 
    saveToDos(); // 로컬 스토리지에 배열 저장 
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    // 문자열을 배열로 변환   
    const parsedToDos = JSON.parse(savedToDos);

    // 로컬 스토리지에 저장된 값으로 toDos 배열 초기화 
    toDos = parsedToDos; 

    // 배열의 각 항목에 대해 paintToDo 함수 실행 
    parsedToDos.forEach(paintToDo); 
}
