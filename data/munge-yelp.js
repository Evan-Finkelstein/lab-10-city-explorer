function mungeYelp(weatherData) {
    let returnArray = weatherData.data.map(weather => {
        return {
            forecast: weather.weather.description,
            time: weather.datetime,
        }
    })
    return returnArray;
}


module.exports = {
    mungeYelp
};
