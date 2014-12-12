var bindings = require('./bindings');
var Apple = {
    type: "macintosh",
    color: "red",
    getInfo: function () {
        return this.color + ' ' + this.type + ' apple';
    }
    saySomething: function(){
    	return bindings.hello();
    }
}

module.exports = Apple;