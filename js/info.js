let elInfoBtn = document.querySelector('.info-btn');

function handleBack(evt) {

    window.location = 'https://adhamjon04.github.io/adham-ob-havo//index.html';

}
elInfoBtn.addEventListener('click', handleBack)


let elChange = document.querySelector('.js-change')

let elLet = localStorage.getItem('lat')
let elLon = localStorage.getItem('lon')



let curTem = document.querySelector('.js-temp')
let elCloud = document.querySelector('.js-clear')
let elIcon = document.querySelector('.js-icon')
let elSpeed = document.querySelector('.js-speed')
let elHumidity = document.querySelector('.js-namlik')
let elPresure = document.querySelector('.js-bosim')



fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${elLet}&lon=${elLon}&appid=04c7dd78fbebe9dd7ec2423cd0071891`
    )
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        elChange.textContent = '🏁' + " " + data.name
        elTemp = data.main.temp;
        curTem.textContent = "🌡" + 'Harorat' + ' - ' + (elTemp - 273.15).toFixed(2) + ' ' + '℃';
        elCloud.textContent = "🌤" + 'Holat' + ' - ' + data.weather[0].description;
        elIcon.id = data.weather[0].id;
        elIcon.textContent = "☀️" + "🌤" + "⛅️" + "🌥" + "☁️" + "🌦" + "🌧" + "⛈" + "🌩" + "🌨" + "❄️" + "🌬" + "💨" + "💧";
        elSpeed.textContent = "💨  " + 'Shamol tezligi' + ' - ' + data.wind.speed + '-' + 'km/h';
        elHumidity.textContent = "💦 " + 'Humidity' + "-" + data.main.humidity + "%"
        elPresure.textContent = "Pressure  " + " -> " + data.main.pressure + "  Pa"
    })

// shu sayt