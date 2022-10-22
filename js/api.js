const miClima = document.querySelector("#clima");
const imgClima = document.createElement("img");


fetch("https://api.weatherbit.io/v2.0/current?lang=es&city=Bariloche&country=AR&key=06f893dddd5c48a0a9855c22218cbc7b")
  .then((response) => {
    if (!response.ok) {
      throw new Error('HTTP error, status = ${response.status}');
    }
    return response.json();
  })
  .then((dat) => {  
    miClima.innerHTML = `El clima en ${dat.data[0].city_name} es de ${dat.data[0].temp} grados |  ${dat.data[0].weather.description}`;
    imgClima.src = `img/icons/${dat.data[0].weather.icon}.png`;
    imgClima.id = "icon-clima";
    miClima.appendChild(imgClima);
  })
  .catch((error) => {
    miClima.innerHTML = "El servicio del clima en Bariloche no está disponible en este momento.";
  });