const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event){
    // submit ���� �� �������� ���ΰ�ħ ���� �ʵ��� 
    event.preventDefault(); 
    console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);

