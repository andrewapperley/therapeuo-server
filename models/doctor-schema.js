
var Schema = require('mongoose').Schema;

var _schema = {
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    location: { type: [Number], index: { type: '2dsphere', sparse: true}},
    available: {type: Boolean, default: true},
    assisting: {type: Boolean, default: false},
    password: {type: String, required: true},
    device: {type: String}
};

module.exports = function() {

    var schema = new Schema(_schema);

    /**
     * Attach any static functions here
     */

    return schema;
}();
