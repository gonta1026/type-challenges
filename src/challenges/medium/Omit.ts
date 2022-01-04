(() => {
  interface Todo {
    title: string;
    description?: string;
    completed: boolean;
  }

  // Excludeを作成
  type MyExclude<T, K> = T extends K ? never : T;
  /***
   *  pick, MyExcludeが内部で使われている
   * */

  // pickを作成
  type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
  };
  type MyOmit<T, K> = MyPick<T, MyExclude<keyof T, K>>;
  type TodoMyExclude = MyExclude<keyof Todo, "title">;
  type TodoPreview = MyOmit<Todo, "description" | "title">;

  const todo: TodoPreview = {
    completed: false,
  };
})();

// readolyのもの
// readonlyでないものを合算させる
