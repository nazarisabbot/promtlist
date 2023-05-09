'use strict';

const list = document.querySelector('.list');

(function initApp() {
  const addNewItem = (parent) => {
    const li = parent;

    //
    function createNewElement(txt) {
      const element = document.createElement('li');
      return Object.assign(element, txt);
    }

    function insertNewElement(parent, txt) {
      parent.append(createNewElement({textContent: txt}));
    }

    function checkStr(str) {
      return str.trim() !== ' ';
    }
    //

    return function askNewText() {
      const answer = prompt('Введите текст пожалуйста');

      if (answer === null || answer === 'exit') return;

      if (answer === 'del') {
        const lastLi = document.querySelectorAll('li');
        lastLi[lastLi.length - 1].remove();
        return askNewText();
      }

      if (!checkStr(answer)) return askNewText();

      if (answer === 'clear') {
        const lastLi = document.querySelectorAll('li');
        for (let i = 0; i < lastLi.length; i++) {
          lastLi[i].remove();
        }
        return askNewText();
      }

      insertNewElement(li, answer);

      return askNewText();
    };
  };

  addNewItem(list)();
})();
