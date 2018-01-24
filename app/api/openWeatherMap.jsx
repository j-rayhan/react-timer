var axios = require('axios');
var api_1 = "http://api.openweathermap.org/data/2.5/weather?appid=debcbf9e095f034f1166019c39012782&q=Dhaka";
var api_2 = "http://api.openweathermap.org/data/2.5/weather?appid=debcbf9e095f034f1166019c39012782&units=imperial";
const OPEN_WEATHER_MAP_URL = api_2;

//debcbf9e095f034f1166019c39012782 // from https://home.openweathermap.org/api_keys

module.exports = {
  getTemp: function (location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl).then(function(res){
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res){
      throw new Error(res.data.message);
    });
  }
}
