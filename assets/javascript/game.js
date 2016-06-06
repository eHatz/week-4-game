var char1 = {
	name: "Obi-Wan Kenobi",
	health: 120,
	damage: 8
}
var char2 = {
	name: "Luke Skywalker",
	health: 100,
	damage: 5
}
var char3 = {
	name: "Darth Sidious",
	health: 150,
	damage: 20
}
var char4 = {
	name: "Darth Maul",
	health: 100,
	damage: 25
}
var charStats = [char1, char2, char3, char4];
document.querySelector('#c1H').innerHTML = char1.health;
var charactersArr = $('.character');
var attacker;
var defendChar;
$( document ).ready(function() {

	$('.character').on('click', function() {
		
		for (var i = 0; i < charactersArr.length; i++) {

			if (charactersArr[i] !== this && attacker === undefined) {
				$('#enemiesAvailable').append(charactersArr[i]);
				$(charactersArr[i]).addClass('enemies');

			} else if(charactersArr[i] === this && attacker === undefined){
				$('#yourChar').append(charactersArr[i]);

			}
		}
		attacker = this;

		var enemiesArr = $('.enemies');
		$('.enemies').on('click', function() {

			for (var j = 0; j < enemiesArr.length; j++) {

				if (enemiesArr[j] === this && defendChar === undefined) {
					$('#defender').append(enemiesArr[j]);
					$(enemiesArr[j]).addClass('currentEnemy');
				}
			}
			defendChar = this;
			document.querySelector('#messages').innerHTML = "";
		});
	
	});
	var attackerHP = charStats[charactersArr.index(attacker)].health;
	$('.attackBtn').on('click', function() {
		if (defendChar !== undefined) {

		} else {
			document.querySelector('#messages').innerHTML = "No enemy has been selected";
		}
	});

});
