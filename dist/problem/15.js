"use strict";
(() => {
    let arr = (...rest) => {
        return rest;
    };
    const func = (...rest) => {
        return rest;
    };
    console.log(func(1, 2, 3, 4));
    //  const aoge =  arr(["a", 1]);
    //   type hoge = typeof
})();
