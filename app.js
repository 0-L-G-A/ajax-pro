const http = require('http');
const fs = require('fs');

//серваки готові. Цей слухає порт 8000. Це бекенд, що повертає джсон
http.createServer((req, res) => {
    const readStream = fs.createReadStream('./static/users.json');
    res.writeHead(200, {'Content-type': 'application/json'});
    readStream.pipe(res);
    // res.end();
}).listen(8000);

