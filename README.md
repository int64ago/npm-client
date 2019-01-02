# npm-client

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]
[![Build Status][travis-image]][travis-url]

Get npm clients.

> Order: `tnpm`, `cnpm`, `yarn`, `npm`

## Usage

```bash
npm install --save npm-client
```

```
const npmClient = require('npm-client');

console.log(npmClient());
// [ 'tnpm', 'cnpm', 'yarn', 'npm' ] // ONLY list if exist
```

## License

MIT

 [npm-image]: https://img.shields.io/npm/v/npm-client.svg?style=flat-square
 [npm-url]: https://npmjs.org/package/npm-client
 [download-image]: https://img.shields.io/npm/dm/npm-client.svg?style=flat-square
 [download-url]: https://npmjs.org/package/npm-client
 [travis-url]: https://travis-ci.org/int64ago/npm-client
 [travis-image]: https://img.shields.io/travis/int64ago/npm-client.svg?style=flat-square