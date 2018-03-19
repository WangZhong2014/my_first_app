const mongoose = require('mongoose');
const config = require('../config');

mongoose.connect(config.mongodbUrl);

const db = mongoose.connection;
db.on('error', console.error.bind(console,'连接错误：'));
db.once('open',(callback)=> {
 console.log('MongoDB连接成功！')
}); 