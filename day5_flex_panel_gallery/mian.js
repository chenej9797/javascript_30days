const panels = document.querySelectorAll('.panel');
function open_panel() {
	this.classList.toggle('open');
	console.log('a');
}
function active_panel(e) {
	console.log(e.propertyName);
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open_active'); //因為用trnasitionend偵測動作，用console.log會print出任何有設定trnasition的property，所以利用這個if判斷是用來讓transitionend觸發的動作只執行一次
      }
}

panels.forEach(panel => panel.addEventListener('click', open_panel));
panels.forEach(panel => panel.addEventListener('transitionend', active_panel));