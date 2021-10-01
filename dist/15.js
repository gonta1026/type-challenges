"use strict";
(() => {
    let arr = (...rest) => {
        return rest;
    };
    const func = (...rest) => {
        const [hoge, aaa, ccc] = [...rest];
        return rest;
    };
    const number = {
        one: 1,
        two: 2,
        three: 3
    };
    const result = func(number.one, number.two, number.three);
})();
