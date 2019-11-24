var Stack = function() {
  
  var obj = {};
  var storage = {};

  obj.storage = storage;

  extend(obj,stackMethods)

  return obj
};

var stackMethods = {};


var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

stackMethods.push = function(value) {

    var arr = Object.keys(this.storage);

    if (arr.length === 0) {

      this.storage[1] = value;

    } else {
      var maximum = Math.max(...arr) + 1;

      this.storage[maximum] = value;
    }

    return value
  };

  stackMethods.pop = function() {

    var arr = Object.keys(this.storage);
    var maximum = Math.max(...arr);

    var result = this.storage[maximum];

    delete this.storage[maximum];

    return result
  };

  stackMethods.size = function() {
    return Object.keys(this.storage).length;

  };

