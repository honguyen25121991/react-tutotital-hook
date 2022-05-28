// import axios from "axios";

// const Weather = () => {
//   return <div>Weather in side components</div>;
// };
// export default Weather;
import React from "react";
import Search from "./Seact";
import "./Wearther.scss";
class Weather extends React.Component {
  render() {
    return (
      <div className="weather-app-container">
        <Search />
      </div>
    );
  }
}
export default Weather;
