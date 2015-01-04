var swap = function (array, pos1, pos2) {
  var temp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = temp;
};

var heapsPermute = function (A, output, n) {
  n = n || A.length;
  if (n === 1) {
    output(A);
  } else {
    for (var i = 1; i <= n; i += 1) {
      heapsPermute(A, output, n - 1);
      var j;
      if (n % 2) {
        j = 1;
      } else {
        j = i;
      }
      swap(A, j - 1, n - 1);
    }
  }
};

heapsPermute(['a', 'b', 'c', 'd'], function(output){console.log(output);});