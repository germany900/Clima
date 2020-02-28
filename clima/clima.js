const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=cf156954040fe3a03ed56a1a1e948589&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}