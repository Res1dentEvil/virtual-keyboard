import keys from './keys.js';

const dataKeys = [
  [['Backquote', 'ё', 'Ё', '`', '~'],
    ['Digit1', '1', '!', '1', '!'],
    ['Digit2', '2', '\'', '2', '@'],
    ['Digit3', '3', '№', '3', '#'],
    ['Digit4', '4', ';', '4', '$'],
    ['Digit5', '5', '%', '5', '%'],
    ['Digit6', '6', ':', '6', '^'],
    ['Digit7', '7', '?', '7', '&'],
    ['Digit8', '8', '*', '8', '*'],
    ['Digit9', '9', '(', '9', '('],
    ['Digit0', '0', ')', '0', ')'],
    ['Minus', '-', '_', '-', '_'],
    ['Equal', '=', '+', '=', '+'],
    ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace']
  ],
  [
    ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
    ['KeyQ', 'й', 'Й', 'q', 'Q'],
    ['KeyW', 'ц', 'Ц', 'w', 'W'],
    ['KeyE', 'у', 'У', 'e', 'E'],
    ['KeyR', 'к', 'К', 'r', 'R'],
    ['KeyT', 'е', 'Е', 't', 'T'],
    ['KeyY', 'н', 'Н', 'y', 'Y'],
    ['KeyU', 'г', 'Г', 'u', 'U'],
    ['KeyI', 'ш', 'Ш', 'i', 'I'],
    ['KeyO', 'щ', 'Щ', 'o', 'O'],
    ['KeyP', 'з', 'З', 'p', 'P'],
    ['BracketLeft', 'х', 'Х', '[', '{'],
    ['BracketRight', 'ъ', 'Ъ', ']', '}'],
    ['Backslash', '\\', '/', '\\', '|'],
    ['Delete', 'Del', 'Del', 'Del', 'Del']
  ],
  [
    ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
    ['KeyA', 'ф', 'Ф', 'a', 'A'],
    ['KeyS', 'і', 'І', 's', 'S'],
    ['KeyD', 'в', 'В', 'd', 'D'],
    ['KeyF', 'а', 'А', 'f', 'F'],
    ['KeyG', 'п', 'П', 'g', 'G'],
    ['KeyH', 'р', 'Р', 'h', 'H'],
    ['KeyJ', 'о', 'О', 'j', 'J'],
    ['KeyK', 'л', 'Л', 'k', 'K'],
    ['KeyL', 'д', 'Д', 'l', 'L'],
    ['Semicolon', 'ж', 'Ж', ';', ':'],
    ['Quote', 'э', 'Э', '\'', '\''],
    ['Enter', 'Enter', 'Enter', 'Enter', 'Enter']
  ],
  [
    ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
    ['KeyZ', 'я', 'Я', 'z', 'Z'],
    ['KeyX', 'ч', 'Ч', 'x', 'X'],
    ['KeyC', 'с', 'С', 'c', 'C'],
    ['KeyV', 'м', 'М', 'v', 'V'],
    ['KeyB', 'и', 'И', 'b', 'B'],
    ['KeyN', 'т', 'Т', 'n', 'N'],
    ['KeyM', 'ь', 'Ь', 'm', 'M'],
    ['Comma', 'б', 'Б', '.', '<'],
    ['Period', 'ю', 'Ю', ',', '>'],
    ['Slash', '.', ',', '/', '?'],
    ['ArrowUp', '▲', '▲', '▲', '▲'],
    ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift']
  ],
  [
    ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ['MetaLeft', 'Win', 'Win', 'Win', 'Win'],
    ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['Space', ' ', ' ', ' ', ' '],
    ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
    ['ArrowLeft', '◄', '◄', '◄', '◄'],
    ['ArrowDown', '▼', '▼', '▼', '▼'],
    ['ArrowRight', '►', '►', '►', '►'],
    ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']
  ]
];

let lang = 'en';
let capsLock = false;
let cursorPoint;

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

const textarea = document.createElement('textarea');
// textarea.focus();
textarea.classList.add('textarea');
wrapper.append(textarea);

const keyBoard = document.createElement('div');
keyBoard.classList.add('keyBoard');
wrapper.append(keyBoard);

const title = document.createElement('div');
title.innerHTML = `
<div class="title">The keyboard was created in the Windows operating system</div>
<div class="title">To switch languages, combination: left ctrl + alt</div>`;
wrapper.append(title);

const init = () => {
  for (let i = 0; i < dataKeys.length; i += 1) {
    const row = document.createElement('div');
    row.classList.add('row');
    keyBoard.append(row);

    for (let j = 0; j < dataKeys[i].length; j += 1) {
      const keyItem = document.createElement('div');
      keyItem.classList.add('keyItem');
      keyItem.classList.add(dataKeys[i][j][0]);

      const keySpan = document.createElement('span');
      keySpan.classList.add('keySpan');

      if (lang === 'en') {
        keySpan.textContent = dataKeys[i][j][3];
        keySpan.classList.add(dataKeys[i][j][0]);
      } else if (lang === 'ua') {
        keySpan.textContent = dataKeys[i][j][1];
        keySpan.classList.add(dataKeys[i][j][0]);
      }

      keyItem.append(keySpan);
      row.append(keyItem);
    }
  }
  document.body.append(wrapper);
};

const sweepLang = () => {
  if (lang === 'en') lang = 'ua';
  else if (lang === 'ua') lang = 'en';
};

const changeLangAndCase = (isCaps) => {
  if (!isCaps) {
    sweepLang();
  }
  const spans = document.querySelectorAll('.keySpan');
  let currLangKeys = [];

  for (let i = 0; i < dataKeys.length; i += 1) {
    for (let j = 0; j < dataKeys[i].length; j += 1) {
      if (lang === 'en' && capsLock) {
        currLangKeys.push(dataKeys[i][j][4]);
      } else if (lang === 'en' && !capsLock) {
        currLangKeys.push(dataKeys[i][j][3]);
      } else if (lang === 'ua' && capsLock) {
        currLangKeys.push(dataKeys[i][j][2]);
      } else if (lang === 'ua' && !capsLock) {
        currLangKeys.push(dataKeys[i][j][1]);
      }
    }
  }
  spans.forEach((span, index) => {
    span.textContent = currLangKeys[index];
  });
};

const addActive = (el) => {
  el.classList.add('active');
};
const removeActive = (el) => {
  el.classList.remove('active');
};

const deleteChar = () => {
  cursorPoint = textarea.selectionStart;
  if (textarea.selectionStart !== textarea.value.length) {
    if (textarea.selectionStart !== textarea.selectionEnd) {
      let text = [...textarea.value];
      text.splice(textarea.selectionStart, textarea.selectionEnd - textarea.selectionStart);
      text = text.join('');
      textarea.value = text;
      textarea.setSelectionRange(cursorPoint, cursorPoint);
    } else {
      let text = [...textarea.value];
      text.splice(cursorPoint, 1);
      text = text.join('');
      textarea.value = text;
      textarea.setSelectionRange(cursorPoint, cursorPoint);
    }
  }
};
const backspaceChar = () => {
  cursorPoint = textarea.selectionStart;
  if (textarea.value.length !== 0 && cursorPoint !== 0) {
    if (textarea.selectionStart !== textarea.selectionEnd) {
      let text = [...textarea.value];
      text.splice(textarea.selectionStart, textarea.selectionEnd - textarea.selectionStart);
      text = text.join('');
      textarea.value = text;
      textarea.setSelectionRange(cursorPoint, cursorPoint);
    } else {
      textarea.setSelectionRange(cursorPoint, cursorPoint);
      let text = [...textarea.value];
      text.splice(cursorPoint - 1, 1);
      text = text.join('');
      textarea.value = text;
      cursorPoint -= 1;
      textarea.setSelectionRange(cursorPoint, cursorPoint);
    }
  }
};

const capsLockChar = () => {
  if (capsLock) {
    capsLock = false;
  } else {
    capsLock = true;
  }

  let isCaps = true;
  changeLangAndCase(isCaps);
};

const shiftChar = () => {
  if (capsLock) {
    capsLock = false;
  } else {
    capsLock = true;
  }
  let isCaps = true;
  changeLangAndCase(isCaps);
};

document.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('keySpan')) {
    let spanClass = e.target.closest('.keyItem').classList[1];
    let activeKey = e.target.closest('.keyItem');

    addActive(activeKey);

    if (e.target.textContent.length === 1) {
      // console.log(e.target.textContent);
      textarea.value += e.target.textContent;
    } else {
      if (spanClass === 'ShiftLeft' || spanClass === 'ShiftRight') {
        shiftChar();
      }

      switch (spanClass) {
        case 'CapsLock':
          capsLockChar();
          break;
        case 'Backspace':
          backspaceChar();
          break;
        case 'Delete':
          deleteChar();
          break;
        case 'MetaLeft':
          break;
        case 'Tab':
          textarea.value += '    ';
          break;
        case 'Space':
          textarea.value += '';
          break;
        case 'Enter':
          textarea.value += '\n';
          break;
        case 'AltLeft':
        case 'AltRight':
          break;
        case 'ControlLeft':
        case 'ControlRight':
          break;
        default:
          break;
      }
    }
  }
});

document.addEventListener('mouseup', (e) => {
  if (e.target.classList.contains('keySpan')) {
    let spanClass = e.target.closest('.keyItem').classList[1];

    removeActive(e.target.closest('.keyItem'));

    if (spanClass === 'ShiftLeft' || spanClass === 'ShiftRight') {
      if (capsLock) {
        capsLock = false;
      } else {
        capsLock = true;
      }
      let isCaps = true;
      changeLangAndCase(isCaps);
    }
  }
});

let arrOfAllKeyCode = [];
for (let i = 0; i < dataKeys.length; i += 1) {
  for (let j = 0; j < dataKeys[i].length; j += 1) {
    arrOfAllKeyCode.push(dataKeys[i][j][0]);
  }
}

document.addEventListener('keydown', (e) => {
  if (arrOfAllKeyCode.includes(e.code)) {
    // console.log(e.code)
    e.preventDefault();
    let activeKey = document.getElementsByClassName(e.code)[0];
    addActive(activeKey);

    if (capsLock && e.key.length === 1) {
      textarea.value += keys[e.code][lang].caseUp;
    } else if (!capsLock && e.key.length === 1) {
      textarea.value += keys[e.code][lang].caseDown;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      textarea.value += keys[e.code][lang].caseDown;
    }

    if (e.altKey && e.ctrlKey) {
      changeLangAndCase();
    }
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      shiftChar();
    }

    switch (e.code) {
      case 'CapsLock':
        capsLockChar();
        break;
      case 'Backspace':
        backspaceChar();
        break;
      case 'Delete':
        deleteChar();
        break;
      case 'MetaLeft':
        break;
      case 'Tab':
        textarea.value += '    ';
        break;
      case 'Space':
        textarea.value += '';
        break;
      case 'Enter':
        textarea.value += '\n';
        break;
      case 'AltLeft':
      case 'AltRight':
        break;
      case 'ControlLeft':
      case 'ControlRight':
        break;
      default:
        break;
    }
  }
});

document.addEventListener('keyup', (e) => {
  if (arrOfAllKeyCode.includes(e.code)) {
    let activeKey = document.getElementsByClassName(e.code)[0];
    removeActive(activeKey);
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      if (capsLock) {
        capsLock = false;
      } else {
        capsLock = true;
      }
      let isCaps = true;
      changeLangAndCase(isCaps);
    }
  }
});

// save in local storage when rebooting (beforeunload) (beforeunload)
function setLocalStorage() {
  localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage);

// get lang from local storage when load (load)
function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
    init();
  }
}

window.addEventListener('DOMContentLoaded', getLocalStorage);
