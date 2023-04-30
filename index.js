import virtualKeyBoardHTML from './assets/virtual-keyboard.js'
import langRu from './assets/langRu.js';
import langEn from './assets/langEn.js'
import changeKeyboard from './assets/changeKeyBoard.js'

async function startApp(){

    localStorage.setItem('lang', localStorage.getItem('lang') || 'en');
    let layout = localStorage.getItem('lang') === 'en' ? langEn : langRu;

    const virtualKeyboard = document.querySelector('.virtual__keyboard');
    virtualKeyboard.insertAdjacentHTML('afterbegin',virtualKeyBoardHTML);

    let mode = 'normal';
    const row = document.querySelector('.row');
    const keyboard = document.querySelector('.keyboard');

    changeKeyboard(mode, layout, row);
    const textarea = document.querySelector('textarea');
    textarea.focus()
}

startApp();