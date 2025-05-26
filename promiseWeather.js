function getWeather(city) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {
                Istanbul: "🌤️ 21°C",
                Berlin: "☁️ 17°C",
                Tokyo: "🌧️ 23°C"
            }

            if (data[city]) {
                resolve(`${city} hava durumu: ${data[city]}`)
            }
            else {
                reject(`Şehire ait hava durumu bilgisi bulunamadı.`);
            }
        }, 2000);
    });
}

getWeather(`London`)
.then((result) => console.log(result))
.catch((err) => console.log(`Error:`,err))
.finally(() => console.log(`Request completed.`));