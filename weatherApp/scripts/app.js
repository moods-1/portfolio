const tempSwitch = document.querySelector("#temp-switch");
const magnifier = document.querySelector("#search");
const cityForm = document.querySelector("form");
const details = document.querySelector(".details");
const currentContainer = document.querySelector(".container");
const currentCondition = document.querySelector("img.condition-icon");
const container12Hours = document.querySelector(".hours12-container");
const hours12Array = document.getElementsByClassName("hours12-boxes");
const container5Days = document.querySelector(".days5-container");
const forecastBoxes = document.querySelector(".forecast-boxes");
const forecastTitle = document.querySelectorAll(".forecast-period-title");
const moon = document.querySelector('.moon');
const errorBox = document.querySelector('.error-box');
const forecast = new Forecast();
const fahToCel = fah => Math.round((fah - 32) * (5 / 9));
let data1 = [];

// Time and date formatting

fullDay = dayNumber => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[dayNumber];
};
shortDay = dayNumber => {
  let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];
  return days[dayNumber];
};
shortMonth = monthNumber => {
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct", "Nov", "Dec"];
  return months[monthNumber];
};
hours12TrueGMT = hour => {
  let tIndex = hour.indexOf("T");
  let trueHour = hour.slice(tIndex + 1, tIndex + 3);
  return parseInt(trueHour);
};
timeConversion = time => {
  let d = new Date(time);
  let month = this.shortMonth(d.getMonth());
  let day = this.fullDay(d.getDay());
  let dayShort = this.shortDay(d.getDay());
  let date = d.getDate();
  let currentHour = d.getHours();
  let hours12Hour = this.hours12TrueGMT(time);
  let minutes = d.getUTCMinutes();
  let meridiem = "";
  let meridiem12 = "";
  if (currentHour == 0) {
    currentHour = 12;
    meridiem = "AM";
  } else if (currentHour >= 13) {
    currentHour = currentHour - 12;
    meridiem = "PM";
  } else {
    meridiem = "AM";
  }
  if (hours12Hour == 0) {
    hours12Hour = 12;
    meridiem12 = "AM";
  } else if (hours12Hour >= 13) {
    hours12Hour = hours12Hour - 12;
    meridiem12 = "PM";
  } else {
    meridiem12 = "AM";
  }

  return { month, day, dayShort, date, currentHour, hours12Hour, minutes, meridiem, meridiem12 };
}  

// UI population functions

checkDayNight = weather =>{
  if (weather.IsDayTime) {
    moon.classList.add('d-none');
    if (weather.WeatherText.toLowerCase().includes("sun")) {
      document.body.style.background =
      "linear-gradient(rgba(32, 61, 94, 0.849),rgb(50, 144, 231))no-repeat fixed";
    } else {
      document.body.style.background =
      "linear-gradient(rgb(68, 63, 63),gray) no-repeat fixed";
    }
  } else {
    document.body.style.background = "black";
    moon.classList.remove('d-none');
  }
}

fillCurrentConditions = (cityDetails, weather) =>{
  const currentDayTime = timeConversion(weather.LocalObservationDateTime);
  const { month, day, date } = currentDayTime;
  details.innerHTML = `
    <h1 id="city-name">${cityDetails.EnglishName}</h1>
    <p id="city-country">${cityDetails.Country.EnglishName}</p>
    <p id="city-day">${day} \xa0${month} ${date} </p>
    <img src="img/icons/${weather.WeatherIcon}.png" class="condition-icon"> 
    <div id="current-condition">${weather.WeatherText}</div>
    <div id="temperature">
            <span id="current-temp">${Math.round(weather.Temperature.Metric.Value)}</span>
            <span id="current-temp-type">&deg;C</span>
    </div>`;
  cityForm.classList.toggle("d-none");
}

fill12Hours = day12Hours =>{
  container12Hours.innerHTML = "";
  day12Hours.forEach((hour) => {
    const hours12Forecast = timeConversion(hour.DateTime);
    let { hours12Hour, meridiem12 } = hours12Forecast;
    container12Hours.innerHTML += `
      <div class="hours12-boxes" name="hours12-box">
        <p id="hours12-time">${hours12Hour}:00 ${meridiem12}</p>
        <p id="hours12-condition" class="">${hour.IconPhrase}</p>
        <img src="img/icons/${hour.WeatherIcon}.png" alt="Condition">
        <span id="hours12-temp">${Math.round(fahToCel(hour.Temperature.Value))}&deg;C</span>
      </div>`;
  });
}

fill5Days = (forecast5Days, weather) =>{
  container5Days.innerHTML = "";
  forecast5Days.forEach((day) => {
    const fiveDayForecast = timeConversion(day.Date);
    let { month, dayShort, date } = fiveDayForecast;
    container5Days.innerHTML += `
      <div class="forecast-boxes">
        <p id="topDay">${dayShort}</p>
        <p id="fiveDayDate">${month} ${date}</p>
        <img src="img/icons/${day.Day.Icon}.png" alt="Condition"><br>
        <p id="condition" class="d-none">${day.Day.IconPhrase}</p>
        <span id="max-temp">Max: ${Math.round(fahToCel(day.Temperature.Maximum.Value))}&deg;C</span><br>
        <span id="min-temp">Min: ${Math.round(fahToCel(day.Temperature.Minimum.Value))}&deg;C</span>
      </div>`;
    if (screen.width >= 1024) container5Days.classList.add('flex5');
  });
  if (!weather.IsDayTime){
    let boxes = document.querySelectorAll('#condition');
          console.log(boxes);
          boxes.forEach(box =>{
                  if(box.textContent.toLowerCase().includes('sun')){
                          box.parentElement.classList.add('sun');
                  }else{
                          box.parentElement.classList.add('cloud');
                  }
          });
  } 
}

tempScale = (weather, forecast5Days, day12Hours) => {
  if (tempSwitch.innerHTML == "°C") {
    document.getElementById("current-temp").innerHTML = `${Math.round(weather.Temperature.Imperial.Value)}`;
    document.getElementById("current-temp-type").innerHTML = `&deg;F`;
    document.querySelectorAll("#hours12-temp").forEach((temp, index) => {
      temp.innerHTML = `${day12Hours[index].Temperature.Value}&deg;F`;
    });
    document.querySelectorAll("#max-temp").forEach((temp, index) => {
      temp.innerHTML = `Max: ${forecast5Days[index].Temperature.Maximum.Value}&deg;F`;
    });
    document.querySelectorAll("#min-temp").forEach((temp, index) => {
      temp.innerHTML = `Min: ${forecast5Days[index].Temperature.Minimum.Value}&deg;F`;
    });
  } else {
    document.getElementById("current-temp").innerHTML = `${Math.round(weather.Temperature.Metric.Value)}`;
    document.getElementById("current-temp-type").innerHTML = `&deg;C`;
    document.querySelectorAll("#hours12-temp").forEach((temp, index) => {
      temp.innerHTML = `${Math.round(fahToCel(day12Hours[index].Temperature.Value))}&deg;C`;
    });
    document.querySelectorAll("#max-temp").forEach((temp, index) => {
      temp.innerHTML = `Max: ${Math.round(fahToCel(forecast5Days[index].Temperature.Maximum.Value))}&deg;C`;
    });
    document.querySelectorAll("#min-temp").forEach((temp, index) => {
      temp.innerHTML = `Min: ${Math.round(fahToCel(forecast5Days[index].Temperature.Minimum.Value))}&deg;C`;
    });
  }
};

sample =()=>{
  fetch("weatherNight.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    updateUI(data)})
  .catch((err => alert(err))); 
} 

// UI updater

const updateUI = data => {

  const { cityDetails, weather, forecast5Days, day12Hours } = data;
  data1 = data;
  
  checkDayNight(weather);
  fillCurrentConditions(cityDetails,weather);
  fill12Hours(day12Hours);
  fill5Days(forecast5Days,weather);
  currentContainer.classList.remove("d-none");
  container12Hours.classList.remove("d-none");
  container5Days.classList.remove("d-none");
  forecastTitle.forEach((title) => title.classList.remove("d-none")); // 12 hour and 5 day titles
  tempScale(weather, forecast5Days, day12Hours);
  localStorage.setItem("recentInfo", JSON.stringify(data));
};

// Search box handler

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = cityForm.city.value.trim();
  cityForm.reset();
  forecast.updateCity(city)
  .then(data => updateUI(data))
  .catch(err =>{
    errorBox.classList.remove("d-none");
    errorBox.innerHTML = `
      Sorry, no information for that location, or the daily limit of 50 API requests has been reached.`;
    setTimeout(() =>{
      errorBox.classList.add("d-none");
    },5500);
    sample();
  });  
  localStorage.setItem("city", city);
});

// Search box toggler

magnifier.addEventListener("click", (e) => {
  e.preventDefault();
  cityForm.classList.toggle("d-none");
});

// Temperature scale changer

tempSwitch.addEventListener("click", (e) => {
  tempSwitch.innerHTML = tempSwitch.innerHTML == "°C" ? `&deg;F` : `&deg;C`;
  let tempPreference = tempSwitch.innerHTML;
  localStorage.setItem("tempPreference", tempPreference);
  const { weather, forecast5Days, day12Hours} = data1;
  tempScale( weather, forecast5Days, day12Hours);
});

if(localStorage.getItem("tempPreference")){
  let scale = localStorage.getItem("tempPreference");
  tempSwitch.innerHTML = scale;
};

// Get data for the last location queried

if(localStorage.getItem('city')){
  forecast.updateCity(localStorage.getItem('city'))
  .then(data => updateUI(data))
  .catch(err => console.log(err));
};
