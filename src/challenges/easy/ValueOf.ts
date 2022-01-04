(() => {
  /**********************
   * 配列 T valueを取得する
   **********************/
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  const Todo02 = {
    title: "タイトル",
    description: "説明",
    completed: false,
  } as const;

  type Hope = {
    readonly title: "タイトル";
    readonly description: "説明";
    readonly completed: false;
  };

  /********** answer **********/

  type valueOf<T> = T[keyof T];

  /********** /answer **********/

  type result = valueOf<Todo>;
  type result02 = valueOf<typeof Todo02>;
  /****************************/
})();
