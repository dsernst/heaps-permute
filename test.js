/*global describe,it*/

var permute = require('./index.js');
var assert = require('assert');

describe('permute(array)', function () {
  it('returns all permutations of an array of items', function () {
    var input = [1, 2, 3];
    var expected = [
      [ 1, 2, 3 ],
      [ 2, 1, 3 ],
      [ 3, 1, 2 ],
      [ 1, 3, 2 ],
      [ 2, 3, 1 ],
      [ 3, 2, 1 ]
    ];

    assert.deepEqual(permute(input), expected);
  });

  it('can permute strings too', function () {
    var input = ['a', 'b', 'c', 'd'];
    var expected = [
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

    assert.deepEqual(permute(input), expected);
  });
});

describe('permute() should handle an array of length', function () {

  var speedLimits = {
    3: 1,
    4: 1,
    5: 1,
    6: 1,
    7: 5,
    8: 50,
    9: 500,
    10: 5000
  };

  var _ = require('lodash');

  _.each(speedLimits, function (limit, n) {
    var unit = limit === 1 ? ' millisecond' : ' milliseconds';

    it(n + ' within ' + limit + unit, function () {
      this.timeout(limit);
      permute(_.range(n));
    });
  });
});
