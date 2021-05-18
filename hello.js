var http= require('http');
http.createServer(function(req,res){
res.write("hello message display");
res.end();

}).listen(8080);