// const assertionをすることによって、定数化をすることができる。enumはjavascriptに変換をして消えてしまう恐れがあるため、 as constwお使った方がいい。
let text = "元気です" as const

const array =  [10,20] as const

const COLOR = {
    RED: "RED",
    BLUE: "BLUE",
} as const

const person = {
  name: "keisei",
  age: 34
} as const

type ageType = typeof person.age

type Values = Utilty.valueOf<typeof person>

