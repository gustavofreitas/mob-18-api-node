const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`App listening on port ${port} OMG \\,,/`);
});

app.get('/', function(request,response) {
    response.send(200);
    console.log('To ouvindo bebe!!');
});

app.get('/name/:name', (request,response, next) => {
    response.send(200);
    console.log(`Eu estou ouvindo ${request.params.name}!!`);
});