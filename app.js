var http = require('http'),
  router = require('./router'),
    url = require('url');


var server = http.createServer(function (req, res) {
  if (req.url === '/favicon.icon') {
    res.writeHead(200, {'Content-Type' : 'image/x-icon'});
    res.end()
    return
  }
  var path = url.parse(req.url).pathname;
  var currentRoute = router.match(path);
    if (currentRoute) {
      currentRoute.fn(req, res, currentRoute)
    }
    else {
      res.writeHead(404, {'Content-Type': 'text/html'})
      res.end('404')
    }
})


server.listen(5020, function(err) {
  if (err) console.log ('Oh no, an error occurred, check it out!')
  console.log("Server is up at port 5020- Yay!")
})
