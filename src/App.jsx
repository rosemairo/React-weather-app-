import React from "react";
import Weather from "./Components/Weather";
import axios from "axios";
import Autocomplete from "react-google-autocomplete";
import Responsive from './Components/Responsive';
import "./App.css";

const API_KEY = "7783215fab469a69e309ee1dffc56d0e";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
    loading: false,
    error: undefined,
  };
  getWeather = e => {
    e.preventDefault();
    const city = this.state.city;
    this.setState({
      loading: true
    });
    if (!city) {
      this.setState({
        temperature: undefined,
        city: undefined,
        humidity: undefined,
        description: undefined,
        loading: false,
        error: "please enter city",
      });

      return;
    }
    const api_call = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    api_call.then(response => {
      const data = response.data;
      console.log(data);
      
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
        loading: false,
      });
    });
    api_call.catch(error => {
      this.setState({
        loading: false
      });
      setTimeout(() =>{
        this.setState({
          error: "",
        })
      }, 1000);
    });
  };
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="row">
                <div className="form-container">
                
                  <h1 className="header">My Weather Finder</h1>
                  <p className="sub-header">Get weather conditions,forecast and more...</p>
                

                <div>
                  <Autocomplete
                    onPlaceSelected={place => {
                      console.log(place);
                      this.setState({
                        city: place.name
                      });
                    }}
                    types={["(cities)"]}
                    // componentRestrictions={{country: "Ng"}}
                  />
               

                  {!this.state.loading ? (
                    <button
                      onClick={this.getWeather}
                          className="btn btn-primary mx-1"
                    >
                      Get weather
                    </button>
                  ) : (
                    <button className="btn btn-primary btn-sm">
                      <i class="fas fa-spinner fa-spin" />
                    </button>
                  )}
                  </div>

                    <Weather 
                        temperature={this.state.temperature}
                        city={this.state.city}
                        humidity={this.state.humidity}
                        description={this.state.description}
                        error={this.state.error}
                    />
                    {/* <Responsive getWeather={this.getWeather} /> */}
                </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
