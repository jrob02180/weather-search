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
    // Hint: if all of the data coming back from the above is not sufficient, you my need another API.

// Event listener
    // Search button
    // EAch history button

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

var searchButton = document.querySelector('#btn');
var userForm = document.querySelector('#user-form');
var fiveDayForecast = document.querySelector('#five-day');
var apiKey = "d02feca2db0e95acf19c297c2c394117";
var todaysDate = dayjs().format('MMMM d, YYYY');
var todayEl = document.getElementById('today');
var temp = document.getElementById('temp');
var wind = document.getElementById('wind');
var humidity = document.getElementById('humidity');
    
function getApiCity(event) {
    event.preventDefault(); 
    var cityName = document.querySelector('#city-name').value;
    console.log(cityName);
    var geocodeUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;
        
    fetch(geocodeUrl) 
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        todayEl.textContent = todaysDate;
    temp.textContent = data.main.temp;
    wind.textContent = data.wind.gust;
    humidity.textContent = data.main.humidity;
        var requestURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=imperial`
     
     fetch(requestURL)
     .then(function(response) {
        return response.json();
     })
     .then(function (data) {
        console.log(data);
    fiveDayForecast.textContent = ""
        for (let i = 5; i < data.list.length; i=i+8) {
            console .log(data.list[i]);
            fiveDayForecast.innerHTML = fiveDayForecast.innerHTML+ `							<div class="col m-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle">
            ${data.list[i].dt_txt}
            <p>Temp: ${data.list[i].main.temp}</p>
            <p>Wind: ${data.list[i].wind.speed}</p>
            <p>Humidity ${data.list[i].main.humidity}</p>
        </div>
`
            // var city = document.createElement('h3')
            // var condition = document.createElement('p')
            // city.textContent = data[i];
            // condition.textContent = data[i];
         
            // fiveDayForecast.appendChild(city);
            // fiveDayForecast.appendChild(condition);
            
        }
    })
    })
}
    
userForm.addEventListener('submit', getApiCity);
