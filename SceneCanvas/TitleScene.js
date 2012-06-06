function TitleScene(game,context,name){
  //この関数はSceneを元にして出来ている(Sceneの継承)
  this.__proto__ = new Scene(game,context,name);

  this.init = function(){
    //ボタン(画像)の大きさ
    var buttonwidth = 200;
    var buttonheight = 75;

    var startButton = new StartButton(this,"startButton",1,"practice.gif",(game.canvas.width/2)-buttonwidth-30,(game.canvas.height)/2 + buttonheight/2,buttonwidth,buttonheight);

    var startTitleCharacter = new StartCharacter(this,"startText","ソー打","30pt Arial",1,(game.canvas.width/2)-(100/2),50,100,20);

    this.addParts(startButton);
    this.addParts(startTitleCharacter);
  }
} 

//GUI部品(gif)の描画
function StartButton(scene,name,layer,imgName,x,y,width,height){
  this.__proto__ = new Parts(scene,name,layer,x,y,width,height);
  var img = new Image();
  this.loop = function(){
    img.src = "./GUI/" + imgName;
    //GUI部品の画像の描画
    this.context.drawImage(img,this.x,this.y);
  }
 //clickされた座標を取得、ボタンの範囲内かを調べる
  this.onclick = function(e){
    var mouseX = this.game.mouseX;
    var mouseY = this.game.mouseY;
    if(mouseX >= this.x && mouseX <= this.x + this.width
        && mouseY >= this.y && mouseY <= this.y+this.height){
          console.log("Play画面へ遷移");
          this.game.changeScene("playScene");
        } 
  }
}


  //ボタンの描画
//  function StartButton(scene,name,x,y,width,height){
//    //Partsを継承
//    this.__proto__ = new Parts(scene,name,x,y,width,height);
//    //loop関数を上書き
//    this.loop = function(){
//      //四角形の描画
//      this.context.strokeRect(this.x,this.y,this.width,this.height);
//    }
//
//    this.onclick = function(e){
//      if(e.clientX >= this.x && e.clientX <= this.x + this.width
//          && e.clientY >= this.y && e.clientY <= this.y+this.height){
//            //this.game.setScene(this.game.gameScenes['playScene']);
//            this.game.changeScene("playScene");
//          } 
//    }
//  }

  //文字列の描画
  function StartCharacter(scene,name,text,font,layer,x,y,width,height){
    this.__proto__ = new Parts(scene,name,layer,x,y,width,height);
    this.font = font;
    //loop関数を上書き
    this.loop = function(){
         this.context.font = this.font;
      //font変更
      this.context.fillText(text,this.x,this.y);            
    }
  }

