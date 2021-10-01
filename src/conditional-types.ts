type Diff<T, U> = T extends U ? never : T;

type RequiredKeys = Diff<"age" | "name", "age">; // "name"