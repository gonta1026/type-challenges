"use strict";
// 使いどころ。
// 関数の返り値を確認するとnumberかstringとなってしまい、型が定まっていないため、正しく型はこうであると伝えてあげる必要がある。
// 引数にくる型が複数の処理を予定している場合に
function increment(num) {
    if (typeof num === "string") {
        return num + "000";
    }
    else {
        return num + 10;
    }
}
const incre01 = increment;
console.log(incre01); // 10000
const incre02 = increment(10);
console.log(incre02); // 20
function toUpperCase(x) {
    if (typeof x === "string") {
        return x.toLocaleUpperCase();
    }
    else {
        return x;
    }
}
