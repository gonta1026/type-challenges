(() => {
  interface Todo {
    title: string;
    description: string;
  }

  /**********************
   * readonlyを作ろう！！
   **********************/
  type MyReadonly<T> = {
    readonly [P in keyof T]?: T[P];
  };
  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar",
  };

  type TodoType = typeof todo;

  // todo.title = "Hello"; // Error: cannot reassign a readonly property
  // todo.description = "barFoo"; // Error: cannot reassign a readonly property
})();
