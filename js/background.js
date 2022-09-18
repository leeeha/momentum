const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

// 랜덤으로 이미지 선택 
const chosenImage = images[Math.floor(Math.random() * images.length)];  

// img 태그 생성 후 src 속성 설정 
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

// body 태그에 img 태그 추가하기 
document.body.appendChild(bgImage);
