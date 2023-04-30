export default function changeKeyboard(mode, layout, row) {
	let res = layout[mode][0].split(' ');
	for (let i = 0; i < res.length; i++) {
		row.children[i].firstElementChild.setAttribute('data-content', res[i])
	}
	return mode
}