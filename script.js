async function getWeather(){
    let city=document.getElementById("A").value

    let API_KEY="44123b9d3dcb7b049732384dae5411df"

    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try{
        let response=await fetch(url)
        let data=await response.json()

        if(data.cod==200){
            document.getElementById("result").innerHTML=`
            <h2><b>Temparature:</b>${data.main.temp} °C</h2>
            <p><b>Humidity:</b>${data.main.humidity}%</p>
            <p><b>Weather:</b>${data.weather[0].main}</P>
            <p><b>Wind Speed:${data.wind.speed}m/s</p>

            `
        }
        else{
            document.getElementById("result").innerHTML="city is not found"
        }
    }
    catch(error){
        document.getElementById("result").innerHTML="Something went wrong"
    }

}