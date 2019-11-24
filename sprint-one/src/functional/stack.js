var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {

    var arr = Object.keys(storage);

    if (arr.length === 0) {

      storage[1] = value;

    } else {
      var maximum = Math.max(...arr) + 1;

      storage[maximum] = value;
    }

    return value
  };

  someInstance.pop = function() {

    var arr = Object.keys(storage);
    var maximum = Math.max(...arr);

    var result = storage[maximum];

    delete storage[maximum];

    return result
  };

  someInstance.size = function() {
    return Object.keys(storage).length;

  };

  return someInstance;
};
