const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

// �������� �̹��� ���� 
const chosenImage = images[Math.floor(Math.random() * images.length)];  

// img �±� ���� �� src �Ӽ� ���� 
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

// body �±׿� img �±� �߰��ϱ� 
document.body.appendChild(bgImage);
