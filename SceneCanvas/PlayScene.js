//現在出題されている文字の先頭からの文字数
__charNumber__ = 0;
//入力済み文字列が格納される
__input__ = new String();
__completedCharacter__ = null;

function PlayScene(game,context,name){
  //この関数はSceneを元にして出来ている(継承)
  this.__proto__ = new Scene(game,context,name);
  //初期化処理
  this.init = function(){
    var questionCharacter= new PlayCharacter(this,"QuestionCharacter",getQuestion(),"30pt Arial","#000000",0,100,100,100,100);
    __completedCharacter__ = new PlayCharacter(this,"CompletedCharacter",__input__,"30pt Arial","#7d7d7d",1,100,100,100,100);

    onkeydown= function(){
      //textの取得
      var text = getQuestion();
      whatKey(text);
    }
    console.log(__completedCharacter__);
    this.addParts(questionCharacter);
    this.addParts(__completedCharacter__);
  }
} 

function PlayCharacter(scene,name,text,font,color,layer,x,y,width,height){
  this.__proto__ = new Parts(scene,name,x,y,width,height);
  this.x = x;
  this.y = y;
  this.text = text;
  this.font = font;
  this.color = color;

  //loop関数を上書き
  this.loop = function(){
    this.context.fillStyle = this.color;
    //font変更;
    this.context.font = this.font;
    this.context.fillText(this.text,this.x,this.y);            
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
  this.text = text;

  //charNumber文字目の文字列のUnicode値をa_charへ
  var a_char = this.text.charAt(__charNumber__);
  console.log("出題文字=> " + a_char);
  console.log("入力された文字=> " + String.fromCharCode(event.keyCode));

  //入力が正しいか？
  if(String.fromCharCode(event.keyCode) == a_char){
    console.log("正解です");
    __charNumber__++;
    repaint(a_char);
  }else {
    console.log("違います");
  }
}

function repaint(_a_char) {
  this.a_char = _a_char;
  __input__ += this.a_char;
  //入力済み文字列を変更
  __completedCharacter__.text = __input__;
}
