var Queue = function() {

  var someInstance = {};

  var storage = {};

  // someInstance.storage = storage


  someInstance.enqueue = function(value) {

    var arr = Object.keys(storage);

    if (arr.length === 0) {

      storage[1] = value;

    } else {
      var maximum = Math.max(...arr) + 1;

      storage[maximum] = value;
    }

    return value

    
  };

  someInstance.dequeue = function() {

    var arr = Object.keys(storage);
    var minimum = Math.min(...arr);
    var result = storage[minimum];

    delete storage[minimum];

    return result
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
