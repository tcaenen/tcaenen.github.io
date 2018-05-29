var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
	e.preventDefault();
	alert($(this).serialize());
	$.ajax({
		url: "https://formspree.io/tcaenen@gmail.com",
		method: 'POST',
		//data: $(this).serialize(),
		data: {message: "hello!"},
		dataType: 'json'
	});
	$(this).append('<p align="center"><h3>Email envoy&eacute;</h3></p>')
});
