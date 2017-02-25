var mongoose = require('mongoose');
// var uri = 'mongodb://localhost/test';
// var a = mongoose.connect(uri); //连接mongodb数据库

var db = mongoose.createConnection('localhost','test'); //创建一个数据库连接
//定义一个Schema
// db.on('connected',function(){
//   console.log('数据库链接成功');
// });
var BookSchema = new mongoose.Schema({
  name:String,
  author:String
});
//将该Schema发布为Model的Book对象
var BookModel = db.model('Book',BookSchema);
var user = {name:'yerf',author:'pchoos'};
BookModel.create(user);
console.log('成功！');
