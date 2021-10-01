"use strict";
(() => {
    // enumを使用するのが最適かつ非常に効率的な場所と適切な使用例があります
    // 列挙型は、他のTypeScriptデータ型と同じように、配列の初期化内で使用できます。
    // これは簡単な例です。
    let NigerianLanguage;
    (function (NigerianLanguage) {
        NigerianLanguage[NigerianLanguage["Igbo"] = 0] = "Igbo";
        NigerianLanguage[NigerianLanguage["Hause"] = 1] = "Hause";
        NigerianLanguage[NigerianLanguage["Yoruba"] = 2] = "Yoruba";
    })(NigerianLanguage || (NigerianLanguage = {}));
    //can be used in array initialisation
    let citizen = {
        Name: 'Ugwunna',
        Age: 75,
        Language: NigerianLanguage.Igbo
    };
    //列挙型は理想的には、週の7日のように、定数と見なすことができる明確な値がある状況で使用されるべきです。
    let Days;
    (function (Days) {
        Days[Days["Sunday"] = 1] = "Sunday";
        Days[Days["Monday"] = 2] = "Monday";
        Days[Days["Tuesday"] = 3] = "Tuesday";
        Days[Days["Wednesday"] = 4] = "Wednesday";
        Days[Days["Thursday"] = 5] = "Thursday";
        Days[Days["Friday"] = 6] = "Friday";
        Days[Days["Saturday"] = 7] = "Saturday";
    })(Days || (Days = {}));
    // 列挙型は、文字列または定数を変数で表す必要がある場所でも使用できます。
    // TypeScriptの列挙型は、次の場所では使用しないでください。
    // 列挙型メンバーの値を再割り当てまたは変更する予定の場合、enumは型保証されているため、再割り当て時にコンパイルエラーが返されます。
    // 動的な値を記録したい場合、enumは有限項目に最も適しており、その背後にある一般的な考え方はユーザー定義の定数システムを作成するのを助けることでした
    // 列挙型を変数として使用することはできません。そうするとエラーが返されます
})();
