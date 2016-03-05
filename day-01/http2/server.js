var http = require("http");
var url = require("url");


function start(route,handle){

    function  onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        console.log("request received for url:"+pathname);

        var postdata = "";

        request.setEncoding("utf8");

        request.addListener("data",function(postDataChunk){
            postdata += postDataChunk;
            console.log("received datachunk '"+postDataChunk+"'");
        });

        request.addListener("end",function(){
            route(pathname,handle,response,postdata);
        });



    }

    http.createServer(onRequest).listen(8888);

    console.log("server started......");
}


exports.start = start;


