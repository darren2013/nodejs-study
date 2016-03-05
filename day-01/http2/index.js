var server = require("./server");
var router = require("./router");
var handlers = require("./requestHandlers");

var handle = {};
handle["/"] = handlers.start;
handle["/start"] = handlers.start;
handle["/upload"] = handlers.upload;
handle["/clock"] = handlers.clock;

server.start(router.route,handle);