var common = require('./common.js');
var defaultValue = common.defaultValue;

module.exports = {
    Minion: function (attack, health, name) {
        this.attack = defaultValue(attack, -1);
        this.health = defaultValue(health, -1);
        this.name = defaultValue(name, 'no name');
    }
};
