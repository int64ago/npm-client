const which = require('which');

const npms = ['tnpm', 'cnpm', 'yarn', 'npm'];

module.exports = function() {
  const existNpms = [];

  for (const npm of npms) {
    try {
      if (which.sync(npm)) {
        existNpms.push(npm);
      }
    } catch (err) {
      //
    }
  }

  return existNpms;
}
