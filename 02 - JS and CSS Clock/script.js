const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalClock = document.querySelector('.digitalClock');

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const minutes = now.getMinutes();
    const minsDegrees = ((minutes/60) * 360) + ((seconds/60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    
    const hours = now.getHours();
    const hourDegrees = ((hours/12) * 360) + ((minutes/60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    
    // Digital clock (12-hour format) □ Add that by my logic
    const twelveHour = hours >= 12 ? "PM" : "AM";
    const hour12 = hours % 12 || 12;
    digitalClock.innerHTML = `${hour12} : ${minutes} ${twelveHour}`;
}

setInterval(setDate, 1000);
setDate();
