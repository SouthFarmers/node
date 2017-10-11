
exports.findById = function(req, res){
  var id = req.params.id;
  
	let apiKey = 'caea1a96d299c3da9ed34032e6cc5510';
	let url = `http://api.openweathermap.org/data/2.5/weather?q=${id}&units=imperial&appid=${apiKey}`
	
	let request = require('request');



request(url, function (err, response, body) {
	
  if(err){
    console.log('error:', err);
  } else {
let weather = JSON.parse(body);
    res.send([{
    	
    	weather
  	}]);
  }
});
  
  
  
  
  
};
