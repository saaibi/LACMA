const mongoose = require('mongoose'); 

const URI1 = 'mongodb://saaibi:Asd123456@ds211143.mlab.com:11143/testlpa';
const URI2 = 'mongodb://heroku_user:Asd123456@ds157843.mlab.com:57843/heroku_g2rxd6vx';
const URI = 'mongodb://localhost/testlpa';

mongoose.connect(URI1)
	.then(db => console.log(`DB is connected`))
	.catch(err => console.error(err));

module.exports = mongoose; 
