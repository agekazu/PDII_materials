function ResultScene(game,context,name){
  //この関数はSceneを元にして出来ている(Sceneの継承)
  this.__proto__ = new Scene(game,context,name);

  this.init = function(){
    //startButtonでボタンを描画
    var buttonwidth = 200;
    var buttonheight = 75;

    //ボタンの描画
    var resultButton = new ResultButton(this,"resultButton",1,"toStart.gif",(game.canvas.width/2)-buttonwidth-30,(game.canvas.height)/2 + buttonheight/2,buttonwidth,buttonheight);

    //タイトルの描画
    var resultCharacter = new ResultCharacter(this,"resultTilteText","結果発表","30pt Arial",1,game.canvas.width/2-100,50,100,20);

    this.addParts(resultButton);
    this.addParts(resultCharacter);
  }
} 


//GUI部品(gif)の描画
function ResultButton(scene,name,layer,imgName,x,y,width,height){
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
    console.log(mouseX);
    if(mouseX >= this.x && mouseX <= this.x + this.width
        && mouseY >= this.y && mouseY <= this.y+this.height){
          console.log("Title画面へ遷移");
          this.game.changeScene("titleScene");
        } 
  }
}
 //文字列の描画
  function ResultCharacter(scene,name,text,font,layer,x,y,width,height){
    this.__proto__ = new Parts(scene,name,layer,x,y,width,height);
    this.font = font;
    //loop関数を上書き
    this.loop = function(){
         this.context.font = this.font;
      //font変更
      this.context.fillText(text,this.x,this.y);            
    }
  }

