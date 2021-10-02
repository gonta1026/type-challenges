(() => {
  /**********************
   * readonlyを作ろう！！
   **********************/

  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type MyReadonly2<T, K extends keyof T> = T &
    {
      readonly [P in K]: T[P];
    };

  const todo: MyReadonly2<Todo, "title" | "description"> = {
    title: "Hey",
    description: "foobar",
    completed: false,
  };

  type todoType = typeof todo;

  todo.title = "Hello"; // Error: cannot reassign a readonly property
  todo.description = "barFoo"; // Error: cannot reassign a readonly property
  todo.completed = true; // OK
})();
