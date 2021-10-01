"use strict";
(() => {
    // 型引数の『U』の部分でkeyofを使ってオブジェクトのキーをユニオン型にする // key: "namge" | "age" となる。
    // type TUser =  { name: string, age: number }
    // function getValue<T extends TUser, U extends keyof T>(user: T, key: U) {
    //   return user[key] // 
    // }
    const YakiniEvent = {
        name: "焼肉イベント",
        num: 21
    };
    const normalApp = {
        name: "ストリートファイター",
        loginUser: {
            name: "kekek",
            age: 1
        }
    };
    const adminApp = {
        name: "サモンナイト",
        loginUser: {
            name: "kekek",
            age: 1,
            role: "super",
            status: "fine"
        }
    };
})();
