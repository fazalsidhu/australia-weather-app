import React, { useState, useEffect } from 'react';
import data from './services/api'
import util from './services/util'
import City from './components/City'


function App() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    data
      .getAll('Melbourne', 'Vic')
      .then(weather => {
        setWeather(weather)
        util.setBodyBackgroundImage(weather.weather[0].main)
      })
  }, [])

  const clickHandle = (city, state) => {
    data
      .getAll(city, state)
      .then(weather => {
        setWeather(weather)
        util.setBodyBackgroundImage(weather.weather[0].main)
      })
  };


  const notesToShow = [{
    name: 'Brisbane',
    state: 'QLD'
  }, {
    name: 'Canberra',
    state: 'ACT'
  }, {
    name: 'Darwin',
    state: 'NT'
  }, {
    name: 'Hobart',
    state: 'TAS'
  }, {
    name: 'Melbourne',
    state: 'VIC'
  }, {
    name: 'Perth',
    state: 'SA'
  }, {
    name: 'Sydney',
    state: 'NSW'
  }];

  return (
    <div className="App">
      {(typeof weather.main != "undefined") ? (
        <div className="container">
          <div className="current-info">

            <div className="date-container">
              <div className="time" id="time">
                {Math.round(weather.main.temp)}°c
              </div>
              <div className="date" id="date">
                {util.dateBuilder(new Date())}
              </div>

              <div className="others" id="current-weather-items">
                <div className="weather-item">
                  <div>Condition</div>
                  <div>{weather.weather[0].main}</div>
                </div>
                <div className="weather-item">
                  <div>Feels Like</div>
                  <div>{Math.round(weather.main.feels_like)}°c</div>
                </div>
                <div className="weather-item">
                  <div>Humidity</div>
                  <div>{Math.round(weather.main.humidity)}%</div>
                </div>

                <div className="weather-item">
                  <div>Max Temperature</div>
                  <div>{Math.round(weather.main.temp_max)}°c</div>
                </div>
                <div className="weather-item">
                  <div>Min Temperature</div>
                  <div>{Math.round(weather.main.temp_min)}°c</div>
                </div>


              </div>
            </div>

            <div className="place-container">
              <div className="time-zone" id="time-zone">{weather.name}, AU</div>
            </div>
          </div>


        </div>
      ) : ('')}


      <div className="panel-forecast">
        <div className="weather-forecast" id="weather-forecast">
          {notesToShow.map(note =>
            <City
              note={note}
              toggleImportance={() => clickHandle(note.name, note.state)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
