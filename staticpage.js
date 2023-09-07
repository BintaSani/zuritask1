 // variables
 let day = document.querySelector('[data-testid=currentDayOfTheWeek]');
 let time = document.querySelector('[data-testid=currentUTCTime]');


 // functions
 let dayOfWeek = () => {
     return new Date().toLocaleDateString('en-En', 
     {'weekday': 'long'});
 }

 let timeInMilliseconds = () => {
     const d = Date.now();
     return time.innerHTML = d 
 };
 setInterval(timeInMilliseconds,1);
 // events
 day.textContent = dayOfWeek();
