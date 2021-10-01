(() => { 
  // let a = 1
  // const num = a && "hoge";
  type Func = (arg: number) => number
  const double = function (num: number) { return num * 2}
  double
})()  
