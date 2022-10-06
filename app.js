window.addEventListener('load',()=>{
  let long;
  let lat;
  let temperatureDescription= document.querySelector(".description");
  
  let temperatureDegree= document.querySelector(".temp-degree");
  
  let locationTimeZone= document.querySelector(".location-tz");

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position=>{
       lat = position.coords.latitude;
       long = position.coords.longitude;

      let key='55a4ca8740b184486c6fad1b157bc6a5';
      let api='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&units=metric&appid='+key;
        fetch(api)
          .then(response=>{
          return response.json();
        })
        .then(data =>{
          console.log(data);
          const {temp}= data.main;
          const {description,icon}=data.weather[0];

          temperatureDegree.textContent= temp;
          temperatureDescription.textContent = description;
          locationTimeZone.textContent=data.name;
          document.querySelector(".icon").src= "https://openweathermap.org/img/wn/"+ icon + ".png";
        })
    })
  }
});
