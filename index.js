import virtualKeyBoardHTML from './assets/virtual-keyboard.js'
import langRu from './assets/langRu.js';
import langEn from './assets/langEn.js'
import changeKeyboard from './assets/changeKeyBoard.js'
import handClickDown  from './assets/handClick.js'
import handClickUp  from './assets/handClick.js'
import mouseClickDown from './assets/mouseClickDown.js'
import mouseClickUp from './assets/mouseClickUp.js'
import mouseClickKey from './assets/mouseClickKey.js'

/* async function startApp(){

    localStorage.setItem('lang', localStorage.getItem('lang') || 'en');
    let layout = localStorage.getItem('lang') === 'en' ? langEn : langRu;

    const virtualKeyboard = document.querySelector('.virtual__keyboard');
    virtualKeyboard.insertAdjacentHTML('afterbegin',virtualKeyBoardHTML);

    let mode = 'normal';
    const row = document.querySelector('.row');
    const keyboard = document.querySelector('.keyboard');

    keyboard.addEventListener('mousedown', mouseClickDown);
    keyboard.addEventListener('mouseup', mouseClickUp);
    keyboard.addEventListener('click', mouseClickKey);

    keyboard.addEventListener('keydown', handClick);

    changeKeyboard(mode, layout, row);
    const textarea = document.querySelector('textarea');
    textarea.focus()
}

startApp(); */

let lang = "en";
let mode = "normal";

const virtualKeyboard = document.querySelector('.virtual__keyboard');
virtualKeyboard.insertAdjacentHTML('afterbegin',virtualKeyBoardHTML);

const textarea = document.querySelector(".display");
textarea.focus();

function currentLang(lang){
    return lang === "en" ? langEn : langRu;
}


const keyboard = document.querySelector(".keys");
keyboard.addEventListener("mousedown", mouseClickDown);
keyboard.addEventListener("mouseup", mouseClickUp);
keyboard.addEventListener("click", mouseClickKey);
document.addEventListener("keydown", handClickDown);
document.addEventListener("keyup", handClickUp);



