import React, { useState } from "react";

//  Replace with your OpenWeatherMap API Key
const API_KEY = "a834c9996f8934274cef423198294ea2";

//  Utility function to fetch weather data
async function fetchWeather(city) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await res.json();

    if (data.cod !== 200) return null;

    return {
      city: data.name,
      temp: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      wind: data.wind.speed
    };
  } catch (error) {
    return null;
  }
}

//  Header Component
function Header() {
  return (
    <h1 style={{ textAlign: "center" }}>
      🌤 Weather Dashboard
    </h1>
  );
}

//  Search Component
function Search({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch(city)}
        style={{ padding: "8px", width: "200px" }}
      />
      <button
        onClick={() => onSearch(city)}
        style={{ padding: "8px 12px", marginLeft: "10px" }}
      >
        Search
      </button>
    </div>
  );
}

//  Dashboard Component
function Dashboard({ weather }) {
  if (!weather) {
    return (
      <p style={{ textAlign: "center" }}>
        No data available
      </p>
    );
  }

  const card = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    width: "300px",
    margin: "0 auto",
    textAlign: "center",
    backgroundColor: "#f2f2f2"
  };

  return (
    <div style={card}>
      <h2>{weather.city}</h2>
      <p>🌡 Temperature: {weather.temp} °C</p>
      <p>☁ Description: {weather.description}</p>
      <p>💧 Humidity: {weather.humidity}%</p>
      <p>💨 Wind Speed: {weather.wind} m/s</p>
    </div>
  );
}

// Main App Component
function App() {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    if (!city) return;
    const data = await fetchWeather(city);
    setWeather(data);
  };

  return (
    <div style={{ fontFamily: "Arial", marginTop: "30px" }}>
      
      {/* Student Details */}
      <div style={{ textAlign: "center" }}>
        <h3>Name: Pushpraj</h3>
        <h4>Reg No: 24BCE00044</h4>
      </div>

      <Header />
      <Search onSearch={handleSearch} />
      <Dashboard weather={weather} />
    </div>
  );
}

export default App;
