declare namespace Util {
  // 指定をしたKeysで指定をしたユニオンをnullを合わせたユニオン型へする変更をさせる。
  export type TargetNullable<T, Keys extends keyof T> = {
    [P in keyof T]: Keys extends P ? T[P] | null : T[P];
  };
  export type SelectChange<T, Keys extends keyof T, U> = {
    [P in keyof T]: P extends Keys ? U : T[P];
  };
  // ユニオンからnullを消す
  export type DeleteNull<T> = {
    [P in keyof T]: Exclude<T[P], null>;
  };
  // keyofのvalueバージョン
  export type valueOf<T> = T[keyof T];
  // 指定したプロパティををオプショナルに変更する
  // export type PartiallyPartial<T, K extends keyof T> = Partial<Pick<T, K>> &
  //   Pick<T, Exclude<keyof T, K>>;

  // 例： type result = TargetPropertyNames<Part, Function> // "add"
  export type TargetPropertyNames<T, U> = {
    [P in keyof T]: T[P] extends U ? P : never;
  }[keyof T];
  // 関数ならなんでもOK
  export type voidFunc = (...args: any[]) => any;

  export type DeepReadonly<T> = {
    readonly [P in keyof T]-?: DeepReadonly<T[P]>;
  };
}

type Split<
  T extends string,
  S extends string
> = T extends `${infer P}${S}${infer R}`
  ? string extends P
    ? [P]
    : [P, ...Split<R, S>]
  : [T];

function split<T extends string, S extends string>(value: T, separator: S) {
  return value.split(separator) as Split<T, S>;
}

function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{ [K in keyof T]: T[K] extends Promise<infer S> ? S : T[K] }>;
