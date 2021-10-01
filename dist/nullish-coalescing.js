"use strict";
var _a;
// API等から取得したデータを想定
const fetchData = {
    data: false // なかったとき
};
const result = (_a = fetchData.data) !== null && _a !== void 0 ? _a : "";
console.log(result); // false 
// この場合はnullもしくはundefindの時の動作になるので理解をして
const hoge = "1" + ["aaa"];
console.log("hoge", hoge);
