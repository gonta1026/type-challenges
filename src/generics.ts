(() => {
  // 型引数の『U』の部分でkeyofを使ってオブジェクトのキーをユニオン型にする // key: "namge" | "age" となる。
  // type TUser =  { name: string, age: number }
  // function getValue<T extends TUser, U extends keyof T>(user: T, key: U) {
  //   return user[key] // 
  // }

  // const user = {
  //   name: "tanaka",
  //   age: 20,
  // }

  // console.log(getValue(user, "name"))  // 第二引数は "name" か "age" しか受け付けない。

  type TEvent<TNum> = {
    name: string,
    num: TNum;
  }

  const YakiniEvent: TEvent<number> = {
    name: "焼肉イベント",
    num: 21
  }

  
  type TUser = {
    name: string,
    age: number
  }

  // 前提：好きなゲームにどのようなユーザーでログインをするかという事を想定している。。
  type TAppUser<T> = { 
    name: string;
    loginUser: T
  } 
 

  type TAdminUser = TUser & {
    role: string,
    status: string
  }

  const normalApp: TAppUser<TUser> = { // ストリートファイターを通常のユーザーでやりたい
    name: "ストリートファイター",
    loginUser: {
      name: "kekek",
      age: 1
    }
  }

  const adminApp: TAppUser<TAdminUser> = { // サモンナイトを管理ユーザーでやりたい
    name: "サモンナイト",
    loginUser: {
      name: "kekek",
      age: 1,
      role: "super",
      status: "fine"
    }
  }  
})()





