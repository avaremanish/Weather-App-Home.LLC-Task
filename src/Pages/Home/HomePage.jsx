import React, { useEffect, useState } from 'react'
import "./homePage.css"
import { HiBars2 } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { BsClouds } from "react-icons/bs";
import IMG from "../../assets/graph.jpg"
import getFormattedWeatherData, { formatToLocalTime } from '../../Services/WeatherServives';


export const HomePage = ( { dt,timezone, name, country } ) => {
  const [data, SetData] = useState([]);

  // State variables for location query, units, and weather data
  const [query, setQuery] = useState({ q: "New York" }); // Default query for Berlin
  const [units, setUnits] = useState("metric"); // Default units for temperature (metric)
  const [weather, setWeather] = useState(null); // State to store weather data

  // Effect hook to fetch weather data based on query and units
  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location."; // Message for fetching weather

      const data = await getFormattedWeatherData({ ...query, units }); // Fetch weather data
      setWeather(data); // Update weather state with fetched data
      console.log(data); // Log the fetched data to the console
      console.log(data.name);
    };

    fetchWeather(); // Call the fetchWeather function
  }, [query, units]); // Dependencies for the effect hook

  // Function to handle location click and fetch user's current location
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  // JSX to render the home page UI
  return (
    <>
      {weather && (
        <div className="Home-page">
          <div className="Navbar">
            <div className="Navbar-icon">
              <HiBars2 />
            </div>

            <div className="Navbar-search">
              <FiSearch />
            </div>
          </div>

          <div className="Context">
            <div className="Header-Name">
              <p className="Place">
                {" "}
                {/* {`${name}`} */}
                {weather.name},
                <br /> {weather.country}
              </p>

              {/* <p className='Country'> United States</p> */}
              <span className="Date">
                oct o4, 2019
                {/* {formatToLocalTime(dt, timezone)} */}
              </span>

              <div className="Current-weather">
                {" "}
                <BsClouds />
                {weather.details}
              </div>
            </div>
            <div className="Header-image">
              <img src="https://s3-alpha-sig.figma.com/img/02d5/ee19/a27e22868999b0cf34d7f4488258f5ac?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KJ2xC77ZMs7K4vbE1CxLnL5~aTx8QDE588vhZXKx6uihcRe6zhnU5pOrlXM1I23cTN9hSOVrXyS~-hkxvrhVZR~zOea8IDjm5nP3-UMYlb326BnhuALPXnsbshkTHYuULQb~~7g-zOlakAHTEUF4GkMmnidZMBoOHMYaMMfIX0Qg7n9gs2iDpSs3Zg3-EQ~kd~3ryqes3BKTQ674KkVUBHu92Ke6Na7FU2i-227-b6GC6JKiW4zQI96UD50~6UM7H8EqBD0MNEXM9QwVlDJUb65dndorXt7mjmhVND0eqftdmNjrhDtMr1LRbO5uw9gYkJMiTfJFVHlldD6znJlw9A__" />
              <button className="Live-button" onClick={handleLocationClick}>
                {" "}
                LIVE{" "}
              </button>
            </div>
          </div>
          <div className="forecast">
            <div className="item-1">
              <div className="time">12:00</div>
              <div>
                {" "}
                <BsClouds />{" "}
              </div>

              <div className="temperature"> {weather.temp_min} </div>
            </div>
            <div className="item-1">
              <div className="time">12:00</div>
              <div>
                {" "}
                <BsClouds />{" "}
              </div>

              <div className="temperature">{weather.temp_min} </div>
            </div>
            <div className="item-1">
              <div className="time">12:00</div>
              <div>
                {" "}
                <BsClouds />{" "}
              </div>

              <div className="temperature">{weather.temp_max} </div>
            </div>
            <div className="item-1">
              <div className="time">12:00</div>
              <div>
                {" "}
                <BsClouds />{" "}
              </div>

              <div className="temperature">{weather.temp} </div>
            </div>
            <div className="item-1">
              <div className="time">12:00</div>
              <div>
                {" "}
                <BsClouds />{" "}
              </div>

              <div className="temperature">{weather.temp_max} </div>
            </div>
          </div>
          <div className="Additional-info">
            <div className="Additional-info-Header"> Additional Info </div>
            <div className="Components">
              <div className="Component-1">
                <p> Precipitation</p> {weather.feels_like} %
              </div>
              <div className="Component-1">
                <p> Humidity</p>
                {weather.humidity} %
              </div>
              <div className="Component-1">
                <p> Windy</p>
                {weather.speed} km/h
              </div>
            </div>
          </div>
          <div className="Temperature">
            <p> Temperature</p>
            <select id="cars">
              <option value="Last">Last Month</option>
              <option value="3">3 Months</option>
              <option value="6">6 Months</option>
              <option value="1">1 year</option>
            </select>
          </div>
          <div className="Graphs">
            <img src={IMG} />
          </div>
        </div>
      )}
    </>
  );
};
