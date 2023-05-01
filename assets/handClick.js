import focusArea from "./focusArea.js";

function handClickDown(event) {
	focusArea();
	console.log(event);
	const curr = event;
	document.querySelector(`[data-code="${curr.code}"]`).classList.add("active");
	if (curr.code === "Tab") {
	  curr.preventDefault();
	}
	if (curr.key === "Alt") {
	  curr.preventDefault();
	}
  }


  function handClickUp(event) {
	focusArea();
	const curr = event;
	document
	  .querySelector(`[data-code="${curr.code}"]`)
	  .classList.remove("active");
  }

  export default {handClickDown , handClickUp};