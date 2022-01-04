() => {
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise<string>((resolve, _) => {
    setTimeout(resolve, 100, "foo");
  });
  const promise4 = {
    id: 1,
  };

  const p = PromiseAll([promise1, promise2, promise3, promise4] as const);
  p.then((data) => {
    const [one, two, tree, four] = data;
  });
};
