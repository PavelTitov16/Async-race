const keyBtns = [{
    class: 'Backquote',
    eng: '`',
    rus: 'ё',
    capsEng: '~',
    capsRus: 'Ё'
},
{
    class: 'Digit1',
    eng: '1',
    rus: '1',
    capsEng: '!',
    capsRus: '!'
},
{
    class: 'Digit2',
    eng: '2',
    rus: '2',
    capsEng: '@',
    capsRus: '"'
},
{
    class: 'Digit3',
    eng: '3',
    rus: '3',
    capsEng: '#',
    capsRus: '№'
},
{
    class: 'Digit4',
    eng: '4',
    rus: '4',
    capsEng: '$',
    capsRus: ';'
},
{
    class: 'Digit5',
    eng: '5',
    rus: '5',
    capsEng: '%',
    capsRus: '%'
},
{
    class: 'Digit6',
    eng: '6',
    rus: '6',
    capsEng: '^',
    capsRus: ':'
},
{
    class: 'Digit7',
    eng: '7',
    rus: '7',
    capsEng: '&',
    capsRus: '?'
},
{
    class: 'Digit8',
    eng: '8',
    rus: '8',
    capsEng: '*',
    capsRus: '*'
},
{
    class: 'Digit9',
    eng: '9',
    rus: '9',
    capsEng: '(',
    capsRus: '('
},
{
    class: 'Digit0',
    eng: '0',
    rus: '0',
    capsEng: ')',
    capsRus: ')'
},
{
    class: 'Minus',
    eng: '-',
    rus: '-',
    capsEng: '_',
    capsRus: '_'
},
{
    class: 'Equal',
    eng: '=',
    rus: '=',
    capsEng: '+',
    capsRus: '+'
},
{
    class: 'Backspace',
    eng: 'Backspace',
    rus: 'Backspace',
    capsEng: 'Backspace',
    capsRus: 'Backspace'
},
{
    class: 'Tab',
    eng: 'Tab',
    rus: 'Tab',
    capsEng: 'Tab',
    capsRus: 'Tab'
},
{
    class: 'KeyQ',
    eng: 'q',
    rus: 'й',
    capsEng: 'Q',
    capsRus: 'Й'
},
{
    class: 'KeyW',
    eng: 'w',
    rus: 'ц',
    capsEng: 'W',
    capsRus: 'Ц'
},
{
    class: 'KeyE',
    eng: 'e',
    rus: 'у',
    capsEng: 'E',
    capsRus: 'У'
},
{
    class: 'KeyR',
    eng: 'r',
    rus: 'к',
    capsEng: 'R',
    capsRus: 'К'
},
{
    class: 'KeyT',
    eng: 't',
    rus: 'е',
    capsEng: 'T',
    capsRus: 'Е'
},
{
    class: 'KeyY',
    eng: 'y',
    rus: 'н',
    capsEng: 'Y',
    capsRus: 'Н'
},
{
    class: 'KeyU',
    eng: 'u',
    rus: 'г',
    capsEng: 'U',
    capsRus: 'Г'
},
{
    class: 'KeyI',
    eng: 'i',
    rus: 'ш',
    capsEng: 'I',
    capsRus: 'Ш'
},
{
    class: 'KeyO',
    eng: 'o',
    rus: 'щ',
    capsEng: 'O',
    capsRus: 'Щ'
},
{
    class: 'KeyP',
    eng: 'p',
    rus: 'з',
    capsEng: 'P',
    capsRus: 'З'
},
{
    class: 'BracketLeft',
    eng: '[',
    rus: 'х',
    capsEng: '{',
    capsRus: 'Х'
},
{
    class: 'BracketRight',
    eng: ']',
    rus: 'ъ',
    capsEng: '}',
    capsRus: 'Ъ'
},
{
    class: 'Backslash',
    eng: '\\',
    rus: '\\',
    capsEng: '|',
    capsRus: '|'
},
{
    class: 'Delete',
    eng: 'Del',
    rus: 'Del',
    capsEng: 'Del',
    capsRus: 'Del'
},
{
    class: 'CapsLock',
    eng: 'capslock',
    rus: 'capslock',
    capsEng: 'capslock',
    capsRus: 'capslock'
},
{
    class: 'KeyA',
    eng: 'a',
    rus: 'ф',
    capsEng: 'A',
    capsRus: 'Ф'
},
{
    class: 'KeyS',
    eng: 's',
    rus: 'ы',
    capsEng: 'S',
    capsRus: 'Ы'
},
{
    class: 'KeyD',
    eng: 'd',
    rus: 'в',
    capsEng: 'D',
    capsRus: 'В'
},
{
    class: 'KeyF',
    eng: 'f',
    rus: 'а',
    capsEng: 'F',
    capsRus: 'А'
},
{
    class: 'KeyG',
    eng: 'g',
    rus: 'п',
    capsEng: 'G',
    capsRus: 'П'
},
{
    class: 'KeyH',
    eng: 'h',
    rus: 'р',
    capsEng: 'H',
    capsRus: 'Р'
},
{
    class: 'KeyJ',
    eng: 'j',
    rus: 'о',
    capsEng: 'J',
    capsRus: 'О'
},
{
    class: 'KeyK',
    eng: 'k',
    rus: 'л',
    capsEng: 'K',
    capsRus: 'Л'
},
{
    class: 'KeyL',
    eng: 'l',
    rus: 'д',
    capsEng: 'L',
    capsRus: 'Д'
},
{
    class: 'Semicolon',
    eng: ';',
    rus: 'ж',
    capsEng: ':',
    capsRus: 'Ж'
},
{
    class: 'Quote',
    eng: `'`,
    rus: 'э',
    capsEng: `"`,
    capsRus: 'Э'
},
{
    class: 'Enter',
    eng: 'Enter',
    rus: 'Enter',
    capsEng: 'Enter',
    capsRus: 'Enter'
},
{
    class: 'ShiftLeft',
    eng: 'shift',
    rus: 'shift',
    capsEng: 'shift',
    capsRus: 'shift'
},
{
    class: 'KeyZ',
    eng: 'z',
    rus: 'я',
    capsEng: 'Z',
    capsRus: 'Я'
},
{
    class: 'KeyX',
    eng: 'x',
    rus: 'ч',
    capsEng: 'X',
    capsRus: 'Ч'
},
{
    class: 'KeyC',
    eng: 'с',
    rus: 'c',
    capsEng: 'С',
    capsRus: 'C'
},
{
    class: 'KeyV',
    eng: 'v',
    rus: 'м',
    capsEng: 'V',
    capsRus: 'М'
},
{
    class: 'KeyB',
    eng: 'b',
    rus: 'и',
    capsEng: 'B',
    capsRus: 'И'
},
{
    class: 'KeyN',
    eng: 'n',
    rus: 'т',
    capsEng: 'N',
    capsRus: 'Т'
},
{
    class: 'KeyM',
    eng: 'm',
    rus: 'ь',
    capsEng: 'M',
    capsRus: 'Ь'
},
{
    class: 'Comma',
    eng: ',',
    rus: 'б',
    capsEng: '<',
    capsRus: 'Б'
},
{
    class: 'Period',
    eng: '.',
    rus: 'ю',
    capsEng: '>',
    capsRus: 'Ю'
},
{
    class: 'Slash',
    eng: '/',
    rus: '.',
    capsEng: '?',
    capsRus: ','
},
{
    class: 'ArrowUp',
    eng: '↑',
    rus: '↑',
    capsEng: '↑',
    capsRus: '↑'
},
{
    class: 'ShiftRight',
    eng: 'shift',
    rus: 'shift',
    capsEng: 'shift',
    capsRus: 'shift'
},
{
    class: 'ControlLeft',
    eng: 'ctrl',
    rus: 'ctrl',
    capsEng: 'ctrl',
    capsRus: 'ctrl'
},
{
    class: 'MetaLeft',
    eng: 'win',
    rus: 'win',
    capsEng: 'win',
    capsRus: 'win'
},
{
    class: 'AltLeft',
    eng: 'alt',
    rus: 'alt',
    capsEng: 'alt',
    capsRus: 'alt'
},
{
    class: 'Space',
    eng: 'space',
    rus: 'space',
    capsEng: 'space',
    capsRus: 'space'
},
{
    class: 'AltRight',
    eng: 'alt',
    rus: 'alt',
    capsEng: 'alt',
    capsRus: 'alt'
},
{
    class: 'ArrowLeft',
    eng: '←',
    rus: '←',
    capsEng: '←',
    capsRus: '←'
},
{
    class: 'ArrowDown',
    eng: '↓',
    rus: '↓',
    capsEng: '↓',
    capsRus: '↓'
},
{
    class: 'ArrowRight',
    eng: '→',
    rus: '→',
    capsEng: '→',
    capsRus: '→'
},
{
    class: 'MetaRight',
    eng: 'win',
    rus: 'win',
    capsEng: 'win',
    capsRus: 'win'
},
{
    class: 'ControlRight',
    eng: 'ctrl',
    rus: 'ctrl',
    capsEng: 'ctrl',
    capsRus: 'ctrl'
},
];

export default keyBtns;