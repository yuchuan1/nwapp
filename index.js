var binding = require('pre-gyp-find')('app1');
var Apple = require('./lib/apple');
module.exports.Apple = Apple;

console.log(binding.hello() + " from node-pre-gyp-test-app1");