var binding = require('pre-gyp-find')('app1');

var Hello = function()
{
	binding.hello();
}
module.exports = Hello;
console.log(binding.hello() + " from node-pre-gyp-test-app1");