const http = require('http');
const fs = require('fs');

//серваки готові. Цей слухає порт 8000. Це бекенд, що повертає джсон
http.createServer((req, res) => {
    const readStream = fs.createReadStream('./static/users.json');
    res.writeHead(200, {'Content-type': 'application/json'});
    readStream.pipe(res);
}).listen(8000);


//це другий сервак з фронтом, де буде хоститись клієнт. хз  чи я правильно це зробила, але 
//я зрозуміла, що фронт і бек має бути на різних серваках
http.createServer((req, res) => {
    const readStream = fs.createReadStream('../index.html');
    res.writeHead(200, {'Content-type': 'text/html'});
    readStream.pipe(res);
}).listen(3000);