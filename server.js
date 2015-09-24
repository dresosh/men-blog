var express       = require('express'),
    app           = express(),
    mongoose      = require('mongoose'),
    body-parser   = require('body-parser'),
    apiRouter     = require('./app/config/routes'),
    DB            = 'mongod://localhost:27017/men-blog', // connects our local db
    port          = 3000;


// body-parser config
app.use(body-parser.urlencoded({extended:true}));
app.use(body-parser.json());

// connect to out DB
mongoose.connect( DB );

// Routes Config
app.use('/api', apiRouter);


// server
app.listen(port);
console.log('Magic is happening on port ' + port);
