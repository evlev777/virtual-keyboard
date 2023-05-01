function mouseClickDown(event) {
	const key = event.target.closest(".key");
	if (!key) return;
	key.classList.add("active");
}

export default mouseClickDown;