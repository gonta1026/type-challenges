// // Qiitaオッケー！

type Hoge = {
  name: string;
  age: number;
}

type Fuga = {
  name: string;
  size: number;
}

type EngineerBlogger = Hoge & Fuga

const valiable: EngineerBlogger = {
  name: "hoge",
  age: 1,
  size: 1
}
/* * * * * * * * * or * * * * * * * */

let HogeFug: Hoge & Fuga
