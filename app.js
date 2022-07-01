var http = require('http');
var url =
    "https://api.openweathermap.org/data/2.5/weather?q=New+Delhi,IN&appid=d84cf3bea2d2e20dabe5f1254dd966fb";

//   "https://api.openweathermap.org/data/2.5/weather?lat=51.51&lon=-0.13&appid=d84cf3bea2d2e20dabe5f1254dd966fb";
    
 
  
var server = http.createServer(function (req, res) {
    var req = require('request');
    req(url, function (err, resp, body) {
        if (resp.statusCode == 200) {
            //    console.log(body);
            var data = JSON.parse(body);

            res.write("<html><body><div id='container'>");
            res.write("<h1>" + 'City Name - : ' + data['name'] + '<br>' + "</h1>");
            res.write("<h2>" + 'Temperature - : ' + data.main['temp'] + '<br>' + "</h2>");
            res.write("<h2>" + 'Sunset Time - : ' + new Date(data.sys['sunset'] * 1000) + "</h2>");
            res.write("</div></body></html>");

            // res.write("Hello");
            res.end();
        }
    });

    
}).listen(8080);