var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/subscribers', {useNewUrlParser: true});

var conn = mongoose.connection;

conn.on('connected', function() {
    console.log('database is connected successfully');
});

conn.on('error', console.error.bind(console, 'connection error:'));

module.exports = conn;