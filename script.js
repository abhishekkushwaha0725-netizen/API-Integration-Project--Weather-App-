// async function getWeather() {
//   let city = document.getElementById("city").value;
//   let output = document.getElementById("output");

//   output.innerHTML = "Loading... ⏳";

//   try {
//     let apiKey = "YOUR_API_KEY";
//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//     let res = await fetch(url);
//     let data = await res.json();

//     if (data.cod !== 200) {
//       output.innerHTML = "City not found ❌";
//       return;
//     }

//     output.innerHTML = `
//       <h2>${data.name}</h2>
//       <p>🌡 Temp: ${data.main.temp}°C</p>
//       <p>🌥 Weather: ${data.weather[0].main}</p>
//     `;

//   } catch (error) {
//     output.innerHTML = "Error fetching data ❌";
//   }
// }






async function getWeather() {
    const city = document.getElementById("city").value;
    const output = document.getElementById("output");

    output.innerHTML = "Loading...";

    const apiKey = "1919042c14ce47478fd140851260507";

    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
        );

        const data = await response.json();

        if (data.error) {
            output.innerHTML = "City not found ❌";
            return;
        }

        // output.innerHTML = `
        //     <h2>${data.location.name}, ${data.location.country}</h2>
        //     <h3>${data.current.temp_c}°C</h3>
        //     <p>${data.current.condition.text}</p>
        //     <img src="https:${data.current.condition.icon}" alt="Weather Icon">
        output.innerHTML = `
        <h2>${data.location.name}, ${data.location.country}</h2>
        <h3>${data.current.temp_c}°C</h3>
        <p>${data.current.condition.text}</p>
        <p>💧 Humidity: ${data.current.humidity}%</p>
        <p>🌬️ Wind: ${data.current.wind_kph} km/h</p>
        <p>🌡️ Feels Like: ${data.current.feelslike_c}°C</p>
        <img src="https:${data.current.condition.icon}" alt="Weather Icon">
        `;

    } catch (error) {
        output.innerHTML = "Something went wrong ❌";
    }
}