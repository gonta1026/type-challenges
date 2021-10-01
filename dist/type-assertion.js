"use strict";
// 型アサーション
// 型をこちらで書き換えているので慎重に扱う必要がある。
document.getElementById("input").value = "aaaaaaa";
// 下はうまく理解していなかったが型アサーションだったのか。。
document.getElementById("input").value = "bbbbb";
