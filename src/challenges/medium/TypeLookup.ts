() => {
  interface Cat {
    type: "cat";
    breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
  }

  interface Dog {
    type: "dog";
    breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
    color: "brown" | "white" | "black";
  }
  type LookUp<
    T extends { type: string },
    K extends T["type"]
  > = T extends Record<"type", string>
    ? T["type"] extends K
      ? T
      : never
    : never;

  type MyDogType = LookUp<Cat | Dog, "dog">;
  type hoge = Cat["type"];
};
