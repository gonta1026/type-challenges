() => {
  const func = (text: "aaa", num: 11) => {
    return `${text}${num}`;
  };
  //　実際に使われているものと一緒
  type MyParameters<T extends (...args: any) => any> = T extends (
    ...args: infer P
  ) => any
    ? P
    : never;
  type TypeA = Parameters<typeof func>; // [string, number]
};
