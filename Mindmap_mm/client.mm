<map version="0.9.0">
<!-- To view this file, download free mind mapping software FreeMind from http://freemind.sourceforge.net -->
<node CREATED="1340781175646" ID="ID_77221341" MODIFIED="1340783918172" TEXT="&#x30af;&#x30e9;&#x30a4;&#x30a2;&#x30f3;&#x30c8;&#x5074;">
<node CREATED="1340783922590" ID="ID_900942445" MODIFIED="1340787345687" POSITION="right">
<richcontent TYPE="NODE"><html>
  <head>
    
  </head>
  <body>
    <p>
      index.html
    </p>
    <p>
      &#12288;canvas&#12398;&#20316;&#25104;
    </p>
  </body>
</html></richcontent>
<node CREATED="1340783415169" ID="ID_829816537" MODIFIED="1340783508104">
<richcontent TYPE="NODE"><html>
  <head>
    
  </head>
  <body>
    <p>
      onload
    </p>
    <p>
      &#12288;&#30011;&#20687;&#12398;&#35501;&#12415;&#36796;&#12415;
    </p>
    <p>
      &#12288;init
    </p>
  </body>
</html></richcontent>
</node>
<node CREATED="1340783510222" ID="ID_1149411173" MODIFIED="1340787165668">
<richcontent TYPE="NODE"><html>
  <head>
    
  </head>
  <body>
    <p>
      init
    </p>
    <p>
      &#12288;socket&#12458;&#12502;&#12472;&#12455;&#12463;&#12488;&#12398;&#29983;&#25104;
    </p>
    <p>
      &#12288;game&#12458;&#12502;&#12472;&#12455;&#12463;&#12488;&#12398;&#20316;&#25104;
    </p>
    <p>
      &#12288;scene&#12398;&#20316;&#25104;
    </p>
    <p>
      &#12288;&#12288;titleScene
    </p>
    <p>
      &#12288;&#12288;playScene
    </p>
    <p>
      &#12288;&#12288;practiceScene
    </p>
    <p>
      &#12288;&#12288;resultScene
    </p>
  </body>
</html>
</richcontent>
</node>
</node>
<node CREATED="1340783995852" FOLDED="true" ID="ID_1117585894" MODIFIED="1340788019282" POSITION="right" TEXT="titleScene.js">
<node CREATED="1340784006612" ID="ID_623796267" MODIFIED="1340784428410">
<richcontent TYPE="NODE"><html>
  <head>
    
  </head>
  <body>
    <p>
      init
    </p>
    <p>
      &#12288;&#12525;&#12468;&#12398;&#34920;&#31034;
    </p>
    <p>
      &#12288;&#12508;&#12479;&#12531;&#12398;&#20316;&#25104;
    </p>
    <p>
      &#12288;&#12288;practiceButton(&#32244;&#32722;)
    </p>
    <p>
      &#12288;&#12288;playButton(&#23550;&#25126;)
    </p>
    <p>
      &#12288;&#12288;rankingButton(&#12521;&#12531;&#12461;&#12531;&#12464;)
    </p>
    <p>
      &#12288;&#12288;questionButton(&#21839;&#38988;&#19968;&#35239;)
    </p>
  </body>
</html></richcontent>
</node>
<node CREATED="1340784201559" ID="ID_395247489" MODIFIED="1340784625914">
<richcontent TYPE="NODE"><html>
  <head>
    
  </head>
  <body>
    <p>
      practiceButton
    </p>
    <p>
      &#12288;&#12508;&#12479;&#12531;&#12452;&#12513;&#12540;&#12472;&#12398;&#25551;&#30011;
    </p>
    <p>
      &#12288;clickEvent
    </p>
    <p>
      &#12288;&#12288;changeScene(&quot;practeceScene&quot;)
    </p>
  </body>
</html></richcontent>
</node>
<node CREATED="1340784201559" ID="ID_406889639" MODIFIED="1340784665781">
<richcontent TYPE="NODE"><html>
  <head>
    
  </head>
  <body>
    <p>
      playButton
    </p>
    <p>
      &#12288;&#12508;&#12479;&#12531;&#12452;&#12513;&#12540;&#12472;&#12398;&#25551;&#30011;
    </p>
    <p>
      &#12288;clickEvent
    </p>
    <p>
      &#12288;&#12288;changeScene(&quot;playScene&quot;)
    </p>
  </body>
</html></richcontent>
</node>
<node CREATED="1340784201559" ID="ID_1625899892" MODIFIED="1340784757965">
<richcontent TYPE="NODE"><html>
  <head>
    
  </head>
  <body>
    <p>
      rankingButton
    </p>
    <p>
      &#12288;&#12508;&#12479;&#12531;&#12452;&#12513;&#12540;&#12472;&#12398;&#25551;&#30011;
    </p>
    <p>
      &#12288;clickEvent
    </p>
    <p>
      &#12288;&#12288;jump=&quot;/ranking&quot;
    </p>
  </body>
</html></richcontent>
</node>
<node CREATED="1340784201559" ID="ID_1310424234" MODIFIED="1340784765540">
<richcontent TYPE="NODE"><html>
  <head>
    
  </head>
  <body>
    <p>
      questionButton
    </p>
    <p>
      &#12288;&#12508;&#12479;&#12531;&#12452;&#12513;&#12540;&#12472;&#12398;&#25551;&#30011;
    </p>
    <p>
      &#12288;clickEvent
    </p>
    <p>
      &#12288;&#12288;jump=&quot;/question&quot;
    </p>
  </body>
</html></richcontent>
</node>
</node>
<node CREATED="1340784779707" ID="ID_1337162496" MODIFIED="1340784792238" POSITION="right" TEXT="playScene.js">
<node CREATED="1340784804920" ID="ID_8932072" MODIFIED="1340789325204">
<richcontent TYPE="NODE"><html>
  <head>
    
  </head>
  <body>
    <p>
      init
    </p>
    <p>
      &#12288;&#12469;&#12540;&#12496;&#12395;&quot;getStandby&quot;&#12434;&#36865;&#12427;
    </p>
    <p>
      &#12288;socketcallback
    </p>
    <p>
      &#12288;&#12288;&quot;getRoomKey&quot;
    </p>
    <p>
      &#12288;&#12288;&#12288;createRoom(key)
    </p>
  </body>
</html>
</richcontent>
</node>
<node CREATED="1340789333713" ID="ID_1776686780" MODIFIED="1340789571783">
<richcontent TYPE="NODE"><html>
  <head>
    
  </head>
  <body>
    <p>
      createRoom(key)
    </p>
    <p>
      &#12288;nameSpaceObject&#12398;&#29983;&#25104;
    </p>
    <p>
      &#12288;nameSpaceCallback
    </p>
    <p>
      &#12288;&#12288;&quot;connect&quot;
    </p>
    <p>
      &#12288;&#12288;&#12288;nameSpaceCallback
    </p>
    <p>
      &#12288;&#12288;&#12288;&#12288;/* Server&#12392;&#12398;&#12420;&#12426;&#12392;&#12426;&#12399;&#12371;&#12371;&#12363;&#12425;&#26360;&#12356;&#12390;&#12356;&#12367;*/
    </p>
  </body>
</html>
</richcontent>
</node>
</node>
</node>
</map>
