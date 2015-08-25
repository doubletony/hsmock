var common = require('./common.js');
var card = require('./card.js');
var minion = require('./minion.js');
var readlineSync = require('readline-sync');

// Aliases
var defaultValue = common.defaultValue;
var Card = card.Card;
var Minion = minion.Minion;

var PlayerSet = function(user) {
	this.hero = null;
	this.cards = [new Card(1,1,1,'Minion 1'),
		new Card(1,3,2,'Minion 2'),
		new Card(0,4,1,'Minion 3')];
	this.battlefiled = [];
	this.mana = 0;
	this.user = user;
};


var Game = function(){
	this.playerSets = [new PlayerSet('Agana'), new PlayerSet('Bogada')];
};

PlayerSet.prototype.getCommand = function(game) {
	var actionCount = 1;
	for (var i = 0; i < this.cards.length; i++) {
		console.log(actionCount + ': Play card ' + this.cards[i].name);
		actionCount += 1;
	};
	// Show commands for minions that can attack this turn.
	for (var i = 0; i < this.battlefiled.length; i++) {
		console.log(actionCount + ': Attack by minion ' + this.battlefiled[i].name);
		actionCount += 1;
	};

    console.log(actionCount + ': Pass.');
	var command = readlineSync.question('Choose an action :');
	return command;
};

PlayerSet.prototype.exectue = function(game){
	/* body... */
	var command = this.getCommand(game);
	this.battlefiled.push(new Minion(1, 3, 'system test minion.'));
	return command != 'quit';
};

Game.prototype.isEnd = function() {
	return false;
};

Game.prototype.updateBattleField = function() {
	var battlefiled1 = this.playerSets[0].battlefiled;
	var battlefiled2 = this.playerSets[1].battlefiled;
	console.log(battlefiled1);
	console.log(battlefiled2);
};

Game.prototype.run = function(){
	var playerId = 0;
	while (!this.isEnd()) {
		var player = this.playerSets[playerId];
		console.log(player.user + "'s turn.");	
		if (!player.exectue()) {
			break;
		}
		playerId = (playerId + 1) % (this.playerSets.length);
		this.updateBattleField();
	};	
};

var aGame = new Game();

aGame.run();

