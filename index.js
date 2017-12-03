let request = require('request');

let apiKey = 'd48a163dc732d477a29535b5dd85827c';
let city = 'milwaukee';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});