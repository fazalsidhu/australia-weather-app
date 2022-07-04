const City = ({ note, toggleImportance }) => {

  return (
    <div className="weather-forecast" id="weather-forecast">
      <div className="weather-forecast-item" onClick={toggleImportance}>
        <div className="day">
          {note.name} </div>
      </div>
    </div>
  )
}

export default City