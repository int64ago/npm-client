const test = require('ava');

const npmClient = require('./index');

test('should get npm clients', t => {
  t.deepEqual(npmClient(), ['yarn', 'npm']);
});
