"use strict";
function foo(x) {
    if (typeof x === "string") {
        return true;
    }
    else if (typeof x === "number") {
        return false;
    }
    return fail("Unexhaustive!"); //ここはreturnされないので neverが返っている。boolean型が返る関数なのでError
}
function fail(message) { throw new Error(message); } // 常にthrowされるのでnever型が返る
