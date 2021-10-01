interface ResponseData<T extends {message: string} = any> {
  data: T;
  status: number
}

let tmp2: ResponseData

interface Vegetables {
  tomato: string;
  pumpkin: string;
}

type TMappedTypes<Vegetables> = {
  [p in keyof Vegetables]: string
}

let fugaaa: TMappedTypes<Vegetables>

type Flatten<T> = {
  [K in keyof T]​: T[K];
};

type T = { foo: string } & { bar: number };
// type U = { foo: string; bar: number }
type U = Flatten<T>;

type H =  Flatten<Vegetables> 

function convertToNumberAll3<A extends readonly string[]>( strArray: A ) : {[K in keyof A]: number;
} {
  return strArray.map(str => parseInt(str, 10)) as any;
}
const readonlyArray = ["1", "12", "123"] as const;

const numArr2 = convertToNumberAll3(readonlyArray);


// type ConditionalTypes = "tomato" extends string ? number : boolean 
type ConditionalTypeInfer = { tomato: string } extends { tomato: infer R } ? R : boolean

// type DConditionalTypes = /