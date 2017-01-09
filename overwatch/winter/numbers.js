$(document).ready(() => {
	$('.price').each((i, e) => {
		e.innerText = e.innerText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	});
});
