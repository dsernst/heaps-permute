var swap = function (array, pos1, pos2) {
  var temp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = temp;
};

var heapsPermute = function (A, output, n) {
  if (n === undefined) {n = A.length;}
  if (n === 0) {
    output(A);
  } else {
    for (var i = 0; i < n; i += 1) {
      heapsPermute(A, output, n - 1);
      var j;
      if ((n + 1) % 2 === 1) {
        j = 0;
      } else {
        j = i;
      }
      swap(A, j, n - 1);
    }
  }
};

heapsPermute(['a', 'b', 'c', 'd'], function(output){console.log(output);});
