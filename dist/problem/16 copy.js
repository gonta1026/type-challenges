"use strict";
(() => {
    const double = function (num) { return num * 2; };
    double;
})();
function apply(value, func) {
    return func(value);
}
// res は string 型
const res = apply("111", (num) => Math.pow(Number(num), 2));
function foo(obj) {
    if (obj.name !== undefined) {
        return obj.name.slice(0, 5);
    }
}
