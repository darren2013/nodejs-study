/**
 * Created by darrendu on 16/2/28.
 */

var http = require('http');
var fs = require('fs');

function server(request,response){

    var url = request.url;

    console.log(request.method+":"+url);
    //console.log(request.headers);


    response.statusCode = 200;


    if(url == '/'){
        response.setHeader('Content-Type','text/html');
        fs.readFile('index.html',function(err,data){

            response.write(data);
            response.end();
        });
    }else  if (url == '/style.css'){
        response.setHeader('Content-Type','text/css');
        fs.readFile('style.css',function(err,data){
            response.write(data);
            response.end();
        });
    }else if(url == '/index.js'){
        response.setHeader('Content-Type','application/x-javascript');
        fs.readFile('index.js',function(err,data){
            response.write(data);
            response.end();
        });
    }





}

var server = http.createServer(server);


server.listen(8080,'localhost');