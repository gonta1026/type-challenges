() => {
  // Jsのincludesと同じ、
  /**
   * true | false のどちらかを返します。
   * @module Includes
   * @param {Array} T - 対象の配列を指定
   * @param {string | string} U - 含まれているかを検証したいkey
   * @return {boolean} - true | false
   */
  type Includes<T extends any[], U> = U extends T[number] ? true : false;
  type isPillarMenTrue = Includes<
    ["Kars", "Esidisi", "Wamuu", "Santana"],
    "Kars"
  >; // expected to be `false`
  type isPillarMenFalse = Includes<
    ["Kars", "Esidisi", "Wamuu", "Santana"],
    "Dio"
  >; // expected to be `false`
  type isNum = Includes<[1, 2, 3, 4], 8>; // expected to be `false`
};
