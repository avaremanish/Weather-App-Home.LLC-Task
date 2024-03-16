import React, { useState, useEffect } from "react";
import { HomePage } from "./Pages/Home/HomePage";
import "./App.css"

function App() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("india");

  const apiKey = "1607394c84102ee7158d0ab45d78d0ad"; // Replace with your own API key

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
    );
    const data = await response.json();
    setWeather(data);
  
  };
  


  useEffect(() => {
    handleSearch();
  }, []);

  // if (!weather) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="App">
        <HomePage/>
    </div>
  );
}

export default App;
