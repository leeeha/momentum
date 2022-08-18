const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    // form 감추기 
    loginForm.classList.add(HIDDEN_CLASSNAME);

    // input에 입력된 값을 로컬 스토리지에 저장하기 
    const username = loginInput.value; 
    localStorage.setItem(USERNAME_KEY, username); 

    // greeting 표시하기 
    paintGreetings(username); 
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 로컬 스토리지에 저장된 값 가져오기 
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form 
    loginForm.classList.remove(HIDDEN_CLASSNAME);

    // form을 제출하면 onLoginSubmit 함수 실행 
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    // show the greeting 
    paintGreetings(savedUsername); 
}
