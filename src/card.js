﻿var common = require('./common.js');
var defaultValue = common.defaultValue;

Card = function(cost, name) {
    this.cost = defaultValue(cost, -1);
    this.name = defaultValue(name, '');
}

MinionCard = function(cost, name) {
	Card.call(this, cost, name);
}

MinionCard.prototype = new Card();

CardService = function() {
}

CardService.prototype.CreateCard = function(name) {
	return new Card(1, name);
}

var cardService = new CardService();

module.exports = {
    create: cardService.CreateCard
};

		