var Queue = function() {

	var nobj=Object.create(queueMethods);
	var storage = {};

 	nobj.storage = storage;


  	return nobj;



  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var queueMethods = {};




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



