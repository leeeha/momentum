const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    // form ���߱� 
    loginForm.classList.add(HIDDEN_CLASSNAME);

    // input�� �Էµ� ���� ���� ���丮���� �����ϱ� 
    const username = loginInput.value; 
    localStorage.setItem(USERNAME_KEY, username); 

    // greeting ǥ���ϱ� 
    paintGreetings(username); 
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// ���� ���丮���� ����� �� �������� 
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form 
    loginForm.classList.remove(HIDDEN_CLASSNAME);

    // form�� �����ϸ� onLoginSubmit �Լ� ���� 
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    // show the greeting 
    paintGreetings(savedUsername); 
}
