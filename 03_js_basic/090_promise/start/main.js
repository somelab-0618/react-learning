// 非同期処理(Promise)
let a = 0;

// コールバック関数の引数、resolveとrejectは関数
new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 1;
    // 処理が正常に終了した場合
    resolve(a); // 引数に値を渡すことでthenのコールバック関数に引数として渡っていく
  }, 2000);
})
  .then((b) => {
    console.log(b);
    return b; // returnすることで次のthenに引数として渡せる
  })
  .then((b) => {
    console.log(b);
  })
  .catch((c) => {
    // rejectが実行された時に実行される
    console.log('catchが実行', c);
  });
