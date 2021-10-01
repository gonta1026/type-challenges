// メモ
// - タプガードは型を絞り込む時に使う。
// ユニオン型の方がきた時にこの型がきた時にはこう使って、みたいな処理を分けることができる。

type NormalUser = {
  name: string,
}
type AdminUser = {
  name: string,
  role: "normal" | "super"  
}

type User = NormalUser | AdminUser;

// 通常のユーザーが出力をしたい情報、管理者が持っている情報で処理を分けたい。それを方で制御する。
function displayRoleOrName(user: User) {
  // roleというプロパティをもつ管理ユーザーの場合
  if ("role" in user){
    return user.role
  // 通常のユーザーの処理
  } else {
    return user.name
  }
}

const user = {
  name: "keisei"
}
const fuga = displayRoleOrName(user)