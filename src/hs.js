
var PlayerSet = function(user) {
	this.hero = null;
	this.cards = [];
	this.battlefiled = [];
	this.mana = 0;
	this.user = user;
};

var Game = function(){
	this.playerSets = [new PlayerSet('Agana'), new PlayerSet('Bogada')];
};

PlayerSet.prototype.exectue = function(Game){
	/* body... */
};

Game.prototype.isEnd = function () {
	return false;
}

Game.prototype.run = function(){
	var playerId = 0;
	while (!this.isEnd()) {
		var player = this.playerSets[playerId];
		console.log(player.user + "'s turn.");	
		player.exectue();
		playerId = (playerId + 1) % (this.playerSets.length);
	};	
};

var aGame = new Game();

aGame.run();