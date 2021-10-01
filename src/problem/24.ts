(() => { 
  function isStringArray(obj: unknown): obj is string[] {
    return Array.isArray(obj) && obj.every(value => typeof value === "string");
  }
  
  function foo(obj: unknown) {
    if (isStringArray(obj)) {
      obj.push("abcde");
    }
    return obj
  }
  const aaaa = [
      "aaa"
  ]
  const sss = foo(aaaa)
})()  