var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.open-meteo.com/v1/forecast?latitude=-31.4135&longitude=-64.181&hourly=temperature_2m,relativehumidity_2m,weathercode&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=1", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));