const express = require('express');
const morgan = require('morgan');
const cors  = require('cors');
const app = express();

//Enciende la base de datos
const { moongose } = require('./database')

//Setting
app.set('port', 3000 || process.env.PORT);

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}))

//Routes
app.use(require('./routes/administrador.routes'))
app.use(require('./routes/pregunta.routes'))
app.use(require('./routes/sede.routes'))

app.listen(app.get('port'), () => {
    console.log(`Servidor conectado en el puerto ${app.get('port')}`);
})