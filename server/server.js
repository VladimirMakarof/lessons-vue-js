const express = require('express');

const app = express();
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header("Access-Control-Allow-Methods", "*")
    next()
})
app.use(express.static('public'));
app.use(express.json());

app.post('/yacht', (request, response) => {
    console.log(request.body)
    let answer = {};
    if (request.body.name && request.body.email) {
        answer.message = "success";
        answer.num = Math.floor(Math.random() * 2000);
        answer.name = request.body.name;
        answer.connecttion = request.body.contacts[0];
    } else {
        answer.message = "error";
        answer.info = "Недостаточно данных для связи"
    }
    response.send(JSON.stringify(answer));
})
app.listen(8080); // 8999
console.log('Сервер запущен');