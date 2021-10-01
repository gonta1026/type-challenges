(() => {  
  // const hoge = "ss" as const
  // type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
  // type fuga =  ReturnType<typeof hoge>
  type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

  type ToString = (num: number) => string;
  type ReturnTypeToString = ReturnType<ToString>; // (1)

})()  

