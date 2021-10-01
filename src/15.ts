(() => { 
  let arr = <T extends any[]>(...rest: T[]): T[] => {
    return rest
 }
 
 const func = <T, U, V>(...rest: [T, U, V]) => {
    const [hoge, aaa, ccc] = [...rest]
    return rest
 }

 const number = {
   one: 1,
   two: 2,
   three: 3
 } as const
 const result = func(number.one, number.two, number.three)

})()  

