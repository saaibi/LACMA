const express = require("express"),
    morgan = require("morgan"),
    path = require("path"),
    cors = require("cors"),
    app = express();

const { mongoose } = require('./db')
const dev = process.env.NODE_ENV !== 'production';

// Setings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'))
    .use(express.json())
    .use(cors())
    .use(cors({ origin: ['http://localhost:4000', 'https://laboratorio-lacma.herokuapp.com'] }));

// Routes
app.use('/api/clients', require('./routes/clients.routes'));
app.use('/api/credits', require('./routes/credit.routes'));
app.use('/api/samples', require('./routes/samples.routes'));
app.use('/api/users', require('./routes/user.routes'));

//Static 
if (!dev) {
    // "postinstall": "npm run prod"
    app.use(express.static(path.resolve('app/dist')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve('app/dist', 'index.html'))
    });
}

// Start Server
app.listen(app.get('port'), () => {
    console.log(`Server running http://localhost:${app.get('port')}`);
});
