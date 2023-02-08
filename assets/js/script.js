// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

// When I type a city in the input field and click 'search', the current weather for that city displays in the top right container
// the weather for the next 5 days for that city displays in the bottom right container
    // the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed are listed
        // create vairable for each of the above
            // var ? = document.createElement('h3')
            // var ? = document.createElement('p')
        // add text content= data[i].?
        // userContainer.append(wind, etc.)
        // if > then?
        
        // The previously searched cities display under the search button
            // Add to local storage
        
// When clicking on a city in search history, current and future conditions display again

// Add event listener  
    // searchButton.addEventListener('click', getApi);

// Show some basic CSS
// Bring in DayJS
// Check out data returned from API
    // Requires latitude and longitude
    
    // Requires City name, RETURNS Lat/Long
    // Hint: if all of the data coming back from the above is not sufficient, you may need another API.

// Event listener
    // Search button
    // Search history button

//////Functionize /////
// Write fetch call to API
    // Find the info we want to display from the API call response
        // Today's date
        // 5 day forecast

/////Render Funciton /////
// Programmatically display that data to the page
    // for loop 2 times
        // create x card
            // add x.header
            // add x.image
            // add x.temp
            // add x.wind
            // add x.humidity
            // append x card to some Div

// Local Storage
    // When page loads, grab all of the cities in LocalStorage
    // When a city name is input into the form and th search button is clicked, append the city to existing local Storage

var searchButton = document.querySelector('#city-name');
var submit = document.querySelector('#submit')
var userForm = document.querySelector('#user-form');
// var formImput = document.querySelector('.form-input');
var fiveDayForecast = document.querySelector('#five-day');
var apiKey = "d02feca2db0e95acf19c297c2c394117";
var todaysDate = dayjs().format('MMMM DD, YYYY');
var todayEl = document.getElementById('today');
var temp = document.getElementById('temp');
var wind = document.getElementById('wind');
var humidity = document.getElementById('humidity');
var condition = document.getElementById('condition');
var searchedCities = document.querySelector('.searched-cities');
var futureDate1 = document.querySelector('.future-date1');
var futureDate2 = document.querySelector('.future-date2');
var futureDate3 = document.querySelector('.future-date3');
var futureDate4 = document.querySelector('.future-date4');
var futureDate5 = document.querySelector('.future-date5');
var futureTemp = document.querySelector('.future-temp')


var today = dayjs();
var nextDay = [];
var searched = [];
// console.log(searched);

function init() {
    var savedCities = JSON.parse(localStorage.getItem("searched"));

    if (savedCities !== null) {
        searched = savedCities;
        console.log(searched);
    }
    for (let i = 0; i < searched.length; i++) {
        var city = searched[i];
        var div = document.createElement("div");
        div.textContent = city;
        div.classList.add('card', 'bg-light', 'text-dark', 'mt-3', 'mb-3', 'p-3', 'text-center');

        console.log(city);
        searchedCities.appendChild(div);
    }
}

submit.addEventListener("click", function(event) {
    event.preventDefault();

    var city = searchButton.value.trim();
    if (city === "") {
        return;
    }
    getApiCity(city)

    searched.push(city)
    searchButton.value = "";
    localStorage.setItem("searched", JSON.stringify(searched))
    init()
})


// init()
    
function getApiCity(event) {
    // event.preventDefault(); 
    for (let i = document.images.length; i--> 0;) {
        document.images[i].parentNode.removeChild(document.images[i]);
    }
    var cityName = document.querySelector('#city-name').value;
    console.log(cityName);
    var currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
     
    for (let i = 0; i <= 5; i++) {
        let tomorrow = dayjs(today).add(i, "day");
        nextDay.push(tomorrow.format("MMMM DD, YYYY")); 
        }
        futureDate1.textContent = nextDay[1];
        futureDate2.textContent = nextDay[2];
        futureDate3.textContent = nextDay[3];
        futureDate4.textContent = nextDay[4];
        futureDate5.textContent = nextDay[5];
        console.log(nextDay);
        
    fetch(currentWeatherUrl) 
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function(data) {      
    console.log(data);
    todayEl.textContent = `${cityName}  (${todaysDate})`;
    temp.textContent = `${data.main.temp} °F`;
    wind.textContent = `${data.wind.speed} MPH`;
    humidity.textContent = `${data.main.humidity}%`;

    var iconCode = data.weather[0].icon;
    var image = document.createElement("img");
    image.setAttribute("src", "https://openweathermap.org/img/wn/" + iconCode + ".png");

    condition.append(image)

    var futureWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`
     
     fetch(futureWeatherURL)
     .then(function(response) {
        return response.json();
     })
     .then(function (data) {
        console.log(data);
    // fiveDayForecast.textContent = ""
    for (let i = 5; i < data.list.length; i=i+8) {
    console .log(data.list[i]);
    var weatherIcon1 = document.querySelector('.weather-icon1')
    var weatherIcon2 = document.querySelector('.weather-icon2')
    var weatherIcon3 = document.querySelector('.weather-icon3')
    var weatherIcon4 = document.querySelector('.weather-icon4')
    var weatherIcon5 = document.querySelector('.weather-icon5')


    var fiveDayIcon = data.list[1].weather[0].icon;
    var image2 = document.createElement("img");
    image2.setAttribute("src", "https://openweathermap.org/img/wn/" + fiveDayIcon + ".png");
    // weatherIcon.append(image2)
    weatherIcon1.append(image2) 
    weatherIcon2.append(image2)        
    weatherIcon3.append(image2)        
    weatherIcon4.append(image2)        
    weatherIcon5.append(image2)
    var futureTemp1 = document.querySelector('.future-temp1');
    var futureTemp2 = document.querySelector('.future-temp2');
    var futureTemp3 = document.querySelector('.future-temp3');
    var futureTemp4 = document.querySelector('.future-temp4');
    var futureTemp5 = document.querySelector('.future-temp5');
// change to data.list[0-4]? after fixing array
    futureTemp1.textContent = `Temp: ${data.list[3].main.temp} °F` 
    futureTemp2.textContent = `Temp: ${data.list[4].main.temp} °F`        
    futureTemp3.textContent = `Temp: ${data.list[5].main.temp} °F`        
    futureTemp4.textContent = `Temp: ${data.list[6].main.temp} °F`        
    futureTemp5.textContent = `Temp: ${data.list[7].main.temp} °F`  
    var futureWind1 = document.querySelector('.future-wind1');      
    var futureWind2 = document.querySelector('.future-wind2');      
    var futureWind3 = document.querySelector('.future-wind3');      
    var futureWind4 = document.querySelector('.future-wind4');      
    var futureWind5 = document.querySelector('.future-wind5');      
   futureWind1.textContent = `Wind: ${data.list[i].wind.speed} MPH`
   futureWind2.textContent = `Wind: ${data.list[i].wind.speed} MPH`
   futureWind3.textContent = `Wind: ${data.list[i].wind.speed} MPH`
   futureWind4.textContent = `Wind: ${data.list[i].wind.speed} MPH`
   futureWind5.textContent = `Wind: ${data.list[i].wind.speed} MPH`
   var futureHumidity1 = document.querySelector('.future-humidity1');
   var futureHumidity2 = document.querySelector('.future-humidity2');
   var futureHumidity3 = document.querySelector('.future-humidity3');
   var futureHumidity4 = document.querySelector('.future-humidity4');
   var futureHumidity5 = document.querySelector('.future-humidity5');
   futureHumidity1.textContent = `Humidity: ${data.list[i].main.humidity}%`
   futureHumidity2.textContent = `Humidity: ${data.list[i].main.humidity}%`
   futureHumidity3.textContent = `Humidity: ${data.list[i].main.humidity}%`
   futureHumidity4.textContent = `Humidity: ${data.list[i].main.humidity}%`
   futureHumidity5.textContent = `Humidity: ${data.list[i].main.humidity}%`

    // fiveDayForecast.innerHTML = fiveDayForecast.innerHTML + `<div class="col m-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle">
    // <p ></p>
    // <p class="weather-icon"> ${image2} </p>
    // <p>Temp: ${data.list[i].main.temp} °F</p>
    // <p>Wind: ${data.list[i].wind.speed} MPH</p>
    // <p>Humidity: ${data.list[i].main.humidity}%</p>
    // </div>`   
    // futureTemp.textContent = data.list[i].main.temp;

        }
    })
    })
  
} 

searchedCities.addEventListener('click', getApiCity) 

    
// submit.addEventListener('click', getApiCity);
