document.querySelector("div input[type='button']").addEventListener('click', (ev) => {

	const nev = document.getElementById('nev').value;
	const telefon = document.getElementById('telefon').value;
	const irszam = document.getElementById('irszam').value;
	const varos = document.getElementById('varos').value;
	const utca = document.getElementById('utca').value;
	const hazszam = document.getElementById('hazszam').value;
	const sauce = document.getElementById('sauce').value;
	const feltet = document.getElementsByName('feltet');
	const mennyiseg = document.getElementById('mennyiseg').value;
	const comment = document.getElementById('comment').value;

	let feltetek = [];

	for (let i = 0; i < feltet.length; i++) {
		const element = feltet[i];
		if (element.checked)
			feltetek.push(element.value);
	}


	let rendeles = {
	nev	:nev,
		telefon:parseInt(telefon),
		irszam:parseInt(irszam),
		varos:varos,
		utca:utca,
		hazszam:parseInt(hazszam),
		sauce:sauce,
		feltet:feltetek,
		mennyiseg:parseInt(mennyiseg),
		comment:comment
	};
	console.log(rendeles);

});