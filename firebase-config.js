// クラウド同期の設定（息子さんが1回だけ書きかえます。セットアップ手順「9. クラウド同期」）
// Firebase の管理画面 → プロジェクトの設定 → マイアプリ → 「firebaseConfig」の { } の中身を、下の null と置きかえます。
// 例：
// window.DFN_FIREBASE_CONFIG = {
//   apiKey: "AIza....",
//   authDomain: "mise-note.firebaseapp.com",
//   projectId: "mise-note",
//   appId: "1:1234567890:web:abcdef"
// };
// この設定は公開されても大丈夫な情報です（記録を読めるのは、ルールで許可した人だけです）。
window.DFN_FIREBASE_CONFIG = null;
