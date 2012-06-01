function ResultScene(game,context,name){
  //この関数はSceneを元にして出来ている(Sceneの継承)
  this.__proto__ = new Scene(game,context,name);

  this.init = function(){
    //startButtonでボタンを描画
    var buttonwidth = 200;
    var buttonheight = 100;

    var resultButton = new ResultButton(this,"resultButton","toStart.gif",(game.canvas.width/2)-buttonwidth-30,(game.canvas.height)/2 + buttonheight/2,buttonwidth,buttonheight);

    var resultCharacter = new ResultCharacter(this,"resultTilteText","結果発表","30pt Arial",game.canvas.width/2-100,50,100,20);

    this.addParts(resultButton);
    this.addParts(resultCharacter);
  }
} 


//GUI部品(gif)の描画
function ResultButton(scene,name,imgName,x,y,width,height){
  this.__proto__ = new Parts(scene,name,x,y,width,height);
  var img = new Image();
  this.loop = function(){
    img.src = "./GUI/" + imgName;
    //GUI部品の画像の描画
    this.context.drawImage(img,this.x,this.y);
  }
  //clickされた座標を取得、ボタンの範囲内かを調べる
  this.onclick = function(e){
    if(e.clientX >= this.x && e.clientX <= this.x + this.width
        && e.clientY >= this.y && e.clientY <= this.y+this.height){
          this.game.changeScene("title");
        } 
  }
}


/*
//ボタンの描画
function ResultButton(scene,name,x,y,width,height){
  //Partsを継承
  this.__proto__ = new Parts(scene,name,x,y,width,height);
  //loop関数を上書き
  this.loop = function(){
    //四角形の描画
    this.context.strokeRect(this.x,this.y,this.width,this.height);
  }

  //clickされた座標を取得、ボタンの範囲内かを調べる
  this.onclick = function(e){
    if(e.clientX >= this.x && e.clientX <= this.x + this.width
        && e.clientY >= this.y && e.clientY <= this.y+this.height){
          //this.game.setScene(this.game.gameScenes['playScene']);
          this.game.changeScene("titleScene");
        } 
  }
}
*/
//文字列の描画
function ResultCharacter(scene,name,text,font,x,y,width,height){
  this.__proto__ = new Parts(scene,name,x,y,width,height);
  this.font = font;
  console.log(this.context)
    //loop関数を上書き
    this.loop = function(){
      //font変更
      this.context.font = this.font;
      this.context.fillText(text,this.x,this.y);            
    }
}

