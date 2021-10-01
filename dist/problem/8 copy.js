"use strict";
function foo(x) {
    if (x === "string") {
        return true;
    }
    else if (x === "number") {
        return false;
    }
    return fail("Unexhaustive!"); //ここはreturnされないので neverが返っている。boolean型が返る関数なのでError
}
foo("aaaaa");
function fail(message) { throw new Error(message); } // 常にthrowされるのでnever型が返る
