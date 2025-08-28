async function obtenerClima() {
	const ciudad = document.getElementById("inputCiudad").value;
	const claveApi = "TU_CLAVE_API"; // Reemplaza con tu clave API de OpenWeatherMap
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${claveApi}&units=metric&lang=es`;

	try {
    	const response = await fetch(url);

    	if (!response.ok)
    		throw new Error(`Error HTTP: ${response.status}`);

    	const data = await response.json();

    	document.getElementById("result").innerHTML = `
        	<h3>${data.name}, ${data.sys.country}</h3>
        	<p><b>Temperatura:</b> ${data.main.temp} °C</p>
        	<p><b>Clima:</b> ${data.weather[0].description}</p>
        	<p><b>Humedad:</b> ${data.main.humidity}%</p>
        	<p><b>Viento:</b> ${data.wind.speed} m/s</p>
        `;

    	return data;
	}
	catch (error) {
		document.getElementById("result").innerHTML = `<p style="color:red;">Hubo un problema con la petición: ${error.message}</p>`;
  	}
}