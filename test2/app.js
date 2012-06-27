//requireして各種サーバを立てる
var app = require('express').createServer()
, io = require('socket.io').listen(app)
, mongo = require('mongodb')
, Server = mongo.Server
, Db = mongo.Db


//生成された部屋が格納される連想配列
var roomList = {}
, roomNum;

//connectionイベント
io.sockets.on('connection', function (socket){
  console.log("server :" + socket.id + 'が接続しました');
  //Clientで発火したkey sendイベントへのコールバック
  socket.on('key request',function(key){
    var date = new Date();
    var key = String(date.getTime());
    socket.emit('key push',key);
    //socket.broadcast.emit('key push', key);
    console.log("server :送ったkey=> " + key + " 受け取ったユーザのID=> " + socket.id);
    roomList.roomNum = generateRoom(key);
    roomNum++;
  });
  //disconnectイベント
  socket.on('disconnect', function(){
    console.log("server :" + socket.id + 'が切断しました。');
  });
});


function generateRoom(key){
  io
  .of("/" + key)
  .on("connection",function(socket){
    console.log("server :key=> " + key + " で部屋を作成しました");
  })
  .on('msg send',function(msg){
    user.emit('msg push',msg+'from'+key);
  });

  return io;
}


/*var user = io
  .of('/'+key)
  .on('connection',function(socket){
  console.log(__key__+'connected');
  }) 
  .on('msg send',function(msg){
  user.emit('msg push',msg+'from'+__key__);
  });
  */

//httpサーバを立てる
app.listen(8080);    
//ルートディレクトリにアクセスがあったら、index.htmlへ
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

/**************
  以下、DBコード
 ***************/
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
