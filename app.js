const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); 
    // form 화면에 표시하기 
    loginForm.classList.add(HIDDEN_CLASSNAME);

    // input에 입력된 값을 로컬 스토리지에 저장하기 
    const username = loginInput.value; 
    localStorage.setItem(USERNAME_KEY, username); 

    // greeting 화면에 표시하기 
    paintGreetings(username); 
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form 
    loginForm.classList.remove(HIDDEN_CLASSNAME); 
    loginForm.addEventListener("submit", onLoginSubmit); 
}else{
    // show the greeting 
    paintGreetings(savedUsername); 
}
