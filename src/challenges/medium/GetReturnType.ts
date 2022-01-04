const fn = (v: boolean) => {
  if (v) return 1;
  else return 2;
};

type ReturnArray = (v: boolean) => number[] | string[];
type MyReturnType<T extends (...args: any[]) => unknown> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never;

type a = MyReturnType<typeof fn>; // should be "1 | 2"
type arr = MyReturnType<ReturnArray>; // should be "1 | 2"
