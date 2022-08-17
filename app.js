const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event){
    // submit 했을 때 페이지가 새로고침 되지 않도록 
    event.preventDefault(); 
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);

