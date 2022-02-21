const formTag = document.getElementById('application-form');
formTag.addEventListener('submit', function(ev) {
	ev.preventDefault();

	const inputs = ev.target.querySelectorAll("input");
	let valuesObj = {};

	for (let i = 0; i < inputs.length; i++) {
		const elem = inputs[i];
		if(elem.type == 'text' || elem.type == 'checkbox')
			valuesObj[elem.name] = elem.value;
		else if (elem.checked)
				valuesObj[elem.name] = elem.value;

	}
	console.log(Object.values(valuesObj));

});