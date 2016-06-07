var char1 = {
	name: "Obi-Wan Kenobi",
	health: 120,
	damage: 8,

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
	health: 180,
	damage: 25
}

document.querySelector('#character1 .HP').innerHTML = char1.health;
document.querySelector('#character2 .HP').innerHTML = char2.health;
document.querySelector('#character3 .HP').innerHTML = char3.health;
document.querySelector('#character4 .HP').innerHTML = char4.health;

var charStats = [char1, char2, char3, char4]; // array of the character stats
var charactersArr = $('.character'); //array of original character divs
var enemiesArr;

var pickAttacker; // temporarily stores value of attacker
var attackChar; // hold value of chosen character to attack with, starts undefined and when a value is entered it stops the for loop for continuing
var attackDmg = 0;

var pickDefender; // temporarily stores value of defender
var defendChar; // hold value of chosen defender, starts undefined and when a value is entered it stops the for loop for continuing
var defendDmg;

$( document ).ready(function() {

	$('.character').on('click', function() { // select a div that contains characters/images and puts it in the attacker section
		
		for (var i = 0; i < charactersArr.length; i++) { // run through the list of character divs
			if (charactersArr[i] !== this && attackChar === undefined) {
				$('#enemiesAvailable').append(charactersArr[i]); // moves every character div that was not selected
				$(charactersArr[i]).addClass('enemies'); // gives every char div that was not selected an additional class called enemies

			} else if(charactersArr[i] === this && attackChar === undefined){
				$('#yourChar').append(charactersArr[i]); // moves selected character div to enemias available to attack section
				pickAttacker = charactersArr[i];
			}
		}
		attackChar = pickAttacker; // attackChar becomes defined
		enemiesArr = $('.enemies');// array of enemy divs
	});

		 
	$('.row').on('click', ".enemies", function() { // selects the divs from enemies available to attack
		for (var j = 0; j < enemiesArr.length; j++) {  // run through the list of enemy array

			if (enemiesArr[j] === this && defendChar === undefined) {
				$('#defender').append(enemiesArr[j]); // moves selected enemy div to defender section
				$(enemiesArr[j]).addClass('currentEnemy'); // adds class to selected div called currentEnemy
				pickDefender = enemiesArr[j];
			}
		}
		defendChar = pickDefender; // defendChar becomes defined
		defendDmg = charStats[charactersArr.index(defendChar)].damage; // damage listed in object
		document.querySelector('#message1').innerHTML = ""; //resets the message typed below when a character enters the defend section
		document.querySelector('#message2').innerHTML = ""; //resets the message typed below when a character enters the defend section

	});


	$('.attackBtn').on('click', function() {

		if (defendChar === undefined){
			document.querySelector('#message1').innerHTML = "No enemy has been selected"; // if a character was not put into the defender section displays this message
			document.querySelector('#message2').innerHTML = "";
		} else{

			if (defendChar !== undefined && document.querySelector('#yourChar .character .HP').innerHTML > 0) { //if your chatacters health is above 0

				attackDmg = attackDmg + charStats[charactersArr.index(attackChar)].damage; // adds the base damage of the attacker ever time button is clicked
				document.querySelector('.currentEnemy .HP').innerHTML = document.querySelector('.currentEnemy .HP').innerHTML - attackDmg;
				document.querySelector('#message1').innerHTML = "You dealt " + attackDmg + " to the enemy";

			} 
			if (document.querySelector('.currentEnemy .HP').innerHTML > 0) {
				document.querySelector('#yourChar .character .HP').innerHTML = document.querySelector('#yourChar .character .HP').innerHTML - defendDmg;
				document.querySelector('#message2').innerHTML = "The enemy attacked you for " + defendDmg + " HP" ;

			} else if (document.querySelector('.currentEnemy .HP').innerHTML <= 0){
				document.querySelector('#message1').innerHTML = "You have defeated the enemy";
				defendChar = undefined;
				$('.currentEnemy').remove();
			}			

			if (document.querySelector('#yourChar .character .HP').innerHTML <= 0){ //if your chars health is 0 and below
				document.querySelector('#message1').innerHTML = "You were defeated. Reset to try again?";
				document.querySelector('#message2').innerHTML = "";
				$('#message2').append($('<input type="button" class="btn btn-danger attackBtn" id="reset" value="Reset">'));
				$('#reset').click(function() {
					location.reload();
				});
			}


			if ((document.querySelector('#enemiesAvailable').innerHTML).length === 4 && defendChar === undefined && attackChar !== undefined) {
				document.querySelector('#message1').innerHTML = "You Won!! Reset to play again!";
				document.querySelector('#message2').innerHTML = "";
				$('#message2').append($('<input type="button" class="btn btn-success attackBtn" id="reset" value="Reset">'));
				$('#reset').click(function() {
					location.reload();
				});

			}
		}


	});

});
