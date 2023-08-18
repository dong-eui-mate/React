const getPosWeather = ()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        getWeather(lat,lon);
    });
}
const getWeather = async(lat, lon)  =>{
    
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0ae604398defe8b0e3159d641360e1c5`;
    let response = await fetch(url);
    let data = await response.json();
    let temp_C = (data.main.temp - 273.15).toFixed(2);
    let wind_m_s = data.wind.speed;
    let cloudsPer = data.clouds.all;
    let region = data.name;
    let totalWeather = data.weather[0].main;
    
    console.log("날씨", data);
    console.log('지역:',region);
    console.log('날씨:', totalWeather);
    console.log('온도:', temp_C, '℃');
    console.log('풍속:', wind_m_s,'m/s');
    console.log('구름량:', cloudsPer,'%');
}
export { getPosWeather };