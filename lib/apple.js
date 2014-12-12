var binding = require('pre-gyp-find')('app1');
var Apple = {
	type: "macintosh",
	color: "red",
	getInfo: function () {
		return this.color + ' ' + this.type + ' apple';
	},
	saySomething: function(){
		return binding.hello();
	}
}

module.exports = Apple;