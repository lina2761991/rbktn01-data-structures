var Queue = function() {

 	this.storage = {};
};


 Queue.prototype.enqueue = function(value) {
    var arr = Object.keys(this.storage);

    if (arr.length === 0) {

      this.storage[1] = value;

    } else {
      var maximum = Math.max(...arr) + 1;

      this.storage[maximum] = value;
    }

    return value
}

Queue.prototype.dequeue = function() {

    var arr = Object.keys(this.storage);
    var minimum = Math.min(...arr);
    var result = this.storage[minimum];

    delete this.storage[minimum];

    return result
  };

 Queue.prototype.size = function() {
    return Object.keys(this.storage).length;
  };



