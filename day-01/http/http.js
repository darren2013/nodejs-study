/**
 * Created by darrendu on 16/2/28.
 */

var http = require('http');

function server(request,response){
    console.log(request.method);
    console.log(request.url);
    console.log(request.headers);


    response.statusCode = 404;

    response.write(new Date().toString());
    response.end();

}

var server = http.createServer(server);


server.listen(8080,'localhost');