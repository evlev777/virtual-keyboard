export default function mouseDown(event) {
	
	const key = event.target.closest('.key');
	
	if (!key) return
	
	key.classList.remove('active');
}