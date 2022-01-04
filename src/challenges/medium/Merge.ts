() => {
  type Kick = {
    effect: boolean;
    hit: boolean;
    id: number;
  };

  type Punch = {
    hit: boolean;
    damage: number;
    id: number;
  };

  type KickOrPunch = Kick | Punch;
  type KickAndPunch = Kick & Punch;

  const obj: KickAndPunch = {
    hit: true,
    damage: 1,
    id: 2,
    effect: true,
  };
  type Merge<F extends Record<any, any>, S extends Record<any, any>> = {
    [P in keyof F | keyof S]: P extends keyof S ? S[P] : F[P];
  };

  type _ = Merge<Kick, Punch>;
};
