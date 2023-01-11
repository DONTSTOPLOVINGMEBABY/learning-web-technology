api_key = 'd4a3dde5d3d322a5762dbb30b8d5d340' ;  
const display_temp = document.getElementById("current-temp") ;
const display_max_temp = document.getElementById("max-temp") ; 
const display_min_temp = document.getElementById("min-temp") ; 
const display_humidity = document.getElementById("humidity") ; 
const display_wind_direction = document.getElementById("wind-direction") ; 
const display_wind_speed = document.getElementById("wind-speed") ;   
const display_city_name = document.getElementById("city-name") ;
const display_city_time = document.getElementById("city-time") ; 

function url (city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${api_key}`
}

function ceslius(kelvin) { return `${(kelvin - 273.15).toFixed(1)} \u00B0 C` }

function fahrenheit(kelvin) {return `${((1.8 * (kelvin-273)) + 32).toFixed(1)} \u00B0 F` }

function get_direction (degree_number) {
    if (degree_number <= 360 && degree_number >= 315){return "NW"} ; 
    if (degree_number <= 314 && degree_number >= 270){return "W"} ; 
    if (degree_number <= 269 && degree_number >= 225){return "SW"} ; 
    if (degree_number <= 224 && degree_number >= 180){return "S"} ; 
    if (degree_number <= 179 && degree_number >= 135){return "SE"} ; 
    if (degree_number <= 134 && degree_number >= 90){return "E"} ; 
    if (degree_number <= 89 && degree_number >= 45){return "NE"} ; 
    if (degree_number <= 44 && degree_number >= 1){return "N"} ; 
}

function convert_wind_speed (speed) {return (speed * 2.2369).toFixed(2)}

function convert_twenty_four_hour_time (string) {
    const date = new Date(string)
    let new_string = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })  
    new_string += `  ${date.toLocaleString('en-US', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}` ; 
    return new_string ; 
} 

async function getWeather (location) {
    const weather = await fetch(url(location), {mode: "cors"}) ; 
    if (weather.ok){ 
        const data = await weather.json() ;
        // display_city_name.textContent = location ; 
        display_city_name.textContent = location ; 
        display_temp.textContent = fahrenheit(data.main.temp);
        display_max_temp.textContent = fahrenheit(data.main.temp_max) ; 
        display_min_temp.textContent = fahrenheit(data.main.temp_min) ; 
        display_humidity.textContent = data.main.humidity + '%' ; 
        display_wind_direction.textContent = get_direction(data.wind.deg) ;
        display_wind_speed.textContent = convert_wind_speed(data.wind.speed) + "MPH" ;  
        console.log(data) ;  
        let time = getTime(data.coord.lat, data.coord.lon)
        time.then(
            function (data) { display_city_time.textContent = convert_twenty_four_hour_time(data) ,
            function (error) {console.log("BRoken!")} }) 
    }
    else {
        return false ;  
    }
}

async function getTime (lat, long) {
    const time = await fetch(`https://timezone.abstractapi.com/v1/current_time/?api_key=d0eebd7170e44681b7b4de9e97df20f1&location=${lat},${long}`) ; 
    if (time.ok) {
        const data = await time.json() ;
        let date_time = `${data.datetime}` ;
        return date_time ;   
    }
}


getWeather("London") ;



const form = document.getElementById("form") ; 
form.onsubmit = function(e) {
    e.preventDefault() ;
    const search_bar_input = document.getElementById("location-input").value ; 
    if (search_bar_input){ 
        getWeather(search_bar_input) ; 
        document.getElementById("location-input").value = "";
    }  
}
