(() => { 
// enumを使用するのが最適かつ非常に効率的な場所と適切な使用例があります

// 列挙型は、他のTypeScriptデータ型と同じように、配列の初期化内で使用できます。
// これは簡単な例です。

enum NigerianLanguage {
  Igbo,
  Hause,
  Yoruba
}

//can be used in array initialisation
let citizen = {
  Name: 'Ugwunna',
  Age: 75,
  Language: NigerianLanguage.Igbo
}

//列挙型は理想的には、週の7日のように、定数と見なすことができる明確な値がある状況で使用されるべきです。
enum Days {
  Sunday = 1,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

// 列挙型は、文字列または定数を変数で表す必要がある場所でも使用できます。

// TypeScriptの列挙型は、次の場所では使用しないでください。

// 列挙型メンバーの値を再割り当てまたは変更する予定の場合、enumは型保証されているため、再割り当て時にコンパイルエラーが返されます。
// 動的な値を記録したい場合、enumは有限項目に最も適しており、その背後にある一般的な考え方はユーザー定義の定数システムを作成するのを助けることでした
// 列挙型を変数として使用することはできません。そうするとエラーが返されます
})()  