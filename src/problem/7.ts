(() => {
  type Part = {
    name: string,
    age: number,
    add(): number
  }
  
  const obj: Part = {
    name: "kenji",
    age: 99,
    add: () => 1 * 2
  } as const
  
  type TargetPropertyNames<T, U> = {
    [K in keyof T]: T[K] extends U ? K : never
  }[keyof T]

  
  type result = TargetPropertyNames<Part, Function>
  type result02 = TargetPropertyNames<Part, number>
  type voidFunc = (...org: any[]) => any
  const hoge: voidFunc = (num: number) => num
  const fuga: voidFunc = (num: number[]) => num
})()