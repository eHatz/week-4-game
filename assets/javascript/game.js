var char1 = {
	name: "Obi",
	health: 150,
}


$( document ).ready(function() {

	// var obiButt = $('<button>');
	// obiButt.data('let', 'Obi\'s Butt');
	// obiButt.text(' Obi-Wan Kanobi');
	// $("#buttons").append(obiButt); 

	$('#character1').on('click', function() {
		

		/* Step 5: append the fridgeMagnet variable to the element with an id of display */
		$("#yourChar").append(char1.name);
		//alert('watch this')
	});
	// (obiButt1).on('click', function() {
	// 	var word = "Obi-Wan Kanobi";

	// 	 Step 5: append the fridgeMagnet variable to the element with an id of display 
	// 	$("#yourChar").append(word);
	// 	//alert('watch this')
	// });
});
