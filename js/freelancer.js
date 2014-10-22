/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
	$('.page-scroll a').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});

// Floating label headings for the contact form
$(function() {
	$("body").on("input propertychange", ".floating-label-form-group", function(e) {
		$(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
	}).on("focus", ".floating-label-form-group", function() {
		$(this).addClass("floating-label-form-group-with-focus");
	}).on("blur", ".floating-label-form-group", function() {
		$(this).removeClass("floating-label-form-group-with-focus");
	});
	
	if($(window).width()<1000){
		$("#license")[0].innerText="GNU GPL3"
	}else{
		$("#license")[0].innerText="GNU GENERAL PUBLIC LICENSE Version 3";
	}
	$("[data-toggle='tooltip']").tooltip();
	
	$.get('https://code.jquery.com/jquery-1.10.2.min.js', function(data){
		alert(data);
	});
});

function selectElementContents(el) {
	if (window.getSelection && document.createRange) {
		var sel = window.getSelection();
		var range = document.createRange();
		range.selectNodeContents(el);
		sel.removeAllRanges();
		sel.addRange(range);
	} else if (document.selection && document.body.createTextRange) {
		var textRange = document.body.createTextRange();
		textRange.moveToElementText(el);
		textRange.select();
	}
}

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
	target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
	$('.navbar-toggle:visible').click();
});

$(window).resize(function(){
	if($(window).width()<1000){
		$("#license")[0].innerText="GNU GPL3"
	}else{
		$("#license")[0].innerText="GNU GENERAL PUBLIC LICENSE Version 3";
	}
});