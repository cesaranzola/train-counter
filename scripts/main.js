let saveEl = document.getElementById('save-el');
let countEl = document.getElementById('count-el');
let count = 0;

function increment() {
	count += 1;
	countEl.textContent = count;
}

function resetCount() {
	count = null;
	CountClicks = 0;
	saveEl.textContent = count;
}

function save() {
	let saveEntry = ' ' + count + ' - ';
	if (count > 0) {
		saveEl.textContent += saveEntry;
		count = 0;
		countEl.textContent = count;
	}
}
