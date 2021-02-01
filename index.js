var fs = require('fs');
var http = require('http');

http.createServer(function (request, response) {

    // baca file
    fs.readFile('index.html', (err, data) => {
        if (err) ;
        
        // kirim respon
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        console.log(data)
        response.end();
    });

}).listen(process.env.PORT);

console.log("server running on http://localhost:6003");