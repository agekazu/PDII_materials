//現在出題されている文字の先頭からの文字数
__charCounter__ = 0;
//入力済み文字列が格納される
__input__ = new String();
__completedCharacter__ = null;

function PlayScene(game,context,name){
  //この関数はSceneを元にして出来ている(継承)
  this.__proto__ = new Scene(game,context,name);
  //初期化処理
  this.init = function(){

    var questionCharacter = new PlayCharacter(this,"QuestionCharacter",getQuestion(),"30pt Arial","#7d7d7d",0,100,100,100,100);
    //    __completedCharacter__ = new PlayCharacter(this,"CompletedCharacter",__input__,"30pt Arial","#000000",1,100,100,100,100);

    this.onkeydown= function(e){
      //textの取得
      var text = getQuestion();
      whatKey(text,this.game);
    }
    this.addParts(questionCharacter);
    //  this.addParts(__completedCharacter__);
  }

} 


//問題文を返すメソッド
function getQuestion(){
  var text = "aaa\nbbbbb\ncccccc"
    var textList = text.split("\n");
  console.log(textList);
  return textList;
}

function PlayCharacter(scene,name,textList,font,color,layer,x,y,width,height){
  this.__proto__ = new Parts(scene,name,x,y,width,height);
  this.x = x;
  this.y = y;
  this.tmpY = y;
  this.font = font;
  this.color = color;
  this.textList = textList;
  //loop関数を上書き
  this.loop = function(){
    this.tmpY=this.y;
    //配列textListをy座標+35しながら一つずつの要素を描画
    this.textList.forEach(function(text){
      this.context.fillStyle = this.color;
      this.context.font = this.font;
      this.context.fillText(text,this.x,this.tmpY);            
      this.tmpY += 35;
    },this);
  }
}
//入力文字と出題文字が同じかを確かめるメソッド
function whatKey(text,game){
  //現在打つべき文字の先頭からの文字数
  this.text = text;

  //charNumber文字目の文字列のUnicode値をa_charへ
  var a_char = this.text.charAt(__charCounter__);
  console.log("出題文字=> " + a_char);
  console.log("入力された文字=> " + String.fromCharCode(event.keyCode));

  //入力が正しいか？
  if(String.fromCharCode(event.keyCode) == a_char){
    console.log("正解です");
    __charCounter__++;
    repaint(a_char,game);
  }else {
    console.log("違います");
  }
}

function repaint(_a_char,game) {
  //問題文と入力済み文字列の長さが同じか？
  if (__completedCharacter__.text.length+1 != getQuestion().length){
    this.a_char = _a_char;
    __input__ += this.a_char;
    //入力済み文字列を変更
    __completedCharacter__.text = __input__;
  }else { 
    console.log("result画面へ遷移");
    game.changeScene("resultScene");
  }
}

