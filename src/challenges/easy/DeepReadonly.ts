(() => {
  /**********************
   * deep readonlyを作ろう！！（こちらはオブジェクト構造専用）
   **********************/

  type DeepReadonly<T> = {
    readonly [P in keyof T]-?: DeepReadonly<T[P]>;
  };

  interface Obj {
    foo: string;
    bar: {
      hoge: number;
    };
  }

  const obj: DeepReadonly<Obj> = {
    foo: "foo",
    bar: {
      hoge: 3,
    },
  };

  const fuga = {
    foo: "aaa",
    bar: {
      aaga: "aaaa",
    },
  } as const;

  type Fuga = DeepReadonly<typeof fuga>;
  type ObjType = typeof obj;
})();
