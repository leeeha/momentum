const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = []; 

function saveToDos(){
    // ���� ���丮���� �迭�� ���ڿ� ���·� �߰� 
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
}

function deleteToDo(event){
    // target�� ��ư, parent�� li 
    const li = event.target.parentElement;
    li.remove(); 

    // ���õ� li.id�� �ٸ� toDo�� ���ܵα� 
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));

    // ���� ���丮���� ����� �迭 ���� �ݿ��ϱ� 
    saveToDos(); 
}

function paintToDo(newTodo){
    // �� �׸��� �����ϱ� ���� id �߰� 
    const li = document.createElement("li");
    li.id = newTodo.id; 
    
    // span �±��� �ؽ�Ʈ ���� 
    const span = document.createElement("span");
    span.innerText = newTodo.text; 
    
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
    event.preventDefault(); // ������ ���ΰ�ħ ���� 
    const newTodo = toDoInput.value; 
    toDoInput.value = ""; 

    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj); // �迭�� ��ü ���� 
    paintToDo(newTodoObj); // �������� �� �׸� ǥ�� 
    saveToDos(); // ���� ���丮���� �迭 ���� 
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    // ���ڿ��� �迭�� ��ȯ   
    const parsedToDos = JSON.parse(savedToDos);

    // ���� ���丮���� ����� ������ toDos �迭 �ʱ�ȭ 
    toDos = parsedToDos; 

    // �迭�� �� �׸� ���� paintToDo �Լ� ���� 
    parsedToDos.forEach(paintToDo); 
}
