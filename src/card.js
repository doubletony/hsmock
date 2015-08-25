var common = require('./common.js');
var defaultValue = common.defaultValue;

module.exports = {
    Card: function (attack, health, cost, name) {
        this.attack = defaultValue(attack, -1);
        this.health = defaultValue(attack, -1);
        this.cost = defaultValue(cost, -1);
        this.name = defaultValue(name, '');
    }
};
