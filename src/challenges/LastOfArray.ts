(() => {
  /**********************
   * 配列Tを受け取り、その最後の要素の型を返す汎用のLast <T>を実装します。
   **********************/

  type arr1 = ["a", "b", "c"];
  type arr2 = [3, 2, 1];

  /********** answer **********/

  type Last<T extends string[] | number[]> = [never, ...T][T["length"]];

  /********** answer **********/

  type tail1 = Last<arr1>; // expected to be 'c'
  type tail2 = Last<arr2>; // expected to be 1

  /****************************/
})();

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
const phrase = "the cat sat on the mat" as const;
const SplitPhrase = split(phrase, " ");
const hgoehoeh = SplitPhrase.filter((text) => {
  if (text === "the") {
    console.log(text);
  }
});
type PhraseType = typeof phrase;
type PhraseSplitType = typeof SplitPhrase;
type Union = PhraseSplitType[number];

function getMostFrequentWord(phrase: PhraseType) {
  const splitPhrase = split(phrase, " ");
  const result = splitPhrase.filter((text, index: number, arr) => {
    if (arr.indexOf(text) === index && index !== arr.lastIndexOf(text)) {
      return text;
    }
  });

  return;
}

const hoge = getMostFrequentWord(phrase);

// lastIndexOfは最後から見て行った添字を返す。最初に見つかったものを返す
