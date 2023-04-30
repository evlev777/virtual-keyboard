import virtualKeyBoardHTML from './assets/virtual-keyboard.js'

async function startApp(){


    const virtualKeyboard = document.querySelector('.virtual__keyboard');
    virtualKeyboard.insertAdjacentHTML('afterbegin',virtualKeyBoardHTML);

    const textarea = document.querySelector('textarea');
    textarea.focus()
}

startApp();