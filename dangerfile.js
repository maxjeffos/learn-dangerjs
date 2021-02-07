// this works
const { danger, warn, fail, message } = require('danger');
const fs = require('fs');

// this also works:
// import { danger, warn, fail, message } from 'danger';

// does this work to avoid conflict with Jest's `fail` in the global namespace?
//  -> this does not work - DangerJS fails at runtime saying `ReferenceError: dangerFail is not defined`
// import { danger, warn, fail as dangerFail, message } from 'danger';

// it works without any import at all - implying something really funny is going on with how DangerJS uses this file.

function shouldFail() {
  return true;
}

function main() {
  warn('fake warning from dangerjs');

  if (shouldFail) {
    fail('fake fail from dangerjs');
  }
}

// console.log('require.main');
// console.log(require.main);
// console.log('require.main.filename');
// console.log(require.main.filename);

// console.log('module:');
// console.log(module);

if (require.main.filename.endsWith('danger-runner.js')) {
  main();
}

module.exports = {
  shouldFail,
};
