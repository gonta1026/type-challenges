(() => {
  interface Todo {
    title: string;
    description?: string;
    completed: boolean;
  }
  type ReadonlyTodo = Readonly<Todo>;

  type Tododesu = Extract<keyof ReadonlyTodo, keyof Todo>;
  interface CatInfo {
    age: number;
    breed: string;
  }

  type CatName = "miffy" | "boris" | "mordred";

  type HogeHoge = Record<CatName, CatInfo>;
  const cats: Record<CatName, CatInfo> = {
    miffy: { age: 10, breed: "Persian" },
    boris: { age: 5, breed: "Maine Coon" },
    mordred: { age: 16, breed: "British Shorthair" },
  };

  type PickMy<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  type customTodo = PickMy<Todo, "title" | "completed">;

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
