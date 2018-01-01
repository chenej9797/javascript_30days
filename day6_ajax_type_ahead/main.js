const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities =[];
fetch(endpoint)
	.then(blob => blob.json())
	.then(data => cities.push(...data)) //ES6 Spread Operator
	.then(initData)

function findMatches(wordToMatch, cities) {
	const regex = new RegExp(wordToMatch, 'gi');  //正規表達式g:找出所有否則只找出一個，i:不分大小寫
	return cities.filter(place => place.city.match(regex) || place.state.match(regex))
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');  //還很不熟悉正規表達式，這個function先暫時直接複製Wes老師的code來用><
}

function displayMatches() {
	const matches = findMatches(this.value, cities);
	// console.log(matches);
	const html = matches.map(match => {
		const regex = new RegExp(this.value, 'gi');
		const cityName = match.city.replace(regex, `<span class="match_worlds">${this.value}</span>`); //將input的字串replace成有style的input字串
		const stateName = match.state.replace(regex, `<span class="match_worlds">${this.value}</span>`);
		return `
		<li>
			<span>${cityName} ${stateName}</span>
			<span>${numberWithCommas(match.population)}</span>  
		</li>`}).join('');  //先用map()將資料一個個轉換成html格式。但是因為用map()出來的格式是array，所以用join()將資料轉成string才不會有‘,’
	outputs.innerHTML = html;
}

function initData() {
	const html = cities.map(place => {
		return `
		<li>
			<span>${place.city} ${place.state}</span>
			<span>${numberWithCommas(place.population)}</span>
		</li>
		`
	}).join('');
	outputs.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const outputs = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
