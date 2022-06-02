//// api from --> openweather api
const api_key = '2d529a5687ae8aa06132f0a0409bf666'

////Use either .then.catch or async-away
////Method --> .then.catch
// getData()
// function getData1() {
//     // let city = document.querySelector('#city').value
//     let city = `pune`

//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
//     // console.log(url)

//     fetch(url).then(function (result1) {
//         // console.log(result1)
//         return result1.json()
//     }).then(function (result2) {
//         console.log(result2)
//         append(result2)
//     }).catch(function (error) {
//         console.log(error)
//     })
// }

////Use either .then.catch or async-away
////Method --> async-away
// getData()
async function getData1() {
    let city = document.querySelector('#city').value
    // let city = `pune`

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    // console.log(url)

    let result1 = await fetch(url)
    // console.log(result1)

    let result2 = await result1.json()
    // console.log(result2)
    append(result2)
}


function append(obj) {
    // Appending the data
    let container = document.querySelector('#container')
    container.innerHTML = null

    let h3 = document.createElement('h3')
    h3.innerText = obj.name

    let p1 = document.createElement('p')
    p1.innerText = `Current Temp: ${obj.main.temp}`

    let p2 = document.createElement('p')
    p2.innerText = `Max Temp: ${obj.main.temp_max}`

    let p3 = document.createElement('p')
    p3.innerText = `Min Temp: ${obj.main.temp_min}`

    container.append(h3, p1, p2, p3)

    // Adding src to iframe
    let iframe = document.querySelector('#gmap_canvas')
    iframe.src = `https://maps.google.com/maps?q=${obj.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}

// Refer the video for the below function
//// Based on current location
function getLocationWeather() {
    navigator.geolocation.getCurrentPosition(success);

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // console.log(latitude)
        // console.log(longitude)

        getData2(latitude, longitude)
    }
}
// getLocationWeather()

//// fetching the url with logitude and latitude
async function getData2(latitude, longitude) {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`
    // console.log(url)

    let result1 = await fetch(url)
    // console.log(result1)

    let result2 = await result1.json()
    // console.log(result2)

    append(result2)
}

