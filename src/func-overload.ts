// 使いどころ。
// 関数の返り値を確認するとnumberかstringとなってしまい、型が定まっていないため、正しく型はこうであると伝えてあげる必要がある。
// 引数にくる型が複数の処理を予定している場合に

// ## 個人的に感じる事。問題点？
// 関数のオーバーロードをさせるような処理をあまりさせるのはいかがなものか？？見づらいし、関数を分けた方がいいと思ったが一緒にした方がいいケースが思いつかない。そもそも型が違うということは処理をする内容も異なってきたりすると思っている。
// 下記はまだシンプルだがTypeScriptに慣れない人が見た時に何をしているのか分かりづらい。

function increment(num: string): string;
function increment(num: number): number;
function increment(num: string | number) {
  if (typeof num === "string"){
    return num + "000"; 
  } else  {
    return num + 10; 
  }
}

const incre01 = increment;
console.log(incre01) // 10000
const incre02 = increment(10);
console.log(incre02) // 20




interface UpperTmp {
  (x: string): string;
  (x: number): number;
}
function toUpperCase(x: string): string;
function toUpperCase(x: number): number;
function toUpperCase(x: string | number): string | number {
  if (typeof x === "string"){
    return x.toLocaleUpperCase()
  } else {
    return x

  }
}
