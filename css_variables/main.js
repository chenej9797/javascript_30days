const inputs = document.querySelectorAll('.control input');

function handleUpdate() {
	const suffix = this.dataset.sizing || ''; //可能是px或'',sizing是在html檔案裡頭自訂的data element
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
	console.log(this.name);
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));