(() => {
  function eachItem(val: number | string) {
    if (typeof val !== "string") {
      return val.toExponential(3);
    }
  }
  const arr = [4, "fafa", 6];
  arr.map(eachItem);
})();
