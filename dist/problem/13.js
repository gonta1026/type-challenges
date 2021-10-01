"use strict";
(() => {
    let createStringObj = (obj) => {
        let o = {};
        for (const key in obj) {
            o[key] = String(obj[key]);
        }
        return o;
    };
    //  const anotherFun = createObj;
    const result = createStringObj({ hoge: "shihw" });
})();
