document.addEventListener("DOMContentLoaded", () => {
	const btn = document.getElementById("btn-buscar");
	btn.addEventListener("click", obtenerClima);
});

async function obtenerClima() {
	const ciudad = document.getElementById("input-ciudad").value;
	const claveApi = "TU_CLAVE_API"; // Reemplaza con tu clave API de OpenWeatherMap
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${claveApi}&units=metric&lang=es`;

	try {
    	const response = await fetch(url);

    	if (!response.ok) {
    		if (response.status === 404)
				throw new Error("Ciudad no encontrada, verifica el nombre");
			else if (response.status === 401)
				throw new Error("Clave API inválida, revisa tu clave de OpenWeather");
			else if (response.status === 400)
				throw new Error("Por favor escribe una ciudad");
			else
				throw new Error(`Error HTTP ${response.status}`);
		}

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