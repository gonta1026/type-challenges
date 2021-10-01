"use strict";
// こちら以降はstringのカラムしか追加できない。
const designer = {
    name: "Hoge",
    role: "aa",
    huga: "fuga",
    age: 11,
    nulldesu: null,
    undefineddesu: undefined // エラーが出ない。
};
designer.fugafuga; // これもエラーが出ない。。
