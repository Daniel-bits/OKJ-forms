document.getElementById('generate-result').addEventListener('click', (ev) => {
	ev.preventDefault();
	let textInput = document.getElementById('i-field').value.trim();

	if (textInput.length == 0) {
		alert('Adja meg a szöveget');
	}

	var selected = document.querySelector('input[name="options"]:checked').value;

	let stringBuilder = "";
	for (let j = 0; j < textInput.length; j++) {
		if (selected == 0){
			stringBuilder += textInput[j].toLowerCase();
		}
		else {
			stringBuilder += textInput[j].toUpperCase();
		}
	}

	const outputTag = document.getElementById('output');
	outputTag.textContent = stringBuilder;
});
