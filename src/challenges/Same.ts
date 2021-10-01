type OriginalKeys = "one" | "two" | "tree";
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type SameType<T extends keyof any, U> = {
  [P in T]: U;
};

type OriginalKeysResultType = SameType<OriginalKeys, number>;
