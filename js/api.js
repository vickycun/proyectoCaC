const myClima = document.querySelector("#clima");

fetch("https://api.weatherbit.io/v2.0/current?lang=es&city=Bariloche&country=AR&key=c62a6e3c320440f283903d278708d582")
  .then((response) => {
    if (!response.ok) {
      throw new Error('HTTP error, status = ${response.status}');
    }
    return response.json();
  })
  .then((dat) => {
    //console.log(dat);
    //console.log(dat.data[0].city_name);
    
    const textClima = document.createElement("p");
    const nameElement = document.createElement("strong");
    nameElement.textContent = `${dat.data[0].city_name} | ${dat.data[0].temp} grados | ${dat.data[0].weather.description}`;
    textClima.textContent = nameElement.innerHTML
    myClima.appendChild(textClima);
    
  })
  .catch((error) => {
    const textClima = document.createElement("p");
    const nameElement = document.createElement("strong");
    nameElement.textContent = 'El servicio del clima en Bariloche no está disponible en este momento.'
    textClima.textContent = nameElement.innerHTML;
    myClima.appendChild(textClima);
    //document.body.insertBefore(p, myClima);
  });