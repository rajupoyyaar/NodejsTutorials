const http = require('http');

const server = http.createServer((req,res)=>{
//   res.write('Here is the example of http module');
//   res.end();
     if(req.url === '/'){
        res.end('here is the example of http module');
     }
     if(req.url === '/about'){
        res.end('here is http About module');
     }
     res.end(`<h1>No Page Found!</h1>`)
})

server.listen(3000);