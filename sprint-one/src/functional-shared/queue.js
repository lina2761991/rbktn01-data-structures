var Queue = function() {
 

  var nobj={};
  var storage = {};

  nobj.storage = storage;

  extend(nobj, queueMethods)

  return nobj;
 


};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

 queueMethods = {};

 queueMethods.enqueue = function(value) {
    var arr = Object.keys(this.storage);

    if (arr.length === 0) {

      this.storage[1] = value;

    } else {
      var maximum = Math.max(...arr) + 1;

      this.storage[maximum] = value;
    }

    return value
}

queueMethods.dequeue = function() {

    var arr = Object.keys(this.storage);
    var minimum = Math.min(...arr);
    var result = this.storage[minimum];

    delete this.storage[minimum];

    return result
  };

   queueMethods.size = function() {
    return Object.keys(this.storage).length;
  };


