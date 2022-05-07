import keys from './keys.js';
//alert(keys.Digit1.en.caseUp)

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
    ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
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
        ['Delete', 'Del', 'Del', 'Del', 'Del'],
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
        ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
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
        ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
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
        ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ],
];


let lang = 'en';
let shift = false;
let capsLock = false;
let cursorPoint;

const wrapper = document.createElement('div')
wrapper.classList.add('wrapper')

const textarea = document.createElement('textarea')
//textarea.focus();
textarea.classList.add('textarea')
wrapper.append(textarea);

const keyBoard = document.createElement('div')
keyBoard.classList.add('keyBoard')
wrapper.append(keyBoard);


const init = () => {
    for (let i = 0; i < dataKeys.length; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        keyBoard.append(row);

        for (let j = 0; j < dataKeys[i].length; j++) {
            const keyItem = document.createElement('div')
            keyItem.classList.add('keyItem')
            keyItem.classList.add(dataKeys[i][j][0])


            const keySpan = document.createElement('span')
            keySpan.classList.add('keySpan')

            if (lang == 'en') {
                keySpan.textContent = dataKeys[i][j][3]

            } else if (lang == 'ua') {
                keySpan.textContent = dataKeys[i][j][1]
            }

            keyItem.append(keySpan);
            row.append(keyItem);
        }
    }
    document.body.append(wrapper);
}

const sweepLang = () => {
    if (lang == 'en') lang = 'ua'
    else if (lang == 'ua') lang = 'en'
}


const changeChars = (isCaps) => {
    if (!isCaps) {
        sweepLang()
    }
    const spans = document.querySelectorAll('.keySpan')
    let currLangKeys = []

    for (let i = 0; i < dataKeys.length; i++) {
        for (let j = 0; j < dataKeys[i].length; j++) {
            if (lang == 'en' && capsLock) {
                currLangKeys.push(dataKeys[i][j][4])
            } else if (lang == 'en' && !capsLock) {
                currLangKeys.push(dataKeys[i][j][3])
            } else if (lang == 'ua' && capsLock) {
                currLangKeys.push(dataKeys[i][j][2])
            } else if (lang == 'ua' && !capsLock) {
                currLangKeys.push(dataKeys[i][j][1])
            }
        }
    }
    spans.forEach((span, index) => {
        span.textContent = currLangKeys[index]
    })
}

const addActive = (el) => {
    el.classList.add('active');
  }
  const removeActive = (el) => {
    el.classList.remove('active');
  }


document.addEventListener('keydown', (e) => {
    
    e.preventDefault();
    let activeKey = document.getElementsByClassName(e.code)[0]
    addActive(activeKey)


    if (capsLock && (e.keyCode > 37 && e.keyCode < 91 && e.keyCode !== 46)) {
        textarea.value += keys[e.code][lang].caseUp
    } else if (!capsLock && (e.keyCode > 37 && e.keyCode < 91 && e.keyCode !== 46)) {
        textarea.value += keys[e.code][lang].caseDown
    }


    if (e.code === 'Delete') {
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
    }


    if (e.code === 'Backspace') {
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
    }






    if (e.altKey && e.ctrlKey) {
        changeChars()
        console.log(lang)
    }
    if (e.code === 'CapsLock') {
        capsLock ? capsLock = false : capsLock = true
        let isCaps = true
        changeChars(isCaps)
        console.log(capsLock)
    }
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        capsLock ? capsLock = false : capsLock = true
        let isCaps = true
        changeChars(isCaps)
        console.log('DOWN', e.code)
    }

    switch (e.code) {
        case 'MetaLeft':
            break;

        case 'Tab':
            textarea.value += '    ';
            break;

        case 'Space':
            textarea.value += ' ';
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

    }
}
)


document.addEventListener('keyup', (e) => {
    let activeKey = document.getElementsByClassName(e.code)[0]
    removeActive(activeKey)

    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
        capsLock ? capsLock = false : capsLock = true
        let isCaps = true
        changeChars(isCaps)
        console.log('up', e.code)
    }
}
)


window.addEventListener('DOMContentLoaded', init);
// window.addEventListener('keydown', (e) => {});
// window.addEventListener('keyup', (e) => {});

