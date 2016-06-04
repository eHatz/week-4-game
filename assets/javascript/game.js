$( document ).ready(function() {

	var obiButt = $('<button>');
	obiButt.data('let', 'Obi\'s Butt');
	obiButt.text('Obi-Wan Kanobi');
	$("#buttons").append(obiButt); 
	var obiButt1 = $('<button>');
	obiButt1.data('let', 'Obi\'s Butt');
	obiButt1.text('Obi-Wan Kanobi');
	$("#buttons").append(obiButt1); 



	(obiButt).on('click', function() {
		var word = "Obi-Wan Kanobi";

		/* Step 5: append the fridgeMagnet variable to the element with an id of display */
		$("#yourChar").append(word);
		//alert('watch this')
	});
	(obiButt1).on('click', function() {
		var word = "Obi-Wan Kanobi";

		/* Step 5: append the fridgeMagnet variable to the element with an id of display */
		$("#yourChar").append(word);
		//alert('watch this')
	});
});
