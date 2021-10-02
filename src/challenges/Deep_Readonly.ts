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

  type ObjType = typeof obj;

  // エラー: Cannot assign to 'hoge' because it is a constant or a read-only property.
  obj.bar.hoge = 4;
})();
