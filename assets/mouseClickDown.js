import en from './langEn.js'
import ru from './langRu.js'
import changeKeyboard from './changeKeyBoard.js'

let mode = 'normal';

export default function mouseDown(event) {
	const key = event.target.closest('.key');
	if (!key) return
	
	key.classList.add('active');

	localStorage.setItem('lang', localStorage.getItem('lang') || 'en');
 	let layout = localStorage.getItem('lang') === 'en' ? en : ru;
	const row = document.querySelector('.row');

	
	if (key.id === 'caps') {
		if( mode != 'caps'){
			key.classList.toggle('caps-lock__active');
			mode = 'caps';
			changeKeyboard(mode, layout, row);
		} else {
			key.classList.toggle('caps-lock__active');
			mode = 'normal';
			changeKeyboard(mode, layout, row);
		}
	}
	if (key.id === 'lang') {
		if(localStorage.getItem('lang') === 'en'){
			localStorage.setItem('lang', 'ru');
			layout = localStorage.getItem('lang') === 'en' ? en : ru;
			changeKeyboard(mode, layout, row);
		} else {
			localStorage.setItem('lang', 'en');
			layout = localStorage.getItem('lang') === 'en' ? en : ru;
			changeKeyboard(mode, layout, row);
		}
	}

}
