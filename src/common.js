module.exports = {
    defaultValue: function (arg, value) {
        return typeof arg !== 'undefined' ?  arg : value;
    }
};