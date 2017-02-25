var express = require('express');
var app = express();


var router = express.Router();//定义路由
//中间件作用是在请求被路由匹配之前，先进行一些处理，内部的next()，它代表下一个中间件
router.use(function(req,res,next){
    console.log('There is a requesting.');
    next();
});
var time = new Date();
router.use(function(req,res,next){
    console.log(time);
    next();
})
var bodyParser = require('body-parser');//加载模块处理POST、PUT、DELETE等请求
app.use(bodyParser.urlencoded({extended:true}));
router.get('/',function(req,res){
  var name = req.query.name;
    res.send('<h1>hello </h1>'+name);
});//新建了一个路由对象，该对象指定访问根路由（/）时，返回Hello World

router.get('/:name',function(req,res){
    res.send('<h1>hello pchoos </h1>'+req.params.name);
}); //get请求处理

router.post('/',function(req,res){
    var name = req.body.name;
    res.json({message: 'OK', yourname:name});
})//post请求处理

app.use('/home',router);//将该路由加载在/home路径

var port = process.env.PORT || 8081; //如设置全局则获取或指定
app.listen(port);//监听，传入回调函数
console.log('run on'+ port);
