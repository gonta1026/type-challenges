type FetchData = {
  data?: any
}
// API等から取得したデータを想定
const fetchData: FetchData = {
  data: false // なかったとき
}
const result = fetchData.data ?? "";
console.log(result) // false 
// この場合はnullもしくはundefindの時の動作になるので理解をして

const hoge = "1" + ["aaa"];
console.log("hoge",hoge)