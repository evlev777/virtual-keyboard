import currentLang from "./currentLang.js";

function createKeyboard(lang, mode) {
	let rowArr = document.querySelectorAll(".row");
	let currObj = currentLang(lang);
	currObj[mode].forEach((el, ind) => {
	  let symbolArr = el.split(" ");
	  for (let i = 0; i < symbolArr.length; i++) {
		rowArr[ind].children[i].firstElementChild.setAttribute(
		  "data-content",
		  symbolArr[i]
		);
		rowArr[ind].children[i].firstElementChild.innerHTML = symbolArr[i];
	  }
	});
  }

  export default createKeyboard;