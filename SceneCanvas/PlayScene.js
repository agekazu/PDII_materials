function PlayScene(game,context,name){
  //この関数はSceneを元にして出来ている(継承)
  this.__proto__ = new Scene(game,context,name);
  //初期化処理
  this.init = function(){
    var playButton = new PlayButton(this,"startButton",100,100,100,100);
    this.addParts(playButton);
  }
} 

function PlayButton(scene,name,x,y,width,height){
  this.__proto__ = new Parts(scene,name,x,y,width,height);
  this.loop = function(){
    //赤で描画
    this.context.strokeStyle = 'rgb(255,0,0)';
    this.context.strokeRect(this.x,this.y,this.width,this.height);
  }
  this.onclick = function(e){
    if(e.clientX >= this.x && e.clientX <= this.x + this.width
        && e.clientY >= this.y && e.clientY <= this.y+this.height){
          console.log(e);
        } 
  }
}


