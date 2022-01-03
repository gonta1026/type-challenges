type MyAwaited<T> = T extends Promise<infer R> ? MyAwaited<R> : T;
// 関数の型定義（呼び出しシグネチャの省略記法）
// 引数はナシで、返り値にPromise型を返すことを表している。ジェネリック型<T>で型を指定している感じ？
// 非同期処理の実行結果は`Promise<string>`のように定義することができる
type FetchProfile = Promise<string>;
type Result = MyAwaited<FetchProfile>; // string
