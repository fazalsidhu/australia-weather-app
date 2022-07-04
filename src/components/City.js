const City = ({ city, toggleImportance }) => {

  return (
    <div className="weather-forecast" id="weather-forecast">
      <div className="weather-forecast-item" onClick={toggleImportance}>
        <div className="day">
          {city.name} </div>
      </div>
    </div>
  )
}

export default City