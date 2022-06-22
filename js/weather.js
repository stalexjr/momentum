// 703909414bc478da213b1a77b27935a3

const API_KEY = "703909414bc478da213b1a77b27935a3"
// ℃
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) =>{
        console.log(url);
        const city = document.querySelector("#weather span:nth-child(1)");
        const weather = document.querySelector("#weather span:nth-child(2)");
        const temp = document.querySelector("#weather span:last-child");
        city.innerText = `${data.name} / `;
        weather.innerText = data.weather[0].main;
        // const name = data.name;
        // const weather = data.weather[0].main;
        console.log(data.name, data.weather[0].main, data.main.temp_min);
        temp.innerText = `${data.main.temp_min}℃ ~ ${data.main.temp_max}℃`;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // 브라우저에서 위치 좌표를 준다. WiFi, 위치, GPS 등등 getCurrentPosition 은 argument가 2개 필요하다. 하나는 모든 게 잘 됐을 때 실행 될 함수이다. 나머지 하나는 에러가 발생 했을 대 실행 될 함수다.
// onGeoOk({GeoObj})