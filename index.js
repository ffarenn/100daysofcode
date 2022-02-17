// read - realise - write - reshape

// 1. Lets find variables -> time, PromoTime, Days, Hoursm minutes and seconds
// 2. Find statements if greater or less than 0 whats going to happen
// 3. Function starting Countdown

let time = 25; // this is time in minutes

let promoTime = time * 60; // Seconds 1500

let counting = document.getElementById("countdown")

// lets write the functionality

function startCountdown() { // set interval will keep on calling until the specified one
    let promoTimer = setInterval(function() {
        if (promoTime <= 0) {
            clearInterval(promoTime);
            counting.innerHTML = "Countdown has ended"
        } else {
            promoTime--;

            const days = Math.floor(promoTime / 3600 / 24);
            const hours = Math.floor(promoTime / 3600) % 24;
            const minutes = Math.floor(promoTime / 60) % 60;
            const seconds = Math.floor(promoTime % 60);
            // (25*60) % 60 --> store all of this in the second variable
            
            counting.innerHTML = `TIME: ${addZero(hours)} hours : ${addZero(minutes)} minutes : ${addZero(seconds)} seconds`
        }
    }, 1000) 

}

function addZero(t) {
    if (t < 10) {
        return `0${t}`
    } else {
        return t;
    }
    // return  t< 10 ? 0${t} : t;
}

startCountdown()