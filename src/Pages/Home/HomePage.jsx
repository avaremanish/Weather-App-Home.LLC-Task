import React, { useEffect, useState } from 'react'
import "./homePage.css"
import { HiBars2 } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import { BsClouds } from "react-icons/bs";
import IMG from "../../assets/graph.jpg"


export const HomePage = () => {
     const [query, setQuery] = useState({ q: "berlin" });
     const [units, setUnits] = useState("metric");
     const [weather, setWeather] = useState(null);

     useEffect(() => {
       const fetchWeather = async () => {
         const message = query.q ? query.q : "current location.";

         toast.info("Fetching weather for " + message);

         const data = await getFormattedWeatherData({ ...query, units }).then(
           (data) => {
             toast.success(
               `Successfully fetched weather for ${data.name}, ${data.country}.`
             );
             setWeather(data);
           }
         );
         console.log(data);
       };

       fetchWeather();
     }, [query, units]);

     const formatBackground = () => {
       if (!weather) return " from-cyan-700 to-blue-700";
       const threshold = units === "metric" ? 20 : 50;
       if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

       return "from-yellow-700 to-orange-700";
     };

  return (
    <>
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
              New YORK,
              <br /> United States
            </p>
            {/* <p className='Country'> United States</p> */}
            <span className="Date">oct o4, 2019</span>
            <div className="Current-weather">
              {" "}
              <BsClouds />
              Cloudy{" "}
            </div>
          </div>
          <div className="Header-image">
            <img src="https://s3-alpha-sig.figma.com/img/02d5/ee19/a27e22868999b0cf34d7f4488258f5ac?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KJ2xC77ZMs7K4vbE1CxLnL5~aTx8QDE588vhZXKx6uihcRe6zhnU5pOrlXM1I23cTN9hSOVrXyS~-hkxvrhVZR~zOea8IDjm5nP3-UMYlb326BnhuALPXnsbshkTHYuULQb~~7g-zOlakAHTEUF4GkMmnidZMBoOHMYaMMfIX0Qg7n9gs2iDpSs3Zg3-EQ~kd~3ryqes3BKTQ674KkVUBHu92Ke6Na7FU2i-227-b6GC6JKiW4zQI96UD50~6UM7H8EqBD0MNEXM9QwVlDJUb65dndorXt7mjmhVND0eqftdmNjrhDtMr1LRbO5uw9gYkJMiTfJFVHlldD6znJlw9A__" />
            <button className="Live-button"> LIVE </button>
          </div>
        </div>
        <div className="forecast">
          <div className="item-1">
            <div className="time">12:00</div>
            <div>
              {" "}
              <BsClouds />{" "}
            </div>

            <div className="temperature">24 </div>
          </div>
          <div className="item-1">
            <div className="time">12:00</div>
            <div>
              {" "}
              <BsClouds />{" "}
            </div>

            <div className="temperature">24 </div>
          </div>
          <div className="item-1">
            <div className="time">12:00</div>
            <div>
              {" "}
              <BsClouds />{" "}
            </div>

            <div className="temperature">24 </div>
          </div>
          <div className="item-1">
            <div className="time">12:00</div>
            <div>
              {" "}
              <BsClouds />{" "}
            </div>

            <div className="temperature">24 </div>
          </div>
          <div className="item-1">
            <div className="time">12:00</div>
            <div>
              {" "}
              <BsClouds />{" "}
            </div>

            <div className="temperature">24 </div>
          </div>
        </div>
        <div className="Additional-info">
          <div className="Additional-info-Header"> Additional Info </div>
          <div className="Components">
            <div className="Component-1">
              <p> Precipitation</p>
              5%
            </div>
            <div className="Component-1">
              <p> Humidity</p>
              74%
            </div>
            <div className="Component-1">
              <p> Windy</p>
              15km/h
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
    </>
  );
}
