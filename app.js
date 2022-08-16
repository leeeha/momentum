// JS는 이벤트 처리 담당 

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);

