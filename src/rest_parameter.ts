// レストパラメーターで型を指定する方法について

// function Func01(...args: number[]) {
//   console.log(args) // [ 0, 1, 2, 3, 4 ]
// }
// Func01(0,1,2,3,4)

// // タプル型での指定方法
// function Func02(...args: [number, string, boolean]) {
//   console.log(args) // [ 0, 1, 2, 3, 4 ]
// }
// Func02(10,"100",true)


// //　けつの方に?をつけることができる。 
// function Func03(...args: [number, string, boolean?]) {
//   console.log(args) // [ 0, 1, 2, 3, 4 ]
// }
// Func03(10,"100",true)

//　けつの方に?をつけることができる。 
function Func04(...args: readonly [string, boolean, ...number[]]) {
  console.log(args)
}
Func04("on22e", true, 1,2,3,4,5);
