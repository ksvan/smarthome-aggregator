/*
Main backend for smarthome aggregator, providing the simple REST services for a react frontend
*/

// Using express as webserver, initial setup
let express = require('express');
let app = express();
let helmet = require('helmet');
app.use(helmet());
const port = process.env.SAPORT || 3000;

//root response
app.get('/', (req, res) => {
    res.send({futurehome: '/future', komfovent: '/komfovent', tibber: '/tibber', netatmo: '/netatmo' });
})

// Launch the server
app.listen(port, () => console.log('Listening on port ' + port));