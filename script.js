let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let image = document.getElementById("img");
let input = document.getElementById("inp");
let form = document.getElementById("myForm");

let Api_key = "1086d436b02ffb0e0a2e4bae6c11d184";

const data = async function (search) {
  let getData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${Api_key}&units=metric`
  );
  console.log(getData);
  let jsonData = await getData.json();
  console.log(jsonData);
  console.log(jsonData.name);

  if (jsonData.cod == 400) {
    alert("Please Enter Location");
    image.src = "error1.png";

    city.innerHTML = "";
    temp.innerHTML = "";
    type.innerHTML = "";
  }
  if (jsonData.cod == 404) {
    alert("Please Enter valid Location");
    image.src = "error2.png";

    city.innerHTML = "";
    temp.innerHTML = "";
    type.innerHTML = "";
  }

  city.innerHTML = search;
  temp.innerHTML = Math.floor(jsonData.main.temp) + "°C";
  type.innerHTML = jsonData.weather[0].main;

  if (type.innerHTML == "Clouds") {
    image.src = "clouds.png";
  } else if (type.innerHTML == "Clear") {
    image.src = "clears.png";
  } else if (type.innerHTML == "Rain") {
    image.src = "rain.png";
  } else if (type.innerHTML == "Snow") {
    image.src = "snow.jpg";
  } else if (type.innerHTML == "Haze") {
    image.src = "haze.png";
  } else if (type.innerHTML == "Strom") {
    image.src = "strom.png";
  } else if (type.innerHTML == "Smoke") {
    image.src = "strom.png";
  } else if (type.innerHTML == "Dust") {
    image.src = "strom.png";
  }
  input.value = "";
};

function myFun(event) {
  console.log("working");
  event.preventDefault();
  search = input.value[0].toUpperCase() + input.value.slice(1);
  data(search);
}

form.addEventListener("submit", myFun);

data("bhavnagar");

