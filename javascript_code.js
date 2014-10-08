//this is an example of the adventure game
//there are a few bugs... can you find them?


var playerHealth = 10;

var bearFight = function(bearHealth, bearStrength) {
	
	alert('What\'s this? A bear???');

	while (playerHealth > 0 && bearHealth > 0) {

		//the bear will now attack
		if (!attackMissed) {
			playerHealth = playerHealth - bearStrength;
			alert('You\'ve been mauled!!! Your health is: ' + playerHealth);
		} else {
			alert('The bear swiped, but you skillfully dodged!!!');
		}

		//and the user can attack back
		var input = prompt('1: Punch \n 2: Kick');
		if (attackMissed) {
			alert('You clumsily swing at the bear, stubbing your toe in the process.' +
				'You\'re survival at this point is questionable');
		} else {
			bearHealth--;
			alert('You punch the bear on the jaw! It\'s health is: ' + bearHealth);
		}

	}

	if (playerHealth > 0) {
		alert('You defeated the horrible creature!');
	} else {
		alert('The yellowstone park ranger finds your body several weeks later.');
	}

};

var attackMissed = function() {
	if (Math.random() < 0.5) {
		return true;
	}
	return false;
}

// game flow starts here

bearFight(3, 1);