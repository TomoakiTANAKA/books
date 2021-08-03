/**
 * ファイルを読み込んでbase64に変換するサンプルコード
 * 
 * Blob is Binary Large OBject
 * - type + blobPartsで構成される（タイプをもつバイナリーデーター）
 * - File APIによる読み込みやfetchをするときにBlobで読み込まれる
 * - 基本的にこの状態では、扱えない（扱いにくい）
 * - File --> Blob という継承関係（Fileになると、ファイル名とかが追加される）
 * - FileReader経由でBufferオブジェクトに変換可能
 * - nodejsではblobは使えないらしい（npmライブラリも） https://stackoverflow.com/questions/53637644/how-do-i-create-a-blob-in-node-js
 * 
 * Bufferオブジェクト
 * - バイナリデータの取り扱い
 * - ArrayBuffer メモリに格納されたバイナリデータを配列に表現したもの。
 * - UIint8Array ArrayBufferの実際の表現方法（?）.8bit区切 = 0-255 の要素でバイナリーデータを表現したもの
 * - 関連図
 *   - http://var.blog.jp/archives/62330155.html
 *
 * エラー対応（ReferenceError: Blob is not defined）
 * - 
 * 
 */

// 実行方法
// ./node_modules/.bin/ts-node src/file/blobToBase64.ts

let blob = new Blob(["<html>…</html>"], {type: 'text/html'})
console.log(blob)
// => let blob = new Blob(["<html>…</html>"], {type: 'text/html'});
