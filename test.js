const test = require('ava');

const npmClient = require('./index');

test('should get npm clients', t => {
  t.deepEqual(npmClient(), ['cnpm', 'yarn', 'npm']);
});
