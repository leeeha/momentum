const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a")

// ��� �Ͼ �̺�Ʈ�� ���� ������ ���� event ��ü 
function onLoginSubmit(event){
    // �������� �⺻ ������ ���´�.
    event.preventDefault(); 
    console.log(event);
}

function handleLinkClick(event){
    event.preventDefault(); 
    console.dir(event); 
}

// �̺�Ʈ�� �߻��ϸ� �������� �Լ��� �����Ŵ. 
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);

