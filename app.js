const http= require('http');
const date= require('./dateModule');
http.createServer(
    function(req, res){
        res.writeHead(
            200,
            {"content-Type":"text/html"}
        );
        res.write("The date and time is => "+ date.myDate());
        res.end(req.url);
    }
).listen(8000);