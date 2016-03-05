/**
 * Created by darrendu on 16/3/1.
 */
var querystring = require("querystring");

function start(response,postdata){
    console.log("request handler 'start' is called");

    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response,postdata){
    console.log("request handler 'upload' is called");
    console.log("show postdata:"+postdata);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("you have sent:"+querystring.parse(postdata).text);
    response.end();
}

function clock(response,postdata){
    console.log("clock request");
    var counter = 1;
    var intervalObj = setInterval(function(){
        //response.writeHead(200,{"Content-Type": "text/html"})

        response.write(new Date().toString()+"<br>");

        if(counter++ == 5){
            clearInterval(intervalObj);
            response.end();
        }

    },1000);
}

exports.start = start;
exports.upload = upload;
exports.clock = clock;