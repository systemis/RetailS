var express = require('express');
var $       = require('jquery');
var axios   = require('axios');
var app     = express();

const API_KEY = '829e6da3a8a6c236fa66af6cba189b99';
const OPEN_WEATHER_MAP_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`;

app.listen(8000, () => {
    var location = 'New york';
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${location}`;
    console.log(`${OPEN_WEATHER_MAP_URL}&q=${location}`);
    
    return axios.get(requestUrl).then(res => {
        // Because of the API we need to add a few edge-cases (they have no built-in error handling)
        console.log(res.data);
        if (res.data.cod && res.data.message) {
            throw new Error(res.data.message);
        } else {
            console.log(res.data.main.temp);
            console.log(res.data.main.humidity);
        }
        }, function(res) {
        throw new Error(res.data.message);
    });
})