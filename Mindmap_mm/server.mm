<map version="0.9.0">
<!-- To view this file, download free mind mapping software FreeMind from http://freemind.sourceforge.net -->
<node CREATED="1340781155436" ID="ID_1828150388" MODIFIED="1340781223223" TEXT="&#x30b5;&#x30fc;&#x30d0;&#x5074;">
<node CREATED="1340781511764" ID="ID_1054216499" MODIFIED="1341393801864" POSITION="right">
<richcontent TYPE="NODE"><html>
  <head>
    
  </head>
  <body>
    <p>
      init
    </p>
    <p>
      &#12288;<b>http&#12469;&#12540;&#12496;&#12398;&#30906;&#31435; </b>
    </p>
    <p>
      <b>&#12288;DB&#12458;&#12502;&#12472;&#12455;&#12463;&#12488;&#12398;&#29983;&#25104; </b>
    </p>
    <p>
      <b>&#12288;io(socket&#12469;&#12540;&#12496;&#29983;&#25104;) </b>
    </p>
    <p>
      <b>&#12288;roomList(&#12466;&#12540;&#12512;&#12398;&#24773;&#22577;&#12398;&#36899;&#24819;&#37197;&#21015;) </b>
    </p>
    <p>
      <b>&#12288;standByQueue(&#24453;&#27231;&#20013;&#12398;&#12518;&#12540;&#12470;&#12434;&#26684;&#32013;) </b>
    </p>
    <p>
      <b>&#12288;nextKey(&#27425;&#12398;&#12466;&#12540;&#12512;&#12398;key)=0 </b>
    </p>
    <p>
      <b>&#12288;MAXMEMBERS(&#21021;&#26399;&#20516;4) </b>
    </p>
    <p>
      <b>&#12288;httpcallback&#12398;&#29983;&#25104; </b>
    </p>
    <p>
      <b>&#12288;&#12288;&quot;/&quot;</b>
    </p>
    <p>
      &#160;&#160;&#160;&#160;&#160;&#160;&quot;/ranking&quot;
    </p>
    <p>
      &#12288;&#12288;&quot;/questions&quot;
    </p>
    <p>
      &#12288;&#12288;&quot;/questions/?number=*&quot;
    </p>
    <p>
      &#12288;socketcallback
    </p>
    <p>
      &#12288;&#12288;&quot;getRanking&quot;
    </p>
    <p>
      &#12288;<b>&#12288;&quot;getStandby&quot; =&gt; getStandby(socket)</b>
    </p>
    <p>
      &#12288;&#12288;&quot;getPracticeQuestion&quot;
    </p>
    <p>
      &#12288;&#12288;&quot;sendNewRecord&quot;
    </p>
  </body>
</html>
</richcontent>
</node>
<node CREATED="1340785367366" ID="ID_611905037" MODIFIED="1341393810533" POSITION="right">
<richcontent TYPE="NODE"><html>
  <head>
    
  </head>
  <body>
    <p>
      <b>getStandby(socket) </b>
    </p>
    <p>
      <b>&#12288;nextKey&#12364;0&#12394;&#12425;&#12400; </b>
    </p>
    <p>
      <b>&#12288;&#12288;nextKey&#12434;&#29983;&#25104; </b>
    </p>
    <p>
      <b>&#12288;&#12288; nameSpece&#12434;&#20316;&#12387;&#12390;roomList&#12398;nextKey&#12398;nameSpece&#12434;&#29983;&#25104;(createNameSpece(nextKey))&#12375;&#12390;&#36861;&#21152; </b>
    </p>
    <p>
      <b>&#12288;&#12288;user&#12395;&quot;getRoomKey&quot;&#12391;nextKey&#12434;&#36865;&#12427; </b>
    </p>
    <p>
      <b>&#12288;nextKey&#12364;0&#20197;&#22806;&#12394;&#12425;&#12400; </b>
    </p>
    <p>
      <b>&#12288;&#12288;user&#12395;&quot;getRoomKey&quot;&#12391;nextKey&#12434;&#36865;&#12427;</b>
    </p>
  </body>
</html>
</richcontent>
</node>
<node CREATED="1340788883450" ID="ID_1471474318" MODIFIED="1341393820348" POSITION="right">
<richcontent TYPE="NODE"><html>
  <head>
    
  </head>
  <body>
    <p>
      <b>createNameSpece(key) </b>
    </p>
    <p>
      <b>&#12288;nameSpaceObject&#12398;&#29983;&#25104; </b>
    </p>
    <p>
      <b>&#12288;nameSpeceCallback </b>
    </p>
    <p>
      <b>&#12288;&#12288;&quot;connection&quot; </b>
    </p>
    <p>
      <b>&#12288;&#12288;&#12288;roomList&#12398;nextKey&#12398;members(&#37197;&#21015;)&#12395;socket.id&#12434;&#36861;&#21152; </b>
    </p>
    <p>
      <b>&#12288;&#12288;&#12288;question = createQuestion(); </b>
    </p>
    <p>
      <b>&#12288;&#12288;&#12288;&#35215;&#23450;&#12398;&#20154;&#25968;&#12395;&#36948;&#12375;&#12383;&#12425;&#24453;&#27231;&#12375;&#12390;&#12356;&#12427;&#20154;&#20840;&#21729;&#12395;&quot;gameStart&quot;,(members,question)&#12434;&#36865;&#12427; </b>
    </p>
    <p>
      <b>&#12288;&#12288;&#12288;nameSpeceCallback</b>
    </p>
    <p>
      &#12288;&#12288;&#12288;&#12288;/* client&#12392;&#12398;&#12420;&#12426;&#12392;&#12426;&#12399;&#12371;&#12371;&#12363;&#12425;&#26360;&#12356;&#12390;&#12356;&#12367;&#160;*/
    </p>
  </body>
</html>
</richcontent>
</node>
<node CREATED="1341392725814" ID="ID_1229546999" MODIFIED="1341393217470" POSITION="right">
<richcontent TYPE="NODE"><html>
  <head>
    
  </head>
  <body>
    <p>
      createQuestion()
    </p>
    <p>
      &#12288;&#20081;&#25968;&#12434;&#29983;&#25104;(5&#12388;)
    </p>
    <p>
      &#12288;&#20081;&#25968;&#12434;&#12418;&#12392;&#12395;&#21839;&#38988;&#12289;&#21839;&#38988;&#12398;&#24773;&#22577;&#12434;&#37197;&#21015;&#12395;&#35501;&#12415;&#36796;&#12416;
    </p>
  </body>
</html>
</richcontent>
</node>
</node>
</map>
