let city = document.getElementById("City");
// console.log(city)
let unit = document.getElementById("Unit");
// console.log(unit);
let Appid = "d20d72effaffd25839c3334bc8db931f";



unit.addEventListener("change", Click);
city.addEventListener("change", Click);

function Click() {
  let unit_value = document.getElementById("Unit").value;
  let city_value = document.getElementById("City").value;
  console.log(unit_value);
  console.log(city_value);

  let output = document.getElementById("output");
  output.classList.add("weather_info");

  let location = document.getElementById("location");
  let temperature = document.getElementById("temperature");
  let description = document.getElementById("description");

  let unit_s;
  if (unit_value == "metric") {
    unit_s = "C";
  } else if (unit_value == "Imperial") {
    unit_s = "F";
  } else if (unit_value == "standard") {
    unit_s = "K";
  }
    
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city_value}&units=${unit_value}&appid=${Appid}`
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);

      const { name, weather, main } = data;
      location.innerHTML = name;
      temperature.innerHTML = `${Math.floor(main.temp)} °${unit_s}`;
      description.innerHTML = weather[0].description;
    })
    .catch(function (error) {
        console.log(`Error : ${error}`)
    })

}
