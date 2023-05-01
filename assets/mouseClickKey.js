export default function clickKey(event) {
	const key = event.target.closest('.key')
	if (!key) return
	key.classList.remove('active')
 
 
	const textarea = document.querySelector('textarea')

	textarea.focus();
	if (/Escape|CapsLock|Shift|Control|Alt|Lang/.test(key.dataset.code)) {
		console.log(key.dataset.code)
	  return
	}
	
	let cursor = textarea.selectionStart
	
	if (/Backspace/.test(key.dataset.code)) {
	  textarea.value = textarea.value.slice(0, cursor - 1) + textarea.value.slice(cursor)
	  textarea.setSelectionRange(cursor - 1, cursor - 1)
	  return
	}
	if (/Delete/.test(key.dataset.code)) {
		textarea.value = textarea.value.slice(0, cursor ) + textarea.value.slice(cursor+1)
		textarea.setSelectionRange(cursor, cursor)
		return
	 }
 
	if (/Enter/.test(key.dataset.code)) {
	  textarea.value = textarea.value.slice(0, cursor) + '\n' + textarea.value.slice(cursor);
	  textarea.setSelectionRange(cursor + 1, cursor + 1)
	  return
	}
 
	if (/Space/.test(key.dataset.code)) {
	  textarea.value = textarea.value.slice(0, cursor) + ' ' + textarea.value.slice(cursor);
	  textarea.setSelectionRange(cursor + 1, cursor + 1)
	  return
	}
 
	if (/Tab/.test(key.dataset.code)) {
	  textarea.value = textarea.value.slice(0, cursor) + '\t' + textarea.value.slice(cursor);
	  textarea.setSelectionRange(cursor + 1, cursor + 1)
	  return
	}
 
	textarea.value = textarea.value.slice(0, cursor) + key.firstElementChild.dataset.content + textarea.value.slice(cursor)
 	textarea.setSelectionRange(cursor + 1, cursor + 1)
 }