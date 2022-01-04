() => {
  // 条件分に合わせて型を返す
  type If<C, T, F> = C extends true ? T : C extends false ? F : Error;
  type A = If<true, "a", "b">; // expected to be 'a'
  type B = If<false, "a", "b">; // expected to be 'b'
};
