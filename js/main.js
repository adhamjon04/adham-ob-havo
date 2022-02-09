let elList = document.querySelector('.js-list');

function handleList(evt) {
    fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${evt.target.textContent}&limit=5&appid=04c7dd78fbebe9dd7ec2423cd0071891`
        )
        .then((res) => res.json())
    localStorage.setItem('lat', evt.target.dataset.lat)
    localStorage.setItem('lon', evt.target.dataset.lon)
    window.location = 'https://adhamjon04.github.io/adham-ob-havo//info.html'
}
elList.addEventListener('click', handleList)


//Input Listener

let elInput = document.querySelector('.js-input')
let elDiv = document.querySelector('.js-div')

function handleBtnClick(evt) {

    localStorage.setItem('lat', evt.target.dataset.lat)
    localStorage.setItem('lon', evt.target.dataset.lon)
    window.location = 'https://adhamjon04.github.io/adham-ob-havo//info.html'

}




function handleInput(evt) {
    elDiv.innerHTML = null;
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${evt.target.value}&limit=5&appid=04c7dd78fbebe9dd7ec2423cd0071891`)
        .then((res) => res.json())
        .then((data) => data.forEach(value => {
                console.log(value.lat);
                let elButton = document.createElement('button')
                let elItem = document.createElement('li')
                elButton.textContent = value.name
                elItem.append(elButton)
                elDiv.append(elItem)

                elItem.classList.add('btn-site')
                elButton.classList.add('btn-map')

                elButton.dataset.lat = value.lat;
                elButton.dataset.lon = value.lon;


                elButton.addEventListener('click', handleBtnClick)

            })



        )
}

elInput.addEventListener('input', handleInput)