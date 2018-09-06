import React from "react";

const Weather = props => (
  <div className="weather-info">
    <center>
      {props.city && (
        <p className="weather__key">
          Location:
          <span className="weather__value">{props.city}</span>
        </p>
      )}
      {props.temperature && (
        <p className="weather__key">
          Temperature:
          <span className="weather__value">{props.temperature} degrees</span>
        </p>
      )}
      {props.humidity && (
        <p className="weather__key">
          Humidity:
          <span className="weather__value">{props.humidity}</span>
        </p>
      )}
      {props.description && (
        <p className="weather__key">
          Conditions:
          <span className="weather__value">{props.description}</span>{" "}
        </p>
      )}
      {props.error && <p className="weather__error">{props.error}</p>}
      {props.imageURL && (
        <img className="weather__image" src="{ props.imageURL }" alt="..." />
      )}
    </center>
  </div>
);
export default Weather;
