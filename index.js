
// Background image
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=travel")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("image-author").textContent = `Image by: ${data.user.name}`
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })


// Crypto   
/* 
fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `
        document.getElementById("crypto").innerHTML += `
            <p>🎯: $${data.market_data.current_price.usd}</p>
            <p>👆: $${data.market_data.high_24h.usd}</p>
            <p>👇: $${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => console.error(err))
*/


// Time and greeting
function getCurrentTime() {
    // time
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
    
    // greeting user based on the time
    const greetingUserEl = document.getElementById('greeting')
    const hours = date.getHours()
    const userName = "Honza"
    if(hours >= 18) {
        greetingUserEl.textContent = `Good evening, ${userName}!`
    } else if (hours >= 12) {
        greetingUserEl.textContent = `Good afternoon, ${userName}!`
    } else if ((hours >= 6)) {
        greetingUserEl.textContent = `Good morning, ${userName}!`
    } else {
        greetingUserEl.textContent = `Hey ${userName}, you should be sleeping or partying!`
    }   
}

setInterval(getCurrentTime, 1000)


// Quote
fetch('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
    headers: { 'X-Api-Key': 'vp0UDSSNIeTPowIFA7Nr0g==1jTPFRuBQNuRNse5'}
})
    .then(res => {
        if (!res.ok) {
            throw Error("Quote not loaded")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById('quote').textContent = data[0].quote
        document.getElementById('quote-author').textContent = `Quote by: ${data[0].author}`
    })
    .catch(err => {
        document.getElementById('quote').textContent = "You have power over your mind - not outside events. Realize this, and you will find strength."
        document.getElementById('quote-author').textContent = "Marcus Aurelius"
    })


///////////////////////////////////////////////////////////
/* Variant of weather forecast based on user´s location. */
/*
navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&APPID=d8747767a69064beb0e1d244904c631f`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p class="weather-temp">${Math.round(data.main.temp)}º</p>
                <p class="weather-city">${data.name}</p>
            `
        })
        .catch(err => console.error(err))
});
*/


// Weather forecast
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Prague&units=metric&APPID=d8747767a69064beb0e1d244904c631f`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p class="weather-temp">${Math.round(data.main.temp)}º</p>
                <p class="weather-city">${data.name}</p>
            `
        })
        .catch(err => console.error(err))
