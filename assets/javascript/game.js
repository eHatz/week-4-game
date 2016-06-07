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
	health: 100,
	damage: 25
}
var charStats = [char1, char2, char3, char4]; // array of the character stats
var charactersArr = $('.character'); //array of original character divs
var enemiesArr;

var pickAttacker; // temporarily stores value of attacker
var attackChar; // hold value of chosen character to attack with, starts undefined and when a value is entered it stops the for loop for continuing
var attackHp;
var attackDmg;

var pickDefender; // temporarily stores value of defender
var defendChar; // hold value of chosen defender, starts undefined and when a value is entered it stops the for loop for continuing
var defendHp;
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
		attackHp = charStats[charactersArr.index(attackChar)].health;// health lsited in object
		attackDmg = charStats[charactersArr.index(attackChar)].damage; //damage listed in object
		enemiesArr = $('.enemies');
	});

		 // array of enemy divs
	$('.enemies').on('click', function() { // selects the divs from enemies available to attack
		for (var j = 0; j < enemiesArr.length; j++) {  // run through the list of enemy array

			if (enemiesArr[j] === this && defendChar === undefined) {
				$('#defender').append(enemiesArr[j]); // moves selected enemy div to defender section
				$(enemiesArr[j]).addClass('currentEnemy'); // adds class to selected div called currentEnemy
				pickDefender = enemiesArr[j];
			}
		}
		defendChar = pickDefender; // defendChar becomes defined
		defendHp = charStats[charactersArr.index(defendChar)].health; // health listed in object
		defendDmg = charStats[charactersArr.index(defendChar)].damage; // damage listed in object
		document.querySelector('#messages').innerHTML = ""; //resets the message typed below when a character enters the defend section
	});
		
	$('.attackBtn').on('click', function() {

		if (defendChar !== undefined && defendHp > 0) {
			defendHp = defendHp - attackDmg;
			attackHp = attackHp - defendDmg;
			document.querySelector('.currentEnemy .HP').innerHTML = defendHp;
			document.querySelector('#messages').innerHTML = "You dealt " + attackDmg + " to the enemy" + "<br />" + "The enemy attacked you for " + defendDmg + " HP" ;

			attackDmg = attackDmg + charStats[charactersArr.index(attackChar)].damage; // adds the base damage of the attacker ever time button is clicked

		} else if (defendHp <= 0){
			document.querySelector('#messages').innerHTML = "You have defeated the enemy";
			defendChar = undefined;
			$('.currentEnemy').remove();
		}else {
			document.querySelector('#messages').innerHTML = "No enemy has been selected"; // if a character was not put into the defender section displays this message
		}
	});

});
