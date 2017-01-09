$(window).bind('beforeunload', () => {
    let checked = [];
    $('input[type="checkbox"]').each((i, e) => {
        if (e.checked === true) {
			checked.push(e.id);
		}
		localStorage.setItem('checkedItems', JSON.stringify(checked));
    });
    return;
});

$(document).ready(() => {
	let checked = localStorage.getItem('checkedItems');
	if (checked !== null) {
		checked = JSON.parse(checked);
		checked.forEach((id) => {
			$('input[type="checkbox"]#' + id).prop('checked', true);
		});
	}
});
