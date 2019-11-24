

var Stack = function() {

	this.storage = {};
};








Stack.prototype.push = function(value) {

    var arr = Object.keys(this.storage);

    if (arr.length === 0) {

      this.storage[1] = value;

    } else {
      var maximum = Math.max(...arr) + 1;

      this.storage[maximum] = value;
    }

    return value
  };

  Stack.prototype.pop = function() {

    var arr = Object.keys(this.storage);
    var maximum = Math.max(...arr);

    var result = this.storage[maximum];

    delete this.storage[maximum];

    return result
  };
Stack.prototype.size = function() {
    return Object.keys(this.storage).length;

  };




