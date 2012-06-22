//requireして各種サーバを立てる
var app = require('express').createServer()
, io = require('socket.io').listen(app)
, mongo = require('mongodb')
, Server = mongo.Server
, Db = mongo.Db
, __key__=0;

//DBサーバーオブジェクトを新しく作る   
var server = new Server('sodadb-RiceAmerican-data-0.dotcloud.com', 30198, {auto_reconnect: true});
var db = new Db('mydb', server);

db.open(function(err,db){
  if(!err) {
    db.authenticate('dbuser', 'dbpassword', function(err, result){
      db.collection('things', function(err, collection){
        collection.update({"_id":4},{$set:{"value":4}});
        collection.find().toArray(function(err, items) {
          //DBの中身を表示
          //          console.log(items);
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
io.sockets.on('connection', function (socket){
  console.log(socket.id+'が接続しました');
  //Clientで発火したkey sendイベントへのコールバック
  socket.on('key send',function(key){
    socket.emit('key push',key)
    socket.broadcast.emit('key push', key);
  console.log("key=>" + key + "to=>" + socket.id);
  });
  socket.on('msg send' , function(msg){
    socket.emit('msg push' ,msg);
    socket.broadcast.emit('msg push' , msg);
  });
  //disconnectイベント
  socket.on('disconnect', function(){
    console.log(socket.id + 'が切断しました。');
    console.log(key);
  });
});



var user = io
.of('/'+key)
.on('connection',function(socket){
  console.log(key+'connected');
  socket.on('msg send',function(msg){
    user.emit('msg push',msg+'from'+key);
  });
}); 
