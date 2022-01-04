(() => {
  /**********************
   * 配列 T を受け取り、最後の要素を除いた配列を返す汎用的な Pop<T> を実装してください。
   **********************/

  // 一番最後の型を取得する。一番最後の方であればneverを使って返さないようにする。

  type arr1 = ["a", "b", "c", "d"];
  type arr2 = [3, 2, 1];
  /********** answer **********/

  type Pop<T extends any[]> = T extends [...infer R, infer _] ? R : never;

  /********** /answer **********/

  type re1 = Pop<arr1>; // expected to be ['a', 'b', 'c']
  type re2 = Pop<arr2>; // expected to be [3, 2]
  /****************************/
})();
