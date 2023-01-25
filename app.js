const express = require("express")
const body_parser = require("body-parser")
const app = express();

app.use(body_parser.urlencoded({ extended: false}))

app.get('/', (request, response) => {
    const checks = {
        name: 'ewfaf',
        age: '12',
        surname: 'fwef'
    }
    response.json((checks))
})

app.listen(8000, () => {
    console.log("Сервер запущен на порту 8000.")
})