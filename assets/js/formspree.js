var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: '//formspree.io/tcaenen@gmail.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json'
	});
});