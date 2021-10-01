// こちら以降はstringのカラムしか追加できない。

// interface Designer {
//   name: string;
//   [index: string]: string; 
//   age: number // string型のインデックスシグネチャーを指定しているのでエラーになる。。
// }

// const designer: Designer = {
//   name: "Hoge",
//   role: "aa"
// }

// // 関係のないプロパティにアクセスもできるのでタイポをすると危険。
// designer.role // Ok
// designer.name

// ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

type Designer ={
  name: string;
  age: number // string型のインデックスシグネチャーを指定しているのでエラーになる。。
  [index: string]: any; 
}

const designer: Designer = {
  name: "Hoge",
  role: "aa",
  huga: "fuga",
  age: 11,
  nulldesu: null, // エラーが出ない。
  undefineddesu: undefined　// エラーが出ない。
}

designer.fugafuga // これもエラーが出ない。。

