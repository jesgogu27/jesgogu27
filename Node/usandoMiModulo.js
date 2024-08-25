let http =  require('http');
let dt = require('./MiPrimerModulo');


http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.fechaYhora());
    res.write("sumando " + dt.suma(5, 6));
    res.write(req.url);
    res.end();
}).listen(8081);