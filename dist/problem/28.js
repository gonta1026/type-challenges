"use strict";
(() => {
    // function eachItem(val: number, i: number) {
    //   return val.toExponential(3);
    // }
    // const arr = [4, "fafa", 6];
    // arr.map(eachItem);
    // ↓
    function eachItem(val) {
        if (typeof val !== "string") {
            return val.toExponential(3);
        }
    }
    const arr = [4, "fafa", 6];
    arr.map(eachItem);
})();
