# heaps-permute

[![NPM Version](https://img.shields.io/npm/v/heaps-permute.svg)](https://www.npmjs.com/package/heaps-permute)
[![Build Status](https://travis-ci.org/dsernst/heaps-permute.svg?branch=master)](https://travis-ci.org/dsernst/heaps-permute)
[![Coverage Status](https://coveralls.io/repos/dsernst/heaps-permute/badge.svg?branch=master&service=github)](https://coveralls.io/github/dsernst/heaps-permute?branch=master)

A JavaScript implementation of [Heap's efficient Permutation Algorithm](https://en.wikipedia.org/wiki/Heap%27s_algorithm).

This algorithm is "efficient", but still runs in factorial time. It takes quite a while if you run it with an array longer than 10 items. For example:

- `n = 7` will finish within 5 milliseconds (5040 permutations)
- `n = 8` will finish within 50 milliseconds (40,320 permutations)
- `n = 9` will finish within 500 milliseconds (362,880 permutations)
- `n = 10` will finish within 5000 milliseconds (328,800 permutations)

## Install

```
$ npm install heaps-permute
```

```js
var permute = require('heaps-permute');
```

## Usage

### permute(array)

This returns all the permutations for the given array.

```js
permute([1, 2, 3]);

// returns
[
  [ 1, 2, 3 ],
  [ 2, 1, 3 ],
  [ 3, 1, 2 ],
  [ 1, 3, 2 ],
  [ 2, 3, 1 ],
  [ 3, 2, 1 ]
];


permute(['a', 'b', 'c', 'd'])

// returns
[
  [ 'a', 'b', 'c', 'd' ],
  [ 'b', 'a', 'c', 'd' ],
  [ 'c', 'a', 'b', 'd' ],
  [ 'a', 'c', 'b', 'd' ],
  [ 'b', 'c', 'a', 'd' ],
  [ 'c', 'b', 'a', 'd' ],
  [ 'd', 'b', 'c', 'a' ],
  [ 'b', 'd', 'c', 'a' ],
  [ 'c', 'd', 'b', 'a' ],
  [ 'd', 'c', 'b', 'a' ],
  [ 'b', 'c', 'd', 'a' ],
  [ 'c', 'b', 'd', 'a' ],
  [ 'd', 'a', 'c', 'b' ],
  [ 'a', 'd', 'c', 'b' ],
  [ 'c', 'd', 'a', 'b' ],
  [ 'd', 'c', 'a', 'b' ],
  [ 'a', 'c', 'd', 'b' ],
  [ 'c', 'a', 'd', 'b' ],
  [ 'd', 'a', 'b', 'c' ],
  [ 'a', 'd', 'b', 'c' ],
  [ 'b', 'd', 'a', 'c' ],
  [ 'd', 'b', 'a', 'c' ],
  [ 'a', 'b', 'd', 'c' ],
  [ 'b', 'a', 'd', 'c' ]
];
```

### permute.callback(array, cb)

This method invokes `cb` each time a unique permutation is found. The new permutation will be the only argument to the callback.

```js
permute.callback([1, 2, 3], console.log);

// will print to the console:

[ 1, 2, 3 ]
[ 2, 1, 3 ]
[ 3, 1, 2 ]
[ 1, 3, 2 ]
[ 2, 3, 1 ]
[ 3, 2, 1 ]
```

Do not pass this method a third argument: it's needed for an internal counter.

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```
$ npm install
$ npm test
```

To test code coverage:

```
$ npm run cover
```
