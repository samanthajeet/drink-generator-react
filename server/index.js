require('dotenv').config();
const express = require('express');
const massive = require('massive');

const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

massive(CONNECTION_STRING).then( db => {
    app.set('db', db);
    app.listen( SERVER_PORT, () => console.log(`bingpot on ${SERVER_PORT}`))
})


//endpoints
const ctrl = require('./controllers/cabinetController')
app.get(`/api/cabinet`, ctrl.getCabinet)
app.post(`/api/addToCabinet`, ctrl.addToCabinet)
app.delete(`/api/deleteItem/:id`, ctrl.deleteFromCabinet)