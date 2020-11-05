const moongose = require('mongoose');

const URI = 'mongodb://localhost/backend-cuestionario';

moongose.connect(URI, { useNewUrlParser: true}).then(() => console.log("db is connected"))
    .catch((err) => console.log(`Hubo un error ${err}`))


module.exports = moongose;