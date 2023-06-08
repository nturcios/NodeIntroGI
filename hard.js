let express = require('express');
let app = express();
let data = require('./public/employees.json')

app.get('/', (req, res) => {
    res.send("This is the home page. Welcome")
}) 

app.get('/employees', (req, res) => {
    if(!data) {
        res.status(404).send(`Could not find the employee at the moment, please try later.`)
    }
    res.send(data)
})

app.get('/employees/:id', (req, res) => {
    const sData = data.employees.find(function (employees) {
        console.log(employees.id)
        return parseInt(req.params.id) === employees.id
    })
    if (!sData) {
      res.status(404).send(`Could not find the employees id at the moment, please try again later.`);
    }
        res.send(sData);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});