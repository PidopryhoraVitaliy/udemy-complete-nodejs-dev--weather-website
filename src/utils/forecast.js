const axios = require('axios')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=7f56c6bb0d382313a170f716d1f6160f&query=${latitude},${longitude}&units=m`
    axios({ method: 'get', url, responseType: 'json' })
        .then((response) => {
            if (response.data.error) {
                callback('Unable to find location!', undefined)
            } else {
                const { temperature, feelslike } = response.data.current
                const weather = `It is currently ${temperature} degress out. It feels like ${feelslike} degress out`
                callback(undefined, weather)
            }
        })
        .catch((error) => {
            callback('Unable to fetch data from weatherstack', undefined)
        })
}

module.exports = forecast