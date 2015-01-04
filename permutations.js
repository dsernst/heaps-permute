var swap = function (array, pos1, pos2) {
  var temp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = temp;
};

var heapsPermute = function (array, output, n) {
  n = n || array.length;
  if (n === 1) {
    output(array);
  } else {
    for (var i = 1; i <= n; i += 1) {
      heapsPermute(array, output, n - 1);
      var j;
      if (n % 2) {
        j = 1;
      } else {
        j = i;
      }
      swap(array, j - 1, n - 1);
    }
  }
};


// For testing:
var print = function(output){
  console.log(output);
}

heapsPermute(['a', 'b', 'c', 'd'], print);
// heapsPermute([1, 2, 3], print)
