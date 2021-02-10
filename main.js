let weather = document.getElementById("weather")
let result = document.getElementById("result")
let numberOfRange = document.getElementById("numberOfRange")

function changeWeather() {
    numberOfRange.innerHTML = weather.value
    if (weather.value < 3) {
        result.innerHTML = "schlecht"
    } else if (weather.value <= 5) {
        result.innerHTML = "okay"
    } else if (weather.value = 6 && weather.value <= 7) {
        result.innerHTML = "gut"
    } else if (weather.value <= 8 && weather.value <= 10) {
        result.innerHTML = "super"
    }
}