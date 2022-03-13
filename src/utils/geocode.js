const axios = require('axios')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoidml0YWxpaXBpZG9wcnlob3JhIiwiYSI6ImNsMGpmNDNwYzBidzAza3VvMmJ6b2tpaDYifQ.ivdGp-6vJIKOwuMX6wnhqA&limit=1'
    axios({ method: 'get', url, responseType: 'json' })
        .then(({ data: { features } }) => {
            if (features.length === 0) {
                callback('Unable to find location. Try another search!', undefined)
            } else {
                const coordinates = features[0].center
                callback(undefined, {
                    location: features[0].place_name,
                    longitude: coordinates[0],
                    latitude: coordinates[1]
                })
            }
        })
        .catch((error) => {
            callback('Unable to fetch data from mapbox', undefined)
        })
}

module.exports = geocode