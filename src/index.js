const http = require('http');

function requestHandler(req, res) {
    res.write('ok');
    res.end();
}

const server = http.createServer(requestHandler);
const port = process.env.PORT || 8888;
server.listen(port, () => console.log(`listening on port ${port}`));
