#!/usr/local/bin/ruby
# -*- coding: utf-8 -*-
=begin

Helloworldsに書かれているもの
=== ABAP ===
[[ABAP]]による記述は以下のようになる。
 WRITE / 'Hello, world!'.

=end

#file名になるパターン
filename_pattern = Regexp.new(/^==.*==$/)
#除くパターン
exclude_pattern1= Regexp.new(/.*による記述は以下のようになる。$/)
exclude_pattern2= Regexp.new(/^<.*source.*>$/)

hello = String.new
f = "hoge"
filename = "./HelloWorlds.txt"
date = String.new
file = open(filename)

while data = file.gets #1行ずつ読み込む
  #patternにマッチしているか
  if filename_pattern =~ data
    #改行文字を除く
    data.chomp!
    #dateから=を除く
    f=data.delete!("=\s")
    puts f
    #ファイルが存在するか？
    if !File.exist?(f)
      #fという名前のファイルを作成
      hello=File.open(f,'w+')
    end
    
  elsif exclude_pattern1 =~ data||exclude_pattern2 =~ data
    #なにもしない
  else
    #hello = File.open(f,'w+')
    hello.write(data)
  end
end


