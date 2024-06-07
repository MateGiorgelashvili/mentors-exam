async function getWeather(){
  const city = document.getElementById("city").value;
  try{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8005e0a1974f974d81c999400dd12dc9`);
    const data = await response.json();
    console.log(data);
    if (data.cod === 200){
      const temp = `<h2>${data.main.temp}</h2>`
      const name = `<h2>${data.name}</h2>`
      const lon = `<h2>${data.coord.lon}</h2>`
      const lat = `<h2>${data.coord.lat}</h2>`
      document.getElementById("name").innerHTML = `City: ${name}`
      document.getElementById("temp").innerHTML = `Temp: ${temp}`
      document.getElementById("lon").innerHTML = `Lon: ${lon}`
      document.getElementById("lat").innerHTML = `Lat: ${lat}`
    } else{
      document.getElementById("result").innerHTML = `<p>${data.message}</p>`
    }
  }
  catch (error){
    document.getElementById("result").innerHTML = `<p>Cant fetch</p>`
  }
  }

  document.getElementById("getWeather").addEventListener("click", () =>{
    if(city.value == ""){
      alert("Enter City Name")
    }else{
      getWeather()
    }

  })

