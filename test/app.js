//requireして各種サーバを立てる
var app = require('express').createServer()
, io = require('socket.io').listen(app)
, mongo = require('mongodb')
, Server = mongo.Server
, Db = mongo.Db;

//サーバーオブジェクトを新しく作る   
var server = new Server('sodadb-RiceAmerican-data-0.dotcloud.com', 30198, {auto_reconnect: true});
var db = new Db('mydb', server);

db.open(function(err,db){
  if(!err) {
    db.authenticate('dbuser', 'dbpassword', function(err, result){
      db.collection('things', function(err, collection){
        collection.update({"_id":4},{$set:{"value":4}});
        collection.find().toArray(function(err, items) {
          //DBの中身を表示
          console.log(items);
        });
      });
    });
  }
});

//httpサーバを立てる
app.listen(8080);    
//ルートディレクトリにアクセスがあったら、index.htmlへ
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

//connectionイベント
io.sockets.on('connection', function (socket) {
  //自分で作ったイベントをデータ送信
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

