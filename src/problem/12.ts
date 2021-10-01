(() => { 
  type PropNullable<T> = {[P in keyof T]: T[P] | null};

interface User { name: string, age: number, money: null }

const obj:PropNullable<User> = { name: "kenji", age: 99, money: null }
})()  

