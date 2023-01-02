// DOM → HTMLをjavascriptから操作するためのオブジェクト
const h1Element = document.querySelector('h1');
console.dir(h1Element);
console.dir(h1Element.textContent);
h1Element.textContent = '終了時点コード';

const btnEl = document.querySelector('button');
// コールバックのevent引数は必ず渡ってくる
// eventの情報がobjectで渡ってくる
btnEl.addEventListener('click', (e) => {
  console.dir(e.target.textContent);
  console.log('hello');
});
