(() => {
  /**********************
   * 配列Tを受け取り、その最後の要素の型を返す汎用のLast <T>を実装します。
   **********************/

  const arr1 = ["a", "b", "c"] as const;
  const arr2 = [3, 2, 1] as const;

  /********** answer **********/

  type Last<
    T extends readonly unknown[],
    K extends readonly unknown[] = [0, ...T]
  > = K[T["length"]];

  type tail3 = Last<typeof arr2>; // expected to be 1

  /****************************/
})();
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
