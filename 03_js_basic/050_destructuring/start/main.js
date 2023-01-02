const arry = ['配列1', '配列2', '配列3'];
// 分割代入
// 配列の先頭から変数に格納されていく。カンマだけ記述すれば省略できる
const [a, , c] = ['配列1', '配列2', '配列3'];
console.log(a); // '配列1'
console.log(c); // '配列3'
// console.log(arry[0]);
// console.log(arry[2]);

const obj = { x: 'オブジェクト1', y: 'オブジェクト2', z: 'オブジェクト3' };
// オブジェクトのキーと対応するので、順番は入れ替わっても問題ない。
const { z, x } = { x: 'オブジェクト1', y: 'オブジェクト2', z: 'オブジェクト3' };
console.log(x);
console.log(z);

const arr = ['Japan', 'Tokyo', 'Shinjuku'];
const objAddress = { country: 'Japan', state: 'Tokyo', city: 'Shinjuku' };

// 関数の引数に配列の分割代入を使う
const fnArr = ([country, state, city]) => {
  console.log('---配列---');
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

// 関数の引数としてオブジェクトの分割代入を使う
const fnObj = ({ country, state, city }) => {
  console.log('---オブジェクト---');
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

fnArr(arr);
fnObj(objAddress);
