(() => {
  /**********************
   * TupleToObjectを作ろう！！
   **********************/

  const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

  /********** answer **********/

  type TupleToObject<T extends readonly any[]> = {
    [P in T[number]]: P;
  };

  /****************************/

  type TupleToObjectType = TupleToObject<typeof tuple>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

  const tupleToObj: TupleToObjectType = {
    tesla: "tesla",
    "model 3": "model 3",
    "model X": "model X",
    "model Y": "model Y",
  };
})();
