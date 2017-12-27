function playSounds(e) {
	const audio = document.querySelector(`audio[data_key="${e.keyCode}"]`);
	const key = document.querySelector(`.key_block[data_key="${e.keyCode}"]`);
	if (!audio) return;
	audio.currentTime = 0;
	audio.play();
	key.classList.add('playing');
	// console.log(key);
}
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //隨便挑一個object的propertyName，讓這段function只跑一次
    e.target.classList.remove('playing');
  }
const keys = Array.from(document.querySelectorAll('.key_block'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown',playSounds);