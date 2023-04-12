const http = require('http') 
const fs = require('fs') 

http.createServer( (req, res) => {
    console.log(req.url)
    if (req.url == "/" || req.url == "/index.html"){
        fs.readFile('./index.html', function(err, data){
            res.writeHead(200, {'Content-Type' : 'text/html'}) ; 
            res.write(data)
            return res.end() ; 
        })
    }
    else if (req.url == "/about.html"){
        fs.readFile('./about.html', function(err, data){
            res.writeHead(200, {'Content-Type' : 'text/html'}) ; 
            res.write(data)
            return res.end() ; 
        })
    }
    else if (req.url == "/contact-me.html"){
        fs.readFile('./contact-me.html', function(err, data){
            res.writeHead(200, {'Content-Type' : 'text/html'}) ; 
            res.write(data)
            return res.end() ; 
        })
    }
    else {
        fs.readFile('./404.html', function(err, data){
            res.writeHead(200, {'Content-Type' : 'text/html'}) ; 
            res.write(data)
            return res.end() ; 
        })
    }
}).listen(3000)
