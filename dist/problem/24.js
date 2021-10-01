"use strict";
(() => {
    function isStringArray(obj) {
        return Array.isArray(obj) && obj.every(value => typeof value === "string");
    }
    function foo(obj) {
        if (isStringArray(obj)) {
            obj.push("abcde");
        }
        return obj;
    }
    const aaaa = [
        "aaa"
    ];
    const sss = foo(aaaa);
})();
