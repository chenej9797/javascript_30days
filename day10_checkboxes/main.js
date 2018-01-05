const checkBoxes = document.querySelectorAll('input');
const resetBtn = document.querySelector('.reset');
console.log(checkBoxes);

let lastCheck; //在全域設定一個lastCheck，存取每一次的勾選項目

function handleCheck(e) {
	let inBetween = false;
	if (e.shiftKey && this.checked) {  //e.shiftKey判斷是否有按住shift
		checkBoxes.forEach(checkBox => {
			if (checkBox === this || checkBox === lastCheck) {
				inBetween = !inBetween;
			}
			// console.log(inBetween);
			if (inBetween) {
				checkBox.checked = true;  //element.checked = true來讓該物件被選取
			}
		});
	}
	lastCheck = this;
}
function resetCheckBoxes() {
	lastCheck = null;
	checkBoxes.forEach(checkBox => checkBox.checked = false);
}

checkBoxes.forEach(checkBox => checkBox.addEventListener('click', handleCheck));
resetBtn.addEventListener('click', resetCheckBoxes);
