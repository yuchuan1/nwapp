var binding = require('pre-gyp-find')('app1');

module.exports.hello = binding.hello();
console.log(binding.hello() + " from node-pre-gyp-test-app1");