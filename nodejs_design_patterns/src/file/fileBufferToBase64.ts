/**
 * ファイルを読み込んでbase64に変換するサンプルコード
 * 
 * nodejsの基本はシングルスレッド。ファイル読み込みは重い処理なので非同期処理にするのがセオリー
 * 
 * fs.readFileはファイルを一括で取得する。ファイルサイズが大きいと死ぬので、分割取得がセオリ
 * fs.readFileSyncは一括取得&同期処理
 * 
 * base64
 * - 0 から 64 までの ASCII コード
 */

// 実行方法
// ./node_modules/.bin/ts-node src/file/fileBufferToBase64.ts

import fs from "fs";
import { Buffer } from 'buffer';

fs.readFile("./assets/file/cojicaji_1024x1024.png", (err: any, file: any) => {
    if (err) {
        console.error(err);
    } else {
        console.log(file);
        
        // ArrayBuffer系はBufferオブジェクトを使うことで処理できる
        // WebのFormはFileオブジェクトなのでこの方法ではできない
        let hoge = Buffer.from(file).toString('base64')
        // => data:image/png;base64,がつかない
        console.log(hoge)
    }
});
