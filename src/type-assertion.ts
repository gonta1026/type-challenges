// 型アサーション
// 型をこちらで書き換えているので慎重に扱う必要がある。

(document.getElementById("input") as HTMLInputElement).value = "aaaaaaa" ;
// 下はうまく理解していなかったが型アサーションだったのか。。
(<HTMLInputElement>document.getElementById("input")).value = "bbbbb"