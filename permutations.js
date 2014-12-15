var swap = function (arr, pos1, pos2) {
  var swapped = arr.slice();
  var temp = swapped[pos1];
  swapped[pos1] = swapped[pos2];
  swapped[pos2] = temp;
  return swapped;
};

var heapsPermute = function (A, callback, n) {
  var i;
  var j;
  if (n === undefined) {
    n = A.length;
  }
  if (n === 0) {
    callback(A);
  } else {
    for (i = 0; i < n; i += 1) {
      heapsPermute(A, callback, n - 1);
      if ((n + 1) % 2 === 1) {
        j = 0;
      } else {
        j = i;
      }
      A = swap(A, j, n - 1);
    }
  }
};

heapsPermute([1, 2, 3], console.log);
