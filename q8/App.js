// Import React and useState hook
import React, { useState } from "react";

// Utility function to fetch country data from API
async function fetchCountries(name) {

  // Fetch data from REST Countries API
  const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const data = await res.json();

  // If response is not an array, return empty list
  if (!Array.isArray(data)) return [];

  // Extract required fields from API response
  return data.map((c) => ({
    id: c.cca3, // Unique country code
    name: c.name.common, // Country name
    capital: c.capital ? c.capital[0] : "N/A", // Capital city
    population: c.population, // Population
    region: c.region, // Region (Asia, Europe, etc.)
    flag: c.flags.png // Flag image
  }));
}

// Header Component
function Header() {
  return <h1 style={{ textAlign: "center" }}>Country Explorer</h1>;
}

// Search Component
function Search({ onSearch }) {

  // State for input value
  const [query, setQuery] = useState("");

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>

      {/* Input box */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search country..."
      />

      {/* Search button */}
      <button onClick={() => onSearch(query)}>Search</button>

    </div>
  );
}

// Country Card Component
function CountryCard({ country }) {

  const card = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
    width: "200px",
    textAlign: "center",
    backgroundColor: "#f9f9f9"
  };

  return (
    <div style={card}>

      {/* Flag */}
      <img src={country.flag} alt={country.name} width="100%" />

      {/* Country Details */}
      <h3>{country.name}</h3>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>

    </div>
  );
}

// Country List Component
function CountryList({ countries }) {

  const grid = {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    justifyContent: "center"
  };

  return (
    <div style={grid}>

      {/* Loop through countries */}
      {countries.map((c) => (
        <CountryCard key={c.id} country={c} />
      ))}

    </div>
  );
}

// Main App Component
function App() {

  // State to store countries
  const [countries, setCountries] = useState([]);

  // Handle search click
  const handleSearch = async (query) => {
    const result = await fetchCountries(query);
    setCountries(result);
  };

  return (
    <div style={{ fontFamily: "Arial", marginTop: "20px" }}>

      {/* Student Details */}
      <div style={{ textAlign: "center" }}>
        <h3>Name: Pushpraj</h3>
        <h4>Reg No: 24BCE0044</h4>
      </div>

      {/* Components */}
      <Header />
      <Search onSearch={handleSearch} />
      <CountryList countries={countries} />

    </div>
  );
}

// Export App
export default App;
