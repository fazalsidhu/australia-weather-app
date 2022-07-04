import Clear from '../assets/images/Clear.jpg';
import Rain from '../assets/images/Rain.jpg';
import Clouds from '../assets/images/Clouds.jpg';
import Drizzle from '../assets/images/Drizzle.jpg';
import Snow from '../assets/images/Snow.jpg';
import Thunderstorm from '../assets/images/Thunderstorm.jpg';


const setBodyBackgroundImage = (condition) => {
  var body = document.getElementsByTagName('body')[0];
  if (condition === 'Rain') {
    body.style.backgroundImage = `url(${Rain})`;
  }
  else if (condition === 'Clear') {
    body.style.backgroundImage = `url(${Clear})`;
  }
  else if (condition === 'Clouds') {
    body.style.backgroundImage = `url(${Clouds})`;
  }
  else if (condition === 'Drizzle') {
    body.style.backgroundImage = `url(${Drizzle})`;
  }
  else if (condition === 'Snow') {
    body.style.backgroundImage = `url(${Snow})`;
  }
  else if (condition === 'Thunderstorm') {
    body.style.backgroundImage = `url(${Thunderstorm})`;
  }
  console.log(condition)
}


const dateBuilder = (d) => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`
}


export default { dateBuilder, setBodyBackgroundImage }