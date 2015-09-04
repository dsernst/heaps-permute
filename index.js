function swap(array, pos1, pos2) {
  var temp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = temp;
}

function heapsPermute(array, callback, n) {
  n = n || array.length; // set n default to array.length
  if (n === 1) {
    callback(array.slice());
  } else {
    var i, j;
    for (i = 1; i <= n; i += 1) {
      heapsPermute(array, callback, n - 1);
      if (n % 2) {
        j = 1;
      } else {
        j = i;
      }
      swap(array, j - 1, n - 1); // -1 accounts for zero-indexing
    }
  }
}

module.exports.callback = heapsPermute;
module.exports = function (array) {
  var permutations = [];
  heapsPermute(array, permutations.push.bind(permutations));
  return permutations;
};
