class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  }






enqueue (value) {
    var arr = Object.keys(this.storage);

    if (arr.length === 0) {

      this.storage[1] = value;

    } else {
      var maximum = Math.max(...arr) + 1;

      this.storage[maximum] = value;
    }

    return value
}

dequeue () {

    var arr = Object.keys(this.storage);
    var minimum = Math.min(...arr);
    var result = this.storage[minimum];

    delete this.storage[minimum];

    return result
  };

size () {
    return Object.keys(this.storage).length;
  };





}