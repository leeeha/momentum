const API_KEY = "f76c3b5b02c7220d9c1723d08c89eeb3"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`; 
    
    fetch(url) // 자바스크립트가 url을 호출해줌.  
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");
            city.innerText = data.name; 
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
        });
}

function onGeoError(){
    alert("Can't find you. No weather for you.") 
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

