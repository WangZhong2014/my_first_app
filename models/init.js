const mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.99.100:32790/my_first_app');

const db = mongoose.connection;
db.on('error', console.error.bind(console,'连接错误：'));
db.once('open',(callback)=> {
 console.log('MongoDB连接成功！')
});