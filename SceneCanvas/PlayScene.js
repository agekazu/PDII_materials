function PlayScene(game,context,name){
  //この関数はSceneを元にして出来ている(継承)
  this.__proto__ = new Scene(game,context,name);
  //初期化処理
  this.init = function(){
    //問題文
    var questionCharacter= new PlayCharacter(this,"QuestionCharacter",getQuestion(),"30pt Arial",100,100,100,100);
    var questionCharacter= new PlayCharacter(this,"QuestionCharacter",getQuestion(),"30pt Arial",100,100,100,100);

    onkeydown= function(){
      //textの取得
      var text = getQuestion();
      whatKey(text);
    }
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

//問題文を返すメソッド
function getQuestion(){
  var text ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  return text;
}

//入力文字と出題文字が同じかを確かめるメソッド
function whatKey(text){
  //現在打つべき文字の先頭からの文字数
  var charNumber = 0;
  this.text = text;
  
  //charNumber文字目の文字列のUnicode値をa_charへ
  this.a_char = text.charAt(charNumber);
  console.log("出題文字=> " + this.a_char);
  console.log("入力された文字=> " + String.fromCharCode(event.keyCode));

  //入力が正しいか？
  if(String.fromCharCode(event.keyCode) == this.a_char){
    console.log("正解です");
    charNumber++;
    repaint();
  }else {
    console.log("違います");
  }
}


function repaint() {
  
}
