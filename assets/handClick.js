import en from './langEn.js'
import ru from './langRu.js'
import changeKeyboard from './changeKeyboard.js'

let mode = 'normal';

export default function handClickDown(event) {

	const row = document.querySelector('.row');

	localStorage.setItem('lang', localStorage.getItem('lang') || 'en');
  let layout = localStorage.getItem('lang') === 'en' ? en : ru;

	let curr = event;

	document.querySelector(`[data-code="${curr.code}"]`).classList.add('active')
	
	if (curr.code === 'Tab') {
	  curr.preventDefault()
	}
	console.log(mode)
	if (mode !== 'caps'){
		if (curr.code === 'CapsLock') {
			mode = 'caps';
			changeKeyboard(mode, layout, row);
		} else {
			mode = 'normal';
			document.querySelector(`[data-code="${curr.code}"]`).classList.remove('active')
			changeKeyboard(mode, layout, row);
	}}
} 
