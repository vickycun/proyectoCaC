const myClima = document.querySelector("#clima");

fetch("https://api.weatherbit.io/v2.0/current?lang=es&city=Bariloche&country=AR&key=06f893dddd5c48a0a9855c22218cbc7b")
  .then((response) => {
    if (!response.ok) {
      throw new Error('HTTP error, status = ${response.status}');
    }
    return response.json();
  })
  .then((dat) => {
    const textClima = document.createElement("p");
    const imgElement = document.createElement("img");

    imgElement.id = "icon-clima"; 
    imgElement.src = `img/icons/${dat.data[0].weather.icon}.png`;
    imgElement.height = "24";
    
    textClima.innerHTML = `El clima en ${dat.data[0].city_name} es de ${dat.data[0].temp} grados |  ${dat.data[0].weather.description}`;
    textClima.appendChild(imgElement);
    myClima.appendChild(textClima);
  })
  .catch((error) => {
    const textClima = document.createElement("p");
    textClima.innerHTML = "El servicio del clima en Bariloche no está disponible en este momento.";
    myClima.appendChild(textClima);
  });