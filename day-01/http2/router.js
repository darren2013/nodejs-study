/**
 * Created by darrendu on 16/3/1.
 */

function route(pathname,handle,response,postdata){

    console.log("about to route a request for :"+pathname);

    if(typeof handle[pathname] == 'function'){
        handle[pathname](response,postdata);
    }else{
        console.log("No request for :"+pathname);
    }
}

exports.route = route;
