var Stack = function() {




  
  var obj = Object.create(stackMethods);
  var storage = {};

  obj.storage = storage;



  return obj
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};




var stackMethods = {};



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




