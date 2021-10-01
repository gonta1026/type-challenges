- 85 の 関数のオーバーロードについて、よくわからない。。
- as const について学習した。タプルにしたりオブジェクトに対してenumのような扱いをさせる。
-  typeof を使って型を取得する。
const person = {
  name: "keisei",
  age: 34
}
type ageType = typeof person.age
if (ageType){
  console.log(ageType)
}

- keyofを使っユニオン型の型を指定する。
- mappedTypesについて（やり込みが必要。プロジェクトによるしすぐには使わないかも）

## 記事にする事
- unknownについて　対応済み
- type-gurdについて　対応済み
- declareについて
- lookup型を記事にしたいが単体で使うのではなく、掛け合わせをして記事にしないと使いどころがよくわかっていないため。







