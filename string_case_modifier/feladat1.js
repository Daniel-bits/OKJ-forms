document.getElementById('generate-result').addEventListener('click', (ev) => {
	ev.preventDefault();
	let textInput = document.getElementById('i-field').value.trim();

	if (textInput.length == 0) {
		alert('Adja meg a szöveget!');
	}

	const selected = document.querySelector('input[name="options"]:checked');
	if (!selected && textInput)
		alert('Válassza ki az átalakítást!')

		if (selected.value == 0){
			textInput = textInput.toLowerCase();
		}
		else {
			textInput = textInput.toUpperCase();
		}

	const outputTag = document.getElementById('output');
	outputTag.textContent = textInput;
});
