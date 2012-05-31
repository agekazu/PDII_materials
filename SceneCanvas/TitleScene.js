function TitleScene(game,context,name){
  //この関数はSceneを元にして出来ている(Sceneの継承)
  this.__proto__ = new Scene(game,context,name);

  this.init = function(){
    //startButtonでボタンを描画
    var buttonwidth = 200;
    var buttonheight = 100;

    var startButton = new StartButton(this,"startButton",(game.canvas.width/2)-buttonwidth-30,(game.canvas.height)/2+10,buttonwidth,buttonheight);

    var buttonCharacter = new StartCharacter(this,"tartText","Start!","19px",(game.canvas.width/2)-buttonwidth,(game.canvas.height)/2+40,100,20);

    var titleCharacter = new StartCharacter(this,"startText","ソー打!!!","intalic bold 18px 'Monotype Corsiva'",(game.canvas.width/2)-(100/2),50,100,20);

    this.addParts(startButton);
    this.addParts(buttonCharacter);
    this.addParts(titleCharacter);
  }
} 

//ボタンの描画
function StartButton(scene,name,x,y,width,height){
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
          this.game.setScene(this.game.gameScenes['playScene']);
        } 
  }
}

//文字列の描画
function StartCharacter(scene,name,text,font,x,y,width,height){
  this.__proto__ = new Parts(scene,name,x,y,width,height);
  //loop関数を上書き
  this.context.font = font;
  console.log("font=>",font);
  console.log(this.context);
  console.log(this.context.font);
  //loop関数を上書き
  this.loop = function(){
    //文字の描画
    this.context.fillText(text,this.x,this.y);            
  }
}

