'use strict';
{
 //今日の日付を取得
 let date = new Date();
 let month = date.getMonth() + 1;
 let year = date.getFullYear();
 let day = date.getDate();

 document.getElementById('today').textContent = `${year}年${month}月${day}日`;
//--------------------------------------------------------------------------

  const button = document.getElementById('add');
  const input = document.getElementById('task');
  const ul = document.getElementById('tasks');
  const btn = document.getElementById('btn');
  const result = document.getElementById('alldone');


  button.addEventListener('click', () => {
    if (input.value === '') {
      return;
    }
    const li = document.createElement('li');
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = ''
    input.focus();
    
    li.addEventListener('click', () => {
      li.classList.toggle('correct');  //} class 付与
      btn.classList.remove('disabled', 'alldone'); //} ゴミ箱表示

      const correctAll = document.querySelectorAll('.correct');
      if (correctAll.length === 0) {
        btn.classList.add('disabled', 'alldone');
      }
    });
  });  

  
  btn.addEventListener('click', () => { //}  削除機能
    const lis = document.querySelectorAll('li');
    lis.forEach(li => {
      if (li.classList.contains('correct')) {
        li.remove();
        btn.classList.add('disabled')
      }
    });
    if (ul.children.length === 0) {
      result.classList.remove('hidden');
      btn.classList.add('alldone');
    }
  });
}
