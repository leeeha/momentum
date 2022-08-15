const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick(){
    title.style.color = "blue";
}

function handleMouseEnter(){
    title.innerText = "mouse is here!";
}

function handleMouseLeave(){
    title.innerText = "mouse is gone!"; 
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

title.onclick = handleTitleClick; 
title.addEventListener("mouseenter", handleMouseEnter); 
title.addEventListener("mouseleave", handleMouseLeave); 

window.addEventListener("resize", handleWindowResize);
