(() => {
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  /***
   *  pick, MyExcludeが内部で使われている
   * */

  // pickを作成
  type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  type PickMy<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  type customTodo = PickMy<Todo, "title" | "completed">;

  // Excludeを作成
  type MyExclude<T, K> = T extends K ? never : T;

  type MyOmit<T, K> = MyPick<T, MyExclude<keyof T, K>>;

  type TodoPreview = MyOmit<Todo, "description" | "title">;

  const todo: TodoPreview = {
    completed: false,
  };
})();
