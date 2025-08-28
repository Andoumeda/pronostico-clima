// Función para obtener el clima actual de una ciudad
async function getWeather(city) {
  const apiKey = "TU_API_KEY"; // Reemplaza con tu clave de API de OpenWeatherMap
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();

    console.log("Clima en", city, ":", data);
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

getWeather("Asuncion");