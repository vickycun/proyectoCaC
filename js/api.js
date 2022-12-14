const miClima = document.querySelector("#clima");

fetch("https://api.weatherbit.io/v2.0/current?lang=es&city=Bariloche&country=AR&key=c62a6e3c320440f283903d278708d582")
  .then((response) => {
    if (!response.ok) {
      throw new Error('HTTP error, status = ${response.status}');
    }
    return response.json();
  })
  .then((dat) => {
    //const textClima = document.createElement("p");
    const imgClima = document.createElement("img");
    imgClima.id = "icon-clima"; 
    imgClima.src = `img/icons/${dat.data[0].weather.icon}.png`;
    imgClima.height = "24";
    miClima.innerHTML = `El clima en ${dat.data[0].city_name} es de ${dat.data[0].temp} grados |  ${dat.data[0].weather.description}`;
    //textClima.appendChild(imgClima);
    miClima.appendChild(imgClima);
  })
  .catch((error) => {
    miClima.innerHTML = "El servicio del clima en Bariloche no está disponible en este momento.";
  });
