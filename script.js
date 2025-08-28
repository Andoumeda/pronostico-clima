async function obtenerClima(ciudad) {
	const claveApi = "TU_CLAVE_API"; // Reemplaza con tu clave API de OpenWeatherMap
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${claveApi}&units=metric&lang=es`;

	try {
    	const response = await fetch(url);

    	if (!response.ok) 
    		throw new Error(`Error HTTP: ${response.status}`);

    	const data = await response.json();

    	console.log("Clima en", ciudad, ":", data);
    	console.log(`Temperatura: ${data.main.temp}°C`);
    	console.log(`Descripción: ${data.weather[0].description}`);
    	console.log(`Humedad: ${data.main.humidity}%`);
    	console.log(`Viento: ${data.wind.speed} m/s`);

    	return data;
	}
	catch (error) {
    	console.error("Hubo un problema con la petición:", error);
  	}
}

obtenerClima("Asuncion");