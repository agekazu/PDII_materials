
function PlayScene(game,context,name){
  //この関数はSceneを元にして出来ている(継承)
  this.__proto__ = new Scene(game,context,name);

  this.onkeydown= function(){
    //typingGame.jsのwhatKey()へ
    whatKey();
  }
  //初期化処理
  this.init = function(){
    //問題文
    var text ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    var questionCharacter= new PlayCharacter(this,"QuestionCharacter",text,"30pt Arial",100,100,100,100);

    this.addParts(questionCharacter);
  }
} 

function PlayCharacter(scene,name,text,font,x,y,width,height){
  this.__proto__ = new Parts(scene,name,x,y,width,height);
  this.font = font;
  this.text = text;
  //loop関数を上書き
  this.loop = function(){
    //font変更;
    this.context.font = this.font;
    this.context.fillText(text,this.x,this.y);            
  }
}



