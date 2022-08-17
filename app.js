const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a")

// 방금 일어난 이벤트에 대한 정보를 담은 event 객체 
function onLoginSubmit(event){
    // 브라우저의 기본 동작을 막는다.
    event.preventDefault(); 
    console.log(event);
}

function handleLinkClick(event){
    event.preventDefault(); 
    console.dir(event); 
}

// 이벤트가 발생하면 브라우저가 함수를 실행시킴. 
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

