//タイピングゲームに必要なfunction

//入力文字と出題文字が同じかを確かめるメソッド
function whatKey(){
  //charNumber文字目の文字列のUnicode値を得る
  this.a_char=text.charAt(charNumber);
  this.a_char
  console.log("出題文字=> " + this.a_char);
  console.log("入力された文字=> " + String.fromCharCode(event.keyCode));

  //正しい入力か？
  if(String.fromCharCode(event.keyCode) == this.a_char){
    console.log("正解です");
    repaint();
  }else {
    console.log("違います");
  }
}


