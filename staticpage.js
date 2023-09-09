 // variables
 let day = document.querySelector('[data-testid=currentDayOfTheWeek]');
 let time = document.querySelector('[data-testid=currentUTCTime]');

const daysOfWeek= [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

const newDate = new Date();
const dayOfWeek = newDate.getDay();
const name = daysOfWeek[dayOfWeek];

day.textContent = `${name}.`;

 // functions
//  let dayOfWeek = () => {
//      return new Date().toLocaleDateString('en-En', 
//      {'weekday': 'long'});
//  }

 let timeInMilliseconds = () => {
     const d = Date.now();
     return time.innerHTML = d 
 };
 setInterval(timeInMilliseconds,1);
 // events
 
